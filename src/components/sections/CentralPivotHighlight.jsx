import { useEffect, useRef } from "react"
import { FiArrowDownRight } from "react-icons/fi"
import "../../styles/components/centralPivotHighlight.scss"

export default function CentralPivotHighlight({ children, className = "fj-pivot-discover", label }) {
  const pendingScroll = useRef(null)
  useEffect(() => () => pendingScroll.current?.(), [])

  const explorePivot = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    pendingScroll.current?.()

    const scrollToSection = () => {
      const section = document.getElementById("central-pivot")
      if (!section) return false
      const navigationHeight = document.querySelector(".navbar-main")?.getBoundingClientRect().height || 132
      section.style.scrollMarginTop = `${navigationHeight + 16}px`
      section.focus({ preventScroll: true })
      section.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        block: "start",
      })
      return true
    }

    if (scrollToSection()) return
    // The homepage section is lazy-loaded: honor an early click when it mounts.
    const observer = new MutationObserver(() => {
      if (scrollToSection()) pendingScroll.current?.()
    })
    const timeout = window.setTimeout(() => pendingScroll.current?.(), 10000)
    pendingScroll.current = () => {
      observer.disconnect()
      window.clearTimeout(timeout)
      pendingScroll.current = null
    }
    observer.observe(document.body, { childList: true, subtree: true })
  }

  return (
    <a className={`fj-pivot-link ${className}`} href="#central-pivot" onClick={explorePivot} aria-label={label}>
      {children || <><span>Discover our irrigation solutions</span><FiArrowDownRight aria-hidden="true" /></>}
    </a>
  )
}
