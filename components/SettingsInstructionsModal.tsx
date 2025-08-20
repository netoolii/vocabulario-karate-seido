import React from 'react';
import Button from './Button';

interface SettingsInstructionsModalProps {
  onClose: () => void;
}

const SettingsInstructionsModal: React.FC<SettingsInstructionsModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="settings-instructions-title"
    >
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up flex flex-col max-h-[90vh]">
        <div className="flex-shrink-0">
          <h2 id="settings-instructions-title" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6 text-center">
            Guia de Configurações
          </h2>
        </div>
        
        <div className="flex-1 min-h-0 overflow-y-auto pr-4">
          <div className="space-y-5 text-gray-300 text-base sm:text-lg">
            
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-bold text-lg text-white mb-2">⚙️ Configurações Gerais</h4>
              <p className="text-sm sm:text-base">
                <strong>Duração do Temporizador:</strong> Defina o tempo (em segundos) para os desafios nos modos <strong>Quiz</strong> e <strong>Pares</strong>. <br/> 
                No modo <strong>Quiz</strong>, um tempo maior permite visualizar a resposta por mais tempo. <br/>
                No modo <strong>Pares</strong>, um tempo menor aumenta o nível de dificuldade.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-bold text-lg text-white mb-2">🎯 Configurações do Jogo de Pares</h4>
              <ul className="list-disc list-inside text-sm sm:text-base mt-2 space-y-2 pl-2">
                <li><strong>Mostrar barra de status:</strong> Exibe ou esconde a barra superior com o combo, progresso e tempo. Desative para uma visão mais limpa.</li>
                <li><strong>Habilitar temporizador:</strong> Ative para uma corrida contra o tempo ou desative para um treino de pares sem pressão.</li>
                <li><strong>Habilitar contador de combo:</strong> Ative para medir sua sequência de acertos ou desative se preferir não focar em combos.</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-bold text-lg text-white mb-2">🗂️ Filtro de Categorias</h4>
              <p className="text-sm sm:text-base">
                Marque ou desmarque as categorias para focar seu treino. As técnicas selecionadas aqui serão usadas em <strong>todos os modos de jogo</strong> (Quiz, Estudo e Pares).
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center flex-shrink-0">
          <Button onClick={onClose} variant="primary">
            Entendido!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsInstructionsModal;
