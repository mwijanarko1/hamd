import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: Date;
}

export function useAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [latestAchievement, setLatestAchievement] = useState<Achievement | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.uid) return;

    const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (doc) => {
      if (doc.exists() && doc.data()?.achievements) {
        const achievementsData = doc.data()?.achievements || [];
        // Sort achievements by date earned, most recent first
        const sortedAchievements = achievementsData
          .map((achievement: any) => ({
            ...achievement,
            earnedAt: achievement.earnedAt?.toDate() || new Date()
          }))
          .sort((a: Achievement, b: Achievement) => 
            b.earnedAt.getTime() - a.earnedAt.getTime()
          );

        setAchievements(sortedAchievements);
        setLatestAchievement(sortedAchievements[0] || null);
      }
    });

    return () => unsubscribe();
  }, [user]);

  return {
    achievements,
    latestAchievement
  };
} 