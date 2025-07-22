import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Accueil/Header';
import Dashboard from '../../components/Accueil/Dashboard';
import FeaturesHighlight from '../../components/Accueil/FeaturesHighlight';
import HowItWorksSection from '../../components/Accueil/HowItWorksSection';
import UseCasesSection from '../../components/Accueil/UseCasesSection';
import CallToActionSection from '../../components/Accueil/CallToActionSection';
// TestimonialsSection est retirée comme discuté précédemment si le projet est en développement
// import TestimonialsSection from '../../components/Accueil/TestimonialsSection';
import TeamOrVisionSection from '../../components/Accueil/TeamOrVisionSection';
import FAQSection from '../../components/Accueil/FAQSection';
import FinalCallToAction from '../../components/Accueil/FinalCallToAction';
import PreFooterCallout from '../../components/Accueil/PreFooterCallout'; // Nouveau composant
import Main from '../../components/Accueil/Main';
import Footer from '../../components/Accueil/Footer';

const pageContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const Home: React.FC = () => {
  return (
    <div>
        {/* Header avec bordure subtile */}
        <motion.div
          className="border-b border-gray-100/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Header />
        </motion.div>

        {/* Section principale d'accueil (Dashboard) */}
        <motion.div
          className="flex flex-col min-h-screen bg-gray-50"
          initial="hidden"
          animate="visible"
          variants={pageContainerVariants}
        >
          <Dashboard />
        </motion.div>

        {/* Ordre des sections suggéré : */}
        <FeaturesHighlight />
        <HowItWorksSection />
        <UseCasesSection />
        {/* TestimonialsSection retirée si non pertinente pour un projet en dev */}
        {/* <TestimonialsSection /> */}
        <CallToActionSection /> {/* Ce CTA peut être avant ou après la vision selon votre préférence */}
        <TeamOrVisionSection />
        <FAQSection />
        <FinalCallToAction />
        <PreFooterCallout />


        {/* Footer avec bordure subtile */}
        <motion.footer
          className="border-t border-gray-100/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Footer />
        </motion.footer>
    </div>
  );
};

export default Home;