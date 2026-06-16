import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - Imoni",
  description: "Conditions Générales d'Utilisation de la plateforme Imoni.",
};

const sections = [
  {
    title: "1. Objet",
    content: (
      <>
        <p>
          Les présentes Conditions Générales d&apos;Utilisation ont pour objet de définir les modalités
          d&apos;accès et d&apos;utilisation de la plateforme IMONI.
        </p>
        <p>
          IMONI est une plateforme technologique de mise en relation destinée aux particuliers,
          investisseurs et professionnels de l&apos;immobilier.
        </p>
        <p>IMONI permet notamment :</p>
        <ul>
          <li>la création de profils immobiliers,</li>
          <li>la mise en relation entre vendeurs, acquéreurs et professionnels,</li>
          <li>la consultation d&apos;opportunités immobilières,</li>
          <li>l&apos;utilisation d&apos;outils numériques d&apos;accompagnement,</li>
          <li>la création d&apos;offres d&apos;achat électroniques,</li>
          <li>l&apos;assistance à la constitution de dossiers notaire.</li>
        </ul>
        <p>
          IMONI n&apos;exerce pas une activité d&apos;agence immobilière au sens de la loi Hoguet et ne perçoit
          aucune commission sur les transactions immobilières réalisées entre les utilisateurs.
        </p>
      </>
    ),
  },
  {
    title: "2. Éditeur",
    content: (
      <>
        <div className="bg-[#F8F4FF] rounded-2xl p-6 sm:p-8 not-last:mb-0">
          <p className="font-bold text-[#0D0F1A] text-lg mb-3">IMONI</p>
          <p>SAS au capital de 940 &euro;</p>
          <p>RCS Toulouse : 989 617 667</p>
          <p className="mt-3 font-semibold">Siège social :</p>
          <p>6 place du Président Thomas Woodrow Wilson</p>
          <p>31000 Toulouse — France</p>
          <p className="mt-3">
            Contact : <a href="mailto:laurent@imoni.fr" className="text-[#8B5CF6] hover:underline">laurent@imoni.fr</a>
          </p>
          <p>Responsable de publication : Laurent Baron</p>
        </div>
      </>
    ),
  },
  {
    title: "3. Accès à l'application",
    content: (
      <>
        <p>L&apos;accès à certaines fonctionnalités nécessite la création d&apos;un compte utilisateur.</p>
        <p>L&apos;utilisateur garantit fournir des informations exactes, sincères et à jour.</p>
        <p>
          IMONI se réserve le droit de suspendre ou supprimer tout compte en cas de fraude,
          comportement abusif ou non-respect des présentes CGU.
        </p>
      </>
    ),
  },
  {
    title: "4. Fonctionnement des matchs et de la messagerie",
    content: (
      <>
        <p>
          L&apos;application fonctionne selon un système de mise en relation basé sur des critères
          immobiliers et des interactions entre utilisateurs.
        </p>
        <p>
          Pour les particuliers, l&apos;accès aux coordonnées complètes intervient uniquement après un
          match validé par les deux parties.
        </p>
        <p>Une messagerie interne permet ensuite aux utilisateurs d&apos;échanger.</p>
        <p>
          Les utilisateurs restent entièrement responsables des informations qu&apos;ils choisissent de
          rendre visibles dans leur profil.
        </p>
        <p>IMONI laisse notamment la possibilité aux acquéreurs de décrire :</p>
        <ul>
          <li>leur profil,</li>
          <li>leur projet,</li>
          <li>leur profession,</li>
          <li>ou toute autre information personnelle qu&apos;ils souhaitent partager.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Géolocalisation",
    content: (
      <>
        <p>
          L&apos;application peut utiliser la géolocalisation afin de proposer des biens correspondant aux
          critères de recherche des utilisateurs.
        </p>
        <p>
          La géolocalisation est activable et désactivable à tout moment depuis les paramètres du
          profil utilisateur.
        </p>
        <p>
          Lorsque cette fonctionnalité est activée, IMONI peut proposer des biens correspondant aux
          critères de l&apos;utilisateur, y compris en dehors du secteur initialement défini lors de son
          inscription.
        </p>
      </>
    ),
  },
  {
    title: "6. Offres et services payants",
    content: (
      <>
        <h4 className="font-bold text-[#0D0F1A] text-base mt-2 mb-2">Services gratuits</h4>
        <p>L&apos;application est gratuite pour les particuliers.</p>

        <h4 className="font-bold text-[#0D0F1A] text-base mt-6 mb-2">Services payants particuliers</h4>
        <p>Certaines fonctionnalités spécifiques peuvent être payantes :</p>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="bg-[#F8F4FF] rounded-xl p-5 text-center">
            <p className="text-2xl font-extrabold text-[#8B5CF6]">12 &euro; <span className="text-sm font-normal text-gray-400">TTC</span></p>
            <p className="text-sm text-gray-600 mt-1">Offre d&apos;achat électronique</p>
          </div>
          <div className="bg-[#F8F4FF] rounded-xl p-5 text-center">
            <p className="text-2xl font-extrabold text-[#E91E8C]">100 &euro; <span className="text-sm font-normal text-gray-400">TTC</span></p>
            <p className="text-sm text-gray-600 mt-1">Assistance dossier notaire</p>
          </div>
        </div>

        <h4 className="font-bold text-[#0D0F1A] text-base mt-6 mb-2">Services professionnels</h4>
        <p>Les professionnels de l&apos;immobilier peuvent souscrire à différentes offres d&apos;abonnement.</p>

        <h5 className="font-semibold text-[#0D0F1A] text-sm mt-4 mb-2">Offre basique</h5>
        <ul>
          <li>accès à la plateforme,</li>
          <li>dépôt de biens,</li>
          <li>accès au fichier acquéreur,</li>
          <li>utilisation des fonctionnalités principales.</li>
        </ul>

        <h5 className="font-semibold text-[#0D0F1A] text-sm mt-4 mb-2">Offre Premium</h5>
        <p>L&apos;offre Premium peut notamment permettre :</p>
        <ul>
          <li>d&apos;être informé des demandes d&apos;estimation,</li>
          <li>d&apos;être informé lorsqu&apos;un acquéreur souhaite vendre un bien,</li>
          <li>d&apos;accéder en avant-première à certains profils acquéreurs,</li>
          <li>d&apos;être diffusé dans le carrousel partenaires IMONI.</li>
        </ul>
        <p>
          Les coordonnées des utilisateurs ne sont accessibles qu&apos;en cas de match ou avec leur
          accord.
        </p>
      </>
    ),
  },
  {
    title: "7. Notifications et communications",
    content: (
      <>
        <p>Les utilisateurs peuvent activer ou désactiver les notifications depuis leur profil.</p>
        <p>
          IMONI peut envoyer des notifications liées à l&apos;activité de la plateforme ou à l&apos;avancement
          des projets immobiliers.
        </p>
        <p>
          Les professionnels de l&apos;immobilier ayant créé un compte sur IMONI peuvent recevoir des
          informations relatives à l&apos;activité de la plateforme, notamment concernant de nouveaux
          acquéreurs ou opportunités correspondant à leur secteur ou activité.
        </p>
        <p>Ils peuvent à tout moment se désinscrire de ces communications.</p>
      </>
    ),
  },
  {
    title: "8. Partenaires",
    content: (
      <>
        <p>
          IMONI peut proposer des services partenaires adaptés à l&apos;avancement du projet immobilier
          des utilisateurs.
        </p>
        <p>Ces propositions peuvent notamment concerner :</p>
        <ul>
          <li>des courtiers,</li>
          <li>déménageurs,</li>
          <li>artisans,</li>
          <li>diagnostiqueurs,</li>
          <li>services de home staging,</li>
          <li>outils et services destinés aux professionnels de l&apos;immobilier.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Données personnelles",
    content: (
      <p>
        Les modalités de traitement des données personnelles sont détaillées dans la Politique de
        confidentialité IMONI.
      </p>
    ),
  },
  {
    title: "10. Propriété intellectuelle",
    content: (
      <>
        <p>
          L&apos;ensemble des contenus, visuels, marques, logos, textes et fonctionnalités de l&apos;application
          IMONI est protégé par le droit de la propriété intellectuelle.
        </p>
        <p>Toute reproduction ou utilisation non autorisée est interdite.</p>
      </>
    ),
  },
  {
    title: "11. Responsabilité",
    content: (
      <>
        <p>
          IMONI agit exclusivement comme plateforme technologique de mise en relation et
          d&apos;accompagnement numérique.
        </p>
        <p>IMONI ne garantit pas la conclusion des transactions entre utilisateurs.</p>
        <p>Chaque utilisateur reste seul responsable :</p>
        <ul>
          <li>de ses décisions,</li>
          <li>des informations publiées,</li>
          <li>des échanges réalisés,</li>
          <li>et des engagements pris avec d&apos;autres utilisateurs.</li>
        </ul>
      </>
    ),
  },
  {
    title: "12. Suppression du compte",
    content: (
      <>
        <p>L&apos;utilisateur peut supprimer son compte à tout moment depuis l&apos;application.</p>
        <p>
          La suppression du compte entraîne la suppression des données associées, sous réserve
          des obligations légales de conservation.
        </p>
      </>
    ),
  },
  {
    title: "13. Droit applicable",
    content: (
      <>
        <p>Les présentes CGU sont soumises au droit français.</p>
        <p>En cas de litige, les tribunaux français seront seuls compétents.</p>
      </>
    ),
  },
];

export default function CguPage() {
  return (
    <section className="min-h-screen bg-white pt-28 sm:pt-36 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#8B5CF6] text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Juridique
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0F1A] leading-tight mb-4">
            Conditions Générales{" "}
            <span className="bg-linear-to-r from-[#8B5CF6] via-[#E91E8C] to-[#FF8C00] bg-clip-text text-transparent">
              d&apos;Utilisation
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
