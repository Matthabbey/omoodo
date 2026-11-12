"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";
import {
  HOME_REVIEWS,
  HOME_REVIEWS_PAUSE_LABEL,
  HOME_REVIEWS_PLAY_LABEL,
  HOME_REVIEWS_REGION_LABEL,
  HOME_REVIEWS_SCROLL_SECONDS,
  HOME_REVIEWS_TRACK_COPIES,
} from "../../constants/home-reviews";
import { Button } from "../ui";
import { HomeReviewCard } from "./HomeReviewCard";

const TRACK_COPIES = Array.from({ length: HOME_REVIEWS_TRACK_COPIES }, (_, index) => index);

/**
 * Reviews in one endlessly moving row. The list is repeated so the loop has no seam; only the
 * first copy is exposed to assistive technology. Pauses on hover, on focus and with the button.
 * Under reduced motion nothing moves and the single list scrolls sideways by hand.
 */
export function HomeReviewsMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div aria-label={HOME_REVIEWS_REGION_LABEL} role="region">
      <div className="overflow-hidden py-2 motion-reduce:overflow-x-auto">
        <div
          className="animate-reviews-marquee flex w-max"
          data-paused={paused}
          style={{ animationDuration: `${HOME_REVIEWS_SCROLL_SECONDS}s` }}
        >
          {TRACK_COPIES.map((copy) => (
            <ul aria-hidden={copy > 0 || undefined} className={copy > 0 ? "flex shrink-0 gap-5 pr-5 motion-reduce:hidden" : "flex shrink-0 gap-5 pr-5"} key={copy}>
              {HOME_REVIEWS.map((review) => (
                <HomeReviewCard key={review.id} review={review} />
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-end motion-reduce:hidden">
        <Button
          aria-label={paused ? HOME_REVIEWS_PLAY_LABEL : HOME_REVIEWS_PAUSE_LABEL}
          onClick={() => setPaused((current) => !current)}
          size="icon"
          type="button"
          variant="outline"
        >
          {paused ? <Play aria-hidden="true" className="h-5 w-5" /> : <Pause aria-hidden="true" className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  );
}
