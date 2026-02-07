'use client';

import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartStore();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 500 ? 0 : 50;
  const tax = subtotal * 0.2; // 20% TVA
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Votre panier est vide
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Commencez vos achats dès maintenant !
            </p>
            <Link href="/produits">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Continuer mes achats
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

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
            Mon <span className="gradient-text">Panier</span>
          </h1>
          <p className="text-xl text-gray-600">
            {items.length} article{items.length > 1 ? 's' : ''} dans votre panier
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.product.id_produit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">🖥️</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <Link href={`/produits/${item.product.id_produit}`}>
                      <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition-colors mb-2">
                        {item.product.nom}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-600 mb-3">
                      {item.product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.product.id_produit, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-gray-800 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id_produit, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          disabled={item.quantity >= item.product.qte_stock}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price and Remove */}
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-800 mb-2">
                          {formatPrice((item.product.prix_promo || item.product.prix) * item.quantity)}
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id_produit)}
                          className="text-red-500 hover:text-red-700 transition-colors inline-flex items-center gap-1 text-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                          Retirer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Continue Shopping */}
            <Link href="/produits">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Continuer mes achats
              </motion.button>
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Récapitulatif
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'Gratuite' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>TVA (20%)</span>
                  <span className="font-semibold">{formatPrice(tax)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800">
                    <span>Total</span>
                    <span className="text-primary-600">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              {subtotal < 500 && (
                <div className="bg-blue-50 text-blue-700 p-4 rounded-lg mb-6 text-sm">
                  Ajoutez {formatPrice(500 - subtotal)} pour bénéficier de la livraison gratuite
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all mb-4"
              >
                Passer la commande
              </motion.button>

              <div className="text-center text-sm text-gray-500">
                Paiement 100% sécurisé
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
