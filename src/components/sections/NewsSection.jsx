import { motion } from "framer-motion"
import "../../styles/components/news.scss"

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

export default function NewsSection() {
  return (
    <section className="news-section">

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

                <button>
                  Read More
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}