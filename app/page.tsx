import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import TradingSection from "@/components/home/TradingSection";
import InvestmentOptions from "@/components/home/InvestmentOptions";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <TradingSection />
      <InvestmentOptions />
      <Testimonials />
      <CTASection />
    </main>
  );
}
