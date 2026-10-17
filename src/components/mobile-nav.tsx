"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type NavItem = { href: string; label: string };

/** The menu on phones and tablets: a drawer from the side. */
export function MobileNav({
  items,
  menuLabel,
  closeLabel,
  footer,
}: {
  items: NavItem[];
  menuLabel: string;
  closeLabel: string;
  footer: ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "lg:hidden")}>
        <Menu aria-hidden="true" />
        <span className="sr-only">{menuLabel}</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content
          aria-describedby={undefined}
          className="drawer fixed inset-y-0 right-0 z-50 flex w-[min(20rem,88vw)] flex-col gap-6 overflow-y-auto border-l border-border bg-background p-5 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-bold">{menuLabel}</Dialog.Title>
            <Dialog.Close className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <X aria-hidden="true" />
              <span className="sr-only">{closeLabel}</span>
            </Dialog.Close>
          </div>
          <nav aria-label={menuLabel}>
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Dialog.Close asChild>
                    <a
                      href={item.href}
                      className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold hover:bg-surface-2"
                    >
                      {item.label}
                    </a>
                  </Dialog.Close>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto flex flex-col gap-3">{footer}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
