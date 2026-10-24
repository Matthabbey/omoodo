import { HeroSlider } from "../components/hero/HeroSlider";
import { HeroQuickInquiry } from "../components/hero/HeroQuickInquiry";
import { ValuesSection } from "../components/home/ValuesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSlider />
      <div className="relative z-30 mx-auto -mt-6 max-w-7xl px-4 pb-14 sm:-mt-8 sm:px-6 lg:px-8">
        <HeroQuickInquiry />
      </div>
      <ValuesSection />
    </main>
  );
}
