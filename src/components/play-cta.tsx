import { Smartphone } from "lucide-react";
import { playUrl, siteConfig, type Lang, type PlaySource } from "@/siteConfig";
import { t } from "@/content";
import { cn } from "@/lib/utils";

/**
 * The Google Play button. Until the listing is live it is a plain label, not a link.
 * When live it is Google's own badge, unmodified, in the page's language, linking to the listing
 * tagged with [page] (see playUrl).
 */
export function PlayCta({
  lang,
  page,
  source,
  inverse = false,
}: {
  lang: Lang;
  page: string;
  source?: PlaySource;
  inverse?: boolean;
}) {
  const c = t(lang).ui;
  if (siteConfig.playLive) {
    return (
      <a href={playUrl(lang, page, source)} className="inline-flex rounded-xl">
        {/* The badge PNG has Google's clear space built in. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/badges/google-play-${lang}.png`} alt={c.playBadgeAlt} width={646} height={250} className="h-[4.5rem] w-auto" />
      </a>
    );
  }
  return (
    <p
      className={cn(
        "inline-flex min-h-12 items-center gap-2.5 rounded-full border px-4 text-[0.9375rem] font-semibold sm:px-5 sm:text-base",
        inverse ? "border-brand-foreground/40 text-brand-foreground" : "border-border bg-surface text-foreground",
      )}
    >
      <Smartphone aria-hidden="true" className="size-5" />
      {c.comingSoon}
    </p>
  );
}
