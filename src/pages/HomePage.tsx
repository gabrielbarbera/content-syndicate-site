import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import ComparisonSection from "../components/sections/ComparisonSection";
import StrategySection from "../components/sections/StrategySection";
import ProcessSection from "../components/sections/ProcessSection";
import PricingSection from "../components/sections/PricingSection";
import FinalCTASection from "../components/sections/FinalCTASection";
import FAQSection from "../components/sections/FAQSection";
import AboutSection from "../components/sections/AboutSection";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <StatsSection />
      <ComparisonSection />
      <StrategySection />
      <ProcessSection />
      <PricingSection onContactClick={() => (window.location.href = "/contact")} />
      <AboutSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
