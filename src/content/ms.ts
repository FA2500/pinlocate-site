import { siteConfig } from "@/siteConfig";
import type { Content, Feature } from "./types";

const { free, pro } = siteConfig.photoLimits;
const drive = siteConfig.features.driveBackup;

const proFeatures: Feature[] = [
  {
    icon: "route",
    title: "Senarai lawatan, terdekat dahulu",
    text: "Pilih tempat yang perlu dilawati hari ini. PinLocate menyusunnya mengikut yang terdekat dari lokasi anda, dan anda tandakan setiap satu sebaik selesai.",
    pro: true,
    wide: true,
        chips: ["1 · 0.4 km", "2 · 1.2 km", "3 · 3.5 km"],
  },
  { icon: "history", title: "Sejarah lawatan", text: "Catat setiap lawatan dengan tarikh dan nota.", pro: true },
  {
    icon: "tag",
    title: "Tag dan medan",
    text: "Simpan butiran seperti “Aircond: 2HP” atau tag “VIP” pada setiap tempat.",
    pro: true,
  },
  {
    icon: "sheet",
    title: "Eksport dan import CSV",
    text: "Pindahkan orang dan tempat ke dalam atau dari hamparan.",
    pro: true,
  },
  ...(drive
    ? [
        {
          icon: "cloud",
          title: "Sandaran Google Drive",
          text: "Membuat sandaran ke Google Drive anda sendiri secara automatik, sekali sehari semasa anda menggunakan aplikasi.",
          pro: true,
        } satisfies Feature,
      ]
    : []),
];

