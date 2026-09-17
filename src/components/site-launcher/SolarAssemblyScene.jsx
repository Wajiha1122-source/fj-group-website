import { useEffect, useRef } from "react"
import { advanceAssemblyTime, ASSEMBLY_END } from "./assemblyTiming.js"

const clamp = (n) => Math.max(0, Math.min(1, n))
const cells = Array.from({ length: 40 }, (_, i) => ({
  x: 116 + (i % 8) * 59,
  y: 125 + Math.floor(i / 8) * 54,
  delay: 1.1 + i * 0.045,
  dx: i % 8 < 4 ? -170 : 170,
  dy: (Math.floor(i / 8) - 2) * 60,
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
          <stop stopColor="#152c47" /><stop offset="0.45" stopColor="#081421" /><stop offset="1" stopColor="#10263d" />
        </linearGradient>
        <linearGradient id="assembly-metal" x2="0.3" y2="1">
          <stop stopColor="#eff5f9" /><stop offset="0.16" stopColor="#9cabb8" /><stop offset="0.38" stopColor="#344353" /><stop offset="0.55" stopColor="#637788" /><stop offset="0.85" stopColor="#c2ced7" /><stop offset="1" stopColor="#465868" />
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
          <path d={`M${cell.x + 4} ${cell.y}h46l4 4v41l-4 4h-46l-4-4v-41Z`} fill="url(#assembly-cell)" stroke="#718ba0" strokeOpacity="0.5" strokeWidth="0.45" />
          <rect x={cell.x + 3} y={cell.y + 3} width="48" height="43" fill="url(#assembly-fingers)" />
          {[10, 21, 33, 44].map((x) => <path key={x} d={`M${cell.x + x} ${cell.y + 2}v45`} stroke="#c4d5e0" strokeOpacity="0.4" strokeWidth="0.55" />)}
        </g>
      ))}
      <rect {...part(3.2, 0, -120)} x="96" y="104" width="508" height="12" rx="3" fill="url(#assembly-metal)" />
      <rect {...part(3.4, 0, 120)} x="96" y="400" width="508" height="12" rx="3" fill="url(#assembly-metal)" />
      <rect {...part(3.6, -150, 0)} x="96" y="112" width="12" height="292" rx="3" fill="url(#assembly-metal)" />
      <rect {...part(3.8, 150, 0)} x="592" y="112" width="12" height="292" rx="3" fill="url(#assembly-metal)" />
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
