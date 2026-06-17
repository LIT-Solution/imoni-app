"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const innovations = [
  {
    number: "1",
    title: "Géolocalisation en temps réel",
    description:
      "Activez votre position et découvrez instantanément les biens correspondant à votre recherche là où vous êtes. Une exclusivité Imoni.",
    image: "/acheteur/match_tel.webp",
    gradient: "from-[#8B5CF6] to-[#6D28D9]",
    color: "#8B5CF6",
    bgFrom: "#F5F0FF",
    bgTo: "#EDE5FF",
  },
  {
    number: "2",
    title: "Offre d'achat électronique sécurisée",
    description:
      "Achetez entre particuliers en toute sérénité grâce à une offre d'achat électronique claire et exploitable par votre notaire.",
    image: "/acheteur/offre_achat.webp",
    gradient: "from-[#E91E8C] to-[#C4177A]",
    color: "#E91E8C",
    bgFrom: "#FFF0F7",
    bgTo: "#FFE0EF",
  },
  {
    number: "3",
    title: "Dossier notaire 3 à 4 fois plus rapide",
    description:
      "Imoni vous accompagne, acheteur et vendeur, dans la constitution du dossier notaire pour obtenir un rendez-vous 3 à 4 fois plus rapidement.",
    image: "/acheteur/dossier_notaire.webp",
    gradient: "from-[#FF8C00] to-[#E67600]",
    color: "#FF8C00",
    bgFrom: "#FFF7ED",
    bgTo: "#FFEDD5",
  },
  {
    number: "4",
    title: "Votre coach vocal immobilier 24h/24",
    description:
      "Votre coach vous accompagne à chaque étape, répond à vos questions et vous aide à trouver le point d'équilibre entre acheteur et vendeur.",
    image: "/acheteur/coach_vocal.webp",
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
    color: "#3B82F6",
    bgFrom: "#EFF6FF",
    bgTo: "#DBEAFE",
  },
];

const CARD_GAP = 16;

export default function InnovationsSection() {
  const titleRef = useReveal(0.05);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [cardWidth, setCardWidth] = useState(700);
  const [peek, setPeek] = useState(60);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardWidth(w - 40);
        setPeek(20);
      } else if (w < 1024) {
        setCardWidth(Math.min(600, w - 80));
        setPeek(40);
      } else {
        setCardWidth(700);
        setPeek(60);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / sectionHeight)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const totalCards = innovations.length;
  const maxOffset = (totalCards - 1) * (cardWidth + CARD_GAP);
  const translateX = -(progress * maxOffset);

  return (
    <section ref={titleRef} className="bg-white">
      <div ref={sectionRef} style={{ height: `${totalCards * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          {/* Background décoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-60 sm:w-125 h-60 sm:h-125 rounded-full bg-[#8B5CF6]/6 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-60 sm:w-125 h-60 sm:h-125 rounded-full bg-[#E91E8C]/5 blur-[120px]" />
            <div className="absolute top-[40%] left-[40%] w-40 sm:w-75 h-40 sm:h-75 rounded-full bg-[#FF8C00]/4 blur-[100px]" />
          </div>

          {/* Title */}
          <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
            <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3">
              Les innovations Imoni
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold text-[#0D0F1A] leading-tight mb-2 sm:mb-3">
              4 expériences{" "}
              <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                inédites
              </span>{" "}
              en France
            </h2>
            <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
              Imoni réinvente chaque étape de votre parcours immobilier avec des
              fonctionnalités uniques.
            </p>
          </div>

          {/* Cards track */}
          <div
            className="flex transition-none"
            style={{
              gap: `${CARD_GAP}px`,
              paddingLeft: `${peek}px`,
              transform: `translateX(${translateX}px)`,
            }}
          >
            {innovations.map((item, i) => {
              const cardCenter = i * (cardWidth + CARD_GAP);
              const currentCenter = progress * maxOffset;
              const distance = Math.abs(cardCenter - currentCenter);
              const isActive = distance < (cardWidth + CARD_GAP) / 2;
              const scale = isActive ? 1 : 0.92;
              const opacity = isActive ? 1 : 0.5;

              return (
                <div
                  key={item.number}
                  className="shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden relative transition-all duration-300"
                  style={{
                    width: `${cardWidth}px`,
                    background: `linear-gradient(135deg, ${item.bgFrom} 0%, ${item.bgTo} 100%)`,
                    boxShadow: isActive
                      ? `0 8px 32px ${item.color}20, 0 2px 8px rgba(0,0,0,0.06)`
                      : `0 2px 12px rgba(0,0,0,0.04)`,
                    transform: `scale(${scale})`,
                    opacity,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] min-h-48 sm:min-h-75">
                    {/* Text */}
                    <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center relative z-10">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <span
                          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-linear-to-br ${item.gradient} text-white text-base sm:text-lg font-bold flex items-center justify-center shrink-0 mt-0.5`}
                          style={{ boxShadow: `0 6px 16px ${item.color}40` }}
                        >
                          {item.number}
                        </span>
                        <h3 className="font-extrabold text-[#0D0F1A] text-lg sm:text-xl lg:text-2xl leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-[15px] leading-relaxed ml-12 sm:ml-15 max-w-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Phone */}
                    <div className="hidden lg:flex items-center justify-center relative">
                      <div
                        className="relative w-55 h-80"
                        style={{ filter: `drop-shadow(0 20px 40px ${item.color}30) drop-shadow(0 8px 16px rgba(0,0,0,0.15))` }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                          sizes="220px"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Decorative circles */}
                  <div
                    className="absolute -right-16 -bottom-16 w-40 sm:w-64 h-40 sm:h-64 rounded-full opacity-[0.07] pointer-events-none"
                    style={{ backgroundColor: item.color }}
                  />
                  <div
                    className="absolute -right-8 top-8 w-20 sm:w-32 h-20 sm:h-32 rounded-full opacity-[0.05] pointer-events-none"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-6">
            {innovations.map((item, i) => {
              const cardCenter = i * (cardWidth + CARD_GAP);
              const currentCenter = progress * maxOffset;
              const active = Math.abs(cardCenter - currentCenter) < (cardWidth + CARD_GAP) / 2;
              return (
                <div
                  key={i}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: active ? "28px" : "8px",
                    backgroundColor: active ? item.color : "#D1D5DB",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
