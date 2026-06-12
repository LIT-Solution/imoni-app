import type { Metadata } from "next";
import InvestisseurHero from "@/components/investisseur/InvestisseurHero";
import ProfilStrategie from "@/components/investisseur/ProfilStrategie";
import OpportunitesSection from "@/components/investisseur/OpportunitesSection";
import InvestisseurCta from "@/components/investisseur/InvestisseurCta";
import ReassuranceBand from "@/components/investisseur/ReassuranceBand";

export const metadata: Metadata = {
  title: "Investisseur - Imoni",
  description: "Votre stratégie mérite les bonnes opportunités. La première app immobilière dédiée aux investisseurs, marchands de biens et promoteurs.",
};

export default function InvestisseurPage() {
  return (
    <>
      <InvestisseurHero />
      <ProfilStrategie />
      <OpportunitesSection />
      <div className="relative">
        <ReassuranceBand />
        <div className="h-[50vh]" />
        <InvestisseurCta />
      </div>
    </>
  );
}
