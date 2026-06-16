"use client";
import { useState, useEffect, useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const filters = [
  {
    label: "Département",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    label: "Ville",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Type de client",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Étape du projet",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Catégorie",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
];

const miniStats = [
  {
    value: "92%",
    label: "acheteurs actifs",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    value: "4,2k",
    label: "vendeurs",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    value: "1,8k",
    label: "investisseurs",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);

  return count;
}

export default function CiblageSection_v4() {
  const sectionRef = useReveal(0.1);
  const counterRef = useRef<HTMLDivElement>(null);
  const [counterActive, setCounterActive] = useState(false);
  const count = useCountUp(2847, 2000, counterActive);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounterActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FFF5F8 0%, #FFF0F7 100%)" }}
    >
      {/* Décoration fond */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(233,30,140,0.05) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(233,30,140,0.04) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête */}
        <div className="reveal text-center mb-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(233,30,140,0.08)",
              border: "1.5px solid rgba(233,30,140,0.2)",
              color: "#E91E8C",
            }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
            Ciblage intelligent
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-[#0D0F1A] leading-[1.1]">
            Touchez exactement les{" "}
            <span style={{ color: "#E91E8C" }}>bons clients</span>
          </h2>
        </div>

        {/* Card principale */}
        <div
          className="reveal reveal-delay-1 rounded-3xl p-8 sm:p-12"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 8px 60px rgba(233,30,140,0.08), 0 2px 20px rgba(0,0,0,0.04)",
          }}
        >
          {/* Compteur animé */}
          <div ref={counterRef} className="text-center mb-10">
            <div
              className="inline-block font-black leading-none tabular-nums"
              style={{
                fontSize: "clamp(4rem, 10vw, 6rem)",
                color: "#E91E8C",
                letterSpacing: "-0.03em",
                textShadow: "0 4px 24px rgba(233,30,140,0.15)",
              }}
            >
              {count.toLocaleString("fr-FR")}
            </div>
            <p className="mt-3 text-gray-400 text-base font-medium tracking-wide">
              clients ciblés dans votre zone
            </p>

            {/* Barre de progression décorative */}
            <div className="mt-6 max-w-xs mx-auto h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(233,30,140,0.1)" }}>
              <div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #E91E8C, #F06BBD)",
                  width: counterActive ? "100%" : "0%",
                  transition: "width 2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-100 mb-8" />

          {/* Mini-stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {miniStats.map((stat, i) => (
              <div
                key={stat.label}
                className="reveal reveal-scale text-center"
                style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "rgba(233,30,140,0.08)",
                    color: "#E91E8C",
                  }}
                >
                  {stat.icon}
                </div>
                <p
                  className="text-xl sm:text-2xl font-extrabold"
                  style={{ color: "#0D0F1A" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 mt-0.5 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres pills */}
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3 justify-center">
          {filters.map((filter, i) => (
            <div
              key={filter.label}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm cursor-pointer select-none transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#E91E8C",
                color: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(233,30,140,0.25)",
                transitionDelay: `${0.35 + i * 0.07}s`,
              }}
            >
              <span style={{ opacity: 0.9 }}>{filter.icon}</span>
              <span>{filter.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
