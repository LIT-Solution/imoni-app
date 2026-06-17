"use client";
import { useState, useEffect, useCallback } from "react";
import { useReveal } from "@/hooks/useReveal";

const slides = [
  {
    color: "#8B5CF6",
    title: "Qui êtes-vous ?",
    desc: "Décrivez votre expérience et votre profil pour que les professionnels comprennent qui vous êtes.",
    items: ["Investisseur", "Investisseur expérimenté", "Marchand de biens", "Promoteur", "Investisseur patrimonial"],
  },
  {
    color: "#E91E8C",
    title: "Quel est votre objectif principal ?",
    desc: "Indiquez ce que vous cherchez en priorité.",
    items: ["Revenus locatifs", "Plus-value à court terme", "Constitution de patrimoine", "Défiscalisation", "Promotion immobilière"],
  },
  {
    color: "#F59E0B",
    title: "Quelle est votre stratégie ?",
    desc: "Précisez votre approche d'investissement.",
    items: ["Avec travaux", "Sans travaux", "Immeuble", "Terrain"],
  },
  {
    color: "#10B981",
    title: "Vos modalités financières",
    desc: "Comment financez-vous vos opérations ?",
    items: ["Financement bancaire", "Fonds propres", "Crowdfunding", "Partenariat investisseur"],
  },
  {
    color: "#8B5CF6",
    title: "Vos critères de recherche",
    desc: "Définissez vos essentiels.",
    items: ["Budget d'acquisition", "Rentabilité recherchée", "Localisation & secteurs", "Type de biens recherchés"],
  },
];

export default function ProfilStrategie() {
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

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-28 relative overflow-hidden" style={{ background: "#F3F0FF" }}>
      <div className="absolute -top-20 -right-20 w-60 sm:w-100 h-60 sm:h-100 rounded-full opacity-10 blur-xl pointer-events-none bg-[#8B5CF6]" />
      <div className="absolute -bottom-20 -left-20 w-52 sm:w-88 h-52 sm:h-88 rounded-full opacity-8 blur-xl pointer-events-none bg-[#8B5CF6]" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale text-center mb-8 sm:mb-14">
          <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4">Votre profil complet</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-[#0D0F1A] leading-tight">
            Décrivez <span className="text-[#8B5CF6]">qui vous êtes</span> et votre stratégie
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto">
            Un profil investisseur complet pour des opportunités parfaitement alignées avec vos objectifs.
          </p>
        </div>

        {/* Coverflow 3D */}
        <div className="relative h-96 sm:h-110 lg:h-130 flex items-center justify-center" style={{ perspective: "1200px" }}>
          {slides.map((slide, i) => {
            const total = slides.length;
            const rawOffset = (i - current + total) % total;
            const signedOffset = rawOffset > total / 2 ? rawOffset - total : rawOffset;
            const isActive = signedOffset === 0;
            const abs = Math.abs(signedOffset);

            const step = isMobile ? 120 : 260;
            const translateX = signedOffset * step;
            const rotateY = signedOffset * (isMobile ? -25 : -38);
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
                  className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col"
                  style={{
                    background: "#fff",
                    border: isActive ? "1.5px solid rgba(139,92,246,0.35)" : "1.5px solid rgba(139,92,246,0.15)",
                    boxShadow: isActive
                      ? "0 24px 70px rgba(139,92,246,0.18), 0 4px 20px rgba(0,0,0,0.06)"
                      : "0 4px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="flex flex-col h-full" style={{ opacity: isActive ? 1 : 0.5, transition: "opacity 0.4s" }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">
                        Étape {i + 1} / {total}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0D0F1A] mb-2">{slide.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{slide.desc}</p>
                    <div className="space-y-2.5">
                      {slide.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl"
                          style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.12)" }}
                        >
                          <div className="w-2 h-2 rounded-full shrink-0 bg-[#8B5CF6]" />
                          <span className="text-[#0D0F1A] text-sm font-medium">{item}</span>
                        </div>
                      ))}
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
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors hover:shadow-lg hover:shadow-purple-500/30"
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
                background: i === current ? "#8B5CF6" : "rgba(0,0,0,0.12)",
              }}
            />
          ))}
        </div>

          <button
            onClick={() => setCurrent((current + 1) % slides.length)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors hover:shadow-lg hover:shadow-purple-500/30"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
