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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-2rem)]">
          {/* Left column */}
          <div className="flex flex-col justify-center space-y-7">
            <div className="reveal-left">
              <span className="inline-flex items-center text-white text-xs font-bold px-5 py-2 rounded-full tracking-widest uppercase"
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
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08]">
                Imoni,
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08]">
                <span className="text-white">votre passerelle{" "}</span>
                <br />
                <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                  acquéreurs.
                </span>
              </h1>
            </div>

            <p className="reveal-left reveal-delay-2 text-white/70 text-lg sm:text-xl leading-relaxed max-w-lg">
              Avant de diffuser une annonce,
              <br />
              regardez peut-être si votre acquéreur existe déjà.
            </p>

            <ul className="reveal reveal-delay-3 space-y-3">
              {checks.map((text) => (
                <li key={text} className="flex items-start gap-3 text-white/85 text-base sm:text-lg">
                  <svg className="w-5 h-5 text-[#E91E8C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — phone mockup + badge */}
          <div className="reveal-right reveal-delay-2 relative flex justify-center items-center -ml-8 lg:-ml-12 mt-2 lg:mt-4">
            <div
              className="relative w-[420px] sm:w-[500px] lg:w-[600px] h-[560px] sm:h-[660px] lg:h-[800px]"
              style={{ filter: "drop-shadow(0 20px 60px rgba(0, 0, 0, 0.4))" }}
            >
              <Image
                src="/professionel/phone_pro.webp"
                alt="Imoni app — écran professionnel"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 400px"
              />
            </div>

            {/* Badge cercle 3 mois offerts */}
            <div
              className="absolute -right-8 bottom-16 lg:-right-20 lg:bottom-24 -z-10"
              style={{ animation: "breathe1 4s ease-in-out infinite" }}
            >
              <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-68 lg:h-68 rounded-full bg-white shadow-2xl shadow-black/20 flex flex-col items-center justify-center text-center">
                <p className="font-extrabold text-xl sm:text-2xl leading-tight bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                  3 MOIS
                </p>
                <p className="font-extrabold text-xl sm:text-2xl leading-tight bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                  OFFERTS
                </p>
                <div className="w-10 h-px bg-gray-200 my-1.5" />
                <p className="text-gray-500 text-sm leading-tight font-medium">
                  pour tous les
                  <br />
                  professionnels
                  <br />
                  de l&apos;immobilier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
