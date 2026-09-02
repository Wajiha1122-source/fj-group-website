import { lazy, Suspense, useEffect, useState } from "react"

import "./siteLauncher.scss"

const SolarAssemblyScene = lazy(() => import("./SolarAssemblyScene.jsx"))

const STORAGE_KEY = "fj-group-site-intro-seen-v5"
const BRAND_DURATION = 6200
const SOLAR_DURATION = 6800
const INTRO_DURATION = BRAND_DURATION + SOLAR_DURATION

export default function SiteLauncher() {
  const [phase, setPhase] = useState("brand")
  const [visible, setVisible] = useState(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    return !reducedMotion && !sessionStorage.getItem(STORAGE_KEY)
  })

  useEffect(() => {
    if (!visible) return undefined

    document.body.classList.add("fj-site-launching")
    sessionStorage.setItem(STORAGE_KEY, "true")

    const solarTimer = window.setTimeout(() => setPhase("solar"), BRAND_DURATION)
    const finishTimer = window.setTimeout(() => {
      setPhase("leaving")
      window.setTimeout(() => {
        setVisible(false)
        document.body.classList.remove("fj-site-launching")
      }, 850)
    }, INTRO_DURATION)

    return () => {
      window.clearTimeout(solarTimer)
      window.clearTimeout(finishTimer)
      document.body.classList.remove("fj-site-launching")
    }
  }, [visible])

  const skipIntro = () => {
    setPhase("leaving")
    window.setTimeout(() => {
      setVisible(false)
      document.body.classList.remove("fj-site-launching")
    }, 500)
  }

  if (!visible) return null

  return (
    <div className={`fj-launcher fj-launcher--${phase}`}>
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

      {(phase === "solar" || phase === "leaving") && (
        <div className="fj-solar-intro">
          <div className="fj-solar-intro__grid" />
          <div className="fj-solar-intro__halo" />
          <div className="fj-solar-intro__canvas" aria-hidden="true">
            <Suspense fallback={<div className="fj-solar-intro__fallback" />}>
              <SolarAssemblyScene />
            </Suspense>
          </div>

          <div className="fj-solar-intro__copy">
            <span>Precision in every layer</span>
            <h2>Engineering sunlight<br />into progress.</h2>
            <p>Water <i /> Energy <i /> Industry</p>
          </div>

          <div className="fj-solar-intro__progress">
            <span />
          </div>
        </div>
      )}

      <button className="fj-launcher__skip" type="button" onClick={skipIntro}>
        Skip intro
      </button>
    </div>
  )
}
