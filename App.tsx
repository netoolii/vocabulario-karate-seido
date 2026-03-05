import React, { useState, useCallback, useEffect, useRef } from 'react';
import { TECHNIQUES_BY_BELT } from './constants/techniques';
import type { StudyTechnique } from './types';
import Button from './components/Button';
import TechniqueCard from './components/TechniqueCard';
import KyuSelector from './components/KyuSelector';
import InstructionsModal from './components/InstructionsModal';
import SummaryModal from './components/SummaryModal';
import SettingsModal from './components/SettingsModal';
import PairsGame from './components/PairsGame';
import { Settings, Info, Trophy, BookOpen, Brain, Layers } from 'lucide-react';

const ALL_CATEGORIES = ['Armas do Corpo', 'Vocabulário', 'Técnicas de Mãos (Te Waza)', 'Técnicas de Defesa (Uke Waza)', 'Técnicas de Pernas (Ashi Waza)', 'Bases (Dachi)'];
const INSTRUCTIONS_VERSION = '3.2.0'; // Version for the instructions modal

const App: React.FC = () => {
  const [selectedKyus, setSelectedKyus] = useState<string[]>(
    () => [TECHNIQUES_BY_BELT[0].kyus[0].name]
  );

  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('selectedCategories');
      return saved ? JSON.parse(saved) : ALL_CATEGORIES;
    } catch (error) {
      return ALL_CATEGORIES;
    }
  });
  
  const [deck, setDeck] = useState<StudyTechnique[]>([]);
  const [pairsDeck, setPairsDeck] = useState<StudyTechnique[]>([]);
  const [totalTechniques, setTotalTechniques] = useState(0);
  const [selectedTechnique, setSelectedTechnique] = useState<StudyTechnique | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [progressMessage, setProgressMessage] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [difficultTechniques, setDifficultTechniques] = useState<StudyTechnique[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  
  const [quizDuration, setQuizDuration] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('quizDuration');
      return saved ? parseInt(saved, 10) : 10;
    } catch (error) {
      return 10;
    }
  });
  const [pairsDuration, setPairsDuration] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('pairsDuration');
      return saved ? parseInt(saved, 10) : 10;
    } catch (error) {
      return 10;
    }
  });
  const [countdown, setCountdown] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [mode, setMode] = useState<'quiz' | 'study' | 'pairs'>('quiz');
  const [studyOrder, setStudyOrder] = useState<'random' | 'sequential'>('random');
  const [studyIndex, setStudyIndex] = useState(0);

  // Pairs Game Settings
  const [showStatusBar, setShowStatusBar] = useState<boolean>(() => {
    const saved = localStorage.getItem('pairsShowStatusBar');
    return saved ? JSON.parse(saved) : true;
  });
  const [enableTimer, setEnableTimer] = useState<boolean>(() => {
    const saved = localStorage.getItem('pairsEnableTimer');
    return saved ? JSON.parse(saved) : true;
  });
  const [enableCombo, setEnableCombo] = useState<boolean>(() => {
    const saved = localStorage.getItem('pairsEnableCombo');
    return saved ? JSON.parse(saved) : true;
  });


