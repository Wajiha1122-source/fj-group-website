import { motion } from "framer-motion"
import "../../styles/components/ourPartners.scss"

import invt from "../../assets/images/INVT.png"
import komax from "../../assets/images/Komax.jpg"
import oswall from "../../assets/images/Oswal.jpg"
import rotex from "../../assets/images/Rotex.jpg"

const partners = [
  {
    name: "INVT",
    image: invt,
    desc: "INVT is a global provider of industrial automation and energy solutions, specializing in variable frequency drives, solar inverters, and intelligent control systems. Our collaboration ensures advanced energy-efficient pumping and solar solutions for industrial and infrastructure projects."
  },
  {
    name: "KOMAX",
    image: komax,
    desc: "KOMAX is known for precision engineering and automation technology used in industrial manufacturing systems. Working with KOMAX allows us to integrate high-performance mechanical and automation systems into our engineering solutions."
  },
  {
    name: "OSWAL",
    image: oswall,
    desc: "OSWALL specializes in industrial components and mechanical system solutions used in water supply and infrastructure networks. Their reliable components help us ensure durability and long-term performance in our projects."
  },
  {
    name: "ROTEX",
    image: rotex,
    desc: "ROTEX provides advanced coupling and transmission systems used in industrial machinery. Their technology supports our pumping and mechanical systems by improving efficiency, stability, and operational safety."
  }
]

export default function OurPartners() {
  return (
    <div className="partners-page">

      {/* HERO */}
      <section className="partners-hero">
        <div className="container">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            Our Partners
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            We collaborate with world-leading engineering and industrial technology companies to deliver reliable, efficient, and sustainable solutions.
          </motion.p>

        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="partners-list">

        <div className="container">

          {partners.map((item, index) => (
            <motion.div
              className={`partner-row ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
            >

              <div className="partner-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="partner-content">
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
              </div>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  )
}