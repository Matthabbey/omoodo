import {
  HOW_IT_WORKS_FEED_ART,
  HOW_IT_WORKS_FEED_CHIP,
  HOW_IT_WORKS_FEED_ITEMS,
  HOW_IT_WORKS_FEED_SR_TEXT,
} from "../../constants/how-it-works";
import { CulturalWatermarks } from "../home/CulturalWatermarks";
import { HowItWorksFeedCard } from "./HowItWorksFeedCard";

interface HowItWorksVisualProps {
  readonly className?: string;
}

const FEED_LINE_CLASS = "absolute bottom-5 left-[calc(0.75rem-1px)] top-5 w-0.5 rounded-full";

export function HowItWorksVisual({ className = "" }: HowItWorksVisualProps) {
  return (
    <div className={`relative ${className}`}>
      <span
        aria-hidden="true"
        className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-accent-soft sm:h-56 sm:w-56"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-8 -left-8 -z-10 h-32 w-32 rounded-full bg-brand-soft sm:h-44 sm:w-44"
      />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-brand-soft/70 p-5 shadow-xl shadow-deep/10 sm:p-7">
        <CulturalWatermarks designs={HOW_IT_WORKS_FEED_ART} visibility="prominent" />
        <p className="sr-only">{HOW_IT_WORKS_FEED_SR_TEXT}</p>

        <div aria-hidden="true" className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-bold text-brand shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent motion-reduce:animate-none" />
              <span className="relative h-2 w-2 rounded-full bg-accent-deep" />
            </span>
            {HOW_IT_WORKS_FEED_CHIP}
          </div>

          <ol className="relative mt-6 space-y-3">
            <span className={`${FEED_LINE_CLASS} bg-border`} />
            <span className={`animate-feed-line ${FEED_LINE_CLASS} bg-accent`} />
            {HOW_IT_WORKS_FEED_ITEMS.map((item) => (
              <HowItWorksFeedCard item={item} key={item.title} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
