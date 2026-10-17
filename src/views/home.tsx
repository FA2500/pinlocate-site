import type { Lang } from "@/siteConfig";
import { JsonLd, faqPage, organization, softwareApplication } from "@/lib/jsonld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FaqSection, Features, FinalCta, Hero, HowItWorks, MadeFor, Pricing, Reviews } from "@/components/home/sections";

export function HomeView({ lang }: { lang: Lang }) {
  return (
    <>
      <JsonLd items={[organization(), softwareApplication(lang), faqPage(lang)]} />
      <SiteHeader lang={lang} path="/" page="home" />
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
