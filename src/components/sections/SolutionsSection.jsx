import { motion } from "framer-motion"
import "../../styles/components/solutions.scss"

import {
  FaSolarPanel,
  FaTint,
  FaIndustry,
  FaTools
} from "react-icons/fa"

const solutions = [
  {
    icon: <FaIndustry />,
    title: "Drilling",
    desc: "We provide advanced drilling solutions for industrial and infrastructure development projects with a focus on precision, depth capability, and long-term reliability."
  },

  {
    icon: <FaTint />,
    title: "Pumping",
    desc: "Our pumping systems are designed for efficient water movement across domestic, agricultural, and industrial applications, ensuring consistent performance in demanding environments."
  },

  {
    icon: <FaSolarPanel />,
    title: "Solar Systems",
    desc: "We deliver solar energy solutions powered by INVT technology including GD100, GD170, and GD200 series to support sustainable and cost-efficient energy operations."
  },

  {
    icon: <FaTools />,
    title: "Water Supply Accessories",
    desc: "We supply a complete range of pipes, fittings, valves, and system components essential for reliable and efficient water distribution networks."
  }
]

export default function SolutionsSection() {
  return (
    <section className="solutions-section home-solutions-section">

      <div className="container">

        {/* HEADER */}
        <motion.div
          className="solutions-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >

          <span>WHAT WE DO</span>

          <h2>
            Engineering solutions for industrial progress
          </h2>

        </motion.div>

        {/* GRID */}
        <div className="solutions-grid">

          {solutions.map((item, index) => (
            <motion.div
              className="solution-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >

              {/* ICON */}
              <div className="solution-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}
