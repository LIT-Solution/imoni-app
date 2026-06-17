"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";

const checks = [
  "Accédez à la 1ère base acquéreur nationale",
  "Gagnez du temps, réduisez vos coûts",
  "Moins d'interagences, plus de commission",
  "Les investisseurs et marchands de biens au même endroit",
  "Enrichissez votre portefeuille vendeur",
];

export default function ProHero() {
  const sectionRef = useReveal(0.1);
  const bgRef = useParallax(0.25);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0F1A]"
    >
      {/* Background image */}
      <div ref={bgRef} className="absolute inset-0 scale-105">
        <Image
          src="/professionel/background_pro.webp"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-[#0D0F1A] via-[#0D0F1A]/90 via-55% to-[#0D0F1A]/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-10 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-2rem)]">
          {/* Left column */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-7">
            <div className="reveal-left">
              <span className="inline-flex items-center text-white text-[10px] sm:text-xs font-bold px-4 sm:px-5 py-2 rounded-full tracking-widest uppercase"
                style={{
                  background: "linear-gradient(#0D0F1A, #0D0F1A) padding-box, linear-gradient(to right, #8B5CF6, #E91E8C, #FF8C00) border-box",
                  borderWidth: "2px",
                  borderColor: "transparent",
                  borderStyle: "solid",
                }}
              >
                Pour les professionnels
              </span>
            </div>

            <div className="reveal-left reveal-delay-1">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] 2xl:text-[3.5rem] font-extrabold text-white leading-[1.08]">
                Imoni,
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] 2xl:text-[3.5rem] font-extrabold leading-[1.08]">
                <span className="text-white">votre passerelle{" "}</span>
                <br />
                <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                  acquéreurs.
                </span>
              </h1>
            </div>

            <p className="reveal-left reveal-delay-2 text-white/70 text-sm sm:text-lg lg:text-xl leading-relaxed max-w-lg">
              Avant de diffuser une annonce,
              <br className="hidden sm:block" />
              regardez peut-être si votre acquéreur existe déjà.
            </p>

            <ul className="reveal reveal-delay-3 space-y-2 sm:space-y-3">
              {checks.map((text) => (
                <li key={text} className="flex items-start gap-2 sm:gap-3 text-white/85 text-sm sm:text-base lg:text-lg">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#E91E8C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — phone mockup + badge */}
          <div className="reveal-right reveal-delay-2 relative flex justify-center items-center mt-2 lg:mt-16 2xl:mt-4 lg:-ml-36 2xl:-ml-12">
            <div
              className="relative w-56 sm:w-80 lg:w-120 2xl:w-150 h-72 sm:h-105 lg:h-165 2xl:h-200"
              style={{ filter: "drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4))" }}
            >
              <Image
                src="/professionel/phone_pro.webp"
                alt="Imoni app — écran professionnel"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 320px, 600px"
              />
            </div>

            {/* Badge cercle 3 mois offerts */}
            <div
              className="absolute -right-2 bottom-8 sm:-right-4 sm:bottom-12 lg:right-8 lg:bottom-8 2xl:-right-20 2xl:bottom-24 -z-10"
              style={{ animation: "breathe1 4s ease-in-out infinite" }}
            >
              <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 2xl:w-68 2xl:h-68 rounded-full bg-white shadow-2xl shadow-black/20 flex flex-col items-center justify-center text-center">
                <p className="font-extrabold text-base sm:text-xl lg:text-2xl leading-tight bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                  3 MOIS
                </p>
                <p className="font-extrabold text-base sm:text-xl lg:text-2xl leading-tight bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                  OFFERTS
                </p>
                <div className="w-6 sm:w-8 lg:w-10 h-px bg-gray-200 my-1" />
                <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm leading-tight font-medium">
                  pour tous les
                  <br />
                  professionnels
                  <br className="hidden sm:block" />
                  <span className="hidden sm:inline"> de l&apos;immobilier</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
