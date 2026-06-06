import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import logo from "../../assets/images/logo.png"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  // ✅ MOBILE MENU STATE (ADDED)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null)

  // ✅ SEARCH STATE
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const location = useLocation()
  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menu = [
    {
      title: "About Us",
      links: [
        { name: "Who we are", path: "/about/who-we-are" },
        { name: "What we do", path: "/about/what-we-do" },
        { name: "Our purpose", path: "/about/purpose" },
        { name: "Our partners", path: "/about/partners" },
        { name: "Case Studies", path: "/about/case-studies" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Services", path: "/solutions/services" },
        { name: "Targeted Industries", path: "/solutions/industries" },
        { name: "Applications", path: "/solutions/applications" },
        { name: "Categories", path: "/solutions/categories" }
      ]
    },
    {
      title: "Products",
      type: "single",
      path: "/products"
    },
    {
      title: "Contact Us",
      links: [
        { name: "Products & Services", path: "/contact/products&services" },
        { name: "Other Enquiries", path: "/contact/enquiries" }
      ]
    },
    {
      title: "Media",
      links: [
        { name: "Latest News", path: "/media/news" },
        { name: "Social Media", path: "/media/social" }
      ]
    }
  ]

  const searchIndex = menu.flatMap(item => {
    if (item.type === "single") {
      return [{ name: item.title, path: item.path }]
    }

    return item.links.map(link => ({
      name: link.name,
      path: link.path
    }))
  })

  const handleSearch = (value) => {
    setQuery(value)

    if (!value.trim()) {
      setResults([])
      return
    }

    const filtered = searchIndex.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )

    setResults(filtered)
  }

  const goToPage = (path) => {
    setSearchOpen(false)
    setQuery("")
    setResults([])
    setMenuOpen(false) // ✅ CLOSE MENU ON CLICK (MOBILE FIX)
    setMobileSubmenuOpen(null)
    window.location.href = path
  }

  const toggleMobileSubmenu = (index) => {
    if (mobileSubmenuOpen === index) {
      setMobileSubmenuOpen(null)
    } else {
      setMobileSubmenuOpen(index)
    }
  }

  return (
    <nav
      className={`navbar-main ${(scrolled || !isHome) ? "scrolled" : ""}`}
      onMouseLeave={() => setActiveMenu(null)}
    >

      {/* TOP ROW */}
      <div className="top-row container">

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="FJ Group" />
          </Link>
        </div>

        {/* ✅ HAMBURGER (MOBILE ONLY) */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </div>

      {/* BOTTOM ROW */}
      <div className="bottom-row">

        <div className="full-line"></div>

        <div className="bottom-content container">

          {/* ✅ MENU UPDATED */}
          <ul className={`menu ${menuOpen ? "active" : ""}`}>
            {menu.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setActiveMenu(index)}
                onClick={() => {
                  if (item.type === "single") {
                    setMenuOpen(false)
                  } else {
                    toggleMobileSubmenu(index)
                  }
                }}
              >
                {item.type === "single" ? (
                  <Link to={item.path}>{item.title}</Link>
                ) : (
                  <span className="menu-item-with-submenu">
                    {item.title}
                    <span className="submenu-arrow">{mobileSubmenuOpen === index ? '▼' : '▶'}</span>
                  </span>
                )}
                {/* Mobile Submenu */}
                {item.links && mobileSubmenuOpen === index && (
                  <ul className="mobile-submenu">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <Link to={link.path} onClick={() => goToPage(link.path)}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* SEARCH BUTTON */}
          <button
            className="search-btn"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <FiSearch />
          </button>

          {/* SEARCH BOX */}
          {searchOpen && (
            <div className="search-box">

              <input
                type="text"
                placeholder="Search website..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
              />

              {results.length > 0 && (
                <div className="search-results">
                  {results.map((item, i) => (
                    <div
                      key={i}
                      className="search-item"
                      onClick={() => goToPage(item.path)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

        </div>

        <div className="full-line"></div>

        {/* MEGA MENU */}
        {activeMenu !== null && menu[activeMenu]?.links && (
          <div className="mega-menu">

            <div className="container mega-grid">

              <div className="mega-title">
                <h3>{menu[activeMenu].title}</h3>
              </div>

              <div className="mega-links">
                {menu[activeMenu].links.map((link, i) => (
                  <Link key={i} to={link.path}>
                    {link.name}
                  </Link>
                ))}
              </div>

            </div>

          </div>
        )}

      </div>

    </nav>
  )
}