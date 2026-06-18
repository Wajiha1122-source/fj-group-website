import { motion } from "framer-motion"
import "../../styles/components/ourPartners.scss"

import { brandPartners } from "../../data/brandPartners"

export default function OurPartners() {
  return (
    <div className="partners-page">

      {/* HERO */}
      <section className="partners-hero">
        <div className="container">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            Our Partners
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            We collaborate with selected solar, energy and engineering
            technology partners to deliver reliable, efficient and sustainable
            solutions across FJ Group projects.
          </motion.p>

        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="partners-list">

        <div className="container">

          {brandPartners.map((item, index) => (
            <motion.div
              className={`partner-row ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
            >

              <div className="partner-image">
                <img src={item.image} alt={`${item.name} logo`} />
              </div>

              <div className="partner-content">
                <span>{item.focus}</span>
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  )
}
