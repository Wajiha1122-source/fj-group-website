import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "../../styles/components/brands.scss"

import { brandPartners } from "../../data/brandPartners"

export default function BrandsSection() {
  return (
    <section className="brands-section">

      {/* HEADER (MATCH YOUR EXISTING STYLE) */}
      <div className="section-header">

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          OUR PARTNERS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted Brand Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We work with selected technology partners across solar, energy
          management and mechanical systems to support dependable project
          delivery for FJ Group customers.
        </motion.p>

      </div>

      {/* BRAND GRID */}
      <div className="container">

        <div className="brands-grid">

          {brandPartners.map((item, index) => (
            <motion.div
              className="brand-card"
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >

              <div className="brand-logo">
                <img
                  src={item.image}
                  alt={`${item.name} logo`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="brand-copy">
                <h3>{item.name}</h3>
                <p>{item.focus}</p>
              </div>

            </motion.div>
          ))}

        </div>

        <div className="brands-action">
          <Link to="/about/partners">Read more about our partners</Link>
        </div>

      </div>
    </section>
  )
}
