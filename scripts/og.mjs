// Draws the 1200×630 Open Graph images: public/og-en.png and public/og-ms.png, and one per guide in
// public/og/ (<guide id>-<lang>.png). Run after changing the tagline or a guide's title: npm run og
// The guide titles here must match src/content/guides.ts (a unit test checks).
import { chromium } from "@playwright/test";
import { mkdirSync, readFileSync } from "node:fs";

const font = readFileSync("node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2").toString("base64");
const icon = readFileSync("public/icons/icon-512.png").toString("base64");

const text = {
  en: { title: "Find the right gate, every time", sub: "Save the pin, a landmark note and photos of the gate. Share to WhatsApp with Waze and Google Maps links." },
  ms: { title: "Jumpa pagar yang betul, setiap kali", sub: "Simpan pin, nota penanda dan foto pagar. Kongsi ke WhatsApp dengan pautan Waze dan Google Maps." },
};

const guideImages = {
  "share-location-en": { eyebrow: "Guide", title: "How to share an exact house location on WhatsApp" },
  "share-location-ms": { eyebrow: "Panduan", title: "Cara kongsi lokasi rumah yang tepat di WhatsApp" },
  "balik-kampung-en": { eyebrow: "Guide", title: "How to save relatives’ houses for balik kampung" },
  "balik-kampung-ms": { eyebrow: "Panduan", title: "Cara simpan lokasi rumah saudara untuk balik kampung" },
};

const html = ({ title, sub, eyebrow }) => `<!doctype html><html><head><style>
@font-face { font-family: J; src: url(data:font/woff2;base64,${font}) format("woff2"); font-weight: 200 800; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; font-family: J, sans-serif; background: #0e6b62; color: #fff; display: flex; flex-direction: column; justify-content: space-between; padding: 72px 80px; overflow: hidden; position: relative; }
.glow { position: absolute; width: 640px; height: 640px; right: -180px; top: -220px; border-radius: 50%; background: radial-gradient(circle, rgba(99,199,185,.55), transparent 65%); }
.brand { display: flex; align-items: center; gap: 22px; font-size: 44px; font-weight: 800; letter-spacing: -0.5px; position: relative; }
.brand img { width: 88px; height: 88px; border-radius: 22px; background: #fff; }
h1 { font-size: 76px; line-height: 1.04; font-weight: 800; letter-spacing: -2px; max-width: 960px; position: relative; }
p { font-size: 30px; line-height: 1.35; opacity: .92; max-width: 920px; position: relative; }
.url { font-size: 26px; font-weight: 700; opacity: .85; }
</style></head><body><div class="glow"></div>
<div class="brand"><img src="data:image/png;base64,${icon}">PinLocate</div>
<div style="display:flex;flex-direction:column;gap:22px">${eyebrow ? `<p class="url">${eyebrow}</p>` : ""}<h1>${title}</h1>${sub ? `<p>${sub}</p>` : ""}</div>
<div class="url">pinlocate.link</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const lang of ["en", "ms"]) {
  await page.setContent(html(text[lang]), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/og-${lang}.png` });
}
mkdirSync("public/og", { recursive: true });
for (const [name, text] of Object.entries(guideImages)) {
  await page.setContent(html(text), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `public/og/${name}.png` });
}
await browser.close();
console.log("Wrote public/og-en.png, public/og-ms.png and public/og/*.png");
