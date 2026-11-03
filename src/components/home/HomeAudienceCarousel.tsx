"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HOME_AUDIENCES } from "../../constants/home";
import { AUDIENCES_SECTION_ID, HOME_AUDIENCES_REGION_LABEL } from "../../constants/home-copy";
import { Button } from "../ui";
import { HomeAudienceSlide } from "./HomeAudienceSlide";

export function HomeAudienceCarousel() {
  const railRef = useRef<HTMLUListElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateBounds = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanScrollPrev(rail.scrollLeft > 1);
    setCanScrollNext(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateBounds();
    const rail = railRef.current;
    if (!rail) return;
    const observer = new ResizeObserver(updateBounds);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [updateBounds]);

  function scrollByCard(direction: -1 | 1) {
    const rail = railRef.current;
    const firstCard = rail?.firstElementChild;
    if (!rail || !(firstCard instanceof HTMLElement)) return;
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    rail.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: "smooth" });
  }

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
