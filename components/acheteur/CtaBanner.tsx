"use client";
import { useReveal } from "@/hooks/useReveal";

export default function CtaBanner() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="bg-[#0D0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="reveal-scale flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2">
              Inscrivez-vous sur Imoni
              <br />
              pour une nouvelle expérience immobilière.
            </h2>
          </div>

          <div className="flex flex-col items-center gap-5 shrink-0">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 bg-linear-to-r from-[#E91E8C] via-[#FF4D6D] to-[#FF8C00] text-white font-semibold px-8 py-3.5 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/30"
            >
              <span className="relative z-10">Créer mon profil gratuitement</span>
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-2 rounded-lg text-sm transition-colors hover:bg-white/20"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-2 rounded-lg text-sm transition-colors hover:bg-white/20"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76l11.08 11.76L3.18 23.76z" fill="#4285F4" />
                  <path d="M20.5 10.5l-2.78-1.58-3.16 3.35 3.16 3.35 2.81-1.6A2 2 0 0020.5 10.5z" fill="#FBBC05" />
                  <path d="M3.18.24l11.08 11.76-3.26 3.45L3.18.24z" fill="#34A853" />
                  <path d="M3.18 23.76l7.82-15.31 3.26 3.45-11.08 11.76z" fill="#EA4335" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-2 mt-10 text-center">
          <p className="text-white/60 text-base">
            Ne cherchez plus.{" "}
            <span className="font-bold text-white">Soyez trouvé.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
