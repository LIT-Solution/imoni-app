"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const filters = [
  "Par département",
  "Par ville",
  "Par type de client",
  "Par étape du projet",
  "Par catégorie",
];

const profiles = [
  {
    id: "acheteurs",
    label: "Particuliers acheteurs",
    desc: "Profils qualifiés en recherche active d'un bien immobilier.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    color: "#E91E8C",
    bg: "rgba(233,30,140,0.08)",
  },
  {
    id: "vendeurs",
    label: "Particuliers vendeurs",
    desc: "En préparation ou en cours de mise en vente.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
  },
  {
    id: "investisseurs",
    label: "Investisseurs",
    desc: "À la recherche d'opportunités rentables et de rendement.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    id: "professionnels",
    label: "Professionnels",
    desc: "Agents, mandataires, chasseurs, agences immobilières.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
  },
];

// activeIds[filterIndex] = list of profile ids highlighted for that filter
const activeByFilter: Record<number, string[]> = {
  0: ["acheteurs", "vendeurs", "investisseurs", "professionnels"], // département → toutes
  1: ["acheteurs", "investisseurs"],                                // ville
  2: ["acheteurs", "vendeurs", "investisseurs", "professionnels"], // type → toutes
  3: ["vendeurs", "professionnels"],                               // étape
  4: ["investisseurs", "professionnels"],                          // catégorie
};

export default function CiblageSection_v3() {
  const [activeFilter, setActiveFilter] = useState(0);
  const sectionRef = useReveal(0.05);

  const activeIds = activeByFilter[activeFilter];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Décoration de fond */}
      <div
        className="absolute -bottom-48 -left-48 w-[560px] h-[560px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "rgba(233,30,140,0.04)" }}
      />
      <div
        className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none blur-3xl"
        style={{ background: "rgba(59,130,246,0.04)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Gauche : titre + filtres ── */}
          <div className="reveal-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wide uppercase"
              style={{ background: "rgba(233,30,140,0.08)", color: "#E91E8C", border: "1px solid rgba(233,30,140,0.2)" }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Ciblage précis
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0D0F1A] leading-tight mb-4">
              Atteignez exactement<br />
              <span style={{ color: "#E91E8C" }}>les bons profils</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              Sélectionnez un axe de ciblage pour voir quels profils vous pouvez activer en priorité.
            </p>

            {/* Chips filtres */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter, i) => {
                const isActive = activeFilter === i;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(i)}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border"
                    style={
                      isActive
                        ? {
                            background: "#E91E8C",
                            color: "#fff",
                            borderColor: "#E91E8C",
                            boxShadow: "0 4px 14px rgba(233,30,140,0.35)",
                          }
                        : {
                            background: "#fff",
                            color: "#374151",
                            borderColor: "#e5e7eb",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                          }
                    }
                  >
                    {filter}
                  </button>
                );
              })}
            </div>

            {/* Indicateur */}
            <p className="mt-6 text-xs text-gray-400">
              <span className="font-semibold" style={{ color: "#E91E8C" }}>
                {activeIds.length === 4 ? "Tous les profils" : `${activeIds.length} profil${activeIds.length > 1 ? "s" : ""}`}
              </span>{" "}
              ciblé{activeIds.length > 1 ? "s" : ""} avec ce filtre
            </p>
          </div>

          {/* ── Droite : cards profils ── */}
          <div className="reveal-right reveal-delay-1">
            <div className="grid grid-cols-2 gap-4">
              {profiles.map((p) => {
                const isHighlighted = activeIds.includes(p.id);
                return (
                  <div
                    key={p.id}
                    className="relative rounded-2xl p-5 border transition-all duration-300"
                    style={{
                      background: "#fff",
                      borderColor: isHighlighted ? "rgba(233,30,140,0.25)" : "#f0f0f0",
                      boxShadow: isHighlighted
                        ? "0 8px 28px rgba(233,30,140,0.14), 0 2px 8px rgba(0,0,0,0.04)"
                        : "0 2px 8px rgba(0,0,0,0.04)",
                      transform: isHighlighted ? "scale(1.03)" : "scale(1)",
                      opacity: isHighlighted ? 1 : 0.4,
                    }}
                  >
                    {/* Badge "Ciblé" animé */}
                    <div
                      className="absolute top-3 right-3 transition-all duration-300"
                      style={{
                        opacity: isHighlighted ? 1 : 0,
                        transform: isHighlighted ? "translateY(0) scale(1)" : "translateY(-4px) scale(0.85)",
                      }}
                    >
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ background: "rgba(233,30,140,0.1)", color: "#E91E8C" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "#E91E8C" }}
                        />
                        Ciblé
                      </span>
                    </div>

                    {/* Icône */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: p.bg }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke={p.color}
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                      </svg>
                    </div>

                    {/* Texte */}
                    <p className="font-bold text-sm text-[#0D0F1A] mb-1 pr-12">{p.label}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
