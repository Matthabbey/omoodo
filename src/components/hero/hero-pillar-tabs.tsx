"use client";

import type { HeroPillarId, PillarTabItem } from "../../types/hero";

interface HeroPillarTabsProps {
  readonly tabs: readonly PillarTabItem[];
  readonly activeId: HeroPillarId;
  readonly onSelect: (id: HeroPillarId) => void;
}

export function HeroPillarTabs({
  tabs,
  activeId,
  onSelect,
}: HeroPillarTabsProps) {
  return (
    <div
      aria-label="Omoodo service pillars"
      className="flex flex-wrap items-center gap-2"
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            aria-selected={isActive}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              isActive
                ? "bg-brand text-on-brand shadow-sm scale-102"
                : "border border-border bg-surface text-muted hover:border-brand-accent hover:bg-brand-soft hover:text-brand-deep"
            }`}
            id={`tab-${tab.id}`}
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            role="tab"
            type="button"
          >
            <span>{tab.label}</span>
            <span
              className={`hidden text-[10px] uppercase font-medium sm:inline ${
                isActive ? "text-brand-soft" : "text-muted opacity-75"
              }`}
            >
              · {tab.shortDescription}
            </span>
          </button>
        );
      })}
    </div>
  );
}
