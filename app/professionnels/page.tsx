import type { Metadata } from "next";
import ProHero from "@/components/professionnels/ProHero";
import AvantagesProSection from "@/components/professionnels/AvantagesProSection";
import UtilisezImoniSection from "@/components/professionnels/UtilisezImoniSection";
import InvestisseursProSection from "@/components/professionnels/InvestisseursProSection";
import ProCta from "@/components/professionnels/ProCta";

export const metadata: Metadata = {
  title: "Professionnels - Imoni",
  description: "Imoni, votre passerelle acquéreurs. Accédez à la 1ère base acquéreur nationale et développez votre activité immobilière.",
};

export default function ProfessionnelsPage() {
  return (
    <>
      <ProHero />
      <AvantagesProSection />
      <UtilisezImoniSection />
      <InvestisseursProSection />
      <ProCta />
    </>
  );
}
