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
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,15,26,0.97) 0%, rgba(13,15,26,0.9) 35%, rgba(13,15,26,0.4) 60%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-20 2xl:px-56 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="lg:max-w-[55%] 2xl:max-w-[50%]">

          {/* Gauche — texte */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-6">
            <div className="reveal-left">
              <span className="inline-flex items-center flex-wrap gap-1 sm:gap-2 border border-[#8B5CF6]/40 text-[10px] sm:text-[11px] px-3 sm:px-4 py-1.5 rounded-full tracking-wider sm:tracking-widest uppercase" style={{ background: "rgba(139,92,246,0.08)" }}>
                <span className="text-white/50 font-medium">Pour investisseurs,</span>
                <span className="text-white font-bold">marchands de biens et promoteurs</span>
              </span>
            </div>

            <div className="reveal-left reveal-delay-1">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.4rem] 2xl:text-[3.4rem] font-extrabold text-white leading-[1.08]">
                Votre stratégie
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.4rem] 2xl:text-[3.4rem] font-extrabold text-white leading-[1.08] mt-1">
                mérite les bonnes
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.4rem] 2xl:text-[3.4rem] font-extrabold leading-[1.08] mt-1">
                <span className="text-[#8B5CF6]">opportunités.</span>
              </h1>
            </div>

            <p className="reveal-left reveal-delay-2 text-white/50 text-sm sm:text-base leading-relaxed max-w-lg italic">
              Pour la première fois en France, une application de rencontre immobilière qui vous est dédiée, avec un enregistrement complet de <span className="text-[#8B5CF6] font-semibold underline underline-offset-4 decoration-[#8B5CF6]">qui vous êtes</span> et de votre <span className="text-[#8B5CF6] font-semibold">stratégie d&apos;investissement</span>.
            </p>

            <div className="reveal-left reveal-delay-2 relative inline-flex items-center w-fit">
              <div className="absolute left-9 inset-y-0 right-0 rounded-r-2xl" style={{ background: "rgba(139,92,246,0.06)", border: "1.5px solid rgba(139,92,246,0.3)", borderLeft: "none" }} />
              <div className="relative z-10 w-14 h-14 sm:w-18 sm:h-18 rounded-full flex items-center justify-center shrink-0" style={{ border: "2px solid #8B5CF6", background: "#0D0F1A" }}>
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  <circle cx="18" cy="6" r="3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 4.5v3m1.5-1.5h-3" />
                </svg>
              </div>
              <div className="relative z-0 pl-4 sm:pl-5 pr-4 sm:pr-6 py-3">
                <p className="text-white text-xs sm:text-sm font-bold">Ne cherchez plus.</p>
                <p className="text-white/60 text-xs sm:text-sm"><span className="text-[#8B5CF6] font-semibold">Soyez trouvé</span> par les meilleures opportunités.</p>
              </div>
            </div>

            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3">
              <a href="#" className="group inline-flex items-center justify-center gap-3 bg-[#8B5CF6] text-white font-semibold text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 hover:bg-[#7C3AED]">
                <span>Créer mon profil investisseur</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-medium text-sm sm:text-base px-5 sm:px-7 py-3 sm:py-3.5 rounded-full hover:border-white/40 transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Voir comment ça marche
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Droite — homme + téléphone calés en bas de section */}
      <div className="reveal-right reveal-delay-2 hidden lg:block absolute bottom-0 lg:right-[28%] 2xl:right-[30%]">
        <div className="relative">
          <Image
            src="/investisseur/hero_sir.webp"
            alt="Investisseur"
            width={600}
            height={750}
            className="object-contain lg:w-100 2xl:w-150"
            priority
            style={{ height: "auto", maxWidth: "100%" }}
          />
          <div className="absolute lg:-right-52 2xl:-right-80 -bottom-8 lg:w-100 2xl:w-140">
            <Image
              src="/investisseur/hero_phone.webp"
              alt="Application Imoni - Profil investisseur"
              width={560}
              height={1120}
              className="drop-shadow-2xl"
              priority
              style={{ width: "100%", height: "auto", maxWidth: "100%" }}
            />

            {/* Badge "Une première en France" */}
            <div className="absolute lg:bottom-8 2xl:bottom-10 lg:-right-24 2xl:-right-40 lg:w-52 lg:h-52 2xl:w-72 2xl:h-72 rounded-full flex flex-col items-center justify-center text-center -z-10" style={{ background: "rgba(139,92,246,0.15)", border: "2px solid #8B5CF6", backdropFilter: "blur(12px)" }}>
              <svg className="w-5 h-5 2xl:w-8 2xl:h-8 text-[#F59E0B] mb-1 2xl:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 9.75h-1.5A3.375 3.375 0 007.5 13.5v.75m9 4.5l1.5-6m-12 6l-1.5-6m3-3.75h6" />
              </svg>
              <p className="text-white lg:text-xs 2xl:text-lg font-extrabold uppercase tracking-wider leading-tight">Une première<br />en France</p>
              <p className="text-white lg:text-[10px] 2xl:text-base mt-1 2xl:mt-2 leading-tight px-3 2xl:px-5 lg:hidden 2xl:block">Un espace dédié aux investisseurs, marchands de biens et promoteurs.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
