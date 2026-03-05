
import React from 'react';
import Button from './Button';
import type { StudyTechnique } from '../types';
import { Trophy, AlertCircle, RotateCcw } from 'lucide-react';

interface SummaryModalProps {
  techniques: StudyTechnique[];
  onClose: () => void;
}

const SummaryModal: React.FC<SummaryModalProps> = ({ techniques, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="summary-title"
    >
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-500/10 rounded-full">
            <Trophy className="w-10 h-10 text-blue-400" />
          </div>
        </div>
        <h2 id="summary-title" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4 text-center">
          Resumo do Treino
        </h2>
        {techniques.length > 0 ? (
          <>
            <div className="flex items-center gap-2 justify-center mb-6 text-gray-300">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <p className="text-base sm:text-lg text-center">
                Técnicas para reforçar:
              </p>
            </div>
            <ul className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {techniques.map(tech => (
                <li 
                  key={tech.name} 
                  className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg border border-gray-600"
                >
                  <span className="font-semibold text-gray-200">{tech.name}</span>
                  <span className="text-xs text-red-400 font-bold bg-red-900/30 px-2 py-1 rounded border border-red-500/30">
                    {tech.missCount} {tech.missCount > 1 ? 'erros' : 'erro'}
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="my-8 text-center">
            <p className="text-green-400 text-lg sm:text-xl font-bold">
              Perfeito!
            </p>
            <p className="text-gray-400 mt-2">Você dominou todas as técnicas sem erros!</p>
          </div>
        )}
        <div className="mt-8 text-center">
          <Button onClick={onClose} variant="primary" className="flex items-center gap-2 mx-auto">
            <RotateCcw className="w-5 h-5" />
            <span>Reiniciar Treino</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SummaryModal;
