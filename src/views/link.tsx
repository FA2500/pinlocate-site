import { playUrl, siteConfig, type Lang } from "@/siteConfig";
import { t } from "@/content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SharedPlace } from "@/components/shared-place";
import { PlayCta } from "@/components/play-cta";
import { buttonVariants } from "@/components/ui/button";

/** /p/: a shared PinLocate link opened without the app. */
export function LinkView({ lang }: { lang: Lang }) {
  const c = t(lang).link;
  return (
    <>
      <SiteHeader lang={lang} path="/p/" />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-14 sm:px-6 sm:py-20">
          <SharedPlace text={c} />
          <div className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-surface p-5 sm:p-6">
            {siteConfig.playLive ? (
              <a href={playUrl(lang)} className={buttonVariants({ variant: "outline", size: "lg" }) + " self-start"}>
                {c.get}
              </a>
            ) : (
              <PlayCta lang={lang} />
            )}
            <p className="text-sm leading-relaxed text-muted">{c.note}</p>
          </div>
        </div>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}
