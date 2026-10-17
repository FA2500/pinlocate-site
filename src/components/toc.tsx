"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** The desktop table of contents, highlighting the section on screen. */
export function Toc({ title, sections }: { title: string; sections: { id: string; title: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const headings = sections.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -65% 0px" },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label={title} className="sticky top-24">
      <p className="mb-3 text-xs font-bold tracking-wider text-muted uppercase">{title}</p>
      <ul className="flex flex-col border-l border-border">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={active === s.id ? "location" : undefined}
              className={cn(
                "-ml-px flex min-h-9 items-center border-l-2 border-transparent py-1 pl-4 text-sm text-muted transition-colors hover:text-foreground",
                active === s.id && "border-brand font-semibold text-brand",
              )}
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
