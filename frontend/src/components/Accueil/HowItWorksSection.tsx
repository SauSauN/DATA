import React from 'react';
import { motion } from 'framer-motion';
import { Upload, BarChart, Download } from 'lucide-react'; // Icônes pour les étapes

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: <Upload size={48} className="text-[#174240]" />,
      title: "Uploadez vos données",
      description: "Importez facilement vos fichiers CSV, Excel, JSON ou autres, par glisser-déposer ou sélection.",
    },
    {
      number: '2',
      icon: <BarChart size={48} className="text-[#174240]" />,
      title: "Analysez et visualisez",
      description: "Utilisez nos outils pour explorer vos données, nettoyer et créer des graphiques pertinents.",
    },
    {
      number: '3',
      icon: <Download size={48} className="text-[#174240]" />,
      title: "Exportez vos résultats",
      description: "Téléchargez vos données transformées et vos rapports en divers formats pour les partager.",
    },
  ];

  return (
    <div className="bg-[#F9FAF5] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Comment Meralta fonctionne
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Simplifiez votre processus d'analyse en trois étapes simples.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative mb-6">
                <span className="absolute -top-6 -left-6 bg-[#174240] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold border-4 border-white">
                  {step.number}
                </span>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;