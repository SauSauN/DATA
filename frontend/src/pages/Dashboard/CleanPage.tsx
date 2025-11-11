// src/pages/Dashboard/CleanPage.tsx

import React, { useState } from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout'; 
import { Brush, Zap, FileText, Search, CheckCircle, Table, Trash2, XCircle, ArrowRight } from 'lucide-react';

// --- Fonction pour retourner des données de nettoyage basées sur le fichier ---
const getCleaningSummary = (fileName: string) => {
  switch (fileName) {
    case "Rapport_marketing_2024.xlsx":
      return {
        fileName,
        totalRows: 8500,
        missingValues: 1020, 
        duplicates: 85,
        inconsistentFormat: 15,
      };
    case "Data_scientifique_projetX.json":
      return {
        fileName,
        totalRows: 32000,
        missingValues: 50, 
        duplicates: 3,
        inconsistentFormat: 110, 
      };
    case "Ventes_Q3_2025.csv":
    default:
      return {
        fileName: "Ventes_Q3_2025.csv",
        totalRows: 15420,
        missingValues: 567,
        duplicates: 12,
        inconsistentFormat: 25,
      };
  }
};
// --------------------------------------------------------------------------

const CleanPage: React.FC = () => {
  const defaultFile = "Ventes_Q3_2025.csv";
  const [selectedFile, setSelectedFile] = useState(defaultFile);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [isCleaningApplied, setIsCleaningApplied] = useState(false);
  // NOUVEL ÉTAT: Pour suivre le problème sur lequel l'utilisateur a cliqué
  const [selectedIssue, setSelectedIssue] = useState<'missing' | 'duplicate' | 'inconsistent' | null>(null);

  // Mise à jour du résumé à chaque changement de fichier ou après analyse
  const currentSummary = getCleaningSummary(selectedFile);

  // Fonction pour simuler l'analyse
  const handleAnalyze = () => {
    setIsAnalyzed(true);
    setIsCleaningApplied(false);
    setSelectedIssue(null); // Réinitialiser la sélection de l'anomalie
  };

  // Fonction pour simuler l'application du nettoyage
  const handleApply = () => {
    setIsCleaningApplied(true);
  };

  // Liste des problèmes clés (dépend de currentSummary)
  const issuesList = [
    { 
      id: 'missing' as const,
      label: "Valeurs Manquantes", 
      value: currentSummary.missingValues, 
      percentage: (currentSummary.missingValues / currentSummary.totalRows * 100).toFixed(1) + '%', 
      color: 'border-red-500 bg-red-50 text-red-700', 
      icon: XCircle,
      details: "Lignes avec des champs vides critiques (ex: prix, date).",
    },
    { 
      id: 'duplicate' as const,
      label: "Lignes Dupliquées", 
      value: currentSummary.duplicates, 
      percentage: (currentSummary.duplicates / currentSummary.totalRows * 100).toFixed(2) + '%', 
      color: 'border-blue-500 bg-blue-50 text-blue-700', 
      icon: Trash2, 
      details: "Doublons basés sur l'ensemble de la ligne ou une clé primaire.",
    },
    { 
      id: 'inconsistent' as const,
      label: "Format Incohérent", 
      value: currentSummary.inconsistentFormat, 
      percentage: 'Champs', 
      color: 'border-orange-500 bg-orange-50 text-orange-700', 
      icon: Table, 
      details: "Champs de texte dans des colonnes numériques ou formats de date incorrects.",
    },
  ];

  const selectedIssueData = issuesList.find(issue => issue.id === selectedIssue);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        
        {/* En-tête de la Page et Sélection de Fichier */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
                <Brush size={30} className="mr-3 text-[#2E7D32]"/> Nettoyage des Données
            </h2>
            <div className="flex items-center space-x-3">
                <FileText size={20} className="text-gray-600"/>
                <select 
                    value={selectedFile} 
                    onChange={(e) => {
                        setSelectedFile(e.target.value);
                        setIsAnalyzed(false);
                        setIsCleaningApplied(false);
                        setSelectedIssue(null);
                    }}
                    className="border border-gray-300 py-2 pl-3 pr-10 rounded-md focus:ring-[#2E7D32] focus:border-[#2E7D32] appearance-none bg-white text-gray-700"
                    style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center' }}
                >
                    <option>Ventes_Q3_2025.csv</option>
                    <option>Rapport_marketing_2024.xlsx</option>
                    <option>Data_scientifique_projetX.json</option>
                </select>
                <button 
                    onClick={handleAnalyze}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center disabled:bg-gray-400 text-sm font-medium"
                    disabled={isAnalyzed}
                >
                    <Search size={18} className="mr-2"/> {isAnalyzed ? 'Analysé' : 'Analyser'}
                </button>
            </div>
        </div>

        {/* CONTENU PRINCIPAL : Mise en page à deux colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* COLONNE 1 (2/3) : Aperçu des Problèmes Détectés / Visualisation des lignes */}
            <div className="lg:col-span-2 space-y-6">
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{selectedIssue ? `Inspection: ${selectedIssueData?.label}` : 'Problèmes Détectés'}</h3>
                    
                    {/* Contenu affiché AVANT l'analyse */}
                    {!isAnalyzed ? (
                         <div className="p-10 text-center text-gray-500 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                            <Search size={30} className="mx-auto text-gray-400 mb-3" />
                            <p className="font-medium">Veuillez cliquer sur 'Analyser' pour détecter les problèmes dans ce dataset.</p>
                         </div>
                    ) : (
                        // Contenu affiché APRÈS l'analyse
                        <>
                            {/* Écran d'inspection des lignes (après clic sur un problème) */}
                            {selectedIssueData ? (
                                <div className={`p-4 rounded-lg bg-gray-50 border ${selectedIssueData.color}`}>
                                    <div className="flex justify-between items-start mb-3">
                                        <h4 className="font-bold text-lg">{selectedIssueData.value} lignes détectées.</h4>
                                        <button onClick={() => setSelectedIssue(null)} className="text-sm text-gray-500 hover:text-gray-800">
                                            ← Retour à l'aperçu
                                        </button>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Ici s'afficherait une table scrollable montrant les lignes exactes où le problème *{selectedIssueData.label}* est présent.
                                    </p>
                                    <button className="px-4 py-2 bg-yellow-600 text-white rounded-md text-sm font-medium hover:bg-yellow-700">
                                        Appliquer l'action {selectedIssueData.label} uniquement
                                    </button>
                                </div>
                            ) : (
                            // Aperçu principal des problèmes (avant de cliquer)
                            <>
                                <p className="text-sm text-gray-600 mb-6">
                                    Analyse de **{currentSummary.totalRows} lignes** dans **{selectedFile}**. Cliquez sur un problème pour inspecter les lignes.
                                </p>
                                <div className="space-y-3">
                                    {issuesList.map(issue => (
                                        <button 
                                            key={issue.id}
                                            onClick={() => setSelectedIssue(issue.id)} // CLIC POUR SÉLECTIONNER
                                            className={`flex items-center justify-between p-3 rounded-lg border-l-4 ${issue.color} w-full text-left transition-shadow hover:shadow-md cursor-pointer`}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <issue.icon size={20} />
                                                <span className="font-semibold">{issue.label}</span>
                                            </div>
                                            <div className="text-right flex items-center space-x-4">
                                                <div>
                                                    <div className="text-lg font-bold">{issue.value}</div>
                                                    <span className="text-xs">{issue.percentage}</span>
                                                </div>
                                                <ArrowRight size={18} className="text-gray-500" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* COLONNE 2 (1/3) : Actions et Application (inchangée) */}
            <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center"><Zap size={20} className="mr-2"/> Actions Rapides</h3>
                    
                    <div className="space-y-4 mb-6">
                        <div className="border border-gray-200 p-3 rounded-md">
                            <h4 className="font-medium text-gray-800 mb-1">Stratégie de Nettoyage</h4>
                            <p className="text-sm text-gray-600 mb-2">
                                Appliquer la stratégie par défaut : Imputation par moyenne et suppression des doublons.
                            </p>
                            <button className="text-sm text-blue-500 hover:underline">Personnaliser les règles</button>
                        </div>
                        
                        <div className="border border-gray-200 p-3 rounded-md">
                            <h4 className="font-medium text-gray-800 mb-1">Destination</h4>
                            <select className="w-full border border-gray-300 p-2 rounded-md text-sm focus:ring-[#2E7D32] focus:border-[#2E7D32]">
                                <option>Créer un nouveau fichier suffixé '_CLEAN'</option>
                                <option>Écraser le fichier original</option>
                            </select>
                        </div>
                    </div>

                    <button 
                        onClick={handleApply}
                        className="w-full px-6 py-3 bg-[#2E7D32] text-white rounded-md shadow-lg hover:bg-[#27632a] transition-colors flex items-center justify-center font-bold text-lg disabled:bg-gray-400"
                        disabled={!isAnalyzed || isCleaningApplied}
                    >
                        <CheckCircle size={20} className="mr-2"/> Appliquer & Enregistrer
                    </button>

                    {isCleaningApplied && (
                        <p className="mt-4 text-center text-green-600 font-medium text-sm flex items-center justify-center">
                            <CheckCircle size={16} className="mr-2"/> Nettoyage terminé.
                        </p>
                    )}
                </div>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CleanPage;