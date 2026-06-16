"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const items = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Partout en France",
    desc: "Accédez à des professionnels et biens qualifiés dans toutes les régions.",
  },
  {
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Un réseau de confiance",
    desc: "Des milliers de professionnels vérifiés pour vous proposer les meilleurs biens.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Sécurité & confidentiel",
    desc: "Vos données sont protégées et uniquement partagées avec des professionnels qualifiés.",
  },
  {
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    title: "Soyez parmi les premiers",
    desc: "Faites partie des premiers pour profiter des meilleures affaires.",
  },
];

export default function InvestisseurCta() {
  const sectionRef = useReveal(0.1);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = itemsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Blobs décoratifs */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-10 blur-xl pointer-events-none bg-[#8B5CF6]" />
      <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-[0.08] blur-xl pointer-events-none bg-[#8B5CF6]" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #8B5CF6 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />

      <div className="relative max-w-7xl mx-auto">

        {/* Card CTA */}
        <div
          className="reveal-scale rounded-3xl relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1E1040 0%, #0D0F1A 50%, #1a0830 100%)", boxShadow: "0 24px 80px rgba(139,92,246,0.25)", minHeight: "220px" }}
        >
          {/* Fond image hero visible à droite */}
          <div className="absolute inset-0 pointer-events-none">
            <Image src="/investisseur/hero_fond.webp" alt="" fill quality={90} unoptimized className="object-cover object-center" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0D0F1A 0%, #0D0F1A 35%, rgba(13,15,26,0.75) 60%, rgba(13,15,26,0.2) 100%)" }} />
          </div>

          {/* Contenu */}
          <div className="relative z-10 flex items-end gap-8 px-12 py-12 lg:px-16">

            {/* Gauche — titre + sous-titre */}
            <div className="shrink-0">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                Prêt à recevoir les meilleures<br />opportunités immobilières ?
              </h2>
              <p className="text-white/45 text-base mt-2 leading-relaxed">Téléchargez l'application et créez votre<br className="hidden lg:block" />profil investisseur gratuitement.</p>
            </div>

            {/* Flèche courbée */}
            <div className="hidden lg:flex shrink-0 self-end mb-1 -ml-10">
              <svg width="72" height="48" viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18 Q36 52 68 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <path d="M62 30 L68 18 L56 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>

            {/* Centre — bouton violet + stores */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl" style={{ background: "linear-gradient(135deg, #7C3AED, #8B5CF6)", boxShadow: "0 8px 28px rgba(139,92,246,0.45)" }}>
                <svg className="w-7 h-7 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                <div>
                  <p className="text-white font-bold text-base leading-tight">Télécharger l'application</p>
                  <p className="text-white/60 text-sm leading-tight">pour créer votre profil investisseur<br />gratuitement</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-2.5 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-900 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <div>
                    <p className="text-[9px] text-gray-400 leading-none">Télécharger dans</p>
                    <p className="text-xs font-bold leading-none mt-0.5">l'App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2.5 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-900 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.22.98.14l12.47-7.19-2.79-2.79-10.66 9.84zM.89 1.43C.34 1.76 0 2.36 0 3.08v17.84c0 .72.34 1.32.89 1.65l.09.06 9.99-9.99v-.23L.98 1.37l-.09.06zM20.56 10.29l-2.84-1.64-3.16 3.17 3.16 3.16 2.87-1.66c.82-.47.82-1.56-.03-2.03zM3.18.24l12.47 7.19-2.79 2.79L2.2.38c.3-.17.66-.2.98-.14z"/></svg>
                  <div>
                    <p className="text-[9px] text-gray-400 leading-none uppercase tracking-wide">Disponible sur</p>
                    <p className="text-xs font-bold leading-none mt-0.5">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Droite — téléphone */}
            <div className="hidden lg:block shrink-0 relative" style={{ width: "200px", marginRight: "-16px", marginLeft: "20px", marginBottom: "-60px" }}>
              <Image
                src="/investisseur/phone_cta_inv.webp"
                alt="App Imoni"
                width={200}
                height={365}
                quality={100}
                unoptimized
                style={{ width: "200px", height: "auto" }}
                className="drop-shadow-2xl"
              />
            </div>

          </div>
        </div>

        {/* Trait vertical reliant le CTA aux pancartes */}
        <div className="flex justify-center">
          <div
            style={{
              width: "1.5px",
              height: "52px",
              background: "linear-gradient(to bottom, rgba(139,92,246,0.6), rgba(139,92,246,0.15))",
              transformOrigin: "top",
              transform: revealed ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>

        {/* 4 pancartes — max-w-5xl centré indépendamment */}
        <div className="max-w-5xl mx-auto">
        <div ref={itemsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl p-5"
              style={{
                boxShadow: "0 2px 20px rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.15)",
                transformOrigin: "top center",
                transform: revealed ? "scaleY(1)" : "scaleY(0)",
                opacity: revealed ? 1 : 0,
                transition: `transform 0.55s cubic-bezier(0.34, 1.4, 0.64, 1) ${0.3 + i * 0.13}s, opacity 0.35s ease ${0.3 + i * 0.13}s`,
              }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "rgba(139,92,246,0.1)", border: "1.5px solid rgba(139,92,246,0.25)" }}>
                <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-1">{item.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  );
}
