import { HomeHero } from "../components/hero/HomeHero";
import { ValuesSection } from "../components/home/ValuesSection";
import { HomeFaqSection } from "../components/home/HomeFaqSection";
import { HomeFinalCta } from "../components/home/HomeFinalCta";
import { HomeIntroduction } from "../components/home/HomeIntroduction";
import { HomeReviewsSection } from "../components/home/HomeReviewsSection";
import { HomeScenariosSection } from "../components/home/HomeScenariosSection";
import { HomeKnowledgeSections } from "../components/home/HomeKnowledgeSections";
import { HomeServicesStory } from "../components/home/HomeServicesStory";
import { HOME_REVIEWS_PUBLISHED } from "../constants/home-reviews";

export default function Home() {
  // Draft reviews are previewed in development only; the live site shows labelled examples until reviews are real.
  const showReviews = HOME_REVIEWS_PUBLISHED || process.env.NODE_ENV === "development";
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HomeHero />
      <HomeServicesStory />
      <HomeIntroduction />
      <ValuesSection />
      <HomeKnowledgeSections />
      {showReviews ? <HomeReviewsSection /> : <HomeScenariosSection />}
      <HomeFaqSection />
      <HomeFinalCta />
    </main>
  );
}
