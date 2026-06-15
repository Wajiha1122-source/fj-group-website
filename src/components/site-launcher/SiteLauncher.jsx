import { useEffect, useState } from "react"

import "./siteLauncher.scss"

const STORAGE_KEY = "fj-group-site-intro-seen-v2"
const INTRO_DURATION = 4200

export default function SiteLauncher() {
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

    const timer = window.setTimeout(() => {
      setVisible(false)
      document.body.classList.remove("fj-site-launching")
    }, INTRO_DURATION)

    return () => {
      window.clearTimeout(timer)
      document.body.classList.remove("fj-site-launching")
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className="fj-launcher" aria-hidden="true">
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
  )
}
