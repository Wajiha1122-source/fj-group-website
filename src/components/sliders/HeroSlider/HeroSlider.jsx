import { useState, useEffect, useRef } from "react"

import solarPumpFlow from "../../../assets/images/hero-showcase/solar-pump-flow.jpeg"
import solarWaterSystem from "../../../assets/images/hero-showcase/solar-water-system.jpeg"
import solarPanelField from "../../../assets/images/hero-showcase/solar-panel-field.jpeg"
import solarArrayWide from "../../../assets/images/hero-showcase/solar-array-wide.jpeg"
import drillingWaterSite from "../../../assets/images/hero-showcase/drilling-water-site.jpeg"
import { loadHtml2Canvas } from "../../../utils/loadHtml2Canvas.js"

const video1 =
  "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520244/slide1_n5hgxh.mp4"

const video2 =
  "https://res.cloudinary.com/dcbcubcrq/video/upload/v1779520228/slide2_bontor.mp4"

const heroScenes = [
  {
    variant: "statement",
    eyebrow: "FJ GROUP SYSTEMS",
    title: "Engineering Water, Energy & Industry Forward.",
    copy:
      "Integrated solar, pumping, drilling and water infrastructure solutions built around real operating needs.",
    backdrop: solarArrayWide
  },
  {
    variant: "video",
    eyebrow: "SOLAR PUMPING",
    title: "Built For Performance. Designed For Reliability.",
    copy:
      "From panel sizing to controlled water flow, FJ Group connects renewable energy with dependable field output.",
    button: "Get Solar Quote",
    mediaType: "video",
    media: video2,
    backdrop: solarWaterSystem
  },
  {
    variant: "list",
    eyebrow: "WHAT WE DELIVER",
    title: "One Group. Connected Engineering Disciplines.",
    copy:
      "Each solution is planned as part of a working system, not as an isolated product.",
    backdrop: solarPumpFlow,
    list: ["Drilling", "Pumping", "Solar Energy", "Water Infrastructure"]
  },
  {
    variant: "image",
    eyebrow: "FIELD EXECUTION",
    title: "From Drilling Depth To Reliable Flow",
    copy:
      "Practical engineering for groundwater access, pumping systems and infrastructure projects that need long-term confidence.",
    media: drillingWaterSite,
    backdrop: solarWaterSystem
  },
  {
    variant: "kinetic",
    eyebrow: "PROJECT MOMENTUM",
    title: "Designed To Move From Site Challenge To Working System.",
    copy:
      "Our teams connect assessment, equipment, installation and support into one practical delivery path.",
    backdrop: solarPanelField,
    gallery: [solarPumpFlow, solarArrayWide, drillingWaterSite]
  }
]

export default function HeroSlider() {

  const [activeSlide, setActiveSlide] = useState(0)
  const [open, setOpen] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [invoiceGenerated, setInvoiceGenerated] = useState(false)
  const [invoiceImage, setInvoiceImage] = useState(null)

  const [form, setForm] = useState({})
  const invoiceRef = useRef(null)
  const activeScene = heroScenes[activeSlide]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroScenes.length)
    }, 3600)

    return () => clearInterval(timer)
  }, [])

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
      link.download = `FJ_Group_Quote_${form.name || 'Customer'}.png`
      link.click()
    }
  }

  const shareViaWhatsApp = async () => {
    if (invoiceImage) {
      // Download the invoice first
      downloadInvoice()

      // Open WhatsApp with a message
      const message = `Hello! I've attached my quote request invoice for FJ Group. Please review the details.`
      const encodedMessage = encodeURIComponent(message)
      const whatsappNumber = '923459637111'
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank')
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
                <select name="system" defaultValue="" onChange={handleChange}>
                  <option value="" disabled>Select system</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Agriculture</option>
                </select>
              </div>

            </div>

            <div className="field full">
              <span className="label">Monthly Consumption (kWh)</span>
              <input name="consumption" onChange={handleChange} />
            </div>

            <button className="submit-btn" onClick={handleSubmit}>Get My Quote</button>

            <button className="close-btn" onClick={closeModal}>×</button>

          </div>
        </div>
      )}

      {/* ================= CINEMATIC HERO ================= */}
      <section
        className={`fj-hero-showcase fj-hero-showcase--${activeScene.variant}`}
        aria-label="FJ Group hero showcase"
      >
        <div className="fj-hero-bg" key={`bg-${activeSlide}`}>
          <img
            src={activeScene.backdrop}
            alt=""
            loading={activeSlide === 0 ? "eager" : "lazy"}
            fetchPriority={activeSlide === 0 ? "high" : "auto"}
            decoding="async"
          />
        </div>

        <div className="fj-hero-vignette" />

        <div className="fj-hero-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="container fj-hero-layout" key={`scene-${activeSlide}`}>
          <div className="fj-hero-copy">
            <span className="fj-hero-kicker">{activeScene.eyebrow}</span>
            <h1>{activeScene.title}</h1>
            {activeScene.subtitle && <h2>{activeScene.subtitle}</h2>}
            <p>{activeScene.copy}</p>
            {activeScene.button && (
              <button type="button" onClick={openModal}>
                {activeScene.button}
              </button>
            )}
          </div>

          {activeScene.variant === "video" && (
            <div className="fj-video-panel">
              <video autoPlay muted loop playsInline preload="metadata">
                <source src={activeScene.media} type="video/mp4" />
              </video>
              <span>Solar pumping systems</span>
            </div>
          )}

          {activeScene.variant === "list" && (
            <div className="fj-work-list">
              {activeScene.list.map((item, index) => (
                <div className="fj-work-item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          )}

          {activeScene.variant === "image" && (
            <div className="fj-image-mask">
              <img
                src={activeScene.media}
                alt={activeScene.title}
                loading="lazy"
                decoding="async"
              />
              <span>Field execution</span>
            </div>
          )}

          {activeScene.variant === "kinetic" && (
            <div className="fj-kinetic-gallery">
              {activeScene.gallery.map((image, index) => (
                <img
                  src={image}
                  alt=""
                  key={image}
                  className={`gallery-${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          )}
        </div>

        <div className="fj-hero-controls" aria-label="Hero slides">
          {heroScenes.map((scene, index) => (
            <button
              className={activeSlide === index ? "active" : ""}
              type="button"
              key={`${scene.eyebrow}-${index}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show ${scene.eyebrow}`}
            >
              <span />
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
