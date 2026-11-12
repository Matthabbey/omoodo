import { SIMPLE_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { HOME_REVIEWS_COPY } from "../../constants/home-reviews";
import { Badge } from "../ui";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { HomeReviewsMarquee } from "./HomeReviewsMarquee";
import { ScrollReveal } from "./ScrollReveal";

const REVIEWS_HEADING_ID = "home-reviews-heading";

/** Customer reviews. Until HOME_REVIEWS_PUBLISHED is true the page only renders this in development. */
export function HomeReviewsSection() {
  return (
    <section aria-labelledby={REVIEWS_HEADING_ID} className="relative isolate border-t border-border bg-surface py-20 sm:py-28">
      <CulturalWatermarks designs={SIMPLE_WATERMARK_ART} />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl" effect="rise">
          <Badge variant="soft">{HOME_REVIEWS_COPY.eyebrow}</Badge>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl" id={REVIEWS_HEADING_ID}>
            {HOME_REVIEWS_COPY.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">{HOME_REVIEWS_COPY.description}</p>
        </ScrollReveal>

        <ScrollReveal className="mt-12" delay={1} effect="rise">
          <HomeReviewsMarquee />
        </ScrollReveal>
      </div>
    </section>
  );
}
