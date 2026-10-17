import { cva, type VariantProps } from "class-variance-authority";

// shadcn/ui-style button classes, for <a> and <button> alike. Every size is at least 44 px tall.
export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,color,box-shadow,transform] duration-200 select-none active:scale-[0.98] [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-brand text-brand-foreground shadow-sm hover:bg-brand-strong hover:shadow-md dark:hover:bg-brand-strong",
        outline: "border border-border bg-background text-foreground hover:border-brand hover:text-brand",
        ghost: "text-foreground hover:bg-surface-2",
      },
      size: {
        md: "px-5 text-sm",
        lg: "px-6 text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
