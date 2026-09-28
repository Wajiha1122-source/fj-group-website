import { useEffect, useRef, useState } from "react"

import "./energyCursor.scss"

const INTERACTIVE_SELECTOR =
  "a, button, input, select, textarea, [role='button'], [tabindex]:not([tabindex='-1'])"

export default function EnergyCursor() {
  const cursorRef = useRef(null)
  const coreRef = useRef(null)
  const pointerRef = useRef({ x: -100, y: -100 })
  const trailRef = useRef({ x: -100, y: -100 })
  const frameRef = useRef(0)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    const updateAvailability = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches)
    }

    updateAvailability()
    finePointer.addEventListener("change", updateAvailability)
    reducedMotion.addEventListener("change", updateAvailability)

    return () => {
      finePointer.removeEventListener("change", updateAvailability)
      reducedMotion.removeEventListener("change", updateAvailability)
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("fj-energy-cursor-active")
      return undefined
    }

    document.documentElement.classList.add("fj-energy-cursor-active")

    const render = () => {
      frameRef.current = 0
      if (document.hidden) return
      const previousX = trailRef.current.x
      const previousY = trailRef.current.y
      trailRef.current.x += (pointerRef.current.x - trailRef.current.x) * 0.18
      trailRef.current.y += (pointerRef.current.y - trailRef.current.y) * 0.18

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0)`
      }

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${pointerRef.current.x}px, ${pointerRef.current.y}px, 0)`
      }

      // Keep the exact easing; stop only when floating-point positions settle.
      if (previousX !== trailRef.current.x || previousY !== trailRef.current.y) {
        frameRef.current = window.requestAnimationFrame(render)
      }
    }

    const onPointerMove = (event) => {
      pointerRef.current = { x: event.clientX, y: event.clientY }
      setHovering(Boolean(event.target.closest?.(INTERACTIVE_SELECTOR)))
      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(render)
    }

    const onPointerDown = () => setPressed(true)
    const onPointerUp = () => setPressed(false)
    const onPointerLeave = () => {
      cursorRef.current?.classList.add("is-hidden")
      coreRef.current?.classList.add("is-hidden")
    }
    const onPointerEnter = () => {
      cursorRef.current?.classList.remove("is-hidden")
      coreRef.current?.classList.remove("is-hidden")
    }
    const onVisibilityChange = () => {
      window.cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
      if (!document.hidden) frameRef.current = window.requestAnimationFrame(render)
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("pointerdown", onPointerDown, { passive: true })
    window.addEventListener("pointerup", onPointerUp, { passive: true })
    document.documentElement.addEventListener("mouseleave", onPointerLeave)
    document.documentElement.addEventListener("mouseenter", onPointerEnter)
    document.addEventListener("visibilitychange", onVisibilityChange)
    frameRef.current = window.requestAnimationFrame(render)

    return () => {
      document.documentElement.classList.remove("fj-energy-cursor-active")
      window.cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointerup", onPointerUp)
      document.documentElement.removeEventListener("mouseleave", onPointerLeave)
      document.documentElement.removeEventListener("mouseenter", onPointerEnter)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={`fj-energy-cursor${hovering ? " is-hovering" : ""}${pressed ? " is-pressed" : ""}`}
        aria-hidden="true"
      >
        <span className="fj-energy-cursor__orbit" />
        <span className="fj-energy-cursor__orbit fj-energy-cursor__orbit--reverse" />
      </div>
      <div
        ref={coreRef}
        className={`fj-energy-cursor-core${hovering ? " is-hovering" : ""}${pressed ? " is-pressed" : ""}`}
        aria-hidden="true"
      >
        <span />
      </div>
    </>
  )
}
