import { lazy, Suspense, useEffect, useRef } from "react"

import HeroSlider from "../../components/sliders/HeroSlider/HeroSlider.jsx"
import NewsSection from "../../components/sections/NewsSection.jsx"
import "../../styles/components/homeMotion.scss"

const AboutGlanceSection = lazy(() =>
  import("../../components/sections/AboutGlanceSection.jsx")
)
const SolutionsSection = lazy(() =>
  import("../../components/sections/SolutionsSection.jsx")
)
const PersonalizedSolution = lazy(() =>
  import("../../components/sections/PersonalizedSolution.jsx")
)
const CasesSection = lazy(() => import("../../components/sections/CasesSection.jsx"))
const SolarCalculatorSection = lazy(() =>
  import("../../components/sections/SolarCalculatorSection.jsx")
)
const ProjectProcessSection = lazy(() =>
  import("../../components/sections/ProjectProcessSection.jsx")
)
const CentralPivotSection = lazy(() =>
  import("../../components/sections/CentralPivotSection.jsx")
)
const OwnerIntroSection = lazy(() =>
  import("../../components/sections/OwnerIntroSection.jsx")
)
const BrandsSection = lazy(() => import("../../components/sections/BrandsSection.jsx"))
const LatestNewsNotification = lazy(() =>
  import("../../components/sections/LatestNewsNotification.jsx")
)

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
      <Suspense fallback={null}>
        <AboutGlanceSection />
        <SolutionsSection />
        <PersonalizedSolution/>
        <CasesSection />
        <SolarCalculatorSection />
        <ProjectProcessSection />
        <CentralPivotSection />
        <OwnerIntroSection />
        <BrandsSection />
        <LatestNewsNotification />
      </Suspense>
    </main>
  )
}
