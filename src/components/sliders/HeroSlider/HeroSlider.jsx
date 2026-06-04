import { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
const video1 =
  "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520244/slide1_n5hgxh.mp4"

const video2 =
  "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520228/slide2_bontor.mp4"

export default function HeroSlider() {

  const [open, setOpen] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [invoiceGenerated, setInvoiceGenerated] = useState(false)
  const [invoiceImage, setInvoiceImage] = useState(null)

  const [form, setForm] = useState({})
  const invoiceRef = useRef(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const generateInvoice = async () => {
    if (invoiceRef.current) {
      try {
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
      link.download = `FJ_Group_Quote_${form.name || 'Customer'}.png`
      link.click()
    }
  }

  const shareViaWhatsApp = () => {
    if (invoiceImage) {
      // For image sharing, we need to use WhatsApp's share functionality
      // Since we can't directly send images via wa.me URL, we'll download it first
      // and then the user can share it manually
      downloadInvoice()
      alert('Invoice downloaded! Please share the downloaded image via WhatsApp.')
    }
  }

  const handleSubmit = async () => {
    await generateInvoice()
    closeModal()
  }

  // OPEN with animation delay (IMPORTANT)
  const openModal = () => {
    setOpen(true)
    setTimeout(() => setAnimate(true), 10)
  }

  // CLOSE with animation first
  const closeModal = () => {
    setAnimate(false)
    setTimeout(() => setOpen(false), 300)
  }

  return (
    <div className="hero-section">

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
              }}>📋 QUOTE REQUEST</h1>
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

            {/* System Requirements */}
            <div style={{ marginBottom: '25px' }}>
              <h2 style={{
                color: '#333',
                fontSize: '18px',
                margin: '0 0 15px 0',
                paddingBottom: '10px',
                borderBottom: '2px solid #eee'
              }}>⚙️ SYSTEM REQUIREMENTS</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <p style={{ color: '#999', fontSize: '12px', margin: '0 0 5px 0' }}>SYSTEM TYPE</p>
                  <p style={{ color: '#333', fontSize: '16px', margin: '0', fontWeight: '500' }}>{form.system || 'Not selected'}</p>
                </div>
                <div>
                  <p style={{ color: '#999', fontSize: '12px', margin: '0 0 5px 0' }}>MONTHLY CONSUMPTION</p>
                  <p style={{ color: '#333', fontSize: '16px', margin: '0', fontWeight: '500' }}>{form.consumption || 'Not provided'} kWh</p>
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
            <p>Your quote request has been converted to a professional invoice image.</p>
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

      {/* ================= MODAL ================= */}
      {open && (
        <div
          className={`quote-overlay ${animate ? "active" : ""}`}
          onClick={closeModal}
        >

          <div
            className={`quote-modal ${animate ? "show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >

            <div className="quote-header">
              <h2>Get a Free Quote</h2>
              <p>Tell us your requirement — we’ll design the right engineering solution for you</p>
            </div>

            <div className="quote-grid">

              <div className="field">
                <span className="label">Full Name</span>
                <input name="name" onChange={handleChange} />
              </div>

              <div className="field">
                <span className="label">Phone Number</span>
                <input name="phone" onChange={handleChange} />
              </div>

              <div className="field">
                <span className="label">City</span>
                <input name="city" onChange={handleChange} />
              </div>

              <div className="field">
                <span className="label">System Type</span>
                <select name="system" onChange={handleChange}>
                  <option>Select system</option>
                  <option>Solar Systems</option>
                  <option>Pumping Systems</option>
                  <option>Drilling Systems</option>
                  <option>Water Accessories</option>
                </select>
              </div>

            </div>

            <div className="field full">
              <span className="label">Monthly Consumption (kWh)</span>
              <input name="consumption" />
            </div>

            <button className="submit-btn" onClick={handleSubmit}>Get My Quote</button>

            <button className="close-btn" onClick={closeModal}>×</button>

          </div>
        </div>
      )}

      {/* ================= SLIDER ================= */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
      >

        <SwiperSlide>
          <div className="hero-slide">
            <video autoPlay muted loop playsInline className="hero-video">
              <source src={video1} type="video/mp4" />
            </video>

            <div className="hero-overlay" />

            <div className="hero-content">
              <h1>Smart Industrial Solutions</h1>
              <p>Modern engineering for a better future</p>
              <button onClick={openModal}>Get a Quote</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-slide">
            <video autoPlay muted loop playsInline className="hero-video">
              <source src={video2} type="video/mp4" />
            </video>

            <div className="hero-overlay" />

            <div className="hero-content">
              <h1>Energy Efficient Systems</h1>
              <p>Built for performance and sustainability</p>
              <button onClick={openModal}>Get a Quote</button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}