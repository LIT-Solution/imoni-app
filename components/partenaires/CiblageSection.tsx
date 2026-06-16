"use client";
import { useReveal } from "@/hooks/useReveal";

const targeting = [
  "Par département",
  "Par ville ou secteur",
  "Par type de client (acheteur, vendeur, investisseur...)",
  "Par étape du projet immobilier",
  "Par catégorie de service",
];

const profiles = [
  {
    label: "Particuliers acheteurs",
    desc: "Profils qualifiés en recherche active d'un bien.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    color: "#E91E8C",
  },
  {
    label: "Particuliers vendeurs",
    desc: "En préparation ou en cours de vente.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z",
    color: "#3B82F6",
  },
  {
    label: "Investisseurs",
    desc: "À la recherche d'opportunités rentables.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "#10B981",
  },
  {
    label: "Professionnels de l'immobilier",
    desc: "Agents, mandataires, chasseurs, agences...",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "#8B5CF6",
  },
];

export default function CiblageSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl pointer-events-none bg-[#E91E8C]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Gauche */}
          <div className="reveal-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(233,30,140,0.1)", border: "1.5px solid rgba(233,30,140,0.25)" }}>
                <svg className="w-6 h-6 text-[#E91E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0D0F1A] leading-snug">
                Ciblez vos clients<br />avec <span className="text-[#E91E8C]">précision</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm mb-5">Configurez votre visibilité selon vos besoins :</p>
            <ul className="space-y-3">
              {targeting.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(233,30,140,0.1)", border: "1px solid rgba(233,30,140,0.25)" }}>
                    <svg className="w-2.5 h-2.5 text-[#E91E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-gray-600 text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Droite */}
          <div className="reveal-right reveal-delay-1">
            <p className="text-sm font-semibold text-[#0D0F1A] mb-5">Touchez les bonnes personnes, au bon endroit, au bon moment.</p>
            <div className="grid grid-cols-2 gap-4">
              {profiles.map((p) => (
                <div key={p.label} className="rounded-2xl p-4 border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                  {/* Photo placeholder */}
                  <div className="rounded-xl h-28 mb-3 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${p.color}15, ${p.color}06)` }}>
                    <svg className="w-12 h-12 opacity-20" fill={p.color} viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: `${p.color}18` }}>
                      <svg className="w-2.5 h-2.5" fill="none" stroke={p.color} viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={p.icon} /></svg>
                    </div>
                    <p className="font-bold text-xs text-[#0D0F1A]">{p.label}</p>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
