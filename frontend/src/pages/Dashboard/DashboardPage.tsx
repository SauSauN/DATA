// src/pages/Dashboard/DashboardPage.tsx

import React from 'react';
import { UploadCloud, BarChart2, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import DashboardLayout from '../../components/Layout/DashboardLayout'; 
import { Link } from 'react-router-dom'; // Ajout de Link pour la navigation

// Composant de Carte KPI Simplifiée
const SimpleKPICard: React.FC<{ title: string; value: string; icon: React.ReactNode; color: string }> = ({ title, value, icon, color }) => (
  <div className="bg-white p-5 rounded-lg shadow border border-gray-100 flex items-center space-x-4">
    <div className={`p-3 rounded-full ${color} bg-opacity-20`}>
      {icon}
    </div>
    <div>
      <div className="text-xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </div>
  </div>
);

// Fonction pour déterminer la couleur de l'icône en fonction de l'extension du fichier
const getFileColorClass = (fileName: string) => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'csv':
    case 'xlsx':
      return 'text-green-600'; // Vert pour les fichiers de données tabulaires
    case 'json':
      return 'text-blue-600'; // Bleu pour les fichiers de données structurées
    case 'pdf':
      return 'text-red-600';  // Rouge (si vous ajoutiez des PDF)
    default:
      return 'text-gray-500'; // Gris par défaut
  }
};

// Composant d'Élément de Fichier Récemment Utilisé Simplifié
const SimpleRecentFileItem: React.FC<{ name: string; status: string; link: string }> = ({ name, status, link }) => {
  const iconColor = getFileColorClass(name); // Détermine la couleur

  return (
    <li className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
      <div className="flex items-center space-x-3">
        {/* Application de la couleur déterminée */}
        <FileText size={20} className={iconColor} /> 
        <div>
          <span className="font-medium text-gray-800">{name}</span>
          <span className="text-xs text-gray-500 ml-3">- {status}</span>
        </div>
      </div>
      <Link to={link} className="text-sm text-[#2E7D32] hover:underline flex items-center">
        Ouvrir <ArrowRight size={16} className="ml-1" />
      </Link>
    </li>
  );
};


const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      
      {/* 1. Zone d'Accueil et Action Rapide */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-1">Aperçu Général</h3>
          <p className="text-gray-600">Bienvenue sur votre tableau de bord Meralta. Reprenez votre travail rapidement.</p>
        </div>
        <Link to="/dashboard/upload" className="flex items-center px-4 py-2 bg-[#2E7D32] text-white font-medium rounded-lg hover:bg-[#27632a] transition-colors shadow-md">
            <UploadCloud size={20} className="mr-2" />
            Charger
        </Link>
      </div>

      {/* 2. Indicateurs Clés (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <SimpleKPICard 
          title="Fichiers en Attente" 
          value="2" 
          icon={<UploadCloud size={24} className="text-blue-600" />}
          color="text-blue-600"
        />
        <SimpleKPICard 
          title="Analyses Lancées" 
          value="12" 
          icon={<BarChart2 size={24} className="text-orange-600" />}
          color="text-orange-600"
        />
        <SimpleKPICard 
          title="Tâches Terminées" 
          value="95%" 
          icon={<CheckCircle size={24} className="text-green-600" />}
          color="text-green-600"
        />
      </div>
      
      {/* 3. Dernières Activités */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Derniers Fichiers</h3>
        <p className="text-gray-600 mb-4">Accès rapide à vos fichiers récemment modifiés ou analysés.</p>
        
        <ul className="space-y-1 divide-y divide-gray-100 border border-gray-100 rounded-lg">
          {/* Fichier CSV -> Vert */}
          <SimpleRecentFileItem 
            name="Fichier_ventes_Q1.csv" 
            status="Analysé hier"
            link="/dashboard/analyse/fichier_ventes"
          />
          {/* Fichier XLSX -> Vert */}
          <SimpleRecentFileItem 
            name="Rapport_marketing_2024.xlsx" 
            status="Visualisé il y a 3 jours"
            link="/dashboard/visualisation/rapport_marketing"
          />
          {/* Fichier JSON -> Bleu */}
          <SimpleRecentFileItem 
            name="Data_scientifique_projetX.json" 
            status="Modifié aujourd'hui"
            link="/dashboard/transformer/projetX"
          />
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;