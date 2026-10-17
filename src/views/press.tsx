/* eslint-disable @next/next/no-img-element -- static export: plain images */
import type { Metadata } from "next";
import { Download } from "lucide-react";
import { siteConfig, type Lang } from "@/siteConfig";
import { press, screenshots } from "@/content/press";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, organization } from "@/lib/jsonld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function pressMetadata(lang: Lang): Metadata {
  const c = press[lang];
  return pageMetadata({ lang, path: "/press/", title: c.title, description: c.description });
}

const downloadLink =
  "inline-flex min-h-11 items-center gap-2 font-semibold text-brand underline underline-offset-4 hover:no-underline";

export function PressView({ lang }: { lang: Lang }) {
  const c = press[lang];
  return (
    <>
      <JsonLd items={[organization()]} />
      <SiteHeader lang={lang} path="/press/" page="press" />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-14 px-4 py-14 sm:px-6 sm:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{c.heading}</h1>

          <section aria-labelledby="story" className="flex flex-col gap-4">
            <h2 id="story" className="text-2xl font-bold tracking-tight">
              {c.storyTitle}
            </h2>
            <p className="max-w-[65ch] text-lg leading-relaxed">{c.story.join(" ")}</p>
          </section>

          <section aria-labelledby="facts" className="flex flex-col gap-4">
            <h2 id="facts" className="text-2xl font-bold tracking-tight">
              {c.factsTitle}
            </h2>
            <dl className="divide-y divide-border rounded-3xl border border-border bg-surface">
              {c.facts.map((f) => (
                <div key={f.term} className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4 sm:px-6">
                  <dt className="font-semibold">{f.term}</dt>
                  <dd className="text-muted">
                    {f.detail === siteConfig.email ? (
                      <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand underline underline-offset-4 hover:no-underline">
                        {f.detail}
                      </a>
                    ) : (
                      f.detail
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="logo" className="flex flex-col gap-4">
            <h2 id="logo" className="text-2xl font-bold tracking-tight">
              {c.downloadsTitle}
            </h2>
            <div className="flex flex-col gap-5 rounded-3xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:p-6">
              <img src="/press/pinlocate-logo.svg" alt="PinLocate" width={128} height={128} className="size-32 rounded-2xl bg-white p-2" />
              <ul className="flex flex-col">
                <li>
                  <a href="/press/pinlocate-logo.png" download className={downloadLink}>
                    <Download aria-hidden="true" className="size-4" />
                    {c.logoPng}
                  </a>
                </li>
                <li>
                  <a href="/press/pinlocate-logo.svg" download className={downloadLink}>
                    <Download aria-hidden="true" className="size-4" />
                    {c.logoSvg}
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="screenshots" className="flex flex-col gap-4">
            <h2 id="screenshots" className="text-2xl font-bold tracking-tight">
              {c.screenshotsTitle}
            </h2>
            <ul className="grid grid-cols-2 gap-5 sm:grid-cols-4">
              {screenshots.map((name) => (
                <li key={name} className="flex flex-col gap-2">
                  <img
                    src={`/press/${lang}/${name}-thumb.webp`}
                    alt={c.screenshots[name]}
                    width={360}
                    height={640}
                    loading="lazy"
                    className="h-auto w-full rounded-2xl border border-border"
                  />
                  <a href={`/press/${lang}/${name}.png`} download className={downloadLink}>
                    <Download aria-hidden="true" className="size-4 shrink-0" />
                    <span>
                      {c.download}
                      <span className="sr-only">: {c.screenshots[name]}</span> (PNG, 1080 × 1920)
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">{c.usage}</p>
          </section>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
