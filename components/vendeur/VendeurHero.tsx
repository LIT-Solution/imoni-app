"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const purpleFilter = "brightness(0) saturate(100%) invert(40%) sepia(60%) saturate(800%) hue-rotate(230deg)";
const cardStyle = { background: "rgba(255,255,255,0.95)", border: "1px solid rgba(255,255,255,0.3)" };
const badgeStyle = { background: "white", border: "1.5px solid rgba(139,92,246,0.25)" };

function Card({ icon, title, desc, anim }: { icon: string; title: string; desc?: string; anim: string }) {
  return (
    <div className="relative rounded-2xl p-4 pt-6" style={{ ...cardStyle, animation: anim }}>
      <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full flex items-center justify-center shadow-sm" style={badgeStyle}>
        <Image src={icon} alt="" width={18} height={18} style={{ filter: purpleFilter }} />
      </div>
      <p className="text-[#0D0F1A] text-[11px] font-bold leading-tight mb-1">{title}</p>
      {desc && <p className="text-[10px] leading-snug" style={{ color: "rgba(0,0,0,0.45)" }}>{desc}</p>}
    </div>
  );
}

export default function VendeurHero() {
  const sectionRef = useReveal(0.1);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0F1A]"
    >
      <div className="absolute inset-0">
        <Image
          src="/vendeur/fond-vendeur.webp"
          alt=""
          fill
          quality={100}
          unoptimized
          className="object-cover object-center"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,15,26,0.97) 0%, rgba(13,15,26,0.9) 35%, rgba(13,15,26,0.4) 60%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)]">

          {/* Colonne gauche — texte */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-6 -mt-8 sm:-mt-16">
            <div className="reveal-left">
              <span className="inline-flex items-center border-2 border-[#F59E0B]/50 text-[#F59E0B] text-[10px] sm:text-[11px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase bg-[#F59E0B]/10">
                Pour les vendeurs
              </span>
            </div>

            <div className="reveal-left reveal-delay-1">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.6rem] font-extrabold text-white leading-[1.08]">
                Votre bien mérite
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[3.6rem] font-extrabold leading-[1.08]">
                <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                  la bonne rencontre.
                </span>
              </h1>
            </div>

            <p className="reveal-left reveal-delay-2 text-white/70 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed max-w-md">
              Imoni révolutionne la vente immobilière.
              <br className="hidden sm:block" />
              Rencontrez des acquéreurs qualifiés, gardez le contrôle
              <br className="hidden sm:block" />
              et vendez dans les meilleures conditions.
            </p>

            <ul className="reveal-left reveal-delay-3 space-y-2">
              {[
                "Acquéreurs qualifiés et sélectionnables",
                "Visibilité maîtrisée et confidentialité assurée",
                "Sécurité, engagement et gain de temps",
                "Point d'équilibre trouvé dans de meilleures conditions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 sm:gap-3 text-white/80 text-xs sm:text-sm">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth={1.5} strokeOpacity={0.4} />
                    <path d="M8 12l3 3 5-5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
              <li className="flex items-center gap-2 sm:gap-3 text-[#E91E8C] font-bold text-xs sm:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="#E91E8C" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12l3 3 5-5" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                100% gratuit, sans commission
              </li>
            </ul>

            <div className="reveal reveal-delay-4">
              <a
                href="#"
                className="group relative inline-flex items-center gap-3 bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <span className="relative z-10">Mettre mon bien en vente</span>
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </a>
            </div>
          </div>

          {/* Colonne droite — cartes | téléphone | cartes */}
          <div className="reveal-right reveal-delay-2 flex items-center justify-center gap-3">

            {/* Cartes gauche */}
            <div className="hidden lg:flex flex-col gap-4" style={{ width: "175px", flexShrink: 0 }}>
              <Card
                icon="/icones/acheteur.svg"
                title="Des acquéreurs qui vous correspondent en continu"
                anim="breathe1 4s ease-in-out infinite"
              />
              <Card
                icon="/icones/localisation.svg"
                title="Géolocalisation maîtrisée"
                desc="Adresse exacte ou rayon de 500 m à 5 km"
                anim="breathe3 4.5s ease-in-out infinite"
              />
            </div>

            {/* Téléphone */}
            <div style={{ filter: "drop-shadow(0 0 40px rgba(139,92,246,0.5))", flexShrink: 0 }} className="w-48 sm:w-60 lg:w-80 -translate-y-5 sm:-translate-y-10">
              <div style={{ transform: "rotateY(-4deg) rotateX(2deg)" }}>
                <Image
                  src="/vendeur/phone-vendeur.webp"
                  alt="Application Imoni vendeur"
                  width={1440}
                  height={2400}
                  quality={100}
                  unoptimized
                  className="w-full h-auto rounded-[2rem] sm:rounded-[3rem]"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=="
                />
              </div>
            </div>

            {/* Cartes droite */}
            <div className="hidden lg:flex flex-col gap-4" style={{ width: "175px", flexShrink: 0 }}>
              <Card
                icon="/icones/cible.svg"
                title="Des matchs géolocalisés en temps réel"
                desc="Un acquéreur peut vous trouver à proximité."
                anim="breathe2 5s ease-in-out infinite"
              />
              <Card
                icon="/icones/bouclier.svg"
                title="Des profils transparents et vérifiés"
                desc="Consultez le profil avant d'accepter une visite."
                anim="breathe4 5.5s ease-in-out infinite"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
