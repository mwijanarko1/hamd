'use client';

import { motion } from 'framer-motion';
import { Book, Trophy, Calendar, Star, Timer, Zap } from 'lucide-react';
import { useState } from 'react';

// Mock data for vocabulary challenges
const vocabularyChallenges = [
  {
    id: 1,
    title: 'Daily Word Sprint',
    description: 'Learn 10 new Arabic words in a day',
    progress: 3,
    total: 10,
    reward: 100,
    icon: Book,
    type: 'daily',
    difficulty: 'easy'
  },
  {
    id: 2,
    title: 'Verb Master',
    description: 'Master 50 commonly used Arabic verbs',
    progress: 15,
    total: 50,
    reward: 500,
    icon: Zap,
    type: 'weekly',
    difficulty: 'hard'
  },
  {
    id: 3,
    title: 'Translation Match',
    description: 'Match 20 Arabic words to their correct English translations',
    progress: 0,
    total: 20,
    reward: 200,
    icon: Book,
    type: 'daily',
    difficulty: 'medium'
  },
  {
    id: 4,
    title: 'Picture Perfect',
    description: 'Identify the correct Arabic word from a picture clue',
    progress: 8,
    total: 15,
    reward: 150,
    icon: Book,
    type: 'daily',
    difficulty: 'easy'
  },
  {
    id: 5,
    title: 'Spelling Bee',
    description: 'Spell 15 new Arabic words correctly',
    progress: 0,
    total: 15,
    reward: 300,
    icon: Star,
    type: 'weekly',
    difficulty: 'hard'
  },
  {
    id: 6,
    title: 'Color Master',
    description: 'Learn all the colors in Arabic and use them in a sentence',
    progress: 4,
    total: 12,
    reward: 250,
    icon: Book,
    type: 'weekly',
    difficulty: 'medium'
  },
  {
    id: 7,
    title: 'Synonym Scholar',
    description: 'Memorize 10 Arabic synonyms for common words',
    progress: 2,
    total: 10,
    reward: 200,
    icon: Book,
    type: 'daily',
    difficulty: 'medium'
  },
  {
    id: 8,
    title: 'Animal Kingdom',
    description: 'Learn 15 animal names in Arabic',
    progress: 7,
    total: 15,
    reward: 150,
    icon: Book,
    type: 'daily',
    difficulty: 'easy'
  },
  {
    id: 9,
    title: 'Plural Pro',
    description: 'Identify the correct plural form for 20 Arabic nouns',
    progress: 0,
    total: 20,
    reward: 400,
    icon: Star,
    type: 'weekly',
    difficulty: 'hard'
  },
  {
    id: 10,
    title: 'Category Champion',
    description: 'Sort words into the correct category',
    progress: 5,
    total: 25,
    reward: 300,
    icon: Book,
    type: 'weekly',
    difficulty: 'medium'
  }
];

export default function ChallengesPage() {
  const [filter, setFilter] = useState('all');
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(null);

  const filteredChallenges = vocabularyChallenges.filter(challenge => 
    filter === 'all' || challenge.type === filter
  );

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Daily Challenges</h1>
          <p className="mt-2 text-gray-600">Complete challenges to earn rewards and track your progress</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {['all', 'daily', 'weekly'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium
                ${filter === type 
                  ? 'bg-gold-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}
              `}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges.map((challenge) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`
                    p-2 rounded-full
                    ${challenge.difficulty === 'easy' ? 'bg-green-100 text-green-600'
                      : challenge.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-red-100 text-red-600'}
                  `}>
                    <challenge.icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-4 h-4 text-gold-500 mr-1" />
                    <span className="text-sm font-medium text-gold-500">{challenge.reward}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {challenge.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                  <div
                    className="bg-gold-500 rounded-full h-2 transition-all duration-300"
                    style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {challenge.progress} / {challenge.total}
                  </span>
                  <button
                    onClick={() => setSelectedChallenge(challenge.id)}
                    className="px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
                  >
                    Start
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Challenge Modal */}
      {selectedChallenge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {vocabularyChallenges.find(c => c.id === selectedChallenge)?.title}
              </h3>
              <button
                onClick={() => setSelectedChallenge(null)}
                className="text-gray-400 hover:text-gray-500"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-gray-600">
                {vocabularyChallenges.find(c => c.id === selectedChallenge)?.description}
              </p>

              <div className="bg-gold-50 rounded-lg p-4">
                <h4 className="font-medium text-gold-700 mb-2">Reward</h4>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-gold-500" />
                  <span className="text-gold-700">
                    {vocabularyChallenges.find(c => c.id === selectedChallenge)?.reward} points
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedChallenge(null)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600">
                Begin Challenge
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
} 