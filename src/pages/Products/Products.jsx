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
              href="https://irshadandcompany.com/shop/"
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