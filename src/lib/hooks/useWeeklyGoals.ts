import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/firebase';

interface WeeklyGoals {
  minutes: number;
  completed: number;
  daysLeft: number;
}

export function useWeeklyGoals() {
  const [goals, setGoals] = useState<WeeklyGoals>({
    minutes: 120,
    completed: 0,
    daysLeft: 7
  });
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.uid) return;

    const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (doc) => {
      if (doc.exists() && doc.data()?.weeklyGoals) {
        const weeklyGoals = doc.data()?.weeklyGoals;
        
        // Calculate days left in the week
        const now = new Date();
        const weekStart = new Date(weeklyGoals.weekStartDate?.toDate() || now);
        const daysLeft = 7 - Math.floor((now.getTime() - weekStart.getTime()) / (1000 * 60 * 60 * 24));

        setGoals({
          minutes: weeklyGoals.targetMinutes || 120,
          completed: weeklyGoals.completedMinutes || 0,
          daysLeft: Math.max(0, daysLeft)
        });
      }
    });

    return () => unsubscribe();
  }, [user]);

  return goals;
} 