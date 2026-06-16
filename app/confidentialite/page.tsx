import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Imoni",
  description: "Politique de confidentialité de la plateforme Imoni.",
};

const sections = [
  {
    title: "1. Préambule",
    content: (
      <>
        <p>
          La présente Politique de confidentialité a pour objet d&apos;informer les utilisateurs sur la manière
          dont IMONI collecte, utilise et protège leurs données personnelles.
        </p>
        <p>
          IMONI accorde une importance particulière au respect de la vie privée et à la protection des
          données personnelles.
        </p>
      </>
    ),
  },
  {
    title: "2. Responsable du traitement",
    content: (
      <div className="bg-[#F8F4FF] rounded-2xl p-6 sm:p-8">
        <p className="font-bold text-[#0D0F1A] text-lg mb-3">IMONI</p>
        <p>SAS au capital de 940 &euro;</p>
        <p>RCS Toulouse : 989 617 667</p>
        <p className="mt-3 font-semibold">Siège social :</p>
        <p>6 place du Président Thomas Woodrow Wilson</p>
        <p>31000 Toulouse — France</p>
        <p className="mt-3">
          Contact : <a href="mailto:laurent@imoni.fr" className="text-[#8B5CF6] hover:underline">laurent@imoni.fr</a>
        </p>
      </div>
    ),
  },
  {
    title: "3. Données collectées",
    content: (
      <>
        <p>IMONI peut collecter notamment :</p>
        <ul>
          <li>nom,</li>
          <li>prénom,</li>
          <li>adresse email,</li>
          <li>numéro de téléphone,</li>
          <li>informations liées au projet immobilier,</li>
          <li>critères de recherche,</li>
          <li>données de géolocalisation,</li>
          <li>contenus publiés dans les profils,</li>
          <li>messages échangés via la messagerie,</li>
          <li>informations techniques de connexion.</li>
        </ul>
        <p>Certaines données peuvent être facultatives.</p>
        <p>
          Les utilisateurs restent libres des informations personnelles qu&apos;ils choisissent de rendre
          visibles dans leur profil.
        </p>
      </>
    ),
  },
  {
    title: "4. Géolocalisation",
    content: (
      <>
        <p>
          Lorsque l&apos;utilisateur active la géolocalisation, IMONI peut utiliser sa position afin de lui
          proposer des biens correspondant à ses critères.
        </p>
        <p>Cette fonctionnalité peut être désactivée à tout moment.</p>
      </>
    ),
  },
  {
    title: "5. Données vocales et IA",
    content: (
      <>
        <p>Le coach vocal IMONI utilise des technologies d&apos;intelligence artificielle.</p>
        <p>Les échanges audio ne sont pas enregistrés ni conservés.</p>
        <p>Les données vocales ne sont pas stockées en base de données.</p>
        <p>
          En revanche, certains contenus texte générés lors des interactions avec l&apos;IA peuvent être
          sauvegardés afin d&apos;améliorer l&apos;expérience utilisateur.
        </p>
        <p>L&apos;IA vocale utilise notamment les technologies OpenAI.</p>
      </>
    ),
  },
  {
    title: "6. Messagerie et conversations",
    content: (
      <>
        <p>Les conversations texte échangées via la messagerie interne peuvent être conservées.</p>
        <p>
          Ces données sont utilisées afin d&apos;assurer le bon fonctionnement de la plateforme et la
          continuité des échanges entre utilisateurs.
        </p>
      </>
    ),
  },
  {
    title: "7. Pièces d'identité",
    content: (
      <>
        <p>
          Les pièces d&apos;identité ne sont demandées que dans le cadre de la constitution d&apos;un dossier
          destiné au notaire.
        </p>
        <p>Ces documents sont supprimés lors de la suppression du compte utilisateur.</p>
        <p>IMONI ne collecte aucun justificatif de financement.</p>
      </>
    ),
  },
  {
    title: "8. Finalités du traitement",
    content: (
      <>
        <p>Les données personnelles sont utilisées afin de :</p>
        <ul>
          <li>permettre l&apos;utilisation de la plateforme,</li>
          <li>créer des matchs entre utilisateurs,</li>
          <li>faciliter les échanges,</li>
          <li>améliorer l&apos;expérience utilisateur,</li>
          <li>envoyer des notifications liées au projet immobilier,</li>
          <li>proposer des services partenaires adaptés,</li>
          <li>gérer les abonnements professionnels,</li>
          <li>assurer la sécurité de la plateforme.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Partenaires et notifications",
    content: (
      <>
        <p>
          IMONI peut envoyer des notifications liées à des partenaires lorsque celles-ci sont
          pertinentes au regard du projet immobilier de l&apos;utilisateur.
        </p>
        <p>Exemples :</p>
        <ul>
          <li>financement bancaire,</li>
          <li>déménagement,</li>
          <li>travaux,</li>
          <li>diagnostics immobiliers.</li>
        </ul>
        <p className="font-semibold text-[#0D0F1A]">IMONI ne vend pas les données personnelles des utilisateurs.</p>
      </>
    ),
  },
  {
    title: "10. Durée de conservation",
    content: (
      <>
        <p>Les données sont conservées pendant la durée d&apos;utilisation du compte utilisateur.</p>
        <p>
          Certaines données peuvent être conservées plus longtemps afin de respecter les obligations
          légales ou assurer la sécurité de la plateforme.
        </p>
        <p>Les utilisateurs peuvent demander la suppression de leur compte à tout moment.</p>
      </>
    ),
  },
  {
    title: "11. Hébergement et services techniques",
    content: (
      <>
        <p>L&apos;application est hébergée chez OVH.</p>
        <p>IMONI utilise notamment :</p>
        <div className="flex flex-wrap gap-3 my-4">
          {["Firebase", "OpenAI", "RevenueCat"].map((service) => (
            <span key={service} className="bg-[#F8F4FF] text-[#8B5CF6] text-sm font-semibold px-4 py-2 rounded-full">
              {service}
            </span>
          ))}
        </div>
        <p>
          Les paiements intégrés peuvent utiliser les systèmes Apple In-App Purchase et Google Play
          Billing.
        </p>
      </>
    ),
  },
  {
    title: "12. Sécurité",
    content: (
      <p>
        IMONI met en œuvre des mesures techniques et organisationnelles destinées à protéger les
        données personnelles contre les accès non autorisés, pertes ou divulgations.
      </p>
    ),
  },
  {
    title: "13. Droits des utilisateurs",
    content: (
      <>
        <p>Conformément à la réglementation applicable, les utilisateurs disposent notamment :</p>
        <ul>
          <li>d&apos;un droit d&apos;accès,</li>
          <li>de rectification,</li>
          <li>de suppression,</li>
          <li>d&apos;opposition,</li>
          <li>et de limitation du traitement.</li>
        </ul>
        <p>
          Toute demande peut être adressée à :{" "}
          <a href="mailto:laurent@imoni.fr" className="text-[#8B5CF6] hover:underline">laurent@imoni.fr</a>
        </p>
      </>
    ),
  },
  {
    title: "14. Modifications",
    content: (
      <>
        <p>
          IMONI se réserve le droit de modifier la présente Politique de confidentialité à tout moment.
        </p>
        <p>Les utilisateurs seront informés des modifications importantes.</p>
      </>
    ),
  },
  {
    title: "15. Droit applicable",
    content: (
      <p>La présente Politique de confidentialité est soumise au droit français.</p>
    ),
  },
];

export default function ConfidentialitePage() {
  return (
    <section className="min-h-screen bg-white pt-28 sm:pt-36 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Juridique
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0F1A] leading-tight mb-4">
            Politique de{" "}
            <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
              Confidentialité
            </span>
          </h1>
          <p className="text-gray-400 text-sm">
            Dernière mise à jour : juin 2026
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D0F1A] mb-4 pb-3 border-b border-gray-100">
                {section.title}
              </h2>
              <div className="prose-cgu text-gray-600 text-[15px] leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ul]:text-gray-500 [&_a]:text-[#8B5CF6] [&_a]:hover:underline">
                {section.content}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-sm">
            Pour toute question, contactez-nous à{" "}
            <a href="mailto:laurent@imoni.fr" className="text-[#8B5CF6] hover:underline">
              laurent@imoni.fr
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
