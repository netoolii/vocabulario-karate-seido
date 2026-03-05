
import React from 'react';
import type { BeltData } from '../types';
import { Check } from 'lucide-react';

interface KyuSelectorProps {
  beltsData: BeltData[];
  selectedKyus: string[];
  onToggleKyu: (kyuName: string) => void;
}

const KyuSelector: React.FC<KyuSelectorProps> = ({ beltsData, selectedKyus, onToggleKyu }) => {
  return (
    <div className="w-full max-w-5xl px-2 sm:px-4">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-6">
        {beltsData.map(({ belt, color, kyus }) => (
          <div key={belt} className="flex flex-col items-center gap-2">
             <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-gray-500">
              {belt.replace('FAIXA ', '')}
            </h3>
            <div className="flex gap-2">
              {kyus.map(kyu => {
                const isSelected = selectedKyus.includes(kyu.name);
                const ringClass = isSelected ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-white/60 scale-110' : 'ring-transparent';
                const opacityClass = isSelected ? 'opacity-100' : 'opacity-80 hover:opacity-95';
                const isLightBelt = color.includes('bg-white') || color.includes('bg-yellow');
                
                return (
                  <button
                    key={kyu.name}
                    onClick={() => onToggleKyu(kyu.name)}
                    className={`relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-sm sm:text-base font-black rounded-full shadow-xl transition-all duration-300 ease-out transform
                      ${color} ${ringClass} ${opacityClass}
                    `}
                    aria-pressed={isSelected}
                  >
                    <span className={isLightBelt ? 'text-gray-900' : 'text-white'}>
                      {kyu.name}
                    </span>
                    {isSelected && (
                      <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-0.5 shadow-lg border border-gray-900">
                        <Check className="w-2.5 h-2.5 text-white stroke-[4]" />
                      </div>
                    )}
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
