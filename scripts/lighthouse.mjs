// Lighthouse (mobile, the default) on the home page, the privacy policy and /p/.
// Every category must score 95 or more. Usage: node scripts/lighthouse.mjs [base URL]
// Without a base URL it serves out/ locally. Reports go to lighthouse/ (not committed).
// LH_CPU=8 throttles the CPU harder than the default 4, to match a slower machine such as a CI runner.
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import { mkdirSync, writeFileSync } from "node:fs";
import { serve } from "./serve.mjs";

const MIN = 95;
// Scores vary between runs, most on shared CI machines: take the median of several.
const RUNS = Number(process.env.LH_RUNS) || 3;
const PAGES = ["/", "/privacy/", "/p/#v=1&lat=3.13048&lng=101.68488&n=Rumah%20Tok%20Wan"];
// /p/ is noindex on purpose (shared places must stay out of search results), and
// Lighthouse's SEO score counts that against it. Its other SEO checks must still pass.
const ALLOWED = { "/p/": { seo: ["is-crawlable"] } };

let base = process.argv[2];
const server = base ? null : await serve(4174);
base ??= "http://127.0.0.1:4174";

const chrome = await chromeLauncher.launch({
  // The installed Chrome (or CHROME_PATH).
  chromeFlags: ["--headless=new", "--no-sandbox"],
});
mkdirSync("lighthouse", { recursive: true });
const rows = [];
let failed = false;
try {
  for (const path of PAGES) {
    const runs = [];
    for (let i = 0; i < RUNS; i++) {
      const { lhr } = await lighthouse(`${base}${path}`, {
        port: chrome.port,
        output: "json",
        logLevel: "error",
        ...(process.env.LH_CPU ? { throttling: { cpuSlowdownMultiplier: Number(process.env.LH_CPU) } } : {}),
      });
      runs.push(lhr);
    }
    // The run with the median performance score stands for the page.
    runs.sort((a, b) => a.categories.performance.score - b.categories.performance.score);
    const lhr = runs[Math.floor(runs.length / 2)];
    const key = path.split("#")[0];
    writeFileSync(`lighthouse/${key.replace(/\W+/g, "_") || "home"}.json`, JSON.stringify(lhr));
    const row = { page: key };
    for (const [id, cat] of Object.entries(lhr.categories)) {
      const score = Math.round(cat.score * 100);
      row[id] = score;
      if (score >= MIN) continue;
      const allowed = ALLOWED[key]?.[id] ?? [];
      const failing = cat.auditRefs
        .filter((r) => r.weight > 0 && lhr.audits[r.id].score !== null && lhr.audits[r.id].score < 1)
        .map((r) => r.id);
      const unexpected = failing.filter((id) => !allowed.includes(id));
      if (unexpected.length) {
        failed = true;
        console.error(`${key} ${id} ${score}: ${unexpected.join(", ")}`);
      } else {
        row[id] = `${score} (noindex)`;
      }
    }
    rows.push(row);
  }
} finally {
  await chrome.kill();
  server?.close();
}
console.table(rows);
if (failed) process.exit(1);
