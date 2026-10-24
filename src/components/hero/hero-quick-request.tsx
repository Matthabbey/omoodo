"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SERVICE_PATHS } from "../../constants/services";
import type { HeroPillarId, QuickRequestLocation } from "../../types/hero";

interface HeroQuickRequestProps {
  readonly locations: readonly QuickRequestLocation[];
  readonly currentPillar: HeroPillarId;
  readonly onSelectPillar: (id: HeroPillarId) => void;
}

export function HeroQuickRequest({
  locations,
  currentPillar,
  onSelectPillar,
}: HeroQuickRequestProps) {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState<string>("lagos");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(SERVICE_PATHS[currentPillar]);
  };

  return (
    <form
      aria-label="Quick service request"
      className="mt-8 flex flex-col gap-3 rounded-3xl border border-border bg-surface p-3 shadow-md sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:p-2"
      onSubmit={handleSubmit}
    >
      {/* Service Pillar Selector */}
      <div className="flex flex-1 items-center gap-2 px-3 py-1.5 sm:border-r sm:border-border">
        <svg
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-brand"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="w-full">
          <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted" htmlFor="service-select">
            Service
          </label>
          <select
            className="w-full bg-transparent text-xs font-semibold text-foreground focus:outline-none"
            id="service-select"
            onChange={(e) => onSelectPillar(e.target.value as HeroPillarId)}
            value={currentPillar}
          >
            <option value="concierge">Concierge & Representation</option>
            <option value="move">Move & Transportation</option>
            <option value="stay">Stay & Accommodation</option>
            <option value="home">Home & Lifestyle Care</option>
            <option value="shop">Shop & Procurement</option>
          </select>
        </div>
      </div>

      {/* Location Selector */}
      <div className="flex flex-1 items-center gap-2 px-3 py-1.5">
        <svg
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-brand"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="w-full">
          <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted" htmlFor="location-select">
            Location
          </label>
          <select
            className="w-full bg-transparent text-xs font-semibold text-foreground focus:outline-none"
            id="location-select"
            onChange={(e) => setSelectedLocation(e.target.value)}
            value={selectedLocation}
          >
            {locations.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit / Action Button */}
      <button
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-accent px-6 py-3 text-xs font-bold text-on-brand transition-all duration-200 hover:bg-brand focus-visible:outline-2 focus-visible:outline-brand"
        type="submit"
      >
        <span>Get Started</span>
        <svg
          aria-hidden="true"
          className="ml-1.5 h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
