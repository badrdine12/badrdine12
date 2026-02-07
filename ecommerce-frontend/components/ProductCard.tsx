'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const discount = calculateDiscount(product.prix, product.prix_promo);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/produits/${product.id_produit}`}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
          {/* Image Container */}
          <div className="relative h-64 bg-gray-100 overflow-hidden">
            {/* Placeholder for product image */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <span className="text-gray-400 text-6xl">🖥️</span>
            </div>

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.est_nouveau && (
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                  NOUVEAU
                </span>
              )}
              {discount > 0 && (
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                  -{discount}%
                </span>
              )}
              {product.qte_stock < 5 && product.qte_stock > 0 && (
                <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                  Stock limité
                </span>
              )}
              {product.qte_stock === 0 && (
                <span className="px-3 py-1 bg-gray-500 text-white text-xs font-bold rounded-full">
                  Rupture
                </span>
              )}
            </div>

            {/* Hover Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAddToCart}
                disabled={product.qte_stock === 0}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-primary-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-colors"
              >
                <Heart className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white rounded-full shadow-lg hover:bg-primary-600 hover:text-white transition-colors"
              >
                <Eye className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="p-6">
            {/* Category */}
            <p className="text-sm text-gray-500 mb-2">{product.categorie || 'Catégorie'}</p>

            {/* Product Name */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
              {product.nom}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-4">
              {product.prix_promo ? (
                <>
                  <span className="text-2xl font-bold text-primary-600">
                    {formatPrice(product.prix_promo)}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(product.prix)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-gray-800">
                  {formatPrice(product.prix)}
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              disabled={product.qte_stock === 0}
              className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {product.qte_stock === 0 ? 'Rupture de stock' : 'Ajouter au panier'}
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
