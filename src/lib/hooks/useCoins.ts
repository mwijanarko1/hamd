import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export function useCoins() {
  const [coins, setCoins] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.uid) return;

    // Set up real-time listener for coins updates
    const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (doc) => {
      if (doc.exists()) {
        setCoins(doc.data()?.coins || 0);
      }
    });

    return () => unsubscribe();
  }, [user]);

  return coins;
} 