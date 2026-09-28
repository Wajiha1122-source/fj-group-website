import { useEffect, useRef } from "react"

// Keep the original video element/layout, but do not fetch distant media.
export default function ViewportVideo({ src, ...props }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    let nearby = false
    let disposed = false
    const syncPlayback = () => {
      if (disposed) return
      if (nearby && !document.hidden) {
        if (!video.getAttribute("src")) {
          video.src = src
          video.load()
        }
        if (video.paused) video.play().catch(() => {
          // Browser autoplay restrictions must not create unhandled rejections.
        })
      } else {
        video.pause()
      }
    }
    const observer = typeof IntersectionObserver === "undefined" ? null :
      new IntersectionObserver(([entry]) => {
        nearby = entry.isIntersecting
        syncPlayback()
      }, { rootMargin: "900px 0px" })

    if (observer) observer.observe(video)
    else { nearby = true; syncPlayback() }
    document.addEventListener("visibilitychange", syncPlayback)
    // Retry after buffering, including browsers which initially deny playback.
    video.addEventListener("canplay", syncPlayback)
    return () => {
      disposed = true
      observer?.disconnect()
      document.removeEventListener("visibilitychange", syncPlayback)
      video.removeEventListener("canplay", syncPlayback)
      video.pause()
      video.removeAttribute("src")
      video.load()
    }
  }, [src])

  return <video {...props} ref={videoRef} muted loop playsInline preload="none" />
}
