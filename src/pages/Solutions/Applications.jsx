import { motion } from "framer-motion"
import "../../styles/components/applications.scss"

const applications = [
  {
    title: "Agricultural Irrigation",
    desc: "Efficient water pumping systems for farms, ensuring consistent irrigation even in remote and off-grid areas.",
  },
  {
    title: "Borewell Water Extraction",
    desc: "Deep well pumping solutions designed for reliable groundwater extraction with long operational life.",
  },
  {
    title: "Industrial Water Supply",
    desc: "High-capacity pumping and distribution systems for factories and industrial facilities.",
  },
  {
    title: "Solar Water Systems",
    desc: "Solar-powered pumping applications using INVT technology for energy-efficient water management.",
  },
  {
    title: "Urban Water Distribution",
    desc: "Reliable municipal water supply systems ensuring stable pressure and continuous flow.",
  },
  {
    title: "Construction Dewatering",
    desc: "Temporary water removal systems used in construction sites and underground works.",
  },
]

export default function Applications() {
  return (
    <section className="applications-page">

      {/* HERO (FIXED → now scroll consistent like other pages) */}
      <div className="applications-hero">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >

          <h1>Applications</h1>

          <p>
            Real-world engineering applications where our systems deliver
            performance, reliability, and efficiency across water and energy solutions.
          </p>

        </motion.div>
      </div>

      {/* GRID */}
      <div className="container applications-grid">

        {applications.map((item, index) => (
          <motion.div
            className="app-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
          >

            <div className="icon">⚙️</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

          </motion.div>
        ))}

      </div>

    </section>
  )
}