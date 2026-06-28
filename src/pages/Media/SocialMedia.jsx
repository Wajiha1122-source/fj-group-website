import { motion } from "framer-motion"
import "../../styles/components/socialmedia.scss"

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    desc: "Updates, announcements and company news.",
    link: "https://www.facebook.com/fjtradingcorporation/"
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    desc: "Behind the scenes, projects and field work.",
    link: "https://www.instagram.com/fjgroup.pk?igsh=dzRwdWY5am54dXAw"
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    desc: "Engineering systems, installations and demos.",
    link: "https://youtube.com/@fjgrouppk?si=f5DvNaA1kXabAEx2"
  }
]

export default function SocialMedia() {
  return (
    <section className="social-page">

      {/* SAME HEADER STYLE AS YOUR OTHER PAGES */}
      <div className="page-header">

        

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Social Media
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Connect with FJ Group across all platforms for updates and insights.
        </motion.p>

      </div>

      {/* GRID */}
      <div className="container">

        <div className="social-grid">

          {socialLinks.map((item, index) => (
            <motion.a
              href={item.link}
              key={index}
              className="social-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >

              <div className="icon-wrapper">
                {item.icon}
              </div>

              <h3>{item.name}</h3>
              <p>{item.desc}</p>

              <span className="link">Visit →</span>

            </motion.a>
          ))}

        </div>

      </div>

    </section>
  )
}
