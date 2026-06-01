"use client";
import { useReveal } from "@/hooks/useReveal";

export default function WhyImoniSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_auto_1fr] gap-10 lg:gap-14 items-stretch">

            {/* Left column */}
            <div className="reveal-left space-y-7">
              <span className="inline-block bg-[#E91E8C] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                Pourquoi Imoni ?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-[#0D0F1A] leading-tight">
                Né d&apos;un constat,<br />une solution pour les{" "}
                <span className="text-[#E91E8C]">professionnels de l&apos;immobilier.</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Aujourd&apos;hui, diffuser des annonces est le seul et principal moyen
                pour obtenir des contacts acquéreurs. Mais cela devient de plus
                en plus coûteux pour les agences et mandataires.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="font-semibold text-[#0D0F1A]">Imoni</span> a pour vocation de vous apporter une nouvelle solution
                intelligente pour développer votre activité à moindre coût.
              </p>

              {/* Pricing badges */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <span className="text-[#E91E8C] font-bold text-3xl">€</span>
                  </div>
                  <div>
                    <p className="text-[#0D0F1A] text-xs font-bold leading-snug">Une solution abordable</p>
                    <p className="text-[#0D0F1A] text-xs font-semibold leading-snug">dès 19€ / mois</p>
                    <p className="text-gray-400 text-[10px] mt-0.5">(mandataire)</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="#3B82F6" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0D0F1A] text-xs font-bold leading-snug">120€ / mois</p>
                    <p className="text-[#0D0F1A] text-xs font-semibold leading-snug">en version basique</p>
                    <p className="text-gray-400 text-[10px] mt-0.5">(agence immobilière)</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="#F59E0B" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0D0F1A] text-xs font-bold leading-snug">3 mois</p>
                    <p className="text-[#0D0F1A] text-xs font-semibold leading-snug">d&apos;essai gratuits</p>
                    <p className="text-gray-400 text-[10px] mt-0.5">sans engagement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle column — Video */}
            <div className="reveal-scale reveal-delay-2 w-full lg:w-85 xl:w-95">
              <div className="relative rounded-2xl overflow-hidden h-full bg-gradient-to-b from-amber-200/60 via-slate-600 to-slate-900 group cursor-pointer shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-300/20 via-slate-700/50 to-slate-900/90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                    <svg className="w-7 h-7 text-[#0D0F1A] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-[#E91E8C] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">Déploiement initial en Gironde</p>
                      <p className="text-white/70 text-xs leading-relaxed mt-1">Découvrez comment Imoni se lance localement pour mieux vous accompagner.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column — Benefits */}
            <div className="relative lg:pl-6 flex items-center">
              <div className="flex flex-col gap-6 relative z-10 w-full">
                <div className="reveal-right reveal-delay-1 relative bg-gray-50 rounded-2xl pt-8 pb-5 px-5 border border-gray-100 shadow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:mr-8">
                  <div className="absolute -top-5 left-3 w-10 h-10 rounded-full bg-[#E91E8C] flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="font-bold text-[#0D0F1A] text-base">Une solution gagnante</p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1.5">pour réduire vos coûts d&apos;acquisition et augmenter vos opportunités.</p>
                </div>

                <div className="reveal-right reveal-delay-3 relative bg-gray-50 rounded-2xl pt-8 pb-5 px-5 border border-gray-100 shadow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:ml-8">
                  <div className="absolute -top-5 left-3 w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="font-bold text-[#0D0F1A] text-base">Un écosystème collaboratif</p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1.5">qui valorise les relations et la qualité des mises en relation.</p>
                </div>

                <div className="reveal-right reveal-delay-5 relative bg-gray-50 rounded-2xl pt-8 pb-5 px-5 border border-gray-100 shadow transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:mr-8">
                  <div className="absolute -top-5 left-3 w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="font-bold text-[#0D0F1A] text-base">Une vision à long terme</p>
                  <p className="text-gray-500 text-sm leading-relaxed mt-1.5">pour un réseau immobilier intelligent sur tout le territoire.</p>
                </div>
              </div>
            </div>

          </div>
      </div>
    </section>
  );
}
