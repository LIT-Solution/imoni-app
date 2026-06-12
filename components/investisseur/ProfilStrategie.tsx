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

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale text-center mb-14">
          <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-[0.2em] uppercase mb-4">Votre profil complet</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0F1A] leading-tight">
            Décrivez <span className="text-[#8B5CF6]">qui vous êtes</span> et votre stratégie
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto">
            Un profil investisseur complet pour des opportunités parfaitement alignées avec vos objectifs.
          </p>
        </div>

        {/* Carousel stack */}
        <div className="relative h-130 flex items-center justify-center">
          {/* Flèche gauche */}
          <button
            onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
            className="absolute left-0 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-[#8B5CF6] transition-all duration-200 hover:-translate-x-1 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Flèche droite */}
          <button
            onClick={() => setCurrent((current + 1) % slides.length)}
            className="absolute right-0 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-[#8B5CF6] transition-all duration-200 hover:translate-x-1 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          {slides.map((slide, i) => {
            const total = slides.length;
            const offset = (i - current + total) % total;
            const isActive = offset === 0;
            const behind = Math.min(offset, total - offset);

            let translateX = 0;
            let translateY = 0;
            let scale = 1;
            let zIndex = total;
            let opacity = 1;

            if (isActive) {
              zIndex = total;
              scale = 1;
            } else if (offset <= Math.floor(total / 2)) {
              translateX = offset * 60;
              translateY = offset * 12;
              scale = 1 - offset * 0.06;
              zIndex = total - offset;
              opacity = 1 - offset * 0.1;
            } else {
              const reverseOffset = total - offset;
              translateX = -reverseOffset * 60;
              translateY = reverseOffset * 12;
              scale = 1 - reverseOffset * 0.06;
              zIndex = total - reverseOffset;
              opacity = 1 - reverseOffset * 0.1;
            }

            return (
              <div
                key={i}
                className="absolute w-full max-w-lg cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onClick={() => setCurrent(i)}
              >
                <div
                  className="rounded-3xl p-8 h-125 flex flex-col overflow-hidden"
                  style={{
                    background: isActive ? "#fff" : `linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.05))`,
                    border: `1.5px solid rgba(139,92,246,0.3)`,
                    boxShadow: isActive
                      ? "0 20px 60px rgba(139,92,246,0.15), 0 4px 20px rgba(0,0,0,0.06)"
                      : "0 4px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="flex flex-col h-full transition-opacity duration-300"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
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

        {/* Dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
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
      </div>
    </section>
  );
}
