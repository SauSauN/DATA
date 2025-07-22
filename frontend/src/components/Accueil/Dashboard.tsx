import React from "react";

const Dashboard = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20 -mt-10"
      style={{ backgroundColor: '#FFF2E6' }} // crème clair en fond
    >
      <div className="max-w-8xl flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Image à gauche très agrandie */}
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
          alt="Dashboard overview"
          className="w-full max-w-4xl rounded-lg shadow-lg object-cover"
        />

        {/* Texte à droite */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-primary-dark text-xl font-semibold mb-2 uppercase tracking-widest">
            Bienvenue chez meralta
          </h2>
          <h1 className="text-6xl font-extrabold text-gray-900 mb-8 drop-shadow-md leading-tight">
            Transformez vos données en décisions éclairées
          </h1>
          <p className="text-gray-800 text-lg leading-relaxed mb-10">
            Notre dashboard intuitif vous permet de visualiser, analyser et agir
            sur vos données rapidement et efficacement.
            <br/><br/>
            Que vous soyez un professionnel cherchant à optimiser ses rapports ou un data scientist explorant des jeux de données complexes, Meralta est conçu pour booster votre productivité et votre prise de décision.
          </p>
          <button
            className="bg-primary-dark text-light-cream px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors shadow-md"
            type="button"
          >
            Découvrir maintenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;