export const ms: Content = {
  lang: "ms",
  meta: {
    home: {
      title: "PinLocate: jumpa pagar yang betul, setiap kali",
      description:
        "Simpan pin tepat untuk orang yang anda lawati, dengan nota penanda dan foto pagar. Kongsi ke WhatsApp dengan pautan Waze dan Google Maps.",
    },
    link: { title: "Tempat yang dikongsi · PinLocate", description: "Tempat yang dikongsi dari PinLocate." },
    ogAlt: "PinLocate: jumpa pagar yang betul, setiap kali",
  },
  ui: {
    skip: "Langkau ke kandungan",
    nav: { features: "Ciri", how: "Cara guna", pricing: "Harga", faq: "Soalan lazim", reviews: "Ulasan", guides: "Panduan" },
    menu: "Menu",
    closeMenu: "Tutup menu",
    getApp: "Dapatkan apl",
    switchLabel: "English",
    switchShort: "EN",
    home: "Laman utama",
    privacy: "Polisi privasi",
    terms: "Terma perkhidmatan",
    press: "Media",
    contact: "Hubungi",
    backHome: "Kembali ke laman utama",
    effective: "Berkuat kuasa",
    onThisPage: "Dalam halaman ini",
    comingSoon: "Akan datang ke Google Play",
    playBadgeAlt: "Dapatkan di Google Play",
    pro: "Pro",
  },
  hero: {
    eyebrow: "Untuk Android · Bahasa Melayu dan English",
    title: "Jumpa pagar yang betul, setiap kali",
    subtitle:
      "Simpan pin tepat untuk setiap rumah yang anda lawati, dengan nota penanda dan foto pagar. Kongsi ke WhatsApp dengan pautan Waze dan Google Maps, supaya sesiapa pun boleh sampai.",
    secondary: "Lihat cara guna",
    trust: ["Tiada akaun", "Tiada iklan", "Boleh guna tanpa internet", "Buatan Malaysia"],
  },
  mockup: {
    label:
      "Skrin tempat PinLocate untuk rumah Tok Wan: foto pagar hijau, nota penanda, butang Waze dan Google Maps, serta kad kongsi yang dihantar ke sembang.",
    time: "10:30",
    title: "Rumah",
    photoCount: "1 / 3",
    landmarkHeading: "Penanda",
    landmark: "Pagar hijau sebelah surau",
    pinHeading: "Pin",
    coords: "3.1438, 101.68482",
    share: "Kongsi",
    waze: "Waze",
    maps: "Google Maps",
    chat: [
      "Tok Wan — Rumah",
      "Penanda: Pagar hijau sebelah surau",
      "Waze: waze.com/ul?ll=3.143800,101.684820",
      "Google Maps: google.com/maps/dir/…",
    ],
  },
  madeFor: {
    title: "Untuk lawatan yang penting",
    items: [
      { icon: "family", title: "Raya dan ziarah keluarga", text: "Rumah setiap saudara, sedia untuk balik kampung." },
      { icon: "package", title: "Penghantaran", text: "Pagar yang betul pada cubaan pertama." },
      { icon: "wrench", title: "Servis rumah", text: "Kerja aircond, paip dan baik pulih yang anda datangi semula." },
      { icon: "briefcase", title: "Lawatan jualan", text: "Kedai dan pejabat pelanggan, yang terdekat dahulu." },
    ],
  },
  features: {
    title: "Semua yang anda perlukan untuk sampai ke pintu",
    subtitle: "Semua yang keluarga perlukan adalah percuma. Pro menambah alat untuk mereka yang melawat banyak tempat kerana kerja.",
    items: [
      {
        icon: "pin",
        title: "Pin di depan pagar",
        text: "Sedang berdiri di depan pintu? Simpan lokasi semasa anda. Atau tampal pautan Google Maps atau Waze, atau kongsi tempat dari Maps.",
        wide: true,
        chips: ["Lokasi semasa", "Pautan Google Maps", "Pautan Waze"],
      },
      {
        icon: "landmark",
        title: "Nota penanda",
        text: "Tulis apa yang pin tidak dapat terangkan: “rumah cat hijau sebelah surau”.",
      },
      {
        icon: "camera",
        title: "Foto pagar",
        text: `Sehingga ${free} foto bagi setiap tempat, atau ${pro} dengan Pro. Foto dimampatkan dan data lokasinya dibuang.`,
      },
      {
        icon: "share",
        title: "Kongsi ke WhatsApp",
        text: "Satu ketikan menghantar kad dengan foto, nota penanda, serta pautan Waze dan Google Maps. Pautan PinLocate membolehkan orang lain menyimpan tempat itu juga.",
        wide: true,
        chips: ["Foto", "Penanda", "Waze", "Google Maps", "Pautan PinLocate"],
      },
      { icon: "navigate", title: "Navigasi dengan satu ketikan", text: "Buka mana-mana tempat dalam Waze atau Google Maps." },
      {
        icon: "people",
        title: "Orang dan tempat mereka",
        text: "Tambah orang daripada kenalan anda atau dengan nama, setiap seorang dengan seberapa banyak tempat yang perlu. Cari mengikut orang atau tempat.",
      },
      {
        icon: "backup",
        title: "Sandaran dalam kawalan anda",
        text: "Simpan satu fail .zip dengan semuanya, termasuk foto, dan pulihkannya pada telefon baharu.",
      },
      {
        icon: "language",
        title: "Bahasa Melayu dan English",
        text: "Mengikut bahasa telefon anda serta tema cerah atau gelap. Tukar bahasa dalam Tetapan.",
      },
      ...proFeatures,
    ],
  },
  how: {
    title: "Cara guna",
    subtitle: "Tiga langkah, sekali bagi setiap tempat. Selepas itu, hanya satu ketikan.",
    steps: [
      { title: "Tambah orang", text: "Pilih daripada kenalan anda, atau taip nama mereka." },
      {
        title: "Pin tempat itu",
        text: "Simpan pin di depan pagar, atau tampal pautan Waze atau Google Maps. Tambah nota penanda dan foto.",
      },
      { title: "Kongsi atau navigasi", text: "Hantar ke WhatsApp, atau buka dalam Waze atau Google Maps." },
    ],
  },
  pricing: {
    title: "Harga yang mudah",
    subtitle: "Percuma untuk keluarga. Pro untuk kerja.",
    free: {
      name: "Percuma",
      price: "MYR 0",
      period: "",
      blurb: "Semua yang keluarga perlukan.",
      items: [
        "Orang dan tempat tanpa had",
        "Pin, label dan nota penanda",
        `Sehingga ${free} foto bagi setiap tempat`,
        "Navigasi dengan Waze atau Google Maps",
        "Kongsi ke WhatsApp",
        "Sandaran ke fail dan pemulihan",
      ],
    },
    pro: {
      name: "Pro",
      trial: `${siteConfig.trialWeeks} minggu percuma`,
      then: `kemudian ${siteConfig.proPrice.ms}`,
      blurb: "Semua dalam Percuma, serta:",
      items: [
        "Senarai lawatan, terdekat dahulu",
        "Sejarah lawatan dengan nota",
        "Tag dan medan tersuai",
        "Eksport dan import CSV",
        `Sehingga ${pro} foto bagi setiap tempat`,
        ...(drive ? ["Sandaran Google Drive automatik"] : []),
      ],
      fine: "Percubaan percuma untuk pelanggan baharu. Harga berbeza mengikut negara. Batalkan bila-bila masa di Google Play.",
    },
  },
  reviews: { title: "Kata mereka" },
  faq: {
    title: "Soalan lazim",
    items: [
      {
        q: "Adakah PinLocate percuma?",
        a: [
          `Ya. Orang, tempat, pin, nota penanda, sehingga ${free} foto bagi setiap tempat, navigasi, perkongsian dan sandaran ke fail semuanya percuma, tanpa iklan.`,
          `Pro ialah langganan pilihan untuk mereka yang melawat banyak tempat kerana kerja: ${siteConfig.trialWeeks} minggu percuma, kemudian ${siteConfig.proPrice.ms} di Malaysia. Harga berbeza mengikut negara.`,
        ],
      },
      {
        q: "Perlukah saya membuat akaun?",
        a: drive
          ? [
              "Tidak. Tiada pendaftaran dan tiada log masuk. Anda hanya log masuk dengan Google jika anda memilih untuk membuat sandaran ke Google Drive anda.",
            ]
          : ["Tidak. Tiada pendaftaran dan tiada log masuk. Buka aplikasi dan mula menyimpan tempat."],
      },
      {
        q: "Di manakah data saya disimpan?",
        a: [
          drive
            ? "Pada telefon anda, dan dalam Google Drive anda sendiri jika anda menghidupkan sandaran Drive. PinLocate tiada pelayan, dan pembangun tidak pernah menerima data anda."
            : "Pada telefon anda, dalam storan peribadi aplikasi. PinLocate tiada pelayan, dan pembangun tidak pernah menerima data anda.",
        ],
        link: { label: "Baca polisi privasi", href: "/ms/privacy/" },
      },
      {
        q: "Bolehkah ia digunakan tanpa internet?",
        a: [
          "Ya. Anda boleh pin tempat dengan GPS, menambah nota dan foto, serta membuka tempat yang disimpan tanpa internet. Pro juga terus berfungsi tanpa internet.",
          "Anda perlukan internet untuk membuka pautan peta pendek (seperti maps.app.goo.gl), untuk Waze atau Google Maps memuatkan peta, dan untuk melanggan Pro.",
        ],
      },
      {
        q: "Adakah versi iPhone?",
        a: ["Belum lagi. Buat masa ini PinLocate untuk telefon Android sahaja."],
      },
      {
        q: "Apa yang berlaku jika Pro tamat?",
        a: [
          "Tiada apa-apa yang anda simpan hilang atau dikunci. Tag, medan, sejarah lawatan dan foto anda kekal dalam telefon dan boleh dibaca. Hanya menambah atau mengedit dengan ciri Pro yang berhenti sehingga anda melanggan semula.",
        ],
      },
      {
        q: "Bagaimana membuat sandaran atau berpindah ke telefon baharu?",
        a: [
          "Dalam Tetapan, buka Sandaran & pemulihan dan simpan sandaran ke fail. Ia satu fail .zip dengan semua orang, tempat, nota dan foto anda. Pada telefon baharu, pasang PinLocate dan pulihkan daripada fail itu.",
          drive
            ? "Dengan Pro, PinLocate juga boleh membuat sandaran ke Google Drive anda sendiri secara automatik, dan anda boleh memulihkannya dari Drive pada telefon baharu."
            : "Apabila anda berpindah ke telefon baharu melalui kabel atau Wi-Fi, Android turut menyalin data dan foto PinLocate.",
        ],
      },
      {
        q: "Bolehkah saya berkongsi dengan orang yang tiada aplikasi ini?",
        a: [
          "Boleh. Kad kongsi mempunyai pautan Waze dan Google Maps yang boleh dibuka oleh sesiapa, bersama nota penanda dan foto. Ia juga mempunyai pautan PinLocate: tanpa aplikasi, pautan itu membuka halaman dengan tempat tersebut serta butang Waze dan Google Maps, dan dengan aplikasi, ia menyimpan tempat itu.",
        ],
      },
      {
        q: "Bagaimana memadam data saya?",
        a: [
          "Padam seseorang atau sesuatu tempat dalam aplikasi dan ia dibuang dari telefon anda, bersama fotonya. Menyahpasang PinLocate memadam semua yang disimpannya. Fail sandaran yang anda simpan di tempat lain adalah milik anda untuk dipadam.",
        ],
        link: { label: "Memadam data anda", href: "/ms/privacy/#deleting" },
      },
    ],
  },
  cta: {
    title: "Simpan pin sekali. Sampai ke pintu setiap kali.",
    text: "Percuma, tanpa akaun dan tanpa iklan. Tempat anda kekal dalam telefon anda.",
  },
  footer: {
    tagline: "Jumpa pagar yang betul, setiap kali.",
    madeIn: "Buatan Malaysia",
    trademarks:
      "Google Play, Google Maps dan Waze ialah tanda dagangan Google LLC. WhatsApp ialah tanda dagangan WhatsApp LLC.",
    sections: "Bahagian",
    legal: "Undang-undang",
  },
  link: {
    eyebrow: "Dikongsi dengan PinLocate",
    fallback: "Tempat yang dikongsi",
    waze: "Buka dalam Waze",
    maps: "Buka dalam Google Maps",
    error: "Pautan ini tidak lengkap atau rosak. Minta pengirim berkongsi tempat itu semula.",
    get: "Dapatkan PinLocate",
    note: "Dengan PinLocate anda boleh menyimpan tempat ini, bersama nota penanda dan fotonya, untuk lain kali. Tempat itu dibaca daripada pautan di dalam pelayar anda dan tidak pernah dihantar ke laman web ini.",
  },
};
