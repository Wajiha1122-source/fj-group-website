import HeroSlider from "../../components/sliders/HeroSlider/HeroSlider.jsx"
import AboutGlanceSection from "../../components/sections/AboutGlanceSection.jsx"
import SolutionsSection from "../../components/sections/SolutionsSection.jsx"
import PersonalizedSolution from "../../components/sections/PersonalizedSolution.jsx"
import NewsSection from "../../components/sections/NewsSection.jsx"
import CasesSection from "../../components/sections/CasesSection.jsx"
import SolarCalculatorSection from "../../components/sections/SolarCalculatorSection.jsx"
import OwnerIntroSection from "../../components/sections/OwnerIntroSection.jsx"
import BrandsSection from "../../components/sections/BrandsSection.jsx"
import LatestNewsNotification from "../../components/sections/LatestNewsNotification.jsx"


export default function Home() {
  return (
    <>
      <HeroSlider />
      <NewsSection />
      <AboutGlanceSection />
      <SolutionsSection />
      <PersonalizedSolution/>
      <CasesSection />
      <SolarCalculatorSection />
      <OwnerIntroSection />
      <BrandsSection />
      <LatestNewsNotification />
    </>
  )
}
