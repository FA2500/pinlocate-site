export const pages = [
  { path: "/", name: "home", lang: "en" },
  { path: "/ms/", name: "home-ms", lang: "ms" },
  { path: "/privacy/", name: "privacy", lang: "en" },
  { path: "/ms/privacy/", name: "privacy-ms", lang: "ms" },
  { path: "/terms/", name: "terms", lang: "en" },
  { path: "/ms/terms/", name: "terms-ms", lang: "ms" },
  { path: "/p/#v=1&lat=3.14380&lng=101.68482&n=Rumah%20Tok%20Wan", name: "link", lang: "en" },
  { path: "/ms/p/#v=1&lat=3.14380&lng=101.68482&n=Rumah%20Tok%20Wan", name: "link-ms", lang: "ms" },
  { path: "/no-such-page/", name: "404", lang: "en" },
] as const;

export const widths = [360, 768, 1280] as const;
export const schemes = ["light", "dark"] as const;
