import { siteConfig, localePath, playUrl, type Lang } from "@/siteConfig";
import { t } from "@/content";
import { buttonVariants } from "@/components/ui/button";
import { LangSwitch } from "@/components/lang-switch";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

export function navItems(lang: Lang) {
  const c = t(lang).ui.nav;
  const home = localePath(lang, "/");
  return [
    { href: `${home}#features`, label: c.features },
    { href: `${home}#how-it-works`, label: c.how },
    { href: `${home}#pricing`, label: c.pricing },
    ...(siteConfig.testimonials.length ? [{ href: `${home}#reviews`, label: c.reviews }] : []),
    { href: `${home}#faq`, label: c.faq },
  ];
}

export function getAppHref(lang: Lang) {
  return siteConfig.playLive ? playUrl(lang) : `${localePath(lang, "/")}#download`;
}

/** [path] is this page's path without the language prefix, such as "/privacy/". */
export function SiteHeader({ lang, path }: { lang: Lang; path: string }) {
  const c = t(lang).ui;
  const other: Lang = lang === "en" ? "ms" : "en";
  const items = navItems(lang);
  const switcher = (className?: string) => (
    <LangSwitch href={localePath(other, path)} lang={other} short={c.switchShort} label={c.switchLabel} className={className} />
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <a href={localePath(lang, "/")} className="flex min-h-11 items-center gap-2.5 rounded-lg text-lg font-bold tracking-tight">
          <Logo />
          {siteConfig.name}
        </a>
        <nav aria-label={c.menu} className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full px-3.5 text-sm font-medium text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-1 lg:ml-2">
          {switcher("hidden sm:inline-flex")}
          <a href={getAppHref(lang)} className={cn(buttonVariants(), "hidden sm:inline-flex")}>
            {c.getApp}
          </a>
          <MobileNav
            items={items}
            menuLabel={c.menu}
            closeLabel={c.closeMenu}
            footer={
              <>
                {switcher("justify-start border border-border")}
                <a href={getAppHref(lang)} className={buttonVariants({ size: "lg" })}>
                  {c.getApp}
                </a>
              </>
            }
          />
        </div>
      </div>
    </header>
  );
}
