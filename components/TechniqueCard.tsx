
import React, { useState, useEffect } from 'react';
import type { StudyTechnique } from '../types';
import { Timer, ChevronRight, PartyPopper, CheckCircle2 } from 'lucide-react';

interface TechniqueCardProps {
  technique: StudyTechnique | null;
  showAnswer: boolean;
  isGameFinished: boolean;
  countdown: number | null;
  onSkip: () => void;
  mode: 'quiz' | 'study' | 'pairs';
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({
  technique,
  showAnswer,
  isGameFinished,
  countdown,
  onSkip,
  mode,
}) => {
  const [backsideTechnique, setBacksideTechnique] = useState(technique);

  useEffect(() => {
    if (showAnswer || mode === 'study') {
      setBacksideTechnique(technique);
    }
  }, [technique, showAnswer, mode]);

  if (isGameFinished) {
    return (
      <div className="w-full max-w-2xl min-h-[350px] sm:min-h-[450px] rounded-2xl bg-gray-800 shadow-2xl flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-all duration-500 ease-in-out transform scale-100 border border-gray-700">
        <div className="mb-4 p-4 bg-green-500/10 rounded-full">
          {mode === 'quiz' ? <PartyPopper className="w-12 h-12 text-green-400" /> : <CheckCircle2 className="w-12 h-12 text-green-400" />}
        </div>
        <h2 className="text-xl font-bold text-green-400 sm:text-4xl">
           {mode === 'quiz' ? '🎉 Jogo finalizado!' : '✅ Fim do Estudo!'}
        </h2>
        <p className="mt-2 text-base text-gray-300 sm:text-xl">
            {mode === 'quiz' ? 'Todas as palavras foram estudadas.' : 'Você revisou todas as técnicas selecionadas.'}
        </p>
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full max-w-2xl min-h-[350px] sm:min-h-[450px] rounded-2xl bg-gray-800 shadow-2xl transition-all duration-500 ease-in-out transform border border-gray-700 flex flex-col ${
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
            <p className="text-sm font-medium text-blue-400 uppercase tracking-wider sm:text-base mb-2">{technique.category}</p>
            <h2 className="text-3xl font-bold text-white sm:text-6xl tracking-tight">{technique.name}</h2>
          </div>

          {/* Verso do Card (Answer Shown) */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-gray-700/50 rounded-2xl transition-opacity duration-500 ease-in-out ${
              showAnswer ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {backsideTechnique && (
              <>
                {countdown !== null && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center space-x-3 z-10">
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-900/50 rounded-md border border-gray-600">
                          <Timer className="w-4 h-4 text-blue-400" />
                          <span className="text-lg font-mono text-gray-200">{countdown}s</span>
                        </div>
                        <button
                            onClick={onSkip}
                            className="flex items-center gap-1 px-3 py-1.5 text-sm font-bold text-white bg-blue-600/60 rounded-lg hover:bg-blue-500/90 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                            aria-label="Pular para a próxima técnica"
                        >
                            <span>Pular</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
                <p className="text-sm font-medium text-blue-300 uppercase tracking-wider sm:text-base mb-2">{backsideTechnique.category}</p>
                <h2 className="text-2xl font-bold text-white sm:text-4xl mb-4">{backsideTechnique.name}</h2>
                {backsideTechnique.src && (
                  <div 
                    className="my-3 w-full max-w-[280px] sm:max-w-[400px] h-40 sm:h-64 rounded-xl shadow-inner overflow-hidden flex items-center justify-center border-2 border-gray-600 animate-fade-in-up force-light" 
                    style={{ 
                      animationDelay: '100ms' 
                    }}
                  >
                    <img
                      key={backsideTechnique.name}
                      src={backsideTechnique.src || `https://placehold.co/400x300/2d3748/9ca3af?text=Não Disponível`}
                      alt={`Ilustração para ${backsideTechnique.name}`}
                      className="w-full h-full object-contain"
                      style={{ filter: 'none !important' }}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = `https://placehold.co/400x300/2d3748/9ca3af?text=Não Carregada`;
                      }}
                    />
                  </div>
                )}

                <p className="text-lg text-gray-200 sm:text-2xl font-medium max-w-md">{backsideTechnique.description}</p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TechniqueCard;
