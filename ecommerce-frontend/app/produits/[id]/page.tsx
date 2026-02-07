'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2, Check, Truck, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Product } from '@/types';
import { formatPrice, calculateDiscount } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    // Mock data - In production, fetch from API
    const mockProduct: Product = {
      id_produit: parseInt(params.id as string),
      id_categorie: 7,
      reference: 'LAP-HP-001',
      nom: 'HP Pavilion 15',
      description: 'Ordinateur portable polyvalent pour le quotidien',
      details_techniques: `Processeur: Intel Core i5-1235U
RAM: 8 Go DDR4
SSD: 512 Go
Écran: 15.6" FHD IPS
OS: Windows 11`,
      prix: 7999.00,
      prix_promo: 7499.00,
      qte_stock: 15,
      image_url: '/images/hp-pavilion-15.jpg',
      date_ajout: new Date().toISOString(),
      est_nouveau: true,
      categorie: 'PC Portables',
    };

    const mockRelated: Product[] = [
      {
        id_produit: 2,
        id_categorie: 7,
        reference: 'LAP-DELL-001',
        nom: 'Dell Inspiron 14',
        description: 'Laptop fin et léger pour professionnels',
        details_techniques: 'Intel Core i7, 16GB RAM',
        prix: 9999.00,
        prix_promo: null,
        qte_stock: 10,
        image_url: '/images/dell-inspiron.jpg',
        date_ajout: new Date().toISOString(),
        est_nouveau: true,
        categorie: 'PC Portables',
      },
    ];

    setProduct(mockProduct);
    setRelatedProducts(mockRelated);
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  const discount = calculateDiscount(product.prix, product.prix_promo);
  const currentPrice = product.prix_promo || product.prix;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link href="/produits" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700">
            <ArrowLeft className="w-4 h-4" />
            Retour aux produits
          </Link>
        </motion.div>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-9xl">🖥️</span>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg p-4 border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                    <span className="text-2xl">🖥️</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.est_nouveau && (
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                  NOUVEAU
                </span>
              )}
              {discount > 0 && (
                <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                  -{discount}%
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.nom}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="text-gray-600">(127 avis)</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Réf: {product.reference}</span>
            </div>

            <p className="text-xl text-gray-600 mb-6">{product.description}</p>

            {/* Price */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                {product.prix_promo ? (
                  <>
                    <span className="text-4xl font-bold text-primary-600">
                      {formatPrice(product.prix_promo)}
                    </span>
                    <span className="text-2xl text-gray-400 line-through">
                      {formatPrice(product.prix)}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-gray-800">
                    {formatPrice(product.prix)}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">TVA incluse • Livraison calculée à la caisse</p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-6">
              {product.qte_stock > 0 ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-green-600 font-medium">
                    En stock ({product.qte_stock} disponibles)
                  </span>
                </>
              ) : (
                <span className="text-red-600 font-medium">Rupture de stock</span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium text-gray-700">Quantité:</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-semibold"
                >
                  -
                </button>
                <span className="font-semibold text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.qte_stock, quantity + 1))}
                  disabled={quantity >= product.qte_stock}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-semibold disabled:opacity-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={product.qte_stock === 0}
                className="flex-1 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Ajouter au panier
              </motion.button>

              <button className="p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                <Heart className="w-6 h-6" />
              </button>

              <button className="p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Livraison rapide</h4>
                  <p className="text-sm text-gray-600">Livraison en 2-3 jours ouvrables</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Garantie constructeur</h4>
                  <p className="text-sm text-gray-600">2 ans de garantie incluse</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Caractéristiques techniques</h2>
          <div className="prose max-w-none">
            <pre className="whitespace-pre-wrap text-gray-700 font-sans">
              {product.details_techniques}
            </pre>
          </div>
        </motion.div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Produits <span className="gradient-text">Similaires</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id_produit} product={relatedProduct} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
