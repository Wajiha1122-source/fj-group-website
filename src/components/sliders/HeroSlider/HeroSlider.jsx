import { useState, useEffect } from "react"
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

  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    const message = `
*New Quote Request - FJ Group*

*Name:* ${form.name || 'Not provided'}
*Phone:* ${form.phone || 'Not provided'}
*City:* ${form.city || 'Not provided'}
*System Type:* ${form.system || 'Not selected'}
*Monthly Consumption:* ${form.consumption || 'Not provided'}

---
Sent from FJ Group Website
    `.trim()

    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = '923459637111'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
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