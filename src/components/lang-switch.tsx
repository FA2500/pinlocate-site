"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

/** The link to this page in the other language. It keeps the part after #, so a shared place or a section stays open. */
export function LangSwitch({
  href,
  lang,
  short,
  label,
  className,
}: {
  href: string;
  lang: string;
  short: string;
  label: string;
  className?: string;
}) {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => "");
  return (
    <a
      href={href + hash}
      hrefLang={lang}
      lang={lang}
      data-lang-switch=""
      className={cn(
        "inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-full px-3 text-sm font-semibold text-foreground hover:bg-surface-2",
        className,
      )}
    >
      <span>{short}</span>
      <span className="sr-only">{label}</span>
    </a>
  );
}
