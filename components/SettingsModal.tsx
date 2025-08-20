import React, { useState, useEffect } from 'react';
import Button from './Button';
import SettingsInstructionsModal from './SettingsInstructionsModal';

const SETTINGS_INSTRUCTIONS_VERSION = '1.0.0';

interface SettingsModalProps {
  allCategories: string[];
  selectedCategories: string[];
  initialCountdownDuration: number;
  initialShowStatusBar: boolean;
  initialEnableTimer: boolean;
  initialEnableCombo: boolean;
  onSave: (settings: { 
    categories: string[]; 
    duration: number;
    showStatusBar: boolean;
    enableTimer: boolean;
    enableCombo: boolean;
  }) => void;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
  allCategories, 
  selectedCategories, 
  initialCountdownDuration,
  initialShowStatusBar,
  initialEnableTimer,
  initialEnableCombo,
  onSave, 
  onClose 
}) => {
  const [localSelectedCategories, setLocalSelectedCategories] = useState<string[]>(selectedCategories);
  const [localCountdownDuration, setLocalCountdownDuration] = useState<number>(initialCountdownDuration);
  const [localShowStatusBar, setLocalShowStatusBar] = useState<boolean>(initialShowStatusBar);
  const [localEnableTimer, setLocalEnableTimer] = useState<boolean>(initialEnableTimer);
  const [localEnableCombo, setLocalEnableCombo] = useState<boolean>(initialEnableCombo);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const seenVersion = localStorage.getItem('seenSettingsInstructionsVersion');
    if (seenVersion !== SETTINGS_INSTRUCTIONS_VERSION) {
      setShowInstructions(true);
    }
  }, []);

  const handleCloseInstructions = () => {
    localStorage.setItem('seenSettingsInstructionsVersion', SETTINGS_INSTRUCTIONS_VERSION);
    setShowInstructions(false);
  };

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
      showStatusBar: localShowStatusBar,
      enableTimer: localEnableTimer,
      enableCombo: localEnableCombo,
    });
  };
  
  const allSelected = localSelectedCategories.length === allCategories.length;
  const noneSelected = localSelectedCategories.length === 0;

  const ToggleSwitch: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
    <div className="relative">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={onChange} />
      <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    </div>
  );

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="settings-title"
    >
      {showInstructions && <SettingsInstructionsModal onClose={handleCloseInstructions} />}
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up flex flex-col max-h-[90vh]">
        <div className="flex-shrink-0">
          <div className="relative flex items-center justify-center">
            <h2 id="settings-title" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6 text-center">
              Configurações do Treino
            </h2>
            <button
              onClick={() => setShowInstructions(true)}
              className="absolute top-1/2 -translate-y-1/2 right-0 p-2 text-gray-500 hover:text-white transition-colors duration-200 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Ver instruções das configurações"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex-1 min-h-0 overflow-y-auto pr-4">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-200 mb-4 border-b border-gray-700 pb-2">Configurações Gerais</h3>
            <div className="flex flex-col">
              <label htmlFor="countdown-slider" className="mb-2 font-semibold text-gray-300">
                Duração do Temporizador (Quiz/Pares): <span className="font-bold text-blue-400">{localCountdownDuration}s</span>
              </label>
              <input
                id="countdown-slider"
                type="range"
                min="3"
                max="60"
                value={localCountdownDuration}
                onChange={(e) => setLocalCountdownDuration(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-200 mb-4 border-b border-gray-700 pb-2">Configurações do Jogo de Pares</h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="font-semibold text-gray-300">Mostrar barra de status</span>
                <ToggleSwitch checked={localShowStatusBar} onChange={() => setLocalShowStatusBar(prev => !prev)} />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="font-semibold text-gray-300">Habilitar temporizador</span>
                <ToggleSwitch checked={localEnableTimer} onChange={() => setLocalEnableTimer(prev => !prev)} />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="font-semibold text-gray-300">Habilitar contador de combo</span>
                <ToggleSwitch checked={localEnableCombo} onChange={() => setLocalEnableCombo(prev => !prev)} />
              </label>
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
        </div>
        
        <div className="mt-8 flex justify-center space-x-4 flex-shrink-0">
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