import React from 'react';
import Button from './Button';
import { Settings, Filter, Clock, Gamepad2, CheckCircle } from 'lucide-react';

interface SettingsInstructionsModalProps {
  onClose: () => void;
}

const SettingsInstructionsModal: React.FC<SettingsInstructionsModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="settings-instructions-title"
    >
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up flex flex-col max-h-[90vh]">
        <div className="flex-shrink-0">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-500/10 rounded-full">
              <Settings className="w-10 h-10 text-blue-400" />
            </div>
          </div>
          <h2 id="settings-instructions-title" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6 text-center">
            Guia de Configurações
          </h2>
        </div>
        
        <div className="flex-1 min-h-0 overflow-y-auto pr-4 custom-scrollbar">
          <div className="space-y-6 text-gray-300">
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-gray-700 rounded-lg">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Temporizadores</h4>
                <p className="text-sm sm:text-base text-gray-400">
                  Ajuste a duração do temporizador para os modos <strong>Quiz</strong> e <strong>Pares</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-gray-700 rounded-lg">
                <Gamepad2 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Modo Pares</h4>
                <p className="text-sm sm:text-base text-gray-400">
                  Personalize a interface do Jogo de Pares, habilitando barra de status, cronômetro e combos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-gray-700 rounded-lg">
                <Filter className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Categorias</h4>
                <p className="text-sm sm:text-base text-gray-400">
                  Filtre as técnicas por tipo (Defesas, Golpes, etc.) para focar seu estudo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center flex-shrink-0">
          <Button onClick={onClose} variant="primary" className="flex items-center gap-2 mx-auto">
            <CheckCircle className="w-5 h-5" />
            <span>Entendido!</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsInstructionsModal;
