import type { Metadata } from "next";
import InvestisseurHero from "@/components/investisseur/InvestisseurHero";
import ProfilStrategie from "@/components/investisseur/ProfilStrategie";
import OpportunitesSection from "@/components/investisseur/OpportunitesSection";
import ConfianceSection from "@/components/investisseur/ConfianceSection";
import InvestisseurCta from "@/components/investisseur/InvestisseurCta";

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
      <ConfianceSection />
      <InvestisseurCta />
    </>
  );
}
