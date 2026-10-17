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
  // The same price as a number, for structured data.
  proPriceMyr: "0.99",
  // The press fact sheet's launch month.
  launch: { en: "October 2026", ms: "Oktober 2026" },
  trialWeeks: 2,
  photoLimits: { free: 3, pro: 10 },
  features: {
    // true once the app's drive-backup branch ships.
    driveBackup: true,
  },
  socialLinks: [] as SocialLink[],
  // Real reviews only. The reviews section and its nav link appear when this has entries.
  testimonials: [] as Testimonial[],
  // Swap the HTML phone mockup for a real screenshot: a path under public/, e.g. "/screens/place.png".
  heroScreenshot: null as string | null,
} as const;

/**
 * The Google Play listing, tagged so Play Console shows where installs came from:
 * utm_source=website (or sharelink from /p/) and utm_medium=[page], in Play's
 * install referrer.
 */
export type PlaySource = "website" | "sharelink";

export function playUrl(lang: Lang, page: string, source: PlaySource = "website"): string {
  const referrer = encodeURIComponent(`utm_source=${source}&utm_medium=${page}`);
  return `${siteConfig.playUrl}${lang === "ms" ? "&hl=ms" : ""}&referrer=${referrer}`;
}

/** The guides section: /guides/ in English, /ms/panduan/ in Malay. */
export function guidesPath(lang: Lang): string {
  return lang === "ms" ? "/ms/panduan/" : "/guides/";
}

/** The URL of [path] (such as "/privacy/") in [lang]. */
export function localePath(lang: Lang, path: string): string {
  return lang === "ms" ? `/ms${path}` : path;
}
