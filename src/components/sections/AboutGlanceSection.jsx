import { motion, useReducedMotion } from "framer-motion"
import CountUp from "react-countup"
import { FiUsers, FiCalendar, FiBarChart2, FiGlobe } from "react-icons/fi"
import { useInView } from "react-intersection-observer"
import "../../styles/components/about-glance.scss"

const stats = [
  { icon: <FiUsers />, value: 500, suffix: "+", label: "Employees Nationwide" },
  { icon: <FiCalendar />, value: 1984, label: "Founded" },
  { icon: <FiBarChart2 />, value: 120, prefix: "$", suffix: "M+", label: "Annual Revenue" },
  { icon: <FiGlobe />, value: 30, suffix: "+", label: "Cities Served" }
]

export default function AboutGlanceSection() {
  const reduceMotion = useReducedMotion()
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: false
  })

  return (
    <section className="about-glance-section" ref={ref}>

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

              <h3 aria-label={`${item.prefix || ""}${item.value}${item.suffix || ""}`}>
                {reduceMotion ? (
                  `${item.prefix || ""}${item.value}${item.suffix || ""}`
                ) : inView ? (
                  <CountUp
                    key={`stat-${index}-${inView}`}
                    start={0}
                    end={item.value}
                    duration={1.85}
                    delay={index * 0.08}
                    prefix={item.prefix || ""}
                    suffix={item.suffix || ""}
                    separator=""
                    useEasing
                  />
                ) : (
                  `${item.prefix || ""}0${item.suffix || ""}`
                )}
              </h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  )
}
