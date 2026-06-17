"use client";
import { useReveal } from "@/hooks/useReveal";

export default function VendeurCta() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="bg-white px-4 sm:px-6 lg:px-8 -mt-28 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className="reveal-scale rounded-2xl px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{ background: "linear-gradient(135deg, #4C1D95 0%, #6D28D9 35%, #BE185D 70%, #C2610A 100%)" }}
        >
          {/* Gauche */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left w-full lg:w-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-xl leading-snug mb-1">
                Imoni, l&apos;application qui change
                <span className="text-white/70 font-normal text-base"> la vente immobilière.</span>
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-3">
                <a href="#" className="flex items-center gap-2.5 bg-black hover:bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-colors">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <p className="text-white/50 text-[9px] uppercase tracking-widest leading-none">Télécharger dans</p>
                    <p className="text-white font-semibold text-xs sm:text-sm leading-tight">l&apos;App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2.5 bg-black hover:bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-colors">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76l11.08 11.76L3.18 23.76z" fill="#4285F4" />
                    <path d="M20.5 10.5l-2.78-1.58-3.16 3.35 3.16 3.35 2.81-1.6A2 2 0 0020.5 10.5z" fill="#FBBC05" />
                    <path d="M3.18.24l11.08 11.76-3.26 3.45L3.18.24z" fill="#34A853" />
                    <path d="M3.18 23.76l7.82-15.31 3.26 3.45-11.08 11.76z" fill="#EA4335" />
                  </svg>
                  <div>
                    <p className="text-white/50 text-[9px] uppercase tracking-widest leading-none">Disponible sur</p>
                    <p className="text-white font-semibold text-xs sm:text-sm leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Droite */}
          <div className="flex flex-col items-center lg:items-end gap-2 shrink-0 w-full lg:w-auto">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 bg-white text-[#6D28D9] font-semibold px-6 sm:px-7 py-3 rounded-full w-full sm:w-auto justify-center overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="relative z-10">Mettre mon bien en vente</span>
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <p className="text-white/50 text-sm text-center">
              100% gratuit.{" "}
              <span className="font-bold text-white">Sans commission.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
