"use client";
import { useReveal } from "@/hooks/useReveal";

const profilItems = [
  {
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    color: "#8B5CF6",
    accent: "rgba(139,92,246,0.1)",
    title: "Qui êtes-vous ?",
    desc: "Décrivez votre expérience et votre profil pour que les professionnels comprennent qui vous êtes.",
    items: ["Investisseur", "Investisseur expérimenté", "Marchand de biens", "Promoteur", "Investisseur patrimonial"],
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "#E91E8C",
    accent: "rgba(233,30,140,0.1)",
    title: "Quel est votre objectif principal ?",
    desc: "Indiquez ce que vous cherchez en priorité.",
    items: ["Revenus locatifs", "Plus-value à court terme", "Constitution de patrimoine", "Défiscalisation", "Promotion immobilière"],
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    color: "#F59E0B",
    accent: "rgba(245,158,11,0.1)",
    title: "Quelle est votre stratégie ?",
    desc: "Précisez votre approche d'investissement.",
    items: ["Avec travaux", "Sans travaux", "Immeuble", "Terrain"],
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "#10B981",
    accent: "rgba(16,185,129,0.1)",
    title: "Quelles sont vos modalités financières ?",
    desc: "Comment financez-vous vos opérations ?",
    items: ["Financement bancaire", "Fonds propres", "Crowdfunding", "Partenariat investisseur"],
  },
  {
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
    color: "#8B5CF6",
    accent: "rgba(139,92,246,0.1)",
    title: "Vos critères de recherche",
    desc: "Définissez vos essentiels.",
    items: ["Budget d'acquisition", "Rentabilité recherchée", "Localisation & secteurs", "Type de biens recherchés"],
  },
];

export default function ProfilStrategie() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale text-center mb-14">
          <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-[0.2em] uppercase mb-4">Votre profil complet</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0F1A] leading-tight">
            Décrivez <span className="bg-gradient-to-r from-[#8B5CF6] to-[#E91E8C] bg-clip-text text-transparent">qui vous êtes</span> et votre stratégie
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto">
            Un profil investisseur complet pour des opportunités parfaitement alignées avec vos objectifs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {profilItems.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-5 flex flex-col gap-4`}
              style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: item.accent }}>
                <svg className="w-5 h-5" fill="none" stroke={item.color} viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-[#0D0F1A] font-bold text-sm leading-tight mb-1">{item.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
              <ul className="space-y-1.5 mt-auto">
                {item.items.map(it => (
                  <li key={it} className="flex items-center gap-2 text-gray-500 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: item.color }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
