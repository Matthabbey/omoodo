import { HeroBackdrop } from "./HeroBackdrop";
import { HERO_HEADING_ID, HeroCopy } from "./HeroCopy";
import { HeroPillarRow } from "./HeroPillarRow";
import { HeroProofCard } from "./HeroProofCard";

export function HomeHero() {
  return (
    <section
      aria-labelledby={HERO_HEADING_ID}
      className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-background text-foreground"
    >
      <HeroBackdrop />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="animate-hero-content grid flex-1 content-center gap-8 lg:grid-cols-[minmax(0,32rem)_minmax(0,1fr)] lg:content-end lg:items-end lg:gap-12">
          <div className="lg:rounded-[2rem] lg:border lg:border-border lg:bg-surface/85 lg:p-10 lg:shadow-xl lg:shadow-deep/10 lg:backdrop-blur-md">
            <HeroCopy />
          </div>
          <HeroProofCard className="hidden lg:block lg:justify-self-end" />
        </div>
        <HeroPillarRow />
      </div>
    </section>
  );
}
