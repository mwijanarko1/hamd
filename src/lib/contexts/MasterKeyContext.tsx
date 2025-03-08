'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface MasterKeyContextType {
  isUnlocked: boolean;
  unlockAll: () => void;
}

const MasterKeyContext = createContext<MasterKeyContextType | undefined>(undefined);

export function MasterKeyProvider({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('masterKeyUnlocked');
      return saved === 'true';
    }
    return false;
  });

  useEffect(() => {
    // Save to localStorage whenever it changes
    localStorage.setItem('masterKeyUnlocked', isUnlocked.toString());
  }, [isUnlocked]);

  const unlockAll = () => {
    setIsUnlocked(true);
  };

  return (
    <MasterKeyContext.Provider value={{ isUnlocked, unlockAll }}>
      {children}
    </MasterKeyContext.Provider>
  );
}

export function useMasterKey() {
  const context = useContext(MasterKeyContext);
  if (context === undefined) {
    throw new Error('useMasterKey must be used within a MasterKeyProvider');
  }
  return context;
} 