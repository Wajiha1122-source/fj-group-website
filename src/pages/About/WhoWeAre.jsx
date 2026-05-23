import { motion } from "framer-motion"
import { useEffect } from "react"
import "../../styles/components/whoWeAre.scss"
import teamImg from "../../assets/images/news2.png"

export default function WhoWeAre() {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-section"
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="who-we-are-page">

      {/* HERO */}
      <motion.section
        className="who-hero reveal"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">

          <h1>Who We Are</h1>

          <p className="subtitle">
            Building intelligent industrial systems for water, energy,
            and infrastructure across modern engineering environments.
          </p>

        </div>
      </motion.section>

      {/* INTRO */}
      <motion.section
        className="who-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >

        <div className="container who-grid">

          {/* TEXT */}
          <motion.div
            className="who-text reveal-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >

            <h2>Engineering solutions for real-world challenges</h2>

            <p>
              FJ Group delivers integrated engineering systems designed to
              solve complex industrial and infrastructure challenges with precision and reliability.
            </p>

            <p>
              Our expertise spans drilling systems, pumping solutions,
              solar energy systems, and water infrastructure networks.
            </p>

            <p>
              We focus on long-term performance, efficiency, and sustainable engineering practices.
            </p>

          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="who-image reveal-right"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <img src={teamImg} alt="FJ Group Engineering" />
          </motion.div>

        </div>
      </motion.section>

      {/* VALUES */}
      <motion.section
        className="who-values"
        id="values-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >

        <div className="container">

          {/* FIXED HEADING STYLE */}
          <span className="section-tag">WHAT DEFINES US</span>
          

          <div className="values-grid">

            <motion.div className="value-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span>⚙️</span>
              <h3>Reliability</h3>
              <p>Built for long-term industrial performance.</p>
            </motion.div>

            <motion.div className="value-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>💡</span>
              <h3>Innovation</h3>
              <p>Modern engineering with smart systems.</p>
            </motion.div>

            <motion.div className="value-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span>🌿</span>
              <h3>Sustainability</h3>
              <p>Eco-conscious infrastructure solutions.</p>
            </motion.div>

            <motion.div className="value-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span>🏗️</span>
              <h3>Expertise</h3>
              <p>Industrial engineering experience across sectors.</p>
            </motion.div>

          </div>

        </div>
      </motion.section>

    </div>
  )
}