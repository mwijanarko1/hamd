'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Calendar, Gift, Flame, Crown, Medal, Share2 } from 'lucide-react';
import { useState } from 'react';

// Mock data for rewards
const rewardCategories = {
  daily: {
    title: 'Daily Rewards',
    description: 'Log in daily to earn rewards',
    icon: Calendar,
    rewards: [
      { id: 1, name: 'Daily Coins', amount: 100, claimed: true },
      { id: 2, name: 'Bonus Life', amount: 1, claimed: false },
      { id: 3, name: 'Special Sticker', amount: 1, claimed: false },
    ],
    nextReward: '4 hours until next daily reward'
  },
  challenge: {
    title: 'Challenge Rewards',
    description: 'Complete challenges to earn special rewards',
    icon: Trophy,
    rewards: [
      { id: 4, name: 'Grammar Master Badge', progress: 80, total: 100 },
      { id: 5, name: 'Vocabulary Champion', progress: 45, total: 100 },
      { id: 6, name: 'Perfect Pronunciation', progress: 60, total: 100 },
    ]
  },
  streak: {
    title: 'Streak Rewards',
    description: 'Keep your learning streak alive',
    icon: Flame,
    currentStreak: 7,
    nextMilestone: 10,
    rewards: [
      { days: 3, reward: '100 Coins', claimed: true },
      { days: 7, reward: '300 Coins', claimed: false },
      { days: 10, reward: 'Special Badge', claimed: false },
      { days: 30, reward: 'Premium Theme', claimed: false },
    ]
  },
  milestone: {
    title: 'Milestone Rewards',
    description: 'Celebrate your achievements',
    icon: Crown,
    milestones: [
      { id: 7, name: '10 Lessons Completed', progress: 8, total: 10, reward: 'Golden Trophy' },
      { id: 8, name: '100 Words Learned', progress: 75, total: 100, reward: 'Word Master Badge' },
      { id: 9, name: '5 Topics Mastered', progress: 3, total: 5, reward: 'Topic Expert Crown' },
    ]
  }
};

export default function RewardsPage() {
  const [selectedReward, setSelectedReward] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Rewards Gallery</h1>
          <p className="mt-2 text-gray-600">Track your achievements and collect rewards</p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Daily Rewards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <Calendar className="w-6 h-6 text-gold-500 mr-3" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Daily Rewards</h2>
                <p className="text-sm text-gray-600">{rewardCategories.daily.nextReward}</p>
              </div>
            </div>

            <div className="space-y-4">
              {rewardCategories.daily.rewards.map((reward) => (
                <div key={reward.id} className="flex items-center justify-between">
                  <span className="text-gray-700">{reward.name}</span>
                  <button
                    disabled={reward.claimed}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium
                      ${reward.claimed 
                        ? 'bg-gray-100 text-gray-400' 
                        : 'bg-gold-500 text-white hover:bg-gold-600'}
                    `}
                  >
                    {reward.claimed ? 'Claimed' : 'Claim'}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Streak Rewards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <Flame className="w-6 h-6 text-orange-500 mr-3" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Streak Rewards</h2>
                <p className="text-sm text-gray-600">
                  Current streak: {rewardCategories.streak.currentStreak} days
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {rewardCategories.streak.rewards.map((reward, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-700">{reward.days} Days</span>
                    <span className="text-sm text-gray-500 ml-2">({reward.reward})</span>
                  </div>
                  {reward.claimed ? (
                    <span className="text-green-500 text-sm">Claimed ✓</span>
                  ) : (
                    <div className="flex items-center text-sm text-gray-500">
                      {rewardCategories.streak.currentStreak >= reward.days ? (
                        <button className="px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600">
                          Claim
                        </button>
                      ) : (
                        <span>{reward.days - rewardCategories.streak.currentStreak} days left</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenge Rewards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <Trophy className="w-6 h-6 text-gold-500 mr-3" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Challenge Rewards</h2>
                <p className="text-sm text-gray-600">Complete challenges to earn rewards</p>
              </div>
            </div>

            <div className="space-y-6">
              {rewardCategories.challenge.rewards.map((reward) => (
                <div key={reward.id}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">{reward.name}</span>
                    <span className="text-gray-500">{reward.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-gold-500 rounded-full h-2 transition-all duration-300"
                      style={{ width: `${reward.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Milestone Rewards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm p-6"
          >
            <div className="flex items-center mb-6">
              <Crown className="w-6 h-6 text-gold-500 mr-3" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Milestone Rewards</h2>
                <p className="text-sm text-gray-600">Track your major achievements</p>
              </div>
            </div>

            <div className="space-y-6">
              {rewardCategories.milestone.milestones.map((milestone) => (
                <div key={milestone.id}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">{milestone.name}</span>
                    <span className="text-gray-500">
                      {milestone.progress}/{milestone.total}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                    <div
                      className="bg-gold-500 rounded-full h-2 transition-all duration-300"
                      style={{ width: `${(milestone.progress / milestone.total) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center text-sm text-gold-600">
                    <Gift className="w-4 h-4 mr-1" />
                    <span>Reward: {milestone.reward}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Sharing */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600">
            <Share2 className="w-5 h-5 mr-2" />
            Share Your Achievements
          </button>
        </div>
      </div>
    </div>
  );
} 