"use client";
import { useReveal } from "@/hooks/useReveal";

export default function InvestisseurHero() {
  const sectionRef = useReveal(0.1);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D0F1A 0%, #0f1628 50%, #0D0F1A 100%)" }}
    >
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,140,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Gauche — texte */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="reveal-left">
              <span className="inline-flex items-center gap-2 border border-[#8B5CF6]/40 text-[#8B5CF6] text-[11px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase" style={{ background: "rgba(139,92,246,0.08)" }}>
                Pour investisseurs, marchands de biens et promoteurs
              </span>
            </div>

            <div className="reveal-left reveal-delay-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.08]">
                Votre stratégie mérite
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] mt-1">
                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                  les bonnes opportunités.
                </span>
              </h1>
            </div>

            <p className="reveal-left reveal-delay-2 text-white/65 text-base leading-relaxed max-w-lg">
              Pour la première fois en France, une application de rencontre immobilière qui vous est dédiée, avec un enregistrement complet de <span className="text-[#8B5CF6] font-semibold">qui vous êtes</span> et de votre <span className="text-[#8B5CF6] font-semibold">stratégie d'investissement</span>.
            </p>

            <div className="reveal-left reveal-delay-2 flex items-center gap-3 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#E91E8C] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Ne cherchez plus.</p>
                <p className="text-white/50 text-xs">Soyez <span className="text-[#E91E8C] font-semibold">trouvé</span> par les meilleures opportunités.</p>
              </div>
            </div>

            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3">
              <a href="#" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30">
                <span>Créer mon profil investisseur</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-medium text-base px-7 py-3.5 rounded-full hover:border-white/40 transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Voir comment ça marche
              </a>
            </div>
          </div>

          {/* Droite — mockup profil */}
          <div className="reveal-right reveal-delay-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative rounded-3xl p-6 w-[320px] sm:w-[360px]" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(20px)" }}>
                <div className="absolute -top-4 -right-4 rounded-2xl px-3 py-2 text-center" style={{ background: "linear-gradient(135deg, #8B5CF6, #E91E8C)", boxShadow: "0 8px 32px rgba(139,92,246,0.4)" }}>
                  <p className="text-white text-[9px] font-bold uppercase tracking-wider">Une première</p>
                  <p className="text-white text-[9px] font-bold uppercase tracking-wider">en France</p>
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#E91E8C] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Mon profil investisseur</p>
                    <p className="text-white/40 text-xs">Imoni Pro</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Mon identité", value: "Investisseur expérimenté", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                    { label: "Mon objectif", value: "Rendement locatif", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                    { label: "Ma stratégie", value: "Avec travaux", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
                    { label: "Mon budget", value: "350 000 à 700 000 €", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { label: "Secteurs recherchés", value: "Lyon, Bordeaux, Nantes", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(139,92,246,0.2)" }}>
                        <svg className="w-3.5 h-3.5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                      </div>
                      <div>
                        <p className="text-white/40 text-[10px]">{item.label}</p>
                        <p className="text-white text-xs font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex justify-between text-[10px] mb-1.5">
                    <span className="text-white/50">Profil complété</span>
                    <span className="text-[#10B981] font-bold">87%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#10B981]" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-8 rounded-2xl p-3 flex items-center gap-3 w-[220px]" style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", backdropFilter: "blur(12px)", animation: "breathe1 4s ease-in-out infinite" }}>
                <div className="w-8 h-8 rounded-xl bg-[#10B981]/30 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                </div>
                <div>
                  <p className="text-[#10B981] text-[10px] font-bold">Nouvelle opportunité</p>
                  <p className="text-white/70 text-[9px]">Immeuble • Lyon 3e • 480k€</p>
                </div>
              </div>

              <div className="absolute -top-4 -left-6 rounded-2xl p-3 flex items-center gap-2.5" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", backdropFilter: "blur(12px)", animation: "breathe3 5s ease-in-out infinite" }}>
                <div className="w-7 h-7 rounded-lg bg-[#8B5CF6]/30 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <p className="text-white text-[10px] font-semibold">12 matchs aujourd'hui</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-20 sm:h-28">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
