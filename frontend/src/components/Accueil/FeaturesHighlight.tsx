import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react'; // Exemples d'icônes

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const FeaturesHighlight: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp size={48} className="text-[#174240]" />,
      title: "Analyse intuitive",
      description: "Visualisez vos données avec des graphiques clairs et des statistiques descriptives.",
    },
    {
      icon: <Zap size={48} className="text-[#174240]" />,
      title: "Performances accrues",
      description: "Traitez rapidement des volumes importants de données sans effort.",
    },
    {
      icon: <CheckCircle size={48} className="text-[#174240]" />,
      title: "Nettoyage simplifié",
      description: "Détectez et gérez les valeurs manquantes et les doublons en un clic.",
    },
    {
      icon: <Shield size={48} className="text-[#174240]" />,
      title: "Données sécurisées",
      description: "Vos informations sont protégées par des standards de sécurité élevés.",
    },
  ];

  return (
    <div className="bg-[#F9FAF5] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Nos fonctionnalités clés
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Découvrez comment Meralta simplifie la gestion et l'analyse de vos données.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesHighlight;