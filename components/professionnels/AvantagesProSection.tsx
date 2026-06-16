"use client";
import { useState, useEffect, useCallback } from "react";
import { useReveal } from "@/hooks/useReveal";

const slides = [
  {
    color: "#E91E8C",
    title: "Accédez à des acquéreurs qualifiés",
    without: ["Profils inconnus et non vérifiés", "Visites à l'aveugle", "Perte de temps sur chaque contact"],
    with: ["Profils détaillés avec critères et budget", "Acquéreurs qualifiés et motivés", "Contact ciblé dès le départ"],
  },
  {
    color: "#8B5CF6",
    title: "Moins de dépendance aux portails",
    without: ["Diffusion systématique sur les portails", "Coûts récurrents élevés", "Dépendance à un seul canal"],
    with: ["Vérification avant diffusion", "Base acquéreur nationale intégrée", "Votre propre canal de prospection"],
  },
  {
    color: "#10B981",
    title: "Moins d'interagences, plus de commission",
    without: ["Partage de commission obligatoire", "Dépendance aux confrères hors secteur", "Marge réduite sur chaque vente"],
    with: ["100% de votre commission", "Accès direct aux acquéreurs hors secteur", "Vente en direct sans intermédiaire"],
  },
  {
    color: "#3B82F6",
    title: "Enrichissez votre portefeuille vendeur",
    without: ["Prospection terrain chronophage", "Peu de mandats entrants", "Concurrence sur les mêmes vendeurs"],
    with: ["Vendeurs qui viennent à vous", "Demandes d'estimation qualifiées", "Nouveaux mandats sans prospection"],
  },
  {
    color: "#F59E0B",
    title: "Gagnez du temps et de l'argent",
    without: ["Budget pub élevé sans garantie", "Visites inutiles à répétition", "Process lent et inefficace"],
    with: ["Propositions ciblées et efficaces", "Moins de visites, plus de résultats", "ROI optimisé sur chaque action"],
  },
];

export default function AvantagesProSection() {
  const sectionRef = useReveal(0.05);
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="absolute -top-20 -right-20 w-100 h-100 rounded-full opacity-10 blur-xl pointer-events-none bg-[#E91E8C]" />
      <div className="absolute -bottom-20 -left-20 w-88 h-88 rounded-full opacity-8 blur-xl pointer-events-none bg-[#8B5CF6]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale text-center mb-8">
          <span className="inline-block text-[#E91E8C] text-xs font-bold tracking-[0.2em] uppercase mb-4">Vos avantages avec Imoni</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0F1A] leading-tight">
            Plus d&apos;acquéreurs, moins de contraintes,{" "}
            <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
              plus de résultats.
            </span>
          </h2>
        </div>

        {/* Coverflow 3D */}
        <div className="relative h-150 flex items-center justify-center" style={{ perspective: "1200px" }}>
          {slides.map((slide, i) => {
            const total = slides.length;
            const rawOffset = (i - current + total) % total;
            const signedOffset = rawOffset > total / 2 ? rawOffset - total : rawOffset;
            const isActive = signedOffset === 0;
            const abs = Math.abs(signedOffset);

            const translateX = signedOffset * 260;
            const rotateY = signedOffset * -38;
            const scale = isActive ? 1 : Math.max(0.72, 1 - abs * 0.14);
            const opacity = isActive ? 1 : Math.max(0.25, 1 - abs * 0.3);
            const zIndex = total - abs;

            return (
              <div
                key={i}
                className="absolute w-full max-w-md cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  transformStyle: "preserve-3d",
                  zIndex,
                  opacity,
                  transition: "all 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onClick={() => setCurrent(i)}
              >
                <div
                  className="rounded-3xl p-9 sm:p-10 flex flex-col"
                  style={{
                    background: "#fff",
                    border: isActive ? `1.5px solid ${slide.color}55` : "1.5px solid rgba(0,0,0,0.08)",
                    boxShadow: isActive
                      ? `0 24px 70px ${slide.color}25, 0 4px 20px rgba(0,0,0,0.06)`
                      : "0 4px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ opacity: isActive ? 1 : 0.5, transition: "opacity 0.4s" }}>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: slide.color }} />
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: slide.color }}>
                        Avantage {i + 1} / {total}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0D0F1A] mb-6">{slide.title}</h3>

                    {/* Before / After */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Sans Imoni */}
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 block">Sans Imoni</span>
                        <div className="space-y-3">
                          {slide.without.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-gray-400 text-xs leading-snug line-through decoration-red-300/40">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Avec Imoni */}
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider mb-3 block" style={{ color: slide.color }}>Avec Imoni</span>
                        <div className="space-y-3">
                          {slide.with.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <svg className="w-4 h-4 shrink-0 mt-0.5" style={{ color: slide.color }} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                              <span className="text-[#0D0F1A] text-xs leading-snug font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contrôles : flèches + dots */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E91E8C] hover:bg-[#d1177d] transition-colors hover:shadow-lg hover:shadow-pink-500/30"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? 32 : 10,
                  height: 10,
                  background: i === current ? s.color : "rgba(0,0,0,0.12)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((current + 1) % slides.length)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E91E8C] hover:bg-[#d1177d] transition-colors hover:shadow-lg hover:shadow-pink-500/30"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
