import { useState } from "react"
import { motion } from "framer-motion"

import drillingImage from "../../assets/images/optimized/drilling-water-site-1200.jpg"
import pumpingImage from "../../assets/images/optimized/solar-pump-flow-1200.jpg"
import infrastructureImage from "../../assets/images/optimized/solar-water-system-1200.jpg"
import renewableImage from "../../assets/images/optimized/solar-panel-field-1200.jpg"
import drillingVideo from "../../assets/videos/categories/groundwater-drilling.mp4"
import pumpingVideo from "../../assets/videos/categories/fluid-transfer-pumping.mp4"
import infrastructureVideo from "../../assets/videos/categories/water-infrastructure.mp4"
import renewableVideo from "../../assets/videos/categories/renewable-energy-water.mp4"
import "../../styles/components/categories.scss"

const categories = [
  {
    title: "Groundwater & Drilling Systems",
    desc: "Advanced drilling solutions designed for deep groundwater extraction, borewell development, and industrial exploration projects.",
    video: drillingVideo,
    image: drillingImage
  },
  {
    title: "Fluid Transfer & Pumping Systems",
    desc: "High-efficiency pumping solutions for agriculture, industry, and municipal water distribution with long-term operational reliability.",
    video: pumpingVideo,
    image: pumpingImage
  },
  {
    title: "Water Infrastructure Components",
    desc: "Complete range of pipes, valves, fittings, and accessories supporting modern water supply and distribution networks.",
    video: infrastructureVideo,
    image: infrastructureImage
  },
  {
    title: "Renewable Energy Water Systems",
    desc: "Solar-powered water pumping and energy systems using advanced inverter technology for sustainable infrastructure.",
    video: renewableVideo,
    image: renewableImage
  }
]

function CategoryMedia({ item }) {
  const [videoFailed, setVideoFailed] = useState(false)

  if (videoFailed) {
    return <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={item.image}
      aria-label={item.title}
      onError={() => setVideoFailed(true)}
    >
      <source src={item.video} type="video/mp4" />
    </video>
  )
}

export default function Categories() {
  return (
    <section className="categories-page">

      {/* HERO */}
      <div className="categories-hero">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >

          <h1>Categories</h1>

          <p>
            Core engineering categories defining our industrial solutions across water,
            energy, and infrastructure systems.
          </p>

        </motion.div>
      </div>

      {/* CONTENT LIST */}
      <div className="categories-list">

        {categories.map((item, index) => (
          <motion.div
            className={`category-row ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
          >

            {/* VIDEO */}
            <div className="category-video">
              <CategoryMedia item={item} />
            </div>

            {/* TEXT */}
            <div className="category-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}
