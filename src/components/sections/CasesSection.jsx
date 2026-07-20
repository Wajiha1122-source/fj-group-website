import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "../../styles/components/cases.scss"
import { caseStudies } from "../../data/caseStudies"

export default function CasesSection() {
  return (
    <section className="cases-section">

      <div className="container">

        {/* HEADER */}
        <motion.div
          className="cases-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span>CASE STUDIES</span>
          <h2>Real projects. Real engineering impact.</h2>
          <p>
            Explore how FJ Group delivers industrial solutions across water,
            energy, drilling, and infrastructure sectors.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="cases-grid">

          {caseStudies.slice(0, 4).map((item, index) => (
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
  )
}
