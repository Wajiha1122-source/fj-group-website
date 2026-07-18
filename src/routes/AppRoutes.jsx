import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"

import Home from "../pages/Home/Home"
const About = lazy(() => import("../pages/About/About"))
const WhoWeAre = lazy(() => import("../pages/About/WhoWeAre"))
const WhatWeDo = lazy(() => import("../pages/About/WhatWeDo"))
const OurPurpose = lazy(() => import("../pages/About/OurPurpose"))
const OurPartners = lazy(() => import("../pages/About/OurPartners"))
const CasesSection = lazy(() => import("../pages/About/CasesSection"))
const Services = lazy(() => import("../pages/Solutions/Services"))
const TargetedIndustries = lazy(() => import("../pages/Solutions/TargetedIndustries"))
const Applications = lazy(() => import("../pages/Solutions/Applications"))
const Categories = lazy(() => import("../pages/Solutions/Categories"))
const CentralPivotIrrigation = lazy(() => import("../pages/Solutions/CentralPivotIrrigation"))
const Products = lazy(() => import("../pages/Products/Products"))
const Contact = lazy(() => import("../pages/Contact/Contact"))
const OtherEnquiries = lazy(() => import("../pages/Contact/OtherEnquiries"))
const LatestNews = lazy(() => import("../pages/Media/LatestNews"))
const SocialMedia = lazy(() => import("../pages/Media/SocialMedia"))
const Blogs = lazy(() => import("../pages/Media/Blogs"))
const BlogArticle = lazy(() => import("../pages/Media/BlogArticle"))
const NotFound = lazy(() => import("../pages/NotFound/NotFound"))
const NewsArticle = lazy(() => import("../pages/Media/NewsArticle"))
const CaseStudyDetail = lazy(() => import("../pages/About/CaseStudyDetail"))
const SolutionDetail = lazy(() => import("../pages/About/SolutionDetail"))
const Leadership = lazy(() => import("../pages/About/Leadership"))

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>

      {/* HOME */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      {/* ABOUT MAIN PAGE */}
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />

      {/* ✅ WHO WE ARE SUBPAGE */}
      <Route
        path="/about/who-we-are"
        element={
          <MainLayout>
            <WhoWeAre />
          </MainLayout>
        }
      />
      {/* ✅ WHat we do SUBPAGE */}
      <Route
        path="/about/what-we-do"
        element={
          <MainLayout>
            <WhatWeDo />
          </MainLayout>
        }
      />
      <Route
        path="/about/what-we-do/:slug"
        element={
          <MainLayout>
            <SolutionDetail />
          </MainLayout>
        }
      />
      <Route
        path="/about/leadership"
        element={
          <MainLayout>
            <Leadership />
          </MainLayout>
        }
      />
      {/* ✅ our purpose SUBPAGE */}
      <Route
        path="/about/purpose"
        element={
          <MainLayout>
            <OurPurpose />
          </MainLayout>
        }
      />

      {/* ✅ our partners SUBPAGE */}
      <Route
        path="/about/partners"
        element={
          <MainLayout>
            <OurPartners />
          </MainLayout>
        }
      />
{/* ✅ cases SUBPAGE */}
      <Route
        path="/about/case-studies"
        element={
          <MainLayout>
            <CasesSection />
          </MainLayout>
        }
      />
      <Route
        path="/cases/:slug"
        element={
          <MainLayout>
            <CaseStudyDetail />
          </MainLayout>
        }
      />
      {/* PRODUCTS */}
      <Route
        path="/products"
        element={
          <MainLayout>
            <Products />
          </MainLayout>
        }
      />

      <Route
        path="/blogs"
        element={
          <MainLayout>
            <Blogs />
          </MainLayout>
        }
      />

      <Route
        path="/blogs/:slug"
        element={
          <MainLayout>
            <BlogArticle />
          </MainLayout>
        }
      />

{/* Services */}
      <Route
        path="/solutions/services"
        element={
          <MainLayout>
            <Services />
          </MainLayout>
        }
      />

{/* Targeted */}
      <Route
        path="/solutions/industries"
        element={
          <MainLayout>
            <TargetedIndustries />
          </MainLayout>
        }
      />


{/* Applications */}
      <Route
        path="/solutions/applications"
        element={
          <MainLayout>
            <Applications />
          </MainLayout>
        }
      />

{/* Categories */}
      <Route
        path="/solutions/categories"
        element={
          <MainLayout>
            <Categories />
          </MainLayout>
        }
      />

      <Route
        path="/central-pivot-irrigation"
        element={
          <MainLayout>
            <CentralPivotIrrigation />
          </MainLayout>
        }
      />

      {/* CONTACT */}
      <Route
        path="contact/products&services"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />

      
      {/* enquiry */}
      <Route
        path="contact/enquiries"
        element={
          <MainLayout>
            <OtherEnquiries />
          </MainLayout>
        }
      />
 {/* latest news */}
      <Route
        path="media/news"
        element={
          <MainLayout>
            <LatestNews />
          </MainLayout>
        }
      />
      <Route
        path="media/news/:slug"
        element={
          <MainLayout>
            <NewsArticle />
          </MainLayout>
        }
      />
       {/* social media */}
      <Route
        path="media/social"
        element={
          <MainLayout>
            <SocialMedia />
          </MainLayout>
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />

      </Routes>
    </Suspense>
  )
}
