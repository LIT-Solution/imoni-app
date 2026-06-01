import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendeur - Imoni",
  description: "Vendez votre bien rapidement et au meilleur prix avec Imoni.",
};

export default function VendeurPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#0D0F1A] mb-4">Vendeur</h1>
        <p className="text-gray-500">Page en construction.</p>
      </div>
    </section>
  );
}
