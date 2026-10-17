import type { Metadata } from "next";
import type { Lang } from "@/siteConfig";
import { legal } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalPage } from "@/components/legal-page";

type Kind = keyof typeof legal;

export function legalMetadata(kind: Kind, lang: Lang): Metadata {
  const doc = legal[kind][lang];
  return pageMetadata({ lang, path: `/${kind}/`, title: doc.title, description: doc.description });
}

export function LegalView({ kind, lang }: { kind: Kind; lang: Lang }) {
  return (
    <>
      <SiteHeader lang={lang} path={`/${kind}/`} page={kind} />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <LegalPage lang={lang} doc={legal[kind][lang]} />
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
