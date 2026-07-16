import { useEffect, useState } from "react"
import { FiArrowDown, FiX } from "react-icons/fi"

import { latestNews } from "../../data/newsData"
import "../../styles/components/latestNewsNotification.scss"

const DISMISS_KEY =
  `fj-news-notification-v2-${latestNews.number}-${latestNews.title}`

export default function LatestNewsNotification() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return undefined

    let timer

    const showNotification = () => {
      timer = window.setTimeout(() => setVisible(true), 1100)
    }

    if (document.body.classList.contains("fj-site-launching")) {
      const observer = new MutationObserver(() => {
        if (!document.body.classList.contains("fj-site-launching")) {
          observer.disconnect()
          showNotification()
        }
      })

      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"]
      })

      return () => {
        observer.disconnect()
        window.clearTimeout(timer)
      }
    }

    showNotification()
    return () => window.clearTimeout(timer)
  }, [])

  const closeNotification = () => {
    setClosing(true)
    sessionStorage.setItem(DISMISS_KEY, "true")
    window.setTimeout(() => setVisible(false), 360)
  }

  const scrollToNews = () => {
    document.getElementById("latest-news")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
    closeNotification()
  }

  if (!visible) return null

  return (
    <aside
      className={`latest-news-notification ${closing ? "is-closing" : ""}`}
      aria-label="Latest FJ Group news"
    >
      <div className="latest-news-notification__signal" />

      <div className="latest-news-notification__image">
        <img src={latestNews.image} alt="" width="1280" height="720" decoding="async" />
        <div className="latest-news-notification__shade" />
        <div className="latest-news-notification__sweep" />
      </div>

      <button
        className="latest-news-notification__close"
        type="button"
        onClick={closeNotification}
        aria-label="Close latest news notification"
      >
        <FiX />
      </button>

      <div className="latest-news-notification__body">
        <div className="latest-news-notification__eyebrow">
          <span />
          New update
        </div>
        <h3>{latestNews.title}</h3>
        <p>{latestNews.desc}</p>

        <button
          className="latest-news-notification__action"
          type="button"
          onClick={scrollToNews}
        >
          Read more
          <FiArrowDown />
        </button>
      </div>
    </aside>
  )
}
