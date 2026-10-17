import localFont from "next/font/local";

// Plus Jakarta Sans, self-hosted from @fontsource-variable; never loaded from Google.
export const jakarta = localFont({
  src: "../../node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-jakarta",
  adjustFontFallback: "Arial",
});
