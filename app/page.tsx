import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import TrustSection from "@/components/TrustSection";
import WhyImoniSection from "@/components/WhyImoniSection";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <EcosystemSection />
      <TrustSection />
      <WhyImoniSection />
      <FooterCTA />
    </main>
  );
}
