"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";


export default function HeroSection() {
  const sectionRef = useReveal(0.1);
  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0F1A]"
    >
      <div className="absolute inset-0">
        <Image
          src="/fond_accueille.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-[#0D0F1A]/90 via-[#0D0F1A]/65 via-50% to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0D0F1A]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:pl-0 2xl:pr-0 pt-20 sm:pt-24 pb-8 w-full">
        <div className="grid lg:grid-cols-[52%_48%] gap-0 items-start min-h-[calc(100vh-6rem)]">

          {/* Colonne gauche */}
          <div className="flex flex-col justify-start items-center text-center sm:items-start sm:text-left space-y-5 sm:space-y-7 lg:pr-4 pt-8 sm:pt-20 lg:ml-4 2xl:ml-8">
            <div className="reveal-left">
              <span className="inline-flex items-center bg-purple-900/30 border border-purple-400/30 text-white/90 text-[10px] sm:text-xs font-semibold px-4 sm:px-5 py-2 rounded-full tracking-[0.15em] uppercase">
                Le site de rencontre immobilier
              </span>
            </div>

            <div className="reveal-left reveal-delay-1">
              <h1 className="text-3xl sm:text-5xl lg:text-[3rem] 2xl:text-[4.5rem] font-extrabold text-white leading-[1.08] tracking-tight">
                L&apos;immobilier<br />devrait être
              </h1>
              <h1 className="text-3xl sm:text-5xl lg:text-[3rem] 2xl:text-[4.5rem] font-extrabold leading-[1.08] tracking-tight bg-linear-to-r from-[#E91E8C] via-[#FF4D6D] to-[#FF8C00] bg-clip-text text-transparent">
                une rencontre.
              </h1>
            </div>

            <p className="reveal-left reveal-delay-2 text-white text-base sm:text-lg lg:text-base 2xl:text-xl leading-relaxed max-w-lg">
              Imoni connecte vendeurs, acquéreurs et professionnels<br className="hidden sm:block" /> dans un écosystème intelligent, neutre et sécurisé.
            </p>

            <div className="reveal reveal-delay-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-1" style={{ transitionDelay: "0.35s" }}>
              {[
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", line1: "Neutre", line2: "et impartial" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", line1: "Navigation", line2: "intelligente" },
                { icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z", line1: "Coach vocal IA", line2: "24h/24 – 7j/7" },
                { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", line1: "Transactions", line2: "sécurisées" },
              ].map((feat) => (
                <div key={feat.line1} className="flex items-start gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                  </svg>
                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold leading-tight">{feat.line1}</p>
                    <p className="text-white/60 text-xs sm:text-sm leading-tight">{feat.line2}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4 flex flex-col sm:flex-row gap-3">
              <a href="#" className="flex items-center gap-3 sm:gap-4 bg-black/80 hover:bg-black border border-white/15 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5 backdrop-blur-sm">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest leading-none">Télécharger dans</p>
                  <p className="text-white font-semibold text-sm sm:text-base leading-snug">l&apos;App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 sm:gap-4 bg-black/80 hover:bg-black border border-white/15 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5 backdrop-blur-sm">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76l11.08 11.76L3.18 23.76z" fill="#4285F4"/>
                  <path d="M20.5 10.5l-2.78-1.58-3.16 3.35 3.16 3.35 2.81-1.6A2 2 0 0020.5 10.5z" fill="#FBBC05"/>
                  <path d="M3.18.24l11.08 11.76-3.26 3.45L3.18.24z" fill="#34A853"/>
                  <path d="M3.18 23.76l7.82-15.31 3.26 3.45-11.08 11.76z" fill="#EA4335"/>
                </svg>
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest leading-none">Disponible sur</p>
                  <p className="text-white font-semibold text-sm sm:text-base leading-snug">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Colonne droite — phones */}
          <div className="reveal-right reveal-delay-2 relative flex justify-center lg:justify-end items-start lg:-translate-x-8 2xl:translate-x-8 pt-0">
            <div className="relative drop-shadow-2xl -translate-y-4 sm:-translate-y-12 translate-x-0 sm:-translate-x-20 lg:-translate-x-4 2xl:-translate-x-20">
              <div className="relative w-56 sm:w-100 lg:w-115 2xl:w-140 h-72 sm:h-130 lg:h-150 2xl:h-180">
                <Image
                  src="/mockup-iphone-2.png"
                  alt="Imoni app"
                  fill
                  className="object-contain object-bottom"
                  priority
                          sizes="(max-width: 640px) 224px, (max-width: 1024px) 400px, 560px"
                />
              </div>
            </div>

            {/* Coach vocal — en bas à droite, hors du wrapper phones */}
            <div className="absolute bottom-0 right-0 z-30 bg-white rounded-2xl sm:rounded-3xl shadow-2xl px-3 sm:px-5 py-3 sm:py-4 hidden sm:flex items-center gap-3 sm:gap-4 w-48 sm:w-64">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-[#E91E8C] to-purple-600 flex items-center justify-center shrink-0 shadow-md shadow-pink-400/40">
                <div className="flex items-center gap-0.5 h-4">
                  {[3, 5, 7, 5, 3, 6, 7, 4, 3].map((h, i) => (
                    <div
                      key={i}
                      className="wave-bar w-0.5 bg-white rounded-full"
                      style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[#0D0F1A] text-[11px] sm:text-[13px] font-bold leading-tight">Votre coach vocal</p>
                <p className="text-[#0D0F1A] text-[11px] sm:text-[13px] font-bold leading-tight">Imoni 24/24</p>
                <p className="text-gray-400 text-[10px] sm:text-[11px] mt-1">à vos côtés à chaque étape.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
