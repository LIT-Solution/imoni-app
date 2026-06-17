"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Acheteur",       href: "/acheteur" },
  { label: "Vendeur",        href: "/vendeur" },
  { label: "Investisseur",   href: "/investisseur" },
  { label: "Professionnels", href: "/professionnels" },
  { label: "Partenaires",    href: "/partenaires" },
  { label: "Contact",        href: "/contact" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [mounted,   setMounted]   = useState(false);
  const pathname = usePathname();
  const isLightHero = pathname === "/partenaires" || pathname === "/cgu" || pathname === "/confidentialite";

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloque le scroll body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Ferme le menu au changement de page
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled
            ? isLightHero
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-[#0D0F1A]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center relative z-[60]">
              <Image
                src={
                  menuOpen
                    ? "/imoni-logo.svg"
                    : isLightHero
                      ? "/partenaire/logo_imoni_noir.webp"
                      : "/imoni-logo.svg"
                }
                alt="Imoni"
                width={140}
                height={40}
                priority
                className="h-14.5 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-base font-medium transition-colors duration-200 pb-1 ${
                    pathname === item.href
                      ? isLightHero ? "text-[#0D0F1A]" : "text-white"
                      : isLightHero
                        ? "text-[#0D0F1A]/80 hover:text-[#E91E8C]"
                        : "text-white/90 hover:text-[#E91E8C]"
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00]" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="#download"
                className="hidden sm:inline-flex items-center bg-linear-to-r from-[#E91E8C] via-[#FF4D6D] to-[#FF8C00] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/30 hover:-translate-y-0.5 hover:opacity-90"
              >
                Télécharger l&apos;app
              </Link>

              {/* Bouton burger / croix */}
              <button
                className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center rounded-xl transition-colors"
                style={{ color: menuOpen ? "white" : "white" }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className="block h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
                    style={{
                      transform: menuOpen ? "translateY(9px) rotate(45deg)" : "none",
                      background: menuOpen || !isLightHero ? "white" : "#0D0F1A",
                    }}
                  />
                  <span
                    className="block h-0.5 rounded-full transition-all duration-300"
                    style={{
                      opacity: menuOpen ? 0 : 1,
                      background: menuOpen || !isLightHero ? "white" : "#0D0F1A",
                    }}
                  />
                  <span
                    className="block h-0.5 bg-current rounded-full transition-all duration-300 origin-center"
                    style={{
                      transform: menuOpen ? "translateY(-9px) rotate(-45deg)" : "none",
                      background: menuOpen || !isLightHero ? "white" : "#0D0F1A",
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu mobile plein écran */}
      <div
        className="fixed inset-0 z-[55] lg:hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          background: "#0D0F1A",
          clipPath: menuOpen ? "circle(200% at calc(100% - 36px) 36px)" : "circle(0% at calc(100% - 36px) 36px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* Décoration */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,140,0.15) 0%, transparent 70%)" }} />
        <div className="absolute bottom-20 left-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }} />

        {/* Liens */}
        <div className="flex flex-col justify-center flex-1 px-10 pt-24 pb-10 gap-1">
          {navLinks.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between py-4 border-b border-white/8 transition-all duration-200"
              style={{
                transitionDelay: menuOpen ? `${i * 60 + 100}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(24px)",
              }}
            >
              <span
                className={`text-3xl font-extrabold tracking-tight transition-colors ${
                  pathname === item.href ? "text-[#E91E8C]" : "text-white group-hover:text-[#E91E8C]"
                }`}
              >
                {item.label}
              </span>
              <svg
                className={`w-5 h-5 transition-all group-hover:translate-x-1 ${pathname === item.href ? "text-[#E91E8C]" : "text-white/30 group-hover:text-[#E91E8C]"}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          ))}
        </div>

        {/* CTA bas */}
        <div
          className="px-10 pb-12 transition-all duration-300"
          style={{
            transitionDelay: menuOpen ? "480ms" : "0ms",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <Link
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-white text-base transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #E91E8C, #FF4D6D, #FF8C00)", boxShadow: "0 8px 32px rgba(233,30,140,0.4)" }}
          >
            Télécharger l&apos;app
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
