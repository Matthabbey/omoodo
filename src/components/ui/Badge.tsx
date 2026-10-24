import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "bg-brand text-on-brand",
        accent: "bg-accent-soft text-accent-deep",
        soft: "bg-brand-soft text-brand-deep",
        outline: "border border-border bg-surface text-foreground",
        blur: "border border-white/30 bg-deep/40 text-white backdrop-blur-md",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
