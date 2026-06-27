import { Navigate, Link, useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

import { blogData } from "../../data/blogData"
import "../../styles/components/blogs.scss"

export default function BlogArticle() {
  const { slug } = useParams()
  const blog = blogData.find((item) => item.slug === slug)

  if (!blog) return <Navigate to="/blogs" replace />

  const related = blogData.find((item) => item.slug !== slug)

  return (
    <article className="blog-article">
      <header className={`blog-article__hero blog-article__hero--${blog.accent}`}>
        <div className="container blog-article__hero-content">
          <motion.div
            className="blog-article__masthead"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <Link className="blog-article__back" to="/blogs">
              <FiArrowLeft />
              Back to blogs
            </Link>

            <div className="blog-article__meta">
              <span>{blog.category}</span>
              <span>{blog.readTime}</span>
            </div>

            <h1>{blog.title}</h1>
            <p>{blog.intro}</p>
          </motion.div>
        </div>
      </header>

      <div className="container blog-article__layout">
        <nav className="blog-article__rail" aria-label="Blog sections">
          <span>Article</span>
          {blog.sections.map((section, index) => (
            <a href={`#section-${index + 1}`} key={section.heading}>
              {String(index + 1).padStart(2, "0")}
              {section.heading}
            </a>
          ))}
        </nav>

        <main className="blog-article__content">
          <motion.figure
            className="blog-article__image"
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            viewport={{ once: false, amount: 0.22 }}
          >
            <img src={blog.image} alt={blog.imageAlt} loading="lazy" />
          </motion.figure>

          {blog.sections.map((section, index) => (
            <div className="blog-article__block" key={section.heading}>
              <motion.section
                className="blog-article__section"
                id={`section-${index + 1}`}
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.04 }}
                viewport={{ once: false, amount: 0.18 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </motion.section>
            </div>
          ))}
        </main>

        {related && (
          <motion.aside
            className="blog-article__next"
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <span>Next blog</span>
            <h2>{related.title}</h2>
            <Link to={`/blogs/${related.slug}`}>
              Read next
              <FiArrowRight />
            </Link>
          </motion.aside>
        )}
      </div>
    </article>
  )
}
