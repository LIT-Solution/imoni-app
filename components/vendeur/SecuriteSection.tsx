"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const features = [
  {
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    title: "Offre d'achat électronique certifiée",
    desc: "Formalisez rapidement l'intention d'achat avec un document certifié, valable et exploitable par le notaire.",
    color: "#8B5CF6",
  },
  {
    icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    title: "Dossier notaire préparé par Imoni",
    desc: "Imoni prépare le dossier notaire et le transmet en amont pour accélérer la prise de rendez-vous.",
    color: "#E91E8C",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Des acquéreurs engagés",
    desc: "Les profils sont vérifiés et qualifiés pour vous faire gagner du temps et éviter les visites inutiles.",
    color: "#10B981",
  },
];

export default function SecuriteSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
    >
      {/* Décors */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />

      <div className="flex min-h-[480px] lg:min-h-[560px]">

        {/* Gauche — texte (50%) */}
        <div className="relative z-10 w-full lg:w-1/2 py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24 flex flex-col justify-center space-y-8">
          <div className="reveal-left">
            <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-widest uppercase mb-4">
              Sécurisez votre vente, gagnez du temps
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D0F1A] leading-tight">
              Vendez vite,{" "}
              <span className="bg-linear-to-r from-[#8B5CF6] to-[#E91E8C] bg-clip-text text-transparent">
                vendez bien
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={f.title} className={`reveal-left reveal-delay-${i + 1} flex items-start gap-4`}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${f.color}15`, border: `1.5px solid ${f.color}30` }}
                >
                  <svg className="w-5 h-5" fill="none" stroke={f.color} viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0D0F1A] text-base leading-tight mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Droite — photo pleine hauteur (50%) */}
        <div className="hidden lg:block relative w-1/2">
          <Image
            src="/vendeur/couple-heuruex.webp"
            alt="Couple heureux vendeur Imoni"
            fill
            quality={100}
            unoptimized
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
            sizes="50vw"
          />
          {/* Dégradé de raccord à gauche */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, white 0%, transparent 30%)" }} />
        </div>

      </div>
    </section>
  );
}
