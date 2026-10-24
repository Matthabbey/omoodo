"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export interface SelectOption {
  readonly value: string;
  readonly label: string;
}

export interface SelectProps {
  readonly options: readonly SelectOption[];
  readonly value?: string;
  readonly defaultValue?: string;
  readonly onChange?: (value: string) => void;
  readonly label?: string;
  readonly placeholder?: string;
  readonly error?: string;
  readonly hint?: string;
  readonly icon?: React.ReactNode;
  readonly className?: string;
  readonly disabled?: boolean;
  readonly id?: string;
}

export function Select({
  options,
  value,
  defaultValue,
  onChange,
  label,
  placeholder = "Select an option",
  error,
  hint,
  icon,
  className,
  disabled = false,
  id,
}: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(
    defaultValue ?? options[0]?.value ?? ""
  );
  const selectedValue = value !== undefined ? value : internalValue;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const selectedOption = options.find((opt) => opt.value === selectedValue);
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-") ?? "select";

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleSelect = (val: string) => {
    if (value === undefined) setInternalValue(val);
    onChange?.(val);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if ((e.key === "ArrowDown" || e.key === "ArrowUp") && isOpen) {
      e.preventDefault();
      const curr = options.findIndex((opt) => opt.value === selectedValue);
      const delta = e.key === "ArrowDown" ? 1 : -1;
      const next = options[(curr + delta + options.length) % options.length];
      if (next) handleSelect(next.value);
    }
  };

  return (
    <div className={cn("flex flex-col gap-1.5 w-full relative", className)} ref={containerRef}>
      {label && (
        <label className="text-xs font-semibold text-foreground select-none" htmlFor={selectId}>
          {label}
        </label>
      )}

      {/* Brand Trigger Button */}
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={cn(
          "flex h-11 w-full items-center justify-between rounded-xl border border-border bg-surface px-3.5 py-2 text-left text-sm text-foreground transition-colors duration-150",
          "hover:border-brand-accent focus:outline-none focus:border-brand",
          isOpen && "border-brand bg-brand-soft/10",
          disabled && "opacity-50 cursor-not-allowed",
          Boolean(error) && "border-red-500"
        )}
        disabled={disabled}
        id={selectId}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        type="button"
      >
        <div className="flex items-center gap-2.5 overflow-hidden">
          {icon && <span aria-hidden="true" className="text-brand shrink-0">{icon}</span>}
          <span className="truncate font-medium">
            {selectedOption ? selectedOption.label : <span className="text-muted/60">{placeholder}</span>}
          </span>
        </div>
        <ChevronDown
          aria-hidden="true"
          className={cn("h-4 w-4 text-muted transition-transform duration-200 shrink-0 ml-2", isOpen && "rotate-180 text-brand")}
        />
      </button>

      {/* Custom Brand Dropdown Menu */}
      {isOpen && (
        <ul
          aria-label={label ?? "Select options"}
          className="absolute top-[calc(100%+6px)] left-0 right-0 z-50 max-h-64 overflow-y-auto rounded-2xl border border-border bg-surface p-1.5 shadow-2xl backdrop-blur-md"
          role="listbox"
        >
          {options.map((opt) => {
            const isSelected = opt.value === selectedValue;
            return (
              <li
                aria-selected={isSelected}
                className={cn(
                  "flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none",
                  isSelected
                    ? "bg-brand text-on-brand font-semibold shadow-xs"
                    : "text-foreground hover:bg-brand-soft hover:text-brand-deep"
                )}
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                role="option"
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-on-brand" />}
              </li>
            );
          })}
        </ul>
      )}

      {error && <p className="text-xs font-medium text-red-600" role="alert">{error}</p>}
      {hint && !error && <p className="text-xs text-muted">{hint}</p>}
    </div>
  );
}
