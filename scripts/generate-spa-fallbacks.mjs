import { copyFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import { seoRoutes } from "../seo-routes.mjs"

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const distDirectory = join(projectRoot, "dist")
const entryFile = join(distDirectory, "index.html")

for (const { path } of seoRoutes) {
  if (path === "/") continue

  const routeDirectory = join(
    distDirectory,
    ...path.split("/").filter(Boolean)
  )

  mkdirSync(routeDirectory, { recursive: true })
  copyFileSync(entryFile, join(routeDirectory, "index.html"))
}

copyFileSync(entryFile, join(distDirectory, "404.html"))

console.log(`Generated SPA fallbacks for ${seoRoutes.length - 1} routes.`)
