import { useEffect, useState } from "react"
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

import { newsData } from "../../data/newsData"
import "../../styles/components/latestNewsNotification.scss"

const featuredNews = newsData.slice(0, 3)
const DISMISS_KEY = `fj-news-notification-v3-${featuredNews
  .map((item) => item.slug)
  .join("-")}`

export default function LatestNewsNotification() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const activeNews = featuredNews[activeIndex]

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

  useEffect(() => {
    if (!visible || paused || featuredNews.length < 2) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredNews.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [paused, visible])

  const closeNotification = () => {
    setClosing(true)
    sessionStorage.setItem(DISMISS_KEY, "true")
    window.setTimeout(() => setVisible(false), 360)
  }

  const openNews = () => {
    closeNotification()
    navigate(`/media/news/${activeNews.slug}`)
  }

  const showPrevious = () => {
    setActiveIndex((current) =>
      (current - 1 + featuredNews.length) % featuredNews.length
    )
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % featuredNews.length)
  }

  if (!visible) return null

  return (
    <aside
      className={`latest-news-notification ${closing ? "is-closing" : ""}`}
      aria-label="Latest FJ Group news"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <div className="latest-news-notification__signal" />

      <div className="latest-news-notification__image" key={`image-${activeNews.slug}`}>
        <img src={activeNews.image} alt="" width="1280" height="720" decoding="async" />
        <div className="latest-news-notification__shade" />
        <div className="latest-news-notification__sweep" />
      </div>

      <div className="latest-news-notification__navigation" aria-label="News slider controls">
        <button type="button" onClick={showPrevious} aria-label="Show previous news item">
          <FiChevronLeft />
        </button>
        <span aria-live="polite">{activeIndex + 1} / {featuredNews.length}</span>
        <button type="button" onClick={showNext} aria-label="Show next news item">
          <FiChevronRight />
        </button>
      </div>

      <button
        className="latest-news-notification__close"
        type="button"
        onClick={closeNotification}
        aria-label="Close latest news notification"
      >
        <FiX />
      </button>

      <div className="latest-news-notification__body" key={`copy-${activeNews.slug}`}>
        <div className="latest-news-notification__eyebrow">
          <span />
          New update
        </div>
        <h3>{activeNews.title}</h3>
        <p>{activeNews.desc}</p>

        <button
          className="latest-news-notification__action"
          type="button"
          onClick={openNews}
          aria-label={`Read ${activeNews.title}`}
        >
          Read more
          <FiArrowRight />
        </button>
      </div>

      <div className="latest-news-notification__dots" aria-label="Choose news item">
        {featuredNews.map((item, index) => (
          <button
            key={item.slug}
            className={index === activeIndex ? "is-active" : ""}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show news item ${index + 1}: ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </aside>
  )
}
