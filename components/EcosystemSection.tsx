"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.05 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const Check = ({ color }: { color: string }) => (
    <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
      <path d="M5 10l3.5 3.5L15 7" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titre */}
        <div className="reveal text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0D0F1A] leading-tight">
            Un écosystème immobilier{" "}
            <span className="bg-gradient-to-r from-[#E91E8C] via-[#FF4D6D] to-[#FF8C00] bg-clip-text text-transparent">collaboratif</span>
            <br />
            au service de tous les acteurs
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {/* Card 1 — Acheteur / Vendeur */}
          <div className="reveal reveal-delay-1 bg-pink-50 border border-pink-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 shadow">
                <Image src="/portrait/femme1.webp" alt="Acheteur / Vendeur" width={200} height={200} className="object-cover object-top w-full h-full" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E91E8C] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
            </div>

            <h3 className="font-extrabold text-[#0D0F1A] text-2xl leading-tight">Acheteur / Vendeur</h3>

            <p className="text-[#E91E8C] text-lg font-semibold mt-1 mb-2">Particulier acheteur</p>
            <p className="text-[#0D0F1A] text-sm leading-relaxed mb-3">Trouvez le bien qui vous correspond et réalisez votre projet en toute sérénité.</p>
            <ul className="space-y-1.5 mb-5">
              {["Recherche simplifiée et personnalisée", "Accompagnement à chaque étape", "Offres exclusives en avant-première", "Échanges sécurisés", "Service 100% gratuit"].map(f => (
                <li key={f} className="flex items-start gap-2"><Check color="#E91E8C" /><span className="text-gray-600 text-sm leading-snug">{f}</span></li>
              ))}
            </ul>

            <p className="text-[#E91E8C] text-lg font-semibold mb-2">Particulier vendeur</p>
            <p className="text-[#0D0F1A] text-sm leading-relaxed mb-3">Vendez votre bien rapidement et au meilleur prix.</p>
            <ul className="space-y-1.5">
              {["Estimation offerte et immédiate", "Diffusion maximale de votre annonce", "Accompagnement personnalisé", "Visibilité auprès d'acheteurs qualifiés", "Service 100% gratuit"].map(f => (
                <li key={f} className="flex items-start gap-2"><Check color="#E91E8C" /><span className="text-gray-600 text-sm leading-snug">{f}</span></li>
              ))}
            </ul>

            <div className="mt-auto pt-6 flex flex-col gap-2">
              <button className="w-full bg-[#E91E8C] hover:bg-[#C4177A] text-white text-sm font-semibold py-2.5 rounded-md flex items-center justify-between px-4 transition-colors">
                En savoir plus acheteur <span>→</span>
              </button>
              <button className="w-full border border-[#E91E8C] hover:bg-[#E91E8C]/8 text-[#E91E8C] text-sm font-semibold py-2.5 rounded-md flex items-center justify-between px-4 transition-colors">
                En savoir plus vendeur <span>→</span>
              </button>
            </div>
          </div>

          {/* Card 2 — Pro de l'immo */}
          <div className="reveal reveal-delay-2 bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 shadow">
                <Image src="/portrait/homme2.webp" alt="Pro de l'immo" width={200} height={200} className="object-cover object-top w-full h-full" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#1D6FEB] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
            </div>

            <h3 className="font-extrabold text-[#0D0F1A] text-2xl leading-tight">Pro de l&apos;immo</h3>
            <p className="text-[#3B82F6] text-lg font-semibold mt-1 mb-2">Agent immobilier</p>
            <p className="text-[#0D0F1A] text-sm leading-relaxed mb-3 min-h-[5rem]">Développez votre activité grâce à une mise en relation intelligente avec des acquéreurs qualifiés.</p>

            <ul className="space-y-3">
              {["Accédez à des acquéreurs qualifiés", "Proposez vos biens en avant-première", "Soyez contacté par des vendeurs", "Développez votre portefeuille", "Améliorez votre notoriété"].map(f => (
                <li key={f} className="flex items-start gap-2"><Check color="#3B82F6" /><span className="text-gray-600 text-sm leading-snug">{f}</span></li>
              ))}
            </ul>

            <div className="mt-auto pt-6 flex flex-col justify-center min-h-[7rem]">
              <button className="w-full bg-[#1D6FEB] hover:bg-[#1558C8] text-white text-sm font-semibold py-2.5 rounded-md flex items-center justify-between px-4 transition-colors">
                En savoir plus <span>→</span>
              </button>
            </div>
          </div>

          {/* Card 3 — Investisseur */}
          <div className="reveal reveal-delay-3 bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 shadow">
                <Image src="/portrait/homme.webp" alt="Investisseur" width={200} height={200} className="object-cover object-top w-full h-full" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
            </div>

            <h3 className="font-extrabold text-[#0D0F1A] text-2xl leading-tight">Investisseur /</h3>
            <p className="text-[#10B981] text-lg font-semibold mt-1 mb-2">Marchand de biens</p>
            <p className="text-[#0D0F1A] text-sm leading-relaxed mb-3 min-h-[5rem]">Trouvez les meilleures opportunités avant les autres et maximisez la rentabilité.</p>

            <ul className="space-y-3">
              {["Détection d'opportunités", "Biens alignés avec votre stratégie", "Alertes personnalisées", "Analyse de potentiel", "Gain de temps et rentabilité"].map(f => (
                <li key={f} className="flex items-start gap-2"><Check color="#10B981" /><span className="text-gray-600 text-sm leading-snug">{f}</span></li>
              ))}
            </ul>

            <div className="mt-auto pt-6 flex flex-col justify-center min-h-[7rem]">
              <button className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold py-2.5 rounded-md flex items-center justify-between px-4 transition-colors">
                En savoir plus <span>→</span>
              </button>
            </div>
          </div>

          {/* Card 4 — Autres professionnels */}
          <div className="reveal reveal-delay-4 bg-purple-50 border border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 shadow">
                <Image src="/portrait/femme2.webp" alt="Autres professionnels" width={200} height={200} className="object-cover object-top w-full h-full" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#7C22E8] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
            </div>

            <h3 className="font-extrabold text-[#0D0F1A] text-2xl leading-tight">Autres professionnels</h3>
            <p className="text-[#8B5CF6] text-lg font-semibold mt-1 mb-2">de l&apos;immobilier</p>
            <p className="text-[#0D0F1A] text-sm leading-relaxed mb-3 min-h-[5rem]">Intervenez au bon moment auprès d'utilisateurs qualifiés grâce à des notifications.</p>

            <ul className="space-y-3">
              {["Notifications selon l'avancement", "Mise en relation au moment opportun", "Développement de votre visibilité", "Réseau collaboratif et intelligent", "Outils de gestion dédiés"].map(f => (
                <li key={f} className="flex items-start gap-2"><Check color="#8B5CF6" /><span className="text-gray-600 text-sm leading-snug">{f}</span></li>
              ))}
            </ul>

            <div className="mt-auto pt-6 flex flex-col justify-center min-h-[7rem]">
              <button className="w-full bg-[#7C22E8] hover:bg-[#6617CC] text-white text-sm font-semibold py-2.5 rounded-md flex items-center justify-between px-4 transition-colors">
                En savoir plus <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Barre bas */}
        <div className="reveal mt-12 bg-gray-50 rounded-2xl border border-gray-100 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-14 h-14 rounded-full bg-[#E91E8C] flex items-center justify-center shrink-0">
              <Image src="/icones/poignée-de-mai_.svg" alt="" width={64} height={64} className="brightness-0 invert" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              <span className="font-semibold text-[#0D0F1A]">Imoni connecte et simplifie l&apos;immobilier</span> pour que chaque projet se réalise plus vite, en toute confiance.
            </p>
          </div>

          <div className="flex items-center gap-0">
            <div className="flex items-start gap-2 px-6">
              <svg className="w-8 h-8 text-[#E91E8C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <div>
                <p className="text-[#0D0F1A] text-sm font-bold leading-tight">Sécurisé</p>
                <p className="text-gray-400 text-xs leading-tight">Transactions et données protégées</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200 shrink-0" />
            <div className="flex items-start gap-2 px-6">
              <Image src="/icones/user-group.svg" alt="" width={32} height={32} className="shrink-0 mt-0.5" style={{ filter: "invert(19%) sepia(92%) saturate(4000%) hue-rotate(310deg) brightness(90%) contrast(95%)" }} />
              <div>
                <p className="text-[#0D0F1A] text-sm font-bold leading-tight">Collaboratif</p>
                <p className="text-gray-400 text-xs leading-tight">Une plateforme ouverte et connectée</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-200 shrink-0" />
            <div className="flex items-start gap-2 px-6">
              <svg className="w-8 h-8 text-[#E91E8C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              <div>
                <p className="text-[#0D0F1A] text-sm font-bold leading-tight">100% Gratuit</p>
                <p className="text-gray-400 text-xs leading-tight">Des services sans frais pour tous</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
