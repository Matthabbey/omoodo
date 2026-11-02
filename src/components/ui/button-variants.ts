import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold leading-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:shrink-0 [&_svg]:align-middle",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-brand shadow-sm hover:bg-brand hover:text-accent hover:shadow-md",
        brand:
          "bg-brand text-on-brand shadow-sm hover:bg-brand-deep hover:shadow-md",
        secondary:
          "border border-accent/60 bg-accent/15 text-accent shadow-sm backdrop-blur-md hover:border-accent hover:bg-accent hover:text-brand",
        outline:
          "border border-brand bg-surface text-brand hover:bg-brand hover:text-accent",
        accent:
          "bg-accent text-brand shadow-sm hover:bg-brand hover:text-accent hover:shadow-md",
        ghost:
          "text-muted hover:bg-brand-soft hover:text-brand-deep",
      },
      size: {
        sm: "h-8 px-3.5 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
