"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLightHero = pathname === "/partenaires" || pathname === "/cgu" || pathname === "/confidentialite";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          <Link href="/" className="shrink-0 flex items-center">
            <Image src={isLightHero ? "/partenaire/logo_imoni_noir.webp" : "/imoni-logo.svg"} alt="Imoni" width={140} height={40} priority className="h-14.5 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {[
              { label: "Acheteur", href: "/acheteur" },
              { label: "Vendeur", href: "/vendeur" },
              { label: "Investisseur", href: "/investisseur" },
              { label: "Professionnels", href: "/professionnels" },
              { label: "Partenaires", href: "/partenaires" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
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
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0D0F1A]/98 backdrop-blur-md pb-4 border-t border-white/10">
            {[
              { label: "Acheteur", href: "/acheteur" },
              { label: "Vendeur", href: "/vendeur" },
              { label: "Investisseur", href: "/investisseur" },
              { label: "Professionnels", href: "/professionnels" },
              { label: "Partenaires", href: "/partenaires" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href ? "text-[#E91E8C]" : "text-white/80 hover:text-[#E91E8C]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="#download"
                className="flex items-center justify-center gap-2 bg-[#E91E8C] text-white text-sm font-semibold px-4 py-3 rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                Télécharger l&apos;app
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
