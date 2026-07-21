import { Link } from "react-router-dom"

import "../../styles/components/footer.scss"

import logo from "../../assets/images/optimized/logo1-360.png"

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from "react-icons/fa"

const footerGroups = [
  {
    title: "About Us",
    links: [
      { label: "Who We Are", to: "/about/who-we-are" },
      { label: "What We Do", to: "/about/what-we-do" },
      { label: "Our Purpose", to: "/about/purpose" },
      { label: "Our Partners", to: "/about/partners" },
      { label: "Case Studies", to: "/about/case-studies" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { label: "Services", to: "/solutions/services" },
      { label: "Targeted Industries", to: "/solutions/industries" },
      { label: "Applications", to: "/solutions/applications" },
      { label: "Categories", to: "/solutions/categories" }
    ]
  },
  {
    title: "Contact Us",
    links: [
      { label: "Products & Services", to: "/contact/products&services" },
      { label: "Other Enquiries", to: "/contact/enquiries" }
    ]
  },
  {
    title: "Media",
    links: [
      { label: "Latest News", to: "/media/news" },
      { label: "Social Media", to: "/media/social" }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="footer-main">

      <div className="container">

        {/* TOP GRID */}
        <div className="footer-row">

          {/* BRAND */}
          <div className="footer-brand">

            <Link to="/">
              <img
                src={logo}
                className="footer-logo"
                alt="FJ Group"
                width="360"
                height="360"
                loading="lazy"
                decoding="async"
              />
            </Link>

            <p>
              FJ Group delivers engineering solutions in solar,
              pumping, drilling and industrial systems across Pakistan.
            </p>

          </div>

          {footerGroups.map((group) => (
            <div className="footer-col" key={group.title}>

              <h6>{group.title}</h6>

              <ul>
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

          {/* CONTACT INFO */}
          <div className="footer-contact">

            <h6>Get in Touch</h6>

            <p>📞 03111777286</p>

            <p>✉ Info@fjgroup.pk</p>

            <p>
              📍 Opp. Faysal Bank,<br />
              Railway Road,<br />
              Chowk Shahedan, Multan
            </p>

            <p>🕒 10:00 AM – 8:00 PM</p>

          </div>

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

            <a
              href="https://www.facebook.com/fjtradingcorporation/"
              aria-label="FJ Group on Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/fjgroup.pk?igsh=dzRwdWY5am54dXAw"
              aria-label="FJ Group on Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com/@fjgrouppk?si=f5DvNaA1kXabAEx2"
              aria-label="FJ Group on YouTube"
              target="_blank"
              rel="noreferrer"
            >
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
