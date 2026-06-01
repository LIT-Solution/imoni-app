import type { Metadata } from "next";
import AcheteurHero from "@/components/acheteur/AcheteurHero";
import ProfileSection from "@/components/acheteur/ProfileSection";
import InnovationsSection from "@/components/acheteur/InnovationsSection";
import CtaBanner from "@/components/acheteur/CtaBanner";

export const metadata: Metadata = {
  title: "Acheteur - Imoni",
  description:
    "Ne cherchez plus, soyez trouvé. Créez votre profil acheteur et laissez les opportunités venir à vous.",
};

export default function AcheteurPage() {
  return (
    <>
      <AcheteurHero />
      <ProfileSection />
      <InnovationsSection />
      <CtaBanner />
    </>
  );
}
