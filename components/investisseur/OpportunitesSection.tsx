"use client";
import { useReveal } from "@/hooks/useReveal";

const cards = [
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "#8B5CF6",
    accent: "rgba(139,92,246,0.15)",
    title: "Les professionnels vous proposent les bons biens",
    desc: "Agents immobiliers, mandataires et vendeurs voient votre profil et peuvent vous proposer des biens qui correspondent à ce que vous cherchez vraiment.",
  },
  {
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    color: "#E91E8C",
    accent: "rgba(233,30,140,0.15)",
    title: "Des opportunités en avant-première",
    desc: "Accédez à des biens avant leur diffusion publique et prenez une longueur d'avance sur le marché.",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "#F59E0B",
    accent: "rgba(245,158,11,0.15)",
    title: "Gagnez du temps, concentrez-vous sur les bons projets",
    desc: "Fini les recherches diffuses et le temps qui ne correspond pas à vos critères. Imoni filtre pour vous.",
  },
  {
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    color: "#10B981",
    accent: "rgba(16,185,129,0.15)",
    title: "Multipliez les affaires, développez votre stratégie",
    desc: "Plus d'opportunités qualifiées = plus de projets rentables et un portefeuille qui se développe.",
  },
];

export default function OpportunitesSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#0D0F1A" }}>
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale text-center mb-14">
          <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-[0.2em] uppercase mb-4">Pourquoi Imoni ?</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Des opportunités ciblées,{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
              avant les autres
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-6 flex flex-col gap-4`}
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${card.color}66`; e.currentTarget.style.background = card.accent; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: card.accent, border: `1px solid ${card.color}30` }}>
                <svg className="w-6 h-6" fill="none" stroke={card.color} viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                </svg>
              </div>
              <p className="text-white font-bold text-sm leading-tight">{card.title}</p>
              <p className="text-white/50 text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
