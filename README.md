# pinlocate-site

The public website for the PinLocate Android app, at https://pinlocate.link (`www` redirects to it). Every page is in
English and, under `/ms/`, Bahasa Melayu:

| Page | What |
| --- | --- |
| `/` | Home: features, how it works, pricing, FAQ |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms of service |
| `/guides/` (Malay: `/ms/panduan/`) | Guides, each a pair with its own slug per language and Article JSON-LD |
| `/press/` | Press kit: the story in brief, a fact sheet, the logo (PNG, SVG) and 4 screenshots to download. No quotes. |
| `/p/` | The page a shared PinLocate link opens without the app. It reads the place from the part after `#` in the browser (`src/lib/pinlocate-link.ts`), so the place never reaches the server. `noindex`, no referrer. |
| `/404.html` | Page not found |

`public/.well-known/assetlinks.json` lets the app open `https://pinlocate.link/p` links (Android App Links). It lists
the SHA-256 of the upload key and the Play App Signing key. Keep its bytes as they are.

`public/.well-known/security.txt` (RFC 9116) says where to report a security problem: support@pinlocate.link. Its
`Expires` date must stay in the future: renew it each year, before 1 October.

No analytics, cookies, trackers, or scripts and fonts from other sites. The font (Plus Jakarta Sans) is self-hosted.
After the build, `scripts/csp.mjs` gives each page a Content-Security-Policy that allows only this site's own files,
plus the sha256 hash of each inline script Next.js wrote into that page.

## Editing

| What | Where |
| --- | --- |
| Name, email, Play link, `playLive`, Pro price, trial, photo limits, feature flags, reviews | `src/siteConfig.ts` |
| Page copy | `src/content/en.ts`, `src/content/ms.ts` |
| Privacy policy and terms | `src/content/legal/*.ts`, one section per entry; the section ids are link targets |
| Guides | `src/content/guides.ts`; a new guide also needs its two route folders, its titles in `scripts/og.mjs`, and its URLs in `public/sitemap.xml`, `public/llms.txt` |
| Press kit | `src/content/press.ts`, files in `public/press/` (screenshots from the app repo's `store/`) |
| Open Graph images | `npm run og` redraws `public/og-en.png`, `public/og-ms.png` and one per guide in `public/og/` |
| Sitemap, robots, llms.txt | `public/sitemap.xml` (every indexable page with its `lastmod`; `npm run links` checks it matches the pages), `public/robots.txt`, `public/llms.txt` |

Set `playLive: true` when the Play listing is public: the "Coming soon" label becomes Google's badge. Every Play link
is tagged for Play Console's install referrer: `&referrer=utm_source%3Dwebsite%26utm_medium%3D<page>`, and from `/p/`
`utm_source%3Dsharelink` (`playUrl` in `src/siteConfig.ts`).

Structured data (`src/lib/jsonld.tsx`): the home page has Organization, SoftwareApplication (with the free app and the
Pro offer) and FAQPage; guides have Article. No ratings or reviews. `npm run schema` validates every built page
against schema.org and Google's rich-result rules (`@adobe/structured-data-validator`, with a pinned copy of the
schema.org vocabulary in `scripts/vendor/`); it runs in `check:fast`.
Set `features.driveBackup: true` when the app ships Google Drive backup. Reviews and their nav link appear only when
`testimonials` has real entries.

## Develop and check

```sh
npm ci
npm run dev          # http://localhost:3000
npm run check        # lint, types, unit tests, build, link check, Playwright + axe, Lighthouse
npm run screenshots  # every page at 360/768/1280 px, light and dark, into docs/screenshots/
```

`npm run check` needs Chromium for Playwright (`npx playwright install chromium`) and Chrome for Lighthouse.

Built with Next.js (static export), Tailwind CSS, Radix UI and Framer Motion.

## Deploy

Pushing to `main` runs `.github/workflows/pages.yml`, which builds `out/` and deploys it to GitHub Pages (Pages source:
GitHub Actions). The custom domain and Enforce HTTPS are set in the repo's Pages settings. The last static version
before this site is tagged `static-v1`.

This repo holds the website only. The app code lives in a separate private repo.
