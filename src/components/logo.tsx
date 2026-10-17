/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

/** The app's launcher icon. */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/icons/logo-64.png"
      alt=""
      width={32}
      height={32}
      className={cn("size-8 rounded-[0.6rem] bg-white shadow-sm ring-1 ring-black/10", className)}
    />
  );
}
