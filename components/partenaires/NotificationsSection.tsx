"use client";
import { useReveal } from "@/hooks/useReveal";

const notifications = [
  {
    app: "Imoni",
    title: "Nouveau client pour vous !",
    msg: "Marie R. cherche un financement pour un bien à 420 000€ à Lyon.",
    color: "#E91E8C",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1",
    position: "top-left",
  },
  {
    app: "Imoni",
    title: "Opportunité déménagement",
    msg: "Thomas B. vient de signer son achat. Déménagement dans 6 semaines.",
    color: "#3B82F6",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1",
    position: "bottom-left",
  },
  {
    app: "Imoni",
    title: "Travaux avant vente",
    msg: "Sophie M. souhaite rénover sa cuisine avant de mettre en vente.",
    color: "#F59E0B",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    position: "top-right",
  },
  {
    app: "Imoni",
    title: "Diagnostic requis",
    msg: "Jean-Paul V. met en vente sa maison de 1978, DPE et amiante requis.",
    color: "#10B981",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    position: "bottom-right",
  },
];

function NotifCard({ app, title, msg, color, icon }: { app: string; title: string; msg: string; color: string; icon: string }) {
  return (
    <div
      className="w-full sm:w-[270px] rounded-2xl p-3.5 relative overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 12px 32px rgba(233,30,140,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
        border: "1px solid rgba(233,30,140,0.12)",
      }}
    >
      {/* Point live animé */}
      <div className="absolute top-3 right-3 flex items-center gap-1">
        <span className="text-[9px] text-gray-400 font-medium">maintenant</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-[#E91E8C]" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E91E8C]" />
        </span>
      </div>

      {/* Header : logo */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <img src="/partenaire/logo_imoni_noir.webp" alt="Imoni" className="h-8 w-auto object-contain" />
      </div>

      {/* Contenu */}
      <p className="text-[13px] font-extrabold text-gray-800 leading-snug mb-1 pr-10">{title}</p>
      <p className="text-[11px] text-gray-400 leading-relaxed">{msg}</p>
    </div>
  );
}

export default function NotificationsSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="pt-8 pb-24 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #E91E8C 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Mobile : empilé verticalement */}
      <div className="relative flex flex-col lg:flex-row gap-0 items-center gap-y-8 lg:gap-y-0">

        {/* Téléphone */}
        <div className="reveal-left shrink-0 lg:pl-20 2xl:pl-44">
          <img
            src="/partenaire/phone_partenaire_2.webp"
            alt="Application Imoni"
            className="object-contain drop-shadow-2xl h-[420px] sm:h-[480px] lg:h-[550px] 2xl:h-[700px]"
            style={{ width: "auto" }}
          />
        </div>

        {/* Droite : titre + notifications en quinconce */}
        <div className="flex-1 flex flex-col gap-4 px-4 sm:px-10 lg:px-8 2xl:px-16 max-w-2xl w-full">

          {/* Titre */}
          <div className="reveal mb-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 leading-tight">
              Des <span className="text-[#E91E8C]">notifications intelligentes</span> à chaque étape du projet
            </h2>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              Imoni envoie vos offres au moment précis où les utilisateurs en ont besoin.
            </p>
          </div>

          {/* Notifications — vrai quinconce 2 colonnes */}
          <div className="flex gap-4 items-start">
            {/* Colonne gauche */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="reveal reveal-delay-1"><NotifCard {...notifications[0]} /></div>
              <div className="reveal reveal-delay-3"><NotifCard {...notifications[2]} /></div>
            </div>
            {/* Colonne droite — décalée vers le bas */}
            <div className="flex flex-col gap-4 flex-1" style={{ marginTop: "60px" }}>
              <div className="reveal reveal-delay-2"><NotifCard {...notifications[1]} /></div>
              <div className="reveal reveal-delay-4"><NotifCard {...notifications[3]} /></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
