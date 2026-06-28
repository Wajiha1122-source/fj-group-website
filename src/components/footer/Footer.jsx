import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import "../../styles/components/footer.scss"

import logo from "../../assets/icons/logo1.png"

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer-main">

      <div className="container">

        {/* TOP GRID */}
        <div className="footer-row">

          {/* BRAND */}
          <motion.div className="footer-brand">

            <Link to="/">
              <img
                src={logo}
                className="footer-logo"
                alt="FJ Group"
              />
            </Link>

            <p>
              FJ Group delivers engineering solutions in solar,
              pumping, drilling and industrial systems across Pakistan.
            </p>

          </motion.div>

          {/* ABOUT US */}
          <motion.div className="footer-col">

            <h6>About Us</h6>

            <ul>

              <Link to="/about/who-we-are">
                <li>Who We Are</li>
              </Link>

              <Link to="/about/what-we-do">
                <li>What We Do</li>
              </Link>

              <Link to="/about/purpose">
                <li>Our Purpose</li>
              </Link>

              <Link to="/about/partners">
                <li>Our Partners</li>
              </Link>

              <Link to="/about/case-studies">
                <li>Case Studies</li>
              </Link>

            </ul>

          </motion.div>

          {/* SOLUTIONS */}
          <motion.div className="footer-col">

            <h6>Solutions</h6>

            <ul>

              <Link to="/solutions/services">
                <li>Services</li>
              </Link>

              <Link to="/solutions/industries">
                <li>Targeted Industries</li>
              </Link>

              <Link to="/solutions/applications">
                <li>Applications</li>
              </Link>

              <Link to="/solutions/categories">
                <li>Categories</li>
              </Link>

            </ul>

          </motion.div>

          {/* PRODUCTS */}
          <motion.div className="footer-col">

            <h6>Products</h6>

           

          </motion.div>

          {/* CONTACT */}
          <motion.div className="footer-col">

            <h6>Contact Us</h6>

            <ul>

              <Link to="/contact/products&services">
                <li>Products & Services</li>
              </Link>

              <Link to="/contact/enquiries">
                <li>Other Enquiries</li>
              </Link>

            </ul>

          </motion.div>

          {/* MEDIA */}
          <motion.div className="footer-col">

            <h6>Media</h6>

            <ul>

              <Link to="/media/news">
                <li>Latest News</li>
              </Link>

              <Link to="/media/social">
                <li>Social Media</li>
              </Link>

            </ul>

          </motion.div>

          {/* CONTACT INFO */}
          <motion.div className="footer-contact">

            <h6>Get in Touch</h6>

            <p>📞 03111777286</p>

            <p>✉ Info@fjgroup.pk</p>

            <p>
              📍 Opp. Faysal Bank,<br />
              Railway Road,<br />
              Chowk Shahedan, Multan
            </p>

            <p>🕒 10:00 AM – 8:00 PM</p>

          </motion.div>

        </div>

        {/* DIVIDER */}
        <div className="footer-line"></div>

        {/* MIDDLE */}
        <div className="footer-middle">

          <div className="footer-address">

            <p>
              <b>Main office:</b> Opp. Faysal Bank, Railway Road,
              Chowk Shahedan, Multan
            </p>

            <p>
              <b>Other:</b> New Chungi #14, Near Fazal Model, Bahawalpur Road,
              Multan
            </p>

          </div>

          <div className="social-icons">

            <a href="https://www.facebook.com/fjtradingcorporation/">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/fjgroup.pk?igsh=dzRwdWY5am54dXAw">
              <FaInstagram />
            </a>

            <a href="https://youtube.com/@fjgrouppk?si=f5DvNaA1kXabAEx2">
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          © 2026 FJ Group. All rights reserved.
        </div>

      </div>

    </footer>
  )
}
