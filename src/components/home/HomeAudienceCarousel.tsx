"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { HOME_AUDIENCES } from "../../constants/home";
import { AUDIENCES_SECTION_ID, HOME_AUDIENCES_REGION_LABEL } from "../../constants/home-copy";
import { useScrollRail } from "../../hooks/useScrollRail";
import { Button } from "../ui";
import { HomeAudienceSlide } from "./HomeAudienceSlide";

export function HomeAudienceCarousel() {
  const { railRef, canScrollPrev, canScrollNext, updateBounds, scrollByCard } = useScrollRail();

  return (
    <div aria-label={HOME_AUDIENCES_REGION_LABEL} aria-roledescription="carousel" className="scroll-mt-24" id={AUDIENCES_SECTION_ID} role="region">
      <ul
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 pt-2 scroll-smooth motion-reduce:scroll-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        onScroll={updateBounds}
        ref={railRef}
      >
        {HOME_AUDIENCES.map((audience, index) => (
          <HomeAudienceSlide audience={audience} key={audience.id} tone={index % 2 === 0 ? "dark" : "light"} />
        ))}
      </ul>
      <div className="mt-4 flex justify-end gap-3">
        <Button
          aria-label="Show previous audiences"
          disabled={!canScrollPrev}
          onClick={() => scrollByCard(-1)}
          size="icon"
          type="button"
          variant="outline"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </Button>
        <Button
          aria-label="Show next audiences"
          disabled={!canScrollNext}
          onClick={() => scrollByCard(1)}
          size="icon"
          type="button"
          variant="outline"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
