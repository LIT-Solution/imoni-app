"use client";
import { useReveal } from "@/hooks/useReveal";

const items = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    color: "#8B5CF6",
    title: "Partout en France",
    desc: "Accédez à des professionnels et biens qualifiés dans toutes les régions.",
  },
  {
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    color: "#E91E8C",
    title: "Un réseau de confiance",
    desc: "Des milliers de professionnels vérifiés pour vous proposer les meilleurs biens.",
  },
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    color: "#10B981",
    title: "Sécurité & confidentiel",
    desc: "Vos données sont protégées et uniquement partagées avec des professionnels qualifiés.",
  },
  {
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    color: "#F59E0B",
    title: "Soyez parmi les premiers",
    desc: "Imoni lance une nouvelle façon d'investir dans l'immobilier. Faites partie des premiers pour profiter des meilleures affaires.",
  },
];

export default function ConfianceSection() {
  const sectionRef = useReveal(0.05);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={item.title} className={`reveal reveal-delay-${i + 1} flex items-start gap-4`}>
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${item.color}15`, border: `1.5px solid ${item.color}30` }}>
                <svg className="w-5 h-5" fill="none" stroke={item.color} viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-[#0D0F1A] font-bold text-sm mb-1">{item.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
