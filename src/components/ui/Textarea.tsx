import * as React from "react";
import { cn } from "../../lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  readonly label: string;
  readonly hint?: string;
  readonly error?: string;
}

export function Textarea({
  className,
  label,
  hint,
  error,
  id,
  ...props
}: TextareaProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label className="text-xs font-semibold text-foreground" htmlFor={inputId}>
        {label}
      </label>
      <textarea
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        aria-invalid={Boolean(error)}
        className={cn(
          "min-h-36 w-full resize-y rounded-xl border border-border bg-surface px-3.5 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors",
          "focus:border-brand focus:outline-none",
          error && "border-red-500",
          className
        )}
        id={inputId}
        {...props}
      />
      {error && <p className="text-xs font-medium text-red-600" id={`${inputId}-error`} role="alert">{error}</p>}
      {hint && !error && <p className="text-xs text-muted" id={`${inputId}-hint`}>{hint}</p>}
    </div>
  );
}
