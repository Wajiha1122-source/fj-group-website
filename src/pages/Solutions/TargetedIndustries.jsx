import { motion } from "framer-motion"
import "../../styles/components/targetedIndustries.scss"

import agricultureImg from "../../assets/images/agriculture.jpg"
import constructionImg from "../../assets/images/construction.jpg"
import industrialImg from "../../assets/images/industrial.jpg"
import municipalImg from "../../assets/images/municipal.jpg"
import energyImg from "../../assets/images/energy.jpg"
import miningImg from "../../assets/images/mining.jpg"

const industries = [
  {
    title: "Agriculture Sector",
    desc: "Advanced irrigation, solar pumping systems, and water supply solutions for modern farming and agriculture productivity.",
    img: agricultureImg
  },
  {
    title: "Construction Industry",
    desc: "Reliable dewatering, drilling, and water infrastructure systems for construction and infrastructure development projects.",
    img: constructionImg
  },
  {
    title: "Industrial Manufacturing",
    desc: "Heavy-duty pumping, water management, and fluid handling systems for factories and production units.",
    img: industrialImg
  },
  {
    title: "Municipal Water Systems",
    desc: "Urban water supply, distribution networks, and sustainable municipal infrastructure solutions.",
    img: municipalImg
  },
  {
    title: "Energy Sector",
    desc: "Solar-powered pumping systems and energy-efficient industrial automation solutions.",
    img: energyImg
  },
  {
    title: "Mining & Extraction",
    desc: "Deep drilling systems, groundwater extraction, and high-pressure pumping solutions for mining operations.",
    img: miningImg
  }
]

export default function TargetedIndustries() {
  return (
    <div className="industries-page">

      {/* HERO */}
      <section className="industries-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Targeted Industries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            We deliver engineering-driven solutions across multiple industrial sectors,
            focusing on reliability, efficiency, and long-term sustainability.
          </motion.p>
        </div>
      </section>

      {/* GRID */}
      <section className="industries-grid-section">
        <div className="container">

          <div className="industries-grid">

            {industries.map((item, index) => (
              <motion.div
                className="industry-card"
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
              >

                <div className="industry-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="industry-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </div>
  )
}