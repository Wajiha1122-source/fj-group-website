import { useEffect, useRef } from "react"

import HeroSlider from "../../components/sliders/HeroSlider/HeroSlider.jsx"
import AboutGlanceSection from "../../components/sections/AboutGlanceSection.jsx"
import SolutionsSection from "../../components/sections/SolutionsSection.jsx"
import PersonalizedSolution from "../../components/sections/PersonalizedSolution.jsx"
import NewsSection from "../../components/sections/NewsSection.jsx"
import CasesSection from "../../components/sections/CasesSection.jsx"
import SolarCalculatorSection from "../../components/sections/SolarCalculatorSection.jsx"
import ProjectProcessSection from "../../components/sections/ProjectProcessSection.jsx"
import OwnerIntroSection from "../../components/sections/OwnerIntroSection.jsx"
import BrandsSection from "../../components/sections/BrandsSection.jsx"
import LatestNewsNotification from "../../components/sections/LatestNewsNotification.jsx"
import "../../styles/components/homeMotion.scss"


export default function Home() {
  const homeRef = useRef(null)

  useEffect(() => {
    const root = homeRef.current
    if (!root) return undefined

    const motionSections = Array.from(root.querySelectorAll(":scope > section"))

    motionSections.forEach((section, index) => {
      section.classList.add("home-motion-section")
      section.style.setProperty("--home-motion-index", index % 5)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-home-visible", entry.isIntersecting)
        })
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    )

    motionSections.forEach((section) => observer.observe(section))

    let rafId = 0
    const updateScrollDrift = () => {
      const viewportCenter = window.innerHeight / 2

      motionSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionCenter = rect.top + rect.height / 2
        const distance = (sectionCenter - viewportCenter) / window.innerHeight
        const drift = Math.max(-1, Math.min(1, distance)) * -18

        section.style.setProperty("--home-scroll-drift", `${drift.toFixed(2)}px`)
      })

      rafId = 0
    }

    const onScroll = () => {
      if (!rafId) rafId = window.requestAnimationFrame(updateScrollDrift)
    }

    updateScrollDrift()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <main className="home-motion-page" ref={homeRef}>
      <HeroSlider />
      <NewsSection />
      <AboutGlanceSection />
      <SolutionsSection />
      <PersonalizedSolution/>
      <CasesSection />
      <SolarCalculatorSection />
      <ProjectProcessSection />
      <OwnerIntroSection />
      <BrandsSection />
      <LatestNewsNotification />
    </main>
  )
}
