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
import { useState, createContext, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useMasterKey } from '@/lib/contexts/MasterKeyContext';

// Add interfaces at the top
export interface Level {
  id: number;
  name: string;
  title: string;
  type: string;
  description: string;
  isLocked: boolean;
  isPremium: boolean;
  stars: number;
  rewards: {
    coins: number;
    xp: number;
    unlocks: string;
  };
  section: number;
}

// Mock data for levels with enhanced details
const chapterNames = [
  'Words: Nouns, Verbs, Particles', 'Singular, Dual, and Plural', 'Pronouns', 'Prepositions', 'Adverb of Time and Place',
  'Demonstrative Pronoun', 'Relative Pronouns', 'Interrogative Pronouns', 'Possessive Phrase', 'Descriptive Phrase',
  'Declension of a Noun', 'Feminine Gender', 'Noun of Place and Time', 'Noun of Instrument', 'Noun of Pre-eminence',
  'Nominal Sentence', 'Verb', 'Verbal Sentence', 'The Imperative 1', 'The Imperative 2',
  'Conditional Sentences', 'Inna and its Sisters', 'Kaana and its Sisters', 'Present Tense and Consonant Verbs', 'Imperfect Tense',
  'Imperfect Tense 2', 'Imperfect Tense 3', 'Imperfect Tense 4', 'Past Continuous', 'Moods of the Imperfect Tense 1',
  'Moods of the Imperfect Tense 2', 'Transitive and Intransitive Verbs', 'Past Passive Verb', 'Imperfect Passive Verb', 'Verbs with Hamzah',
  'Weak Verbs', 'Weak Verbs 2', 'Weak Verbs 3', 'Doubly Weak Verb', 'Double Lettered Verbs',
  'Verbs with Fixed Prepositions', 'Absolute Negation', 'Triliteral Derived Verb Forms', 'Form 2', 'Form 3',
  'Form 4', 'Form 5', 'Form 6', 'Form 7', 'Form 8',
  'Form 9', 'Form 10', 'Form 11', '4 Lettered Verbs (Form 12)', 'Derived Forms of 4 Lettered Verbs (Forms 13, 14, 15)',
  'Exception', 'Double Emphasis', 'Active Participle', 'Passive Participle', 'Verbal Noun',
  'Substitute', 'Accusative', 'Accusative 2', 'Particles of Conjunction', 'Interjection, Vocative, and Other Particles of Interjection',
  'Adjectives', 'Elative', 'More Numbers', 'Five Magnified Nouns', 'Various Unorthodox Verbs'
];

// Export the levels array
export const levels: Level[] = Array.from({ length: 70 }, (_, i) => ({
  id: i + 1,
  name: `Chapter ${i + 1}`,
  title: chapterNames[i],
  type: ['grammar', 'vocabulary', 'pronunciation', 'culture'][i % 4],
  description: chapterNames[i],
  isLocked: i > 0, // Only first chapter is unlocked initially
  isPremium: i >= 20,
  stars: i < 3 ? 3 : i < 4 ? 2 : i < 5 ? 1 : 0,
  rewards: {
    coins: 100,
    xp: 50,
    unlocks: ['New sticker pack', 'Grammar hint', 'Pronunciation guide'][i % 3]
  },
  section: Math.floor(i / 10)
}));

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

// Create a context to manage the levels state
interface LevelsContextType {
  levels: Level[];
  unlockNextChapter: (completedChapterId: number) => void;
}

export const LevelsContext = createContext<LevelsContextType | undefined>(undefined);

export function LevelsProvider({ children }: { children: React.ReactNode }) {
  const { isUnlocked } = useMasterKey();
  // Initialize state from localStorage or default levels
  const [levelsState, setLevelsState] = useState<Level[]>(() => {
    // Only run this on client side
    if (typeof window !== 'undefined') {
      const savedLevels = localStorage.getItem('arabicLevels');
      if (savedLevels) {
        return JSON.parse(savedLevels);
      }
    }
    return levels;
  });

  // Update levels when master key status changes
  useEffect(() => {
    if (isUnlocked) {
      // Unlock all chapters if master key is active
      setLevelsState(prevLevels => 
        prevLevels.map(level => ({
          ...level,
          isLocked: false,
          isPremium: false
        }))
      );
    } else {
      // Restore original progression state from localStorage or default
      const savedLevels = localStorage.getItem('arabicLevels');
      if (savedLevels) {
        setLevelsState(JSON.parse(savedLevels));
      } else {
        setLevelsState(levels);
      }
    }
  }, [isUnlocked]);

  const unlockNextChapter = (completedChapterId: number) => {
    // Don't modify progression if master key is active
    if (isUnlocked) return;

    setLevelsState(prevLevels => {
      const newLevels = prevLevels.map(level => {
        if (level.id === completedChapterId + 1) {
          return { ...level, isLocked: false };
        }
        return level;
      });
      
      // Save to localStorage
      localStorage.setItem('arabicLevels', JSON.stringify(newLevels));
      return newLevels;
    });
  };

  // Save levels state to localStorage whenever it changes
  useEffect(() => {
    if (!isUnlocked) { // Only save to localStorage if master key is not active
      localStorage.setItem('arabicLevels', JSON.stringify(levelsState));
    }
  }, [levelsState, isUnlocked]);

  return (
    <LevelsContext.Provider value={{ levels: levelsState, unlockNextChapter }}>
      {children}
    </LevelsContext.Provider>
  );
}

