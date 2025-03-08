interface Category {
  arabic: string;
  transliteration: string;
  english: string;
}

interface Example {
  arabic: string;
  transliteration: string;
  english: string;
}

interface Characteristic {
  name: string;
  description: string;
  example: string;
}

interface Tense {
  name: string;
  description: string;
  example: string;
}

interface Type {
  name: string;
  description: string;
  example: string;
}

interface Section {
  title: string;
  content: string;
  characteristics?: Characteristic[];
  tenses?: Tense[];
  types?: Type[];
  examples: Example[];
}

interface VocabularyWord {
  type: string;
  arabic: string;
  transliteration: string;
  english: string;
}

interface QuizQuestion {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  explanation?: string;
}

export interface ChapterContent {
  title: string;
  introduction: string;
  mainCategories: Category[];
  sections: Section[];
  vocabularyList: VocabularyWord[];
  quiz: {
    title: string;
    questions: QuizQuestion[];
  };
}

export const chapter1Content: ChapterContent = {
  title: 'Words (الكلمات)',
  introduction: 'In the Arabic language, all words fall into three main categories:',
  mainCategories: [
    { arabic: 'الاسم', transliteration: 'Al-Ism', english: 'Noun' },
    { arabic: 'الفعل', transliteration: 'Al-Fi\'l', english: 'Verb' },
    { arabic: 'الحرف', transliteration: 'Al-Harf', english: 'Particle' }
  ],
  sections: [
    {
      title: '1. Noun (الاسم)',
      content: 'A noun (الاسم) in Arabic is any word that refers to a person, place, thing, or idea. Unlike in English, Arabic nouns do not require an article like \'a\' or \'the\' to be recognized.',
      characteristics: [
        {
          name: 'Tanween (التنوين)',
          description: 'The presence of double vowels (ً, ٍ, ٌ) at the end of a word.',
          example: 'كِتَابٌ (a book)'
        },
        {
          name: 'Definiteness (ال التعريف)',
          description: 'The use of \'ال\' (Al-) at the beginning to make a noun definite.',
          example: 'الْمَسْجِد (the mosque)'
        },
        {
          name: 'Preposition attachment',
          description: 'A noun can follow a preposition (e.g., في \'in,\' على \'on\').',
          example: 'في البيت (in the house)'
        }
      ],
      examples: [
        { arabic: 'كِتَابٌ', transliteration: 'kitāb', english: 'Book' },
        { arabic: 'مَسْجِدٌ', transliteration: 'masjid', english: 'Mosque' },
        { arabic: 'مُدَرِّسٌ', transliteration: 'mudarris', english: 'Teacher' }
      ]
    },
    {
      title: '2. Verb (الفعل)',
      content: 'A verb (الفعل) is a word that indicates an action or a state of being. In Arabic, verbs change based on tense (زمن) and subject pronoun (الضمائر).',
      tenses: [
        {
          name: 'Past (الماضي)',
          description: 'Describes actions that have already happened.',
          example: 'كَتَبَ (kataba) – He wrote'
        },
        {
          name: 'Present (المضارع)',
          description: 'Describes actions happening now or repeatedly.',
          example: 'يَكْتُبُ (yaktubu) – He writes'
        },
        {
          name: 'Imperative (الأمر)',
          description: 'Used for commands.',
          example: 'اُكْتُبْ (uktub) – Write!'
        }
      ],
      examples: [
        { arabic: 'ذَهَبَ', transliteration: 'dhahaba', english: 'He went' },
        { arabic: 'يَأْكُلُ', transliteration: 'ya\'kulu', english: 'He eats' },
        { arabic: 'اِقْرَأْ', transliteration: 'iqra\'', english: 'Read!' }
      ]
    },
    {
      title: '3. Particle (الحرف)',
      content: 'A particle (الحرف) is a word that does not have a meaning on its own but changes the meaning of a sentence when used with nouns or verbs.',
      types: [
        {
          name: 'Prepositions (حروف الجر)',
          description: 'Connect a noun to another word.',
          example: 'في (fī) – In'
        },
        {
          name: 'Conjunctions (حروف العطف)',
          description: 'Link two words or sentences.',
          example: 'و (wa) – And'
        },
        {
          name: 'Negation Words (حروف النفي)',
          description: 'Used to negate verbs.',
          example: 'لَا (lā) – No / Not'
        }
      ],
      examples: [
        { arabic: 'في', transliteration: 'fī', english: 'In' },
        { arabic: 'مِنْ', transliteration: 'min', english: 'From' },
        { arabic: 'لَا', transliteration: 'lā', english: 'No / Not' }
      ]
    }
  ],
  vocabularyList: [
    { type: 'Noun', arabic: 'كِتَابٌ', transliteration: 'kitāb', english: 'Book' },
    { type: 'Noun', arabic: 'مَسْجِدٌ', transliteration: 'masjid', english: 'Mosque' },
    { type: 'Noun', arabic: 'مُدَرِّسٌ', transliteration: 'mudarris', english: 'Teacher' },
    { type: 'Verb', arabic: 'ذَهَبَ', transliteration: 'dhahaba', english: 'He went' },
    { type: 'Verb', arabic: 'يَأْكُلُ', transliteration: 'ya\'kulu', english: 'He eats' },
    { type: 'Verb', arabic: 'اِقْرَأْ', transliteration: 'iqra\'', english: 'Read!' },
    { type: 'Particle', arabic: 'في', transliteration: 'fī', english: 'In' },
    { type: 'Particle', arabic: 'مِنْ', transliteration: 'min', english: 'From' },
    { type: 'Particle', arabic: 'لَا', transliteration: 'lā', english: 'No / Not' },
    { type: 'Extra', arabic: 'وَ', transliteration: 'wa', english: 'And' }
  ],
  quiz: {
    title: 'Chapter 1: Words (Types of Words in Arabic)',
    questions: [
      {
        difficulty: 'Easy',
        question: 'How many types of words exist in Arabic?',
        options: {
          a: '2',
          b: '3',
          c: '4',
          d: '5'
        },
        correctAnswer: 'b',
        explanation: 'Arabic has exactly three types of words: nouns (الاسم), verbs (الفعل), and particles (الحرف).'
      },
      {
        difficulty: 'Easy',
        question: 'Which of the following is a verb (فعل) in Arabic?',
        options: {
          a: 'بَيْتٌ',
          b: 'يَكْتُبُ',
          c: 'مَدْرَسَةٌ',
          d: 'فِي'
        },
        correctAnswer: 'b',
        explanation: 'يَكْتُبُ (yaktubu) is a verb meaning "he writes". The other options are nouns and particles.'
      },
      {
        difficulty: 'Medium',
        question: 'Which of the following characteristics applies to nouns (اسم)?',
        options: {
          a: 'They indicate actions',
          b: 'They often have tense (past, present, future)',
          c: 'They can have definite (ال) or indefinite (ٌـ) forms',
          d: 'They cannot appear in sentences'
        },
        correctAnswer: 'c',
        explanation: 'Nouns can be made definite with ال or indefinite with tanween (ٌـ). This is a unique characteristic of Arabic nouns.'
      },
      {
        difficulty: 'Medium',
        question: 'Which of these words is a particle (حرف)?',
        options: {
          a: 'يَذْهَبُ',
          b: 'وَ',
          c: 'قَلَمٌ',
          d: 'كِتَابٌ'
        },
        correctAnswer: 'b',
        explanation: 'وَ (wa) is a particle meaning "and". It\'s used to connect words or sentences.'
      },
      {
        difficulty: 'Hard',
        question: 'Which of the following statements is FALSE about Arabic words?',
        options: {
          a: 'Particles (حروف) only make sense when used in a sentence',
          b: 'Verbs (أفعال) do not indicate tense',
          c: 'Nouns (أسماء) can refer to people, places, and things',
          d: 'Every complete Arabic sentence must contain at least one noun or verb'
        },
        correctAnswer: 'b',
        explanation: 'This statement is false because verbs in Arabic always indicate tense (past, present, or imperative).'
      }
    ]
  }
}; 