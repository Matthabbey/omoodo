import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, icon, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            className="text-xs font-semibold text-foreground"
            htmlFor={inputId}
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 text-muted"
            >
              {icon}
            </span>
          )}
          <input
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            aria-invalid={Boolean(error)}
            className={cn(
              "h-10 w-full rounded-xl border border-border bg-surface px-3.5 py-2 text-sm text-foreground placeholder:text-muted/60 transition-colors",
              "focus:outline-none focus:border-brand",
              "disabled:cursor-not-allowed disabled:opacity-50",
              Boolean(icon) && "pl-10",
              Boolean(error) && "border-red-500",
              className
            )}
            id={inputId}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs font-medium text-red-600" id={`${inputId}-error`} role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p className="text-xs text-muted" id={`${inputId}-hint`}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
