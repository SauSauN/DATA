// src/pages/Dashboard/HelpPage.tsx

import React from 'react';
import DashboardLayout from '../../components/Layout/DashboardLayout'; 
import { MessageSquare, BookOpen } from 'lucide-react';

const HelpPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
            <BookOpen size={28} className="mr-3 text-[#174240]"/> Aide & Centre de Support
        </h2>
        <p className="text-lg text-gray-600 mb-8 border-b pb-4">
          Trouvez des réponses rapides ou contactez notre équipe pour une assistance personnalisée.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Colonne 1 : FAQ */}
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Questions Fréquemment Posées (FAQ)
                </h3>
                <ul className="space-y-4 text-gray-700">
                    <li>
                        <strong className="block text-gray-900">Comment charger mes données ?</strong>
                        <p className="text-sm text-gray-600">
                            Utilisez l'onglet "Charger Données" et glissez-déposez votre fichier (CSV, JSON, XLSX).
                        </p>
                    </li>
                    <li>
                        <strong className="block text-gray-900">Les données sont-elles sécurisées ?</strong>
                        <p className="text-sm text-gray-600">
                            Oui, toutes les données sont chiffrées au repos et en transit, conformément aux normes de l'industrie.
                        </p>
                    </li>
                    <li>
                        <strong className="block text-gray-900">Comment puis-je nettoyer un dataset ?</strong>
                        <p className="text-sm text-gray-600">
                            Rendez-vous sur la page "Nettoyer Données" pour gérer les valeurs manquantes et corriger les incohérences de format.
                        </p>
                    </li>
                    <li className="pt-2 border-t mt-4">
                        <a href="#" className="text-sm font-medium text-[#2E7D32] hover:underline">
                            Voir tous les articles d'aide →
                        </a>
                    </li>
                </ul>
            </div>

            {/* Colonne 2 : Support */}
            <div className="border-l pl-8 border-gray-200">
                <div className="bg-[#F9FAF5] p-6 rounded-lg">
                    <MessageSquare size={28} className="text-[#2E7D32] mb-3" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Contacter le Support</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Si votre question n'est pas répertoriée, notre équipe est là pour vous aider.
                    </p>
                    <form className="space-y-3">
                        <input
                            type="email"
                            placeholder="Votre e-mail"
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:border-[#2E7D32]"
                        />
                        <textarea
                            placeholder="Décrivez votre problème en détail..."
                            rows={3}
                            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:border-[#2E7D32]"
                        ></textarea>
                        <button className="w-full bg-[#2E7D32] hover:bg-[#27632a] text-white font-bold py-2 rounded-md transition-colors">
                            Envoyer le Message
                        </button>
                    </form>
                </div>
            </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpPage;