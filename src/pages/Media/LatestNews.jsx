import { motion } from "framer-motion"
import "../../styles/components/latestnews.scss"

import news1 from "../../assets/images/news1.png"
import news2 from "../../assets/images/news2.png"
import news3 from "../../assets/images/news3.png"

const newsData = [
  {
    image: news1,
    title: "FJ Group launches next-generation industrial systems",
    desc: "Building smarter infrastructure solutions for modern industries.",
    number: "01"
  },
  {
    image: news2,
    title: "Reducing energy consumption through intelligent engineering",
    desc: "Focused on efficient technologies for a sustainable future.",
    number: "02"
  },
  {
    image: news3,
    title: "Transforming industrial operations with automation",
    desc: "Delivering scalable and reliable enterprise-grade systems.",
    number: "03"
  }
]

export default function LatestNews() {
  return (
    <section className="news-page">

      {/* HERO */}
      <div className="news-hero">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          Latest News
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
        >
          Insights, innovations, and engineering updates shaping the future of industrial solutions.
        </motion.p>

      </div>

      {/* GRID */}
      <div className="container">

        <div className="news-grid">

          {newsData.map((item, index) => (
            <motion.div
              className="news-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >

              <div className="news-image">
                <img src={item.image} alt="" />
              </div>

              <div className="news-content">

                <div className="news-number">{item.number}</div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <button>Read More →</button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}