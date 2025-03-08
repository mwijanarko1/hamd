import { ChapterContent } from '../types';

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

export const chapter5Content: ChapterContent = {
  title: "Adverbs of Time and Place (ظرف الزمان والمكان)",
  introduction: "In Arabic, adverbs of time (ظرف الزمان) and adverbs of place (ظرف المكان) are used to describe when and where an action takes place. These words function as zarf (ظرف), meaning they provide additional information about the verb in a sentence. Adverbs of Time (ظرف الزمان) tell us when something happens, while Adverbs of Place (ظرف المكان) tell us where something happens. Adverbs in Arabic are generally indeclinable (مبني), meaning they do not change according to case endings. However, some adverbs can take case endings when used in specific grammatical contexts.",
  mainCategories: [
    {
      arabic: "ظرف الزمان",
      transliteration: "Ẓarf az-Zamān",
      english: "Adverbs of Time"
    },
    {
      arabic: "ظرف المكان",
      transliteration: "Ẓarf al-Makān",
      english: "Adverbs of Place"
    },
    {
      arabic: "مبني",
      transliteration: "Mabnī",
      english: "Indeclinable"
    }
  ],
  sections: [
    {
      title: "Adverbs of Time (ظرف الزمان) – When?",
      content: "Adverbs of time answer the question متى؟ (When?). They describe the time an action takes place.",
      examples: [
        {
          arabic: "درستُ العربية اليوم",
          transliteration: "darastu al-ʿarabiyyah al-yawm",
          english: "I studied Arabic today"
        },
        {
          arabic: "ذهبتُ إلى المدرسة أمس",
          transliteration: "dhahabtu ilā al-madrasah ams",
          english: "I went to school yesterday"
        },
        {
          arabic: "سأذهب إلى المسجد غدًا",
          transliteration: "sa'adhhabu ilā al-masjid ghadan",
          english: "I will go to the mosque tomorrow"
        },
        {
          arabic: "هو يدرس الآن",
          transliteration: "huwa yadrusu al-ān",
          english: "He is studying now"
        },
        {
          arabic: "صلّيتُ الفجر قبلَ الشروق",
          transliteration: "ṣallaytu al-fajr qabla ash-shurūq",
          english: "I prayed Fajr before sunrise"
        }
      ]
    },
    {
      title: "Adverbs of Place (ظرف المكان) – Where?",
      content: "Adverbs of place answer the question أين؟ (Where?). They describe the location or direction of an action.",
      examples: [
        {
          arabic: "اجلس هنا",
          transliteration: "ijlis hunā",
          english: "Sit here"
        },
        {
          arabic: "المسجد هناك",
          transliteration: "al-masjid hunāk",
          english: "The mosque is there"
        },
        {
          arabic: "الطائرة فوقَ السحاب",
          transliteration: "aṭ-ṭā'irah fawqa as-saḥāb",
          english: "The plane is above the clouds"
        },
        {
          arabic: "الكتاب تحتَ الطاولة",
          transliteration: "al-kitāb taḥta aṭ-ṭāwilah",
          english: "The book is under the table"
        },
        {
          arabic: "السيارة أمامَ المنزل",
          transliteration: "as-sayyārah amāma al-manzil",
          english: "The car is in front of the house"
        }
      ]
    },
    {
      title: "Rules of Adverbs in Arabic",
      content: "Adverbs of time and place usually follow the verb in the sentence. Most adverbs are indeclinable, but some can take case endings.",
      characteristics: [
        {
          name: "Position in Sentence",
          description: "Adverbs usually follow the verb",
          example: "سافرتُ أمس (I traveled yesterday)"
        },
        {
          name: "Case Endings",
          description: "Most adverbs are indeclinable, but some can take case endings",
          example: "جاءَ في وقتٍ مبكرٍ (He came at an early time)"
        },
        {
          name: "Use with Prepositions",
          description: "Some adverbs function as nouns when preceded by a preposition",
          example: "خرجتُ من أمامِ المسجد (I left from in front of the mosque)"
        }
      ],
      examples: [
        {
          arabic: "سافرتُ أمس",
          transliteration: "sāfartu ams",
          english: "I traveled yesterday"
        },
        {
          arabic: "الكتاب على الطاولة",
          transliteration: "al-kitāb ʿalā aṭ-ṭāwilah",
          english: "The book is on the table"
        },
        {
          arabic: "خرجتُ من أمامِ المسجد",
          transliteration: "kharajtu min amāmi al-masjid",
          english: "I left from in front of the mosque"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Time",
      arabic: "اليوم",
      transliteration: "al-yawm",
      english: "today"
    },
    {
      type: "Time",
      arabic: "غدًا",
      transliteration: "ghadan",
      english: "tomorrow"
    },
    {
      type: "Time",
      arabic: "الآن",
      transliteration: "al-ān",
      english: "now"
    },
    {
      type: "Time",
      arabic: "قبلَ",
      transliteration: "qabla",
      english: "before"
    },
    {
      type: "Place",
      arabic: "تحتَ",
      transliteration: "taḥta",
      english: "below"
    },
    {
      type: "Place",
      arabic: "فوقَ",
      transliteration: "fawqa",
      english: "above"
    },
    {
      type: "Place",
      arabic: "أمامَ",
      transliteration: "amāma",
      english: "in front of"
    },
    {
      type: "Place",
      arabic: "بينَ",
      transliteration: "bayna",
      english: "between"
    },
    {
      type: "Place",
      arabic: "قريبٌ من",
      transliteration: "qarībun min",
      english: "near"
    },
    {
      type: "Place",
      arabic: "بعيدٌ عن",
      transliteration: "baʿīdun ʿan",
      english: "far from"
    }
  ],
  quiz: {
    title: "Chapter 5 Quiz: Adverbs of Time and Place (ظرف الزمان والمكان)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which of the following is an adverb of time?",
        options: {
          a: "فوقَ",
          b: "أمس",
          c: "أمامَ",
          d: "بينَ"
        },
        correctAnswer: "b",
        explanation: "أمس (yesterday) is an adverb of time."
      },
      {
        difficulty: "Easy",
        question: "What is the meaning of \"هنا\" in Arabic?",
        options: {
          a: "There",
          b: "Above",
          c: "Here",
          d: "Before"
        },
        correctAnswer: "c",
        explanation: "هنا means \"here\" in Arabic."
      },
      {
        difficulty: "Medium",
        question: "Which sentence correctly uses an adverb of place?",
        options: {
          a: "سأذهب إلى السوقِ اليوم",
          b: "الطعام فوقَ الطاولةِ",
          c: "درستُ العربية غدًا",
          d: "رجع إلى البيت أمس"
        },
        correctAnswer: "b",
        explanation: "الطعام فوقَ الطاولةِ correctly uses فوقَ as an adverb of place."
      },
      {
        difficulty: "Medium",
        question: "Which preposition often comes before adverbs of place?",
        options: {
          a: "مِنْ",
          b: "إِلَى",
          c: "بَيْنَ",
          d: "عَنْ"
        },
        correctAnswer: "a",
        explanation: "مِنْ (from) often comes before adverbs of place."
      },
      {
        difficulty: "Hard",
        question: "Choose the correct sentence using an adverb of time:",
        options: {
          a: "زرت صديقي قبلَ شهرٍ",
          b: "السيارة بينَ الشارع",
          c: "رجع إلى البيت فوقَ المسجد",
          d: "الكتاب قريبٌ عن الطاولة"
        },
        correctAnswer: "a",
        explanation: "زرت صديقي قبلَ شهرٍ correctly uses قبلَ as an adverb of time."
      }
    ]
  }
}; 