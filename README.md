# pinlocate-site

The public website for the PinLocate Android app, at https://pinlocate.link (`www` redirects to it). Every page is in
English and, under `/ms/`, Bahasa Melayu:

| Page | What |
| --- | --- |
| `/` | Home: features, how it works, pricing, FAQ |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms of service |
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
| Open Graph images | `npm run og` redraws `public/og-en.png` and `public/og-ms.png` |

Set `playLive: true` when the Play listing is public: the "Coming soon" label becomes Google's badge.
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
