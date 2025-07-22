import React from 'react';
import { motion } from 'framer-motion';

const CallToActionSection: React.FC = () => {
  return (
    <div className="bg-[#174240] py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-white text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Prêt à transformer vos données ?
        </motion.h2>
        <motion.p
          className="text-gray-200 text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Commencez gratuitement dès aujourd'hui et découvrez la puissance de l'analyse simplifiée.
        </motion.p>
        <motion.button
          className="bg-[#2E7D32] text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-[#27632a] transition-colors shadow-lg"
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Commencez gratuitement
        </motion.button>
      </div>
    </div>
  );
};

export default CallToActionSection;