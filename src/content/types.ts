import type { Lang } from "@/siteConfig";

export type IconName =
  | "pin"
  | "landmark"
  | "camera"
  | "share"
  | "navigate"
  | "people"
  | "backup"
  | "language"
  | "route"
  | "history"
  | "tag"
  | "sheet"
  | "cloud"
  | "family"
  | "package"
  | "wrench"
  | "briefcase";

export type Feature = {
  icon: IconName;
  title: string;
  text: string;
  pro?: boolean;
  wide?: boolean;
  chips?: string[]; // a small visual row on wide cards
};

/** An answer is paragraphs; a link, when given, goes after the last one. */
export type Faq = { q: string; a: string[]; link?: { label: string; href: string } };

export type PageMeta = { title: string; description: string };

export type Content = {
  lang: Lang;
  meta: { home: PageMeta; link: PageMeta; ogAlt: string };
  ui: {
    skip: string;
    nav: { features: string; how: string; pricing: string; faq: string; reviews: string };
    menu: string;
    closeMenu: string;
    getApp: string;
    switchLabel: string; // the other language's name, e.g. "Bahasa Melayu"
    switchShort: string; // "BM" / "EN"
    home: string;
    privacy: string;
    terms: string;
    contact: string;
    backHome: string;
    effective: string;
    onThisPage: string;
    comingSoon: string;
    playBadgeAlt: string;
    pro: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    secondary: string;
    trust: string[];
  };
  mockup: {
    label: string; // accessible description of the whole mockup
    time: string;
    title: string;
    photoCount: string;
    landmarkHeading: string;
    landmark: string;
    pinHeading: string;
    coords: string;
    share: string;
    waze: string;
    maps: string;
    chat: string[]; // the share card, line by line
  };
  madeFor: { title: string; items: { icon: IconName; title: string; text: string }[] };
  features: { title: string; subtitle: string; items: Feature[] };
  how: { title: string; subtitle: string; steps: { title: string; text: string }[] };
  pricing: {
    title: string;
    subtitle: string;
    free: { name: string; price: string; period: string; blurb: string; items: string[] };
    pro: { name: string; trial: string; then: string; blurb: string; items: string[]; fine: string };
  };
  reviews: { title: string };
  faq: { title: string; items: Faq[] };
  cta: { title: string; text: string };
  footer: { tagline: string; madeIn: string; trademarks: string; sections: string; legal: string };
  link: {
    eyebrow: string;
    fallback: string;
    waze: string;
    maps: string;
    error: string;
    get: string;
    note: string;
  };
};
