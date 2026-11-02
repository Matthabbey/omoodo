import { HOW_IT_WORKS_HEADING_ID } from "../../constants/how-it-works";
import { HowItWorksHeroCopy } from "./HowItWorksHeroCopy";
import { HowItWorksVisual } from "./HowItWorksVisual";

export function HowItWorksHero() {
  return (
    <section
      aria-labelledby={HOW_IT_WORKS_HEADING_ID}
      className="relative isolate flex flex-col text-foreground lg:min-h-[calc(100svh-5rem)]"
    >
      <div className="flex flex-1 flex-col justify-center pb-10 pt-8 lg:py-16">
        <div className="animate-hero-content grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <HowItWorksHeroCopy />
          <HowItWorksVisual className="lg:w-full lg:max-w-xl lg:justify-self-end" />
        </div>
      </div>
    </section>
  );
}
