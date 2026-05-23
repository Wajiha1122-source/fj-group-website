import { useLocation } from "react-router-dom"

import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

export default function MainLayout({ children }) {

  const location = useLocation()

  const isHome = location.pathname === "/"

  return (
    <>
      <Navbar />

      <div className={isHome ? "" : "layout-offset"}>
        {children}
      </div>

      <Footer />
    </>
  )
}