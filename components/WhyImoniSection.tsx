"use client";
import { useEffect, useRef } from "react";

export default function WhyImoniSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Left column */}
          <div className="reveal space-y-6">
            <span className="text-[#E91E8C] text-xs font-bold uppercase tracking-widest">
              Pourquoi Imoni ?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D0F1A] leading-tight">
              Né d&apos;un constat, une solution pour les{" "}
              <span className="text-[#E91E8C]">professionnels de l&apos;immobilier.</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Aujourd&apos;hui, diffuser des annonces est le seul et principal moyen pour obtenir des contacts
              acquéreurs. Mais cela devient de plus en plus coûteux pour les agences et mandataires.
              Imoni a pour vocation de vous apporter une nouvelle solution intelligente pour développer
              votre activité à moindre coût.
            </p>

            {/* Pricing badges */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 pt-2">
              {[
                { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "Une solution abordable dès 19€/mois", sub: "mandataire", color: "#E91E8C" },
                { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "120€/mois en version basique", sub: "agence immobilière", color: "#3B82F6" },
                { icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7", label: "3 mois d'essai gratuits", sub: "sans engagement", color: "#10B981" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 flex-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}15` }}>
                    <svg className="w-4 h-4" fill="none" stroke={item.color} viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0D0F1A] text-xs font-semibold leading-tight">{item.label}</p>
                    <p className="text-gray-400 text-[10px]">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle column — Video */}
          <div className="reveal reveal-delay-2 space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 group cursor-pointer shadow-xl">
              {/* Simulated city image */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-slate-900/80" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Play button */}
                <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-2xl">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              {/* Gradient overlay bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#E91E8C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-sm">Déploiement initial en Gironde</p>
                    <p className="text-white/70 text-xs">Découvrez comment Imoni se lance localement pour mieux vous accompagner.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Benefits */}
          <div className="space-y-6">
            {[
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                color: "#E91E8C",
                bg: "#E91E8C15",
                title: "Une solution gagnante",
                desc: "pour réduire vos coûts d'acquisition et augmenter vos opportunités.",
                delay: "reveal-delay-1",
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                color: "#F59E0B",
                bg: "#F59E0B15",
                title: "Un écosystème collaboratif",
                desc: "qui valorise les relations et la qualité des mises en relation.",
                delay: "reveal-delay-2",
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "#8B5CF6",
                bg: "#8B5CF615",
                title: "Une vision à long terme",
                desc: "pour un réseau immobilier intelligent sur tout le territoire.",
                delay: "reveal-delay-3",
              },
            ].map((item) => (
              <div key={item.title} className={`reveal ${item.delay} flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200`}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: item.bg }}
                >
                  <svg className="w-5 h-5" fill="none" stroke={item.color} viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#0D0F1A] text-sm">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
