import { siteConfig } from "@/siteConfig";
import type { Content, Feature } from "./types";

const { free, pro } = siteConfig.photoLimits;
const drive = siteConfig.features.driveBackup;

const proFeatures: Feature[] = [
  {
    icon: "route",
    title: "Visit list, nearest first",
    text: "Pick the places you need to visit today. PinLocate orders them nearest-first from where you are, and you tick each one off as you go.",
    pro: true,
    wide: true,
        chips: ["1 · 0.4 km", "2 · 1.2 km", "3 · 3.5 km"],
  },
  { icon: "history", title: "Visit history", text: "Log each visit with its date and a note.", pro: true },
  {
    icon: "tag",
    title: "Tags and fields",
    text: "Keep details such as “Aircond: 2HP” or a “VIP” tag on each place.",
    pro: true,
  },
  {
    icon: "sheet",
    title: "CSV export and import",
    text: "Move people and places in and out of a spreadsheet.",
    pro: true,
  },
  ...(drive
    ? [
        {
          icon: "cloud",
          title: "Google Drive backup",
          text: "Backs up to your own Google Drive automatically, once a day while you use the app.",
          pro: true,
        } satisfies Feature,
      ]
    : []),
];

export const en: Content = {
  lang: "en",
  meta: {
    home: {
      title: "PinLocate: find the right door, every time",
      description:
        "Save the exact pin for the people you visit, with a landmark note and photos of the gate. Share it to WhatsApp with Waze and Google Maps links.",
    },
    link: { title: "A shared place · PinLocate", description: "A place shared from PinLocate." },
    ogAlt: "PinLocate: find the right door, every time",
  },
  ui: {
    skip: "Skip to content",
    nav: { features: "Features", how: "How it works", pricing: "Pricing", faq: "FAQ", reviews: "Reviews" },
    menu: "Menu",
    closeMenu: "Close menu",
    getApp: "Get the app",
    switchLabel: "Bahasa Melayu",
    switchShort: "BM",
    home: "Home",
    privacy: "Privacy policy",
    terms: "Terms of service",
    contact: "Contact",
    backHome: "Back to home",
    effective: "Effective",
    onThisPage: "On this page",
    comingSoon: "Coming soon to Google Play",
    playBadgeAlt: "Get it on Google Play",
    pro: "Pro",
  },
  hero: {
    eyebrow: "For Android · English and Bahasa Melayu",
    title: "Find the right door, every time",
    subtitle:
      "Save the exact pin for every house you visit, with a landmark note and photos of the gate. Share it to WhatsApp with Waze and Google Maps links, so anyone can find the way.",
    secondary: "See how it works",
    trust: ["No account", "No ads", "Works offline", "Made in Malaysia"],
  },
  mockup: {
    label:
      "The PinLocate place screen for Tok Wan's house: a photo of the green gate, the landmark note, Waze and Google Maps buttons, and the share card it sends to a chat.",
    time: "10:30",
    title: "Rumah",
    photoCount: "1 / 3",
    landmarkHeading: "Landmark",
    landmark: "Green gate next to the surau",
    pinHeading: "Pin",
    coords: "3.13048, 101.68488",
    share: "Share",
    waze: "Waze",
    maps: "Google Maps",
    chat: [
      "Tok Wan — Rumah",
      "Landmark: Green gate next to the surau",
      "Waze: waze.com/ul?ll=3.13048,101.68488",
      "Google Maps: google.com/maps/dir/…",
    ],
  },
  madeFor: {
    title: "Made for the visits that matter",
    items: [
      { icon: "family", title: "Raya and family visits", text: "Every relative's house, ready for balik kampung." },
      { icon: "package", title: "Deliveries", text: "The right gate on the first try." },
      { icon: "wrench", title: "Home services", text: "Aircond, plumbing and repair jobs you come back to." },
      { icon: "briefcase", title: "Sales visits", text: "Customers' shops and offices, nearest first." },
    ],
  },
  features: {
    title: "Everything you need to find the door",
    subtitle: "Everything a family needs is free. Pro adds tools for people who visit many places for work.",
    items: [
      {
        icon: "pin",
        title: "Pin it at the gate",
        text: "Standing at the door? Save your current location. Or paste a Google Maps or Waze link, or share a place in from Maps.",
        wide: true,
        chips: ["Current location", "Google Maps link", "Waze link"],
      },
      {
        icon: "landmark",
        title: "Landmark notes",
        text: "Write what a pin can't say: “rumah cat hijau sebelah surau”.",
      },
      {
        icon: "camera",
        title: "Photos of the gate",
        text: `Up to ${free} photos per place, or ${pro} with Pro. Photos are compressed and their location data is removed.`,
      },
      {
        icon: "share",
        title: "Share to WhatsApp",
        text: "One tap sends a card with the photo, the landmark note, and Waze and Google Maps links. A PinLocate link lets others save the place too.",
        wide: true,
        chips: ["Photo", "Landmark", "Waze", "Google Maps", "PinLocate link"],
      },
      { icon: "navigate", title: "Navigate in one tap", text: "Open any place in Waze or Google Maps." },
      {
        icon: "people",
        title: "People and their places",
        text: "Add people from your contacts or by name, each with as many places as they need. Search by person or place.",
      },
      {
        icon: "backup",
        title: "Backups you control",
        text: "Save one .zip file with everything, photos included, and restore it on a new phone.",
      },
      {
        icon: "language",
        title: "English and Bahasa Melayu",
        text: "Follows your phone's language and light or dark theme. Change the language in Settings.",
      },
      ...proFeatures,
    ],
  },
  how: {
    title: "How it works",
    subtitle: "Three steps, once per place. After that, it's one tap.",
    steps: [
      { title: "Add a person", text: "Pick them from your contacts, or type their name." },
      {
        title: "Pin the place",
        text: "Save the pin at the gate, or paste a Waze or Google Maps link. Add a landmark note and a photo.",
      },
      { title: "Share or navigate", text: "Send it to WhatsApp, or open it in Waze or Google Maps." },
    ],
  },
  pricing: {
    title: "Simple pricing",
    subtitle: "Free for families. Pro for work.",
    free: {
      name: "Free",
      price: "MYR 0",
      period: "",
      blurb: "Everything a family needs.",
      items: [
        "Unlimited people and places",
        "Pins, labels and landmark notes",
        `Up to ${free} photos per place`,
        "Navigate with Waze or Google Maps",
        "Share to WhatsApp",
        "Back up to a file and restore",
      ],
    },
    pro: {
      name: "Pro",
      trial: `${siteConfig.trialWeeks} weeks free`,
      then: `then ${siteConfig.proPrice.en}`,
      blurb: "Everything in Free, plus:",
      items: [
        "Visit list, nearest first",
        "Visit history with notes",
        "Tags and custom fields",
        "CSV export and import",
        `Up to ${pro} photos per place`,
        ...(drive ? ["Automatic Google Drive backup"] : []),
      ],
      fine: "Free trial for new subscribers. Prices vary by country. Cancel anytime in Google Play.",
    },
  },
  reviews: { title: "What people say" },
  faq: {
    title: "Questions",
    items: [
      {
        q: "Is PinLocate free?",
        a: [
          `Yes. People, places, pins, landmark notes, up to ${free} photos per place, navigation, sharing and file backups are all free, with no ads.`,
          `Pro is an optional subscription for people who visit many places for work: ${siteConfig.trialWeeks} weeks free, then ${siteConfig.proPrice.en} in Malaysia. Prices vary by country.`,
        ],
      },
      {
        q: "Do I need an account?",
        a: drive
          ? [
              "No. There's no sign-up and no login. You only sign in with Google if you choose to back up to your Google Drive.",
            ]
          : ["No. There's no sign-up and no login. Open the app and start saving places."],
      },
      {
        q: "Where is my data stored?",
        a: [
          drive
            ? "On your phone, and in your own Google Drive if you turn on Drive backup. PinLocate has no server, and the developer never receives your data."
            : "On your phone, in the app's private storage. PinLocate has no server, and the developer never receives your data.",
        ],
        link: { label: "Read the privacy policy", href: "/privacy/" },
      },
      {
        q: "Does it work offline?",
        a: [
          "Yes. You can pin a place with GPS, add notes and photos, and open your saved places without internet. Pro keeps working offline too.",
          "You need internet to open short map links (such as maps.app.goo.gl), for Waze or Google Maps to load their maps, and to subscribe to Pro.",
        ],
      },
      {
        q: "Is there an iPhone version?",
        a: ["Not yet. PinLocate is for Android phones for now."],
      },
      {
        q: "What happens if Pro ends?",
        a: [
          "Nothing you saved is lost or locked. Your tags, fields, visit history and photos stay on your phone and readable. Only adding or editing with Pro features stops until you subscribe again.",
        ],
      },
      {
        q: "How do I back up or move to a new phone?",
        a: [
          "In Settings, open Backup & restore and save a backup to a file. It's one .zip with all your people, places, notes and photos. On the new phone, install PinLocate and restore from that file.",
          drive
            ? "With Pro, PinLocate can also back up to your own Google Drive automatically, and you can restore from Drive on the new phone."
            : "When you move to a new phone with a cable or Wi-Fi transfer, Android copies PinLocate's data and photos too.",
        ],
      },
      {
        q: "Can I share with people who don't have the app?",
        a: [
          "Yes. The share card has Waze and Google Maps links that work for anyone, with the landmark note and a photo. It also has a PinLocate link: without the app it opens a page with the place and buttons for Waze and Google Maps, and with the app it saves the place.",
        ],
      },
      {
        q: "How do I delete my data?",
        a: [
          "Delete a person or place in the app and it's removed from your phone, together with its photos. Uninstalling PinLocate deletes everything it stored. Backup files you saved elsewhere are yours to delete.",
        ],
        link: { label: "Deleting your data", href: "/privacy/#deleting" },
      },
    ],
  },
  cta: {
    title: "Save the pin once. Find the door every time.",
    text: "Free, with no account and no ads. Your places stay on your phone.",
  },
  footer: {
    tagline: "Find the right door, every time.",
    madeIn: "Made in Malaysia",
    trademarks:
      "Google Play, Google Maps and Waze are trademarks of Google LLC. WhatsApp is a trademark of WhatsApp LLC.",
    sections: "Sections",
    legal: "Legal",
  },
  link: {
    eyebrow: "Shared with PinLocate",
    fallback: "A shared place",
    waze: "Open in Waze",
    maps: "Open in Google Maps",
    error: "This link is incomplete or broken. Ask the sender to share the place again.",
    get: "Get PinLocate",
    note: "With PinLocate you can save this place, with its landmark note and photos, for next time. The place is read from the link in your browser and is never sent to this website.",
  },
};
