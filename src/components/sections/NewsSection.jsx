import { Link } from "react-router-dom"
import "../../styles/components/news.scss"

import { newsData } from "../../data/newsData"

export default function NewsSection() {
  return (
    <section className="news-section" id="latest-news">

      <div className="container">

        {/* HEADER */}
        <div
          className="news-header"
        >
          <span>READ THE LATEST NEWS</span>

          <h2>
            News and updates from FJ Group
          </h2>

          <p>
            Stay updated with the latest innovations, sustainability initiatives,
            and industrial developments shaping the future of engineering.
          </p>
        </div>


        {/* NEWS GRID */}
        <div className="news-grid">

          {newsData.slice(0, 3).map((item, index) => (
            <div
              className="news-card"
              key={index}
            >

              {/* IMAGE */}
              <div className="news-image">
                <img src={item.image} alt="" loading="lazy" decoding="async" />
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

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
