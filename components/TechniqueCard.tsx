
import React from 'react';
import type { StudyTechnique } from '../types';

interface TechniqueCardProps {
  technique: StudyTechnique | null;
  showAnswer: boolean;
  isGameFinished: boolean;
  countdown: number | null;
  onSkip: () => void;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({
  technique,
  showAnswer,
  isGameFinished,
  countdown,
  onSkip,
}) => {
  if (isGameFinished) {
    return (
      <div className="w-full max-w-2xl h-full rounded-2xl bg-gray-800 shadow-2xl flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-all duration-500 ease-in-out transform scale-100">
        <h2 className="text-xl font-bold text-green-400 sm:text-4xl">
          🎉 Jogo finalizado!
        </h2>
        <p className="mt-2 text-base text-gray-300 sm:text-xl">Todas as palavras foram estudadas.</p>
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full max-w-2xl h-full rounded-2xl bg-gray-800 shadow-2xl transition-all duration-500 ease-in-out transform ${
        technique ? 'scale-100' : 'scale-95 opacity-0'
      }`}
    >
      {technique && (
        <>
          {/* Frente do Card (Answer Hidden) */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-opacity duration-500 ease-in-out ${
              showAnswer ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <p className="text-sm font-medium text-blue-400 uppercase tracking-wider sm:text-base">{technique.category}</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-5xl">{technique.name}</h2>
          </div>

          {/* Verso do Card (Answer Shown) */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-gray-700 rounded-2xl transition-opacity duration-500 ease-in-out ${
              showAnswer ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {countdown !== null && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center space-x-3 z-10">
                    <span className="text-lg font-mono text-gray-200">{countdown}s</span>
                    <button
                        onClick={onSkip}
                        className="px-3 py-1.5 text-sm font-bold text-white bg-blue-600/60 rounded-lg hover:bg-blue-500/90 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                        aria-label="Pular para a próxima técnica"
                    >
                        Pular &raquo;
                    </button>
                </div>
            )}
            <p className="text-sm font-medium text-blue-300 uppercase tracking-wider sm:text-base">{technique.category}</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-5xl">{technique.name}</h2>
            <p className="mt-3 text-lg text-gray-300 sm:mt-4 sm:text-2xl">{technique.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default TechniqueCard;
