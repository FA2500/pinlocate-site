// The press page (/press/, /ms/press/). Facts only, and no quotes from anyone.
import { siteConfig, type Lang } from "@/siteConfig";

export const screenshots = ["phone-1-place", "phone-2-people", "phone-4-visit-list", "phone-6-share"] as const;

export const press: Record<
  Lang,
  {
    title: string;
    description: string;
    heading: string;
    storyTitle: string;
    story: string[];
    factsTitle: string;
    facts: { term: string; detail: string }[];
    downloadsTitle: string;
    logoPng: string;
    logoSvg: string;
    screenshotsTitle: string;
    screenshots: Record<(typeof screenshots)[number], string>;
    download: string;
    usage: string;
  }
> = {
  en: {
    title: "Press kit · PinLocate",
    description: "The PinLocate story in brief, a fact sheet, the logo and screenshots to download.",
    heading: "Press kit",
    storyTitle: "In brief",
    story: [
      "PinLocate is made by an independent developer in Malaysia for a problem every family here knows: arriving in the right kampung or taman and still asking “rumah yang mana satu?”",
      "It saves the exact pin of each house with a landmark note and photos of the gate, and shares them to WhatsApp with Waze and Google Maps links.",
      "There is no account and no server: everything stays on the user’s phone, and the developer never receives anyone’s data.",
    ],
    factsTitle: "Fact sheet",
    facts: [
      { term: "Launch", detail: siteConfig.launch.en },
      {
        term: "Price",
        detail: `Free. Pro is optional: ${siteConfig.trialWeeks} weeks free for new subscribers, then ${siteConfig.proPrice.en} in Malaysia.`,
      },
      { term: "Platforms", detail: "Android, on Google Play. No iPhone version yet." },
      { term: "Languages", detail: "English and Bahasa Melayu" },
      { term: "Made by", detail: "An independent developer in Malaysia" },
      { term: "Contact", detail: siteConfig.email },
    ],
    downloadsTitle: "Logo",
    logoPng: "Logo, PNG (1024 × 1024, transparent)",
    logoSvg: "Logo, SVG",
    screenshotsTitle: "Screenshots",
    screenshots: {
      "phone-1-place": "A place: the gate photo, the landmark note, Waze and Google Maps",
      "phone-2-people": "People and how many places each has",
      "phone-4-visit-list": "The visit list (Pro), nearest stop first",
      "phone-6-share": "The share card as it arrives in a chat",
    },
    download: "Download",
    usage: "Screenshots show made-up names and places. Use them and the logo when writing about PinLocate; please don’t change the logo.",
  },
  ms: {
    title: "Kit media · PinLocate",
    description: "Kisah PinLocate secara ringkas, helaian fakta, serta logo dan tangkapan skrin untuk dimuat turun.",
    heading: "Kit media",
    storyTitle: "Secara ringkas",
    story: [
      "PinLocate dibangunkan oleh seorang pembangun bebas di Malaysia untuk masalah yang biasa dihadapi setiap keluarga di sini: sudah sampai di kampung atau taman yang betul, tetapi masih bertanya “rumah yang mana satu?”",
      "Aplikasi ini menyimpan pin tepat setiap rumah bersama nota penanda dan foto pagar, dan berkongsinya ke WhatsApp dengan pautan Waze dan Google Maps.",
      "Tiada akaun dan tiada pelayan: semuanya kekal dalam telefon pengguna, dan pembangun tidak pernah menerima data sesiapa.",
    ],
    factsTitle: "Helaian fakta",
    facts: [
      { term: "Pelancaran", detail: siteConfig.launch.ms },
      {
        term: "Harga",
        detail: `Percuma. Pro adalah pilihan: ${siteConfig.trialWeeks} minggu percuma untuk pelanggan baharu, kemudian ${siteConfig.proPrice.ms} di Malaysia.`,
      },
      { term: "Platform", detail: "Android, di Google Play. Belum ada versi iPhone." },
      { term: "Bahasa", detail: "Bahasa Melayu dan Inggeris" },
      { term: "Dibuat oleh", detail: "Seorang pembangun bebas di Malaysia" },
      { term: "Hubungi", detail: siteConfig.email },
    ],
    downloadsTitle: "Logo",
    logoPng: "Logo, PNG (1024 × 1024, latar lutsinar)",
    logoSvg: "Logo, SVG",
    screenshotsTitle: "Tangkapan skrin",
    screenshots: {
      "phone-1-place": "Satu tempat: foto pagar, nota penanda, Waze dan Google Maps",
      "phone-2-people": "Senarai orang dan bilangan tempat masing-masing",
      "phone-4-visit-list": "Senarai lawatan (Pro), hentian terdekat dahulu",
      "phone-6-share": "Kad kongsi seperti yang diterima dalam sembang",
    },
    download: "Muat turun",
    usage: "Tangkapan skrin menggunakan nama dan tempat rekaan. Gunakannya dan logo ini apabila menulis tentang PinLocate; sila jangan ubah logo.",
  },
};
