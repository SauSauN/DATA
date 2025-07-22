import React from 'react';
import { motion } from 'framer-motion';

const FinalCallToAction: React.FC = () => {
  return (
    <div className="bg-[#174240] py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-white text-4xl font-extrabold mb-8 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Lancez-vous dès maintenant, c'est simple et gratuit !
        </motion.h2>
        <motion.a
          href="/signup" // Lien vers la page d'inscription
          className="bg-[#2E7D32] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#27632a] transition-colors shadow-lg inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Créez votre compte gratuit
        </motion.a>
      </div>
    </div>
  );
};

export default FinalCallToAction;