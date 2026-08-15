import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi"

import MediaCarousel from "./MediaCarousel"
import "../../styles/components/editorialDetail.scss"

export default function EditorialDetail({
  content,
  backTo,
  backLabel,
  typeLabel,
  variant = "news",
  related = []
}) {
  const articleRef = useRef(null)

  useEffect(() => {
    const elements = articleRef.current?.querySelectorAll("[data-reveal]")
    if (!elements?.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: "0px 0px -55px" }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={articleRef}
      className={`editorial-detail editorial-detail--${variant}${
        content.spaciousHero ? " editorial-detail--spacious-hero" : ""
      }`}
    >
      <header className="editorial-detail__hero">
        {content.media ? (
          <MediaCarousel
            media={content.media}
            className="editorial-detail__hero-image"
            eager
          />
        ) : content.image ? (
          <img
            className="editorial-detail__hero-image"
            src={content.image}
            alt=""
          />
        ) : null}
        {!content.media && content.video && (
          <video
            className="editorial-detail__hero-image"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={content.video} type="video/mp4" />
          </video>
        )}
        <div className="editorial-detail__overlay" />

        <div className="container editorial-detail__hero-content">
          <div className="editorial-detail__hero-nav">
            <Link className="editorial-detail__back" to={backTo}>
              <FiArrowLeft />
              {backLabel}
            </Link>

            <div className="editorial-detail__meta">
              <span>{typeLabel}</span>
              <span>{content.category}</span>
              {content.readTime && <span>{content.readTime}</span>}
              {content.location && <span>{content.location}</span>}
            </div>
          </div>

          <div className="editorial-detail__hero-copy">
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
          </div>
        </div>
      </header>

      <div className="container editorial-detail__layout">
        <main className="editorial-detail__main">
          {content.sections.map((section, index) => (
            <section
              className="editorial-detail__section"
              key={section.heading}
              data-reveal
              style={{ "--section-index": index + 1 }}
            >
              <span className="editorial-detail__section-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          {content.sources?.length > 0 && (
            <section className="editorial-detail__sources" data-reveal>
              <h2>Further reading</h2>
              <p>
                These independent technical resources provide additional
                background on the engineering principles discussed above.
              </p>
              {content.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {source.label}
                  <FiArrowRight />
                </a>
              ))}
            </section>
          )}
        </main>

        <aside className="editorial-detail__aside" data-reveal>
          <div className="editorial-detail__summary">
            <span>Key considerations</span>
            <h2>What matters most</h2>
            <ul>
              {content.highlights.map((highlight) => (
                <li key={highlight}>
                  <FiCheck />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="editorial-detail__contact">
            <span>Discuss your project</span>
            <h2>Need an engineering solution?</h2>
            <p>
              Share your operating requirements with the FJ Group team.
            </p>
            <Link to="/contact/products&services">
              Contact our team
              <FiArrowRight />
            </Link>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="editorial-detail__related">
          <div className="container">
            <div className="editorial-detail__related-heading" data-reveal>
              <span>Continue exploring</span>
              <h2>Related insights</h2>
            </div>

            <div className="editorial-detail__related-grid">
              {related.map((item) => (
                <Link
                  className={`editorial-detail__related-card ${
                    item.image ? "" : "editorial-detail__related-card--text"
                  }`}
                  to={item.to}
                  key={item.title}
                  data-reveal
                >
                  {item.image && <img src={item.image} alt="" />}
                  <div>
                    <span>{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <strong>
                      Read more
                      <FiArrowRight />
                    </strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
