'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sortBy, setSortBy] = useState<string>('newest');

  useEffect(() => {
    // Mock data - In production, fetch from API
    const mockProducts: Product[] = [
      {
        id_produit: 1,
        id_categorie: 7,
        reference: 'LAP-HP-001',
        nom: 'HP Pavilion 15',
        description: 'Ordinateur portable polyvalent pour le quotidien',
        details_techniques: 'Intel Core i5, 8GB RAM, 512GB SSD',
        prix: 7999.00,
        prix_promo: 7499.00,
        qte_stock: 15,
        image_url: '/images/hp-pavilion-15.jpg',
        date_ajout: new Date().toISOString(),
        est_nouveau: true,
        categorie: 'PC Portables',
      },
      {
        id_produit: 2,
        id_categorie: 7,
        reference: 'LAP-DELL-001',
        nom: 'Dell Inspiron 14',
        description: 'Laptop fin et léger pour professionnels',
        details_techniques: 'Intel Core i7, 16GB RAM, 512GB NVMe',
        prix: 9999.00,
        prix_promo: null,
        qte_stock: 10,
        image_url: '/images/dell-inspiron.jpg',
        date_ajout: new Date().toISOString(),
        est_nouveau: true,
        categorie: 'PC Portables',
      },
      {
        id_produit: 3,
        id_categorie: 7,
        reference: 'LAP-ASUS-001',
        nom: 'ASUS VivoBook 15',
        description: 'Ordinateur portable étudiant',
        details_techniques: 'AMD Ryzen 5, 8GB RAM, 256GB SSD',
        prix: 5999.00,
        prix_promo: 5499.00,
        qte_stock: 25,
        image_url: '/images/asus-vivobook.jpg',
        date_ajout: new Date().toISOString(),
        est_nouveau: true,
        categorie: 'PC Portables',
      },
      {
        id_produit: 5,
        id_categorie: 9,
        reference: 'GAM-MSI-001',
        nom: 'MSI Katana GF66',
        description: 'PC portable gaming haute performance',
        details_techniques: 'Intel Core i7, RTX 4060, 16GB RAM',
        prix: 15999.00,
        prix_promo: 14999.00,
        qte_stock: 6,
        image_url: '/images/msi-katana.jpg',
        date_ajout: new Date().toISOString(),
        est_nouveau: true,
        categorie: 'PC Gamer',
      },
      {
        id_produit: 9,
        id_categorie: 11,
        reference: 'CPU-AMD-001',
        nom: 'AMD Ryzen 7 7800X3D',
        description: 'Meilleur CPU gaming',
        details_techniques: '8 Cores, 16 Threads, 5.0 GHz',
        prix: 4999.00,
        prix_promo: 4699.00,
        qte_stock: 8,
        image_url: '/images/amd-ryzen.jpg',
        date_ajout: new Date().toISOString(),
        est_nouveau: true,
        categorie: 'Processeurs',
      },
      {
        id_produit: 11,
        id_categorie: 12,
        reference: 'GPU-NV-001',
        nom: 'NVIDIA RTX 4060',
        description: 'Carte graphique gaming entrée de gamme',
        details_techniques: '8GB GDDR6, DLSS 3',
        prix: 3999.00,
        prix_promo: 3799.00,
        qte_stock: 15,
        image_url: '/images/rtx-4060.jpg',
        date_ajout: new Date().toISOString(),
        est_nouveau: false,
        categorie: 'Cartes Graphiques',
      },
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'laptops', label: 'PC Portables' },
    { value: 'gaming', label: 'PC Gamer' },
    { value: 'components', label: 'Composants' },
    { value: 'peripherals', label: 'Périphériques' },
  ];

  const sortOptions = [
    { value: 'newest', label: 'Plus récents' },
    { value: 'price_asc', label: 'Prix croissant' },
    { value: 'price_desc', label: 'Prix décroissant' },
    { value: 'name', label: 'Nom A-Z' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Nos <span className="gradient-text">Produits</span>
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez notre collection complète de produits high-tech
          </p>
        </motion.div>

        {/* Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-4 mb-8"
        >
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Sort Filter */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filtres
              </button>
            </div>

            <div className="text-gray-600">
              <span className="font-semibold">{products.length}</span> produits
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Filters - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Filtres</h3>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Prix</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0 MAD</span>
                    <span>{priceRange[1]} MAD</span>
                  </div>
                </div>
              </div>

              {/* Stock Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Disponibilité</h4>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">En stock uniquement</span>
                </label>
              </div>

              {/* New Products */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">État</h4>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Nouveautés</span>
                </label>
              </div>

              {/* Promotions */}
              <div className="mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">En promotion</span>
                </label>
              </div>

              <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors">
                Réinitialiser
              </button>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-200 h-96 rounded-2xl animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <ProductCard key={product.id_produit} product={product} index={index} />
                ))}
              </div>
            )}

            {!loading && products.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">Aucun produit trouvé</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
