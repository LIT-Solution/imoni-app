"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function InvestisseurHero() {
  const sectionRef = useReveal(0.1);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0F1A]"
    >
      <div className="absolute inset-0">
        <Image
          src="/investisseur/hero_fond.webp"
          alt=""
          fill
          quality={100}
          unoptimized
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,15,26,0.97) 0%, rgba(13,15,26,0.9) 35%, rgba(13,15,26,0.4) 60%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-56 pt-28 pb-16">
        <div className="lg:max-w-[50%]">

          {/* Gauche — texte */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="reveal-left">
              <span className="inline-flex items-center gap-2 border border-[#8B5CF6]/40 text-[11px] px-4 py-1.5 rounded-full tracking-widest uppercase" style={{ background: "rgba(139,92,246,0.08)" }}>
                <span className="text-white/50 font-medium">Pour investisseurs,</span>
                <span className="text-white font-bold">marchands de biens et promoteurs</span>
              </span>
            </div>

            <div className="reveal-left reveal-delay-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.08]">
                Votre stratégie
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.08] mt-1">
                mérite les bonnes
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] mt-1">
                <span className="text-[#8B5CF6]">opportunités.</span>
              </h1>
            </div>

            <p className="reveal-left reveal-delay-2 text-white/50 text-base leading-relaxed max-w-lg italic">
              Pour la première fois en France, une application de rencontre immobilière qui vous est dédiée, avec un enregistrement complet de <span className="text-[#8B5CF6] font-semibold underline underline-offset-4 decoration-[#8B5CF6]">qui vous êtes</span> et de votre <span className="text-[#8B5CF6] font-semibold">stratégie d&apos;investissement</span>.
            </p>

            <div className="reveal-left reveal-delay-2 relative inline-flex items-center w-fit">
              <div className="absolute left-9 inset-y-0 right-0 rounded-r-2xl" style={{ background: "rgba(139,92,246,0.06)", border: "1.5px solid rgba(139,92,246,0.3)", borderLeft: "none" }} />
              <div className="relative z-10 w-18 h-18 rounded-full flex items-center justify-center shrink-0" style={{ border: "2px solid #8B5CF6", background: "#0D0F1A" }}>
                <svg className="w-7 h-7 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  <circle cx="18" cy="6" r="3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 4.5v3m1.5-1.5h-3" />
                </svg>
              </div>
              <div className="relative z-0 pl-5 pr-6 py-3">
                <p className="text-white text-sm font-bold">Ne cherchez plus.</p>
                <p className="text-white/60 text-sm"><span className="text-[#8B5CF6] font-semibold">Soyez trouvé</span> par les meilleures opportunités.</p>
              </div>
            </div>

            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3">
              <a href="#" className="group inline-flex items-center justify-center gap-3 bg-[#8B5CF6] text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 hover:bg-[#7C3AED]">
                <span>Créer mon profil investisseur</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-medium text-base px-7 py-3.5 rounded-full hover:border-white/40 transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Voir comment ça marche
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Droite — homme + téléphone calés en bas de section */}
      <div className="reveal-right reveal-delay-2 hidden lg:block absolute bottom-0 right-[25%] xl:right-[30%]">
        <div className="relative">
          <Image
            src="/investisseur/hero_sir.webp"
            alt="Investisseur"
            width={600}
            height={750}
            quality={100}
            unoptimized
            className="object-contain"
            priority
            style={{ width: "600px", height: "auto" }}
          />
          <div className="absolute -right-80 -bottom-8 w-140">
            <Image
              src="/investisseur/hero_phone.webp"
              alt="Application Imoni - Profil investisseur"
              width={560}
              height={1120}
              quality={100}
              unoptimized
              className="drop-shadow-2xl"
              priority
              style={{ width: "100%", height: "auto" }}
            />

            {/* Badge "Une première en France" */}
            <div className="absolute bottom-10 -right-40 w-72 h-72 rounded-full flex flex-col items-center justify-center text-center -z-10" style={{ background: "rgba(139,92,246,0.15)", border: "2px solid #8B5CF6", backdropFilter: "blur(12px)" }}>
              <svg className="w-8 h-8 text-[#F59E0B] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 9.75h-1.5A3.375 3.375 0 007.5 13.5v.75m9 4.5l1.5-6m-12 6l-1.5-6m3-3.75h6" />
              </svg>
              <p className="text-white text-lg font-extrabold uppercase tracking-wider leading-tight">Une première<br />en France</p>
              <p className="text-white text-base mt-2 leading-tight px-5">Un espace dédié aux investisseurs, marchands de biens et promoteurs.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
