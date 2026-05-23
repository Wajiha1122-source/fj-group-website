import { motion } from "framer-motion"
import "../../styles/components/categories.scss"

// sample videos (replace with yours)
import vid1 from "../../assets/videos/case1.mp4"
import vid2 from "../../assets/videos/case2.mp4"
import vid3 from "../../assets/videos/case3.mp4"
import vid4 from "../../assets/videos/case4.mp4"

const categories = [
  {
    title: "Groundwater & Drilling Systems",
    desc: "Advanced drilling solutions designed for deep groundwater extraction, borewell development, and industrial exploration projects.",
    video: vid1
  },
  {
    title: "Fluid Transfer & Pumping Systems",
    desc: "High-efficiency pumping solutions for agriculture, industry, and municipal water distribution with long-term operational reliability.",
    video: vid2
  },
  {
    title: "Water Infrastructure Components",
    desc: "Complete range of pipes, valves, fittings, and accessories supporting modern water supply and distribution networks.",
    video: vid3
  },
  {
    title: "Renewable Energy Water Systems",
    desc: "Solar-powered water pumping and energy systems using advanced inverter technology for sustainable infrastructure.",
    video: vid4
  }
]

export default function Categories() {
  return (
    <section className="categories-page">

      {/* HERO → FIXED (was animate, now scroll-based like Services) */}
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
              <video autoPlay muted loop playsInline>
                <source src={item.video} type="video/mp4" />
              </video>
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