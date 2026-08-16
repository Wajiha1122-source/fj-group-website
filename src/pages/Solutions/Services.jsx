import { motion } from "framer-motion"
import servicesVideo from "../../assets/videos/services/engineering-in-action.mp4"
import servicesVideoPoster from "../../assets/images/optimized/solar-pump-flow-1200.jpg"
import "../../styles/components/services.scss"

// icons
import { FiTool, FiDroplet, FiSun, FiLayers } from "react-icons/fi"

const services = [
  {
    icon: <FiTool />,
    title: "Industrial Services",
    desc: "We provide complete industrial engineering support including installation, maintenance, and system optimization for long-term reliability."
  },
  {
    icon: <FiDroplet />,
    title: "Water Systems",
    desc: "Design and implementation of water pumping, distribution, and extraction systems for agriculture, industry, and infrastructure."
  },
  {
    icon: <FiSun />,
    title: "Solar Solutions",
    desc: "Advanced solar-powered systems using INVT technology for efficient and sustainable energy generation."
  },
  {
    icon: <FiLayers />,
    title: "System Integration",
    desc: "We integrate mechanical, electrical, and hydraulic systems into unified engineering solutions."
  }
]

export default function Services() {
  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >

          <h1>Services</h1>

          <p>
            Engineering-driven services designed to support industrial,
            agricultural and infrastructure systems with precision and reliability.
          </p>

        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid-section">
        <div className="container">

          <div className="services-grid">

            {services.map((item, index) => (
              <motion.div
                className="service-card"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >

                <div className="icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CASE VIDEO SECTION */}
      <section className="services-video-section">

        <div className="container video-wrapper">

          <motion.div
            className="video-text"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Engineering in Action</h2>
            <p>
              Real-world execution of industrial systems showcasing our expertise in
              pumping, drilling, and infrastructure development.
            </p>
          </motion.div>

          <motion.div
            className="video-box"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={servicesVideoPoster}
              aria-label="FJ Group engineering work in action"
            >
              <source src={servicesVideo} type="video/mp4" />
            </video>
          </motion.div>

        </div>

      </section>

    </div>
  )
}
