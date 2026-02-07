# 🚀 Guide de Démarrage - TechStore E-Commerce

## 📋 Ce qui a été créé

Un site e-commerce moderne et professionnel avec :

### ✨ Fonctionnalités Principales

1. **Interface Utilisateur Moderne**
   - Design responsive (mobile, tablette, desktop)
   - Animations fluides avec Framer Motion
   - Effets 3D avec Three.js
   - Thème moderne avec dégradés et glass morphism

2. **Pages Créées**
   - 🏠 **Page d'accueil** : Hero 3D, catégories, produits vedettes
   - 🛍️ **Catalogue produits** : Grille avec filtres et tri
   - 📦 **Détail produit** : Galerie photos, spécifications, ajout panier
   - 🛒 **Panier** : Gestion quantités, calcul total, livraison
   - 📱 Navigation complète et Footer

3. **Animations 3D**
   - Sphère 3D interactive avec effets de distorsion
   - Champ de particules animées
   - Rotation automatique de la caméra
   - Éclairage dynamique

4. **Animations UI**
   - Transitions de page fluides
   - Effets hover sur les cartes produits
   - Animations de scroll
   - Effets de scale et fade-in
   - Lift effects sur hover

5. **Fonctionnalités E-Commerce**
   - Gestion du panier persistante
   - Badges de promotion et nouveauté
   - Indicateurs de stock
   - Calcul TVA et frais de livraison
   - Actions rapides (ajout panier, favoris, partage)

## 🎨 Technologies Utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Sécurité des types
- **Three.js** - Graphiques 3D
- **@react-three/fiber** - Three.js pour React
- **@react-three/drei** - Helpers Three.js
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling moderne
- **Zustand** - Gestion d'état
- **Lucide React** - Icônes

## 🚀 Démarrage Rapide

### 1. Installation

```bash
cd ecommerce-frontend
npm install
```

### 2. Lancer en développement

```bash
npm run dev
```

Le site sera accessible sur : **http://localhost:3000**

