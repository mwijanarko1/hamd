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

// Create the levels array
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