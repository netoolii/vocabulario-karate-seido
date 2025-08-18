import React from 'react';
import Button from './Button';

interface InstructionsModalProps {
  onClose: () => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="instructions-title"
    >
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-white border border-gray-700 transform transition-all animate-fade-in-up">
        <h2 id="instructions-title" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6 text-center">
          Bem-vindo ao Treino de Karatê Seido!
        </h2>
        <div className="space-y-5 text-gray-300 text-base sm:text-lg">
          <p>Primeiro, selecione os Kyus que deseja treinar. Você pode usar o ícone de engrenagem (⚙️) para filtrar as categorias de técnicas (Golpes, Defesas, Bases, etc.).</p>
          
          <p>Depois, escolha o seu modo de treino:</p>
          
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <h4 className="font-bold text-lg text-white mb-2">🧠 Modo Estudo</h4>
            <p className="text-sm sm:text-base">Ideal para aprender e revisar. A resposta do card fica sempre visível.</p>
            <ul className="list-disc list-inside text-sm sm:text-base mt-2 space-y-1 pl-2">
              <li><strong>Sequencial:</strong> Segue a ordem do currículo.</li>
              <li><strong>Aleatório:</strong> Embaralha as técnicas.</li>
            </ul>
            <p className="text-sm sm:text-base mt-2">Use o botão "<strong>Próxima Técnica</strong>" para avançar.</p>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <h4 className="font-bold text-lg text-white mb-2">🥋 Modo Quiz</h4>
            <p className="text-sm sm:text-base">Perfeito para testar seus conhecimentos. Apenas o nome da técnica é mostrado. Pense na resposta!</p>
            <ul className="list-disc list-inside text-sm sm:text-base mt-2 space-y-1 pl-2">
              <li>Se acertou, clique em "<strong>Próxima Técnica (Acertei)</strong>".</li>
              <li>Se errou ou não sabe, clique em "<strong>Mostrar Resposta (Errei)</strong>".</li>
            </ul>
             <p className="text-sm sm:text-base mt-2">No final, um resumo mostrará as técnicas que você mais errou.</p>
          </div>

        </div>
        <div className="mt-8 text-center">
          <Button onClick={onClose} variant="primary">
            Entendido, Ossu!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsModal;