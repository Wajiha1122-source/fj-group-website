import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import { FaTint, FaTools, FaDraftingCompass } from "react-icons/fa"
import "../../styles/components/centralPivot.scss"

import cp1 from "../../assets/images/cp1.jpg"
import cp2 from "../../assets/images/optimized/cp2-1200.jpg"
import cp3 from "../../assets/images/cp3.jpg"

const pivotImages = [
  { image: cp1, alt: "Central pivot irrigation field installation" },
  { image: cp2, alt: "Central pivot irrigation system across agricultural land" },
  { image: cp3, alt: "Central pivot irrigation service and equipment" }
]

const pivotHighlights = [
  {
    icon: FaTint,
    title: "Uniform Watering",
    text: "Designed to distribute water evenly across large fields with controlled movement and reliable coverage."
  },
  {
    icon: FaDraftingCompass,
    title: "Engineered Layout",
    text: "Planned around field size, crop needs, bore output, pump capacity, and long-term operating reliability."
  },
  {
    icon: FaTools,
    title: "Complete Installation",
    text: "FJ Group supports boring, accessories, pumping equipment, installation, and commissioning from one team."
  }
]

export default function CentralPivotSection() {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % pivotImages.length)
    }, 3600)

    return () => clearInterval(timer)
  }, [])

  const currentImage = pivotImages[activeImage]

  return (
    <section className="central-pivot-section">
      <div className="container central-pivot-layout">
        <motion.div
          className="central-pivot-content"
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.28 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <span className="central-pivot-tag">PREMIUM IRRIGATION SERVICE</span>
          <h2>Central Pivot Irrigation Systems</h2>
          <p>
            A central pivot system helps irrigate large agricultural fields through a rotating
            pipeline structure, giving farms consistent water coverage with efficient planning,
            correct pump sizing, and dependable installation.
          </p>

          <div className="central-pivot-points">
            {pivotHighlights.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  className="central-pivot-point"
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.48, delay: index * 0.12 }}
                >
                  <div className="central-pivot-point__icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <Link className="central-pivot-btn" to="/central-pivot-irrigation">
            Learn More
            <FiArrowRight />
          </Link>
        </motion.div>

        <motion.div
          className="central-pivot-slider"
          initial={{ opacity: 0, x: 42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.28 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          aria-label="Central pivot irrigation image slider"
        >
          <div className="central-pivot-stage">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage.alt}
                src={currentImage.image}
                alt={currentImage.alt}
                width="1200"
                height="569"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, x: 80, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -80, scale: 0.96 }}
                transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
          </div>

          <div className="central-pivot-dots">
            {pivotImages.map((item, index) => (
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
  )
}
