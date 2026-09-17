import { useEffect, useRef } from "react"
import { advanceAssemblyTime, ASSEMBLY_END } from "./assemblyTiming.js"

const clamp = (n) => Math.max(0, Math.min(1, n))
const cells = Array.from({ length: 96 }, (_, i) => ({
  x: 115 + (i % 12) * 39.2,
  y: 124 + Math.floor(i / 12) * 33.5,
  delay: 0.8 + Math.floor(i / 12) * 0.17 + (i % 12) * 0.035,
  dx: i % 12 < 6 ? -75 : 75,
  dy: (Math.floor(i / 12) - 3.5) * 24,
}))

export default function SolarAssemblyScene({ onReady, onComplete, onProgress }) {
  const scene = useRef(null)

  useEffect(() => {
    const parts = [...scene.current.querySelectorAll('[data-part]')]
    const sweep = scene.current.querySelector('[data-sweep]')
    let time = 0
    let previous = null
    let frame
    let ready = false
    let completed = false
    const tick = (now) => {
      const delta = previous === null ? 0 : (now - previous) / 1000
      previous = now
      if (!document.hidden) {
        if (!ready) { ready = true; onReady() }
        time = advanceAssemblyTime(time, delta)
        for (const part of parts) {
          const progress = clamp((time - Number(part.dataset.delay)) / 1.1)
          const remaining = Math.pow(1 - progress, 3)
          part.setAttribute('transform', `translate(${Number(part.dataset.dx) * remaining} ${Number(part.dataset.dy) * remaining})`)
          part.style.opacity = String(clamp(progress * 3))
        }
        const shine = clamp((time - 4.8) / 1.3)
        sweep.setAttribute('transform', `translate(${shine * 720 - 100} 0)`)
        sweep.style.opacity = String(Math.sin(shine * Math.PI) * 0.65)
        onProgress(time / ASSEMBLY_END)
        if (time >= ASSEMBLY_END && !completed) {
          completed = true
          onComplete()
          return
        }
      }
      frame = requestAnimationFrame(tick)
    }
    const resetClock = () => { previous = null }
    document.addEventListener('visibilitychange', resetClock)
    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('visibilitychange', resetClock)
    }
  }, [onReady, onComplete, onProgress])

  const part = (delay, dx, dy) => ({
    'data-part': true, 'data-delay': delay, 'data-dx': dx, 'data-dy': dy,
    style: { opacity: 0 }, transform: `translate(${dx} ${dy})`,
  })

  return (
    <svg ref={scene} className="fj-solar-assembly" viewBox="0 0 700 500" aria-hidden="true">
      <defs>
        <linearGradient id="assembly-cell" x2="0.8" y2="1">
          <stop stopColor="#1b242e" /><stop offset="0.45" stopColor="#060a10" /><stop offset="1" stopColor="#111a26" />
        </linearGradient>
        <linearGradient id="assembly-metal" x2="0.3" y2="1">
          <stop stopColor="#87919b" /><stop offset="0.16" stopColor="#2b333c" /><stop offset="0.38" stopColor="#090e14" /><stop offset="0.55" stopColor="#1c252f" /><stop offset="0.85" stopColor="#586575" /><stop offset="1" stopColor="#151c25" />
        </linearGradient>
        <linearGradient id="assembly-shine">
          <stop stopColor="#c9f7ff" stopOpacity="0" /><stop offset="0.5" stopColor="#c9f7ff" stopOpacity="0.8" /><stop offset="1" stopColor="#c9f7ff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="assembly-window"><rect x="108" y="116" width="484" height="284" rx="4" /></clipPath>
        <pattern id="assembly-fingers" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 0H6" stroke="#adc7db" strokeOpacity="0.22" strokeWidth="0.45" />
        </pattern>
        <linearGradient id="assembly-glass" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#d9f0ff" stopOpacity="0.17" /><stop offset="0.48" stopColor="#d9f0ff" stopOpacity="0.02" /><stop offset="0.49" stopColor="#fff" stopOpacity="0.09" /><stop offset="0.75" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="350" cy="441" rx="220" ry="18" fill="#000" opacity="0.12" />
      <ellipse cx="350" cy="441" rx="175" ry="9" fill="#000" opacity="0.2" />
      <g className="fj-solar-assembly__product">
      <g {...part(0.15, 0, 130)}>
        <path d="M99 403H602L610 415H107Z" fill="#263645" />
        <path d="M601 108L610 120V415L601 404Z" fill="#536474" />
        <rect x="99" y="107" width="502" height="302" rx="3" fill="#030b13" stroke="#718496" strokeWidth="1" />
      </g>
      {cells.map((cell, index) => (
        <g key={index} {...part(cell.delay, cell.dx, cell.dy)}>
          <path d={`M${cell.x + 2} ${cell.y}h31l2 2v26l-2 2h-31l-2-2v-26Z`} fill="url(#assembly-cell)" stroke="#718ba0" strokeOpacity="0.22" strokeWidth="0.35" />
          <rect x={cell.x + 3} y={cell.y + 3} width="29" height="24" fill="url(#assembly-fingers)" />
          {[9, 18, 27].map((x) => <path key={x} d={`M${cell.x + x} ${cell.y + 2}v26`} stroke="#c4d5e0" strokeOpacity="0.2" strokeWidth="0.35" />)}
        </g>
      ))}
      <rect {...part(3.2, 0, -120)} x="101" y="109" width="498" height="7" rx="1" fill="url(#assembly-metal)" />
      <rect {...part(3.4, 0, 120)} x="101" y="400" width="498" height="7" rx="1" fill="url(#assembly-metal)" />
      <rect {...part(3.6, -150, 0)} x="101" y="112" width="7" height="292" rx="1" fill="url(#assembly-metal)" />
      <rect {...part(3.8, 150, 0)} x="592" y="112" width="7" height="292" rx="1" fill="url(#assembly-metal)" />
      <g clipPath="url(#assembly-window)">
        <rect {...part(4.2, 0, -24)} x="108" y="116" width="484" height="284" fill="url(#assembly-glass)" />
        <rect data-sweep x="0" y="116" width="100" height="284" fill="url(#assembly-shine)" opacity="0" />
      </g>
      <g {...part(4.3, 0, 0)} fill="none" stroke="#e4f2fc" strokeWidth="0.65" strokeOpacity="0.7">
        <path d="M99 105H601M97 108V398" />
        <path d="M110 117H590V399" strokeOpacity="0.25" />
      </g>
      </g>
    </svg>
  )
}
