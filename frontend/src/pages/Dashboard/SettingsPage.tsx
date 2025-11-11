// src/pages/Dashboard/SettingsPage.tsx

import React, { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout'; 
import { User, Lock, Bell, UserCircle } from 'lucide-react'; // Importation d'icônes

// Composant pour simuler un champ de formulaire
const SettingsInput: React.FC<{ label: string; id: string; type?: string; value: string; placeholder: string }> = ({ label, id, type = 'text', value, placeholder }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      className="border border-gray-300 p-2 rounded-md focus:ring-[#2E7D32] focus:border-[#2E7D32]"
      defaultValue={value}
      placeholder={placeholder}
    />
  </div>
);

// Composant pour simuler un interrupteur de notification
const NotificationToggle: React.FC<{ label: string; description: string; defaultChecked: boolean }> = ({ label, description, defaultChecked }) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
    <div>
      <h5 className="font-medium text-gray-700">{label}</h5>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#2E7D32]/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2E7D32]"></div>
    </label>
  </div>
);


const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Contenu pour les différents onglets
  const renderContent = () => {
    switch (activeTab) {
      case 'security':
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-700 flex items-center"><Lock size={20} className="mr-2"/> Sécurité du compte</h4>
            <p className="text-gray-600">Mettez à jour votre mot de passe et activez l'authentification à deux facteurs.</p>

            <form className="space-y-4">
              <SettingsInput label="Ancien Mot de Passe" id="old-password" type="password" value="" placeholder="Entrez l'ancien mot de passe" />
              <SettingsInput label="Nouveau Mot de Passe" id="new-password" type="password" value="" placeholder="Entrez le nouveau mot de passe" />
              <SettingsInput label="Confirmer Mot de Passe" id="confirm-password" type="password" value="" placeholder="Confirmez le nouveau mot de passe" />
              <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md transition-colors">
                Mettre à jour le Mot de Passe
              </button>
            </form>

            <div className="border-t border-gray-200 pt-6">
              <h5 className="font-medium text-gray-700">Authentification à deux facteurs (2FA)</h5>
              <p className="text-sm text-gray-500 mb-4">Ajoutez une couche de sécurité supplémentaire à votre compte.</p>
              <button className="bg-[#2E7D32] hover:bg-[#27632a] text-white font-bold py-2 px-4 rounded-md transition-colors">
                Activer 2FA
              </button>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-700 flex items-center"><Bell size={20} className="mr-2"/> Notifications</h4>
            <p className="text-gray-600">Choisissez comment vous souhaitez être notifié pour les activités sur la plateforme.</p>

            <div className="space-y-4">
              <NotificationToggle 
                label="Alertes par E-mail" 
                description="Recevez des notifications pour les rapports terminés et les erreurs de traitement." 
                defaultChecked={true}
              />
              <NotificationToggle 
                label="Notifications Push" 
                description="Recevez des alertes directement sur l'interface du tableau de bord." 
                defaultChecked={true}
              />
              <NotificationToggle 
                label="Mises à jour des produits" 
                description="Recevez des informations sur les nouvelles fonctionnalités et mises à jour de Meralta." 
                defaultChecked={false}
              />
            </div>
          </div>
        );
      case 'profile':
      default:
        return (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-700 flex items-center"><User size={20} className="mr-2"/> Informations de Profil</h4>
            <p className="text-gray-600">Gérez votre nom, votre adresse e-mail et votre photo de profil.</p>

            <form className="space-y-4">
              <SettingsInput label="Nom Complet" id="full-name" value="Utilisateur Meralta" placeholder="Votre nom complet" />
              <SettingsInput label="Adresse E-mail" id="email" type="email" value="utilisateur@meralta.com" placeholder="Votre adresse e-mail" />
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Photo de Profil</label>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <UserCircle size={32} />
                  </div>
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-sm">
                    Changer de Photo
                  </button>
                </div>
              </div>
              <button className="bg-[#2E7D32] hover:bg-[#27632a] text-white font-bold py-2 px-4 rounded-md transition-colors">
                Enregistrer les Modifications
              </button>
            </form>
          </div>
        );
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'security', label: 'Sécurité', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h3 className="text-3xl font-extrabold text-gray-800 mb-8 border-b pb-2">Paramètres du Compte</h3>
        
        {/* Onglets de Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm transition-colors
                  ${tab.id === activeTab
                    ? 'border-[#2E7D32] text-[#2E7D32]'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`
                }
              >
                <tab.icon size={18} className="mr-2"/>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Contenu de l'Onglet Actif */}
        {renderContent()}

      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;