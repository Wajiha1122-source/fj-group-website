import { motion } from "framer-motion"
import { FiUsers, FiCalendar, FiBarChart2, FiGlobe } from "react-icons/fi"
import "../../styles/components/about-glance.scss"

const stats = [
  { icon: <FiUsers />, value: "500+", label: "Employees Nationwide" },
  { icon: <FiCalendar />, value: "1984", label: "Founded" },
  { icon: <FiBarChart2 />, value: "$120M+", label: "Annual Revenue" },
  { icon: <FiGlobe />, value: "30+", label: "Cities Served" }
]

export default function AboutGlanceSection() {
  return (
    <section className="about-glance-section">

      <div className="container">

        {/* HEADER (CLEAN - GRUNDFOS STYLE) */}
        <motion.div
          className="glance-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span>WHO WE ARE</span>

          <h2>
            FJ Group at a glance
          </h2>
        </motion.div>

        {/* STATS GRID */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <motion.div
              className="stat-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="stat-icon">
                {item.icon}
              </div>

              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  )
}