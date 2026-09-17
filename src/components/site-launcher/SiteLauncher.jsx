import { Component, lazy, Suspense, useCallback, useEffect, useRef, useState } from "react"

import "./siteLauncher.scss"

const loadScene = () => import("./SolarAssemblyScene.jsx")
const SolarAssemblyScene = lazy(loadScene)

class SceneBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch() { this.props.onError() }
  render() { return this.state.failed ? null : this.props.children }
}

const STORAGE_KEY = "fj-group-site-intro-seen-v8"
const BRAND_DURATION = 6200

export default function SiteLauncher() {
  const [phase, setPhase] = useState("brand")
  const [exiting, setExiting] = useState(false)
  const [sceneReady, setSceneReady] = useState(false)
  const progressRef = useRef(null)
  const handleProgress = useCallback((progress) => {
    if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
  }, [])
  const [visible, setVisible] = useState(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    try {
      return !reducedMotion && !sessionStorage.getItem(STORAGE_KEY)
    } catch {
      return !reducedMotion
    }
  })

  const skipIntro = useCallback(() => setExiting(true), [])
  const handleReady = useCallback(() => setSceneReady(true), [])

  useEffect(() => {
    if (!visible || exiting) return undefined

    document.body.classList.add("fj-site-launching")
    try { sessionStorage.setItem(STORAGE_KEY, "true") } catch { /* Storage may be disabled. */ }
    // Download the assembly renderer while the brand animation runs.
    loadScene().catch(skipIntro)

    const solarTimer = window.setTimeout(() => setPhase("solar"), BRAND_DURATION)

    return () => {
      window.clearTimeout(solarTimer)
      document.body.classList.remove("fj-site-launching")
    }
  }, [visible, exiting, skipIntro])

  useEffect(() => {
    if (!visible) return undefined
    if (exiting) {
      const timeout = window.setTimeout(() => setVisible(false), 850)
      return () => window.clearTimeout(timeout)
    }
    // Bound loading only. Once rendering starts, the scene owns completion.
    if (phase === "solar" && !sceneReady) {
      const timeout = window.setTimeout(skipIntro, 30000)
      return () => window.clearTimeout(timeout)
    }
    return undefined
  }, [phase, visible, exiting, sceneReady, skipIntro])

  if (!visible) return null

  return (
    <div className={`fj-launcher fj-launcher--${exiting ? "leaving" : phase}`}>
      {phase === "brand" && (
        <div className="fj-launcher__brand" aria-hidden="true">
          <div className="fj-launcher__grid" />
          <div className="fj-launcher__scan" />

          <div className="fj-launcher__stage">
            <div className="fj-launcher__orbit">
              <span />
              <span />
              <span />
            </div>

            <div className="fj-launcher__label">Engineering progress</div>

            <div className="fj-launcher__name">
              <span>FJ</span>
              <span>GROUP</span>
            </div>

            <div className="fj-launcher__status">
              <span className="fj-launcher__status-dot" />
              <span>Building a sustainable future</span>
            </div>
          </div>

          <div className="fj-launcher__reveal fj-launcher__reveal--top" />
          <div className="fj-launcher__reveal fj-launcher__reveal--bottom" />
        </div>
      )}

      {phase === "solar" && (
        <div className={`fj-solar-intro${sceneReady ? " is-ready" : " is-loading"}`}>
          <div className="fj-solar-intro__grid" />
          <div className="fj-solar-intro__halo" />
          <div className="fj-solar-intro__canvas" aria-hidden="true">
            {!sceneReady && <div className="fj-solar-intro__fallback" />}
            <SceneBoundary onError={skipIntro}>
              <Suspense fallback={null}>
                <SolarAssemblyScene onReady={handleReady} onComplete={skipIntro} onError={skipIntro} onProgress={handleProgress} />
              </Suspense>
            </SceneBoundary>
          </div>

          <div className="fj-solar-intro__copy">
            <span>FJ GROUP · SOLAR ENGINEERING</span>
            <h2>Pure energy.<br />Precisely engineered.</h2>
            <p>Water <i /> Energy <i /> Industry</p>
          </div>

          <div className="fj-solar-intro__progress">
            <span ref={progressRef} />
          </div>
        </div>
      )}

      <button className="fj-launcher__skip" type="button" onClick={skipIntro}>
        Skip intro
      </button>
    </div>
  )
}
