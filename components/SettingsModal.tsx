import React, { useState } from 'react';
import Button from './Button';

interface SettingsModalProps {
  allCategories: string[];
  selectedCategories: string[];
  onSave: (categories: string[]) => void;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ allCategories, selectedCategories, onSave, onClose }) => {
  const [localSelected, setLocalSelected] = useState<string[]>(selectedCategories);

  const handleToggleCategory = (category: string) => {
    setLocalSelected(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSave = () => {
    onSave(localSelected);
    onClose();
  };
  
  const allSelected = localSelected.length === allCategories.length;
  const noneSelected = localSelected.length === 0;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="settings-title"
    >
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up">
        <h2 id="settings-title" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4 text-center">
          Filtrar Categorias
        </h2>
        <p className="text-gray-400 text-center mb-6">Selecione as categorias que você quer incluir no treino.</p>
        
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setLocalSelected(allCategories)}
            disabled={allSelected}
            className="text-sm font-semibold text-blue-300 hover:text-blue-200 disabled:text-gray-500 disabled:cursor-not-allowed transition"
          >
            Selecionar Todas
          </button>
          <button
            onClick={() => setLocalSelected([])}
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
                localSelected.includes(category) ? 'bg-blue-900/50' : 'bg-gray-700/50 hover:bg-gray-700'
              }`}
            >
              <input
                type="checkbox"
                checked={localSelected.includes(category)}
                onChange={() => handleToggleCategory(category)}
                className="h-5 w-5 rounded bg-gray-600 border-gray-500 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              />
              <span className="font-medium text-gray-200">{category}</span>
            </label>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center space-x-4">
          <Button onClick={onClose} variant="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSave} variant="primary" disabled={noneSelected}>
            Salvar Filtro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
