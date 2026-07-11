import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { FiArrowRight, FiCheck, FiChevronLeft } from "react-icons/fi"
import { FaDraftingCompass, FaTint, FaTools, FaWater } from "react-icons/fa"
import "../../styles/components/centralPivot.scss"

import cp1 from "../../assets/images/cp1.jpg"
import cp2 from "../../assets/images/cp2.jpg"
import cp3 from "../../assets/images/cp3.jpg"

const detailImages = [
  { image: cp1, alt: "Central pivot irrigation field system" },
  { image: cp2, alt: "Large scale central pivot irrigation coverage" },
  { image: cp3, alt: "Central pivot irrigation installation support" }
]

const serviceSteps = [
  "Field survey and irrigation requirement assessment",
  "Bore planning, boring support, and water-source preparation",
  "Pump, pipe, control, and accessory selection",
  "Pivot structure installation and alignment",
  "Testing, commissioning, and operating guidance"
]

const advantages = [
  {
    icon: FaWater,
    title: "Large Area Coverage",
    text: "The rotating structure supports consistent irrigation across broad agricultural land with fewer manual shifts."
  },
  {
    icon: FaTint,
    title: "Controlled Application",
    text: "Water is delivered through planned sprinklers and flow control so the crop receives a dependable irrigation pattern."
  },
  {
    icon: FaDraftingCompass,
    title: "Farm-Specific Design",
    text: "Every project is matched to bore yield, field shape, soil condition, crop need, and pump performance."
  },
  {
    icon: FaTools,
    title: "One Complete Team",
    text: "FJ Group handles boring, accessories, equipment coordination, installation, testing, and after-installation support."
  }
]

export default function CentralPivotIrrigation() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % detailImages.length)
    }, 3600)

    return () => clearInterval(timer)
  }, [])

  const currentImage = detailImages[activeImage]

  return (
    <main className="central-pivot-page">
      <section className="central-pivot-detail-hero">
        <div className="container central-pivot-detail-layout">
          <motion.div
            className="central-pivot-detail-copy"
            initial={{ opacity: 0, x: -42 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <Link className="central-pivot-back" to="/">
              <FiChevronLeft />
              Back to Home
            </Link>
            <span className="central-pivot-tag">COMPLETE IRRIGATION INSTALLATION</span>
            <h1>Central Pivot Irrigation for Reliable Farm Coverage</h1>
            <p>
              FJ Group delivers complete central pivot irrigation installation for farms that
              need dependable water distribution, engineered pumping, correct boring support,
              and the right accessories for long-term field performance.
            </p>

            <div className="central-pivot-hero-actions">
              <Link className="central-pivot-btn" to="/contact/products&services">
                Discuss Installation
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="central-pivot-detail-slider"
            initial={{ opacity: 0, x: 42 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="central-pivot-detail-stage">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage.alt}
                  src={currentImage.image}
                  alt={currentImage.alt}
                  initial={{ opacity: 0, x: 90, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -90, scale: 0.96 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>
            </div>

            <div className="central-pivot-dots">
              {detailImages.map((item, index) => (
                <button
                  className={activeImage === index ? "active" : ""}
                  type="button"
                  key={item.alt}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show ${item.alt}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="central-pivot-advantages">
        <div className="container">
          <div className="central-pivot-section-heading">
            <span className="central-pivot-tag">WHY IT MATTERS</span>
            <h2>Engineered irrigation with complete project support</h2>
          </div>

          <div className="central-pivot-advantage-grid">
            {advantages.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  className="central-pivot-advantage"
                  key={item.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.58, delay: index * 0.1 }}
                >
                  <div className="central-pivot-advantage__icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="central-pivot-installation">
        <div className="container central-pivot-installation-card">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <span className="central-pivot-tag">FJ GROUP SCOPE</span>
            <h2>From bore to final commissioning</h2>
            <p>
              The system depends on more than the visible pivot structure. A reliable project
              needs a suitable water source, bore execution, pump sizing, pipes, fittings,
              valves, electrical/control coordination, installation accuracy, and performance
              testing. FJ Group brings these pieces together as one complete installation service.
            </p>
          </motion.div>

          <div className="central-pivot-service-list">
            {serviceSteps.map((item, index) => (
              <motion.div
                className="central-pivot-service-item"
                key={item}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.48, delay: index * 0.08 }}
              >
                <FiCheck />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
