"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DATE_PICKER_MONTHS } from "./date-time-picker-utils";

interface DateTimePickerCalendarHeaderProps {
  readonly month: number;
  readonly year: number;
  readonly currentMonthIndex: number;
  readonly onMonthChange: (year: number, month: number) => void;
}

type CalendarView = "calendar" | "months" | "years";

export function DateTimePickerCalendarHeader({
  month,
  year,
  currentMonthIndex,
  onMonthChange,
}: DateTimePickerCalendarHeaderProps) {
  const [view, setView] = useState<CalendarView>("calendar");
  const currentYear = new Date().getFullYear();
  const [yearPageStart, setYearPageStart] = useState(currentYear);
  const visibleMonthIndex = year * 12 + month;
  const years = Array.from({ length: 12 }, (_, index) => yearPageStart + index);

  function chooseYear(nextYear: number) {
    const currentMonth = new Date().getMonth();
    const nextMonth = nextYear === currentYear && month < currentMonth ? currentMonth : month;
    onMonthChange(nextYear, nextMonth);
    setView("calendar");
  }

  return (
    <div className="relative mb-4 flex items-center justify-between">
      <button
        aria-label="Previous month"
        className="flex h-9 w-9 items-center justify-center rounded-full text-brand transition hover:bg-brand-soft disabled:cursor-not-allowed disabled:opacity-40"
        disabled={visibleMonthIndex <= currentMonthIndex}
        onClick={() => onMonthChange(year, month - 1)}
        type="button"
      >
        <ChevronLeft aria-hidden="true" className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-1">
        <button
          aria-expanded={view === "months"}
          aria-label="Choose month"
          className="rounded-lg px-2 py-2 text-sm font-bold text-foreground transition hover:bg-brand-soft"
          onClick={() => setView((current) => current === "months" ? "calendar" : "months")}
          type="button"
        >
          {DATE_PICKER_MONTHS[month]}
        </button>
        <button
          aria-expanded={view === "years"}
          aria-label="Choose year"
          className="rounded-lg px-2 py-2 text-sm font-bold text-foreground transition hover:bg-brand-soft"
          onClick={() => {
            setYearPageStart(currentYear + Math.floor((year - currentYear) / 12) * 12);
            setView((current) => current === "years" ? "calendar" : "years");
          }}
          type="button"
        >
          {year}
        </button>
      </div>
      <button
        aria-label="Next month"
        className="flex h-9 w-9 items-center justify-center rounded-full text-brand transition hover:bg-brand-soft"
        onClick={() => onMonthChange(year, month + 1)}
        type="button"
      >
        <ChevronRight aria-hidden="true" className="h-4 w-4" />
      </button>
      {view !== "calendar" && (
        <div
          aria-label={view === "months" ? "Choose a month" : "Choose a year"}
          className="brand-popup-shadow absolute left-1/2 top-full z-10 w-[min(20rem,calc(100vw-3rem))] -translate-x-1/2 rounded-xl border border-border bg-surface p-3"
          role="group"
        >
          {view === "months" ? (
            <div className="grid grid-cols-3 gap-2">
              {DATE_PICKER_MONTHS.map((monthName, monthNumber) => {
                const monthIndex = year * 12 + monthNumber;
                const isDisabled = monthIndex < currentMonthIndex;
                return (
                  <button
                    aria-pressed={monthNumber === month}
                    className={`rounded-lg px-2 py-2 text-sm transition disabled:cursor-not-allowed disabled:text-muted/40 ${
                      monthNumber === month
                        ? "bg-brand font-semibold text-on-brand"
                        : "text-foreground hover:bg-brand-soft hover:text-brand"
                    }`}
                    disabled={isDisabled}
                    key={monthName}
                    onClick={() => {
                      onMonthChange(year, monthNumber);
                      setView("calendar");
                    }}
                    type="button"
                  >
                    {monthName.slice(0, 3)}
                  </button>
                );
              })}
            </div>
          ) : (
            <>
              <div className="mb-2 flex items-center justify-between">
                <button
                  aria-label="Previous years"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-brand transition hover:bg-brand-soft disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={yearPageStart <= currentYear}
                  onClick={() => setYearPageStart((start) => Math.max(currentYear, start - 12))}
                  type="button"
                >
                  <ChevronLeft aria-hidden="true" className="h-4 w-4" />
                </button>
                <span className="text-xs font-semibold text-muted">
                  {years[0]}–{years[years.length - 1]}
                </span>
                <button
                  aria-label="Next years"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-brand transition hover:bg-brand-soft"
                  onClick={() => setYearPageStart((start) => start + 12)}
                  type="button"
                >
                  <ChevronRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {years.map((yearOption) => (
                  <button
                    aria-pressed={yearOption === year}
                    className={`rounded-lg px-2 py-2 text-sm transition disabled:cursor-not-allowed disabled:text-muted/40 ${
                      yearOption === year
                        ? "bg-brand font-semibold text-on-brand"
                        : "text-foreground hover:bg-brand-soft hover:text-brand"
                    }`}
                    disabled={yearOption < currentYear}
                    key={yearOption}
                    onClick={() => chooseYear(yearOption)}
                    type="button"
                  >
                    {yearOption}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
