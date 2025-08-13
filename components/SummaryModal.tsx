
import React from 'react';
import Button from './Button';
import type { StudyTechnique } from '../types';

interface SummaryModalProps {
  techniques: StudyTechnique[];
  onClose: () => void;
}

const SummaryModal: React.FC<SummaryModalProps> = ({ techniques, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="summary-title"
    >
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up">
        <h2 id="summary-title" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4 text-center">
          Resumo do Treino
        </h2>
        {techniques.length > 0 ? (
          <>
            <p className="text-gray-300 text-base sm:text-lg mb-6 text-center">
              Você teve mais dificuldade com estas técnicas. Continue praticando!
            </p>
            <ul className="space-y-3 max-h-60 overflow-y-auto pr-2">
              {techniques.map(tech => (
                <li 
                  key={tech.name} 
                  className="flex justify-between items-center bg-gray-700 p-3 rounded-lg"
                >
                  <span className="font-semibold text-gray-200">{tech.name}</span>
                  <span className="text-sm text-red-400 font-bold bg-red-900/50 px-2 py-1 rounded">
                    {tech.missCount} {tech.missCount > 1 ? 'erros' : 'erro'}
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-green-400 text-lg sm:text-xl my-8 text-center font-bold">
            Parabéns! Você dominou todas as técnicas sem erros!
          </p>
        )}
        <div className="mt-8 text-center">
          <Button onClick={onClose} variant="primary">
            Reiniciar Treino
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;
