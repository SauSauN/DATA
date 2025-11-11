// src/pages/DashboardView.tsx
import React from 'react';

const DashboardView: React.FC = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Aperçu Général</h3>
        <p className="text-gray-600">Bienvenue sur votre tableau de bord Meralta. Commencez par charger vos données ou explorez vos analyses existantes.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#FFF2E6] p-4 rounded-md shadow-sm">Card 1</div>
          <div className="bg-[#FFF2E6] p-4 rounded-md shadow-sm">Card 2</div>
          <div className="bg-[#FFF2E6] p-4 rounded-md shadow-sm">Card 3</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Mes Derniers Fichiers</h3>
        <ul className="space-y-2 text-gray-700">
          <li>Fichier_ventes_Q1.csv <span className="text-sm text-gray-500">- Analysé hier</span></li>
          <li>Rapport_marketing_2024.xlsx <span className="text-sm text-gray-500">- Visualisé il y a 3 jours</span></li>
          <li>Data_scientifique_projetX.json <span className="text-sm text-gray-500">- Modifié aujourd'hui</span></li>
        </ul>
      </div>
    </>
  );
};

export default DashboardView;