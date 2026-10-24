import { HeroSlider } from "../components/hero/HeroSlider";
import { HeroQuickInquiry } from "../components/hero/HeroQuickInquiry";
import { ValuesSection } from "../components/home/ValuesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="flex min-h-[calc(100svh-8rem)] flex-col md:min-h-[calc(100svh-6rem)]">
        <HeroSlider />
        <div className="relative z-30 mx-auto -mt-6 w-full max-w-7xl px-4 p-6 sm:-mt-8 sm:px-6 lg:px-8">
          <HeroQuickInquiry />
        </div>
      </section>
      <ValuesSection />
    </main>
  );
}
