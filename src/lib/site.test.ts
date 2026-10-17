import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { playUrl } from "@/siteConfig";
import { guidePath, guides } from "@/content/guides";

describe("Google Play links", () => {
  it("carry the page in the install referrer", () => {
    expect(playUrl("en", "home")).toBe(
      "https://play.google.com/store/apps/details?id=com.fac.pinlocate&referrer=utm_source%3Dwebsite%26utm_medium%3Dhome",
    );
    expect(playUrl("ms", "press")).toBe(
      "https://play.google.com/store/apps/details?id=com.fac.pinlocate&hl=ms&referrer=utm_source%3Dwebsite%26utm_medium%3Dpress",
    );
  });

  it("from /p/ say they came from a shared link", () => {
    expect(playUrl("en", "p", "sharelink")).toContain("&referrer=utm_source%3Dsharelink%26utm_medium%3Dp");
  });
});

describe("guides", () => {
  const words = (html: string) => html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;

  for (const g of guides) {
    for (const lang of ["en", "ms"] as const) {
      const text = g.text[lang];
      it(`${g.id} ${lang}: 600–900 words, the answer in 2 sentences`, () => {
        const all = [text.answer, ...text.sections.flatMap((s) => [s.title, s.html]), text.withApp].join(" ");
        expect(words(all)).toBeGreaterThanOrEqual(600);
        expect(words(all)).toBeLessThanOrEqual(900);
        expect(text.answer.match(/[.!?](\s|$)/g)).toHaveLength(2);
      });
    }

    it(`${g.id}: English and Malay URLs`, () => {
      expect(guidePath(g, "en")).toMatch(/^\/guides\/[a-z-]+\/$/);
      expect(guidePath(g, "ms")).toMatch(/^\/ms\/panduan\/[a-z-]+\/$/);
    });
  }

  it("scripts/og.mjs draws each guide's image with its current title", () => {
    const og = readFileSync("scripts/og.mjs", "utf8");
    for (const g of guides) {
      for (const lang of ["en", "ms"] as const) {
        expect(og).toContain(`"${g.id}-${lang}": { eyebrow: "${lang === "ms" ? "Panduan" : "Guide"}", title: "${g.text[lang].title}" }`);
      }
    }
  });
});
