"use client";
import { useEffect, useRef } from "react";

export default function FooterCTA() {
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
    <footer
      ref={sectionRef}
      id="download"
      className="relative overflow-hidden py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #0D0F1A 0%, #1a0d2e 40%, #2d1040 70%, #1a0533 100%)",
      }}
    >
      {/* Pink glow overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E91E8C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-purple-700/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left */}
          <div className="reveal text-center lg:text-left max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              Prêt à vivre l&apos;expérience{" "}
              <span className="text-[#E91E8C]">Imoni</span> ?
            </h2>
            <p className="text-white/60 text-base mb-8">
              Rejoignez dès maintenant l&apos;écosystème immobilier le plus intelligent et collaboratif.
            </p>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#"
                className="flex items-center gap-3 bg-black/60 hover:bg-black/80 border border-white/20 text-white px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-white/60 text-[9px] uppercase tracking-widest leading-none">Télécharger dans</p>
                  <p className="text-white font-semibold text-sm leading-tight">l&apos;App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-black/60 hover:bg-black/80 border border-white/20 text-white px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76l11.08 11.76L3.18 23.76z" fill="#4285F4"/>
                  <path d="M20.5 10.5l-2.78-1.58-3.16 3.35 3.16 3.35 2.81-1.6A2 2 0 0020.5 10.5z" fill="#FBBC05"/>
                  <path d="M3.18.24l11.08 11.76-3.26 3.45L3.18.24z" fill="#34A853"/>
                  <path d="M3.18 23.76l7.82-15.31 3.26 3.45-11.08 11.76z" fill="#EA4335"/>
                </svg>
                <div>
                  <p className="text-white/60 text-[9px] uppercase tracking-widest leading-none">Disponible sur</p>
                  <p className="text-white font-semibold text-sm leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — QR code */}
          <div className="reveal reveal-delay-2 flex flex-col items-center gap-4">
            <div className="w-32 h-32 bg-white rounded-2xl p-3 shadow-2xl flex items-center justify-center">
              {/* QR code placeholder */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* QR pattern simulation */}
                <rect x="0" y="0" width="40" height="40" fill="none" stroke="#0D0F1A" strokeWidth="4"/>
                <rect x="10" y="10" width="20" height="20" fill="#0D0F1A"/>
                <rect x="60" y="0" width="40" height="40" fill="none" stroke="#0D0F1A" strokeWidth="4"/>
                <rect x="70" y="10" width="20" height="20" fill="#0D0F1A"/>
                <rect x="0" y="60" width="40" height="40" fill="none" stroke="#0D0F1A" strokeWidth="4"/>
                <rect x="10" y="70" width="20" height="20" fill="#0D0F1A"/>
                {/* Data cells */}
                <rect x="50" y="50" width="8" height="8" fill="#0D0F1A"/>
                <rect x="62" y="50" width="8" height="8" fill="#0D0F1A"/>
                <rect x="74" y="50" width="8" height="8" fill="#0D0F1A"/>
                <rect x="86" y="50" width="8" height="8" fill="#0D0F1A"/>
                <rect x="50" y="62" width="8" height="8" fill="#0D0F1A"/>
                <rect x="74" y="62" width="8" height="8" fill="#0D0F1A"/>
                <rect x="50" y="74" width="8" height="8" fill="#0D0F1A"/>
                <rect x="62" y="74" width="8" height="8" fill="#0D0F1A"/>
                <rect x="86" y="74" width="8" height="8" fill="#0D0F1A"/>
                <rect x="50" y="86" width="8" height="8" fill="#0D0F1A"/>
                <rect x="74" y="86" width="8" height="8" fill="#0D0F1A"/>
                <rect x="86" y="86" width="8" height="8" fill="#0D0F1A"/>
              </svg>
            </div>
            <p className="text-white/50 text-xs text-center">Scanner pour télécharger</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© 2024 Imoni. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white/70 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white/70 transition-colors">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
