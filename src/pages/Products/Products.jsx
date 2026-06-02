import { motion } from "framer-motion"
import { FiShoppingBag, FiArrowRight } from "react-icons/fi"
import "../../styles/components/products.scss"

export default function Products() {
  return (
    <div className="products-page">

      {/* HERO */}
      <section className="products-hero">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Products</h1>
          <p>
            Explore our comprehensive range of industrial engineering products
            designed for water, energy, and infrastructure applications.
          </p>
        </motion.div>
      </section>

      {/* PRODUCTS OVERVIEW */}
      <section className="products-overview">
        <div className="container">

          <motion.div
            className="products-content"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <div className="products-icon">
              <FiShoppingBag />
            </div>

            <h2>Our Product Range</h2>

            <p>
              We offer a wide selection of high-quality industrial products including
              drilling systems, pumping solutions, solar energy equipment, and water
              infrastructure components. Each product is engineered for reliability
              and long-term performance in demanding industrial environments.
            </p>

            <p>
              Our products serve various sectors including agriculture, manufacturing,
              construction, and municipal infrastructure, providing efficient and
              sustainable solutions for modern engineering challenges.
            </p>

          </motion.div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="products-cta">
        <div className="container">

          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            <h2>Ready to Order?</h2>

            <p>
              For more info/ordering visit our store to browse our complete product
              catalog and place your orders online.
            </p>

            <a
              href="#"
              className="store-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Store
              <FiArrowRight />
            </a>

          </motion.div>

        </div>
      </section>

    </div>
  )
}