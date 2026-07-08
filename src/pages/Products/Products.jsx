import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import "../../styles/components/products.scss"

import handPump from "../../assets/images/products-showcase/hand-pump.jpeg"
import productSlide1 from "../../assets/images/products-showcase/product-slide-1.jpeg"
import productSlide2 from "../../assets/images/products-showcase/product-slide-2.jpeg"
import productSlide3 from "../../assets/images/products-showcase/product-slide-3.jpeg"
import productSlide4 from "../../assets/images/products-showcase/product-slide-4.jpeg"

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
  const marqueeItems = [...productSlides, ...productSlides]

  return (
    <div className="products-page">
      {/* PRODUCT SHOWCASE */}
      <section className="products-showcase">
        <div className="products-marquee" aria-label="Sliding product showcase">
          <div className="products-marquee__track">
            {marqueeItems.map((item, index) => (
              <div className="product-slide-item" key={`${item.alt}-${index}`}>
                <img src={item.image} alt={item.alt} />
              </div>
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
