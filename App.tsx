import React, { useState, useCallback, useEffect, useRef } from 'react';
import { TECHNIQUES_BY_BELT } from './constants/techniques';
import type { StudyTechnique } from './types';
import Button from './components/Button';
import TechniqueCard from './components/TechniqueCard';
import KyuSelector from './components/KyuSelector';
import InstructionsModal from './components/InstructionsModal';
import SummaryModal from './components/SummaryModal';

const App: React.FC = () => {
  const [selectedKyus, setSelectedKyus] = useState<string[]>(
    () => [TECHNIQUES_BY_BELT[0].kyus[0].name]
  );
  
  const [deck, setDeck] = useState<StudyTechnique[]>([]);
  const [totalTechniques, setTotalTechniques] = useState(0);
  const [selectedTechnique, setSelectedTechnique] = useState<StudyTechnique | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [progressMessage, setProgressMessage] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);
  const [difficultTechniques, setDifficultTechniques] = useState<StudyTechnique[]>([]);
  
  const [countdown, setCountdown] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const hasSeen = localStorage.getItem('hasSeenInstructions');
    if (!hasSeen) {
      setShowInstructions(true);
    }
  }, []);

  const handleCloseInstructions = useCallback(() => {
    localStorage.setItem('hasSeenInstructions', 'true');
    setShowInstructions(false);
  }, []);

  const initializeDeck = useCallback((kyuNames: string[]) => {
    const allKyus = TECHNIQUES_BY_BELT.flatMap(belt => belt.kyus);
    const selectedTechniques = allKyus
      .filter(kyu => kyuNames.includes(kyu.name))
      .flatMap(kyu => kyu.techniques);

    setTotalTechniques(selectedTechniques.length);
    setDeck(selectedTechniques.map(t => ({ ...t, isMastered: false, missCount: 0 })));
    setSelectedTechnique(null);
    setShowAnswer(false);
    setIsGameFinished(false);
    setInteractionCount(0);
    setProgressMessage(null);
    setShowSummaryModal(false);
    setDifficultTechniques([]);
    setCountdown(null);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    initializeDeck(selectedKyus);
  }, [selectedKyus, initializeDeck]);
  
  const handleToggleKyu = useCallback((kyuName: string) => {
    setSelectedKyus(prev => {
      const isSelected = prev.includes(kyuName);
      if (isSelected) {
        return prev.length === 1 ? prev : prev.filter(k => k !== kyuName);
      } else {
        return [...prev, kyuName];
      }
    });
  }, []);

  const handleRandomize = useCallback(() => {
    if (timerRef.current) {
        clearTimeout(timerRef.current);
    }
    setCountdown(null);

    let updatedDeck = [...deck];
    const previousTechniqueName = selectedTechnique?.name;

    if (selectedTechnique && !showAnswer) {
      updatedDeck = updatedDeck.map(t => 
        t.name === selectedTechnique.name ? { ...t, isMastered: true } : t
      );
    }
    
    const masteredCount = updatedDeck.filter(t => t.isMastered).length;
    if (totalTechniques > 0 && masteredCount === totalTechniques) {
      setIsGameFinished(true);
      setSelectedTechnique(null);
      setProgressMessage(null);
      
      const missed = updatedDeck
        .filter(t => t.missCount > 0)
        .sort((a, b) => b.missCount - a.missCount);
      setDifficultTechniques(missed);
      setShowSummaryModal(true);
      
      setDeck(updatedDeck);
      return;
    }

    const unmasteredPool = updatedDeck.filter(t => !t.isMastered);
    const eligiblePool = unmasteredPool.length > 1 
      ? unmasteredPool.filter(t => t.name !== previousTechniqueName)
      : unmasteredPool;

    if (eligiblePool.length === 0) {
      if (totalTechniques > 0) {
        setIsGameFinished(true);
        const missed = updatedDeck.filter(t => t.missCount > 0).sort((a, b) => b.missCount - a.missCount);
        setDifficultTechniques(missed);
        setShowSummaryModal(true);
        setDeck(updatedDeck);
      }
      return;
    }

    const weightedPool: StudyTechnique[] = [];
    for (const technique of eligiblePool) {
      const weight = 1 + technique.missCount;
      for (let i = 0; i < weight; i++) {
        weightedPool.push(technique);
      }
    }

    const randomIndex = Math.floor(Math.random() * weightedPool.length);
    const nextTechnique = weightedPool[randomIndex];

    if (nextTechnique) {
      const newInteractionCount = interactionCount + 1;
      setInteractionCount(newInteractionCount);

      if (newInteractionCount > 0 && newInteractionCount % 5 === 0) {
        const currentMasteredCount = updatedDeck.filter(t => t.isMastered).length;
        const percentage = totalTechniques > 0 ? Math.round((currentMasteredCount / totalTechniques) * 100) : 0;
        setProgressMessage(`✅ Você já revisou ${percentage}% do vocabulário até agora!`);
      } else {
        setProgressMessage(null);
      }
      
      setSelectedTechnique(nextTechnique);
      setShowAnswer(false);
      setDeck(updatedDeck);
    } else if (totalTechniques > 0) {
      setIsGameFinished(true);
    }
  }, [deck, selectedTechnique, showAnswer, interactionCount, totalTechniques]);

  const handleShowAnswer = useCallback(() => {
    if (selectedTechnique) {
      setShowAnswer(true);
      setDeck(prevDeck => prevDeck.map(t => 
        t.name === selectedTechnique.name ? { ...t, missCount: t.missCount + 1 } : t
      ));
      setCountdown(5);
    }
  }, [selectedTechnique]);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
        timerRef.current = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
        handleRandomize();
    }

    return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [countdown, handleRandomize]);


  const handleCloseSummary = useCallback(() => {
    setShowSummaryModal(false);
    initializeDeck(selectedKyus);
  }, [initializeDeck, selectedKyus]);

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col items-center p-2 sm:p-4 selection:bg-blue-500/30 overflow-hidden">
      {showInstructions && <InstructionsModal onClose={handleCloseInstructions} />}
      {showSummaryModal && <SummaryModal techniques={difficultTechniques} onClose={handleCloseSummary} />}
      <main className="flex flex-col items-center w-full text-center flex-1 min-h-0">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl sm:mb-2">
            Treino de vocabulário <span className="text-blue-400">Karatê Seido</span>
        </h1>
        <p className="mb-2 text-sm text-gray-400 max-w-3xl sm:text-lg sm:mb-4">
          Selecione um ou mais níveis de diferentes faixas para montar o seu treino personalizado.
        </p>

        <div className="w-full max-w-4xl rounded-lg mb-2">
          <KyuSelector 
            beltsData={TECHNIQUES_BY_BELT} 
            selectedKyus={selectedKyus} 
            onToggleKyu={handleToggleKyu} 
          />
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center w-full min-h-0">
            <div className="my-1 flex h-auto w-full max-w-2xl items-center justify-center sm:my-2">
              {progressMessage && (
                <div className="w-full rounded-lg bg-green-900/50 p-2 text-center text-green-400 transition-all duration-300">
                  <p className="font-semibold text-xs sm:text-sm">{progressMessage}</p>
                </div>
              )}
            </div>

            <TechniqueCard 
              technique={selectedTechnique} 
              showAnswer={showAnswer}
              isGameFinished={isGameFinished}
              countdown={countdown}
              onSkip={handleRandomize}
            />
        </div>

        <div className="mt-2 flex flex-col sm:flex-row sm:mt-4 space-y-2 sm:space-y-0 sm:space-x-6">
          <Button 
            onClick={handleRandomize} 
            variant="primary"
            disabled={totalTechniques === 0 || isGameFinished || showAnswer}
          >
            {selectedTechnique ? 'Próxima Técnica (Acertei)' : 'Começar Treino'}
          </Button>
          <Button 
            onClick={handleShowAnswer} 
            variant="secondary"
            disabled={!selectedTechnique || showAnswer || isGameFinished}
          >
            Mostrar Resposta (Errei)
          </Button>
        </div>
      </main>
       <footer className="py-1 text-center text-gray-600 text-xs">
         <p>Desenvolvido por Karatecas para Karatecas. Ossu!</p>
       </footer>
    </div>
  );
};

export default App;