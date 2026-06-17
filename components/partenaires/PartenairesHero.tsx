"use client";
import { useReveal } from "@/hooks/useReveal";

const bullets = [
  "Touchez acheteurs, vendeurs et professionnels",
  "Soyez recommandé au moment clé de leur projet",
  "Proposez vos offres et avantages commerciaux",
];

export default function PartenairesHero() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Image de fond plein écran */}
      <div className="absolute inset-0 z-0">
        <img src="/partenaire/fond_partenaire.webp" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(255,160,120,0.35)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.82) 12%, rgba(255,235,225,0.7) 32%, rgba(255,190,160,0.35) 55%, rgba(255,160,130,0.1) 75%, transparent 100%)" }} />
      </div>

      {/* Cercles décoratifs violet */}
      <div className="absolute z-[1] rounded-full pointer-events-none hidden sm:block" style={{ width: "280px", height: "280px", bottom: "-8%", left: "36%", background: "rgba(233,30,140,0.22)", filter: "blur(2px)" }} />
      <div className="absolute z-[1] rounded-full pointer-events-none hidden sm:block" style={{ width: "220px", height: "220px", bottom: "-14%", left: "42%", background: "rgba(233,30,140,0.22)", filter: "blur(2px)" }} />

      {/* Image personnages — coin droit, pleine hauteur */}
      <img
        src="/partenaire/check_partenaire.webp"
        alt="Partenaires Imoni"
        className="absolute bottom-0 right-0 z-10 object-contain object-bottom pointer-events-none hidden sm:block lg:max-w-[60%] 2xl:max-w-[55%]"
        style={{ height: "105%", width: "auto" }}
      />

      {/* Carte notification flottante */}
      <div className="absolute top-[42%] lg:right-[13%] 2xl:right-[16%] z-20 bg-white/90 backdrop-blur-sm rounded-2xl p-4 w-52 sm:w-56 hidden md:block" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid rgba(233,30,140,0.1)" }}>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-[#E91E8C] flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </div>
          <div>
            <p className="text-[#0D0F1A] font-bold text-sm leading-tight">Au bon moment,<br />le bon partenaire.</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">Vos services proposés au moment clé de leur projet immobilier.</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full pl-0 sm:pl-12 lg:pl-16 2xl:pl-36 pr-4">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-center">

          {/* Gauche — texte */}
          <div className="space-y-5 sm:space-y-6">
            <div>
              <span className="inline-block border border-gray-300 text-[10px] sm:text-[11px] px-3 sm:px-4 py-1.5 rounded-full tracking-[0.18em] uppercase text-gray-600 font-medium bg-white/70">
                Espace partenaires
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-7xl font-extrabold text-[#0D0F1A] leading-[1.05]">
                Devenez partenaire<br /><span className="text-[#E91E8C]">Imoni.</span>
              </h1>
              <p className="text-base sm:text-xl font-semibold text-[#0D0F1A] mt-4 sm:mt-5 leading-snug">
                Soyez visible au bon moment<br />du projet immobilier.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-3 pt-1 pb-1 sm:pt-2 sm:pb-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 sm:gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(233,30,140,0.1)", border: "1px solid rgba(233,30,140,0.3)" }}>
                    <svg className="w-2.5 h-2.5 text-[#E91E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-gray-700 text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #E91E8C, #FF4D6D)" , boxShadow: "0 8px 24px rgba(233,30,140,0.35)" }}
              >
                Devenir partenaire
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#en-savoir-plus"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0F1A]/70 hover:text-[#0D0F1A] transition-colors"
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
          </div>

          {/* Droite — vide, l'image est positionnée en absolu */}
          <div />

        </div>
      </div>
    </section>
  );
}
