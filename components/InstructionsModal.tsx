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
        <p>Escolha os níveis de Kyu que deseja treinar. Este vocabulário inclui: <strong>termos técnicos, bases, golpes com as pernas, defesas, golpes com as mãos e armas naturais do corpo.</strong></p>
        <p>Selecione os Kyus que quiser, na ordem e quantidade que preferir e comece seu treino!</p>
        <p>Se acertar a resposta, clique em "<strong>Próxima Técnica</strong>". Se não souber, clique em "<strong>Mostrar Resposta</strong>" para ver a descrição completa da palavra.</p>
        <p className="font-bold text-center text-xl mt-6">Bom treino e divirta-se!</p>
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
