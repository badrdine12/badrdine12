'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    'À propos': [
      { label: 'Notre histoire', href: '/about' },
      { label: 'Équipe', href: '/team' },
      { label: 'Carrières', href: '/careers' },
      { label: 'Partenaires', href: '/partners' },
    ],
    'Service client': [
      { label: 'Contact', href: '/contact' },
      { label: 'Livraison', href: '/delivery' },
      { label: 'Retours', href: '/returns' },
      { label: 'Garantie', href: '/warranty' },
    ],
    'Informations': [
      { label: 'Conditions générales', href: '/terms' },
      { label: 'Politique de confidentialité', href: '/privacy' },
      { label: 'Mentions légales', href: '/legal' },
      { label: 'FAQ', href: '/faq' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">TechStore</h3>
            <p className="text-gray-400 mb-4">
              Votre destination pour les meilleurs produits high-tech au Maroc.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+212 5XX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@techstore.ma</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="hover:text-white transition-colors cursor-pointer inline-block"
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-white font-semibold mb-2">Restez informé</h4>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary-500 text-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                S'inscrire
              </motion.button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} TechStore. Tous droits réservés.</p>
            <p className="mt-1">Projet Mini-Projet BDD - ENSET 2025-2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
