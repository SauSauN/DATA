// src/components/Layout/DashboardLayout.tsx

import React, { useState } from 'react';
import {
  Upload,
  BarChart2,
  Brush,
  Combine,
  LayoutPanelLeft,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell,
  UserCircle,
  Home as HomeIcon,
} from 'lucide-react';

const SidebarItem: React.FC<{ icon: React.ReactNode; text: string; active?: boolean; expanded: boolean }> = ({ icon, text, active, expanded }) => (
  <a
    href="#"
    className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
      ${active ? 'bg-[#2E7D32] text-white' : 'hover:bg-[#27632a] text-gray-300 hover:text-white'}
    `}
  >
    {icon}
    <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
      {text}
    </span>
    {!expanded && (
      <div
        className={`absolute left-full rounded-md px-2 py-1 ml-6
          bg-[#174240] text-white text-sm invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-10`}
      >
        {text}
      </div>
    )}
  </a>
);

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F9FAF5]">
      {/* Barre latérale (Sidebar) */}
      <aside className={`h-screen flex flex-col bg-[#174240] text-white transition-all duration-300 ${sidebarExpanded ? 'w-64' : 'w-20'}`}>
        <div className="flex items-center p-4 py-6">
          {/* Logo caché lorsque la sidebar est réduite */}
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=100&q=80"
            alt="Meralta Logo"
            className={`overflow-hidden transition-all duration-300
                       ${sidebarExpanded ? 'w-12 h-12 rounded-lg opacity-100' : 'w-0 h-0 opacity-0 hidden'}
                     `}
          />
          {/* Titre Meralta caché lorsque la sidebar est réduite */}
          <h1 className={`text-white text-2xl font-bold tracking-tight overflow-hidden transition-all duration-300 ${sidebarExpanded ? 'ml-3 opacity-100' : 'w-0 opacity-0'}`}>
            Meralta
          </h1>

          {/* Bouton de basculement : TOUJOURS visible, mais sa position s'ajuste */}
          <button
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            // Utiliser des classes conditionnelles pour le positionnement et l'opacité
            className={`p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors
                       ${sidebarExpanded ? 'ml-auto' : 'mx-auto'} `} // ml-auto quand étendu, mx-auto quand réduit pour le centrer
          >
            {/* L'icône change en fonction de l'état d'expansion */}
            {sidebarExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-3">
          <ul className="space-y-1">
            <SidebarItem icon={<HomeIcon size={24} />} text="Tableau de Bord" expanded={sidebarExpanded} active />
            <SidebarItem icon={<Upload size={24} />} text="Charger Données" expanded={sidebarExpanded} />
            <SidebarItem icon={<BarChart2 size={24} />} text="Analyser Données" expanded={sidebarExpanded} />
            <SidebarItem icon={<Brush size={24} />} text="Nettoyer Données" expanded={sidebarExpanded} />
            <SidebarItem icon={<Combine size={24} />} text="Transformer Données" expanded={sidebarExpanded} />
            <SidebarItem icon={<LayoutPanelLeft size={24} />} text="Projets" expanded={sidebarExpanded} />
          </ul>
        </nav>

        <div className="border-t border-gray-700 mt-auto p-4 flex flex-col items-start space-y-2">
            <SidebarItem icon={<Settings size={24} />} text="Paramètres" expanded={sidebarExpanded} />
            <SidebarItem icon={<HelpCircle size={24} />} text="Aide & Support" expanded={sidebarExpanded} />
            <SidebarItem icon={<LogOut size={24} />} text="Déconnexion" expanded={sidebarExpanded} />
        </div>

      </aside>

      {/* Contenu principal et Navbar supérieure */}
      <div className="flex-1 flex flex-col">
        {/* Navbar supérieure */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-40">
          <h2 className="text-xl font-semibold text-gray-800">Tableau de Bord</h2>
          <div className="flex items-center gap-4 relative">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <Bell size={24} />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <UserCircle size={28} />
                <span className="font-medium hidden md:inline">Utilisateur</span>
              </button>
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profil</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Paramètres</a>
                  <div className="border-t border-gray-200 my-1"></div>
                  <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Déconnexion</a>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Contenu principal de l'application */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;