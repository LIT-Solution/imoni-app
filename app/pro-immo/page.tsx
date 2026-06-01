import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro de l'immo - Imoni",
  description: "Développez votre activité grâce à Imoni.",
};

export default function ProImmoPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#0D0F1A] mb-4">Pro de l&apos;immo</h1>
        <p className="text-gray-500">Page en construction.</p>
      </div>
    </section>
  );
}
