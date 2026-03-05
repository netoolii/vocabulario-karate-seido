import React, { useState, useEffect } from 'react';
import Button from './Button';
import SettingsInstructionsModal from './SettingsInstructionsModal';
import { HelpCircle, X, Check, Filter, Clock, Gamepad2 } from 'lucide-react';

const SETTINGS_INSTRUCTIONS_VERSION = '2.0.0';

interface SettingsModalProps {
  allCategories: string[];
  selectedCategories: string[];
  initialQuizDuration: number;
  initialPairsDuration: number;
  initialShowStatusBar: boolean;
  initialEnableTimer: boolean;
  initialEnableCombo: boolean;
  onSave: (settings: { 
    categories: string[]; 
    quizDuration: number;
    pairsDuration: number;
    showStatusBar: boolean;
    enableTimer: boolean;
    enableCombo: boolean;
  }) => void;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
  allCategories, 
  selectedCategories, 
  initialQuizDuration,
  initialPairsDuration,
  initialShowStatusBar,
  initialEnableTimer,
  initialEnableCombo,
  onSave, 
  onClose 
}) => {
  const [localSelectedCategories, setLocalSelectedCategories] = useState<string[]>(selectedCategories);
  const [localQuizDuration, setLocalQuizDuration] = useState<number>(initialQuizDuration);
  const [localPairsDuration, setLocalPairsDuration] = useState<number>(initialPairsDuration);
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
      quizDuration: localQuizDuration,
      pairsDuration: localPairsDuration,
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
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="settings-title"
    >
      {showInstructions && <SettingsInstructionsModal onClose={handleCloseInstructions} />}
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up flex flex-col max-h-[90vh]">
        <div className="flex-shrink-0">
          <div className="relative flex items-center justify-between mb-6">
            <h2 id="settings-title" className="text-2xl sm:text-3xl font-bold text-blue-400">
              Configurações
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowInstructions(true)}
                className="p-2 text-gray-500 hover:text-white transition-colors duration-200 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Ver instruções das configurações"
              >
                <HelpCircle className="h-6 w-6" />
              </button>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-white transition-colors duration-200 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Fechar configurações"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 min-h-0 overflow-y-auto pr-4 custom-scrollbar">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-bold text-gray-200">Temporizadores</h3>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="quiz-slider" className="mb-2 font-semibold text-gray-300">
                  Modo Quiz: <span className="font-bold text-blue-400">{localQuizDuration}s</span>
                </label>
                <input
                  id="quiz-slider"
                  type="range"
                  min="1"
                  max="60"
                  value={localQuizDuration}
                  onChange={(e) => setLocalQuizDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="pairs-slider" className="mb-2 font-semibold text-gray-300">
                  Modo Pares: <span className="font-bold text-blue-400">{localPairsDuration}s</span>
                </label>
                <input
                  id="pairs-slider"
                  type="range"
                  min="5"
                  max="180"
                  value={localPairsDuration}
                  onChange={(e) => setLocalPairsDuration(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
              <Gamepad2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-bold text-gray-200">Modo Pares</h3>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">Mostrar barra de status</span>
                <ToggleSwitch checked={localShowStatusBar} onChange={() => setLocalShowStatusBar(prev => !prev)} />
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">Habilitar temporizador</span>
                <ToggleSwitch checked={localEnableTimer} onChange={() => setLocalEnableTimer(prev => !prev)} />
              </label>
              <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">Habilitar contador de combo</span>
                <ToggleSwitch checked={localEnableCombo} onChange={() => setLocalEnableCombo(prev => !prev)} />
              </label>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
              <Filter className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-bold text-gray-200">Categorias</h3>
            </div>
              <p className="text-gray-400 text-sm mb-4">Selecione as categorias para incluir no treino.</p>
              
              <div className="flex justify-center gap-4 mb-6">
                <button
                  onClick={() => setLocalSelectedCategories(allCategories)}
                  disabled={allSelected}
                  className="text-sm font-semibold text-blue-300 hover:text-blue-200 disabled:text-gray-500 disabled:cursor-not-allowed transition flex items-center gap-1"
                >
                  <Check className="w-4 h-4" />
                  <span>Todas</span>
                </button>
                <button
                  onClick={() => setLocalSelectedCategories([])}
                  disabled={noneSelected}
                  className="text-sm font-semibold text-blue-300 hover:text-blue-200 disabled:text-gray-500 disabled:cursor-not-allowed transition flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  <span>Limpar</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
                {allCategories.map(category => (
                  <label 
                    key={category} 
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                      localSelectedCategories.includes(category) 
                        ? 'bg-blue-900/30 border-blue-500/50' 
                        : 'bg-gray-700/30 border-transparent hover:bg-gray-700/50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={localSelectedCategories.includes(category)}
                      onChange={() => handleToggleCategory(category)}
                      className="h-5 w-5 rounded bg-gray-600 border-gray-500 text-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                    />
                    <span className="font-medium text-gray-200 text-sm">{category}</span>
                  </label>
                ))}
              </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center space-x-4 flex-shrink-0 pt-4 border-t border-gray-700">
          <Button onClick={onClose} variant="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSave} variant="primary" disabled={noneSelected}>
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;