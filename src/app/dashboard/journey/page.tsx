'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Lock, 
  Play, 
  Scroll, 
  Book, 
  Volume2, 
  Landmark,
  ChevronLeft,
  ChevronRight,
  Crown
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useMasterKey } from '@/lib/contexts/MasterKeyContext';
import { useLevels } from '@/lib/contexts/LevelsContext';

const sections = [
  {
    name: 'Desert Oasis',
    bgClass: 'from-amber-100 to-orange-100',
    description: 'Begin your journey in the serene desert oasis',
    theme: 'desert',
    icon: '🌅'
  },
  {
    name: 'Ancient City',
    bgClass: 'from-stone-100 to-amber-100',
    description: 'Explore the bustling markets and historic architecture',
    theme: 'city',
    icon: '🕌'
  },
  {
    name: 'Garden of Words',
    bgClass: 'from-emerald-100 to-green-100',
    description: 'Discover new vocabulary in a lush garden setting',
    theme: 'garden',
    icon: '🌸'
  },
  {
    name: 'Sea of Knowledge',
    bgClass: 'from-blue-100 to-cyan-100',
    description: 'Dive deep into advanced concepts',
    theme: 'sea',
    icon: '🌊'
  },
  {
    name: 'Calligraphy Palace',
    bgClass: 'from-purple-100 to-indigo-100',
    description: 'Master the art of Arabic writing',
    theme: 'palace',
    icon: '✒️'
  },
  {
    name: 'Celestial Sky',
    bgClass: 'from-indigo-100 to-violet-100',
    description: 'Reach for the stars with advanced topics',
    theme: 'sky',
    icon: '✨'
  },
  {
    name: 'Mystical Mountains',
    bgClass: 'from-gold-100 to-amber-100',
    description: 'Achieve mastery at the peak of knowledge',
    theme: 'mountain',
    icon: '⛰️'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'grammar':
      return <Scroll className="w-5 h-5" />;
    case 'vocabulary':
      return <Book className="w-5 h-5" />;
    case 'pronunciation':
      return <Volume2 className="w-5 h-5" />;
    case 'culture':
      return <Landmark className="w-5 h-5" />;
    default:
      return null;
  }
};

export default function JourneyPage() {
  const { levels } = useLevels();
  const { isUnlocked } = useMasterKey();
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [currentSection, setCurrentSection] = useState(0);

  // Modify levels to respect master key status
  const displayLevels = levels.map(level => ({
    ...level,
    isLocked: isUnlocked ? false : level.isLocked,
    isPremium: isUnlocked ? false : level.isPremium
  }));

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Controls */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => setCurrentSection(prev => Math.max(prev - 1, 0))}
            disabled={currentSection === 0}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 bg-white shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold text-gray-900">{sections[currentSection].name}</h1>
            <p className="text-gray-600 mt-1">{sections[currentSection].description}</p>
          </div>
          <button
            onClick={() => setCurrentSection(prev => Math.min(prev + 1, sections.length - 1))}
            disabled={currentSection === sections.length - 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 bg-white shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Level Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayLevels
            .filter(level => level.section === currentSection)
            .map(level => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-white rounded-xl p-6 shadow-sm ${
                  level.isLocked || level.isPremium ? 'opacity-75' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-gold-100 p-2 rounded-lg">
                      {getTypeIcon(level.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{level.name}</h3>
                      <p className="text-sm text-gray-500">{level.type}</p>
                    </div>
                  </div>
                  {level.isPremium && !level.isLocked && (
                    <div className="bg-gold-100 p-2 rounded-lg">
                      <Crown className="w-5 h-5 text-gold-600" />
                    </div>
                  )}
                  {level.isLocked && (
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-2">{level.title}</h4>
                <p className="text-gray-600 mb-4">{level.description}</p>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(3)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < level.stars ? 'text-gold-500 fill-gold-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Rewards */}
                <div className="bg-cream-50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-500 mb-2">Rewards</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gold-600">{level.rewards.coins} coins</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gold-600">{level.rewards.xp} XP</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{level.rewards.unlocks}</div>
                </div>

                {level.isLocked ? (
                  <button
                    disabled
                    className="w-full py-2 px-4 bg-gray-100 text-gray-400 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Complete Previous Chapter
                  </button>
                ) : level.isPremium ? (
                  <button className="w-full py-2 px-4 bg-gold-500 text-white rounded-lg hover:bg-gold-600 flex items-center justify-center gap-2">
                    <Crown className="w-4 h-4" />
                    Unlock Premium
                  </button>
                ) : (
                  <Link
                    href={`/dashboard/chapter/${level.id}`}
                    className="w-full py-2 px-4 bg-gold-500 text-white rounded-lg hover:bg-gold-600 flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Start Chapter
                  </Link>
                )}
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
} 