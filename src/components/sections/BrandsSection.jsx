import { motion } from "framer-motion"
import "../../styles/components/brands.scss"

// You should replace these with your actual local assets later
import rotex from "../../assets/images/rotex.png"
import komax from "../../assets/images/komax.png"
import oswal from "../../assets/images/oswal.png"
import invt from "../../assets/images/invt.jpg"

const brands = [
  { img: rotex, name: "Rotex" },
  { img: komax, name: "Komax" },
  { img: oswal, name: "Oswal" },
  { img: invt, name: "INVT" }
]

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
          Trusted Global Brands
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We collaborate with world-leading engineering and industrial brands
          to ensure quality, reliability and performance.
        </motion.p>

      </div>

      {/* BRAND GRID */}
      <div className="container">

        <div className="brands-grid">

          {brands.map((item, index) => (
            <motion.div
              className="brand-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >

              <img src={item.img} alt={item.name} />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}