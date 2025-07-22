import React from 'react';
import { motion } from 'framer-motion';

const testimonialVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Meralta a transformé la façon dont nous gérons nos données. L'interface est intuitive et les analyses sont ultra rapides. Un gain de temps considérable !",
      name: "Jean Dupont",
      title: "Directeur Marketing chez InnovCorp",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Exemple d'avatar
    },
    {
      quote: "Absolument bluffé par la simplicité d'utilisation et la richesse des fonctionnalités. Même sans être un expert, j'obtiens des insights pertinents.",
      name: "Marie Curie",
      title: "Consultante en Data",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg", // Exemple d'avatar
    },
    {
      quote: "Enfin un outil d'analyse de données qui n'est pas une usine à gaz ! Le nettoyage de données est un jeu d'enfant. Je le recommande à tous mes collègues.",
      name: "Ahmed Benali",
      title: "Chef de Projet IT",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg", // Exemple d'avatar
    },
  ];

  return (
    <div className="bg-[#FFF2E6] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Ce que nos utilisateurs disent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center"
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-[#174240]"
              />
              <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;