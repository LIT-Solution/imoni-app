"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const pillars = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Neutre et impartial",
    desc: "Aucune commission, aucun parti pris.",
    color: "#E91E8C",
  },
  {
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    title: "Profils vérifiés",
    desc: "Identités contrôlées et sécurisées.",
    color: "#3B82F6",
  },
  {
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    title: "Transactions sécurisées",
    desc: "Offre d'achat électronique et données protégées.",
    color: "#10B981",
  },
  {
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    title: "Confidentialité garantie",
    desc: "Vos données sont confidentielles et jamais partagées.",
    color: "#8B5CF6",
  },
  {
    icon: null,
    imgSrc: "/icones/support.svg",
    title: "Accompagnement humain & IA",
    desc: "Coach disponible 24h/24, 7j/7 pour vous guider.",
    color: "#F59E0B",
  },
];

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D0F1A 0%, #141628 50%, #0D0F1A 100%)" }}
    >
      {/* Dot grid subtle */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Texte gauche */}
          <div className="reveal lg:w-[34%] shrink-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              La confiance au cœur<br />de chaque{" "}
              <span className="bg-gradient-to-r from-[#E91E8C] via-[#FF4D6D] to-[#FF8C00] bg-clip-text text-transparent">rencontre</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Imoni garantit des échanges sécurisés dans un environnement neutre et transparent.
            </p>
          </div>

          {/* Séparateur vertical */}
          <div className="hidden lg:block w-px self-stretch bg-white/10 shrink-0" />

          {/* Piliers sur une ligne */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-10">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`reveal reveal-delay-${i + 1} group flex flex-col items-center text-center gap-6`}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: "transparent",
                    border: `2px solid ${p.color}60`,
                  }}
                >
                  {p.imgSrc ? (
                    <Image src={p.imgSrc} alt="" width={28} height={28} style={{ filter: `invert(75%) sepia(50%) saturate(800%) hue-rotate(5deg) brightness(105%)` }} />
                  ) : (
                    <svg className="w-7 h-7" fill="none" stroke={p.color} viewBox="0 0 24 24" strokeWidth={1.6}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight mb-1">{p.title}</p>
                  <p className="text-white/40 text-xs leading-snug">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
