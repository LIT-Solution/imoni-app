import type { Metadata } from "next";
import VendeurHero from "@/components/vendeur/VendeurHero";
import AvantagesSection from "@/components/vendeur/AvantagesSection";
import SecuriteSection from "@/components/vendeur/SecuriteSection";
import AlgorithmeSection from "@/components/vendeur/AlgorithmeSection";
import VendeurCta from "@/components/vendeur/VendeurCta";

export const metadata: Metadata = {
  title: "Vendeur - Imoni",
  description: "Votre bien mérite la bonne rencontre. Rencontrez des acquéreurs qualifiés et vendez dans les meilleures conditions avec Imoni.",
};

export default function VendeurPage() {
  return (
    <>
      <VendeurHero />
      <AvantagesSection />
      <SecuriteSection />
      <AlgorithmeSection />
      <VendeurCta />
    </>
  );
}
