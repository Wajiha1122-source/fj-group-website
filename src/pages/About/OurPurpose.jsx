import { motion } from "framer-motion"
import "../../styles/components/ourPurpose.scss"
import sampleVideo from "../../assets/videos/case4.mp4"

export default function OurPurpose() {

  const pillars = [
    {
      title: "Sustainable Infrastructure",
      desc: "Long-term engineering systems designed for real-world impact."
    },
    {
      title: "Reliable Systems",
      desc: "High-performance industrial solutions built for durability."
    },
    {
      title: "Innovation",
      desc: "Modern engineering methods for future-ready systems."
    },
    {
      title: "Community Impact",
      desc: "Infrastructure improving water and energy access."
    }
  ]

  return (
    <div className="our-purpose-page">

      {/* HERO */}
      <section className="purpose-hero">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Our Purpose</h1>
          <p className="subtitle">
            Driving sustainable engineering progress through intelligent infrastructure and innovation.
          </p>
        </motion.div>
      </section>

      {/* VIDEO SECTION */}
      <section className="purpose-video">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <video
            className="bg-video"
            src={sampleVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>

        <div className="video-overlay"></div>

        <div className="video-content">
          <h2>Engineering in Action</h2>
          <p>
            Real-world industrial systems delivering performance, reliability, and sustainability.
          </p>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="purpose-pillars">

        <div className="container">

          <motion.div
            className="pillars-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span>OUR FOUNDATION</span>
            <h2>What drives our vision</h2>
          </motion.div>

          <div className="pillars-grid">

            {pillars.map((item, index) => (
              <motion.div
                className="pillar-card"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="pillar-number">0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </div>
  )
}