import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export interface VocabularyWord {
  type: string;
  arabic: string;
  transliteration: string;
  english: string;
  chapterId: number;
  dateAdded: Date;
}

export function useVocabulary() {
  const [vocabulary, setVocabulary] = useState<VocabularyWord[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.uid) return;

    // Set up real-time listener for vocabulary updates
    const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (doc) => {
      if (doc.exists()) {
        const vocabData = doc.data()?.vocabulary || [];
        setVocabulary(vocabData.map((word: any) => ({
          ...word,
          dateAdded: word.dateAdded?.toDate() || new Date()
        })));
      }
    });

    return () => unsubscribe();
  }, [user]);

  const addWordsFromChapter = async (chapterId: number, words: Omit<VocabularyWord, 'dateAdded'>[]) => {
    if (!user?.uid) return;

    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    
    const existingVocabulary = userDoc.data()?.vocabulary || [];
    const newWords = words.map(word => ({
      ...word,
      chapterId,
      dateAdded: new Date()
    }));

    // Filter out duplicates based on arabic text
    const uniqueWords = [...existingVocabulary];
    newWords.forEach(newWord => {
      if (!uniqueWords.some(word => word.arabic === newWord.arabic)) {
        uniqueWords.push(newWord);
      }
    });

    await setDoc(userRef, { 
      ...userDoc.data(),
      vocabulary: uniqueWords 
    }, { merge: true });
  };

  return {
    vocabulary,
    addWordsFromChapter
  };
} 