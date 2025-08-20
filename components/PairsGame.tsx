import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Technique } from '../types';
import Button from './Button';
import TimeUpModal from './TimeUpModal';

interface PairsGameProps {
  techniques: Technique[];
  onRestart: () => void;
  countdownDuration: number;
  showStatusBar: boolean;
  enableTimer: boolean;
  enableCombo: boolean;
}

type PairItemStatus = 'default' | 'selected' | 'matched' | 'incorrect' | 'fading-in' | 'empty';

interface PairItem {
  id: string;
  type: 'name' | 'description';
  text: string;
  pairId: string;
  status: PairItemStatus;
}

const PairsGame: React.FC<PairsGameProps> = ({ 
  techniques, 
  onRestart, 
  countdownDuration,
  showStatusBar,
  enableTimer,
  enableCombo,
}) => {
  const [remainingTechniques, setRemainingTechniques] = useState<Technique[]>([]);
  const [nameItems, setNameItems] = useState<PairItem[]>([]);
  const [descriptionItems, setDescriptionItems] = useState<PairItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<PairItem | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [matchedCount, setMatchedCount] = useState(0);
  const totalTechniques = useMemo(() => techniques.length, [techniques]);
  
  const [timeLeft, setTimeLeft] = useState<number>(countdownDuration);
  const [showTimeUpModal, setShowTimeUpModal] = useState<boolean>(false);
  const [currentCombo, setCurrentCombo] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);

  const shuffleArray = useCallback(<T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);
  
  const isGameFinished = useMemo(() => totalTechniques > 0 && matchedCount === totalTechniques, [totalTechniques, matchedCount]);

  useEffect(() => {
    if (techniques.length > 0) {
      const onScreen = techniques.slice(0, 5);
      const remaining = techniques.slice(5);

      const createPairItem = (tech: Technique, type: 'name' | 'description', status: PairItemStatus = 'default'): PairItem => ({
        id: `${tech.name}-${type}`,
        type,
        text: type === 'name' ? tech.name : tech.description,
        pairId: tech.name,
        status,
      });

      setNameItems(onScreen.map(tech => createPairItem(tech, 'name')));
      setDescriptionItems(shuffleArray(onScreen.map(tech => createPairItem(tech, 'description'))));
      setRemainingTechniques(remaining);
      
      setMatchedCount(0);
      setSelectedItem(null);
      setIsChecking(false);
      setShowTimeUpModal(false);
      setTimeLeft(countdownDuration);
      setCurrentCombo(0);
      setMaxCombo(0);
    }
  }, [techniques, shuffleArray, countdownDuration]);

  useEffect(() => {
    if (!enableTimer || isGameFinished || showTimeUpModal || techniques.length === 0) {
      return;
    }

    if (timeLeft <= 0) {
      setShowTimeUpModal(true);
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, isGameFinished, showTimeUpModal, techniques.length, enableTimer]);


  const handleItemClick = (clickedItem: PairItem) => {
    if (isChecking || clickedItem.status === 'matched' || clickedItem.status === 'empty') {
      return;
    }

    // Toggle: if clicking the same selected item, deselect it.
    if (selectedItem && selectedItem.id === clickedItem.id) {
      setSelectedItem(null);
      const updateList = (items: PairItem[]): PairItem[] => items.map((item) => (item.id === clickedItem.id ? { ...item, status: 'default' } : item));
      if (clickedItem.type === 'name') setNameItems(updateList);
      else setDescriptionItems(updateList);
      return;
    }

    if (!selectedItem) {
      // First selection in a pair
      setSelectedItem(clickedItem);
      const updateList = (items: PairItem[]): PairItem[] => items.map((item) => (item.id === clickedItem.id ? { ...item, status: 'selected' } : item));
      if (clickedItem.type === 'name') setNameItems(updateList);
      else setDescriptionItems(updateList);
    } else {
      // An item is already selected, now a second, different item is clicked.
      if (selectedItem.type === clickedItem.type) {
        // Swap selection within the same column
        const setList = clickedItem.type === 'name' ? setNameItems : setDescriptionItems;
        setList(prevItems => prevItems.map(item => {
          if (item.id === selectedItem.id) return { ...item, status: 'default' }; // Deselect old
          if (item.id === clickedItem.id) return { ...item, status: 'selected' }; // Select new
          return item;
        }));
        setSelectedItem(clickedItem); // Update the reference to the new selected item
        return; // End the click handler here
      }

      // Different columns, check for a match
      setIsChecking(true);
      const isMatch = clickedItem.pairId === selectedItem.pairId;
      const firstSelectedItem = selectedItem;

      if (isMatch) {
        if (enableCombo) {
          const newCombo = currentCombo + 1;
          setCurrentCombo(newCombo);
          setMaxCombo(prevMax => Math.max(prevMax, newCombo));
        }

        const updateToMatched = (items: PairItem[]): PairItem[] => items.map((item): PairItem => 
            (item.id === clickedItem.id || item.id === firstSelectedItem.id) ? { ...item, status: 'matched' } : item
        );
        setNameItems(updateToMatched);
        setDescriptionItems(updateToMatched);

        setSelectedItem(null);
        setIsChecking(false);

        setTimeout(() => {
            setMatchedCount(prev => prev + 1);
            setRemainingTechniques(prevDeck => {
                const nextTech = prevDeck.length > 0 ? prevDeck[0] : null;
                const replaceItem = (prevItems: PairItem[], itemTypeToReplace: 'name' | 'description'): PairItem[] => {
                    const newItems = [...prevItems];
                    const index = newItems.findIndex(i => i.pairId === firstSelectedItem.pairId);
                    if (index === -1) return prevItems;
                    
                    if (nextTech) {
                        newItems[index] = {
                            id: `${nextTech.name}-${itemTypeToReplace}-${Date.now()}`,
                            type: itemTypeToReplace,
                            text: itemTypeToReplace === 'name' ? nextTech.name : nextTech.description,
                            pairId: nextTech.name,
                            status: 'fading-in',
                        };
                    } else {
                        newItems[index] = {
                            id: `empty-${itemTypeToReplace[0]}-${index}-${Date.now()}`,
                            type: itemTypeToReplace,
                            text: '',
                            pairId: `empty-${index}`,
                            status: 'empty',
                        };
                    }
                    return newItems;
                };

                setNameItems(prev => replaceItem(prev, 'name'));
                setDescriptionItems(prev => replaceItem(prev, 'description'));

                setTimeout(() => {
                    const updateFadingStatus = (items: PairItem[]): PairItem[] => items.map((item) => item.status === 'fading-in' ? { ...item, status: 'default' } : item);
                    setNameItems(prev => updateFadingStatus(prev));
                    setDescriptionItems(prev => updateFadingStatus(prev));
                }, 750);

                return nextTech ? prevDeck.slice(1) : [];
            });
        }, 1500);

      } else { // Incorrect match
        if (enableCombo) {
            setCurrentCombo(0);
        }
        const updateIncorrectStatus = (items: PairItem[]) => items.map((item): PairItem => (item.id === clickedItem.id || (firstSelectedItem && item.id === firstSelectedItem.id)) ? { ...item, status: 'incorrect' } : item);
        
        if (clickedItem.type === 'name') {
            setNameItems(updateIncorrectStatus);
            setDescriptionItems(items => items.map((i): PairItem => (firstSelectedItem && i.id === firstSelectedItem.id) ? { ...i, status: 'incorrect' } : i));
        } else {
            setDescriptionItems(updateIncorrectStatus);
            setNameItems(items => items.map((i): PairItem => (firstSelectedItem && i.id === firstSelectedItem.id) ? { ...i, status: 'incorrect' } : i));
        }

        setTimeout(() => {
          const resetStatus = (items: PairItem[]) => items.map((item): PairItem => item.status === 'incorrect' ? { ...item, status: 'default' } : item);
          setNameItems(resetStatus);
          setDescriptionItems(resetStatus);
          setSelectedItem(null);
          setIsChecking(false);
        }, 250);
      }
    }
  };

  if (showTimeUpModal && enableTimer) {
    return <TimeUpModal onRestart={onRestart} maxCombo={enableCombo ? maxCombo : undefined} />;
  }

  if (techniques.length === 0) {
    return (
      <div className="w-full max-w-2xl h-full rounded-2xl bg-gray-800 shadow-2xl flex flex-col items-center justify-center p-4 sm:p-6 text-center">
        <h2 className="text-xl font-bold text-yellow-400 sm:text-3xl">Nenhuma técnica encontrada</h2>
        <p className="mt-2 text-base text-gray-300 sm:text-lg">
          Selecione mais Kyus ou ajuste os filtros para jogar.
        </p>
      </div>
    );
  }

  const getItemClasses = (item: PairItem): string => {
    let classes = 'border-2 p-3 sm:p-4 text-center rounded-lg h-full flex items-center justify-center transition-all duration-300 cursor-pointer ';
    if (item.status === 'selected') classes += 'border-green-500 bg-green-900/30 scale-105';
    else if (item.status === 'incorrect') classes += 'border-red-500 bg-red-900/30 animate-shake';
    else if (item.status === 'matched') classes += 'border-green-500 opacity-0 scale-90 pointer-events-none [transition:all_1s_ease-out]';
    else if (item.status === 'empty') classes += 'border-transparent pointer-events-none bg-transparent';
    else if (item.status === 'fading-in') classes += 'border-blue-600 bg-transparent opacity-0 [transition:opacity_0.5s_ease-in]';
    else classes += 'border-blue-600 bg-transparent hover:bg-gray-700/50';
    return classes;
  };

  return (
    <div className="w-full max-w-3xl h-full flex flex-col p-2 animate-fade-in-up">
        {!isGameFinished ? (
            <>
              {showStatusBar && (
                <div className="w-full grid grid-cols-3 items-center mb-2 sm:mb-4 px-2 py-1 bg-gray-800/50 rounded-lg flex-shrink-0">
                  <div className="text-lg sm:text-xl font-mono text-white tracking-widest text-left">
                    {enableCombo ? `🔥 ${currentCombo}` : <span>&nbsp;</span>}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-gray-300 text-center">
                    {matchedCount} / {totalTechniques}
                  </div>
                  <div className="text-lg sm:text-xl font-mono text-white tracking-widest text-right">
                    {enableTimer ? `⏳ ${String(Math.floor(timeLeft / 60)).padStart(2, '0')}:${String(timeLeft % 60).padStart(2, '0')}`: <span>&nbsp;</span>}
                  </div>
                </div>
              )}

              <div className="w-full flex-1 flex flex-col gap-2 sm:gap-4 min-h-0">
                 {nameItems.map((nameItem, index) => {
                    const descItem = descriptionItems[index];
                    if (!nameItem || !descItem) return (
                      <div key={`empty-${index}`} className="grid grid-cols-2 gap-2 sm:gap-4 flex-1">
                          <div className="border-2 border-transparent"></div>
                          <div className="border-2 border-transparent"></div>
                      </div>
                    );

                    return (
                      <div key={`${nameItem.id}-${descItem.id}`} className="grid grid-cols-2 gap-2 sm:gap-4 flex-1">
                          <button
                              onClick={() => handleItemClick(nameItem)}
                              disabled={isChecking || nameItem.status === 'matched' || nameItem.status === 'empty'}
                              className={getItemClasses(nameItem)}
                              aria-live="polite"
                          >
                            {nameItem.status !== 'empty' && 
                              <span className="text-sm sm:text-base font-medium">{nameItem.text}</span>
                            }
                          </button>
                          <button
                              onClick={() => handleItemClick(descItem)}
                              disabled={isChecking || descItem.status === 'matched' || descItem.status === 'empty'}
                              className={getItemClasses(descItem)}
                              aria-live="polite"
                          >
                             {descItem.status !== 'empty' &&
                              <span className="text-sm sm:text-base font-medium">{descItem.text}</span>
                             }
                          </button>
                      </div>
                    );
                 })}
              </div>
            </>
        ) : (
            <div className="flex flex-col items-center justify-center text-center animate-fade-in-up h-full">
                <h2 className="text-2xl sm:text-4xl font-bold text-green-400 mb-4">🎉 Parabéns!</h2>
                <p className="text-lg text-gray-300 mb-8">Você estudou todas as técnicas.</p>
                <Button onClick={onRestart} variant="primary">
                    Recomeçar
                </Button>
            </div>
        )}
    </div>
  );
};

export default PairsGame;