import React, { useState } from 'react';
import Button from './Button';

interface SettingsModalProps {
  allCategories: string[];
  selectedCategories: string[];
  initialCountdownDuration: number;
  onSave: (settings: { categories: string[]; duration: number }) => void;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
  allCategories, 
  selectedCategories, 
  initialCountdownDuration,
  onSave, 
  onClose 
}) => {
  const [localSelectedCategories, setLocalSelectedCategories] = useState<string[]>(selectedCategories);
  const [localCountdownDuration, setLocalCountdownDuration] = useState<number>(initialCountdownDuration);

  const handleToggleCategory = (category: string) => {
    setLocalSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSave = () => {
    onSave({
      categories: localSelectedCategories,
      duration: localCountdownDuration,
    });
  };
  
  const allSelected = localSelectedCategories.length === allCategories.length;
  const noneSelected = localSelectedCategories.length === 0;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="settings-title"
    >
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up">
        <h2 id="settings-title" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6 text-center">
          Configurações do Treino
        </h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-200 mb-4 border-b border-gray-700 pb-2">Configurações do Quiz</h3>
          <div className="flex flex-col">
            <label htmlFor="countdown-slider" className="mb-2 font-semibold text-gray-300">
              Duração do Temporizador: <span className="font-bold text-blue-400">{localCountdownDuration}s</span>
            </label>
            <input
              id="countdown-slider"
              type="range"
              min="3"
              max="30"
              value={localCountdownDuration}
              onChange={(e) => setLocalCountdownDuration(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>
        </div>

        <div>
           <h3 className="text-xl font-bold text-gray-200 mb-4 border-b border-gray-700 pb-2">Filtro de Categorias</h3>
            <p className="text-gray-400 text-center mb-4">Selecione as categorias para incluir no treino.</p>
            
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setLocalSelectedCategories(allCategories)}
                disabled={allSelected}
                className="text-sm font-semibold text-blue-300 hover:text-blue-200 disabled:text-gray-500 disabled:cursor-not-allowed transition"
              >
                Selecionar Todas
              </button>
              <button
                onClick={() => setLocalSelectedCategories([])}
                disabled={noneSelected}
                className="text-sm font-semibold text-blue-300 hover:text-blue-200 disabled:text-gray-500 disabled:cursor-not-allowed transition"
              >
                Limpar Seleção
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {allCategories.map(category => (
                <label 
                  key={category} 
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                    localSelectedCategories.includes(category) ? 'bg-blue-900/50' : 'bg-gray-700/50 hover:bg-gray-700'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={localSelectedCategories.includes(category)}
                    onChange={() => handleToggleCategory(category)}
                    className="h-5 w-5 rounded bg-gray-600 border-gray-500 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                  />
                  <span className="font-medium text-gray-200">{category}</span>
                </label>
              ))}
            </div>
        </div>
        
        <div className="mt-8 flex justify-center space-x-4">
          <Button onClick={onClose} variant="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSave} variant="primary" disabled={noneSelected}>
            Salvar Configurações
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
