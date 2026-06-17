# Imoni — Récap projet

## Stack technique

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Style | Tailwind CSS v4 |
| Langage | TypeScript |
| Fonts | DM Sans (corps) + Playfair Display (display) |
| Déploiement | Netlify (imoni-dev.netlify.app) |

---

## Structure des fichiers

```
imoni-app/
├── app/
│   ├── layout.tsx               ← Navbar + FooterNav + SplashWrapper (toutes les pages)
│   ├── page.tsx                 ← Homepage
│   ├── globals.css              ← Variables CSS, animations keyframes, splash-bar
│   ├── acheteur/page.tsx        ← Page acheteur ✅
│   ├── vendeur/page.tsx         ← Page vendeur ✅
│   ├── investisseur/page.tsx    ← Page investisseur ✅
│   ├── professionnels/page.tsx  ← Page professionnels ✅
│   ├── partenaires/page.tsx     ← Page partenaires ✅
│   ├── pro-immo/page.tsx        ← Page pro de l'immo
│   ├── autres-pros/page.tsx     ← Page autres pros
│   ├── pourquoi-imoni/page.tsx  ← Page pourquoi Imoni
│   ├── cgu/page.tsx             ← CGU
│   ├── confidentialite/page.tsx ← Confidentialité
│   └── contact/                 ← Page contact
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           ← Navigation sticky responsive (dégradé CTA)
│   │   ├── FooterNav.tsx        ← Footer navigation permanent (toutes les pages)
│   │   ├── SplashScreen.tsx     ← Écran de chargement (logo + barre dégradée)
│   │   └── SplashWrapper.tsx    ← Wrapper client dynamic(ssr:false) pour SplashScreen
│   ├── homepage/
│   │   ├── HeroSection.tsx      ← Hero plein écran + mockups téléphone
│   │   ├── EcosystemSection.tsx ← 4 cartes acteurs
│   │   ├── TrustSection.tsx     ← Section confiance (fond dark)
│   │   └── WhyImoniSection.tsx  ← 3 colonnes texte/vidéo/bénéfices
│   ├── acheteur/
│   │   ├── AcheteurHero.tsx     ← Hero dark + téléphone 3D + cartes flottantes
│   │   ├── ProfileSection.tsx   ← 2 colonnes : bénéfices + visuel
│   │   ├── InnovationsSection.tsx ← Carousel scroll-driven (4 innovations)
│   │   └── CtaBanner.tsx        ← Rectangle dégradé violet/indigo
│   ├── vendeur/
│   │   ├── VendeurHero.tsx      ← Hero dark + phone + cartes latérales
│   │   ├── AlgorithmeSection.tsx
│   │   ├── AvantagesSection.tsx
│   │   └── SecuriteSection.tsx
│   ├── investisseur/
│   │   ├── InvestisseurHero.tsx ← Hero dark + homme + phone + badge cercle
│   │   ├── ProfilStrategie.tsx  ← Carousel stack auto-slide
│   │   ├── InvestisseurCta.tsx
│   │   └── ...
│   ├── professionnels/
│   │   ├── ProHero.tsx          ← Hero dark + phone + badge 3 mois offerts
│   │   ├── AvantagesProSection.tsx
│   │   ├── ProCta.tsx
│   │   └── ...
│   ├── partenaires/
│   │   ├── PartenairesHero.tsx  ← Hero fond warm + personnages + carte notif
│   │   ├── NotificationsSection.tsx ← Phone + notifications intelligentes
│   │   ├── CiblageSection.tsx
│   │   ├── CarrouselPartenaires.tsx
│   │   └── ...
│   └── ui/
│       └── Check.tsx            ← Composant checkmark SVG coloré
├── hooks/
│   ├── useReveal.ts             ← Intersection Observer pour animations reveal
│   └── useParallax.ts           ← Effet parallax au scroll
├── public/
│   ├── imoni-logo.svg           ← Logo blanc vectoriel
│   ├── fond_accueille.png       ← Hero homepage background
│   ├── mockup-iphone-2.png      ← Deux téléphones côte à côte
│   ├── portrait/                ← Portraits webp
│   ├── icones/                  ← Icônes SVG
│   ├── vendeur/                 ← Assets vendeur
│   ├── investisseur/            ← Assets investisseur (hero_sir, hero_phone, hero_fond)
│   ├── professionel/            ← Assets pro (phone_pro, background_pro)
│   └── partenaire/              ← Assets partenaires (check_partenaire, phone_partenaire_2)
└── RECAP.md
```

---

## Pages

### Homepage ✅
1. **Navbar** — logo SVG, dégradé CTA, transparent → dark au scroll
2. **HeroSection** — fond image, overlay, badge violet, titre dégradé, mockup 2 phones, coach vocal card
3. **EcosystemSection** — 4 cards colorées, portraits webp, badges
4. **TrustSection** — fond dark navy + dot grid, 5 piliers cercles colorés
5. **WhyImoniSection** — 3 colonnes texte/vidéo/bénéfices
6. **Footer CTA** — homepage only
7. **FooterNav** — toutes les pages

### Page Acheteur ✅
1. **AcheteurHero** — fond dark, parallax, téléphone 3D perspective, 3 cartes flottantes animées
2. **ProfileSection** — fond `#F8F4FF`, 2 colonnes, 4 bénéfices
3. **InnovationsSection** — scroll-driven horizontal (4 cards)
4. **CtaBanner** — rectangle dégradé indigo→violet

### Page Vendeur ✅
1. **VendeurHero** — fond dark, phone + cartes latérales (géolocalisation, acquéreurs)
2. **AlgorithmeSection** — explication matching
3. **AvantagesSection** — bénéfices vendeur
4. **SecuriteSection** — sécurité et confidentialité

