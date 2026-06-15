import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "../../styles/components/Case.scss"
import { caseStudies } from "../../data/caseStudies"

export default function CasesSection() {
  return (
    <section className="cases-page">

      {/* HERO */}
      <section className="cases-hero">

        <div className="container">

          <motion.div
            className="cases-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >

            <h1>Case Studies</h1>

            <p>
              Real projects. Real engineering impact across water, energy,
              drilling and infrastructure systems.
            </p>

          </motion.div>

        </div>

      </section>

      {/* CASES */}
      <section className="cases-list">

        <div className="container">

          <div className="cases-grid">

            {caseStudies.map((item, index) => (
              <motion.div
                className="case-card"
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >

                <video
                  className="case-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                <div className="case-overlay" />

                <div className="case-content">

                  <span className="case-location">
                    {item.location}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <Link to={`/cases/${item.slug}`} className="case-btn">
                    Learn More →
                  </Link>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </section>
  )
}
