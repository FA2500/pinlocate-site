import { Check, ArrowDown } from "lucide-react";
import { siteConfig, type Lang } from "@/siteConfig";
import { t } from "@/content";
import { Icon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { FaqAccordion } from "@/components/faq-accordion";
import { PlayCta } from "@/components/play-cta";
import { ProBadge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PhoneMockup } from "./phone-mockup";

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6";

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mx-auto mb-10 flex max-w-2xl flex-col gap-3 text-center sm:mb-14">
      <h2 id={id} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
    </Reveal>
  );
}

export function Hero({ lang }: { lang: Lang }) {
  const c = t(lang);
  return (
    <section aria-labelledby="hero-title" className="relative overflow-x-clip">
      <div className={cn(container, "grid items-center gap-12 pt-10 pb-16 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pt-20 lg:pb-24")}>
        <div className="flex flex-col items-start gap-6">
          <p className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-muted">{c.hero.eyebrow}</p>
          <h1 id="hero-title" className="text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {c.hero.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{c.hero.subtitle}</p>
          <div className="flex flex-wrap items-center gap-3">
            <PlayCta lang={lang} page="home" />
            <a href="#how-it-works" className={buttonVariants({ variant: "outline", size: "lg" })}>
              {c.hero.secondary}
              <ArrowDown aria-hidden="true" />
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-muted">
            {c.hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check aria-hidden="true" className="size-4 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <PhoneMockup c={c.mockup} />
      </div>
    </section>
  );
}

export function MadeFor({ lang }: { lang: Lang }) {
  const c = t(lang).madeFor;
  return (
    <section aria-labelledby="made-for" className="border-y border-border bg-surface">
      <div className={cn(container, "py-10")}>
        <h2 id="made-for" className="mb-6 text-center text-sm font-bold tracking-wider text-muted uppercase">
          {c.title}
        </h2>
        <Stagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((item) => (
            <StaggerItem as="li" key={item.title} className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon name={item.icon} className="size-5" />
              </span>
              <span className="flex flex-col">
                <span className="font-semibold">{item.title}</span>
                <span className="text-sm text-muted">{item.text}</span>
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Features({ lang }: { lang: Lang }) {
  const c = t(lang);
  return (
    <section aria-labelledby="features" className={cn(container, "py-20 sm:py-28")}>
      <SectionHeading id="features" title={c.features.title} subtitle={c.features.subtitle} />
      <Stagger as="ul" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.features.items.map((f) => (
          <StaggerItem as="li" key={f.title} className={cn(f.wide && "sm:col-span-2")}>
            <div className="group relative flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="flex items-start justify-between gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 motion-reduce:transition-none">
                  <Icon name={f.icon} className="size-6" />
                </span>
                {f.pro && <ProBadge label={c.ui.pro} />}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="leading-relaxed text-muted">{f.text}</p>
              </div>
              {f.chips && (
                <ul className="mt-auto flex flex-wrap gap-2 pt-1">
                  {f.chips.map((chip, i) => (
                    <li
                      key={chip}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground transition-colors duration-300 group-hover:border-brand/40"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function HowItWorks({ lang }: { lang: Lang }) {
  const c = t(lang).how;
  return (
    <section aria-labelledby="how-it-works" className="bg-surface">
      <div className={cn(container, "py-20 sm:py-28")}>
        <SectionHeading id="how-it-works" title={c.title} subtitle={c.subtitle} />
        <Stagger as="ol" className="relative grid gap-6 md:grid-cols-3">
          <span aria-hidden="true" className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-border md:block" />
          {c.steps.map((step, i) => (
            <StaggerItem as="li" key={step.title} className="relative flex flex-col items-center gap-3 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-brand text-xl font-extrabold text-brand-foreground shadow-lg ring-8 ring-surface">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="max-w-xs leading-relaxed text-muted">{step.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Pricing({ lang }: { lang: Lang }) {
  const c = t(lang);
  const p = c.pricing;
  const list = (items: string[]) => (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-labelledby="pricing" className={cn(container, "py-20 sm:py-28")}>
      <SectionHeading id="pricing" title={p.title} subtitle={p.subtitle} />
      <Stagger className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <StaggerItem className="flex flex-col gap-6 rounded-3xl border border-border bg-surface p-7 sm:p-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">{p.free.name}</h3>
            <p className="text-4xl font-extrabold tracking-tight">{p.free.price}</p>
            <p className="text-muted">{p.free.blurb}</p>
          </div>
          {list(p.free.items)}
        </StaggerItem>
        <StaggerItem className="relative flex flex-col gap-6 rounded-3xl border-2 border-brand bg-background p-7 shadow-xl shadow-brand/10 sm:p-8">
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              {siteConfig.name} <ProBadge label={p.pro.name} />
            </h3>
            <p className="text-4xl font-extrabold tracking-tight">{p.pro.trial}</p>
            <p className="text-lg font-semibold text-brand">{p.pro.then}</p>
            <p className="text-muted">{p.pro.blurb}</p>
          </div>
          {list(p.pro.items)}
          <p className="mt-auto text-sm text-muted">{p.pro.fine}</p>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

export function Reviews({ lang }: { lang: Lang }) {
  const c = t(lang);
  if (!siteConfig.testimonials.length) return null;
  return (
    <section aria-labelledby="reviews" className={cn(container, "py-20 sm:py-28")}>
      <SectionHeading id="reviews" title={c.reviews.title} />
      <Stagger as="ul" className="grid gap-6 md:grid-cols-3">
        {siteConfig.testimonials.map((r) => (
          <StaggerItem as="li" key={r.quote} className="rounded-3xl border border-border bg-surface p-6">
            <blockquote className="flex flex-col gap-4">
              <p className="leading-relaxed">“{r.quote}”</p>
              <footer className="text-sm text-muted">
                {r.name}
                {r.role && `, ${r.role}`}
              </footer>
            </blockquote>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function FaqSection({ lang }: { lang: Lang }) {
  const c = t(lang).faq;
  return (
    <section aria-labelledby="faq" className="bg-surface">
      <div className={cn(container, "max-w-3xl py-20 sm:py-28")}>
        <SectionHeading id="faq" title={c.title} />
        <Reveal>
          <FaqAccordion items={c.items} />
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta({ lang }: { lang: Lang }) {
  const c = t(lang).cta;
  return (
    <section aria-labelledby="download" className={cn(container, "py-20 sm:py-28")}>
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-center text-brand-foreground sm:px-12 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <h2 id="download" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {c.title}
          </h2>
          <p className="text-lg opacity-90">{c.text}</p>
          <PlayCta lang={lang} page="home" inverse />
        </div>
      </Reveal>
    </section>
  );
}
