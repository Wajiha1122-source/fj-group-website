import { motion } from "framer-motion"
import { FiArrowUpRight, FiBookOpen, FiCheckCircle, FiDownload } from "react-icons/fi"

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
            <span>Technical blog PDFs</span>
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
            <div className="blog-feature__media">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-feature__badge">
                <span>{blog.number}</span>
                {blog.category}
              </div>
            </div>

            <div className="blog-feature__content">
              <div className="blog-feature__meta">
                <span>{blog.category}</span>
                <span>{blog.readTime}</span>
              </div>

              <h2>{blog.title}</h2>
              <p>{blog.subtitle}</p>

              <div className="blog-feature__sections">
                {blog.sections.map((section) => (
                  <div key={section.heading}>
                    <h3>{section.heading}</h3>
                    <p>{section.body}</p>
                  </div>
                ))}
              </div>

              <ul className="blog-feature__highlights">
                {blog.highlights.map((highlight) => (
                  <li key={highlight}>
                    <FiCheckCircle />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="blog-feature__actions">
                <a href={blog.pdfPath} target="_blank" rel="noreferrer">
                  Open PDF
                  <FiArrowUpRight />
                </a>
                <a href={blog.pdfPath} download>
                  Download
                  <FiDownload />
                </a>
              </div>
            </div>

            <div className="blog-feature__pdf">
              <iframe
                title={`${blog.title} PDF`}
                src={`${blog.pdfPath}#toolbar=0&navpanes=0&view=FitH`}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
