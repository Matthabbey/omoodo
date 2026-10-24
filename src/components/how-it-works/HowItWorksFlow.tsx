"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import {
  HOW_IT_WORKS_CARD_ART,
  HOW_IT_WORKS_CARD_STYLES,
  HOW_IT_WORKS_STEPS,
} from "../../constants/how-it-works";
import { CulturalWatermarks } from "../home/CulturalWatermarks";

export function HowItWorksFlow() {
  const [visibleSteps, setVisibleSteps] = useState<readonly number[]>([]);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.step);
          if (!Number.isInteger(index)) return;
          setVisibleSteps((current) =>
            current.includes(index) ? current : [...current, index],
          );
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.15 },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative mt-8 sm:mt-10">
      <div aria-hidden="true" className="absolute bottom-8 left-5 top-8 w-px bg-border md:left-1/2" />
      <ol className="space-y-6 sm:space-y-8">
        {HOW_IT_WORKS_STEPS.map((step, index) => {
          const isVisible = visibleSteps.includes(index);
          const cardArt = HOW_IT_WORKS_CARD_ART[index];
          const cardStyle = HOW_IT_WORKS_CARD_STYLES[index];
          const cardColumn = index % 2 === 0 ? "md:col-start-1" : "md:col-start-3";
          const hiddenOffset = index % 2 === 0 ? "md:-translate-x-8" : "md:translate-x-8";
          return (
            <li
              className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-8"
              data-step={index}
              key={step.number}
              ref={(item) => { itemRefs.current[index] = item; }}
            >
              <span
                aria-hidden="true"
                className={`relative z-10 col-start-1 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background text-xs font-black transition-all duration-700 md:col-start-2 md:h-12 md:w-12 md:justify-self-center ${
                  isVisible ? `scale-100 ${cardStyle.node}` : "scale-75 bg-surface text-brand"
                } motion-reduce:scale-100 motion-reduce:transition-none`}
              >
                {isVisible ? <Check className="h-4 w-4" /> : step.number}
              </span>

              <article
                className={`relative col-start-2 row-start-1 overflow-hidden rounded-3xl border p-5 shadow-sm transition-all duration-700 sm:p-7 md:translate-y-0 ${cardStyle.surface} ${cardColumn} ${
                  isVisible ? "translate-x-0 translate-y-0 opacity-100" : `translate-y-6 opacity-0 ${hiddenOffset}`
                } motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`}
              >
                <CulturalWatermarks designs={cardArt} visibility="prominent" />
                <div className="relative z-10">
                  <span className={`text-xs font-black tracking-[0.2em] ${cardStyle.label}`}>STEP {step.number}</span>
                  <h2 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">{step.title}</h2>
                  <p className="mt-3 leading-7 text-muted">{step.description}</p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
