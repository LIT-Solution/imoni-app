"use client";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    num: "01",
    badge: "Avant de diffuser",
    title: "Vérifiez si des acquéreurs correspondent déjà à votre bien.",
    desc: "Évitez les frais inutiles et ciblez juste dès le départ.",
    color: "#8B5CF6",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    num: "02",
    badge: "Hors secteur ?",
    title: "Ne partagez plus vos honoraires par réflexe.",
    desc: "Imoni vous permet de trouver l'acquéreur avant de confier le bien à un confrère.",
    color: "#E91E8C",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    badge: "Plus d'opportunités",
    title: "Des profils actifs et motivés à la recherche de biens correspondant à leurs critères.",
    desc: "Saisissez plus d'opportunités, signez plus de mandats.",
    color: "#FF8C00",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function UtilisezImoniSection() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="bg-[#F8F4FF] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-[#8B5CF6] font-semibold text-sm uppercase tracking-widest mb-3">
            Utilisez Imoni à chaque opportunité
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D0F1A] leading-tight">
            Votre nouvelle méthode de travail
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] opacity-25" />

          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${i + 1} relative flex flex-col items-center text-center`}
              >
                {/* Number circle */}
                <div className="relative z-10 mb-8">
                  <div
                    className="w-32 h-32 rounded-full flex flex-col items-center justify-center border-2 bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{ borderColor: step.color, boxShadow: `0 8px 30px ${step.color}20` }}
                  >
                    <span className="text-3xl font-black" style={{ color: step.color }}>{step.num}</span>
                    <div className="mt-1" style={{ color: step.color }}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Arrow between circles (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[calc(50%+1rem)]">
                      <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Badge */}
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
                  style={{ backgroundColor: `${step.color}12`, color: step.color }}
                >
                  {step.badge}
                </span>

                {/* Text */}
                <h3 className="text-[#0D0F1A] font-bold text-lg leading-snug mb-3 max-w-xs">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
