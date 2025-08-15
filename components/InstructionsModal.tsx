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
        <h2 id="instructions-title" className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4 text-center">
          Bem vindo, Karateca Seido!
        </h2>
        <div className="space-y-4 text-gray-300 text-base sm:text-lg">
          <p>Selecione os Kyus que você deseja treinar. Você pode também clicar no ícone de engrenagem (⚙️) no canto da tela para escolher quais <strong>categorias de técnicas</strong> treinar: Golpes, Defesas, Bases, etc.</p>
          <p>Após selecionar os Kyus e filtrar as categorias desejadas, comece o seu treino clicando em "<strong>Começar Treino</strong>".</p>
          <p>Caso tenha acertado a resposta, apenas clique em "<strong>Próxima Técnica</strong>". Senão, clique em "<strong>Mostrar resposta</strong>", que será disponibilizada a descrição da palavra.</p>
          <p className="font-bold text-center text-xl mt-6">Divirta-se!</p>
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
