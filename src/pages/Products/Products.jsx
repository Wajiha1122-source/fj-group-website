import { motion } from "framer-motion"
import { FiShoppingBag, FiArrowRight } from "react-icons/fi"
import "../../styles/components/products.scss"

import handPump from "../../assets/images/products-showcase/hand-pump.jpeg"
import productSlide1 from "../../assets/images/products-showcase/product-slide-1.jpeg"
import productSlide2 from "../../assets/images/products-showcase/product-slide-2.jpeg"
import productSlide3 from "../../assets/images/products-showcase/product-slide-3.jpeg"
import productSlide4 from "../../assets/images/products-showcase/product-slide-4.jpeg"

const productSlides = [
  {
    title: "Water Hand Pump",
    image: handPump
  },
  {
    title: "Pumping Product",
    image: productSlide1
  },
  {
    title: "Engineering Product",
    image: productSlide2
  },
  {
    title: "Water System Product",
    image: productSlide3
  },
  {
    title: "Industrial Accessory",
    image: productSlide4
  }
]

export default function Products() {
  const marqueeItems = [...productSlides, ...productSlides]

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

      {/* PRODUCT SHOWCASE */}
      <section className="products-showcase">
        <motion.div
          className="products-showcase__header container"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>PRODUCT RANGE</span>
          <h2>Practical products for reliable field performance</h2>
        </motion.div>

        <div className="products-marquee" aria-label="Sliding product showcase">
          <div className="products-marquee__track">
            {marqueeItems.map((item, index) => (
              <article className="product-slide-card" key={`${item.title}-${index}`}>
                <div className="product-slide-card__image">
                  <img src={item.image} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
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