export function useLevels() {
  const context = useContext(LevelsContext);
  if (context === undefined) {
    throw new Error('useLevels must be used within a LevelsProvider');
  }
  return context;
}

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
            <h1 className="text-3xl font-bold text-gray-900">Your Arabic Journey</h1>
            <p className="mt-2 text-gray-600">
              {sections[currentSection].name} - {sections[currentSection].description}
            </p>
          </div>
          <button
            onClick={() => setCurrentSection(prev => Math.min(prev + 1, sections.length - 1))}
            disabled={currentSection === sections.length - 1}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 bg-white shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Journey Map */}
        <div className="relative overflow-hidden">
          <motion.div
            className={`
              rounded-2xl overflow-hidden bg-gradient-to-r 
              ${sections[currentSection].bgClass} p-8
              transform transition-all duration-500
            `}
          >
            {/* Section Icon */}
            <div className="text-6xl text-center mb-8">
              {sections[currentSection].icon}
            </div>

            {/* Winding Path */}
            <div className="relative">
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-[url('/path-pattern.svg')] bg-repeat-y"></div>
              </div>

              {/* Levels Grid with Path Animation */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
                {displayLevels
                  .filter(level => level.section === currentSection)
                  .map((level, index) => (
                    <motion.div
                      key={level.id}
                      className={`
                        relative group transform
                        ${level.isLocked ? 'opacity-75' : 'hover:scale-105'}
                        transition-all duration-200
                      `}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => !level.isLocked && setSelectedLevel(level.id)}
                    >
                      <div className={`
                        w-full aspect-square rounded-xl cursor-pointer
                        ${level.isLocked ? 'bg-gray-200' : 'bg-white shadow-lg'}
                        relative overflow-hidden
                        border-2 ${level.stars > 0 ? 'border-gold-500' : 'border-transparent'}
                        ${!level.isLocked && !level.isPremium ? 'hover:scale-105' : ''}
                        transition-all duration-200
                      `}>
                        {/* Premium Badge */}
                        {level.isPremium && (
                          <div className="absolute top-2 right-2 bg-gold-500 text-white text-xs px-2 py-1 rounded-full">
                            PRO
                          </div>
                        )}

                        {/* Level Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                          <div className="flex flex-col items-center space-y-2">
                            {/* Type Icon */}
                            <div className="text-gray-600">
                              {getTypeIcon(level.type)}
                            </div>

                            {/* Chapter Number */}
                            <span className="text-gold-600 font-medium">
                              Chapter {level.id}
                            </span>

                            {/* Chapter Title */}
                            <span className="text-gray-900 font-medium text-sm text-center">
                              {level.title}
                            </span>
                          </div>
                        </div>

                        {/* Status Overlay */}
                        <div className="absolute bottom-2 right-2 flex items-center">
                          {level.isLocked || level.isPremium ? (
                            <Lock className="w-4 h-4 text-gray-400" />
                          ) : (
                            <div className="flex space-x-1">
                              {[1, 2, 3].map(starIndex => (
                                <Star
                                  key={starIndex}
                                  className={`w-4 h-4 ${
                                    starIndex <= level.stars
                                      ? 'text-gold-500 fill-gold-500'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Level Selection Modal */}
      <AnimatePresence>
        {selectedLevel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
            >
              {displayLevels[selectedLevel - 1].isPremium ? (
                <>
                  <div className="text-center mb-6">
                    <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-gold-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Premium Content
                    </h3>
                    <p className="text-gray-600">
                      Unlock all 70 chapters and get access to premium features by upgrading to PRO.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setSelectedLevel(null)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Maybe Later
                    </button>
                    <button
                      className="flex-1 px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600"
                    >
                      Upgrade to PRO
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {displayLevels[selectedLevel - 1].name}
                    </h3>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map(starIndex => (
                        <Star
                          key={starIndex}
                          className={`w-5 h-5 ${
                            starIndex <= displayLevels[selectedLevel - 1].stars
                              ? 'text-gold-500 fill-gold-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <p className="text-gray-600">
                      {displayLevels[selectedLevel - 1].description}
                    </p>

                    <div className="bg-gold-50 rounded-lg p-4">
                      <h4 className="font-medium text-gold-700 mb-2">Rewards</h4>
                      <div className="flex items-center space-x-4 text-sm">
                        <span>🪙 {displayLevels[selectedLevel - 1].rewards.coins} coins</span>
                        <span>✨ {displayLevels[selectedLevel - 1].rewards.xp} XP</span>
                      </div>
                      <div className="text-sm text-gold-600 mt-2">
                        Unlock: {displayLevels[selectedLevel - 1].rewards.unlocks}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => setSelectedLevel(null)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <Link
                      href={`/dashboard/chapter/${selectedLevel}`}
                      className="flex-1 px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 text-center"
                    >
                      Start Chapter
                    </Link>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 