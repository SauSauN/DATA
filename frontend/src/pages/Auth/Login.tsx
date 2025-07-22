// src/pages/Auth/Login.tsx

import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react'; // Icônes
import Header from '../../components/Accueil/Header';
import Footer from '../../components/Accueil/Footer';

// Icône Google (simple SVG pour l'exemple)
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="20px"
    height="20px"
    className="mr-2"
  >
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,8,3.029V10.745c-3.461-3.138-7.93-5.029-13-5.029C10.514,5.716,2,14.227,2,24c0,9.773,8.514,18.284,18,18.284c11.369,0,17.141-9.13,17.141-17.584c0-1.003-0.131-1.879-0.268-2.796V20.083z"></path><path fill="#FF3D00" d="M6.306,14.691L1.921,9.355C3.567,6.436,6.495,4.24,10.007,2.833L15.394,8.125C13.447,9.308,11.859,10.824,10.662,12.721L6.306,14.691z"></path><path fill="#4CAF50" d="M20,44c-5.073,0-9.844-1.979-13.43-5.322l5.368-4.145c2.72,2.062,6.176,3.488,10.062,3.488c4.354,0,8.204-1.464,11.157-3.66L38.356,38.83C34.025,42.492,27.369,44,20,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,8,3.029V10.745c-3.461-3.138-7.93-5.029-13-5.029C10.514,5.716,2,14.227,2,24c0,9.773,8.514,18.284,18,18.284c11.369,0,17.141-9.13,17.141-17.584c0-1.003-0.131-1.879-0.268-2.796V20.083z"></path>
  </svg>
);

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    console.log('Connexion tentée avec :', { email, password });

    if (email === 'user@example.com' && password === 'password123') {
      setSuccess('Connexion réussie ! Redirection vers votre tableau de bord...');
      setEmail('');
      setPassword('');
    } else {
      setError('Email ou mot de passe incorrect.');
    }
  };

  const handleGoogleLogin = () => {
    console.log("Authentification Google cliquée ! (logique backend nécessaire)");
    setError('');
    setSuccess('Redirection vers Google pour la connexion...');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#FFF2E6] mt-0">
        <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl shadow-xl space-y-8 border border-gray-100">
          <div className="text-center">
            <img
              className="mx-auto h-20 w-auto rounded-full object-cover shadow-sm"
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=100&q=80"
              alt="Meralta Logo"
            />
            <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900 leading-tight">
              Connectez-vous à Meralta
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Accédez à vos données et analyses.
            </p>
          </div>

          {/* Nouveau : Bouton Continuer avec Google */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex justify-center items-center py-2.5 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174240] transition duration-200 ease-in-out font-medium"
            type="button" // Important pour ne pas soumettre le formulaire parent
          >
            <GoogleIcon />
            Continuer avec Google
          </button>

          {/* Séparateur "OU" */}
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">OU</span>
            <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200 -z-10"></div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Messages d'état */}
            {error && (
              <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 text-sm" role="alert">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 text-sm" role="alert">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                {success}
              </div>
            )}

            {/* Champs de formulaire avec icônes et styles améliorés */}
            <div>
              <label htmlFor="email-address" className="sr-only">Adresse Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#174240] focus:border-[#174240] sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Adresse Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Mot de passe</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#174240] focus:border-[#174240] sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#174240] focus:ring-[#174240] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#174240] hover:text-[#2E7D32] hover:underline transition duration-150 ease-in-out">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent text-lg font-semibold rounded-md text-white bg-[#2E7D32] hover:bg-[#174240] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#174240] transition duration-200 ease-in-out transform hover:scale-105"
              >
                Se connecter
              </button>
            </div>
          </form>

          <div className="text-sm text-center">
            <p className="text-gray-600">
              Pas encore de compte ?{' '}
              <a href="/signup" className="font-medium text-[#174240] hover:text-[#2E7D32] hover:underline transition duration-150 ease-in-out">
                Inscrivez-vous gratuitement.
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;