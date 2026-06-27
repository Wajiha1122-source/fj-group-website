import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FiArrowRight, FiBookOpen, FiCheckCircle } from "react-icons/fi"

import { blogData } from "../../data/blogData"
import "../../styles/components/blogs.scss"

export default function Blogs() {
  return (
    <section className="blogs-page">
      <header className="blogs-hero">
        <div className="container blogs-hero__inner">
          <motion.div
            className="blogs-hero__copy"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <span>FJ Group Blogs</span>
            <h1>Practical solar tube well insights for smarter water projects.</h1>
            <p>
              Explore concise engineering guides for pricing, planning, and
              comparing solar-powered pumping systems in agricultural use.
            </p>
          </motion.div>

          <motion.div
            className="blogs-hero__panel"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            viewport={{ once: false }}
          >
            <FiBookOpen />
            <strong>{blogData.length}</strong>
            <span>Written blog guides</span>
          </motion.div>
        </div>
      </header>

      <div className="container blogs-list">
        {blogData.map((blog, index) => (
          <motion.article
            className="blog-feature"
            key={blog.title}
            initial={{ opacity: 0, y: 58 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="blog-feature__content">
              <div className="blog-feature__meta">
                <span>{blog.number}</span>
                <span>{blog.category}</span>
                <span>{blog.readTime}</span>
              </div>

              <h2>{blog.title}</h2>
              <p>{blog.subtitle}</p>

              <ul className="blog-feature__highlights">
                {blog.highlights.map((highlight) => (
                  <li key={highlight}>
                    <FiCheckCircle />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="blog-feature__actions">
                <Link to={`/blogs/${blog.slug}`}>
                  Read More
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
