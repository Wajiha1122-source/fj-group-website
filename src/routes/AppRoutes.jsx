import { Routes, Route } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"

import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import WhoWeAre from "../pages/About/WhoWeAre"   // ✅ ADDED
import WhatWeDo from "../pages/About/WhatWeDo"
import OurPurpose from "../pages/About/OurPurpose"
import OurPartners from "../pages/About/OurPartners"
import CasesSection from "../pages/About/CasesSection"
import Services from "../pages/Solutions/Services"
import TargetedIndustries from "../pages/Solutions/TargetedIndustries"
import Applications from "../pages/Solutions/Applications"
import Categories from "../pages/Solutions/Categories"
import Products from "../pages/Products/Products"
import Contact from "../pages/Contact/Contact"
import OtherEnquiries from "../pages/Contact/OtherEnquiries"
import LatestNews from "../pages/Media/LatestNews"
import SocialMedia from "../pages/Media/SocialMedia"
import Blogs from "../pages/Media/Blogs"
import BlogArticle from "../pages/Media/BlogArticle"
import NotFound from "../pages/NotFound/NotFound"
import NewsArticle from "../pages/Media/NewsArticle"
import CaseStudyDetail from "../pages/About/CaseStudyDetail"
import SolutionDetail from "../pages/About/SolutionDetail"
import Leadership from "../pages/About/Leadership"

export default function AppRoutes() {
  return (
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
  )
}
