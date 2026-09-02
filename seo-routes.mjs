export const staticRoutes = [
  { path: "/" },
  { path: "/about" },
  { path: "/about/who-we-are" },
  { path: "/about/what-we-do" },
  { path: "/about/leadership" },
  { path: "/about/purpose" },
  { path: "/about/partners" },
  { path: "/about/case-studies" },
  { path: "/products" },
  { path: "/blogs" },
  { path: "/solutions/services" },
  { path: "/solutions/industries" },
  { path: "/solutions/applications" },
  { path: "/solutions/categories" },
  { path: "/central-pivot-irrigation" },
  { path: "/contact/products&services" },
  { path: "/contact/enquiries" },
  { path: "/media/news" },
  { path: "/media/social" }
]

const solutionSlugs = [
  "industrial-drilling",
  "pumping-systems",
  "solar-energy-solutions",
  "water-infrastructure"
]

const caseStudySlugs = [
  "turbine-upgradation",
  "tecno-agri-farms-project",
  "dnt-central-pivot-system",
  "solar-irrigation"
]

const blogSlugs = [
  "central-pivot-irrigation-system-pakistan-guide",
  "solar-tube-well-price-in-pakistan",
  "solar-vs-diesel-tube-well",
  "bore-well-drilling-cost-pakistan-2026",
  "choose-right-submersible-pump-bore-well-pakistan",
  "water-pump-maintenance-guide-pakistan"
]

const newsSlugs = [
  "fj-group-celebrates-pakistan-independence-day-2026",
  "fj-group-invt-psa-expo-2026",
  "komax-motors-pumps-flagship-store-south-punjab",
  "fj-group-partnership-ae-power",
  "fj-group-partnership-solis",
  "next-generation-industrial-systems",
  "reducing-energy-consumption",
  "industrial-operations-automation"
]

export const dynamicRoutes = [
  ...solutionSlugs.map((slug) => ({ path: `/about/what-we-do/${slug}` })),
  ...caseStudySlugs.map((slug) => ({ path: `/cases/${slug}` })),
  ...blogSlugs.map((slug) => ({ path: `/blogs/${slug}` })),
  ...newsSlugs.map((slug) => ({ path: `/media/news/${slug}` }))
]

export const seoRoutes = [...staticRoutes, ...dynamicRoutes]
