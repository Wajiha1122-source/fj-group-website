import { motion } from "framer-motion"
import {
  FiSettings,
  FiDroplet,
  FiSun,
  FiTool,
  FiArrowRight
} from "react-icons/fi"
import { Link } from "react-router-dom"

import "../../styles/components/whatWeDo.scss"

const solutions = [
  {
    icon: <FiSettings />,
    title: "Industrial Drilling",
    desc: "We provide advanced drilling systems engineered for infrastructure, industrial, and water extraction projects with a focus on precision, operational efficiency, and long-term durability.",
    details:
      "Our drilling operations are designed to support demanding environments using modern engineering methods and high-performance equipment.",
    slug: "industrial-drilling"
  },
  {
    icon: <FiDroplet />,
    title: "Pumping Systems",
    desc: "We design and deliver efficient pumping solutions for agricultural, industrial, and commercial water movement applications.",
    details:
      "From pressure optimization to energy-efficient flow systems, our pumping solutions are built for reliability and consistent output.",
    slug: "pumping-systems"
  },
  {
    icon: <FiSun />,
    title: "Solar Energy Solutions",
    desc: "We integrate sustainable solar technologies using advanced inverter systems and intelligent energy infrastructure.",
    details:
      "Our solar solutions help industries reduce operational costs while improving long-term energy sustainability.",
    slug: "solar-energy-solutions"
  },
  {
    icon: <FiTool />,
    title: "Water Infrastructure",
    desc: "We supply complete water distribution accessories including pipes, fittings, valves, and industrial system components.",
    details:
      "Our infrastructure solutions are developed to support reliable water supply networks across multiple sectors.",
    slug: "water-infrastructure"
  }
]

export default function WhatWeDo() {
  return (
    <div className="what-we-do-page">

      {/* HERO */}
      <section className="what-hero">

        <div className="hero-overlay"></div>

        <div className="container">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <span>WHAT WE DO</span>

            <h1>
              Engineering systems built for industrial growth
            </h1>

            <p>
              FJ Group delivers integrated industrial engineering solutions
              designed to improve efficiency, sustainability, and infrastructure
              performance across modern industries.
            </p>

          </motion.div>

        </div>

      </section>

      {/* INTRO SECTION */}
      <section className="what-intro">

        <div className="container">

          <motion.div
            className="intro-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >

            <motion.div
              className="intro-left"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9 }}
            >

              <span className="mini-tag">OUR EXPERTISE</span>

              <h2>
                Delivering smart engineering solutions for critical industries
              </h2>

            </motion.div>

            <motion.div
              className="intro-right"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9 }}
            >

              <p>
                We combine engineering expertise, modern technologies,
                and operational understanding to deliver scalable
                infrastructure and industrial systems.
              </p>

              <p>
                From drilling and pumping systems to solar-powered
                energy operations and water infrastructure networks,
                our solutions are designed to meet long-term
                performance requirements.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* SOLUTIONS GRID */}
      <section className="solutions-wrapper">

        <div className="container">

          <motion.div
            className="solutions-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >

            <span>OUR SOLUTIONS</span>

            <h2>
              Advanced systems designed for reliability and performance
            </h2>

          </motion.div>

          <div className="solutions-grid">

            {solutions.map((item, index) => (

              <motion.div
                className="solution-card"
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12
                }}
              >

                <div className="solution-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <div className="solution-line"></div>

                <span className="solution-details">
                  {item.details}
                </span>

                <Link
                  className="solution-learn-more"
                  to={`/about/what-we-do/${item.slug}`}
                >
                  Learn More
                  <FiArrowRight />
                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>
  )
}