### 3. Build de production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
ecommerce-frontend/
├── app/                          # Pages Next.js
│   ├── page.tsx                 # 🏠 Page d'accueil
│   ├── produits/
│   │   ├── page.tsx            # 📦 Liste produits
│   │   └── [id]/page.tsx       # 🔍 Détail produit
│   ├── panier/page.tsx         # 🛒 Panier
│   ├── api/                     # 🔌 API Routes
│   ├── layout.tsx               # Layout global
│   └── globals.css              # Styles globaux
│
├── components/                   # Composants React
│   ├── Navigation.tsx           # 🧭 Navigation sticky
│   ├── Footer.tsx               # 📄 Footer complet
│   ├── Hero.tsx                 # 🌟 Section hero 3D
│   ├── Scene3D.tsx              # 🎨 Scène Three.js
│   └── ProductCard.tsx          # 🎴 Carte produit
│
├── lib/
│   └── utils.ts                 # 🔧 Fonctions utilitaires
│
├── store/
│   └── cartStore.ts             # 🛒 État du panier (Zustand)
│
├── types/
│   └── index.ts                 # 📝 Types TypeScript
│
└── public/                       # 📸 Assets statiques
```

## 🎯 Fonctionnalités par Page

### 🏠 Page d'Accueil (`/`)

**Sections :**
1. **Hero Section**
   - Animation 3D en arrière-plan
   - Titre avec texte gradient
   - 2 CTAs (Explorer / Voir promos)
   - Stats animées (flottantes)

2. **Section Stats**
   - 4 indicateurs clés
   - Icônes animées
   - Compteurs

3. **Catégories**
   - 6 catégories principales
   - Emojis + hover effects
   - Liens vers filtres

4. **Produits Vedette**
   - Grille responsive (1-4 colonnes)
   - Cartes produits animées
   - Badges (nouveau, promo, stock)

5. **CTA Final**
   - Gradient background
   - Appel à l'action

### 🛍️ Page Produits (`/produits`)

**Fonctionnalités :**
- Filtres par catégorie
- Tri (récents, prix, nom)
- Sidebar filtres (desktop)
  - Prix (slider)
  - Disponibilité
  - Nouveautés
  - Promotions
- Grille responsive
- Compteur de produits

### 🔍 Page Détail Produit (`/produits/[id]`)

**Sections :**
- Breadcrumb navigation
- Galerie images (4 thumbnails)
- Informations produit
  - Badges
  - Nom et référence
  - Notes et avis
  - Description
  - Prix (original + promo)
  - Stock indicator
  - Sélecteur quantité
  - Boutons d'action
- Caractéristiques techniques
- Produits similaires

### 🛒 Panier (`/panier`)

**Fonctionnalités :**
- Liste des articles
- Contrôles quantité (+/-)
- Suppression article
- Récapitulatif :
  - Sous-total
  - Livraison (gratuite > 500 MAD)
  - TVA 20%
  - Total
- Alerte livraison gratuite
- Bouton commande
- État vide avec CTA

## 🎨 Personnalisation

### Couleurs

Modifiez `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... votre palette
    900: '#0c4a6e',
  },
}
```

### Animations

Dans `globals.css` ou composants :

```css
.custom-animation {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Scene 3D

Modifiez `components/Scene3D.tsx` :

```typescript
// Changer la couleur de la sphère
<MeshDistortMaterial
  color="#667eea"  // Votre couleur
  distort={0.4}    // Intensité distorsion
  speed={2}        // Vitesse animation
/>

// Ajuster les particules
const particleCount = 1000; // Nombre de particules
```

## 🔌 Connexion Base de Données

### Configuration

1. Créez `.env.local` :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=ecommerce_operations
```

2. Installez MySQL2 :

```bash
npm install mysql2
```

3. Créez `lib/db.ts` :

```typescript
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
```

4. Modifiez les API routes :

```typescript
// app/api/products/route.ts
import { db } from '@/lib/db';

export async function GET() {
  const [rows] = await db.query('SELECT * FROM produits');
  return NextResponse.json({ data: rows });
}
```

## 🎯 Routes API

### Produits

- `GET /api/products` - Liste produits
- `GET /api/products/[id]` - Produit par ID
- `POST /api/products` - Créer produit
- `PUT /api/products/[id]` - Modifier produit
- `DELETE /api/products/[id]` - Supprimer produit

### Exemple d'utilisation

```typescript
// Récupérer les produits
const response = await fetch('/api/products');
const { data } = await response.json();

// Récupérer un produit
const response = await fetch('/api/products/1');
const { data: product } = await response.json();
```

## 📱 Responsive Breakpoints

```
Mobile:   < 768px
Tablet:   768px - 1024px
Desktop:  > 1024px
```

Exemples Tailwind :
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* 1 col mobile, 2 tablet, 4 desktop */}
</div>
```

## ⚡ Optimisation Performance

1. **Images** : Utilisez Next.js Image component
```tsx
import Image from 'next/image';
<Image src="/photo.jpg" alt="" width={500} height={500} />
```

2. **Lazy Loading** : Three.js chargé dynamiquement
```tsx
const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });
```

3. **Code Splitting** : Automatique avec Next.js App Router

## 🛠️ Développement

### Ajouter une nouvelle page

```bash
# Créez un dossier dans app/
mkdir app/nouvelle-page

# Créez page.tsx
echo "export default function NouvellePage() {
  return <div>Ma nouvelle page</div>;
}" > app/nouvelle-page/page.tsx
```

Route automatique : `/nouvelle-page`

### Ajouter un composant

```tsx
// components/MonComposant.tsx
'use client'; // Si utilise hooks

export default function MonComposant() {
  return <div>Mon composant</div>;
}
```

### Utiliser le store Zustand

```tsx
import { useCartStore } from '@/store/cartStore';

function MonComposant() {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  
  return <button onClick={() => addItem(product, 1)}>
    Ajouter
  </button>;
}
```

## 🎨 Classes Utilitaires Custom

```css
.gradient-text        /* Texte avec gradient */
.glass               /* Effet glass morphism */
.hover-lift          /* Effet lift au hover */
.smooth-transition   /* Transition fluide */
```

## 📚 Documentation Utile

- [Next.js](https://nextjs.org/docs)
- [Three.js](https://threejs.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)

## 🐛 Dépannage

### Erreur "Module not found"
```bash
npm install
```

### Erreur Three.js SSR
Ajoutez `'use client'` en haut du fichier ou utilisez dynamic import

### Port 3000 occupé
```bash
npm run dev -- -p 3001  # Utilise port 3001
```

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Build manuel

```bash
npm run build
npm start
```

## 📞 Support

Pour toute question, consultez :
- README.md du projet
- Documentation des technologies
- Commentaires dans le code

## 🎉 Prochaines Étapes

1. ✅ Connecter à votre base MySQL
2. ✅ Ajouter vos vraies images produits
3. ✅ Implémenter le système de paiement
4. ✅ Ajouter l'authentification utilisateur
5. ✅ Créer le dashboard admin
6. ✅ Ajouter le suivi de commande
7. ✅ Mettre en place les emails
8. ✅ Déployer en production

---

**Bon développement ! 🚀**

*Projet créé pour le Mini-Projet BDD - ENSET 2025-2026*
