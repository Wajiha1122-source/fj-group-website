import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "../../styles/components/news.scss"

import { newsData } from "../../data/newsData"

export default function NewsSection() {
  return (
    <section className="news-section" id="latest-news">

      <div className="container">

        {/* HEADER */}
        <motion.div
          className="news-header"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span>READ THE LATEST NEWS</span>

          <h2>
            News and updates from FJ Group
          </h2>

          <p>
            Stay updated with the latest innovations, sustainability initiatives,
            and industrial developments shaping the future of engineering.
          </p>
        </motion.div>


        {/* NEWS GRID */}
        <div className="news-grid">

          {newsData.map((item, index) => (
            <motion.div
              className="news-card"
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >

              {/* IMAGE */}
              <div className="news-image">
                <img src={item.image} alt="" />
              </div>


              {/* CONTENT */}
              <div className="news-content">

                <div className="news-number">
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

                <Link to={`/media/news/${item.slug}`}>
                  Read More
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}
