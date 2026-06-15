import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { newsData } from "../../data/newsData"
import "../../styles/components/latestnews.scss"

export default function LatestNews() {
  return (
    <section className="news-page">
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
          Insights, innovations, and engineering updates shaping the future
          of industrial solutions.
        </motion.p>
      </div>

      <div className="container">
        <div className="news-grid">
          {newsData.map((item, index) => (
            <motion.div
              className="news-card"
              key={item.slug}
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
                <Link to={`/media/news/${item.slug}`}>
                  Read More &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
