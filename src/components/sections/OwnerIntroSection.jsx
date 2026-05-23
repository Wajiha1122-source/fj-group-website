import { motion } from "framer-motion"
import "../../styles/components/ownerIntro.scss"

// Add your image here
import ownerImg from "../../assets/images/owner.jpeg"

export default function OwnerIntroSection() {
  return (
    <section className="owner-section">

      <div className="container owner-wrapper">

        {/* IMAGE SIDE */}
        <motion.div
          className="owner-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img src={ownerImg} alt="Faisal Javed - Owner FJ Group" />
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          className="owner-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >

          <span className="tag">MEET OUR LEADERSHIP</span>

          <h2>
            Faisal Javed
          </h2>

          <h3>
            Founder & Driving Force Behind FJ Group
          </h3>

          <p>
            Meet our owner, Faisal Javed, who leads FJ Group with a vision
            focused on innovation, engineering excellence, and sustainable
            industrial solutions.
          </p>

          <p>
            Under his leadership, the company continues to grow across water
            systems, pumping solutions, drilling operations, and solar energy
            integration — delivering reliable infrastructure for the future.
          </p>

          <button>Learn More</button>

        </motion.div>

      </div>

    </section>
  )
}