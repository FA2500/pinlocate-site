import { siteConfig, localePath, type Lang } from "@/siteConfig";
import { t } from "@/content";
import { Logo } from "@/components/logo";
import { navItems } from "@/components/site-header";

const linkClass = "inline-flex min-h-11 items-center text-muted transition-colors hover:text-foreground";

export function SiteFooter({ lang }: { lang: Lang }) {
  const c = t(lang);
  return (
    <footer className="border-t border-border bg-surface print:hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <a href={localePath(lang, "/")} className="flex min-h-11 w-fit items-center gap-2.5 rounded-lg text-lg font-bold">
            <Logo />
            {siteConfig.name}
          </a>
          <p className="text-muted">{c.footer.tagline}</p>
          <p className="text-muted">
            {c.ui.contact}:{" "}
            <a href={`mailto:${siteConfig.email}`} className="inline-flex min-h-11 items-center font-semibold text-brand underline underline-offset-4 hover:no-underline">
              {siteConfig.email}
            </a>
          </p>
        </div>
        <nav aria-label={c.footer.sections}>
          <h2 className="text-sm font-bold">{c.footer.sections}</h2>
          <ul className="mt-2">
            {[...navItems(lang), { href: localePath(lang, "/press/"), label: c.ui.press }].map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={c.footer.legal}>
          <h2 className="text-sm font-bold">{c.footer.legal}</h2>
          <ul className="mt-2">
            <li>
              <a href={localePath(lang, "/privacy/")} className={linkClass}>
                {c.ui.privacy}
              </a>
            </li>
            <li>
              <a href={localePath(lang, "/terms/")} className={linkClass}>
                {c.ui.terms}
              </a>
            </li>
            {siteConfig.socialLinks.map((s) => (
              <li key={s.href}>
                <a href={s.href} className={linkClass}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted sm:px-6">
          <p>
            {c.footer.madeIn} · © 2026 {siteConfig.name}
          </p>
          <p>{c.footer.trademarks}</p>
        </div>
      </div>
    </footer>
  );
}
