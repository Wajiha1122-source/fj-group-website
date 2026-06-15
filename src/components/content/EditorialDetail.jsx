import { Link } from "react-router-dom"
import { FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi"

import "../../styles/components/editorialDetail.scss"

export default function EditorialDetail({
  content,
  backTo,
  backLabel,
  typeLabel,
  related = []
}) {
  return (
    <article className="editorial-detail">
      <header className="editorial-detail__hero">
        {content.image && (
          <img
            className="editorial-detail__hero-image"
            src={content.image}
            alt=""
          />
        )}
        {content.video && (
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

          <h1>{content.title}</h1>
          <p>{content.intro}</p>
        </div>
      </header>

      <div className="container editorial-detail__layout">
        <main className="editorial-detail__main">
          {content.sections.map((section) => (
            <section className="editorial-detail__section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          {content.sources?.length > 0 && (
            <section className="editorial-detail__sources">
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

        <aside className="editorial-detail__aside">
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
            <div className="editorial-detail__related-heading">
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
