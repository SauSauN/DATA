import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    // Augmentation du padding vertical (pt-20 pb-16 au lieu de pt-12 pb-8)
    // Et ajout d'un padding horizontal plus généreux par défaut (px-6)
    <footer className="bg-[#0f172a] text-slate-300 pt-20 pb-16  px-6">
      {/* Augmentation du max-width du conteneur pour plus d'espace */}
      <div className="max-w-7xl mx-auto"> 
        {/* Augmentation de l'espacement entre les colonnes (gap-12 md:gap-20) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20">

          {/* Logo + Slogan */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=100&q=80"
              alt="Logo"
              // Agrandir un peu le logo (w-16 h-16)
              className="w-16 h-16 mb-5 rounded-lg object-cover"
            />
            {/* Agrandir un peu le texte du slogan (text-base) */}
            <p className="text-base text-slate-400">Construisez mieux, plus vite, ensemble.</p>
          </div>

          {/* Navigation */}
          <div>
            {/* Agrandir le titre de section (text-lg mb-4) */}
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            {/* Agrandir le texte des liens et l'espacement (space-y-3 text-base) */}
            <ul className="space-y-3 text-base">
              <li><a href="/features" className="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="/login" className="hover:text-white transition-colors">Connexion</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            {/* Agrandir le titre de section (text-lg mb-4) */}
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            {/* Agrandir le texte des liens et l'espacement (space-y-3 text-base) */}
            <ul className="space-y-3 text-base">
              <li><a href="/support/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/support/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/support/docs" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            {/* Agrandir le titre de section (text-lg mb-4) */}
            <h4 className="text-lg font-semibold text-white mb-4">Suivez-nous</h4>
            {/* Agrandir les icônes (size={24}) et l'espacement (space-x-5 mt-3) */}
            <div className="flex space-x-5 mt-3">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" aria-label="Email" className="hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bas de page (copyright et liens légaux) */}
        {/* Augmentation du padding top (pt-8), de la marge top (mt-12) et du texte (text-base) */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-base text-slate-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} MERALTA. Tous droits réservés.</p>
          {/* Augmentation de l'espacement des liens légaux (space-x-6) */}
          <div className="space-x-6 mt-5 md:mt-0">
            <a href="/terms" className="hover:text-white transition-colors">Conditions</a>
            <a href="/privacy" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;