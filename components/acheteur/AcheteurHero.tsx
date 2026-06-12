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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)]">

          {/* Left column */}
          <div className="flex flex-col justify-center space-y-7 -mt-24">
            <div className="reveal-left">
              <span className="inline-flex items-center border border-transparent bg-linear-to-r from-[#E91E8C] via-[#FF4D6D] to-[#FF8C00] text-white text-[11px] font-bold px-5 py-2 rounded-full tracking-widest uppercase" style={{ background: "linear-gradient(#0D0F1A, #0D0F1A) padding-box, linear-gradient(to right, #8B5CF6, #E91E8C, #FF8C00) border-box", borderWidth: "2px", borderColor: "transparent" }}>
                Pour les acheteurs
              </span>
            </div>

            <div className="reveal-left reveal-delay-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08]">
                Ne cherchez plus.
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08]">
                <span className="text-white">Soyez </span>
                <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">trouvé.</span>
              </h1>
            </div>

            <p className="reveal-left reveal-delay-2 text-white/75 text-base sm:text-lg leading-relaxed max-w-md">
              Imoni inverse la recherche immobilière :
              <br />décrivez votre projet, valorisez votre profil
              <br />et laissez vendeurs et professionnels
              <br />venir à vous.
            </p>

            <div className="reveal reveal-delay-3">
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] text-white font-semibold text-lg px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <span className="relative z-10">Créer mon profil gratuitement</span>
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </a>
            </div>

            <div className="reveal reveal-delay-4 flex flex-wrap gap-8">
              {["Gratuit", "Sans engagement", "Sécurisé"].map((label) => (
                <div key={label} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — phone mockup with perspective */}
          <div className="reveal-right reveal-delay-2 relative flex justify-center lg:justify-center items-center -ml-8 lg:-ml-16 -mt-16" style={{ perspective: "1200px" }}>
            <div className="relative">
              {/* Phone */}
              <div
                className="relative w-[300px] sm:w-[350px] lg:w-[400px] h-[400px] sm:h-[470px] lg:h-[560px]"
                style={{ transform: "rotateY(-20deg) rotateX(3deg)", transformStyle: "preserve-3d", filter: "drop-shadow(0 0 40px rgba(100, 50, 180, 0.5)) drop-shadow(0 20px 60px rgba(0, 0, 0, 0.6)) contrast(1.1) brightness(1.05)" }}
              >
                <Image
                  src="/phone_acheteurs.webp"
                  alt="Imoni app — écran acheteur"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 460px"
                />
              </div>

              {/* Floating cards */}
              <div className="hidden lg:flex absolute -left-12 top-[30%] items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-lg shadow-black/10" style={{ animation: "breathe1 4s ease-in-out infinite" }}>
                <div className="w-9 h-9 rounded-lg bg-[#E91E8C]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#E91E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-[#0D0F1A] text-xs font-bold leading-tight">Propositions</p>
                  <p className="text-gray-400 text-[11px] leading-tight">de particuliers</p>
                </div>
              </div>

              <div className="hidden lg:flex absolute -right-28 top-8 items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-lg shadow-black/10" style={{ animation: "breathe2 5s ease-in-out infinite" }}>
                <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" /></svg>
                </div>
                <div>
                  <p className="text-[#0D0F1A] text-xs font-bold leading-tight">Biens avant</p>
                  <p className="text-gray-400 text-[11px] leading-tight">commercialisation</p>
                </div>
              </div>

              <div className="hidden lg:flex absolute -right-16 top-[55%] items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-lg shadow-black/10" style={{ animation: "breathe3 4.5s ease-in-out infinite" }}>
                <div className="w-9 h-9 rounded-lg bg-[#E91E8C]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#E91E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div>
                  <p className="text-[#0D0F1A] text-xs font-bold leading-tight">Opportunités</p>
                  <p className="text-gray-400 text-[11px] leading-tight">en off-market</p>
                </div>
              </div>

              <div className="hidden lg:flex absolute -left-24 bottom-16 items-center gap-2.5 bg-white rounded-xl px-4 py-3 shadow-lg shadow-black/10" style={{ animation: "breathe4 5.5s ease-in-out infinite" }}>
                <div className="w-9 h-9 rounded-lg bg-[#E91E8C]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#E91E8C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                </div>
                <div>
                  <p className="text-[#0D0F1A] text-xs font-bold leading-tight">Des matchs</p>
                  <p className="text-gray-400 text-[11px] leading-tight">qui vous correspondent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-20 sm:h-28">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#F8F4FF" />
        </svg>
      </div>
    </section>
  );
}
