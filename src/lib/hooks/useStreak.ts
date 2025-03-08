'use client';

import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

interface StreakData {
  lastLoginDate: string;
  currentStreak: number;
}

export function useStreak() {
  const { user } = useAuth();
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (!user) return;

    const updateStreak = () => {
      const storedData = localStorage.getItem(`streak_${user.uid}`);
      const today = new Date().toISOString().split('T')[0];
      
      if (storedData) {
        const data: StreakData = JSON.parse(storedData);
        const lastLogin = new Date(data.lastLoginDate);
        const currentDate = new Date();
        
        // Calculate the difference in days
        const diffTime = currentDate.getTime() - lastLogin.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) {
          // Already logged in today, maintain streak
          setStreak(data.currentStreak);
        } else if (diffDays === 1) {
          // Consecutive day login, increment streak
          const newStreak = data.currentStreak + 1;
          setStreak(newStreak);
          localStorage.setItem(`streak_${user.uid}`, JSON.stringify({
            lastLoginDate: today,
            currentStreak: newStreak
          }));
        } else {
          // Streak broken, reset to 1
          setStreak(1);
          localStorage.setItem(`streak_${user.uid}`, JSON.stringify({
            lastLoginDate: today,
            currentStreak: 1
          }));
        }
      } else {
        // First time login
        setStreak(1);
        localStorage.setItem(`streak_${user.uid}`, JSON.stringify({
          lastLoginDate: today,
          currentStreak: 1
        }));
      }
    };

    updateStreak();
  }, [user]);

  return streak;
} 