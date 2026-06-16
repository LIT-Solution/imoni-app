"use client";
import { useReveal } from "@/hooks/useReveal";

export default function PartenaireCta() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="py-10 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="reveal-scale rounded-2xl px-8 lg:px-12 py-6 relative overflow-hidden flex flex-col lg:flex-row items-center gap-6 lg:gap-12"
          style={{ background: "linear-gradient(135deg, #E91E8C 0%, #C4177A 60%, #a01265 100%)", boxShadow: "0 16px 48px rgba(233,30,140,0.3)" }}
        >
          {/* Déco */}
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/[0.06] pointer-events-none" />
          <div className="absolute bottom-0 right-32 w-24 h-24 rounded-full bg-white/[0.05] pointer-events-none" />

          {/* Icône + Titre */}
          <div className="flex items-center gap-5 shrink-0">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.18)" }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <h2 className="text-xl lg:text-2xl font-extrabold text-white leading-snug">
              Ensemble, créons de la valeur<br />à chaque projet immobilier.
            </h2>
          </div>

          {/* Séparateur */}
          <div className="hidden lg:block w-px self-stretch bg-white/20" />

          {/* Sous-titre */}
          <p className="text-white/80 text-sm leading-relaxed flex-1">
            Rejoignez le réseau de partenaires Imoni<br className="hidden lg:block" />
            et développez votre visibilité auprès de clients qualifiés.
          </p>

          {/* CTA */}
          <a
            href="mailto:partenaires@imoni.fr"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "#0D0F1A", boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}
