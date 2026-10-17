// Structured data (schema.org JSON-LD) for every page, checked in CI by scripts/validate-schema.mjs.
// No ratings or reviews (aggregateRating, review) until real ones exist.
import { localePath, siteConfig, type Lang } from "@/siteConfig";
import { t } from "@/content";
import { guidePath, type Guide } from "@/content/guides";

const orgId = `${siteConfig.url}/#organization`;

export function organization() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/icons/icon-512.png`, width: 512, height: 512 },
    email: siteConfig.email,
    contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: siteConfig.email, availableLanguage: ["en", "ms"] },
  };
}

export function softwareApplication(lang: Lang) {
  const c = t(lang);
  return {
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    description: c.meta.home.description,
    url: `${siteConfig.url}${localePath(lang, "/")}`,
    image: `${siteConfig.url}/icons/icon-512.png`,
    applicationCategory: "TravelApplication",
    operatingSystem: "Android",
    inLanguage: ["en", "ms"],
    publisher: { "@id": orgId },
    offers: [
      { "@type": "Offer", name: siteConfig.name, price: "0", priceCurrency: "MYR" },
      {
        "@type": "Offer",
        name: `${siteConfig.name} Pro`,
        price: siteConfig.proPriceMyr,
        priceCurrency: "MYR",
        eligibleRegion: { "@type": "Country", name: "MY" },
        priceSpecification: [
          // The free trial for new subscribers, then the monthly price.
          { "@type": "UnitPriceSpecification", name: "Free trial", price: "0", priceCurrency: "MYR", billingDuration: `P${siteConfig.trialWeeks}W` },
          { "@type": "UnitPriceSpecification", price: siteConfig.proPriceMyr, priceCurrency: "MYR", billingDuration: "P1M", unitCode: "MON" },
        ],
      },
    ],
  };
}

export function faqPage(lang: Lang) {
  return {
    "@type": "FAQPage",
    url: `${siteConfig.url}${localePath(lang, "/")}#faq`,
    inLanguage: lang,
    mainEntity: t(lang).faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a.join(" ") },
    })),
  };
}

export function article(guide: Guide, lang: Lang) {
  const text = guide.text[lang];
  const url = `${siteConfig.url}${guidePath(guide, lang)}`;
  return {
    "@type": "Article",
    headline: text.title,
    description: text.description,
    inLanguage: lang,
    url,
    mainEntityOfPage: url,
    image: `${siteConfig.url}/og/${guide.id}-${lang}.png`,
    datePublished: guide.published,
    dateModified: guide.modified,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@id": orgId },
  };
}

/** One JSON-LD block holding [items] as a graph. */
export function JsonLd({ items }: { items: object[] }) {
  const data = { "@context": "https://schema.org", "@graph": items };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
