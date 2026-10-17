# pinlocate-site

The public website for the PinLocate Android app, served by GitHub Pages at https://pinlocate.link (the `CNAME`
file; `www` redirects to it). Every page is in English and, under `/ms/`, Bahasa Melayu:

| Page | What |
| --- | --- |
| `/` | What PinLocate is, the Google Play link, contact |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms of service |
| `/p/` | The page a shared PinLocate link opens without the app: it reads the place from the part after `#` in the browser (`p/link.js`), so the place never reaches the server |
| `/404.html` | Page not found |

`.well-known/assetlinks.json` lets the app open `https://pinlocate.link/p` links (Android App Links); it lists the
SHA-256 of the upload key and the Play App Signing key. `.nojekyll` makes Pages publish `.well-known` as is.

No analytics, cookies, trackers, or scripts and fonts from other sites. Each page sets a Content-Security-Policy that
allows only this site's own stylesheet and scripts.

This repo holds the website only. The app code lives in a separate private repo.
