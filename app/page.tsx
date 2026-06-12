import HeroSection from "@/components/homepage/HeroSection";
import EcosystemSection from "@/components/homepage/EcosystemSection";
import TrustSection from "@/components/homepage/TrustSection";
import WhyImoniSection from "@/components/homepage/WhyImoniSection";
import FooterCTA from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <TrustSection />
      <WhyImoniSection />
      <FooterCTA />
    </>
  );
}
