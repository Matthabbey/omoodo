import { HomeHero } from "../components/hero/HomeHero";
import { HeroQuickInquiry } from "../components/hero/HeroQuickInquiry";
import { ValuesSection } from "../components/home/ValuesSection";
import { HomeFinalCta } from "../components/home/HomeFinalCta";
import { HomeIntroduction } from "../components/home/HomeIntroduction";
import { HomeKnowledgeSections } from "../components/home/HomeKnowledgeSections";
import { HomeServicesStory } from "../components/home/HomeServicesStory";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HomeHero />
      <section aria-label="Quick service finder" className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <HeroQuickInquiry />
        </div>
      </section>
      <HomeIntroduction />
      <HomeServicesStory />
      <ValuesSection />
      <HomeKnowledgeSections />
      <HomeFinalCta />
    </main>
  );
}
