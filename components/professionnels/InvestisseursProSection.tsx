"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

const features = [
  { text: "Profils vérifiés et critères clairement identifiés" },
  { text: "Stratégies d'investissement clairement identifiées" },
  { text: "Budgets et secteurs ciblés" },
  { text: "Gain de temps et mises en relation efficaces" },
];

const CHECK_COLOR = "#8B5CF6";

export default function InvestisseursProSection() {
  const sectionRef = useReveal(0.1);

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className="reveal-left">
              <span className="text-[#8B5CF6] font-semibold text-xs uppercase tracking-widest">
                Investisseurs &amp; marchands de biens
              </span>
            </div>

            <h2 className="reveal-left reveal-delay-1 text-3xl sm:text-4xl font-extrabold text-[#0D0F1A] leading-tight mt-4 mb-6">
              La 1ère base dédiée aux investisseurs et marchands de biens.
            </h2>

            <p className="reveal-left reveal-delay-2 text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              Accédez à un vivier unique d&apos;investisseurs et de marchands de biens qualifiés sur tout le territoire. Consultez leurs profils, stratégies, budgets et critères d&apos;investissement pour vendre plus facilement vos opérations.
            </p>

            <ul className="space-y-4">
              {features.map((f, i) => (
                <li
                  key={f.text}
                  className={`reveal reveal-delay-${i + 3} flex items-center gap-3`}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${CHECK_COLOR}20` }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" style={{ color: CHECK_COLOR }}>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[#0D0F1A] text-sm sm:text-base">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — placeholder for image */}
          <div className="reveal-right reveal-delay-2 relative flex justify-center">
            <div className="relative w-full max-w-lg h-95 sm:h-110 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/professionel/image-section.webp"
                alt="Investisseurs et marchands de biens sur Imoni"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
