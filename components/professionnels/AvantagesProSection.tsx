"use client";
import { useState, useEffect, useCallback } from "react";
import { useReveal } from "@/hooks/useReveal";

const COLORS = ["#8B5CF6", "#7C22E8"];

const slides = [
  {
    color: COLORS[0],
    title: "Accédez à des acquéreurs qualifiés",
    without: ["Profils inconnus et non vérifiés", "Visites à l'aveugle", "Perte de temps sur chaque contact"],
    with: ["Profils détaillés avec critères et budget", "Acquéreurs qualifiés et motivés", "Contact ciblé dès le départ"],
  },
  {
    color: COLORS[1],
    title: "Moins de dépendance aux portails",
    without: ["Diffusion systématique sur les portails", "Coûts récurrents élevés", "Dépendance à un seul canal"],
    with: ["Vérification avant diffusion", "Base acquéreur nationale intégrée", "Votre propre canal de prospection"],
  },
  {
    color: COLORS[0],
    title: "Moins d'interagences, plus de commission",
    without: ["Partage de commission obligatoire", "Dépendance aux confrères hors secteur", "Marge réduite sur chaque vente"],
    with: ["100% de votre commission", "Accès direct aux acquéreurs hors secteur", "Vente en direct sans intermédiaire"],
  },
  {
    color: COLORS[1],
    title: "Enrichissez votre portefeuille vendeur",
    without: ["Prospection terrain chronophage", "Peu de mandats entrants", "Concurrence sur les mêmes vendeurs"],
    with: ["Vendeurs qui viennent à vous", "Demandes d'estimation qualifiées", "Nouveaux mandats sans prospection"],
  },
  {
    color: COLORS[0],
    title: "Gagnez du temps et de l'argent",
    without: ["Budget pub élevé sans garantie", "Visites inutiles à répétition", "Process lent et inefficace"],
    with: ["Propositions ciblées et efficaces", "Moins de visites, plus de résultats", "ROI optimisé sur chaque action"],
  },
];

export default function AvantagesProSection() {
  const sectionRef = useReveal(0.05);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="absolute -top-20 -right-20 w-60 sm:w-100 h-60 sm:h-100 rounded-full opacity-10 blur-xl pointer-events-none bg-[#E91E8C]" />
      <div className="absolute -bottom-20 -left-20 w-52 sm:w-88 h-52 sm:h-88 rounded-full opacity-8 blur-xl pointer-events-none bg-[#8B5CF6]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale text-center mb-8 sm:mb-12">
          <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4">Vos avantages avec Imoni</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#0D0F1A] leading-tight">
            Plus d&apos;acquéreurs, moins de contraintes,{" "}
            <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
              plus de résultats.
            </span>
          </h2>
        </div>

        {/* Coverflow 3D */}
        <div className="relative h-[360px] sm:h-[400px] lg:h-[420px] flex items-center justify-center overflow-hidden sm:overflow-visible" style={{ perspective: "1200px" }}>
          {slides.map((s, i) => {
            const total = slides.length;
            const rawOffset = (i - current + total) % total;
            const signedOffset = rawOffset > total / 2 ? rawOffset - total : rawOffset;
            const isActive = signedOffset === 0;
            const abs = Math.abs(signedOffset);

            const step = isMobile ? 320 : 300;
            const translateX = signedOffset * step;
            const rotateY = signedOffset * (isMobile ? 0 : -38);
            const scale = isActive ? 1 : Math.max(0.75, 1 - abs * 0.12);
            const opacity = isMobile ? (isActive ? 1 : 0) : (isActive ? 1 : Math.max(0.3, 1 - abs * 0.28));
            const zIndex = total - abs;

            return (
              <div
                key={i}
                className="absolute w-[90vw] sm:w-full max-w-xl cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  transformStyle: "preserve-3d",
                  zIndex,
                  opacity,
                  transition: "all 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: isActive ? "auto" : "none",
                }}
                onClick={() => !isActive && setCurrent(i)}
              >
                <div
                  className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col"
                  style={{
                    background: s.color,
                    boxShadow: isActive
                      ? `0 24px 70px ${s.color}55, 0 4px 20px rgba(0,0,0,0.1)`
                      : "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                      Avantage {i + 1} / {total}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-6">{s.title}</h3>

                  {/* Before / After */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {/* Sans Imoni */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3 block">Sans Imoni</span>
                      <div className="space-y-2.5 sm:space-y-3">
                        {s.without.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-white/50 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-white/50 text-xs leading-snug line-through">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Avec Imoni */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-white mb-3 block">Avec Imoni</span>
                      <div className="space-y-2.5 sm:space-y-3">
                        {s.with.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span className="text-white text-xs leading-snug font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contrôles : flèches + dots */}
        <div className="flex items-center justify-center gap-5 mt-8 sm:mt-10">
          <button
            onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: slide.color, boxShadow: `0 4px 16px ${slide.color}50` }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div className="flex items-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === current ? 28 : 10,
                  height: 10,
                  background: i === current ? s.color : "rgba(0,0,0,0.12)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((current + 1) % slides.length)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: slide.color, boxShadow: `0 4px 16px ${slide.color}50` }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
