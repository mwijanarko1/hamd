'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Level, levels as initialLevels } from '@/lib/data/levels';
import { useMasterKey } from './MasterKeyContext';

interface LevelsContextType {
  levels: Level[];
  unlockNextChapter: (completedChapterId: number) => void;
}

export const LevelsContext = createContext<LevelsContextType | undefined>(undefined);

export function LevelsProvider({ children }: { children: React.ReactNode }) {
  const { isUnlocked } = useMasterKey();
  // Initialize state from localStorage or default levels
  const [levelsState, setLevelsState] = useState<Level[]>(() => {
    // Only run this on client side
    if (typeof window !== 'undefined') {
      const savedLevels = localStorage.getItem('arabicLevels');
      if (savedLevels) {
        return JSON.parse(savedLevels);
      }
    }
    return initialLevels;
  });

  // Update levels when master key status changes
  useEffect(() => {
    if (isUnlocked) {
      // Unlock all chapters if master key is active
      setLevelsState(prevLevels => 
        prevLevels.map(level => ({
          ...level,
          isLocked: false,
          isPremium: false
        }))
      );
    } else {
      // Restore original progression state from localStorage or default
      const savedLevels = localStorage.getItem('arabicLevels');
      if (savedLevels) {
        setLevelsState(JSON.parse(savedLevels));
      } else {
        setLevelsState(initialLevels);
      }
    }
  }, [isUnlocked]);

  const unlockNextChapter = (completedChapterId: number) => {
    // Don't modify progression if master key is active
    if (isUnlocked) return;

    setLevelsState(prevLevels => {
      const newLevels = prevLevels.map(level => {
        if (level.id === completedChapterId + 1) {
          return { ...level, isLocked: false };
        }
        return level;
      });
      
      // Save to localStorage
      localStorage.setItem('arabicLevels', JSON.stringify(newLevels));
      return newLevels;
    });
  };

  // Save levels state to localStorage whenever it changes
  useEffect(() => {
    if (!isUnlocked) { // Only save to localStorage if master key is not active
      localStorage.setItem('arabicLevels', JSON.stringify(levelsState));
    }
  }, [levelsState, isUnlocked]);

  return (
    <LevelsContext.Provider value={{ levels: levelsState, unlockNextChapter }}>
      {children}
    </LevelsContext.Provider>
  );
}

export function useLevels() {
  const context = useContext(LevelsContext);
  if (context === undefined) {
    throw new Error('useLevels must be used within a LevelsProvider');
  }
  return context;
} 