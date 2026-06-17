"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const plans = [
  {
    label: "Mandataire",
    price: 19,
    color: "#8B5CF6",
  },
  {
    label: "Agence",
    price: 120,
    color: "#E91E8C",
  },
];

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return { value, ref };
}

function PriceCard({ plan }: { plan: { label: string; price: number; color: string } }) {
  const { value, ref } = useCountUp(plan.price);
  return (
    <div ref={ref} className="flex-1 text-center border border-gray-200 rounded-2xl py-4 sm:py-6 px-3 sm:px-4">
      <p className="text-gray-500 font-semibold text-[10px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-3">
        {plan.label}
      </p>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0F1A]">{value}</span>
        <span className="text-base sm:text-lg font-semibold text-gray-400">&euro;</span>
        <span className="text-xs sm:text-sm text-gray-400">/ mois</span>
      </div>
      <span
        className="inline-block mt-2 sm:mt-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 sm:px-4 py-1 rounded-full text-white"
        style={{ backgroundColor: "#8B5CF6" }}
      >
        3 mois offerts
      </span>
    </div>
  );
}

export default function ProCta() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="bg-[#F8F4FF] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto px-4 sm:px-6">
        {/* Single row: Pricing left + CTA banner right */}
        <div className="reveal reveal-delay-1 flex flex-col lg:flex-row items-stretch gap-0 rounded-3xl shadow-xl">

          {/* Left — Pricing */}
          <div className="bg-white px-4 sm:px-8 lg:px-12 py-6 flex flex-col justify-center lg:w-[38%] shrink-0 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl">
            <span className="text-[#8B5CF6] font-semibold text-[10px] sm:text-xs uppercase tracking-widest mb-4 sm:mb-8 block">
              Une offre simple et accessible
            </span>

            <div className="flex items-center gap-3 sm:gap-6">
              {plans.map((plan) => (
                <PriceCard key={plan.label} plan={plan} />
              ))}
            </div>
          </div>

          {/* Right — CTA banner */}
          <div
            className="flex-1 px-4 sm:px-8 lg:px-12 py-6 sm:py-8 flex items-center gap-4 sm:gap-8 relative rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl"
            style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 35%, #4C1D95 65%, #6D28D9 100%)" }}
          >
            {/* Text + stores */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-snug mb-2 sm:mb-3">
                Imoni, l&apos;application qui change la façon de travailler.
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-md mb-4 sm:mb-6">
                Téléchargez l&apos;application et accédez à votre passerelle acquéreurs partout, tout le temps.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <a href="#" className="flex items-center gap-2.5 bg-black hover:bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-colors">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <p className="text-white/50 text-[9px] uppercase tracking-widest leading-none">Télécharger dans</p>
                    <p className="text-white font-semibold text-sm leading-tight">l&apos;App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-2.5 bg-black hover:bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-colors">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.18 23.76A2 2 0 012 22V2a2 2 0 011.18-1.76l11.08 11.76L3.18 23.76z" fill="#4285F4" />
                    <path d="M20.5 10.5l-2.78-1.58-3.16 3.35 3.16 3.35 2.81-1.6A2 2 0 0020.5 10.5z" fill="#FBBC05" />
                    <path d="M3.18.24l11.08 11.76-3.26 3.45L3.18.24z" fill="#34A853" />
                    <path d="M3.18 23.76l7.82-15.31 3.26 3.45-11.08 11.76z" fill="#EA4335" />
                  </svg>
                  <div>
                    <p className="text-white/50 text-[9px] uppercase tracking-widest leading-none">Disponible sur</p>
                    <p className="text-white font-semibold text-sm leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Double phone */}
            <div className="hidden lg:block relative z-20 w-lg h-170 shrink-0 mr-4 -mb-10 -mt-72">
              <Image
                src="/professionel/double_phone.webp"
                alt="Imoni app sur deux téléphones"
                fill
                className="object-contain object-bottom"
                sizes="500px"
                quality={95}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwIAMCbHYQAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 mt-8 sm:mt-12 text-gray-400 text-xs">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            Données sécurisées et confidentielles
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            Couverture nationale 100% du territoire
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            Support dédié 100% aux professionnels
          </div>
        </div>
      </div>
    </section>
  );
}