// test load images before

  const preloadImages = () => {
    const allImages: string[] = [];
    TECHNIQUES_BY_BELT.forEach((belt) => {
      belt.kyus.forEach((kyu) => {
        kyu.techniques.forEach((technique) => {
          if (technique.src && technique.src.trim() !== '') {
            allImages.push(technique.src);
          }
        });
      });
    });

    const uniqueImages = Array.from(new Set(allImages));
    setTotalImages(uniqueImages.length);
    let loadedCount = 0;

    if (uniqueImages.length === 0) {
      setLoadingProgress(100);
      return;
    }

    uniqueImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / uniqueImages.length) * 100));
      };
    });
  };

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    const seenVersion = localStorage.getItem('seenInstructionsVersion');
    if (seenVersion !== INSTRUCTIONS_VERSION) {
      setShowInstructions(true);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
  }, [selectedCategories]);

  useEffect(() => {
    localStorage.setItem('quizDuration', quizDuration.toString());
  }, [quizDuration]);

  useEffect(() => {
    localStorage.setItem('pairsDuration', pairsDuration.toString());
  }, [pairsDuration]);

  useEffect(() => {
    localStorage.setItem('pairsShowStatusBar', JSON.stringify(showStatusBar));
  }, [showStatusBar]);

  useEffect(() => {
    localStorage.setItem('pairsEnableTimer', JSON.stringify(enableTimer));
  }, [enableTimer]);

  useEffect(() => {
    localStorage.setItem('pairsEnableCombo', JSON.stringify(enableCombo));
  }, [enableCombo]);


  const handleCloseInstructions = useCallback(() => {
    localStorage.setItem('seenInstructionsVersion', INSTRUCTIONS_VERSION);
    setShowInstructions(false);
  }, []);

  const shuffleArray = <T extends {}>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const initializeDeck = useCallback((kyuNames: string[], categories: string[]) => {
    const allKyus = TECHNIQUES_BY_BELT.flatMap(belt => belt.kyus);
    const selectedTechs = allKyus
      .filter(kyu => kyuNames.includes(kyu.name))
      .flatMap(kyu => kyu.techniques)
      .filter(tech => categories.includes(tech.category));

    const initialStudyDeck = selectedTechs.map(t => ({ ...t, isMastered: false, missCount: 0 }));
    setTotalTechniques(initialStudyDeck.length);
    
    // Reset general state for all modes
    setShowAnswer(false);
    setIsGameFinished(initialStudyDeck.length === 0);
    if (timerRef.current) clearTimeout(timerRef.current);
    setCountdown(null);
    setSelectedTechnique(null);
    setDeck([]);
    setPairsDeck([]);
    setProgressMessage(null);

    if (mode === 'study') {
      const studyDeck = studyOrder === 'random' ? shuffleArray(initialStudyDeck) : initialStudyDeck;
      setDeck(studyDeck);
      setStudyIndex(0);
      setSelectedTechnique(studyDeck.length > 0 ? studyDeck[0] : null);
    } else if (mode === 'quiz') {
      setDeck(initialStudyDeck);
      setInteractionCount(0);
      setShowSummaryModal(false);
      setDifficultTechniques([]);
    } else if (mode === 'pairs') {
      const shuffled = shuffleArray([...initialStudyDeck]);
      setPairsDeck(shuffled);
    }
  }, [mode, studyOrder]);

  useEffect(() => {
    initializeDeck(selectedKyus, selectedCategories);
  }, [selectedKyus, selectedCategories, initializeDeck]);
  
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
      setCountdown(quizDuration);
    }
  }, [selectedTechnique, quizDuration]);

  useEffect(() => {
    if (mode !== 'quiz' || countdown === null) return;

    if (countdown > 0) {
        timerRef.current = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
        handleRandomize();
    }

    return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [countdown, handleRandomize, mode]);

  const handleNextStudyTechnique = useCallback(() => {
    const nextIndex = studyIndex + 1;
    if (nextIndex < deck.length) {
      setStudyIndex(nextIndex);
      setSelectedTechnique(deck[nextIndex]);
    } else {
      setIsGameFinished(true);
    }
  }, [studyIndex, deck]);

  const handleCloseSummary = useCallback(() => {
    setShowSummaryModal(false);
    initializeDeck(selectedKyus, selectedCategories);
  }, [initializeDeck, selectedKyus, selectedCategories]);
  
  const handleSaveSettings = useCallback((settings: { 
    categories: string[], 
    quizDuration: number,
    pairsDuration: number,
    showStatusBar: boolean,
    enableTimer: boolean,
    enableCombo: boolean,
  }) => {
    setSelectedCategories(settings.categories);
    setQuizDuration(settings.quizDuration);
    setPairsDuration(settings.pairsDuration);
    setShowStatusBar(settings.showStatusBar);
    setEnableTimer(settings.enableTimer);
    setEnableCombo(settings.enableCombo);
    setShowSettingsModal(false);
  }, []);

  const modeButtonClasses = (isActive: boolean) =>
    `px-4 py-1.5 text-sm font-bold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
      isActive ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-400 hover:bg-gray-700'
    }`;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-2 sm:p-4 selection:bg-blue-500/30 overflow-y-auto">
      {showInstructions && (
        <InstructionsModal 
          onClose={handleCloseInstructions} 
          loadingProgress={loadingProgress}
        />
      )}
      {showSummaryModal && <SummaryModal techniques={difficultTechniques} onClose={handleCloseSummary} />}
      {showSettingsModal && (
        <SettingsModal
          allCategories={ALL_CATEGORIES}
          selectedCategories={selectedCategories}
          initialQuizDuration={quizDuration}
          initialPairsDuration={pairsDuration}
          initialShowStatusBar={showStatusBar}
          initialEnableTimer={enableTimer}
          initialEnableCombo={enableCombo}
          onSave={handleSaveSettings}
          onClose={() => setShowSettingsModal(false)}
        />
      )}
      <main className="flex flex-col items-center w-full text-center flex-1 min-h-0">
        <div className="relative w-full max-w-4xl mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl sm:mb-2">
              Treino de <span className="text-blue-400">Karatê Seido</span>
          </h1>
          <button
            onClick={() => setShowSettingsModal(true)}
            className="absolute top-1/2 -translate-y-1/2 right-0 p-2 text-gray-500 hover:text-white transition-colors duration-200 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filtrar categorias"
          >
            <Settings className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
        </div>
        <p className="mb-2 text-sm text-gray-400 max-w-3xl sm:text-lg sm:mb-4">
          Selecione os Kyus e filtre as categorias de técnicas para montar seu treino.
        </p>

        <div className="w-full max-w-4xl rounded-lg mb-2">
          <KyuSelector 
            beltsData={TECHNIQUES_BY_BELT} 
            selectedKyus={selectedKyus} 
            onToggleKyu={handleToggleKyu} 
          />
        </div>

        <div className="my-2 sm:my-4 flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-x-1 p-1 bg-gray-800 rounded-lg">
            <button onClick={() => setMode('quiz')} className={modeButtonClasses(mode === 'quiz')}>
              <div className="flex items-center gap-1.5">
                <Brain className="w-4 h-4" />
                <span>Quiz</span>
              </div>
            </button>
            <button onClick={() => setMode('study')} className={modeButtonClasses(mode === 'study')}>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Estudo</span>
              </div>
            </button>
            <button onClick={() => setMode('pairs')} className={modeButtonClasses(mode === 'pairs')}>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>Pares</span>
              </div>
            </button>
          </div>
          {mode === 'study' && (
             <div className="flex items-center gap-x-1 p-1 bg-gray-800 rounded-lg animate-fade-in-up" style={{animationDuration: '0.3s'}}>
              <button onClick={() => setStudyOrder('random')} className={modeButtonClasses(studyOrder === 'random')}>Aleatório</button>
              <button onClick={() => setStudyOrder('sequential')} className={modeButtonClasses(studyOrder === 'sequential')}>Sequencial</button>
            </div>
          )}
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          {mode === 'pairs' ? (
              <PairsGame 
                techniques={pairsDeck}
                onRestart={() => initializeDeck(selectedKyus, selectedCategories)}
                countdownDuration={pairsDuration}
                showStatusBar={showStatusBar}
                enableTimer={enableTimer}
                enableCombo={enableCombo}
                key={selectedKyus.join('-') + selectedCategories.join('-') + pairsDeck.length}
              />
          ) : (
            <>
              <div className="my-1 flex h-auto w-full max-w-2xl items-center justify-center sm:my-2">
                {progressMessage && mode === 'quiz' && (
                  <div className="w-full rounded-lg bg-green-900/50 p-2 text-center text-green-400 transition-all duration-300">
                    <p className="font-semibold text-xs sm:text-sm">{progressMessage}</p>
                  </div>
                )}
              </div>

              <TechniqueCard 
                technique={selectedTechnique} 
                showAnswer={mode === 'study' || showAnswer}
                isGameFinished={isGameFinished}
                countdown={mode === 'quiz' ? countdown : null}
                onSkip={handleRandomize}
                mode={mode}
              />
            </>
          )}
        </div>
        
        <div className="mt-2 flex flex-col sm:flex-row justify-center sm:mt-4 space-y-2 sm:space-y-0 sm:space-x-6 h-14">
          {mode === 'quiz' && (
            <>
              <Button 
                onClick={handleRandomize} 
                variant="primary"
                disabled={totalTechniques === 0 || isGameFinished || showAnswer}
              >
                {totalTechniques > 0 ? (selectedTechnique ? 'Próxima Técnica (Acertei)' : 'Começar Treino') : 'Nenhuma técnica encontrada'}
              </Button>
              {selectedTechnique && (
                 <Button 
                    onClick={handleShowAnswer} 
                    variant="secondary"
                    disabled={showAnswer || isGameFinished}
                  >
                    Mostrar Resposta (Errei)
                  </Button>
              )}
            </>
          )}
          {mode === 'study' && (
             <Button
                onClick={handleNextStudyTechnique}
                variant="primary"
                disabled={isGameFinished || totalTechniques === 0}
              >
                {totalTechniques > 0 ? 'Próxima Técnica' : 'Nenhuma técnica encontrada'}
              </Button>
          )}
        </div>
      </main>
       <footer className="py-1 text-center text-gray-600 text-xs">
         <p>Desenvolvido por Karatecas para Karatecas. Ossu!</p>
       </footer>
    </div>
  );
};

export default App;
