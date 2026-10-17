import { cn } from "@/lib/utils";

export function ProBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand px-2 py-0.5 text-[0.6875rem] font-bold tracking-wider text-brand-foreground uppercase",
        className,
      )}
    >
      {label}
    </span>
  );
}
