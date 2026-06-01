"use client";
import { useReveal } from "@/hooks/useReveal";

const innovations = [
  {
    number: "1",
    title: "Géolocalisation en temps réel",
    description:
      "Activez votre position et découvrez instantanément les biens correspondant à votre recherche là où vous êtes. Une exclusivité Imoni.",
    gradient: "from-[#E91E8C] to-[#FF4D6D]",
    placeholder: "bg-linear-to-br from-pink-400 to-pink-600",
  },
  {
    number: "2",
    title: "Offre d'achat électronique sécurisée",
    description:
      "Achetez entre particuliers en toute sérénité grâce à une offre d'achat électronique claire et exploitable par votre notaire.",
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
    placeholder: "bg-linear-to-br from-blue-400 to-blue-600",
  },
  {
    number: "3",
    title: "Dossier notaire 3 à 4 fois plus rapide",
    description:
      "Imoni vous accompagne, acheteur et vendeur, dans la constitution du dossier notaire pour obtenir un rendez-vous 3 à 4 fois plus rapidement.",
    gradient: "from-[#10B981] to-[#059669]",
    placeholder: "bg-linear-to-br from-emerald-400 to-emerald-600",
  },
  {
    number: "4",
    title: "Votre coach vocal immobilier 24h/24",
    description:
      "Votre coach vous accompagne à chaque étape, répond à vos questions et vous aide à trouver le point d'équilibre entre acheteur et vendeur.",
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
    placeholder: "bg-linear-to-br from-purple-400 to-purple-600",
  },
];

export default function InnovationsSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-[#E91E8C] text-xs font-bold tracking-widest uppercase mb-4">
            Les innovations Imoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0D0F1A] leading-tight mb-4">
            4 expériences{" "}
            <span className="bg-linear-to-r from-[#E91E8C] via-[#FF4D6D] to-[#FF8C00] bg-clip-text text-transparent">
              inédites
            </span>{" "}
            en France
          </h2>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
            Imoni réinvente chaque étape de votre parcours immobilier avec des
            fonctionnalités uniques.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovations.map((item, i) => (
            <div
              key={item.number}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
            >
              {/* Phone mockup placeholder */}
              <div className={`relative h-52 ${item.placeholder} flex items-center justify-center`}>
                <div className="w-28 h-48 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <span className="text-white/60 text-xs text-center px-2">
                    Visuel à venir
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`w-8 h-8 rounded-full bg-linear-to-br ${item.gradient} text-white text-sm font-bold flex items-center justify-center shrink-0`}
                  >
                    {item.number}
                  </span>
                  <h3 className="font-bold text-[#0D0F1A] text-[15px] leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
