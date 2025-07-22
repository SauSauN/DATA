import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200 py-6 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      initial={false}
      animate={{ backgroundColor: isOpen ? '#F9FAF5' : 'transparent' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">
          {question}
        </h3>
        <ChevronDown
          size={24}
          className={`text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden" // Important pour l'animation de hauteur
          >
            <p className="mt-4 text-gray-700 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Quels types de fichiers puis-je analyser ?",
      answer: "Notre plateforme supporte une large gamme de formats incluant CSV, Excel (.xls, .xlsx), JSON, XML, TSV et plus encore, pour une flexibilité maximale dans vos analyses. Vous pouvez également importer des fichiers statistiques comme SAS, SPSS, Stata ou RData.",
    },
    {
      question: "Est-ce que Meralta est vraiment gratuit ?",
      answer: "Oui, Meralta est actuellement totalement gratuit pour toutes ses fonctionnalités. Notre objectif est de rendre l'analyse de données accessible à tous. Des plans premium avec des fonctionnalités avancées pourraient être introduits à l'avenir, mais les fonctionnalités de base resteront gratuites.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Nous prenons la sécurité de vos données très au sérieux. Toutes les informations sont traitées avec les meilleurs standards de sécurité et ne sont jamais partagées avec des tiers. Pour plus de détails, veuillez consulter notre politique de confidentialité.",
    },
    {
      question: "Puis-je convertir mes fichiers entre différents formats ?",
      answer: "Absolument ! Notre outil vous permet de convertir facilement vos données d'un format à l'autre, par exemple de JSON à CSV, ou d'Excel à JSON, facilitant ainsi l'intégration et l'utilisation de vos données dans d'autres applications.",
    },
    {
      question: "Comment puis-je obtenir de l'aide si je rencontre un problème ?",
      answer: "Vous pouvez consulter notre section FAQ détaillée, notre documentation complète, ou contacter notre équipe de support via le formulaire de contact. Nous sommes là pour vous aider !",
    },
  ];

  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Questions Fréquemment Posées
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;