"use client";
import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    label: "Formations immobilières",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  },
  {
    label: "Outils d'amélioration de photos",
    icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "Home staging virtuel ou réel",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "Prospection immobilière",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "Avis de valeur et estimation",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

export default function ProfsBoostSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #E91E8C 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">

          {/* Gauche */}
          <div className="reveal-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0D0F1A] leading-snug mb-4">
              Professionnels de l'immobilier,<br />
              <span className="text-[#E91E8C]">boostez votre activité !</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Vous êtes formateur ou proposez des services et outils pour les agents immobiliers ? Imoni vous met en avant.
            </p>

            <div className="grid grid-cols-5 gap-6">
              {services.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white" style={{ boxShadow: "0 2px 12px rgba(233,30,140,0.1)", border: "1px solid rgba(233,30,140,0.1)" }}>
                    <svg className="w-6 h-6 text-[#E91E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Droite — Offre lancement */}
          <div className="reveal-right reveal-delay-1">
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #E91E8C 0%, #C4177A 55%, #9d1265 100%)",
                boxShadow: "0 24px 64px rgba(233,30,140,0.35)",
              }}
            >
              {/* Étoiles décoratives */}
              <svg className="absolute top-5 right-8 opacity-40" width="12" height="12" viewBox="0 0 12 12" fill="white">
                <path d="M6 0l1.2 4.8H12L8.4 7.8l1.2 4.8L6 9.6l-3.6 3 1.2-4.8L0 4.8h4.8z" />
              </svg>
              <svg className="absolute top-14 right-14 opacity-25" width="8" height="8" viewBox="0 0 12 12" fill="white">
                <path d="M6 0l1.2 4.8H12L8.4 7.8l1.2 4.8L6 9.6l-3.6 3 1.2-4.8L0 4.8h4.8z" />
              </svg>
              <svg className="absolute bottom-16 right-6 opacity-20" width="16" height="16" viewBox="0 0 12 12" fill="white">
                <path d="M6 0l1.2 4.8H12L8.4 7.8l1.2 4.8L6 9.6l-3.6 3 1.2-4.8L0 4.8h4.8z" />
              </svg>

              {/* Cercles déco */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/[0.07]" />
              <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-white/[0.06]" />

              {/* Badge places limitées */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-white text-[10px] font-bold tracking-wide uppercase">Places limitées</span>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(255,255,255,0.18)" }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>

                <h3 className="text-2xl lg:text-3xl font-extrabold text-white leading-snug mb-3">
                  Offre de lancement :<br />votre visibilité<br />est <span className="underline decoration-white/40 underline-offset-4">offerte</span>
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Pour le lancement d'Imoni, intégrez le carrousel partenaires et bénéficiez d'une visibilité premium sans aucun frais.
                </p>

                {/* Compteur places */}
                <div className="flex items-center gap-3 mb-6 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white/30 bg-white/20" />
                    ))}
                  </div>
                  <p className="text-white text-xs font-semibold">
                    <span className="text-white font-extrabold text-sm">12</span> places restantes sur 50
                  </p>
                </div>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-[1.02]"
                  style={{ background: "white", color: "#E91E8C", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
                >
                  Rejoindre maintenant
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
