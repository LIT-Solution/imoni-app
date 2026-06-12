"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function CtaBanner() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="relative z-10 bg-transparent px-4 sm:px-6 lg:px-8 -mt-28 pb-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="reveal-scale rounded-2xl px-12 py-14 flex flex-col lg:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 35%, #4C1D95 65%, #6D28D9 100%)" }}
        >

          {/* Gauche — icône + texte + store buttons */}
          <div className="flex items-center gap-5">
            {/* Logo app */}
            <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0">
              <Image src="/acheteur/logo-app.webp" alt="Imoni app" width={160} height={160} quality={100} className="w-full h-full object-cover" />
            </div>

            <div>
              <p className="text-white font-bold text-xl leading-snug">
                Inscrivez-vous sur Imoni<br />
                <span className="text-white/70 font-normal text-base">pour une nouvelle expérience immobilière.</span>
              </p>
              <div className="flex items-center gap-2 mt-2.5">
                <a href="#" className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-5 py-2.5 rounded-xl transition-colors">
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <p className="text-white/50 text-[9px] uppercase tracking-widest leading-none">Télécharger dans</p>
                    <p className="text-white font-semibold text-sm leading-tight">l&apos;App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-5 py-2.5 rounded-xl transition-colors">
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76l11.08 11.76L3.18 23.76z" fill="#4285F4" />
                    <path d="M20.5 10.5l-2.78-1.58-3.16 3.35 3.16 3.35 2.81-1.6A2 2 0 0020.5 10.5z" fill="#FBBC05" />
                    <path d="M3.18.24l11.08 11.76-3.26 3.45L3.18.24z" fill="#34A853" />
                    <path d="M3.18 23.76l7.82-15.31 3.26 3.45-11.08 11.76z" fill="#EA4335" />
                  </svg>
                  <div>
                    <p className="text-white/50 text-[9px] uppercase tracking-widest leading-none">Disponible sur</p>
                    <p className="text-white font-semibold text-sm leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Droite — CTA + tagline */}
          <div className="flex flex-col items-center lg:items-end gap-2 shrink-0">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] text-white font-semibold px-7 py-3 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/30"
            >
              <span className="relative z-10">Créer mon profil gratuitement</span>
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </a>
            <p className="text-white/50 text-sm text-center w-full">
              Ne cherchez plus.{" "}
              <span className="font-bold text-white">Soyez trouvé.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
