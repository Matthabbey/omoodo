import { SIMPLE_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { HOME_SERVICE_CARDS, HOME_SERVICE_TOP_ROW_COUNT, HOME_SERVICES_SECTION_LABEL } from "../../constants/home-services";
import { getServicePage } from "../../constants/services";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { HomeServiceCard } from "./HomeServiceCard";
import { ScrollReveal } from "./ScrollReveal";

export function HomeServicesStory() {
  return (
    <section aria-label={HOME_SERVICES_SECTION_LABEL} className="relative isolate scroll-mt-20 bg-background py-10 sm:py-14" id="services">
      <CulturalWatermarks designs={SIMPLE_WATERMARK_ART} />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal effect="rise">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {HOME_SERVICE_CARDS.map((card, index) => {
              const service = getServicePage(card.slug);
              if (!service) throw new Error(`Service content is not configured for "${card.slug}".`);
              const spanClass = index < HOME_SERVICE_TOP_ROW_COUNT ? "lg:col-span-4" : "lg:col-span-3";
              return <HomeServiceCard card={card} className={spanClass} key={card.slug} service={service} />;
            })}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
