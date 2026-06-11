import { motion } from "framer-motion"
import { FiMail, FiMapPin, FiClock } from "react-icons/fi"
import "../../styles/components/otherEnquiries.scss"

export default function OtherEnquiries() {

  return (
    <div className="other-page">

      {/* HERO → FIXED */}
      <section className="other-hero">

        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >

          <h1>Other Enquiries</h1>

          <p>
            For partnerships, support, business discussions, or any
            additional enquiries, our team is ready to assist you.
          </p>

        </motion.div>

      </section>

      {/* CONTACT BLOCK */}
      <section className="other-contact">

        <div className="container">

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="contact-icon">
              <FiMail />
            </div>

            <h2>Contact Support Team</h2>

            <p>
              Reach out to our support and enquiries department directly
              for detailed information regarding products, services,
              collaborations, and technical discussions.
            </p>

            <a
              href="mailto:Info@fjgroup.pk?subject=FJ%20Group%20Support%20Inquiry"
              className="support-btn"
            >
              Info@fjgroup.pk
            </a>

          </motion.div>

        </div>

      </section>

      {/* OFFICE SECTION */}
      <section className="office-section">

        <div className="container office-grid">

          {/* LEFT */}
          <motion.div
            className="office-content"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <span>VISIT OUR OFFICE</span>

            <h2>
              For more information,
              visit our office directly
            </h2>

            <p>
              Meet our team for project consultations,
              engineering discussions, and business enquiries.
              We welcome industrial partners, suppliers,
              contractors, and customers.
            </p>

            <div className="office-info">

              <div>
                <FiMapPin />
                <p>
                  Main Bohr Gate Market,
                  Chowk Shaheedan,
                  Opposite Faisal Bank
                </p>
              </div>

              <div>
                <FiClock />
                <p>Working Hours: 10 AM — 8 PM</p>
              </div>

            </div>

          </motion.div>

          {/* MAP */}
          <motion.div
            className="office-map"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <iframe
              title="FJ Group Location"
              src="https://www.google.com/maps?q=Irshad%20%26%20Company%20Pvt%20Ltd%20Chowk%20Shaheedan%20Multan&output=embed"
              loading="lazy"
            ></iframe>

          </motion.div>

        </div>

      </section>

    </div>
  )
}
