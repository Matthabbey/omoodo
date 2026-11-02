import { HOW_IT_WORKS_FEED_TONES } from "../../constants/how-it-works";
import type { HowItWorksFeedItem } from "../../types/how-it-works";
import { HeroIcon } from "../hero/HeroIcon";

interface HowItWorksFeedCardProps {
  readonly item: HowItWorksFeedItem;
}

export function HowItWorksFeedCard({ item }: HowItWorksFeedCardProps) {
  const tone = HOW_IT_WORKS_FEED_TONES[item.tone];

  return (
    <li className={`animate-feed-card relative grid grid-cols-[1.5rem_minmax(0,1fr)] items-center gap-3 ${item.delayClass}`}>
      <span className={`col-start-1 h-3 w-3 justify-self-center rounded-full ring-4 ring-brand-soft ${tone.dot}`} />
      <div className="col-start-2 rounded-2xl border border-border bg-surface p-4 text-foreground shadow-lg shadow-deep/10">
        <div className="flex items-start gap-3">
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${tone.disc}`}>
            <HeroIcon className="h-5 w-5" name={item.iconName} />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-bold">{item.title}</p>
            <p className="mt-0.5 text-xs text-muted">{item.meta}</p>
          </div>
        </div>
        {item.badge && (
          <p className="mt-3 inline-flex items-center rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-deep">
            {item.badge}
          </p>
        )}
      </div>
    </li>
  );
}
