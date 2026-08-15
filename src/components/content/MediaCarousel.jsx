import { useEffect, useRef, useState } from "react"

import "../../styles/components/mediaCarousel.scss"

export default function MediaCarousel({ media, className = "", eager = false }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % media.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [media])

  useEffect(() => {
    if (!videoRef.current) return

    if (activeIndex === 0) {
      videoRef.current.play().catch(() => undefined)
    } else {
      videoRef.current.pause()
    }
  }, [activeIndex])

  if (!media?.length) return null

  return (
    <div className={`media-carousel ${className}`.trim()}>
      {media.map((item, index) =>
        item.type === "video" ? (
          <video
            className={`media-carousel__slide${
              activeIndex === index ? " is-active" : ""
            }`}
            key={item.src}
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={item.poster}
            aria-label={item.alt}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img
            className={`media-carousel__slide${
              activeIndex === index ? " is-active" : ""
            }`}
            key={item.src}
            src={item.src}
            alt={item.alt}
            loading={eager && index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        )
      )}
    </div>
  )
}
