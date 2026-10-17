import type { Metadata, Viewport } from "next";
import { localePath, siteConfig, type Lang } from "@/siteConfig";

/**
 * Title, description, canonical, hreflang, Open Graph and Twitter for one page. [path] has no language
 * prefix; a page whose Malay URL isn't /ms + the English one (the guides) gives both in [paths].
 */
export function pageMetadata({
  lang,
  path,
  paths,
  title,
  description,
  image: imagePath,
  article,
  noindex = false,
}: {
  lang: Lang;
  path?: string;
  paths?: Record<Lang, string>;
  title: string;
  description: string;
  image?: string;
  article?: { published: string; modified: string };
  noindex?: boolean;
}): Metadata {
  const urls = paths ?? { en: localePath("en", path!), ms: localePath("ms", path!) };
  const url = urls[lang];
  const image = { url: imagePath ?? `/og-${lang}.png`, width: 1200, height: 630, alt: title };
  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    referrer: "no-referrer",
    alternates: noindex
      ? undefined
      : {
          canonical: url,
          languages: { en: urls.en, ms: urls.ms, "x-default": urls.en },
        },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      ...(article
        ? { type: "article", publishedTime: article.published, modifiedTime: article.modified }
        : { type: "website" }),
      siteName: siteConfig.name,
      url,
      title,
      description,
      locale: lang === "ms" ? "ms_MY" : "en_MY",
      alternateLocale: lang === "ms" ? "en_MY" : "ms_MY",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      ],
      apple: "/icons/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};
