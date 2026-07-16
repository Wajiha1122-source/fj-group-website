import { useState, useRef } from "react"
import { motion } from "framer-motion"
import "../../styles/components/personalSolution.scss"
import { loadHtml2Canvas } from "../../utils/loadHtml2Canvas.js"

export default function PersonalizedSolution() {

  const [form, setForm] = useState({})
  const [invoiceGenerated, setInvoiceGenerated] = useState(false)
  const [invoiceImage, setInvoiceImage] = useState(null)
  const invoiceRef = useRef(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const generateInvoice = async () => {
    if (invoiceRef.current) {
      try {
        const html2canvas = await loadHtml2Canvas()
        const canvas = await html2canvas(invoiceRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff'
        })
        const imageData = canvas.toDataURL('image/png')
        setInvoiceImage(imageData)
        setInvoiceGenerated(true)
      } catch (error) {
        console.error('Error generating invoice:', error)
      }
    }
  }

  const downloadInvoice = () => {
    if (invoiceImage) {
      const link = document.createElement('a')
      link.href = invoiceImage
      link.download = `FJ_Group_Personalized_Quote_${form.name || 'Customer'}.png`
      link.click()
    }
  }

  const shareViaWhatsApp = async () => {
    if (invoiceImage) {
      // Download the invoice first
      downloadInvoice()

      // Open WhatsApp with a message
      const message = `Hello! I've attached my personalized quote request invoice for FJ Group. Please review the details.`
      const encodedMessage = encodeURIComponent(message)
      const whatsappNumber = '923459637111'
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank')
    }
  }

  const handleSubmit = async () => {
    await generateInvoice()
  }

  return (
    <section className="personal-section">

      {/* ================= INVOICE TEMPLATE (HIDDEN) ================= */}
      <div style={{ position: 'fixed', left: '-9999px', top: '0' }}>
        <div ref={invoiceRef} style={{
          width: '600px',
          padding: '40px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          fontFamily: 'Arial, sans-serif'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
          }}>
            {/* Header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '30px',
              paddingBottom: '20px',
              borderBottom: '3px solid #667eea'
            }}>
              <h1 style={{
                color: '#667eea',
                fontSize: '32px',
                margin: '0 0 10px 0',
                fontWeight: 'bold'
              }}>📋 PERSONALIZED QUOTE REQUEST</h1>
              <p style={{
                color: '#666',
                fontSize: '14px',
                margin: '0'
              }}>FJ Group - Industrial Solutions</p>
            </div>

            {/* Customer Details */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{
                color: '#333',
                fontSize: '18px',
                margin: '0 0 15px 0',
                paddingBottom: '10px',
                borderBottom: '2px solid #eee'
              }}>👤 CUSTOMER DETAILS</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <p style={{ color: '#999', fontSize: '12px', margin: '0 0 5px 0' }}>NAME</p>
                  <p style={{ color: '#333', fontSize: '16px', margin: '0', fontWeight: '500' }}>{form.name || 'Not provided'}</p>
                </div>
                <div>
                  <p style={{ color: '#999', fontSize: '12px', margin: '0 0 5px 0' }}>PHONE</p>
                  <p style={{ color: '#333', fontSize: '16px', margin: '0', fontWeight: '500' }}>{form.phone || 'Not provided'}</p>
                </div>
                <div>
                  <p style={{ color: '#999', fontSize: '12px', margin: '0 0 5px 0' }}>CITY</p>
                  <p style={{ color: '#333', fontSize: '16px', margin: '0', fontWeight: '500' }}>{form.city || 'Not provided'}</p>
                </div>
                <div>
                  <p style={{ color: '#999', fontSize: '12px', margin: '0 0 5px 0' }}>DATE</p>
                  <p style={{ color: '#333', fontSize: '16px', margin: '0', fontWeight: '500' }}>{new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* System Specifications */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{
                color: '#333',
                fontSize: '18px',
                margin: '0 0 15px 0',
                paddingBottom: '10px',
                borderBottom: '2px solid #eee'
              }}>⚙️ SYSTEM SPECIFICATIONS</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <p style={{ color: '#999', fontSize: '12px', margin: '0 0 5px 0' }}>SYSTEM TYPE</p>
                  <p style={{ color: '#333', fontSize: '16px', margin: '0', fontWeight: '500' }}>{form.system || 'Not selected'}</p>
                </div>
                <div>
                  <p style={{ color: '#999', fontSize: '12px', margin: '0 0 5px 0' }}>PANEL TYPE</p>
                  <p style={{ color: '#333', fontSize: '16px', margin: '0', fontWeight: '500' }}>{form.panelType || 'Not selected'}</p>
                </div>
                <div>
                  <p style={{ color: '#999', fontSize: '12px', margin: '0 0 5px 0' }}>INVERTER</p>
                  <p style={{ color: '#333', fontSize: '16px', margin: '0', fontWeight: '500' }}>{form.inverter || 'Not selected'}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{
              marginTop: '30px',
              paddingTop: '20px',
              borderTop: '2px solid #eee',
              textAlign: 'center'
            }}>
              <p style={{ color: '#999', fontSize: '12px', margin: '0' }}>🌐 Generated via FJ Group Website</p>
              <p style={{ color: '#667eea', fontSize: '14px', margin: '5px 0 0 0', fontWeight: 'bold' }}>📞 +92 345 963 7111</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= INVOICE GENERATED MODAL ================= */}
      {invoiceGenerated && (
        <div className="invoice-modal-overlay" onClick={() => setInvoiceGenerated(false)}>
          <div className="invoice-modal" onClick={(e) => e.stopPropagation()}>
            <h2>📋 Invoice Generated!</h2>
            <p>Your personalized quote request has been converted to a professional invoice image.</p>
            <div className="invoice-actions">
              <button className="download-btn" onClick={downloadInvoice}>
                📥 Download Invoice
              </button>
              <button className="whatsapp-btn" onClick={shareViaWhatsApp}>
                📱 Share via WhatsApp
              </button>
            </div>
            <button className="close-btn" onClick={() => setInvoiceGenerated(false)}>×</button>
          </div>
        </div>
      )}

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
              <select name="system" defaultValue="" onChange={handleChange}>
                <option value="" disabled>Select</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Agriculture</option>
              </select>
            </div>

            <div className="field">
              <label>Panel Type</label>
              <select name="panelType" defaultValue="" onChange={handleChange}>
                <option value="" disabled>Select Panel</option>
                <option>JINKO</option>
                <option>CANADIAN</option>
                <option>LONGI</option>
                <option>CORA DAWNX10</option>
                <option>AIKO STELLAR</option>
                <option>RISEN HJT</option>
                <option>LONGI X7</option>
                <option>TRINA</option>
                <option>CROWN 20BB</option>
                <option>RONMA</option>
                <option>LONGI 225W</option>
              </select>
            </div>

            <div className="field">
              <label>Inverter</label>
              <select name="inverter" defaultValue="" onChange={handleChange}>
                <option value="" disabled>Select Inverter</option>
                <option>Solis</option>
                <option>Aepower</option>
                <option>INVT</option>
                <option>VFD's</option>
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
