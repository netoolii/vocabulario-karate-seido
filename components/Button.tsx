
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  disabled = false, 
  children, 
  variant = 'primary',
  className = ''
}) => {
  const baseClasses = 'px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-bold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500/50 disabled:bg-blue-800',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500/50 disabled:bg-gray-700'
  };

  const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
