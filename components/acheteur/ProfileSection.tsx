"use client";
import { useReveal } from "@/hooks/useReveal";

const features = [
  {
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    title: "Mettez votre profil en avant",
    description:
      "Présentez votre projet, vos critères et votre motivation pour inspirer confiance.",
    color: "#8B5CF6",
    colorLight: "rgba(139, 92, 246, 0.08)",
    filled: false,
  },
  {
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    title: "Accédez à des biens avant tout le monde",
    description:
      "Soyez parmi les premiers informés de biens pas encore diffusés sur le marché.",
    color: "#0D0F1A",
    colorLight: "rgba(13, 15, 26, 0.06)",
    filled: false,
  },
  {
    icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    title: "Découvrez des opportunités même hors budget",
    description:
      "Un vendeur peut être séduit par votre profil et vous proposer son bien.",
    color: "#E91E8C",
    colorLight: "rgba(233, 30, 140, 0.08)",
    filled: true,
  },
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z",
    title: "Des propositions en off-market",
    description:
      "Les professionnels vous partagent des opportunités et baisses de prix exclusives.",
    color: "#8B5CF6",
    colorLight: "rgba(139, 92, 246, 0.08)",
    filled: false,
  },
];

export default function ProfileSection() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-widest uppercase mb-4">
            La rencontre immobilière
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0D0F1A] leading-tight mb-4">
            Votre profil attire les{" "}
            <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
              bonnes opportunités
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Imoni vous permet d&apos;être visible des vendeurs et professionnels
            pour accéder à des biens que vous ne trouverez nulle part ailleurs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`reveal reveal-delay-${i + 1} group relative bg-white rounded-2xl p-7 text-center transition-all duration-400 hover:-translate-y-2 cursor-default overflow-hidden`}
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 32px ${feat.colorLight}, 0 4px 16px rgba(0,0,0,0.08)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)";
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-10 rounded-b-full transition-all duration-400 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 group-hover:rounded-none"
                style={{ backgroundColor: feat.color }}
              />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: feat.color }}
              >
                {feat.filled ? (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={feat.icon} />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feat.icon} />
                  </svg>
                )}
              </div>

              <h3 className="font-bold text-[#0D0F1A] text-[15px] mb-2.5 leading-snug">
                {feat.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
