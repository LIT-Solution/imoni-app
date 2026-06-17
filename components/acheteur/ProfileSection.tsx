"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const benefits = [
  {
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    label: "Mettez votre profil en avant",
    desc: "Présentez votre projet, vos critères et votre motivation pour inspirer confiance.",
    color: "#8B5CF6",
  },
  {
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    label: "Accédez à des biens avant tout le monde",
    desc: "Soyez parmi les premiers informés de biens pas encore diffusés sur le marché.",
    color: "#0D0F1A",
  },
  {
    icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    label: "Découvrez des opportunités même hors budget",
    desc: "Un vendeur peut être séduit par votre profil et vous proposer son bien.",
    color: "#E91E8C",
    filled: true,
  },
  {
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Des propositions en off-market",
    desc: "Les professionnels vous partagent des opportunités et baisses de prix exclusives.",
    color: "#8B5CF6",
  },
];

export default function ProfileSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section
      ref={sectionRef}
      className="pt-16 pb-10 lg:pt-20 lg:pb-12 bg-[#F8F4FF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Colonne gauche — visuel */}
          <div className="reveal-left relative flex items-center justify-center order-2 lg:order-1 lg:-translate-x-8">
            <div className="relative w-full max-w-lg">
              <Image
                src="/acheteur/section-profile.webp"
                alt="Profil acheteur Imoni"
                width={400}
                height={700}
                quality={100}
                className="w-full h-auto rounded-3xl shadow-2xl shadow-purple-200/60 object-contain"
              />
            </div>
            <div className="absolute inset-0 -z-10 blur-3xl opacity-25 rounded-full"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #E91E8C, #FF8C00)" }}
            />
          </div>

          {/* Colonne droite — texte */}
          <div className="reveal-right space-y-8 order-1 lg:order-2">
            <div>
              <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-widest uppercase mb-4">
                La rencontre immobilière
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0D0F1A] leading-tight">
                Votre profil attire les{" "}
                <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                  bonnes opportunités
                </span>
              </h2>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Imoni inverse la logique de la recherche immobilière. Vous n&apos;êtes plus celui qui cherche — vous devenez celui qu&apos;on trouve. Créez votre profil acheteur et laissez vendeurs et professionnels venir à vous.
            </p>

            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${b.color}15`, border: `1.5px solid ${b.color}30` }}
                  >
                    <svg className="w-5 h-5" fill={b.filled ? b.color : "none"} stroke={b.filled ? "none" : b.color} viewBox="0 0 24 24" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0D0F1A] font-semibold text-base leading-tight">{b.label}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mt-0.5">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="group inline-flex items-center gap-3 bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30"
            >
              Créer mon profil gratuitement
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
