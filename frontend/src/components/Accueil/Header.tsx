import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Importez l'icône ChevronDown
import { ChevronDown } from 'lucide-react'; 

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    {
      name: 'Fonctionnalités',
      dropdown: true,
      items: [
        { name: 'Tableaux de bord', path: '/features/dashboards' },
        { name: 'Gestion de tâches', path: '/features/task-management' },
        { name: 'Collaboration', path: '/features/collaboration' },
        { name: 'Rapports', path: '/features/reporting' },
        { name: 'Intégrations', path: '/features/integrations' },
        { name: 'Sécurité', path: '/features/security' },
      ]
    },
    { name: 'Tarifs', path: '/pricing' },
    {
      name: 'Support',
      dropdown: true,
      items: [
        { name: 'FAQ', path: '/support/faq' },
        { name: 'Contactez-nous', path: '/support/contact' },
        { name: 'Documentation', path: '/support/docs' },
        { name: 'Forum Communautaire', path: '/support/forum' },
      ]
    },
    { name: 'À Propos', path: '/about' },
  ];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ backgroundColor: '#174240' }}
          className="sticky top-0 z-50 shadow-sm py-6"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center h-20 gap-8 justify-between">
              {/* Logo et nom de la plateforme rendus cliquables */}
              <a href="/" aria-label="Accueil Meralta" className="flex items-center gap-3"> 
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
                    alt="Meralta Logo"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </motion.div>
                {/* Ajout du nom de la plateforme */}
                <span className="text-white text-3xl font-bold tracking-widest">Meralta</span> {/* Style du nom */}
              </a>

              {/* Navigation */}
              <nav className="flex flex-1 items-center justify-between">
                <div className="flex items-center gap-6 relative">
                  {navItems.map((item, index) => (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.dropdown ? index : null)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button className="text-white text-base font-semibold px-4 py-3 hover:text-white/90 transition-colors flex items-center gap-1">
                        {item.name}
                        {/* Ajout de la flèche si c'est un dropdown */}
                        {item.dropdown && (
                          <ChevronDown 
                            size={16}
                            className={`transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`}
                          />
                        )}
                      </button>

                      {/* Dropdown */}
                      <AnimatePresence>
                        {item.dropdown && openDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute top-full left-0 bg-white text-black mt-2 shadow-lg rounded-md w-56 z-50 overflow-hidden"
                          >
                            <ul className="py-2">
                              {item.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a
                                    href={subItem.path}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                                  >
                                    {subItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Boutons Connexion et Inscription */}
                <div className="ml-6 flex gap-4">
                  <a
                    href="/login"
                    className="bg-white text-[#174240] font-semibold px-5 py-2 rounded-md hover:bg-[#e0f2f1] transition-colors"
                  >
                    Connexion
                  </a>
                  <a
                    href="/signup"
                    style={{ backgroundColor: '#2E7D32' }}
                    className="text-white font-semibold px-5 py-2 rounded-md hover:bg-[#27632a] transition-colors"
                  >
                    Inscription
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;