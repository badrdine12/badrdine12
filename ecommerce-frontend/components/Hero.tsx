'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 animate-pulse" />,
});

export default function Hero() {
  const features = [
    { icon: Zap, text: 'Livraison rapide' },
    { icon: Shield, text: 'Paiement sécurisé' },
    { icon: Truck, text: 'Retour gratuit' },
  ];

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6"
              >
                🎉 Nouveauté - Collection 2026
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                La <span className="gradient-text">Technologie</span>
                <br />
                à Portée de Main
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 mb-8 max-w-xl"
              >
                Découvrez notre sélection premium d'ordinateurs, composants PC et accessoires high-tech. 
                La qualité et la performance réunies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/produits">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                  >
                    Explorer la boutique
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link href="/promotions">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200"
                  >
                    Voir les promos
                  </motion.button>
                </Link>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <feature.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Stats or Additional Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 bg-white p-6 rounded-2xl shadow-2xl max-w-xs"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">+10,000</div>
                <div className="text-gray-600">Produits disponibles</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-0 left-0 bg-white p-6 rounded-2xl shadow-2xl max-w-xs"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-primary-500 to-purple-500 p-8 rounded-2xl shadow-2xl text-white text-center"
              >
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Support client</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
}
