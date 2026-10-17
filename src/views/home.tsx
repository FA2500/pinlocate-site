import { siteConfig, localePath, type Lang } from "@/siteConfig";
import { t } from "@/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FaqSection, Features, FinalCta, Hero, HowItWorks, MadeFor, Pricing, Reviews } from "@/components/home/sections";

function jsonLd(lang: Lang) {
  const c = t(lang);
  // No ratings or review counts until real reviews exist.
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    description: c.meta.home.description,
    url: `${siteConfig.url}${localePath(lang, "/")}`,
    image: `${siteConfig.url}/icons/icon-512.png`,
    applicationCategory: "TravelApplication",
    operatingSystem: "Android",
    inLanguage: ["en", "ms"],
    offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
    author: { "@type": "Organization", name: siteConfig.name, email: siteConfig.email, url: siteConfig.url },
  };
}

export function HomeView({ lang }: { lang: Lang }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)).replace(/</g, "\\u003c") }} />
      <SiteHeader lang={lang} path="/" />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero lang={lang} />
        <MadeFor lang={lang} />
        <Features lang={lang} />
        <HowItWorks lang={lang} />
        <Pricing lang={lang} />
        <Reviews lang={lang} />
        <FaqSection lang={lang} />
        <FinalCta lang={lang} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
