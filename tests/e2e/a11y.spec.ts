import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { pages, schemes, widths } from "./pages";

/** Scrolls to the end and back so every fade-in has run, as a reader would. */
async function scrollThrough(page: Page) {
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 400) await page.evaluate((top) => window.scrollTo(0, top), y);
  await page.waitForTimeout(700);
  await page.evaluate(() => window.scrollTo(0, 0));
}

for (const p of pages) {
  for (const width of widths) {
    for (const scheme of schemes) {
      test(`${p.name} ${width}px ${scheme} @pages`, async ({ page }) => {
        const errors: string[] = [];
        page.on("console", (m) => {
          // The 404 page is served with status 404, which Chrome logs.
          if (m.type() === "error" && !(p.name === "404" && m.text().includes("404"))) errors.push(m.text());
        });
        page.on("pageerror", (e) => errors.push(e.message));
        await page.setViewportSize({ width, height: 800 });
        await page.emulateMedia({ colorScheme: scheme });
        await page.goto(p.path, { waitUntil: "networkidle" });
        await scrollThrough(page);

        expect(await page.locator("html").getAttribute("lang")).toBe(p.lang);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        expect(overflow, "horizontal overflow").toBeLessThanOrEqual(0);

        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
          .analyze();
        const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
        expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`)).toEqual([]);
        expect(errors, "console errors (CSP violations show here)").toEqual([]);

        if (process.env.SCREENSHOTS) {
          await page.screenshot({ path: `docs/screenshots/${p.name}-${width}-${scheme}.png`, fullPage: true });
        }
      });
    }
  }
}
