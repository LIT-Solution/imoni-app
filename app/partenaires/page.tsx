import type { Metadata } from "next";
import PartenairesHero from "@/components/partenaires/PartenairesHero";
import CarrouselPartenaires from "@/components/partenaires/CarrouselPartenaires";
import NotificationsSection from "@/components/partenaires/NotificationsSection";
import CiblageSection from "@/components/partenaires/CiblageSection_v2";
import ProfsBoostSection from "@/components/partenaires/ProfsBoostSection";
import PartenaireCta from "@/components/partenaires/PartenaireCta";

export const metadata: Metadata = {
  title: "Partenaires - Imoni",
  description: "Devenez partenaire Imoni. Soyez visible au bon moment du projet immobilier auprès d'acheteurs, vendeurs et professionnels.",
};

export default function PartenairesPage() {
  return (
    <>
      <PartenairesHero />
      <CarrouselPartenaires />
      <NotificationsSection />
      <CiblageSection />
      <ProfsBoostSection />
      <PartenaireCta />
    </>
  );
}
