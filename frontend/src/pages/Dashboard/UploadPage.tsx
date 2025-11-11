// src/pages/Dashboard/UploadPage.tsx

import React, { useState } from 'react';
import { UploadCloud, FileText, CheckCircle, Clock, Trash2, Settings, Loader, XCircle } from 'lucide-react';
import DashboardLayout from '../../components/Layout/DashboardLayout'; 

// Données d'historique de chargement simulées (ajout d'éléments pour forcer le défilement)
const uploadHistory = [
  { id: 1, fileName: "Ventes_Q3_2025.csv", date: "il y a 2h", status: "Terminé", size: "12 Mo" },
  { id: 2, fileName: "Trafic_Web_Juin.json", date: "hier", status: "Terminé", size: "3 Mo" },
  { id: 3, fileName: "Data_Brutes_ProjetZ.xlsx", date: "2 jours", status: "Échec", size: "28 Mo" },
  { id: 4, fileName: "Rapport_Clients_Novembre.csv", date: "3 jours", status: "Terminé", size: "8 Mo" },
  { id: 5, fileName: "Budget_2024_Final.xlsx", date: "4 jours", status: "Terminé", size: "45 Mo" },
  { id: 6, fileName: "Logs_Serveur_01.json", date: "5 jours", status: "Terminé", size: "50 Mo" },
  { id: 7, fileName: "Data_Test_A.csv", date: "6 jours", status: "Échec", size: "1 Mo" },
  { id: 8, fileName: "Inventaire_Septembre.xlsx", date: "1 semaine", status: "Terminé", size: "18 Mo" },
  { id: 9, fileName: "Données_Campagne_T4.csv", date: "1 semaine", status: "Terminé", size: "22 Mo" },
  { id: 10, fileName: "Archive_Client_X.json", date: "2 semaines", status: "Terminé", size: "15 Mo" },
  { id: 11, fileName: "Sauvegarde_BDD.xlsx", date: "3 semaines", status: "Terminé", size: "35 Mo" },
  { id: 12, fileName: "Modèle_Prédiction_V2.json", date: "1 mois", status: "Terminé", size: "7 Mo" },
  { id: 13, fileName: "Feedback_Utilisateurs.csv", date: "1 mois", status: "Terminé", size: "10 Mo" },
];

// Composant pour simuler un élément de l'historique
const HistoryItem: React.FC<{ item: typeof uploadHistory[0] }> = ({ item }) => {
  const statusColor = item.status === 'Terminé' 
    ? 'text-green-600 bg-green-100' 
    : item.status === 'Échec' 
    ? 'text-red-600 bg-red-100'
    : 'text-yellow-600 bg-yellow-100';

  const statusIcon = item.status === 'Terminé' 
    ? <CheckCircle size={16} className="mr-1" /> 
    : item.status === 'Échec' 
    ? <XCircle size={16} className="mr-1" />
    : <Clock size={16} className="mr-1" />;

  return (
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-3">
        <FileText size={20} className="text-gray-500" />
        <div>
          <p className="font-medium text-gray-800 text-sm">{item.fileName}</p>
          <p className="text-xs text-gray-500">{item.size} - Chargé {item.date}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className={`flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${statusColor}`}>
          {statusIcon}
          {item.status}
        </span>
        <button className="text-gray-400 hover:text-red-500 transition-colors p-1" title="Supprimer">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

// Composant Simulé pour le Téléchargement en Cours
const UploadingItem: React.FC = () => (
    <div className="flex items-center justify-between p-4 bg-[#FFF2E6] border border-orange-200 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3">
            <Loader size={20} className="text-orange-500 animate-spin" />
            <div>
                <p className="font-medium text-gray-800 text-sm">Nouveau_Rapport_Q4.csv</p>
                <p className="text-xs text-gray-500">65% complété (4.2 Mo / 6.5 Mo)</p>
            </div>
        </div>
        <button className="text-orange-500 hover:text-orange-700 transition-colors p-1" title="Annuler">
            <XCircle size={18} />
        </button>
    </div>
);


const UploadPage: React.FC = () => {
  const [skipHeaders, setSkipHeaders] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        
        {/* Section 1: Glisser-Déposer / Upload & Options */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-5">Charger de Nouveaux Fichiers</h3>
          
          {/* Zone de Glisser-Déposer */}
          <div className="border-4 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-colors">
            <UploadCloud size={48} className="mx-auto text-[#2E7D32] mb-3" />
            <span className="text-gray-700 font-semibold text-base block">Glissez et déposez vos fichiers ici</span>
            <p className="text-xs text-gray-500 mt-1">Fichiers pris en charge : .csv, .xlsx, .json (max. 50MB)</p>
            <input type="file" className="hidden" id="file-upload" multiple />
            <label htmlFor="file-upload" className="mt-4 inline-block px-4 py-2 bg-[#2E7D32] text-white font-medium rounded-md cursor-pointer shadow-md hover:bg-[#27632a] transition-colors text-sm">
              Ou Parcourir les Fichiers
            </label>
          </div>
          
          {/* Options de Configuration */}
          <div className="mt-5 border-t pt-4 border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Settings size={18} className="text-gray-500" />
              <span className="font-semibold text-gray-700 text-sm">Options de Pré-traitement</span>
            </div>
            <div className="flex items-center">
              <input 
                id="skip-headers" 
                type="checkbox" 
                checked={skipHeaders}
                onChange={() => setSkipHeaders(!skipHeaders)}
                className="w-4 h-4 text-[#2E7D32] border-gray-300 rounded focus:ring-[#2E7D32]"
              />
              <label htmlFor="skip-headers" className="ml-2 text-sm font-medium text-gray-600">
                Ignorer la première ligne
              </label>
            </div>
          </div>
        </div>
        
        {/* Section 2: Téléchargement en Cours (Nouveau) */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
             <h3 className="text-xl font-bold text-gray-800 mb-4">Téléchargement Actif (1)</h3>
             <UploadingItem />
        </div>

        {/* Section 3: Historique des Chargements */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Historique des Chargements</h3>
          
          {/* Liste avec scroll si trop longue */}
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg max-h-80 overflow-y-auto">
            {uploadHistory.length > 0 ? (
              uploadHistory.map(item => <HistoryItem key={item.id} item={item} />)
            ) : (
              <p className="p-4 text-gray-500 text-center text-sm">Aucun fichier chargé récemment.</p>
            )}
          </div>

          <div className="mt-4 text-right">
            <a href="#" className="text-sm font-medium text-[#2E7D32] hover:underline">
              Voir l'historique complet →
            </a>
          </div>
        </div>
        
      </div>
    </DashboardLayout>
  );
};

export default UploadPage;