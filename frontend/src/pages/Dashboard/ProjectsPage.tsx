// src/pages/ProjectsPage.tsx
import React from 'react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Mes Projets</h3>
        <button className="px-4 py-2 bg-[#2E7D32] text-white rounded-md hover:bg-[#27632a]">
          Nouveau Projet
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemple de carte de projet */}
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-lg text-gray-900 mb-2">Analyse Ventes Q4</h4>
          <p className="text-sm text-gray-600 mb-3">Analyse de la performance des ventes pour le dernier trimestre.</p>
          <span className="text-xs text-gray-500">Modifié il y a 2 jours</span>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-lg text-gray-900 mb-2">Rapport Marketing</h4>
          <p className="text-sm text-gray-600 mb-3">Visualisation des données de la campagne "Summer Fest".</p>
          <span className="text-xs text-gray-500">Modifié la semaine dernière</span>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-lg text-gray-900 mb-2">Recherche Scientifique X</h4>
          <p className="text-sm text-gray-600 mb-3">Nettoyage et préparation des données de l'étude.</p>
          <span className="text-xs text-gray-500">Modifié aujourd'hui</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;