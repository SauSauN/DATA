import React from 'react';
import { motion } from 'framer-motion';

const TeamOrVisionSection: React.FC = () => {
  return (
    <div className="bg-[#FFF2E6] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Notre Vision : La donnée accessible à tous
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Chez Meralta, nous croyons que l'analyse de données ne devrait pas être réservée aux experts.
          C'est pourquoi nous avons créé un outil puissant et intuitif, disponible gratuitement,
          pour permettre à chacun de transformer ses informations brutes en décisions éclairées.
          Notre mission est de démocratiser l'accès aux insights basés sur les données.
        </motion.p>
        {/* Vous pouvez ajouter des avatars ici si vous le souhaitez */}
        {/*
        <div className="flex justify-center -space-x-4 mt-8">
          <img className="w-16 h-16 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Avatar 1" />
          <img className="w-16 h-16 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Avatar 2" />
          <img className="w-16 h-16 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/men/3.jpg" alt="Avatar 3" />
        </div>
        */}
      </div>
    </div>
  );
};

export default TeamOrVisionSection;