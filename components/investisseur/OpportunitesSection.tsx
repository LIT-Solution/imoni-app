"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    title: "Les professionnels vous proposent les bons biens",
    desc: "Agents immobiliers, mandataires et vendeurs voient votre profil et peuvent vous proposer des biens qui correspondent à ce que vous cherchez vraiment.",
    image: "/investisseur/image-1.webp",
  },
  {
    title: "Des opportunités en avant-première",
    desc: "Accédez à des biens avant leur diffusion publique et prenez une longueur d'avance sur le marché.",
    image: "/investisseur/image-2.webp",
  },
  {
    title: "Gagnez du temps, concentrez-vous sur les bons projets",
    desc: "Fini les recherches diffuses et le temps qui ne correspond pas à vos critères. Imoni filtre pour vous.",
    image: "/investisseur/image-3.webp",
  },
  {
    title: "Multipliez les affaires, développez votre stratégie",
    desc: "Plus d'opportunités qualifiées = plus de projets rentables et un portefeuille qui se développe.",
    image: "/investisseur/image-4.webp",
  },
];

export default function OpportunitesSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full opacity-10 blur-xl pointer-events-none bg-[#8B5CF6]" />
      <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full opacity-8 blur-xl pointer-events-none bg-[#8B5CF6]" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-scale text-center mb-16">
          <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-[0.2em] uppercase mb-4">Pourquoi Imoni ?</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0F1A] leading-tight">
            Des opportunités ciblées,{" "}
            <span className="text-[#8B5CF6]">avant les autres</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-linear-to-b from-[#8B5CF6]/0 via-[#8B5CF6]/30 to-[#8B5CF6]/0 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={step.title} className={`reveal reveal-delay-${i + 1} relative`}>
                  {/* Dot sur la ligne */}
                  <div className="absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full bg-[#8B5CF6] z-10 hidden lg:flex items-center justify-center" style={{ boxShadow: "0 0 0 6px rgba(139,92,246,0.15)" }}>
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${isLeft ? "" : "direction-rtl"}`}>
                    {/* Texte */}
                    <div className={`${isLeft ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12 lg:col-start-2"}`}>
                      <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-widest uppercase mb-3">
                        0{i + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D0F1A] mb-3 leading-tight">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Image */}
                    <div className={`mt-6 lg:mt-0 ${isLeft ? "lg:pl-12 lg:col-start-2" : "lg:pr-12 lg:col-start-1 lg:row-start-1"}`}>
                      <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-4/3" style={{ border: "1.5px solid rgba(139,92,246,0.15)" }}>
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          quality={100}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
