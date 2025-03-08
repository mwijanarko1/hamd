'use client';

import { motion } from 'framer-motion';
import { 
  Play, 
  Book, 
  Mic, 
  Star, 
  Trophy, 
  Flame,
  ChevronRight,
  Timer,
  Coins,
  Target
} from 'lucide-react';
import { useAuth } from '../../lib/hooks/useAuth';
import { useStreak } from '../../lib/hooks/useStreak';
import { useCoins } from '../../lib/hooks/useCoins';
import { useAchievements } from '../../lib/hooks/useAchievements';
import { useWeeklyGoals } from '../../lib/hooks/useWeeklyGoals';
import Link from 'next/link';

// Import levels data to calculate progress
import { levels } from './journey/page';

export default function Dashboard() {
  const { user } = useAuth();
  const streak = useStreak();
  const coins = useCoins();
  const { latestAchievement } = useAchievements();
  const weeklyGoals = useWeeklyGoals();

  // Calculate unlocked chapters (non-premium only)
  const unlockedChapters = levels.filter(level => !level.isLocked && !level.isPremium).length;
  const totalFreeChapters = levels.filter(level => !level.isPremium).length; // Should be 20
  const progressPercentage = (unlockedChapters / totalFreeChapters) * 100;

  // Find the latest unlocked lesson
  const latestUnlockedLesson = levels
    .filter(level => !level.isPremium)
    .find(level => level.isLocked) || levels[0];

  return (
    <div className="px-8 pt-4 pb-8 space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center">
            {/* Placeholder for user avatar */}
            <span className="text-2xl text-gold-600">MH</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Welcome back, {user?.displayName || 'Guest'}!</h2>
            <p className="text-gray-600">Arabic Explorer</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-gold-50 px-4 py-2 rounded-lg">
          <Flame className="w-5 h-5 text-gold-600" />
          <span className="font-medium text-gold-600">{streak} Day Streak</span>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Journey Progress</h3>
          <div className="mb-4">
            <div className="h-3 bg-gray-100 rounded-full">
              <div 
                className="h-3 bg-gold-500 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              You've completed {unlockedChapters}/{totalFreeChapters} chapters!
            </p>
          </div>
          <Link 
            href="/dashboard/journey"
            className="flex items-center text-gold-600 font-medium hover:text-gold-700"
          >
            View Journey Map
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Lesson</h3>
          <p className="text-gray-600 mb-4">{latestUnlockedLesson.name}: {latestUnlockedLesson.title}</p>
          <Link 
            href="/dashboard/journey"
            className="inline-flex items-center bg-gold-500 text-white px-4 py-2 rounded-lg hover:bg-gold-600 transition-colors"
          >
            Resume Lesson
          </Link>
        </div>
      </div>

      {/* Challenges & Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Daily Challenge</h3>
            <span className="text-sm text-gray-600">3/5</span>
          </div>
          <p className="text-gray-600 mb-4">Translate 5 words correctly</p>
          <div className="h-2 bg-gray-100 rounded-full">
            <div className="h-2 bg-gold-500 rounded-full w-3/5"></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Weekly Practice Goals</h3>
            <Target className="w-5 h-5 text-gold-600" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Practice Time</span>
                <span>{weeklyGoals.completed} / {weeklyGoals.minutes} minutes</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div 
                  className="h-2 bg-gold-500 rounded-full transition-all duration-300"
                  style={{ width: `${(weeklyGoals.completed / weeklyGoals.minutes) * 100}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {weeklyGoals.daysLeft} {weeklyGoals.daysLeft === 1 ? 'day' : 'days'} left to reach your goal
            </p>
          </div>
        </div>
      </div>

      {/* Rewards & Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Rewards</h3>
          <div className="flex items-center space-x-2 mb-4">
            <Coins className="w-5 h-5 text-gold-500" />
            <span className="font-medium text-gray-600">{coins.toLocaleString()} coins</span>
          </div>
          <p className="text-sm text-gray-600">
            Earn 200 more coins to unlock a new avatar!
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievement</h3>
          {latestAchievement ? (
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-gold-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{latestAchievement.title}</p>
                <p className="text-sm text-gray-600">{latestAchievement.description}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Complete lessons to earn achievements!</p>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <button className="flex items-center justify-center space-x-2 bg-gold-500 text-white px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors">
          <Play className="w-5 h-5" />
          <span>Start Lesson</span>
        </button>
        <Link 
          href="/dashboard/vocabulary"
          className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Book className="w-5 h-5" />
          <span>Revise Vocabulary</span>
        </Link>
        <button className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          <Mic className="w-5 h-5" />
          <span>Practice Speaking</span>
        </button>
      </div>
    </div>
  );
} 