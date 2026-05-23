import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "../../styles/components/Case.scss"

import case1 from "../../assets/videos/case1.mp4"
import case2 from "../../assets/videos/case2.mp4"
import case3 from "../../assets/videos/case3.mp4"
import case4 from "../../assets/videos/case4.mp4"

const cases = [
  {
    title: "Industrial Water Pumping System",
    location: "Pakistan",
    video: case1,
    desc: "Delivered high-efficiency submersible pumping system for continuous industrial water supply.",
    slug: "/cases/water-pumping"
  },
  {
    title: "Solar Powered Irrigation Project",
    location: "Agriculture Sector",
    video: case2,
    desc: "Implemented INVT-based solar solution for off-grid irrigation systems.",
    slug: "/cases/solar-irrigation"
  },
  {
    title: "Deep Well Drilling Project",
    location: "Rural Infrastructure",
    video: case3,
    desc: "Executed precision deep well drilling for reliable groundwater extraction.",
    slug: "/cases/deep-well-drilling"
  },
  {
    title: "Water Distribution Network Upgrade",
    location: "Urban Development",
    video: case4,
    desc: "Modernized water supply infrastructure with advanced engineering systems.",
    slug: "/cases/water-network"
  }
]

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

            {cases.map((item, index) => (
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

                  <Link to={item.slug} className="case-btn">
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