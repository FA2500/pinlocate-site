// Checks every link and asset in out/*.html: internal paths must exist in out/
// (as a file, or a folder with index.html), and #fragments must match an id on the
// target page. External links are listed, not fetched. Exits 1 on any broken link.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const SITE = "https://pinlocate.link";

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return name === "_next" ? [] : htmlFiles(path);
    return name.endsWith(".html") ? [path] : [];
  });
}

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
const ids = new Map();
function idsOf(file) {
  if (!ids.has(file)) ids.set(file, new Set([...readFileSync(file, "utf8").matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return ids.get(file);
}

function resolve(path) {
  const file = join(OUT, decodeURIComponent(path));
  if (path.endsWith("/")) return existsSync(join(file, "index.html")) ? join(file, "index.html") : null;
  if (existsSync(file) && statSync(file).isFile()) return file;
  return null;
}

const broken = [];
const external = new Set();
let checked = 0;
for (const page of htmlFiles(OUT)) {
  const html = readFileSync(page, "utf8");
  const pagePath = "/" + page.slice(OUT.length + 1).replace(/index\.html$/, "");
  for (const m of html.matchAll(/\s(href|src|content)="([^"]*)"/g)) {
    let url = decode(m[2]);
    // <meta content> only when it is a URL on this site (og:image and similar).
    if (m[1] === "content" && !url.startsWith(SITE)) continue;
    if (url.startsWith(SITE)) url = url.slice(SITE.length) || "/";
    if (/^(mailto:|tel:)/.test(url)) continue;
    if (/^https?:\/\//.test(url)) {
      external.add(url);
      continue;
    }
    checked++;
    const [path, fragment] = url.split("#");
    // /p/ reads its fragment as data, not as an element id.
    const target = path === "" ? page : resolve(path.startsWith("/") ? path : pagePath + path);
    if (!target) broken.push(`${page}: ${url} (no such file)`);
    else if (fragment && !target.endsWith("p/index.html") && !idsOf(target).has(fragment))
      broken.push(`${page}: ${url} (no element with id "${fragment}")`);
  }
}

// The sitemap lists exactly the pages with a canonical URL (not /p/ or the 404), each with a lastmod.
const sitemap = readFileSync(join(OUT, "sitemap.xml"), "utf8");
const listed = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
const canonical = new Set(
  htmlFiles(OUT).flatMap((page) => [...readFileSync(page, "utf8").matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1])),
);
for (const url of canonical) if (!listed.has(url)) broken.push(`sitemap.xml: ${url} is missing`);
for (const url of listed) if (!canonical.has(url)) broken.push(`sitemap.xml: ${url} is not a page with that canonical URL`);
if ((sitemap.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g) ?? []).length !== listed.size) broken.push("sitemap.xml: every <url> needs a <lastmod>");

console.log(`${checked} internal links and assets checked in ${htmlFiles(OUT).length} pages; ${listed.size} pages in the sitemap`);
console.log(`External links (not fetched):\n  ${[...external].sort().join("\n  ")}`);
if (broken.length) {
  console.error(`Broken:\n  ${broken.join("\n  ")}`);
  process.exit(1);
}
