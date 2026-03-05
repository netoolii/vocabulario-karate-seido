import React from 'react';
import Button from './Button';
import { TimerOff, Flame, RotateCcw } from 'lucide-react';

interface TimeUpModalProps {
  onRestart: () => void;
  maxCombo?: number;
}

const TimeUpModal: React.FC<TimeUpModalProps> = ({ onRestart, maxCombo }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
      aria-modal="true"
      role="dialog"
      aria-labelledby="time-up-title"
    >
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-yellow-500/10 rounded-full">
            <TimerOff className="w-10 h-10 text-yellow-400" />
          </div>
        </div>
        <h2 id="time-up-title" className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4 text-center">
          Tempo Esgotado
        </h2>
        {maxCombo && maxCombo > 0 && (
          <div className="flex items-center gap-2 justify-center mb-6 text-orange-400 bg-orange-900/20 py-2 px-4 rounded-lg border border-orange-500/30">
            <Flame className="w-5 h-5 fill-orange-400" />
            <p className="text-base sm:text-lg font-semibold">
              Maior combo: {maxCombo} acertos!
            </p>
          </div>
        )}
        <p className="text-gray-300 text-base sm:text-lg mb-6 text-center">
          Tente ser mais rápido ou aumente o tempo nas configurações.
        </p>
        <div className="mt-8 text-center">
          <Button onClick={onRestart} variant="primary" className="flex items-center gap-2 mx-auto">
            <RotateCcw className="w-5 h-5" />
            <span>Tentar Novamente</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimeUpModal;
