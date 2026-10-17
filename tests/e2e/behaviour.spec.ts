import { expect, test } from "@playwright/test";

test.describe("/p/ shared place", () => {
  test("shows the place and navigation links, keeping the place when switching language", async ({ page }) => {
    await page.goto("/p/#v=1&lat=3.13048&lng=101.68488&n=Rumah%20Tok%20Wan");
    await expect(page.locator("#name")).toHaveText("Rumah Tok Wan");
    await expect(page.locator("#coords")).toHaveText("3.13048, 101.68488");
    await expect(page.locator("#waze")).toHaveAttribute("href", "https://waze.com/ul?ll=3.130480,101.684880&navigate=yes");
    await expect(page.locator("#maps")).toHaveAttribute("href", "https://www.google.com/maps/dir/?api=1&destination=3.130480,101.684880");
    await expect(page.locator("#error")).toBeHidden();
    const sw = page.locator("header [data-lang-switch]");
    await expect(sw).toHaveAttribute("href", "/ms/p/#v=1&lat=3.13048&lng=101.68488&n=Rumah%20Tok%20Wan");
    await sw.click();
    await expect(page).toHaveURL(/\/ms\/p\/#v=1/);
    await expect(page.locator("#name")).toHaveText("Rumah Tok Wan");
    await expect(page.getByRole("link", { name: "Buka dalam Waze" })).toBeVisible();
  });

  test("updates when the fragment changes", async ({ page }) => {
    await page.goto("/p/#v=1&lat=3.1&lng=101.6&n=A");
    await expect(page.locator("#name")).toHaveText("A");
    await page.evaluate(() => (location.hash = "#v=1&lat=5.4&lng=100.3&n=B"));
    await expect(page.locator("#name")).toHaveText("B");
    await expect(page.locator("#coords")).toHaveText("5.4, 100.3");
  });

  test("a broken link shows the error and no buttons", async ({ page }) => {
    await page.goto("/p/#v=1&lat=95&lng=101.6&n=X");
    await expect(page.locator("#error")).toBeVisible();
    await expect(page.locator("#actions")).toBeHidden();
    await expect(page.locator("#name")).toHaveText("A shared place");
  });

  test("a name with markup is shown as text", async ({ page }) => {
    let dialog = false;
    page.on("dialog", (d) => {
      dialog = true;
      void d.dismiss();
    });
    const name = '<img src=x onerror="alert(1)">';
    await page.goto(`/p/#v=1&lat=3.1&lng=101.6&n=${encodeURIComponent(name)}`);
    await expect(page.locator("#name")).toHaveText(name);
    await expect(page.locator("#name img")).toHaveCount(0);
    expect(dialog).toBe(false);
  });

  test("is noindex and sends no referrer", async ({ page }) => {
    await page.goto("/p/");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator('meta[name="referrer"]')).toHaveAttribute("content", "no-referrer");
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  });
});

test.describe("keyboard and navigation", () => {
  test("the skip link is first and moves to the content", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main$/);
  });

  test("the mobile menu opens and closes with the keyboard", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto("/ms/");
    const open = page.getByRole("button", { name: "Menu" });
    await open.focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog", { name: "Menu" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("link", { name: "Harga" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(open).toBeFocused();
  });

  test("a menu link closes the menu and goes to the section", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto("/");
    await page.getByRole("button", { name: "Menu" }).click();
    await page.getByRole("dialog").getByRole("link", { name: "Pricing" }).click();
    await expect(page.getByRole("dialog")).toBeHidden();
    await expect(page).toHaveURL(/#pricing$/);
  });

  test("FAQ answers open and close", async ({ page }) => {
    await page.goto("/");
    const q = page.getByRole("button", { name: "Is there an iPhone version?" });
    const answer = page.getByText("Not yet. PinLocate is for Android phones for now.");
    await expect(answer).toBeHidden();
    await q.focus();
    await page.keyboard.press("Enter");
    await expect(answer).toBeVisible();
    await expect(q).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Enter");
    await expect(answer).toBeHidden();
  });

  test("the language switch keeps the section", async ({ page }) => {
    await page.goto("/privacy/#link");
    await expect(page.locator("header [data-lang-switch]")).toHaveAttribute("href", "/ms/privacy/#link");
  });
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("everything that fades in is visible, and FAQ answers are shown", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Simple pricing" })).toBeVisible();
    const opacity = await page.locator("[data-reveal]").first().evaluate((el) => getComputedStyle(el).opacity);
    expect(opacity).toBe("1");
    await expect(page.getByText("Not yet. PinLocate is for Android phones for now.")).toBeVisible();
  });
});

test.describe("SEO and legal", () => {
  for (const [path, lang, canonical] of [
    ["/", "en", "https://pinlocate.link/"],
    ["/ms/privacy/", "ms", "https://pinlocate.link/ms/privacy/"],
  ] as const) {
    test(`${path} has canonical, hreflang and Open Graph`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonical);
      await expect(page.locator('link[rel="alternate"][hreflang="ms"]')).toHaveCount(1);
      await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", `https://pinlocate.link/og-${lang}.png`);
      await expect(page.locator('meta[http-equiv="Content-Security-Policy"]')).toHaveAttribute("content", /script-src 'self' 'sha256-/);
    });
  }

  test("JSON-LD is a SoftwareApplication with no ratings", async ({ page }) => {
    await page.goto("/");
    const data = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) ?? "{}");
    expect(data["@type"]).toBe("SoftwareApplication");
    expect(JSON.stringify(data)).not.toMatch(/"(aggregateRating|review|ratingValue|reviewCount)"/);
  });

  test("the Terms have no draft banner and keep their date", async ({ page }) => {
    await page.goto("/terms/");
    await expect(page.getByText(/Draft for review|Not in force/)).toHaveCount(0);
    await expect(page.getByText("Effective 17 October 2026")).toBeVisible();
  });

  test("the privacy policy keeps #link and the table of contents works", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/privacy/");
    await expect(page.locator("h2#link")).toHaveText("The PinLocate link");
    await page.getByRole("navigation", { name: "On this page" }).getByRole("link", { name: "This website" }).click();
    await expect(page).toHaveURL(/#website$/);
    await expect(page.getByRole("navigation", { name: "On this page" }).getByRole("link", { name: "This website" })).toHaveAttribute(
      "aria-current",
      "location",
    );
  });
});
