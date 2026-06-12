"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const avantages = [
  {
    icon: "/icones/acheteur.svg",
    filter: "brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(800%) hue-rotate(230deg)",
    color: "#8B5CF6",
    accent: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.2)",
    title: "Recevez des propositions en continu",
    desc: "Dès qu'un acquéreur correspond à votre bien, vous en êtes informé immédiatement.",
  },
  {
    icon: "/icones/acheteur.svg",
    filter: "brightness(0) saturate(100%) invert(25%) sepia(90%) saturate(1000%) hue-rotate(300deg)",
    color: "#E91E8C",
    accent: "rgba(233,30,140,0.1)",
    border: "rgba(233,30,140,0.2)",
    title: "Découvrez qui sont vos acquéreurs",
    desc: "Consultez les critères de recherche et le profil complet avant d'accepter une visite.",
  },
  {
    icon: "/icones/localisation.svg",
    filter: "brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(800%) hue-rotate(230deg)",
    color: "#8B5CF6",
    accent: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.2)",
    title: "Gérez votre géolocalisation",
    desc: "Choisissez d'afficher votre bien à l'adresse exacte ou à 500 m, 1 km ou 5 km.",
  },
  {
    icon: "/icones/cible.svg",
    filter: "brightness(0) saturate(100%) invert(25%) sepia(90%) saturate(1000%) hue-rotate(300deg)",
    color: "#E91E8C",
    accent: "rgba(233,30,140,0.1)",
    border: "rgba(233,30,140,0.2)",
    title: "Des matchs en temps réel",
    desc: "Un acquéreur peut vous trouver en passant à proximité si son profil correspond.",
  },
  {
    icon: "/icones/bouclier.svg",
    filter: "brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(800%) hue-rotate(230deg)",
    color: "#8B5CF6",
    accent: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.2)",
    title: "Plus de sécurité, plus d'engagement",
    desc: "Imoni vous fournit des outils fiables pour sécuriser chaque étape de votre vente.",
  },
];

const cardBase = { background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)", transition: "box-shadow 0.25s, border-color 0.25s" };

export default function AvantagesSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white -mt-8">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative flex min-h-[700px] lg:min-h-[780px]">

        {/* Gauche — image pleine hauteur */}
        <div className="hidden lg:block relative w-[42%] shrink-0">
          <Image
            src="/vendeur/vendu-vendeur.webp"
            alt="Bien vendu avec Imoni"
            fill
            quality={100}
            unoptimized
            className="object-cover"
            style={{ objectPosition: "center center" }}
            sizes="42vw"
          />
          {/* Dégradé de raccord à droite */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to left, white 0%, transparent 30%)" }} />
        </div>

        {/* Droite — titre + cartes */}
        <div className="relative z-10 w-full lg:w-[58%] py-16 lg:py-20 px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col justify-center">

          {/* Header */}
          <div className="reveal-scale mb-10">
            <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Vos avantages avec Imoni
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D0F1A] leading-tight">
              Maîtrisez votre vente,{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                en toute sérénité
              </span>
            </h2>
          </div>

          {/* Bento grid */}
          <div className="grid gap-3" style={{ gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto auto" }}>

            {/* Carte 01 — pleine largeur */}
            <div
              className="reveal-left reveal-delay-1 relative rounded-2xl p-5 overflow-hidden cursor-default"
              style={{ gridColumn: "1 / 3", ...cardBase }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 32px ${avantages[0].accent}`; e.currentTarget.style.borderColor = avantages[0].border; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"; }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: avantages[0].accent, border: `1px solid ${avantages[0].border}` }}>
                  <Image src={avantages[0].icon} alt="" width={22} height={22} style={{ filter: avantages[0].filter }} />
                </div>
                <div>
                  <p className="text-[#0D0F1A] font-bold leading-tight mb-1">{avantages[0].title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{avantages[0].desc}</p>
                </div>
              </div>
            </div>

            {/* Cartes 02–05 */}
            {avantages.slice(1).map((a, i) => (
              <div
                key={a.title}
                className={`reveal reveal-delay-${i + 2} relative rounded-2xl p-5 overflow-hidden cursor-default`}
                style={cardBase}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 32px ${a.accent}`; e.currentTarget.style.borderColor = a.border; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: a.accent, border: `1px solid ${a.border}` }}>
                  <Image src={a.icon} alt="" width={20} height={20} style={{ filter: a.filter }} />
                </div>
                <p className="text-[#0D0F1A] font-bold text-sm leading-tight mb-1">{a.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
