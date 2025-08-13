
import React from 'react';
import type { BeltData } from '../types';

interface KyuSelectorProps {
  beltsData: BeltData[];
  selectedKyus: string[];
  onToggleKyu: (kyuName: string) => void;
}

const KyuSelector: React.FC<KyuSelectorProps> = ({ beltsData, selectedKyus, onToggleKyu }) => {
  return (
    <div className="w-full max-w-4xl px-2 sm:px-4">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-3">
        {beltsData.map(({ belt, color, kyus }) => (
          <div key={belt} className="flex items-center space-x-2 sm:space-x-3">
             <h3 
              className={`text-xs sm:text-sm font-bold uppercase ${
                color.startsWith('bg-white') || color.startsWith('bg-yellow') ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              {belt.replace('FAIXA ', '')}
            </h3>
            <div className="flex gap-1.5 sm:gap-2">
              {kyus.map(kyu => {
                const isSelected = selectedKyus.includes(kyu.name);
                const ringClass = isSelected ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-white/80 scale-105' : 'ring-transparent';
                const opacityClass = isSelected ? 'opacity-100' : 'opacity-80 hover:opacity-100';
                
                return (
                  <button
                    key={kyu.name}
                    onClick={() => onToggleKyu(kyu.name)}
                    className={`px-4 py-2 text-base font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105
                      ${color} ${ringClass} ${opacityClass}
                    `}
                    aria-pressed={isSelected}
                  >
                    {kyu.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KyuSelector;
