// Everything about the site that may change, in one place. Copy lives in
// src/content/, legal text in src/content/legal/.

export type Lang = "en" | "ms";

export type Testimonial = { quote: string; name: string; role?: string };
export type SocialLink = { label: string; href: string };

export const siteConfig = {
  name: "PinLocate",
  url: "https://pinlocate.link",
  email: "support@pinlocate.link",
  playUrl: "https://play.google.com/store/apps/details?id=com.fac.pinlocate",
  // false: "Coming soon to Google Play". true: the official Google Play badge.
  playLive: false,
  // Play sets the real price per country; this is the Malaysian one.
  proPrice: { en: "MYR 0.99/month", ms: "MYR 0.99/bulan" },
  trialWeeks: 2,
  photoLimits: { free: 3, pro: 10 },
  features: {
    // true once the app's drive-backup branch ships.
    driveBackup: false,
  },
  socialLinks: [] as SocialLink[],
  // Real reviews only. The reviews section and its nav link appear when this has entries.
  testimonials: [] as Testimonial[],
  // Swap the HTML phone mockup for a real screenshot: a path under public/, e.g. "/screens/place.png".
  heroScreenshot: null as string | null,
} as const;

export function playUrl(lang: Lang): string {
  return lang === "ms" ? `${siteConfig.playUrl}&hl=ms` : siteConfig.playUrl;
}

/** The URL of [path] (such as "/privacy/") in [lang]. */
export function localePath(lang: Lang, path: string): string {
  return lang === "ms" ? `/ms${path}` : path;
}