### Page Investisseur ✅
1. **InvestisseurHero** — fond image + homme + phone profil investisseur + badge "Une première en France"
2. **ProfilStrategie** — carousel stack auto-slide
3. **OpportunitesSection** — timeline verticale alternée
4. **ReassuranceBand** — bande dark 4 items
5. **InvestisseurCta**

### Page Professionnels ✅
1. **ProHero** — fond dark parallax + phone + badge cercle "3 mois offerts"
2. **AvantagesProSection**
3. **ProCta**

### Page Partenaires ✅
1. **PartenairesHero** — fond warm blurred + personnages + carte notification flottante
2. **NotificationsSection** — phone + 4 notifications intelligentes en quinconce
3. **CiblageSection** — ciblage des partenaires
4. **CarrouselPartenaires**

---

## Splash Screen

- **SplashScreen.tsx** — écran de chargement à l'entrée du site
  - Fond `#0D0F1A`, logo blanc Imoni centré, barre dégradée violet→rose→orange
  - S'affiche uniquement à la première visite de la session (`sessionStorage`)
  - Durée : 2.6s remplissage + 0.5s fade-out
  - Chargé via `dynamic(ssr: false)` dans `SplashWrapper.tsx` pour éviter les erreurs d'hydratation
  - Animation CSS `splash-bar` définie dans `globals.css`

---

## Responsive Design

### Breakpoints Tailwind

| Breakpoint | Viewport | Cible |
|---|---|---|
| base | < 640px | Téléphones (375px ref) |
| `sm:` | 640-1023px | Tablettes |
| `lg:` | 1024-1535px | **Laptops / MacBook Air** (~1280-1440px) — éléments réduits |
| `2xl:` | 1536px+ | **Écrans 24"** (1920px+) — dimensions de référence |

### Stratégie
- **Référence design** : écran 24 pouces (1920px) → valeurs `2xl:`
- **Laptop** : tailles réduites (~70%) pour titres, phones, badges → valeurs `lg:`
- **Mobile/Tablette** : layout empilé, éléments adaptés → valeurs base / `sm:`
- Container `max-w-7xl` (1280px) centré sur desktop
- `overflow-hidden` sur les sections pour éviter les débordements

### Composants adaptés (lg: → 2xl:)
- **HeroSection** : titre 3rem → 4.5rem, phones w-100 → w-140, rapprochés du texte
- **AcheteurHero** : phone w-100/h-140, cartes flottantes décalées (-left-28, -right-32)
- **VendeurHero** : phone w-72 → w-80, bloc rapproché du texte (lg:-ml-12)
- **ProHero** : phone w-120/h-165 → w-150/h-200, badge w-56 → w-68, collé au phone
- **InvestisseurHero** : homme w-100 → w-150, phone w-100 → w-140, badge w-52 → w-72, groupe positionné à right-[28%]
- **PartenairesHero** : titre text-5xl → text-7xl, padding pl-16 → pl-36, carte notif right-[13%] → right-[16%]
- **NotificationsSection** : phone h-550px → h-700px, padding réduit
- **EcosystemSection** : titre 2rem → 2.6rem

---

## Charte graphique

| Couleur | Usage | Hex |
|---|---|---|
| Rose / Magenta | Couleur principale, CTA, accents | `#E91E8C` |
| Navy | Fonds sombres | `#0D0F1A` |
| Bleu | Agents immobiliers | `#1D6FEB` |
| Vert | Investisseurs | `#10B981` |
| Violet | Autres pros / acheteur | `#8B5CF6` / `#7C22E8` |
| Amber | Accompagnement / IA | `#F59E0B` |
| Orange | Dégradé titre/accent | `#FF8C00` |
| Indigo | CtaBanner acheteur | `#4C1D95` → `#1e1b4b` |

---

## Animations

| Nom | Description |
|---|---|
| `splash-bar` | Remplissage barre splash screen (0% → 100%) |
| `pulseWave` / `wave-bar` | Barres waveform du coach vocal |
| `breathe1-4` | Cartes/badges flottants animés |
| `reveal` / `reveal-left` / `reveal-right` / `reveal-scale` | Apparition au scroll (IntersectionObserver) |
| Hover cards | `-translate-y-1` + shadow sur survol |
| Navbar | Transition bg transparent → opaque |
| InnovationsSection | Scroll-driven horizontal (translateX) |

---

## Notes techniques

- **Tailwind v4** : utiliser `bg-linear-to-r` (PAS `bg-gradient-to-r`)
- **Images** : `placeholder="blur"` avec `blurDataURL` pour le chargement
- **Next.js 16** : lire les guides dans `node_modules/next/dist/docs/` avant de coder
- **SplashScreen** : obligatoirement chargé avec `dynamic(ssr: false)` via un wrapper client pour éviter les erreurs d'hydratation SSR
- **Parallax** : hook `useParallax` utilisé sur les heroes avec fond image

---

## Commandes

```bash
npm run dev       # → http://localhost:3000
npm run build     # Build production
npm run start     # Serveur production
```

---

## Prochaines étapes

- [x] Homepage complète
- [x] Page Acheteur complète
- [x] Page Vendeur complète
- [x] Page Investisseur complète
- [x] Page Professionnels complète
- [x] Page Partenaires complète
- [x] Responsive mobile/tablette (base + sm:)
- [x] Responsive laptop (lg: breakpoint)
- [x] Splash screen (première visite)
- [ ] Page Contact
- [ ] Vrais liens App Store / Google Play
- [ ] Vrai QR code
- [ ] Vraie vidéo (WhyImoni)
- [ ] Déploiement domaine final
- [ ] Schema.org pour GEO SEO
