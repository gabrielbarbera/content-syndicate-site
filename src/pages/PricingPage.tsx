import PricingSection from "../components/sections/PricingSection";
import BeSpokeSection from "../components/sections/BeSpokeSection";
import { PageHeader } from "../components/layout/PageHeader";
import FinalCTASection from "../components/sections/FinalCTASection";

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Pricing"
        subtitle="Target your press releases to the media and influencers that matter"
        overline="Pricing"
      />
      <PricingSection onContactClick={() => (window.location.href = "/contact")} />
      <BeSpokeSection />
      <FinalCTASection />
    </>
  );
}
