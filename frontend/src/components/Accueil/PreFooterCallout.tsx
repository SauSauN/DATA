import React from 'react';
import { motion } from 'framer-motion';

const PreFooterCallout: React.FC = () => {
  return (
    <div className="bg-white py-20 px-6 mt-24"> {/* Fond blanc, et une marge supérieure pour le séparer */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Des questions ? Nous sommes là pour vous aider !
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Découvrez notre documentation complète ou contactez notre équipe de support pour toute assistance.
        </motion.p>
        <div className="flex justify-center gap-6">
          <motion.a
            href="/support/docs"
            className="bg-[#174240] text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#27632a] transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Lire la documentation
          </motion.a>
          <motion.a
            href="/support/contact"
            className="border-2 border-[#174240] text-[#174240] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-[#174240] hover:text-white transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Nous contacter
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default PreFooterCallout;