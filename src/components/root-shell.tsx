import type { ReactNode } from "react";
import { MotionProvider } from "@/components/motion";
import { jakarta } from "@/lib/font";
import { t } from "@/content";
import type { Lang } from "@/siteConfig";
import "@/app/globals.css";

// Without JavaScript: show what fades in, and every FAQ answer.
const noscriptCss = "[data-reveal]{opacity:1!important;transform:none!important}.faq-answer[data-state=closed]{display:block!important}";

/** The <html> of every page; English and Malay each have their own root layout so <html lang> is right. */
export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${jakarta.variable} antialiased`}>
      {/* eslint-disable-next-line @next/next/no-head-element -- the App Router root layout owns <head> */}
      <head>
        <noscript>
          <style>{noscriptCss}</style>
        </noscript>
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-brand px-5 py-3 font-semibold text-brand-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {t(lang).ui.skip}
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
