"use client";
import { useReveal } from "@/hooks/useReveal";

export default function InvestisseurCta() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div
          className="reveal-scale rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{ background: "linear-gradient(135deg, #1E1040 0%, #0D0F1A 50%, #1a0830 100%)", boxShadow: "0 24px 80px rgba(139,92,246,0.25)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)" }}>
              <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" /></svg>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                Prêt à recevoir les meilleures<br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#E91E8C] bg-clip-text text-transparent">opportunités immobilières ?</span>
              </h2>
              <p className="text-white/50 text-sm mt-2">Téléchargez l'application pour créer votre profil investisseur gratuitement.</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 shrink-0">
            <div className="flex gap-3">
              <a href="#" className="flex items-center gap-2.5 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-900 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div>
                  <p className="text-[9px] text-gray-300 leading-none">Télécharger dans</p>
                  <p className="text-xs font-bold leading-none mt-0.5">l'App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2.5 bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-900 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.22.98.14l12.47-7.19-2.79-2.79-10.66 9.84zM.89 1.43C.34 1.76 0 2.36 0 3.08v17.84c0 .72.34 1.32.89 1.65l.09.06 9.99-9.99v-.23L.98 1.37l-.09.06zM20.56 10.29l-2.84-1.64-3.16 3.17 3.16 3.16 2.87-1.66c.82-.47.82-1.56-.03-2.03zM3.18.24l12.47 7.19-2.79 2.79L2.2.38c.3-.17.66-.2.98-.14z"/></svg>
                <div>
                  <p className="text-[9px] text-gray-300 leading-none">Disponible sur</p>
                  <p className="text-xs font-bold leading-none mt-0.5">Google Play</p>
                </div>
              </a>
            </div>
            <p className="text-white/30 text-xs">100% gratuit. <span className="text-white/60 font-semibold">Sans commission.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
