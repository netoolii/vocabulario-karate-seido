import React from 'react';
import Button from './Button';
import { Brain, BookOpen, Layers, Settings, Info, CheckCircle } from 'lucide-react';

interface InstructionsModalProps {
  onClose: () => void;
  loadingProgress: number;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({ onClose, loadingProgress }) => {
  const isLoading = loadingProgress < 100;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="instructions-title"
    >
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up flex flex-col max-h-[90vh]">
        <div className="flex-shrink-0">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-500/10 rounded-full">
              <Info className="w-10 h-10 text-blue-400" />
            </div>
          </div>
          <h2 id="instructions-title" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6 text-center">
            Treino de Karatê Seido
          </h2>
        </div>
        
        <div className="flex-1 min-h-0 overflow-y-auto pr-4 custom-scrollbar">
          <div className="space-y-6 text-gray-300 text-base sm:text-lg">
            {/* Progress Bar */}
            <div className="bg-gray-900/80 p-4 rounded-xl border border-blue-500/30 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  {isLoading ? 'Carregando Imagens...' : 'Imagens Carregadas!'}
                </span>
                <span className="text-xs font-mono text-gray-400">{loadingProgress}%</span>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <p className="mt-2 text-[10px] text-gray-500 italic">
                Pré-carregando ilustrações para garantir um treino sem interrupções.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 p-1.5 bg-gray-700 rounded-md">
                <Settings className="w-5 h-5 text-gray-300" />
              </div>
              <p className="text-sm sm:text-base">
                Selecione os <strong>Kyus</strong> e use as <strong>Configurações</strong> para filtrar categorias e ajustar o tempo.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-lg text-white">Modo Quiz</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-400">Teste seus conhecimentos. Tente lembrar da técnica antes de ver a resposta.</p>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-lg text-white">Modo Estudo</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-400">Ideal para aprender. A resposta fica sempre visível para consulta rápida.</p>
              </div>

              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-5 h-5 text-blue-400" />
                  <h4 className="font-bold text-lg text-white">Modo Pares</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-400">Combine o nome com a descrição. Agilidade e memória são fundamentais!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center flex-shrink-0">
          <Button 
            onClick={onClose} 
            variant="primary" 
            className="flex items-center gap-2 mx-auto min-w-[160px] justify-center"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Carregando...</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Entendido, Ossu!</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsModal;
