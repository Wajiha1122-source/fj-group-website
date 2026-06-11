import { motion } from "framer-motion"
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight
} from "react-icons/fi"

import "../../styles/components/contact.scss"

// ================= CLOUDINARY VIDEO =================
const caseVideo =
  "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520244/case2_jndrdt.mp4"

import logo from "../../assets/icons/logo1.png"

export default function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">

        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >

          <h1>Contact Us</h1>

          <p>
            Connect with FJ Group for industrial engineering solutions,
            water systems, drilling services, solar technologies,
            and infrastructure support.
          </p>

        </motion.div>

      </section>

      {/* MAIN SECTION */}
      <section className="contact-main">

        <div className="container contact-grid">

          {/* LEFT SIDE */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >

            <span className="contact-tag">
              GET IN TOUCH
            </span>

            <h2>
              Let’s build modern engineering systems together
            </h2>

            <p>
              Our team supports industrial, agricultural, and infrastructure
              projects with reliable engineering expertise and technical solutions.
            </p>

            <div className="info-list">

              <div className="info-card">
                <div className="info-icon"><FiPhone /></div>
                <div>
                  <h4>Phone Number</h4>
                  <p>03111777286</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><FiMail /></div>
                <div>
                  <h4>Email Address</h4>
                  <p>Info@fjgroup.pk</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><FiMapPin /></div>
                <div>
                  <h4>Office Location</h4>
                  <p>
                    Main Bohr Gate Market, Chowk Shaheedan,
                    Opposite Faisal Bank
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon"><FiClock /></div>
                <div>
                  <h4>Working Hours</h4>
                  <p>10:00 AM — 8:00 PM</p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE VIDEO */}
          <motion.div
            className="contact-video"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >

            <video autoPlay muted loop playsInline>
              <source src={caseVideo} type="video/mp4" />
            </video>

            <div className="video-overlay"></div>

            <div className="video-content">

              <img src={logo} alt="FJ Group" className="video-logo" />

              <h3>
                Engineering infrastructure for a sustainable future
              </h3>

              <a
                href="mailto:Info@fjgroup.pk?subject=FJ%20Group%20Inquiry"
                className="video-btn"
              >
                Contact Our Team
                <FiArrowRight />
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <section className="contact-cta">

        <motion.div
          className="container cta-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >

          <h2>Ready to discuss your next project?</h2>

          <p>
            Partner with FJ Group for advanced engineering,
            pumping, drilling, solar, and water infrastructure solutions.
          </p>

          <a
            href="https://wa.me/923111777286"
            target="_blank"
            rel="noreferrer"
            className="cta-btn"
          >
            Start a Conversation
          </a>

        </motion.div>

      </section>

    </div>
  )
}
