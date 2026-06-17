"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const criteria = [
  { label: "Par département ou région", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Par ville ou secteur géographique", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: "Par type de client (acheteur, vendeur, investisseur...)", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "Par étape du projet immobilier", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
  { label: "Par catégorie de service recherché", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" },
];

const FRANCE_PATH = `
  M 203,16
  L 218,24 L 235,36 L 255,48 L 272,56 L 290,58 L 300,60 L 309,76
  L 326,80
  L 350,86 L 357,92 L 357,108 L 366,112 L 360,132 L 360,152
  Q 350,164 343,176 Q 334,182 326,188 Q 319,196 317,204 Q 327,212 337,216
  Q 340,232 332,252 Q 340,266 349,280 L 357,304
  L 334,320 L 317,332 L 297,324 L 270,316 L 252,320 L 232,330 L 226,348
  Q 209,354 192,356 Q 166,352 143,348 Q 123,342 103,336 Q 97,328 92,320
  L 102,306 L 109,272 L 112,236 L 109,208 L 80,188 L 80,168
  L 72,160 L 43,148 L 32,140 L 20,132
  L 9,136
  L 14,120
  L 32,108 L 55,104 L 63,116 L 86,112 L 100,108
  L 92,84 Q 94,76 97,68 Q 101,72 103,80 L 109,84
  L 114,80 L 123,84 L 146,76 L 152,68 L 175,60 L 183,52 L 189,28 L 203,16
  Z
`;

const pins = [
  { id: "paris",     label: "Paris",     cx: 212, cy: 100, count: "2 400", color: "#E91E8C", below: false },
  { id: "lyon",      label: "Lyon",      cx: 280, cy: 228, count: "1 180", color: "#8B5CF6", below: false },
  { id: "marseille", label: "Marseille", cx: 293, cy: 318, count: "980",   color: "#3B82F6", below: false },
  { id: "bordeaux",  label: "Bordeaux",  cx: 126, cy: 264, count: "740",   color: "#10B981", below: false },
  { id: "lille",     label: "Lille",     cx: 232, cy: 36,  count: "620",   color: "#F59E0B", below: true  },
  { id: "nantes",    label: "Nantes",    cx: 100, cy: 168, count: "510",   color: "#EF4444", below: false },
];

// ── Données du drawer ─────────────────────────────────────────────────────────

const REGIONS = [
  "Île-de-France", "PACA", "Auvergne-Rhône-Alpes", "Nouvelle-Aquitaine",
  "Occitanie", "Grand Est", "Hauts-de-France", "Bretagne",
  "Normandie", "Pays de la Loire", "Bourgogne-Franche-Comté",
  "Centre-Val de Loire", "Corse",
];

const CLIENT_TYPES = [
  { label: "Acheteur", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
  { label: "Vendeur", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Investisseur", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
  { label: "Locataire", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" },
];

const PROJECT_STEPS = [
  "Recherche active", "Offre en cours", "Compromis signé",
  "Financement en cours", "Acte signé", "Post-achat",
];

const BUDGETS = ["< 200 000 €", "200 – 400 k€", "400 – 600 k€", "600 k€ – 1 M€", "> 1 M€"];

const SERVICES = ["Financement", "Déménagement", "Travaux / Rénovation", "Diagnostic", "Home staging", "Assurance"];

// ── Chip sélectionnable ───────────────────────────────────────────────────────

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-150 border"
      style={{
        background: selected ? "#E91E8C" : "white",
        color: selected ? "white" : "#52525B",
        borderColor: selected ? "#E91E8C" : "#E4E4E7",
      }}
    >
      {label}
    </button>
  );
}

// ── Drawer ────────────────────────────────────────────────────────────────────

function CiblageDrawer({ open, onClose, onValidate }: { open: boolean; onClose: () => void; onValidate: () => void }) {
  const [regions, setRegions]       = useState<string[]>([]);
  const [allFrance, setAllFrance]   = useState(true);
  const [clients, setClients]       = useState<string[]>([]);
  const [steps, setSteps]           = useState<string[]>([]);
  const [budgets, setBudgets]       = useState<string[]>([]);
  const [services, setServices]     = useState<string[]>([]);

  const toggle = (arr: string[], val: string, set: (v: string[]) => void) =>
    set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

  const totalSelected = (allFrance ? 1 : regions.length) + clients.length + steps.length + budgets.length + services.length;
  const estimatedReach = Math.min(6430, Math.max(120, totalSelected * 480 + (allFrance ? 2000 : regions.length * 380)));

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{ background: "rgba(13,15,26,0.45)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="fixed top-0 right-0 z-50 h-full flex flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] w-full sm:w-[480px]"
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-extrabold text-[#0D0F1A]">Configurer mon ciblage</h2>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenu scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">

          {/* Zone géographique */}
          <div>
            <p className="text-sm font-bold text-[#0D0F1A] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[#E91E8C]" style={{ background: "rgba(233,30,140,0.1)" }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </span>
              Zone géographique
            </p>
            <button
              onClick={() => setAllFrance(!allFrance)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border mb-3 transition-all"
              style={{ background: allFrance ? "rgba(233,30,140,0.04)" : "white", borderColor: allFrance ? "#E91E8C" : "#E4E4E7" }}
            >
              <span className="text-sm font-medium text-[#0D0F1A]">Toute la France</span>
              <div className="w-10 h-5 rounded-full flex items-center px-0.5 transition-all" style={{ background: allFrance ? "#E91E8C" : "#D4D4D8" }}>
                <div className="w-4 h-4 rounded-full bg-white shadow transition-transform" style={{ transform: allFrance ? "translateX(20px)" : "translateX(0)" }} />
              </div>
            </button>
            {!allFrance && (
              <div className="flex flex-wrap gap-2">
                {REGIONS.map((r) => (
                  <Chip key={r} label={r} selected={regions.includes(r)} onClick={() => toggle(regions, r, setRegions)} />
                ))}
              </div>
            )}
          </div>

          {/* Type de client */}
          <div>
            <p className="text-sm font-bold text-[#0D0F1A] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[#E91E8C]" style={{ background: "rgba(233,30,140,0.1)" }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </span>
              Type de client
            </p>
            <div className="grid grid-cols-2 gap-2">
              {CLIENT_TYPES.map((c) => (
                <button
                  key={c.label}
                  onClick={() => toggle(clients, c.label, setClients)}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left"
                  style={{
                    background: clients.includes(c.label) ? "rgba(233,30,140,0.05)" : "white",
                    borderColor: clients.includes(c.label) ? "#E91E8C" : "#E4E4E7",
                    color: clients.includes(c.label) ? "#E91E8C" : "#52525B",
                  }}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Étape du projet */}
          <div>
            <p className="text-sm font-bold text-[#0D0F1A] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[#E91E8C]" style={{ background: "rgba(233,30,140,0.1)" }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              </span>
              Étape du projet
            </p>
            <div className="flex flex-wrap gap-2">
              {PROJECT_STEPS.map((s) => (
                <Chip key={s} label={s} selected={steps.includes(s)} onClick={() => toggle(steps, s, setSteps)} />
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <p className="text-sm font-bold text-[#0D0F1A] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[#E91E8C]" style={{ background: "rgba(233,30,140,0.1)" }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              Budget moyen du client
            </p>
            <div className="flex flex-wrap gap-2">
              {BUDGETS.map((b) => (
                <Chip key={b} label={b} selected={budgets.includes(b)} onClick={() => toggle(budgets, b, setBudgets)} />
              ))}
            </div>
          </div>

          {/* Catégorie de service */}
          <div>
            <p className="text-sm font-bold text-[#0D0F1A] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[#E91E8C]" style={{ background: "rgba(233,30,140,0.1)" }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" /></svg>
              </span>
              Catégorie de service
            </p>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <Chip key={s} label={s} selected={services.includes(s)} onClick={() => toggle(services, s, setServices)} />
              ))}
            </div>
          </div>

        </div>

        {/* Footer sticky */}
        <div className="px-6 py-5 border-t border-gray-100" style={{ background: "rgba(255,245,248,0.8)", backdropFilter: "blur(8px)" }}>
          {/* Portée estimée */}
          <div className="mb-4 p-3 rounded-xl" style={{ background: "white", border: "1px solid rgba(233,30,140,0.12)" }}>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-400">Portée estimée</p>
              <p className="text-sm font-extrabold text-[#E91E8C]">{estimatedReach.toLocaleString("fr-FR")} profils</p>
            </div>
            <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${(estimatedReach / 6430) * 100}%`, background: "linear-gradient(90deg, #E91E8C, #FF4D6D)" }}
              />
            </div>
          </div>
          <button
            onClick={onValidate}
            className="w-full py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.01]"
            style={{ background: "linear-gradient(135deg, #E91E8C, #FF4D6D)", boxShadow: "0 8px 24px rgba(233,30,140,0.35)" }}
          >
            Valider mon ciblage
          </button>
        </div>
      </div>
    </>
  );
}

// ── Section principale ────────────────────────────────────────────────────────

export default function CiblageSection_v2() {
  const sectionRef = useReveal(0.05);
  const [hovered, setHovered]       = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast]           = useState(false);

  const handleValidate = () => {
    setDrawerOpen(false);
    setTimeout(() => {
      setToast(true);
      setTimeout(() => setToast(false), 4000);
    }, 300);
  };

  return (
    <>
      <CiblageDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onValidate={handleValidate} />

      {/* Toast confirmation */}
      <div
        className="fixed bottom-6 left-1/2 z-50 transition-all duration-500"
        style={{
          transform: `translateX(-50%) translateY(${toast ? "0" : "20px"})`,
          opacity: toast ? 1 : 0,
          pointerEvents: "none",
        }}
      >
        <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl text-white text-sm font-semibold" style={{ background: "#0D0F1A", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
          <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ background: "#E91E8C" }}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Ciblage enregistré — vos préférences sont prises en compte.
        </div>
      </div>

      <section ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: "#FFF5F8" }}>
        <div className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(233,30,140,0.07) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Colonne gauche */}
            <div className="reveal-left flex flex-col items-center text-center sm:items-start sm:text-left">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0D0F1A] leading-tight mb-4">
                Ciblez vos clients<br />avec <span style={{ color: "#E91E8C" }}>précision</span>
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-3 max-w-md">
                Configurez votre visibilité selon vos besoins :
              </p>

              <ul className="space-y-4 text-left">
                {criteria.map((c, i) => (
                  <li key={c.label} className="flex items-start gap-3.5 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(233,30,140,0.1)", border: "1px solid rgba(233,30,140,0.2)" }}>
                      <svg className="w-4 h-4" fill="none" stroke="#E91E8C" viewBox="0 0 24 24" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                      </svg>
                    </div>
                    <span className="text-[#0D0F1A] text-sm font-medium mt-1.5">{c.label}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setDrawerOpen(true)}
                className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #E91E8C, #c0166f)", boxShadow: "0 4px 20px rgba(233,30,140,0.35)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Configurer mon ciblage
              </button>
            </div>

            {/* Colonne droite : carte France */}
            <div className="reveal-right reveal-delay-2 flex justify-center">
              <div className="relative rounded-3xl p-6" style={{ background: "white", boxShadow: "0 8px 40px rgba(233,30,140,0.10), 0 2px 12px rgba(0,0,0,0.06)", border: "1px solid rgba(233,30,140,0.12)" }}>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-semibold text-[#0D0F1A]">Couverture nationale</p>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-xs text-gray-400">En direct</span>
                  </div>
                </div>

                <div className="relative">
                  <svg viewBox="-20 -10 420 400" className="w-full max-w-[480px]" style={{ overflow: "visible" }}>
                    <defs>
                      <filter id="shadow-france" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(233,30,140,0.18)" />
                      </filter>
                      <linearGradient id="france-fill" x1="0" y1="0" x2="0.6" y2="1">
                        <stop offset="0%" stopColor="#fce7f3" />
                        <stop offset="60%" stopColor="#fbcfe8" />
                        <stop offset="100%" stopColor="#f9a8d4" />
                      </linearGradient>
                    </defs>

                    <path d={FRANCE_PATH} fill="url(#france-fill)" stroke="rgba(233,30,140,0.35)" strokeWidth="1.5" strokeLinejoin="round" filter="url(#shadow-france)" />

                    {pins.map((pin, idx) => {
                      const isHovered = hovered === pin.id;
                      const tooltipY  = pin.below ? pin.cy + 12 : pin.cy - 40;
                      const textY1    = pin.below ? pin.cy + 24 : pin.cy - 30;
                      const textY2    = pin.below ? pin.cy + 35 : pin.cy - 19;
                      const arrowPts  = pin.below
                        ? `${pin.cx - 5},${pin.cy + 11} ${pin.cx + 5},${pin.cy + 11} ${pin.cx},${pin.cy + 6}`
                        : `${pin.cx - 5},${pin.cy - 13} ${pin.cx + 5},${pin.cy - 13} ${pin.cx},${pin.cy - 6}`;
                      return (
                        <g key={pin.id} style={{ cursor: "pointer" }} onMouseEnter={() => setHovered(pin.id)} onMouseLeave={() => setHovered(null)}>
                          <circle cx={pin.cx} cy={pin.cy} r="13" fill={pin.color} opacity="0.15" className="pin-pulse" style={{ animationDelay: `${idx * 0.45}s` }} />
                          <circle cx={pin.cx} cy={pin.cy} r="8"  fill={pin.color} opacity="0.22" />
                          <circle cx={pin.cx} cy={pin.cy} r="6"  fill="white" />
                          <circle cx={pin.cx} cy={pin.cy} r="4"  fill={pin.color} />
                          {isHovered && (
                            <g style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))" }}>
                              <rect x={pin.cx - 40} y={tooltipY} width="80" height="30" rx="8" fill={pin.color} />
                              <polygon points={arrowPts} fill={pin.color} />
                              <text x={pin.cx} y={textY1} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">{pin.label}</text>
                              <text x={pin.cx} y={textY2} textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="8" fontFamily="system-ui, sans-serif">{pin.count} clients</text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                  <style>{`
                    @keyframes ping-map {
                      0%   { transform: scale(1);   opacity: 0.5; }
                      70%  { transform: scale(2.4); opacity: 0; }
                      100% { transform: scale(2.4); opacity: 0; }
                    }
                    .pin-pulse { transform-box: fill-box; transform-origin: center; animation: ping-map 2.2s cubic-bezier(0, 0, 0.2, 1) infinite; }
                  `}</style>
                </div>

                {/* Légende des villes */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {pins.map((pin) => (
                    <div
                      key={pin.id}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium cursor-default transition-all"
                      style={{ background: hovered === pin.id ? "#0D0F1A" : "#F4F4F5", color: hovered === pin.id ? "white" : "#52525B" }}
                      onMouseEnter={() => setHovered(pin.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {pin.label}
                    </div>
                  ))}
                </div>

                {/* Stat */}
                <div className="mt-4 flex items-center gap-3 px-4 py-3 rounded-2xl" style={{ background: "rgba(233,30,140,0.05)", border: "1px solid rgba(233,30,140,0.1)" }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(233,30,140,0.1)" }}>
                    <svg className="w-4 h-4 text-[#E91E8C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0D0F1A]">6 430+ profils actifs</p>
                    <p className="text-xs text-gray-400">répartis sur toute la France</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs font-bold" style={{ color: "#E91E8C" }}>+18%</p>
                    <p className="text-xs text-gray-400">ce mois</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
