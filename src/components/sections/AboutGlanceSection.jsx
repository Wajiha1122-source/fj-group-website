import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FiUsers, FiCalendar, FiBarChart2, FiGlobe } from "react-icons/fi"
import { useInView } from "react-intersection-observer"
import "../../styles/components/about-glance.scss"

const stats = [
  { icon: <FiUsers />, value: 500, suffix: "+", label: "Employees Nationwide" },
  { icon: <FiCalendar />, value: 1984, label: "Founded" },
  { icon: <FiBarChart2 />, value: 120, prefix: "$", suffix: "M+", label: "Annual Revenue" },
  { icon: <FiGlobe />, value: 30, suffix: "+", label: "Cities Served" }
]

function AnimatedStatValue({ end, prefix = "", suffix = "", active, delay }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let animationFrame = 0
    let delayTimer = 0

    if (!active) {
      return undefined
    }

    delayTimer = window.setTimeout(() => {
      const startedAt = performance.now()
      const duration = 1850

      const update = (now) => {
        const progress = Math.min(1, (now - startedAt) / duration)
        const eased = 1 - Math.pow(1 - progress, 4)
        setValue(Math.round(end * eased))

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(update)
        }
      }

      animationFrame = window.requestAnimationFrame(update)
    }, delay)

    return () => {
      window.clearTimeout(delayTimer)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [active, delay, end])

  return <span>{prefix}{value}{suffix}</span>
}

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
                ) : (
                  <AnimatedStatValue
                    key={`stat-${index}-${inView}`}
                    end={item.value}
                    active={inView}
                    delay={index * 80}
                    prefix={item.prefix || ""}
                    suffix={item.suffix || ""}
                  />
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
