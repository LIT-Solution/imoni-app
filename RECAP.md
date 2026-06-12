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
│   ├── layout.tsx               ← Navbar + FooterNav (toutes les pages)
│   ├── page.tsx                 ← Homepage : Hero + Ecosystem + Trust + WhyImoni + FooterCTA
│   ├── globals.css              ← Variables CSS, animations keyframes
│   ├── acheteur/page.tsx        ← Page acheteur ✅
│   ├── vendeur/page.tsx         ← Page vendeur 🔲 (en construction)
│   ├── pro-immo/page.tsx        ← Page pro de l'immo 🔲
│   ├── autres-pros/page.tsx     ← Page autres pros 🔲
│   └── pourquoi-imoni/page.tsx  ← Page pourquoi 🔲
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           ← Navigation sticky responsive (dégradé CTA)
│   │   ├── Footer.tsx           ← CTA "Prêt à vivre l'expérience Imoni" + QR code (homepage only)
│   │   └── FooterNav.tsx        ← Footer navigation permanent (toutes les pages)
│   ├── homepage/
│   │   ├── HeroSection.tsx      ← Hero plein écran + mockups téléphone
│   │   ├── EcosystemSection.tsx ← 4 cartes acteurs + barre bas
│   │   ├── TrustSection.tsx     ← Section confiance (fond dark)
│   │   └── WhyImoniSection.tsx  ← 3 colonnes texte/vidéo/bénéfices
│   ├── acheteur/
│   │   ├── AcheteurHero.tsx     ← Hero dark + téléphone 3D + cartes flottantes
│   │   ├── ProfileSection.tsx   ← 2 colonnes : bénéfices + visuel section-profile.webp
│   │   ├── InnovationsSection.tsx ← Carousel scroll-driven (4 innovations)
│   │   └── CtaBanner.tsx        ← Rectangle dégradé violet/indigo débordant
│   └── ui/
│       └── Check.tsx            ← Composant checkmark SVG coloré
├── public/
│   ├── imoni-logo.svg           ← Logo blanc vectoriel (117×56px)
│   ├── fond_accueille.png       ← Hero homepage background (1920×1080)
│   ├── mockup-iphone-2.png      ← Deux téléphones côte à côte
│   ├── portrait/                ← Portraits webp pour EcosystemSection
│   │   ├── femme1.webp          ← Acheteur/Vendeur
│   │   ├── homme2.webp          ← Pro de l'immo
│   │   ├── homme.webp           ← Investisseur
│   │   └── femme2.webp          ← Autres pros
│   ├── icones/
│   │   ├── poignée-de-mai_.svg  ← Barre bas EcosystemSection
│   │   ├── user-group.svg       ← "Collaboratif" barre bas
│   │   └── support.svg          ← "Accompagnement IA" TrustSection
│   └── acheteur/
│       ├── fond_acheteur.webp   ← Hero acheteur background
│       ├── phone_acheteurs.webp ← Téléphone hero acheteur
│       ├── section-profile.webp ← Visuel ProfileSection (2 téléphones)
│       ├── logo-app.webp        ← Logo app carré (CtaBanner)
│       ├── match_tel.webp       ← Innovation 1 (géolocalisation)
│       ├── offre_achat.webp     ← Innovation 2 (offre achat)
│       ├── dossier_notaire.webp ← Innovation 3 (dossier notaire)
│       └── coach_vocal.webp     ← Innovation 4 (coach vocal)
└── RECAP.md
```

---

## Pages

### Homepage ✅
1. **Navbar** — logo SVG, dégradé CTA `rounded-lg`, transparent → dark au scroll
2. **HeroSection** — fond `fond_accueille.png`, overlay, badge violet, titre dégradé, mockup `mockup-iphone-2.png`, coach vocal card waveform
3. **EcosystemSection** — `max-w-[90rem]`, 4 cards colorées (rose/bleu/vert/violet), portraits webp, badges colorés pleins, barre bas avec séparateurs + icônes custom
4. **TrustSection** — fond dark navy + dot grid, layout gauche/droite, 5 piliers cercles colorés (fond transparent, bordure colorée), `support.svg` pour Accompagnement IA
5. **WhyImoniSection** — 3 colonnes texte/vidéo/bénéfices
6. **Footer (CTA)** — CTA "Prêt à vivre l'expérience Imoni" + QR code (homepage only)
7. **FooterNav** — logo + colonnes liens + réseaux sociaux + bottom bar (toutes les pages)

### Page Acheteur ✅
1. **AcheteurHero** — fond dark `fond_acheteur.webp`, parallax, téléphone 3D perspective, 4 cartes flottantes animées (`breathe1-4`), vague bas `#F8F4FF`
2. **ProfileSection** — fond `bg-[#F8F4FF]`, 2 colonnes (visuel gauche `-translate-x-8` / texte droite), 4 bénéfices avec icônes, CTA dégradé
3. **InnovationsSection** — `bg-white`, scroll-driven horizontal (4 cards × 100vh), scale + opacity sur cards inactives, progress dots colorés, blobs décoratifs en fond
4. **CtaBanner** — rectangle `rounded-2xl` débordant `-mt-28`, dégradé indigo→violet, logo-app 112px, boutons store noirs, CTA dégradé `rounded-full`

### Page Vendeur 🔲 (à construire)
- Page vide actuellement — `app/vendeur/page.tsx`

### Pages à construire 🔲
- Pro de l'immo (`app/pro-immo/page.tsx`)
- Autres pros (`app/autres-pros/page.tsx`)
- Pourquoi Imoni (`app/pourquoi-imoni/page.tsx`)

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

## Système de layout footer

- **`FooterNav`** → dans `layout.tsx`, affiché sur toutes les pages
- **`Footer` (CTA)** → importé dans `app/page.tsx` uniquement (homepage)
- **`CtaBanner`** → spécifique à chaque page (acheteur, vendeur, etc.)

---

## Animations

| Nom | Description |
|---|---|
| `pulseWave` / `wave-bar` | Barres waveform du coach vocal |
| `breathe1-4` | Cartes flottantes hero acheteur |
| `reveal` / `reveal-left` / `reveal-right` / `reveal-scale` | Apparition au scroll |
| Hover cards | `-translate-y-1` + shadow sur survol |
| Navbar | Transition bg transparent → opaque |
| InnovationsSection | Scroll-driven horizontal (translateX) |

---

## Commandes

```bash
npm run dev       # → http://localhost:3000
npm run build
npm run start
```

---

## Prochaines étapes

- [x] Homepage complète
- [x] Page Acheteur complète
- [ ] **Page Vendeur** — à construire (en cours)
- [ ] Page Pro de l'immo
- [ ] Page Autres pros
- [ ] Page Pourquoi Imoni
- [ ] Vrais liens App Store / Google Play
- [ ] Vrai QR code
- [ ] Vraie vidéo (WhyImoni)
- [ ] Déploiement Vercel + domaine
- [ ] Schema.org pour GEO SEO
