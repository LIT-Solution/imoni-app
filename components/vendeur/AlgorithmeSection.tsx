"use client";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const results = [
  "Plus d'acheteurs potentiels touchés",
  "Plus d'opportunités de négociation",
  "Le point d'équilibre trouvé entre vendeur et acheteur",
];

// Phases d'animation : courbe + nb d'avatars
const phases = [
  { avatars: 1, label: "1 acheteur" },
  { avatars: 3, label: "3 acheteurs" },
  { avatars: 6, label: "6 acheteurs" },
  { avatars: 3, label: "3 acheteurs" },
];

// Paths SVG pour chaque phase (même structure de commandes)
const curvePaths = [
  "M10,108 C70,107 130,106 170,104 C210,102 255,100 290,99",
  "M10,105 C50,98 90,85 130,70 C170,55 220,35 260,18 C275,12 284,9 290,8",
  "M10,103 C40,90 75,68 110,48 C145,28 185,10 220,4 C250,-1 272,1 290,3",
  "M10,105 C50,98 90,85 130,70 C170,55 220,35 260,18 C275,12 284,9 290,8",
];

const fillPaths = [
  "M10,108 C70,107 130,106 170,104 C210,102 255,100 290,99 L290,115 L10,115 Z",
  "M10,105 C50,98 90,85 130,70 C170,55 220,35 260,18 C275,12 284,9 290,8 L290,115 L10,115 Z",
  "M10,103 C40,90 75,68 110,48 C145,28 185,10 220,4 C250,-1 272,1 290,3 L290,115 L10,115 Z",
  "M10,105 C50,98 90,85 130,70 C170,55 220,35 260,18 C275,12 284,9 290,8 L290,115 L10,115 Z",
];

// Positions des points sur chaque phase
const pointPositions = [
  [[10,108],[80,106],[150,105],[220,102],[290,99]],
  [[10,105],[80,88],[150,57],[220,20],[290,8]],
  [[10,103],[80,73],[150,38],[220,6],[290,3]],
  [[10,105],[80,88],[150,57],[220,20],[290,8]],
];

const PHASE_DURATION = 1800;

