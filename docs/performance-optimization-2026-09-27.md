# Performance optimization report — 27 September 2026

Scope: preserve the current layout, styling, media quality, animation timing, movement paths, lighting, camera and assembly sequence. No commits, pushes or deployments were performed.

## Changes

1. Shared one solar-cell box geometry across all 40 cells instead of constructing 40 identical geometries.
2. Shared one stripe plane geometry across all 40 cells. Together these changes reduce cell/stripe geometry objects from 80 to 2, without changing dimensions or vertices.
3. Shared the identical stripe material across 40 stripes; cell glow materials remain separate so every staggered glow stays intact.
4. Stop recalculating an assembly part's local position, rotation and scale once its existing easing reaches completion. All 47 animated part groups retain their exact final transform.
5. Freeze completed parts' local matrices after updating them. Parent panel motion still applies normally.
6. Stop updating each cell's glow once its original pulse reaches its final intensity.
7. Dispose shared geometry and material resources when the scene unmounts.
8. Delay the four case-study video sources until the section approaches the viewport, with a 900-pixel preparation margin. The four original files total 19,052,813 bytes (19.05 MB); these files are no longer requested by those cards at initial top-of-page load.
9. Pause those videos when far outside the viewport, and resume without resetting their playback position when visitors return.
10. Pause their playback while the document is hidden and resume nearby videos when it becomes visible.
11. Remove observers, event listeners and media sources on unmount so abandoned pages do not keep downloading or decoding these videos.
12. Handle rejected playback promises and retry on canplay; retain a loading fallback for browsers without IntersectionObserver. Muted playback, looping, inline playback and the existing video CSS class remain unchanged.
13. Stop the custom cursor's JavaScript frame loop only when its original easing reaches a numerically stationary position; restart it on pointer movement. CSS orbit effects are untouched.
14. Suspend cursor position calculations in hidden tabs and restart them when the tab becomes visible.
15. Batch homepage scroll layout reads before style writes, keeping the same drift formula and transition rules.
16. Avoid rewriting the scroll drift CSS property when its computed value has not changed.
17. Add a high-priority desktop hero image preload. Its media condition complements the existing mobile preload; the original images and responsive breakpoint remain unchanged.
18. Add one-year immutable cache rules only for content-hashed build assets in the assets directory. New builds use new URLs, allowing updated files to bypass old cached versions.
19. Require HTML, JSON and web manifests to revalidate so deployments are not held behind long-lived document caches.
20. Enable compression for textual content on compatible Apache/LiteSpeed hosting, without recompressing JPEG or MP4 media.

## Verification and limits

- Production build and targeted ESLint passed after the JavaScript changes.
- Production preview: all four distant case-study videos had no source, readyState 0 and paused=true at the top of the page.
- Approaching the case-study section attached all four video sources. Three had readyState 4 and advancing playback; the larger turbine video had metadata loaded and was still buffering at the sampled check.
- The introduction completed in the preview; no console errors were returned in that check.
- The browser timed out during the final scroll-away/screenshot checks, so offscreen pause behavior and pixel-level visual parity were not independently verified in the browser.
- No stylesheet, original image/video asset or assembly timing file was modified. The design and animation parameters remain unchanged in source.
- Apache/LiteSpeed rules are included with the static build. They do not configure Node/Nginx hosting; actual Hostinger response headers must be verified after deployment.
- No new Lighthouse/PageSpeed score has been measured. A 90+ score is not claimed. The unchanged full-screen introduction and WebGL bundle still have a startup cost.
