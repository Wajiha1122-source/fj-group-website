import { mkdirSync, writeFileSync } from "node:fs"
import { seoRoutes } from "../seo-routes.mjs"

const SITE_URL = (process.env.SITE_URL || "https://www.fjgroup.pk").replace(/\/$/, "")

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")

const urls = seoRoutes.map(({ path, lastmod }) => {
  const fullUrl = new URL(path, `${SITE_URL}/`).href

  return `
  <url>
    <loc>${escapeXml(fullUrl)}</loc>${
      lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : ""
    }
  </url>`
})

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}
</urlset>
`

const publicDirectory = new URL("../public/", import.meta.url)

mkdirSync(publicDirectory, { recursive: true })
writeFileSync(new URL("sitemap.xml", publicDirectory), sitemap, "utf8")

console.log(`Generated sitemap with ${seoRoutes.length} URLs.`)
