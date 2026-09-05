import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import "../../styles/components/products.scss"

import handPump from "../../assets/images/products-showcase/hand-pump-transparent.png"
import productSlide1 from "../../assets/images/products-showcase/product-slide-1-transparent.png"
import productSlide2 from "../../assets/images/products-showcase/product-slide-2-transparent.png"
import productSlide3 from "../../assets/images/products-showcase/product-slide-3.jpeg"
import productSlide4 from "../../assets/images/products-showcase/product-slide-4-transparent.png"

const productSlides = [
  {
    alt: "Water hand pump",
    image: handPump
  },
  {
    alt: "Pumping product",
    image: productSlide1
  },
  {
    alt: "Engineering product",
    image: productSlide2
  },
  {
    alt: "Water system product",
    image: productSlide3
  },
  {
    alt: "Industrial accessory",
    image: productSlide4
  }
]

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProduct((current) => (current + 1) % productSlides.length)
    }, 3200)

    return () => clearInterval(timer)
  }, [])

  const currentProduct = productSlides[activeProduct]

  return (
    <div className="products-page">
      {/* PRODUCT SHOWCASE */}
      <section className="products-showcase">
        <div className="container products-showcase__layout">
          <motion.div
            className="products-showcase__header"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span>PRODUCT RANGE</span>
            <h2>Practical products for reliable field performance</h2>
          </motion.div>

          <div className="product-premium-slider" aria-label="Product slideshow">
            <div className="product-premium-stage">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentProduct.alt}
                  src={currentProduct.image}
                  alt={currentProduct.alt}
                  initial={{ opacity: 0, x: 90, scale: 0.94 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -90, scale: 0.94 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                />
              </AnimatePresence>
            </div>

            <div className="product-premium-dots" aria-label="Product slide controls">
              {productSlides.map((item, index) => (
                <button
                  className={activeProduct === index ? "active" : ""}
                  type="button"
                  key={item.alt}
                  onClick={() => setActiveProduct(index)}
                  aria-label={`Show ${item.alt}`}
                />
              ))}
            </div>
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
