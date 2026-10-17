import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { guidesPath, type Lang } from "@/siteConfig";
import { guideById, guidePath, guides, guidesIndex, type Guide } from "@/content/guides";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, article, organization } from "@/lib/jsonld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PlayCta } from "@/components/play-cta";

const other = (lang: Lang): Lang => (lang === "en" ? "ms" : "en");

/** e.g. "18 October 2026" / "18 Oktober 2026". */
function formatDate(iso: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === "ms" ? "ms-MY" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(iso),
  );
}

export function guidesIndexMetadata(lang: Lang): Metadata {
  const c = guidesIndex[lang];
  return pageMetadata({ lang, paths: { en: guidesPath("en"), ms: guidesPath("ms") }, title: c.title, description: c.description });
}

export function GuidesIndexView({ lang }: { lang: Lang }) {
  const c = guidesIndex[lang];
  return (
    <>
      <JsonLd items={[organization()]} />
      <SiteHeader lang={lang} path="/guides/" otherHref={guidesPath(other(lang))} page="guides" />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">{c.heading}</h1>
          <p className="mt-4 text-lg text-muted">{c.description}</p>
          <ul className="mt-10 flex flex-col gap-4">
            {guides.map((g) => (
              <li key={g.id}>
                <a
                  href={guidePath(g, lang)}
                  className="group flex flex-col gap-2 rounded-3xl border border-border bg-surface p-5 transition-colors hover:border-brand sm:p-6"
                >
                  <h2 className="text-xl font-bold tracking-tight text-balance">{g.text[lang].title}</h2>
                  <p className="text-muted">{g.text[lang].description}</p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    <time dateTime={g.modified}>{`${c.updated} ${formatDate(g.modified, lang)}`}</time>
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}

export function guideMetadata(id: Guide["id"], lang: Lang): Metadata {
  const g = guideById(id);
  const text = g.text[lang];
  return pageMetadata({
    lang,
    paths: { en: guidePath(g, "en"), ms: guidePath(g, "ms") },
    title: `${text.title} · PinLocate`,
    description: text.description,
    image: `/og/${g.id}-${lang}.png`,
    article: { published: g.published, modified: g.modified },
  });
}

export function GuideView({ id, lang }: { id: Guide["id"]; lang: Lang }) {
  const g = guideById(id);
  const text = g.text[lang];
  const c = guidesIndex[lang];
  return (
    <>
      <JsonLd items={[organization(), article(g, lang)]} />
      <SiteHeader lang={lang} path="/guides/" otherHref={guidePath(g, other(lang))} page={g.id} />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <a
            href={guidesPath(lang)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full pr-3 font-semibold text-brand hover:underline print:hidden"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            {c.all}
          </a>
          <article className="prose prose-zinc mt-6 max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:tracking-tight prose-a:text-brand prose-a:underline-offset-4 prose-code:break-all prose-code:before:content-none prose-code:after:content-none">
            <h1 className="mb-2 text-balance">{text.title}</h1>
            <p className="mt-0 text-muted">
              <time dateTime={g.modified}>{`${c.updated} ${formatDate(g.modified, lang)}`}</time>
            </p>
            <p className="lead">{text.answer}</p>
            {text.sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id}>
                <h2 id={s.id}>{s.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: s.html }} />
              </section>
            ))}
            <section aria-labelledby="with-pinlocate" className="not-prose mt-12 rounded-3xl border border-border bg-surface p-5 sm:p-7">
              <h2 id="with-pinlocate" className="text-2xl font-extrabold tracking-tight">
                {c.withApp}
              </h2>
              <div
                className="mt-3 flex flex-col gap-4 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: text.withApp }}
              />
              <div className="mt-6">
                <PlayCta lang={lang} page={g.id} />
              </div>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
