import { ArrowLeft, ChevronDown } from "lucide-react";
import { localePath, type Lang } from "@/siteConfig";
import { t } from "@/content";
import type { LegalDoc } from "@/content/legal/types";
import { Toc } from "@/components/toc";

/** A table that scrolls sideways on phones must be reachable with the keyboard. */
function focusableTables(html: string, headingId: string) {
  return html.replaceAll('<div class="table">', `<div class="table" tabindex="0" role="region" aria-labelledby="${headingId}">`);
}

export function LegalPage({ lang, doc }: { lang: Lang; doc: LegalDoc }) {
  const c = t(lang).ui;
  const sections = doc.sections.map(({ id, title }) => ({ id, title }));
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <a
        href={localePath(lang, "/")}
        className="inline-flex min-h-11 items-center gap-2 rounded-full pr-3 font-semibold text-brand hover:underline print:hidden"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        {c.backHome}
      </a>
      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        <article className="prose prose-zinc min-w-0 max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:tracking-tight prose-a:text-brand prose-a:underline-offset-4 prose-code:before:content-none prose-code:after:content-none lg:max-w-[46rem]">
          <h1 className="mb-2">{doc.heading}</h1>
          <p className="mt-0 text-muted">
            {c.effective} {doc.effective}
          </p>
          <details className="not-prose my-8 rounded-2xl border border-border bg-surface lg:hidden print:hidden">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 font-semibold [&::-webkit-details-marker]:hidden">
              {c.onThisPage}
              <ChevronDown aria-hidden="true" className="size-5 text-muted" />
            </summary>
            <ul className="flex flex-col px-2 pb-3">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex min-h-11 items-center rounded-lg px-2 text-muted hover:bg-surface-2 hover:text-foreground">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          <div dangerouslySetInnerHTML={{ __html: doc.intro }} />
          {doc.sections.map((s) => (
            <section key={s.id} aria-labelledby={s.id}>
              <h2 id={s.id}>{s.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: focusableTables(s.html, s.id) }} />
            </section>
          ))}
        </article>
        <aside className="hidden lg:block print:hidden">
          <Toc title={c.onThisPage} sections={sections} />
        </aside>
      </div>
    </div>
  );
}
