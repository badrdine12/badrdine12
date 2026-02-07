'use client';

import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Package, Star, Users } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Product } from '@/types';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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
      setFeaturedProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  const stats = [
    { icon: Package, value: '10,000+', label: 'Produits' },
    { icon: Users, value: '50,000+', label: 'Clients' },
    { icon: Star, value: '4.9/5', label: 'Satisfaction' },
    { icon: TrendingUp, value: '98%', label: 'Livraison' },
  ];

  const categories = [
    { name: 'Ordinateurs', emoji: '💻', link: '/categories/ordinateurs' },
    { name: 'Composants', emoji: '🔧', link: '/categories/composants' },
    { name: 'Périphériques', emoji: '🖱️', link: '/categories/peripheriques' },
    { name: 'Stockage', emoji: '💾', link: '/categories/stockage' },
    { name: 'Gaming', emoji: '🎮', link: '/categories/gaming' },
    { name: 'Réseau', emoji: '🌐', link: '/categories/reseau' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 rounded-2xl">
                    <stat.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Explorez nos <span className="gradient-text">Catégories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trouvez exactement ce dont vous avez besoin parmi notre large sélection
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link key={index} href={category.link}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center cursor-pointer hover-lift"
                >
                  <div className="text-5xl mb-3">{category.emoji}</div>
                  <h3 className="font-semibold text-gray-800">{category.name}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Produits <span className="gradient-text">En Vedette</span>
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez notre sélection des meilleurs produits
              </p>
            </div>

            <Link href="/produits">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
              >
                Voir tout
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-200 h-96 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id_produit} product={product} index={index} />
              ))}
            </div>
          )}

          <div className="mt-12 text-center md:hidden">
            <Link href="/produits">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
              >
                Voir tous les produits
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à améliorer votre setup ?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Rejoignez des milliers de clients satisfaits et profitez de nos offres exceptionnelles
            </p>
            <Link href="/produits">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                Commencer maintenant
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
