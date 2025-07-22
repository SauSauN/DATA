// frontend/src/components/Accueil/Main.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Button from './../Button/Button'; // Assurez-vous que le chemin est correct

// Variantes d'animation pour les éléments internes du main
const sectionVariants: Variants = { // Ajoutez le typage
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1], // Correction ici
    },
  },
};

const imageVariants: Variants = { // Ajoutez le typage
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }, // Correction ici
};

const Main: React.FC = () => {
  return (
    <>
      {/* Section 1: Visualisation de Projets */}
      <motion.section
        className="border-t-2 border-pale-orange pt-12 mt-12 text-left grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" // Anime quand la section entre dans la vue
        viewport={{ once: true, amount: 0.3 }} // Anime une seule fois quand 30% est visible
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Visualisez vos Projets
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Grâce à nos outils intuitifs, suivez l'évolution de vos projets en temps réel. Des tableaux de bord clairs et des graphiques interactifs vous donnent une vue d'ensemble instantanée. Données fictives ici.
          </p>
          <Button
            variant="text"
            onClick={() => console.log('Voir les tableaux de bord (Main)')}
            className="font-semibold"
          >
            Voir les Tableaux de Bord →
          </Button>
        </div>
        <motion.div variants={imageVariants} className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x300?text=Tableau+de+Bord+Fictif" // Image fictive
            alt="Tableau de bord de projet fictif"
            className="rounded-lg shadow-xl w-full max-w-sm md:max-w-full"
          />
        </motion.div>
      </motion.section>

      {/* Section 2: Collaboration d'Équipe (Inversée) */}
      <motion.section
        className="border-t-2 border-pale-orange pt-12 mt-12 text-left grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Collaborez Facilement
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Travaillez en équipe sans effort. Partagez des fichiers, assignez des tâches et communiquez directement au sein de la plateforme. Données fictives ici.
          </p>
          <Button
            variant="primary"
            onClick={() => console.log('Démarrer une collaboration (Main)')}
            className="font-semibold"
          >
            Démarrer une Collaboration →
          </Button>
        </div>
        <motion.div variants={imageVariants} className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x300?text=Collaboration+Equipe+Fictive" // Image fictive
            alt="Collaboration d'équipe fictive"
            className="rounded-lg shadow-xl w-full max-w-sm md:max-w-full"
          />
        </motion.div>
      </motion.section>

      {/* Section "Pourquoi choisir wweebb ?" */}
      <motion.section
        className="border-t-2 border-pale-orange pt-12 mt-12 text-left"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 text-center">
          Pourquoi <span className="text-primary-dark">wweebb</span> est fait pour vous ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700">
          {[
            { icon: '💡', title: 'Intuitivité Maximale', description: 'Une interface épurée et facile à prendre en main, même pour les débutants. (Donnée fictive)' },
            { icon: '📊', title: 'Analyses Approfondies', description: 'Des outils de reporting clairs pour des décisions éclairées et rapides. (Donnée fictive)' },
            { icon: '💬', title: 'Support Dédié', description: 'Notre équipe est là pour vous accompagner à chaque étape de votre projet. (Donnée fictive)' },
            { icon: '🔗', title: 'Intégration Fluide', description: 'Connectez wweebb à vos outils préférés sans effort. (Donnée fictive)' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={sectionVariants} // Utilise les mêmes variantes pour l'apparition des cartes
            >
              <span className="text-primary-dark text-3xl mr-4">{feature.icon}</span>
              <div>
                <h3 className="font-semibold text-xl mb-1 text-primary-dark">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Main;