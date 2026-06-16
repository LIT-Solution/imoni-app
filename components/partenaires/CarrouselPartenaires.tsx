"use client";
import { useState } from "react";

const categories = [
  {
    label: "Courtiers",
    desc: "Proposez vos offres de financement aux meilleurs moments",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    photo: "/partenaire/courtier.webp",
  },
  {
    label: "Déménageurs",
    desc: "Intervenez juste après un achat ou une vente immobilière",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
    photo: "/partenaire/demenagement.webp",
  },
  {
    label: "Artisans",
    desc: "Rénovation, travaux, amélioration, entretien... Soyez recommandés",
    icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
    photo: "/partenaire/artisant.webp",
  },
  {
    label: "Diagnostiqueurs",
    desc: "Soyez visibles dès la préparation d'une vente",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    photo: "/partenaire/diagno.webp",
  },
  {
    label: "Home staging",
    desc: "Valorisez les biens avant la mise en vente",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    photo: "/partenaire/home.webp",
  },
];

const VISIBLE = 4;

export default function CarrouselPartenaires() {
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(categories.length - VISIBLE, s + 1));

  return (
    <section className="py-20 overflow-hidden" style={{ background: "#FFF5F8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0D0F1A] leading-snug">
              Votre service dans le carrousel <span className="text-[#E91E8C]">partenaires</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">Mettez en avant votre activité, vos avantages et votre zone d'intervention.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} disabled={start === 0} className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white hover:bg-[#E91E8C] hover:border-[#E91E8C] group transition-all disabled:opacity-30">
              <svg className="w-4 h-4 text-gray-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} disabled={start >= categories.length - VISIBLE} className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 bg-white hover:bg-[#E91E8C] hover:border-[#E91E8C] group transition-all disabled:opacity-30">
              <svg className="w-4 h-4 text-gray-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4"
            style={{
              transform: `translateX(calc(-${start} * (100% / ${VISIBLE} + 4px)))`,
              transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {categories.map((cat, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden flex flex-col flex-shrink-0 hover:-translate-y-1 transition-transform duration-300"
                style={{ width: `calc(100% / ${VISIBLE} - 12px)`, boxShadow: "0 4px 24px rgba(233,30,140,0.07)", border: "1px solid rgba(233,30,140,0.08)" }}
              >
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <img src={cat.photo} alt={cat.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#E91E8C]/0 group-hover:bg-[#E91E8C]/10 transition-all duration-300" />
                </div>
                <div className="flex flex-col items-center text-center px-4 pt-5 pb-6 gap-3 flex-1">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: "rgba(233,30,140,0.1)" }}>
                    <svg className="w-5 h-5 text-[#E91E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={cat.icon} />
                    </svg>
                  </div>
                  <p className="font-extrabold text-[#0D0F1A] text-base">{cat.label}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: categories.length - VISIBLE + 1 }).map((_, i) => (
            <button key={i} onClick={() => setStart(i)} className="h-2 rounded-full transition-all duration-300" style={{ width: i === start ? 28 : 8, background: i === start ? "#E91E8C" : "rgba(233,30,140,0.2)" }} />
          ))}
        </div>

      </div>
    </section>
  );
}
