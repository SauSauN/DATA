import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BarChart3, FlaskConical } from 'lucide-react'; // Icônes pour les cas d'utilisation

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: <BarChart3 size={40} className="text-white" />,
      title: "Marketing & Ventes",
      description: "Analysez les données clients, suivez les performances de campagnes et optimisez vos stratégies.",
      color: "#174240" // Vert sombre
    },
    {
      icon: <Briefcase size={40} className="text-white" />,
      title: "Finance & Opérations",
      description: "Surveillez les indicateurs clés, prévoyez les tendances et améliorez l'efficacité opérationnelle.",
      color: "#2E7D32" // Une nuance de vert pour varier
    },
    {
      icon: <FlaskConical size={40} className="text-white" />,
      title: "Recherche & Développement",
      description: "Organisez et explorez des jeux de données complexes pour accélérer vos découvertes.",
      color: "#174240"
    },
  ];

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Pour qui est Meralta ?
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Que vous soyez analyste, marketeur ou chercheur, Meralta est conçu pour vous.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
              style={{ backgroundColor: useCase.color }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-6 bg-white bg-opacity-20 p-4 rounded-full">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-200">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;