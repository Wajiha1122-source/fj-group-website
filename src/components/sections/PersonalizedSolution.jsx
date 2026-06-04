import { useState } from "react"
import { motion } from "framer-motion"
import "../../styles/components/personalSolution.scss"

export default function PersonalizedSolution() {

  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const message = `
*Personalized Quote Request - FJ Group*

*Name:* ${form.name || 'Not provided'}
*Phone:* ${form.phone || 'Not provided'}
*City:* ${form.city || 'Not provided'}
*System Type:* ${form.system || 'Not selected'}
*Panel Type:* ${form.panelType || 'Not selected'}
*Inverter:* ${form.inverter || 'Not selected'}

---
Sent from FJ Group Website
    `.trim()

    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = '923459637111'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="personal-section">

      <div className="container personal-grid">

        {/* LEFT CONTENT */}
        <motion.div
          className="personal-content"
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >

          <span className="tag">GET STARTED</span>

          <h2>
            Get your personalized <br />
            industrial solution
          </h2>

          <p>
            Tell us your requirements and our engineering team will design
            a customized solution for your project.
          </p>

          <ul>
            <li>✔ Tailored engineering design</li>
            <li>✔ Industrial-grade systems</li>
            <li>✔ Energy efficient planning</li>
            <li>✔ On-site consultation</li>
          </ul>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          className="personal-card"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >

          <h3>Get a Free Quote</h3>

          <div className="form-grid">

            <div className="field">
              <label>Name</label>
              <input name="name" onChange={handleChange} />
            </div>

            <div className="field">
              <label>Phone</label>
              <input name="phone" onChange={handleChange} />
            </div>

            <div className="field">
              <label>City</label>
              <input name="city" onChange={handleChange} />
            </div>

            <div className="field">
              <label>System Type</label>
              <select name="system" onChange={handleChange}>
                <option>Select</option>
                <option>Solar Systems</option>
                <option>Pumping Systems</option>
                <option>Drilling Systems</option>
                <option>Water Accessories</option>
              </select>
            </div>

            <div className="field">
              <label>Panel Type</label>
              <select name="panelType" onChange={handleChange}>
                <option>Select Panel</option>
                <option>Monocrystalline</option>
                <option>Polycrystalline</option>
                <option>Half Cut Technology</option>
              </select>
            </div>

            <div className="field">
              <label>Inverter</label>
              <select name="inverter" onChange={handleChange}>
                <option>Select Inverter</option>
                <option>INVT GD100</option>
                <option>INVT GD170</option>
                <option>INVT GD200</option>
              </select>
            </div>

          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            Get My Personalized Quote
          </button>

        </motion.div>

      </div>

    </section>
  )
}