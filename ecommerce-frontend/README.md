# TechStore E-Commerce Frontend

Modern e-commerce website built with Next.js, Three.js, and React with stunning animations.

## 🚀 Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helpers for react-three-fiber
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - State management
- **Lucide React** - Beautiful icons

## ✨ Features

- 🎨 Modern, responsive design
- 🎭 Stunning 3D animations with Three.js
- 🛒 Shopping cart with persistent state
- 🔍 Product browsing and filtering
- 📱 Mobile-friendly interface
- ⚡ Fast page transitions
- 🎯 Smooth scroll animations
- 💳 Ready for payment integration

## 🏗️ Project Structure

```
ecommerce-frontend/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── produits/          # Products pages
│   ├── panier/            # Cart page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section with 3D
│   ├── Scene3D.tsx        # Three.js 3D scene
│   └── ProductCard.tsx    # Product card component
├── lib/                   # Utilities
│   └── utils.ts           # Helper functions
├── store/                 # State management
│   └── cartStore.ts       # Shopping cart store
├── types/                 # TypeScript types
│   └── index.ts           # Type definitions
└── public/                # Static assets

## 🎨 Design Features

### 3D Animations
- Interactive 3D sphere with distortion effects
- Floating particle field
- Auto-rotating camera
- Dynamic lighting

### UI Animations
- Smooth page transitions
- Hover lift effects on cards
- Scale and fade-in animations
- Gradient text effects
- Glass morphism UI elements

### Color Scheme
- Primary: Blue gradient (#0ea5e9 to #667eea)
- Secondary: Purple (#764ba2)
- Accent: Various gradients

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🗄️ Database Integration

The application is designed to work with a MySQL database. To connect:

1. Set up your MySQL database using the provided SQL scripts
2. Create a `.env.local` file with your database credentials:

```env
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=ecommerce_operations
```

3. Update the API routes in `app/api/` to connect to your database

## 📦 API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

## 🎯 Key Components

### Hero Section
- 3D background animation
- Call-to-action buttons
- Floating stats cards
- Smooth entrance animations

### Product Cards
- Image gallery
- Price with discount badges
- Stock status indicators
- Quick actions (cart, wishlist, quick view)
- Hover effects

### Shopping Cart
- Persistent storage
- Quantity controls
- Real-time total calculation
- Shipping and tax calculation
- Empty state handling

### Navigation
- Sticky header with backdrop blur
- Cart badge with item count
- Mobile responsive menu
- Smooth scroll behavior

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    // Your color scale
  }
}
```

### Animations
Modify animation settings in `tailwind.config.ts` or component-level in Framer Motion configs.

### 3D Effects
Customize the 3D scene in `components/Scene3D.tsx`:
- Change sphere distortion
- Adjust particle count
- Modify colors and materials
- Add new 3D objects

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Efficient state management with Zustand
- Three.js lazy loading with dynamic imports

## 🛠️ Development

### Adding New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. The route is automatically generated

### Adding API Routes
1. Create route in `app/api/`
2. Export GET, POST, PUT, DELETE functions
3. Use Next.js Response helpers

### State Management
The app uses Zustand for cart state. To add new stores:

```typescript
import { create } from 'zustand';

const useStore = create((set) => ({
  // Your state here
}));
```

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📄 License

This project is part of the Mini-Projet BDD - ENSET 2025-2026.

## 👥 Authors

ENSET 2025-2026 Students

## 🙏 Acknowledgments

- Three.js for 3D graphics
- Vercel for Next.js
- Framer for motion library
- Tailwind Labs for Tailwind CSS
```

