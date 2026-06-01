"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
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
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0F1A]"
    >
      <Image
        src="/fond_accueille.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      {/* Overlay dégradé — gauche opaque pour lisibilité texte, droite transparent pour les phones */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F1A]/55 via-[#0D0F1A]/20 to-transparent pointer-events-none" />
      {/* Vignette basse */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0F1A]/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:pl-0 lg:pr-0 pt-24 pb-8 w-full">
        <div className="grid lg:grid-cols-[52%_48%] gap-0 items-start min-h-[calc(100vh-6rem)]">

          {/* Colonne gauche */}
          <div className="flex flex-col justify-start space-y-7 lg:pr-4 pt-20 lg:-ml-12">

            {/* Badge */}
            <div className="reveal">
              <span className="inline-flex items-center bg-purple-900/30 border border-purple-400/30 text-white/90 text-[11px] font-semibold px-5 py-2 rounded-full tracking-[0.15em] uppercase">
                Le site de rencontre immobilier
              </span>
            </div>

            {/* Titre */}
            <div className="reveal reveal-delay-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-extrabold text-white leading-[1.05] tracking-tight">
                L&apos;immobilier<br />devrait être
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-extrabold leading-[1.1] tracking-tight bg-gradient-to-r from-[#E91E8C] via-[#FF4D6D] to-[#FF8C00] bg-clip-text text-transparent">
                une rencontre.
              </h1>
            </div>

            {/* Sous-titre */}
            <p className="reveal reveal-delay-2 text-white text-base sm:text-[1.05rem] leading-relaxed max-w-md">
              Imoni connecte vendeurs, acquéreurs et professionnels<br className="hidden sm:block" /> dans un écosystème intelligent, neutre et sécurisé.
            </p>

            {/* Features */}
            <div className="reveal reveal-delay-3 flex flex-wrap gap-x-6 gap-y-1">
              {[
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", line1: "Neutre", line2: "et impartial" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", line1: "Navigation", line2: "intelligente" },
                { icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z", line1: "Coach vocal IA", line2: "24h/24 – 7j/7" },
                { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", line1: "Transactions", line2: "sécurisées" },
              ].map((feat) => (
                <div key={feat.line1} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white/70 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                  </svg>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{feat.line1}</p>
                    <p className="text-white/60 text-sm leading-tight">{feat.line2}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Boutons store */}
            <div className="reveal reveal-delay-4 flex flex-wrap gap-3">
              <a href="#" className="flex items-center gap-4 bg-black/80 hover:bg-black border border-white/15 text-white px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5 backdrop-blur-sm">
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest leading-none">Télécharger dans</p>
                  <p className="text-white font-semibold text-base leading-snug">l&apos;App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-4 bg-black/80 hover:bg-black border border-white/15 text-white px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5 backdrop-blur-sm">
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76l11.08 11.76L3.18 23.76z" fill="#4285F4"/>
                  <path d="M20.5 10.5l-2.78-1.58-3.16 3.35 3.16 3.35 2.81-1.6A2 2 0 0020.5 10.5z" fill="#FBBC05"/>
                  <path d="M3.18.24l11.08 11.76-3.26 3.45L3.18.24z" fill="#34A853"/>
                  <path d="M3.18 23.76l7.82-15.31 3.26 3.45-11.08 11.76z" fill="#EA4335"/>
                </svg>
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest leading-none">Disponible sur</p>
                  <p className="text-white font-semibold text-base leading-snug">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Colonne droite — phones */}
          <div className="relative flex justify-center lg:justify-end items-start lg:translate-x-8 pt-0">
            <div className="relative drop-shadow-2xl -translate-y-12 translate-x-16">
              <div className="relative w-[440px] sm:w-[520px] lg:w-[600px] h-[520px] sm:h-[620px] lg:h-[720px]">
                <Image
                  src="/mockup-iphone-2.png"
                  alt="Imoni app"
                  fill
                  className="object-contain object-bottom"
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 440px, (max-width: 1024px) 520px, 600px"
                />
              </div>

              {/* Coach card — bas droite du téléphone */}
              <div className="absolute -bottom-8 right-0 z-30 bg-white rounded-3xl shadow-2xl px-5 py-4 flex items-center gap-4 w-64">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E91E8C] to-purple-600 flex items-center justify-center shrink-0 shadow-md shadow-pink-400/40">
                  <div className="flex items-center gap-[2px] h-4">
                    {[3, 5, 7, 5, 3, 6, 7, 4, 3].map((h, i) => (
                      <div
                        key={i}
                        className="wave-bar w-[2px] bg-white rounded-full"
                        style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[#0D0F1A] text-[13px] font-bold leading-tight">Votre coach vocal</p>
                  <p className="text-[#0D0F1A] text-[13px] font-bold leading-tight">Imoni 24/24</p>
                  <p className="text-gray-400 text-[11px] mt-1">à vos côtés à chaque étape.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Vague de transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-20 sm:h-28">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
