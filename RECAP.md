# Imoni — Récap projet

## Stack technique

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Style | Tailwind CSS v4 |
| Langage | TypeScript |
| Fonts | DM Sans (corps) + Playfair Display (display) |
| Déploiement cible | Vercel / Netlify / Cloudflare Pages |

---

## Structure des fichiers

```
imoni-app/
├── app/
│   ├── layout.tsx          ← Métadonnées SEO, fonts, lang="fr"
│   ├── page.tsx            ← Assemblage des sections
│   └── globals.css         ← Variables CSS, animations keyframes
├── components/
│   ├── Navbar.tsx          ← Navigation sticky responsive
│   ├── HeroSection.tsx     ← Hero plein écran + mockups téléphone
│   ├── EcosystemSection.tsx ← 4 cartes acteurs
│   ├── TrustSection.tsx    ← Section confiance (fond sombre)
│   ├── WhyImoniSection.tsx ← 3 colonnes : texte / vidéo / bénéfices
│   └── FooterCTA.tsx       ← CTA download + QR code + footer
├── public/
│   ├── imoni-logo.svg      ← Logo blanc vectoriel (117×56px)
│   ├── fond_accueille.png  ← Image de fond hero (1920×1080)
│   └── mockup-iphone-2.png ← Deux téléphones côte à côte (une seule image)
└── RECAP.md
```

---

## Sections homepage

### 1. Navbar ✅
- Vrai logo SVG `imoni-logo.svg` (blanc, 140×54px)
- Liens : Accueil · Acheteur · Vendeur · Pro de l'immo · Autres pros · Pourquoi Imoni
- CTA `Télécharger l'app` (rose `#E91E8C`, arrondi)
- Transparente au top → `bg-[#0D0F1A]/95 backdrop-blur-md` au scroll
- Menu hamburger sur mobile
- Texte nav : `text-base font-medium`, actif blanc + underline rose, inactif `text-white/90`

### 2. Hero ✅
- Image de fond réelle `fond_accueille.png` (`object-cover object-center`)
- Overlay dégradé gauche opaque (`from-[#0D0F1A]/55`) → transparent
- Badge pill "LE SITE DE RENCONTRE IMMOBILIER" (fond `bg-purple-900/30` transparent violet)
- Titre : "L'immobilier devrait être" (blanc) + **"une rencontre."** (dégradé `#E91E8C → #FF4D6D → #FF8C00`)
- Sous-titre blanc, 4 features (icônes + texte)
- Boutons App Store + Google Play (fond noir/80, border white/15, icônes w-8)
- Mockup `mockup-iphone-2.png` : une seule image contenant les 2 téléphones (`w-[600px] h-[720px]`)
  - Positionné avec `translate-x-16 -translate-y-12` (sans affecter la hauteur de page)
- Carte "Votre coach vocal Imoni 24/24" : `absolute -bottom-8 right-0`, fond blanc, waveform animée
- Vague de transition bas → blanc

**Valeurs clés à ajuster si besoin :**
- Taille mockup : `lg:w-[600px] lg:h-[720px]`
- Décalage mockup : `translate-x-16 -translate-y-12`
- Colonne gauche décalage : `lg:-ml-12`

### 3. Écosystème ✅
- Conteneur `max-w-[90rem]` (plus large que les autres sections pour des cards plus spacieuses)
- Titre : "Un écosystème immobilier **collaboratif**…" (gradient rose-orange sur "collaboratif")
- Grid `sm:grid-cols-2 xl:grid-cols-4 gap-5`
- 4 cartes avec couleurs thématiques, avatar gradient + badge icône :
  - **Rose** `#E91E8C` → Acheteur / Vendeur (2 sous-sections + 2 boutons)
  - **Bleu** `#3B82F6` → Pro de l'immo · Agent immobilier
  - **Vert** `#10B981` → Investisseur / Marchand de biens
  - **Violet** `#8B5CF6` → Autres professionnels
- Checklists colorées avec composant `Check` SVG réutilisable
- Hover effect : `-translate-y-1` + `shadow-xl`
- Barre bas `bg-gray-50 rounded-2xl` : tagline Imoni + 3 stats (Sécurisé · Collaboratif · 100% Gratuit)

### 4. Confiance 🔲
- Fond navy sombre (gradient `#0D0F1A → #141628`)
- Texte gauche + 5 piliers droite avec icônes colorés :
  Neutre · Profils vérifiés · Transactions sécurisées · Confidentialité · Accompagnement IA

### 5. Pourquoi Imoni 🔲
- 3 colonnes :
  - **Gauche** : pitch texte + 3 badges pricing (19€/mois · 120€/mois · 3 mois gratuits)
  - **Centre** : vignette vidéo avec bouton play + localisation Gironde
  - **Droite** : 3 bénéfices avec icônes (rose · orange · violet)

### 6. Footer CTA 🔲
- Fond dégradé sombre violet/rose
- "Prêt à vivre l'expérience **Imoni** ?"
- Boutons App Store + Google Play
- QR code placeholder
- Liens légaux (Mentions légales · CGU · Confidentialité)

---

## Charte graphique

| Couleur | Usage | Hex |
|---|---|---|
| Rose / Magenta | Couleur principale, CTA, accents | `#E91E8C` |
| Navy | Fonds sombres | `#0D0F1A` |
| Bleu | Agents immobiliers | `#3B82F6` |
| Vert | Investisseurs | `#10B981` |
| Violet | Autres pros | `#8B5CF6` |
| Amber | Accompagnement / IA | `#F59E0B` |
| Orange | Dégradé titre/accent | `#FF8C00` |

---

## Animations

| Nom | Description |
|---|---|
| `pulseWave` / `wave-bar` | Barres waveform du coach vocal |
| `reveal` + Intersection Observer | Apparition au scroll (fade + translateY) |
| Hover cards | `-translate-y-1` + shadow sur survol |
| Navbar | Transition bg transparent → opaque |

> Note : l'animation `float` des téléphones a été supprimée (statique).

---

## Assets publics

| Fichier | Dimensions | Usage |
|---|---|---|
| `imoni-logo.svg` | 117×56px | Navbar (rendu 140×54) |
| `fond_accueille.png` | 1920×1080px | Hero background |
| `mockup-iphone-2.png` | — | Deux téléphones dans une image |

---

## SEO

- `lang="fr"` sur `<html>`
- `<title>` : Imoni - Le site de rencontre immobilier
- `<meta description>` : Imoni connecte vendeurs, acquéreurs et professionnels…
- `keywords` : immobilier, achat, vente, agence, application, coach vocal IA
- Open Graph configuré (titre + description + locale fr_FR)
- HTML sémantique : `<nav>`, `<section>`, `<h1>`, `<h2>`, `<footer>`

---

## Commandes

```bash
# Développement
npm run dev       # → http://localhost:3000

# Production
npm run build
npm run start
```

---

## Prochaines étapes

- [ ] Redesign TrustSection (section confiance — design à fournir)
- [ ] Redesign WhyImoniSection (section pourquoi — design à fournir)
- [ ] Redesign FooterCTA (footer — design à fournir)
- [ ] Ajouter les vrais liens App Store / Google Play
- [ ] Créer les pages internes (Acheteur, Vendeur, Pro de l'immo…)
- [ ] Intégrer le vrai QR code
- [ ] Ajouter une vraie vidéo (section Pourquoi Imoni)
- [ ] Configurer le domaine et déployer sur Vercel
- [ ] Ajouter schema.org (données structurées) pour le GEO
