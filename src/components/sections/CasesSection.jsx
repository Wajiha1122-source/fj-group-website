import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "../../styles/components/cases.scss"

// ================= CLOUDINARY VIDEOS =================

const cases = [
  {
    title: "Industrial Water Pumping System",
    location: "Pakistan",
    video:
      "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520228/case1_ok7wsk.mp4",
    desc:
      "Delivered high-efficiency submersible pumping system for continuous industrial water supply.",
    slug: "/cases/water-pumping"
  },
  {
    title: "Solar Powered Irrigation Project",
    location: "Agriculture Sector",
    video:
      "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520244/case2_jndrdt.mp4",
    desc:
      "Implemented INVT-based solar solution (GD100 series) for off-grid irrigation systems.",
    slug: "/cases/solar-irrigation"
  },
  {
    title: "Deep Well Drilling Project",
    location: "Rural Infrastructure",
    video:
      "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520279/case3_simxkg.mp4",
    desc:
      "Executed precision deep well drilling for reliable groundwater extraction.",
    slug: "/cases/deep-well-drilling"
  },
  {
    title: "Water Distribution Network Upgrade",
    location: "Urban Development",
    video:
      "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520306/case4_xtxceh.mp4",
    desc:
      "Modernized water supply infrastructure with advanced fittings and accessories.",
    slug: "/cases/water-network"
  }
]

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
                <span className="case-location">{item.location}</span>
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
  )
}