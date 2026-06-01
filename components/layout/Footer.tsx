"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FooterCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="relative bg-[#0D0F1A] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E91E8C]/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA compact */}
        <div className="pt-16 pb-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="reveal text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
              Prêt à vivre l&apos;expérience <span className="text-[#E91E8C]">Imoni</span> ?
            </h2>
            <p className="text-white/50 text-sm mb-5">
              Rejoignez l&apos;écosystème immobilier le plus intelligent et collaboratif.
            </p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-white/50 text-[9px] uppercase tracking-widest leading-none">Télécharger dans</p>
                  <p className="text-white font-semibold text-sm leading-tight">l&apos;App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white px-4 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76l11.08 11.76L3.18 23.76z" fill="#4285F4"/>
                  <path d="M20.5 10.5l-2.78-1.58-3.16 3.35 3.16 3.35 2.81-1.6A2 2 0 0020.5 10.5z" fill="#FBBC05"/>
                  <path d="M3.18.24l11.08 11.76-3.26 3.45L3.18.24z" fill="#34A853"/>
                  <path d="M3.18 23.76l7.82-15.31 3.26 3.45-11.08 11.76z" fill="#EA4335"/>
                </svg>
                <div>
                  <p className="text-white/50 text-[9px] uppercase tracking-widest leading-none">Disponible sur</p>
                  <p className="text-white font-semibold text-sm leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-2 flex flex-col items-center gap-2 shrink-0">
            <div className="w-24 h-24 bg-white rounded-xl p-2 shadow-2xl flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="0" y="0" width="40" height="40" fill="none" stroke="#0D0F1A" strokeWidth="4"/>
                <rect x="10" y="10" width="20" height="20" fill="#0D0F1A"/>
                <rect x="60" y="0" width="40" height="40" fill="none" stroke="#0D0F1A" strokeWidth="4"/>
                <rect x="70" y="10" width="20" height="20" fill="#0D0F1A"/>
                <rect x="0" y="60" width="40" height="40" fill="none" stroke="#0D0F1A" strokeWidth="4"/>
                <rect x="10" y="70" width="20" height="20" fill="#0D0F1A"/>
                <rect x="50" y="50" width="8" height="8" fill="#0D0F1A"/>
                <rect x="62" y="50" width="8" height="8" fill="#0D0F1A"/>
                <rect x="74" y="50" width="8" height="8" fill="#0D0F1A"/>
                <rect x="86" y="50" width="8" height="8" fill="#0D0F1A"/>
                <rect x="50" y="62" width="8" height="8" fill="#0D0F1A"/>
                <rect x="74" y="62" width="8" height="8" fill="#0D0F1A"/>
                <rect x="50" y="74" width="8" height="8" fill="#0D0F1A"/>
                <rect x="62" y="74" width="8" height="8" fill="#0D0F1A"/>
                <rect x="86" y="74" width="8" height="8" fill="#0D0F1A"/>
                <rect x="50" y="86" width="8" height="8" fill="#0D0F1A"/>
                <rect x="74" y="86" width="8" height="8" fill="#0D0F1A"/>
                <rect x="86" y="86" width="8" height="8" fill="#0D0F1A"/>
              </svg>
            </div>
            <p className="text-white/30 text-[10px]">Scanner pour télécharger</p>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/10" />

        {/* Colonnes de liens */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10 py-10">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-3">
              <Image src="/imoni-logo.svg" alt="Imoni" width={100} height={38} style={{ height: "auto" }} />
            </Link>
            <p className="text-white/35 text-xs leading-relaxed max-w-[220px]">
              L&apos;écosystème immobilier intelligent qui connecte vendeurs, acquéreurs et professionnels.
            </p>
            <div className="flex gap-2.5 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/8 hover:bg-[#E91E8C] flex items-center justify-center transition-colors duration-200">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/8 hover:bg-[#E91E8C] flex items-center justify-center transition-colors duration-200">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/8 hover:bg-[#E91E8C] flex items-center justify-center transition-colors duration-200">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/8 hover:bg-[#E91E8C] flex items-center justify-center transition-colors duration-200">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-white/40 hover:text-white text-sm transition-colors">Accueil</Link></li>
              <li><Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Acheteur</Link></li>
              <li><Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Vendeur</Link></li>
              <li><Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Pro de l&apos;immo</Link></li>
              <li><Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Autres pros</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">L&apos;application</h3>
            <ul className="space-y-2.5">
              <li><Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Pourquoi Imoni</Link></li>
              <li><Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Télécharger</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Ressources</h3>
            <ul className="space-y-2.5">
              <li><Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Centre d&apos;aide</Link></li>
              <li><Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-white/40 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                contact@imoni.fr
              </li>
              <li className="flex items-start gap-2 text-white/40 text-sm">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Bordeaux, Gironde
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">© 2025 Imoni. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-5 text-xs">
            <Link href="#" className="text-white/25 hover:text-white/50 transition-colors">Mentions légales</Link>
            <Link href="#" className="text-white/25 hover:text-white/50 transition-colors">Politique de confidentialité</Link>
            <Link href="#" className="text-white/25 hover:text-white/50 transition-colors">CGU</Link>
            <Link href="#" className="text-white/25 hover:text-white/50 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
