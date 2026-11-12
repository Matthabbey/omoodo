import { Quote } from "lucide-react";
import type { HomeReviewCardProps } from "../../types/home";

/** One customer review: quote tile, the review, then who said it. Fixed width so it can sit in the moving row. */
export function HomeReviewCard({ review }: HomeReviewCardProps) {
  return (
    <li className="w-[19rem] shrink-0 sm:w-[24rem]">
      <figure className="flex h-full flex-col rounded-3xl border border-border bg-background p-6 shadow-sm sm:p-7">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-on-accent">
          <Quote aria-hidden="true" className="h-5 w-5" />
        </span>
        <blockquote className="mt-5 pb-6 text-base leading-7 text-foreground">{review.quote}</blockquote>
        <figcaption className="mt-auto border-t border-border pt-5">
          <span className="block text-base font-bold text-foreground">{review.name}</span>
          <span className="mt-1 block text-sm text-muted">
            {review.location} <span aria-hidden="true">·</span> {review.service}
          </span>
        </figcaption>
      </figure>
    </li>
  );
}
