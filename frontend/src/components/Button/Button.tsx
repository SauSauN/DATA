// frontend/src/components/Button/button.tsx
import React, { type ButtonHTMLAttributes } from 'react';

// Étend les propriétés HTML natives pour les boutons, y compris 'disabled', 'type', etc.
type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends NativeButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'text'; // Utilisation des variantes définies précédemment
  size?: 'sm' | 'md' | 'lg'; // Nouvelles tailles
  isLoading?: boolean; // Maintien de la prop isLoading
  children: React.ReactNode;
  className?: string; // Ajout de className pour permettre des styles additionnels
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md', // Taille par défaut
  isLoading = false,
  className = '',
  disabled, // Récupération de la prop disabled native
  onClick,
  ...props
}) => {
  // Classes de base pour tous les boutons
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
    'transition-transform duration-200 ease-in-out hover:scale-[1.02] ' + // Ajout de l'effet de survol du précédent bouton
    'focus:ring-offset-light-cream'; // Utilisation de light-cream de tailwind.config.js

  // Classes spécifiques aux variantes, utilisant vos couleurs de tailwind.config.js
  const variantClasses = {
    primary:
      'bg-primary-dark hover:bg-primary-dark/90 text-white focus:ring-primary-dark', // Utilisation de primary-dark
    secondary:
      'bg-pale-orange hover:bg-pale-orange/80 text-black focus:ring-pale-orange', // Utilisation de pale-orange
    danger:
      'bg-danger-red hover:bg-danger-red/90 text-white focus:ring-danger-red', // Utilisation de danger-red
    text:
      'bg-transparent text-primary-dark hover:bg-pale-orange focus:ring-primary-dark px-3 py-2 min-w-0', // Utilisation de primary-dark et pale-orange
  };

  // Classes spécifiques aux tailles
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Classes pour l'état désactivé
  const disabledClasses = 'opacity-60 cursor-not-allowed';
  // Classes pour l'état de chargement (rend le texte transparent pour afficher le spinner)
  const loadingClasses = 'relative text-transparent pointer-events-none';

  // Déterminer la couleur du spinner en fonction de la variante du bouton
  const spinnerColorClass =
    variant === 'primary' || variant === 'danger' ? 'text-white' : 'text-black';

  // Construction de toutes les classes du bouton
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size], // Applique la classe de taille
    className, // Ajoute les classes personnalisées passées via prop
    (disabled || isLoading) && disabledClasses, // Applique les classes disabled si nécessaire
    isLoading && loadingClasses, // Applique les classes loading si nécessaire
  ]
    .filter(Boolean) // Supprime les éléments false/null/undefined du tableau
    .join(' '); // Joint toutes les classes en une seule chaîne

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={isLoading || disabled} // Désactive le bouton s'il charge ou s'il est explicitement désactivé
      aria-disabled={isLoading || disabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg
            className={`animate-spin h-5 w-5 ${spinnerColorClass}`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;