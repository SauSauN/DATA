// frontend/src/components/Input/Input.tsx
import React, { type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className,
  containerClassName,
  id,
  ...props
}) => {
  const inputId = id || React.useId();

  const baseInputClasses = "w-full px-3 py-2 border rounded-md text-base text-primary-dark " + // text-primary-dark from tailwind.config.js
                           "focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark " + // primary-dark from tailwind.config.js
                           "transition-all duration-200 ease-in-out";

  const errorInputClasses = "border-danger-red focus:ring-danger-red focus:border-danger-red"; // danger-red from tailwind.config.js

  const inputClasses = `${baseInputClasses} ${error ? errorInputClasses : 'border-gray-300'} ${className || ''}`.trim(); // border-gray-300 is a default Tailwind color

  return (
    <div className={`mb-4 ${containerClassName || ''}`}>
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-primary-dark mb-1"> {/* text-primary-dark from tailwind.config.js */}
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={inputClasses}
        {...props}
      />
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
      {error && (
        <p className="mt-1 text-sm text-danger-red">{error}</p> 
      )}
    </div>
  );
};

export default Input;