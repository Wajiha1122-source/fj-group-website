import { useEffect, useRef } from "react"

// Keep the original video element/layout, but do not fetch distant media.
export default function ViewportVideo({ src, rootMargin = "900px 0px", ...props }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    let nearby = false
    let disposed = false
    let pausedByUser = false
    const syncPlayback = () => {
      if (disposed) return
      if (nearby && !document.hidden) {
        if (!video.getAttribute("src")) {
          video.src = src
          video.load()
        }
        if (video.paused && !pausedByUser) video.play().catch(() => {
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
      }, { rootMargin })

    const onPause = () => {
      if (nearby && !document.hidden && !disposed) pausedByUser = true
    }
    const onPlay = () => { pausedByUser = false }
    video.addEventListener("pause", onPause)
    video.addEventListener("play", onPlay)

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
      video.removeEventListener("pause", onPause)
      video.removeEventListener("play", onPlay)
      video.pause()
      video.removeAttribute("src")
      video.load()
    }
  }, [src, rootMargin])

  return <video {...props} ref={videoRef} muted loop playsInline preload="none" />
}
