"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";

export default function AcheteurHero() {
  const sectionRef = useReveal(0.1);
  const bgRef = useParallax(0.25);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0F1A]"
    >
      <div ref={bgRef} className="absolute inset-0 scale-105">
        <Image
          src="/fond_acheteur.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-[#0D0F1A] via-[#0D0F1A]/85 via-55% to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0D0F1A]/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)]">

          {/* Left column */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-7 -mt-8 sm:-mt-24">
            <div className="reveal-left">
              <span className="inline-flex items-center border border-transparent bg-linear-to-r from-[#E91E8C] via-[#FF4D6D] to-[#FF8C00] text-white text-[10px] sm:text-[11px] font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full tracking-widest uppercase" style={{ background: "linear-gradient(#0D0F1A, #0D0F1A) padding-box, linear-gradient(to right, #8B5CF6, #E91E8C, #FF8C00) border-box", borderWidth: "2px", borderColor: "transparent" }}>
                Pour les acheteurs
              </span>
            </div>

            <div className="reveal-left reveal-delay-1">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] 2xl:text-[3.5rem] font-extrabold text-white leading-[1.08]">
                Ne cherchez plus.
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] 2xl:text-[3.5rem] font-extrabold leading-[1.08]">
                <span className="text-white">Soyez </span>
                <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">trouvé.</span>
              </h1>
            </div>

            <p className="reveal-left reveal-delay-2 text-white/75 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
              Imoni inverse la recherche immobilière :
              <br />décrivez votre projet, valorisez votre profil
              <br />et laissez vendeurs et professionnels
              <br />venir à vous.
            </p>

            <div className="reveal reveal-delay-3">
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <span className="relative z-10">Créer mon profil gratuitement</span>
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </a>
            </div>

            <div className="reveal reveal-delay-4 flex flex-wrap gap-4 sm:gap-8">
              {["Gratuit", "Sans engagement", "Sécurisé"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-white/70 text-xs sm:text-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — phone mockup with perspective */}
          <div className="reveal-right reveal-delay-2 relative flex justify-center lg:justify-center items-center mt-4 sm:-mt-16 lg:-ml-28 2xl:-ml-16" style={{ perspective: "1200px" }}>
            <div className="relative">
              {/* Phone */}
              <div
                className="relative w-52 sm:w-75 lg:w-100 2xl:w-100 h-72 sm:h-100 lg:h-140 2xl:h-140"
                style={{ transform: "rotateY(-20deg) rotateX(3deg)", transformStyle: "preserve-3d", filter: "drop-shadow(0 0 40px rgba(100, 50, 180, 0.5)) drop-shadow(0 20px 60px rgba(0, 0, 0, 0.6)) contrast(1.1) brightness(1.05)" }}
              >
                <Image
                  src="/phone_acheteurs.webp"
                  alt="Imoni app — écran acheteur"
                  fill
                  className="object-contain object-bottom"
                  priority
                          sizes="(max-width: 640px) 208px, (max-width: 1024px) 300px, 400px"
                />
              </div>

              {/* Floating cards */}
              <div className="hidden lg:flex absolute lg:-left-28 2xl:-left-12 top-[30%] items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-lg shadow-black/10" style={{ animation: "breathe1 4s ease-in-out infinite" }}>
                <div className="w-9 h-9 rounded-lg bg-[#E91E8C]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#E91E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-[#0D0F1A] text-[11px] font-bold">12 matchs trouvés</p>
                  <p className="text-gray-400 text-[10px]">Correspondant à votre profil</p>
                </div>
              </div>

              <div className="hidden lg:flex absolute lg:-right-32 2xl:-right-16 top-[15%] items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-lg shadow-black/10" style={{ animation: "breathe2 4s ease-in-out infinite" }}>
                <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <p className="text-[#0D0F1A] text-[11px] font-bold">Profil vérifié</p>
                  <p className="text-gray-400 text-[10px]">Identité confirmée</p>
                </div>
              </div>

              <div className="hidden lg:flex absolute lg:-left-24 2xl:-left-8 bottom-[15%] items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-lg shadow-black/10" style={{ animation: "breathe3 4.5s ease-in-out infinite" }}>
                <div className="w-9 h-9 rounded-lg bg-[#10B981]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <div>
                  <p className="text-[#0D0F1A] text-[11px] font-bold">Nouveau bien</p>
                  <p className="text-gray-400 text-[10px]">T3 Bordeaux — 285 000 €</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
