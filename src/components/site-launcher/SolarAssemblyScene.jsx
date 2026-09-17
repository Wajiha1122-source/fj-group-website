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
          <stop stopColor="#24689b" /><stop offset="1" stopColor="#061d39" />
        </linearGradient>
        <linearGradient id="assembly-metal" x2="0.3" y2="1">
          <stop stopColor="#e0edf5" /><stop offset="0.5" stopColor="#6f899e" /><stop offset="1" stopColor="#b9cedc" />
        </linearGradient>
        <linearGradient id="assembly-shine">
          <stop stopColor="#c9f7ff" stopOpacity="0" /><stop offset="0.5" stopColor="#c9f7ff" stopOpacity="0.8" /><stop offset="1" stopColor="#c9f7ff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="assembly-window"><rect x="108" y="116" width="484" height="284" rx="4" /></clipPath>
      </defs>
      <ellipse cx="350" cy="436" rx="225" ry="15" fill="#000" opacity="0.22" />
      <g {...part(0.15, 0, 130)}>
        <rect x="99" y="107" width="502" height="302" rx="8" fill="#06172a" stroke="#45647e" strokeWidth="3" />
      </g>
      {cells.map((cell, index) => (
        <g key={index} {...part(cell.delay, cell.dx, cell.dy)}>
          <rect x={cell.x} y={cell.y} width="54" height="49" rx="3" fill="url(#assembly-cell)" stroke="#5593b7" strokeWidth="0.8" />
          {[13, 27, 41].map((x) => <path key={x} d={`M${cell.x + x} ${cell.y + 3}v43`} stroke="#99d6ed" strokeOpacity="0.55" strokeWidth="0.7" />)}
        </g>
      ))}
      <rect {...part(3.2, 0, -120)} x="96" y="104" width="508" height="12" rx="3" fill="url(#assembly-metal)" />
      <rect {...part(3.4, 0, 120)} x="96" y="400" width="508" height="12" rx="3" fill="url(#assembly-metal)" />
      <rect {...part(3.6, -150, 0)} x="96" y="112" width="12" height="292" rx="3" fill="url(#assembly-metal)" />
      <rect {...part(3.8, 150, 0)} x="592" y="112" width="12" height="292" rx="3" fill="url(#assembly-metal)" />
      <g clipPath="url(#assembly-window)">
        <rect data-sweep x="0" y="116" width="100" height="284" fill="url(#assembly-shine)" opacity="0" />
      </g>
    </svg>
  )
}