export default function AlgorithmeSection() {
  const sectionRef = useReveal(0.05);
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(phases[0].avatars);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => {
        const next = (p + 1) % phases.length;
        setVisible(phases[next].avatars);
        return next;
      });
    }, PHASE_DURATION);
    return () => clearInterval(interval);
  }, []);

  const allAvatarCount = 6;
  const pts = pointPositions[phase];
  const curveD = curvePaths[phase];
  const fillD = fillPaths[phase];

  return (
    <section
      ref={sectionRef}
      className="pt-16 pb-28 lg:pt-20 lg:pb-36 relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative w-full px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">

          {/* Colonne 1 — texte */}
          <div className="reveal-left bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
            <span className="inline-flex items-center gap-2 bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#F59E0B] text-[11px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Exclusivité Imoni
            </span>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D0F1A] leading-tight">
                Laissez l&apos;algorithme{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
                  élargir vos opportunités.
                </span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">Une nouvelle façon de vendre, plus profitable.</p>
            </div>

            <div className="space-y-3 text-gray-500 text-sm leading-relaxed">
              <p>
                Plutôt que de baisser votre prix pour toucher d&apos;autres acquéreurs, Imoni analyse les échanges et, si la vente tarde, vous propose des acquéreurs dont le budget est en dessous.
              </p>
              <p>
                Ces acquéreurs reçoivent votre bien avec le badge{" "}
                <span className="inline-flex items-center gap-1 bg-[#F59E0B]/20 border border-[#F59E0B]/30 text-[#F59E0B] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  OPPORTUNITÉ
                </span>{" "}
                : ils savent que vous êtes ouvert à la négociation, sans que votre prix affiché n&apos;ait été modifié.
              </p>
            </div>

            <p className="text-[#E91E8C] font-semibold text-sm">
              Vous gardez votre prix, mais élargissez vos chances de vendre dans de meilleures conditions.
            </p>
          </div>

          {/* Colonne 2 — graphique animé */}
          <div className="reveal rounded-2xl p-6 space-y-5" style={{ background: "#1E1040" }}>
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(139,92,246,0.25)", border: "1px solid rgba(139,92,246,0.3)" }}>
                <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" /></svg>
              </div>
              <p className="text-white text-sm font-semibold">Votre bien affiché à <span className="font-extrabold">300 000 €</span></p>
            </div>

            {/* Courbe SVG animée (SMIL) */}
            <div className="relative">
              <svg viewBox="0 0 300 125" className="w-full" style={{ overflow: "visible" }}>
                <defs>
                  <linearGradient id="algoCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#E91E8C" />
                  </linearGradient>
                  <linearGradient id="algoFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#E91E8C" stopOpacity="0.02" />
                  </linearGradient>
                </defs>

                {/* Grille */}
                {[25, 55, 85].map(y => (
                  <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                ))}

                {/* Aire animée SMIL — x coords identiques dans tous les paths */}
                <path fill="url(#algoFillGrad)">
                  <animate
                    attributeName="d"
                    dur="7.2s"
                    repeatCount="indefinite"
                    calcMode="linear"
                    values={[
                      "M10,108 C45,108 45,108 80,107 C115,107 115,107 150,106 C185,106 185,105 220,105 C255,105 255,104 290,104 L290,115 L10,115 Z",
                      "M10,108 C45,100 45,92 80,85 C115,78 115,65 150,58 C185,51 185,38 220,30 C255,22 255,14 290,10 L290,115 L10,115 Z",
                      "M10,108 C45,95 45,85 80,75 C115,65 115,52 150,42 C185,32 185,20 220,14 C255,8 255,4 290,3 L290,115 L10,115 Z",
                      "M10,108 C45,100 45,92 80,85 C115,78 115,65 150,58 C185,51 185,38 220,30 C255,22 255,14 290,10 L290,115 L10,115 Z",
                      "M10,108 C45,108 45,108 80,107 C115,107 115,107 150,106 C185,106 185,105 220,105 C255,105 255,104 290,104 L290,115 L10,115 Z",
                    ].join(";")}
                  />
                </path>

                {/* Courbe animée SMIL — x coords identiques dans tous les paths */}
                <path fill="none" stroke="url(#algoCurveGrad)" strokeWidth="2.5" strokeLinecap="round">
                  <animate
                    attributeName="d"
                    dur="7.2s"
                    repeatCount="indefinite"
                    calcMode="linear"
                    values={[
                      "M10,108 C45,108 45,108 80,107 C115,107 115,107 150,106 C185,106 185,105 220,105 C255,105 255,104 290,104",
                      "M10,108 C45,100 45,92 80,85 C115,78 115,65 150,58 C185,51 185,38 220,30 C255,22 255,14 290,10",
                      "M10,108 C45,95 45,85 80,75 C115,65 115,52 150,42 C185,32 185,20 220,14 C255,8 255,4 290,3",
                      "M10,108 C45,100 45,92 80,85 C115,78 115,65 150,58 C185,51 185,38 220,30 C255,22 255,14 290,10",
                      "M10,108 C45,108 45,108 80,107 C115,107 115,107 150,106 C185,106 185,105 220,105 C255,105 255,104 290,104",
                    ].join(";")}
                  />
                </path>

                {/* Points animés SMIL */}
                {[
                  { x: 10,  cyVals: "108;105;103;105;108" },
                  { x: 80,  cyVals: "107;88;73;88;107" },
                  { x: 150, cyVals: "106;57;38;57;106" },
                  { x: 220, cyVals: "103;20;6;20;103" },
                  { x: 290, cyVals: "99;8;3;8;99", last: true },
                ].map(({ x, cyVals, last }, i) => (
                  <circle key={i} cx={x} r={last ? 5 : 3.5} fill={last ? "#E91E8C" : "#1E1040"} stroke={last ? "#E91E8C" : "#8B5CF6"} strokeWidth="2">
                    <animate
                      attributeName="cy"
                      dur="7.2s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      values={cyVals}
                    />
                  </circle>
                ))}

                {/* Label 300k */}
                <rect x="245" y="-8" width="68" height="20" rx="5" fill="#E91E8C" />
                <text x="279" y="6" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="bold">300 000 €</text>

                {/* Labels axe X */}
                {["220k","240k","260k","280k","300k"].map((v, i) => (
                  <text key={v} x={10 + i * 70} y="124" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">{v}</text>
                ))}
              </svg>
            </div>

            {/* Banner */}
            <div className="rounded-xl px-4 py-2.5 flex items-center justify-between" style={{ background: "linear-gradient(to right, rgba(139,92,246,0.3), rgba(233,30,140,0.3))", border: "1px solid rgba(139,92,246,0.3)" }}>
              <span className="text-white/50 text-sm">←</span>
              <span className="text-white text-xs font-semibold">Imoni élargit vos opportunités</span>
              <span className="text-white/50 text-sm">→</span>
            </div>

            {/* Avatars animés */}
            <div className="flex justify-center gap-2 min-h-[44px] items-center">
              {Array.from({ length: allAvatarCount }).map((_, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#E91E8C] flex items-center justify-center"
                  style={{
                    transition: `opacity ${PHASE_DURATION * 0.5}ms ease, transform ${PHASE_DURATION * 0.5}ms ease`,
                    opacity: i < visible ? 1 : 0,
                    transform: i < visible ? "scale(1)" : "scale(0.5)",
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                </div>
              ))}
            </div>

            {/* Compteur acheteurs */}
            <p className="text-center text-white/60 text-xs font-semibold" style={{ transition: `opacity ${PHASE_DURATION * 0.4}ms ease` }}>
              <span className="text-white font-extrabold text-sm">{visible}</span> acheteur{visible > 1 ? "s" : ""} potentiel{visible > 1 ? "s" : ""} touché{visible > 1 ? "s" : ""}
            </p>

            {/* Badge OPPORTUNITÉ */}
            <div className="rounded-xl p-3 flex items-start gap-3" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }}>
              <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <p className="text-white/70 text-xs leading-relaxed">
                Ils voient votre bien avec le badge <span className="text-white font-bold">OPPORTUNITÉ</span><br />
                Vous êtes ouvert à la négociation, sans baisser votre prix.
              </p>
            </div>
          </div>

          {/* Colonne 3 — résultats */}
          <div className="reveal-right bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <p className="text-[#0D0F1A] font-bold text-base">Résultat :</p>
              <ul className="space-y-5">
                {results.map(r => (
                  <li key={r} className="flex items-start gap-3 text-gray-600 text-base leading-snug">
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-5 flex flex-col items-center gap-3 text-center border-t border-gray-200">
              <img src="/icones/trophée.svg" alt="Trophée" className="w-16 h-16" style={{ filter: "brightness(0) saturate(100%) invert(78%) sepia(60%) saturate(800%) hue-rotate(5deg)" }} />
              <div>
                <p className="text-[#F59E0B] font-extrabold text-lg uppercase tracking-widest">Gagner plus</p>
                <p className="text-gray-400 text-sm mt-0.5">avec Imoni</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
