"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/content/types";

/** Answers stay in the HTML (forceMount; closed ones are display:none), so they are indexed and readable without JavaScript. */
export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <Accordion.Root type="multiple" className="divide-y divide-border rounded-3xl border border-border bg-surface">
      {items.map((item, i) => (
        <Accordion.Item key={item.q} value={`q${i}`} className="group">
          <Accordion.Header asChild>
            <h3>
              <Accordion.Trigger className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold sm:px-6">
                {item.q}
                <ChevronDown
                  aria-hidden="true"
                  className="size-5 shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>
            </h3>
          </Accordion.Header>
          <Accordion.Content forceMount className="faq-answer px-5 pb-5 text-muted data-[state=closed]:hidden sm:px-6">
            <div className="flex flex-col gap-3 leading-relaxed">
              {item.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {item.link && (
                <p>
                  <a href={item.link.href} className="font-semibold text-brand underline underline-offset-4 hover:no-underline">
                    {item.link.label}
                  </a>
                </p>
              )}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
