"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import { Select } from "./Select";
import {
  DATE_PICKER_WEEKDAYS,
  getLocalDate,
  getTimeOptions,
  toDateValue,
} from "./date-time-picker-utils";
import { DateTimePickerCalendarHeader } from "./DateTimePickerCalendarHeader";
import { DateTimePickerTimePanel } from "./DateTimePickerTimePanel";

export interface DateTimePickerProps {
  readonly id: string;
  readonly label: string;
  readonly name: string;
  readonly type: "date" | "time" | "datetime";
  readonly required?: boolean;
  readonly value?: string;
  readonly onChange?: (value: string) => void;
}

interface PopoverPosition {
  readonly left: number;
  readonly top: number;
  readonly maxHeight: number;
}

export function DateTimePicker({
  id,
  label,
  name,
  type,
  required = false,
  value: controlledValue,
  onChange,
}: DateTimePickerProps) {
  const [internalValue, setInternalValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState<PopoverPosition | null>(null);
  const [visibleMonth, setVisibleMonth] = useState(() => getLocalDate(controlledValue));
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const value = controlledValue ?? internalValue;
  const dateValue = type === "datetime" ? value.slice(0, 10) : value;
  const selectedTime = type === "datetime" && value.includes("T") ? value.slice(11, 16) : "";

  useEffect(() => {
    if (!isOpen) return;

    function closeOnOutsidePointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, [isOpen]);

  useLayoutEffect(() => {
    if (!isOpen) return;

    function updateDirection() {
      const trigger = triggerRef.current;
      const popover = popoverRef.current;
      if (!trigger || !popover) return;

      const triggerBounds = trigger.getBoundingClientRect();
      const spaceAbove = triggerBounds.top - 8;
      const spaceBelow = window.innerHeight - triggerBounds.bottom - 8;
      const popoverHeight = Math.min(popover.scrollHeight, window.innerHeight - 16);
      const openAbove = spaceBelow < popoverHeight && spaceAbove > spaceBelow;
      const availableSpace = openAbove ? spaceAbove : spaceBelow;
      const maxHeight = Math.max(100, Math.min(window.innerHeight - 16, availableSpace));
      const width = popover.getBoundingClientRect().width;
      const preferredLeft = window.innerWidth >= 1024
        ? triggerBounds.right - width
        : triggerBounds.left;
      const left = Math.max(8, Math.min(preferredLeft, window.innerWidth - width - 8));
      const top = openAbove
        ? Math.max(8, triggerBounds.top - Math.min(popoverHeight, maxHeight) - 8)
        : Math.min(triggerBounds.bottom + 8, window.innerHeight - Math.min(popoverHeight, maxHeight) - 8);
      setPopoverPosition({ left, top, maxHeight });
    }

    updateDirection();
    window.addEventListener("resize", updateDirection);
    window.addEventListener("scroll", updateDirection, true);
    return () => {
      window.removeEventListener("resize", updateDirection);
      window.removeEventListener("scroll", updateDirection, true);
    };
  }, [isOpen]);

  function updateValue(nextValue: string) {
    if (controlledValue === undefined) setInternalValue(nextValue);
    onChange?.(nextValue);
  }

  if (type === "time") {
    return (
      <div className="grid gap-1.5">
        <Select
          id={id}
          label={label}
          onChange={updateValue}
          options={[{ value: "", label: "Choose a time" }, ...getTimeOptions()]}
          value={value}
        />
        <input name={name} type="hidden" value={value} />
        {required && (
          <input aria-hidden="true" className="sr-only" data-required-control={id}
            data-required-value={name} tabIndex={-1} value={value} readOnly />
        )}
      </div>
    );
  }

  const month = visibleMonth.getMonth();
  const year = visibleMonth.getFullYear();
  const today = toDateValue(new Date());
  const currentMonthIndex = new Date().getFullYear() * 12 + new Date().getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const dayCount = new Date(year, month + 1, 0).getDate();
  const selectedDate = dateValue ? getLocalDate(dateValue) : null;
  const cells = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: dayCount }, (_, index) => index + 1),
  ];
  const formattedValue = selectedDate
    ? `${selectedDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}${type === "datetime" && selectedTime ? ` · ${new Date(2000, 0, 1, Number(selectedTime.slice(0, 2)), Number(selectedTime.slice(3, 5))).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}` : ""}`
    : "";

  return (
    <div className="relative grid gap-1.5" ref={rootRef}>
      <label className="text-xs font-semibold text-foreground" htmlFor={id}>{label}</label>
      <button
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="flex h-11 w-full items-center justify-between rounded-xl border border-border bg-surface px-3.5 text-left text-sm text-foreground transition hover:border-brand-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        id={id}
        ref={triggerRef}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setIsOpen(false);
        }}
        type="button"
      >
        <span className={dateValue ? "" : "text-muted"}>
          {formattedValue || (type === "datetime" ? "Choose date and time" : "Choose a date")}
        </span>
        <CalendarDays aria-hidden="true" className="h-4 w-4 text-brand" />
      </button>
      <input
        data-date-time-control={type === "datetime" ? id : undefined}
        name={name}
        type="hidden"
        value={value}
      />
      {required && (
        <input aria-hidden="true" className="sr-only" data-required-control={id}
          data-required-time={type === "datetime" ? "true" : undefined}
          data-required-value={name} tabIndex={-1}
          value={type === "datetime" && !selectedTime ? "" : value} readOnly />
      )}
      {isOpen && (
        <div
          aria-label={`${label} calendar`}
          className={`brand-popup-shadow fixed z-40 grid gap-4 overflow-y-auto rounded-2xl border border-border bg-surface p-4 ${
            type === "datetime" ? "w-[min(34rem,calc(100vw-2rem))]" : "w-[min(20rem,calc(100vw-3rem))]"
          } ${
            type === "datetime" ? "grid-cols-1 sm:grid-cols-[minmax(0,1fr)_12rem]" : ""
          }`}
          ref={popoverRef}
          role="dialog"
          style={popoverPosition ?? undefined}
        >
          <div>
            <DateTimePickerCalendarHeader
              currentMonthIndex={currentMonthIndex}
              month={month}
              onMonthChange={(nextYear, nextMonth) =>
                setVisibleMonth(new Date(nextYear, nextMonth, 1))
              }
              year={year}
            />
            <div className="grid grid-cols-7 gap-1 text-center">
              {DATE_PICKER_WEEKDAYS.map((weekday) => (
                <span className="py-2 text-xs font-semibold text-muted" key={weekday}>{weekday}</span>
              ))}
              {cells.map((day, index) => {
                const dayValue = day ? toDateValue(new Date(year, month, day)) : "";
                const isSelected = dayValue === dateValue;
                const isPast = dayValue < today;
                return day ? (
                  <button
                    aria-label={new Date(year, month, day).toLocaleDateString(undefined, {
                      year: "numeric", month: "long", day: "numeric",
                    })}
                    aria-pressed={isSelected}
                    className={`h-9 rounded-lg text-sm transition disabled:cursor-not-allowed disabled:text-muted/35 disabled:hover:bg-transparent ${
                      isSelected
                        ? "bg-brand font-bold text-on-brand"
                        : "text-foreground hover:bg-brand-soft hover:text-brand"
                    }`}
                    disabled={isPast}
                    key={dayValue}
                    onClick={() => {
                      if (isPast) return;
                      updateValue(type === "datetime" ? `${dayValue}${selectedTime ? `T${selectedTime}` : ""}` : dayValue);
                      if (type === "date") setIsOpen(false);
                    }}
                    type="button"
                  >
                    {day}
                  </button>
                ) : <span aria-hidden="true" key={`blank-${index}`} />;
              })}
            </div>
            <button
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold leading-none text-brand transition hover:bg-brand-soft [&_svg]:shrink-0"
              onClick={() => {
                updateValue("");
                setVisibleMonth(new Date());
                setIsOpen(false);
              }}
              type="button"
            >
              <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" /> Clear date
            </button>
          </div>
          {type === "datetime" && (
            <DateTimePickerTimePanel
              id={id}
              onChange={(time) => updateValue(dateValue ? `${dateValue}${time ? `T${time}` : ""}` : "")}
              value={selectedTime}
            />
          )}
        </div>
      )}
    </div>
  );
}
