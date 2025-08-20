import React from 'react';
import Button from './Button';

interface TimeUpModalProps {
  onRestart: () => void;
  maxCombo?: number;
}

const TimeUpModal: React.FC<TimeUpModalProps> = ({ onRestart, maxCombo }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in"
      aria-modal="true"
      role="dialog"
      aria-labelledby="time-up-title"
    >
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up">
        <h2 id="time-up-title" className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 text-center">
          Tempo Esgotado
        </h2>
        {maxCombo && maxCombo > 0 && (
          <p className="text-green-400 text-base sm:text-lg mb-6 text-center font-semibold">
            Seu maior combo foi de {maxCombo} acertos! Você pode mais!
          </p>
        )}
        <p className="text-gray-300 text-base sm:text-lg mb-6 text-center">
          Que pena, tente mais rápido ou aumente o tempo clicando em configurações.
        </p>
        <div className="mt-8 text-center">
          <Button onClick={onRestart} variant="primary">
            Reiniciar Treino
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimeUpModal;