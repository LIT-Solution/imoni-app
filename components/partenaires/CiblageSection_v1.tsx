"use client";
import { useReveal } from "@/hooks/useReveal";

const CIBLAGE_OPTIONS = [
  "Par département",
  "Par ville ou secteur",
  "Par type de client",
  "Par étape du projet",
  "Par catégorie de service",
];

const MINI_PROFILS = [
  { initiale: "S", couleur: "#E91E8C", nom: "Sophie M.", type: "Acheteur", detail: "Paris 11e · Budget 450k€" },
  { initiale: "R", couleur: "#3B82F6", nom: "Romain D.", type: "Vendeur", detail: "Lyon 3e · Appart 3p" },
  { initiale: "L", couleur: "#8B5CF6", nom: "Laure P.", type: "Investisseur", detail: "Bordeaux · Locatif" },
];

export default function CiblageSection_v1() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="bg-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Colonne gauche ── */}
          <div className="flex flex-col gap-8">

            {/* Titre */}
            <div className="reveal-left">
              <h2 className="text-4xl sm:text-[2.6rem] font-extrabold text-[#0D0F1A] leading-[1.1]">
                Ciblez vos clients avec{" "}
                <span style={{ color: "#E91E8C" }}>précision</span>
              </h2>
            </div>

            {/* Description */}
            <p className="reveal-left reveal-delay-1 text-[#0D0F1A]/60 text-base leading-relaxed max-w-md">
              Activez les filtres qui correspondent à votre activité. Imoni vous connecte uniquement aux clients qui correspondent à votre profil — pas de bruit, pas de perte de temps.
            </p>

            {/* Chips de ciblage */}
            <div className="reveal-left reveal-delay-2 flex flex-wrap gap-3">
              {CIBLAGE_OPTIONS.map((option) => (
                <div
                  key={option}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold select-none"
                  style={{
                    background: "#FFF0F7",
                    color: "#E91E8C",
                    border: "1.5px solid #F9A8D4",
                  }}
                >
                  {/* Checkmark rose */}
                  <svg
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ color: "#E91E8C" }}
                  >
                    <circle cx="8" cy="8" r="7.25" stroke="#E91E8C" strokeWidth="1.5" />
                    <path
                      d="M5 8.5l2 2 4-4"
                      stroke="#E91E8C"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {option}
                </div>
              ))}
            </div>

          </div>

          {/* ── Colonne droite — Panel résultats ── */}
          <div className="reveal-right reveal-delay-1">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1.5px solid #F3E8FF",
                boxShadow: "0 8px 48px 0 rgba(233,30,140,0.07), 0 2px 16px 0 rgba(0,0,0,0.06)",
                background: "#FAFAFA",
              }}
            >
              {/* En-tête du panel */}
              <div
                className="px-6 pt-6 pb-5"
                style={{ background: "#fff" }}
              >
                {/* Pastilles fenêtre */}
                <div className="flex gap-1.5 mb-5">
                  <span className="w-3 h-3 rounded-full" style={{ background: "#F87171" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#FBBF24" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#34D399" }} />
                </div>

                {/* Compteur principal */}
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#E91E8C" }}>
                  Résultats filtrés
                </p>
                <p
                  className="text-4xl font-extrabold mt-1"
                  style={{ color: "#0D0F1A" }}
                >
                  2&nbsp;847
                  <span className="text-lg font-semibold ml-2" style={{ color: "#0D0F1A99" }}>
                    clients
                  </span>
                </p>
                <p className="text-sm mt-0.5" style={{ color: "#0D0F1A60" }}>
                  dans votre zone de chalandise
                </p>

                {/* Barre de progression */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1.5" style={{ color: "#0D0F1A60" }}>
                    <span>Taux de correspondance</span>
                    <span className="font-bold" style={{ color: "#E91E8C" }}>94%</span>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "#F3F4F6" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: "94%",
                        background: "linear-gradient(90deg, #E91E8C 0%, #F06BBD 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Séparateur */}
              <div style={{ height: "1px", background: "#F3E8FF" }} />

              {/* Liste de mini profils */}
              <div className="px-6 py-5 flex flex-col gap-3" style={{ background: "#fff" }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#0D0F1A40" }}>
                  Profils récents
                </p>
                {MINI_PROFILS.map((profil, i) => (
                  <div
                    key={profil.nom}
                    className="flex items-center gap-4 p-3 rounded-xl"
                    style={{
                      background: i === 0 ? "#FFF0F7" : "#F9FAFB",
                      border: i === 0 ? "1px solid #F9A8D4" : "1px solid #F3F4F6",
                    }}
                  >
                    {/* Avatar coloré */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-base shrink-0"
                      style={{ background: profil.couleur }}
                    >
                      {profil.initiale}
                    </div>

                    {/* Infos */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-[#0D0F1A] truncate">{profil.nom}</p>
                      <p className="text-xs truncate" style={{ color: "#0D0F1A60" }}>{profil.detail}</p>
                    </div>

                    {/* Badge type */}
                    <span
                      className="shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full"
                      style={
                        profil.type === "Acheteur"
                          ? { background: "#FFF0F7", color: "#E91E8C" }
                          : profil.type === "Vendeur"
                          ? { background: "#EFF6FF", color: "#3B82F6" }
                          : { background: "#F3F0FF", color: "#8B5CF6" }
                      }
                    >
                      {profil.type}
                    </span>
                  </div>
                ))}

                {/* Bouton fictif */}
                <button
                  className="mt-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{ background: "linear-gradient(90deg, #E91E8C 0%, #F06BBD 100%)" }}
                >
                  Voir tous les profils →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
