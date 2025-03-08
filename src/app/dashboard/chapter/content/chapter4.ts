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

export const chapter4Content: ChapterContent = {
  title: "Prepositions (حروف الجر)",
  introduction: "Prepositions (حروف الجر) are essential words in Arabic that link nouns, pronouns, and phrases to other parts of a sentence. They indicate relationships such as direction, location, time, and cause. Prepositions always come before a noun and cause the noun to take the genitive case (مجرور) by adding a kasrah (ِ ) or using a suitable genitive ending.",
  mainCategories: [
    { 
      arabic: "حروف الجر", 
      transliteration: "Ḥurūf al-Jarr", 
      english: "Prepositions" 
    },
    { 
      arabic: "مجرور", 
      transliteration: "Majrūr", 
      english: "Genitive Case" 
    },
    { 
      arabic: "ضمائر متصلة", 
      transliteration: "Ḍamā'ir Muttaṣilah", 
      english: "Attached Pronouns" 
    }
  ],
  sections: [
    {
      title: "Common Arabic Prepositions and Their Meanings",
      content: "There are 17 common prepositions in Arabic, but in this chapter, we will focus on the most frequently used ones.",
      examples: [
        { 
          arabic: "جئتُ من المدرسة", 
          transliteration: "ji'tu min al-madrasah", 
          english: "I came from the school" 
        },
        { 
          arabic: "ذهبَ إلى السوق", 
          transliteration: "dhahaba ilā as-sūq", 
          english: "He went to the market" 
        },
        { 
          arabic: "الكتاب في الحقيبة", 
          transliteration: "al-kitāb fī al-ḥaqībah", 
          english: "The book is in the bag" 
        },
        { 
          arabic: "القلم على الطاولة", 
          transliteration: "al-qalam ʿalā aṭ-ṭāwilah", 
          english: "The pen is on the table" 
        }
      ]
    },
    {
      title: "Effects of Prepositions on Nouns (حروف الجر وأثرها على الأسماء)",
      content: "Whenever a preposition is used in Arabic, the noun that follows it must be in the genitive case (مجرور).",
      characteristics: [
        {
          name: "Singular Nouns",
          description: "If the noun is singular, it usually takes a kasrah (ِ ) at the end.",
          example: "في المدرسةِ (in the school)"
        },
        {
          name: "Dual Nouns",
          description: "If the noun is dual, it takes ين instead of ان.",
          example: "إلى الطالبين (to the two students)"
        },
        {
          name: "Sound Masculine Plural",
          description: "If the noun is sound masculine plural, it takes ين instead of ون.",
          example: "من المسلمين (from the Muslims)"
        }
      ],
      examples: [
        { 
          arabic: "في المدرسةِ", 
          transliteration: "fī al-madrasati", 
          english: "in the school" 
        },
        { 
          arabic: "إلى الطالبين", 
          transliteration: "ilā aṭ-ṭālibayn", 
          english: "to the two students" 
        },
        { 
          arabic: "من المسلمين", 
          transliteration: "min al-muslimīn", 
          english: "from the Muslims" 
        }
      ]
    },
    {
      title: "Using Prepositions with Attached Pronouns",
      content: "Prepositions can also attach to pronouns to indicate relationships.",
      examples: [
        { 
          arabic: "هذا الكتاب لي", 
          transliteration: "hādhā al-kitāb lī", 
          english: "This book is for me" 
        },
        { 
          arabic: "ذهبت إليهِ أمس", 
          transliteration: "dhahabtu ilayhi ams", 
          english: "I went to him yesterday" 
        },
        { 
          arabic: "القلم في يدي", 
          transliteration: "al-qalam fī yadī", 
          english: "The pen is in my hand" 
        }
      ]
    }
  ],
  vocabularyList: [
    { 
      type: "Preposition", 
      arabic: "مِنْ", 
      transliteration: "min", 
      english: "from" 
    },
    { 
      type: "Preposition", 
      arabic: "إِلَى", 
      transliteration: "ilā", 
      english: "to" 
    },
    { 
      type: "Preposition", 
      arabic: "فِي", 
      transliteration: "fī", 
      english: "in" 
    },
    { 
      type: "Preposition", 
      arabic: "عَلَى", 
      transliteration: "ʿalā", 
      english: "on" 
    },
    { 
      type: "Preposition", 
      arabic: "بِـ", 
      transliteration: "bi", 
      english: "with" 
    },
    { 
      type: "Preposition", 
      arabic: "عَنْ", 
      transliteration: "ʿan", 
      english: "about" 
    },
    { 
      type: "Preposition", 
      arabic: "لِـ", 
      transliteration: "li", 
      english: "for" 
    },
    { 
      type: "Preposition", 
      arabic: "بَيْنَ", 
      transliteration: "bayna", 
      english: "between" 
    },
    { 
      type: "Preposition", 
      arabic: "بَعْدَ", 
      transliteration: "baʿda", 
      english: "after" 
    },
    { 
      type: "Preposition", 
      arabic: "قَبْلَ", 
      transliteration: "qabla", 
      english: "before" 
    }
  ],
  quiz: {
    title: "Chapter 4 Quiz: Prepositions (حروف الجر)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which preposition means \"in\" in Arabic?",
        options: {
          a: "مِنْ",
          b: "فِي",
          c: "عَلَى",
          d: "لِـ"
        },
        correctAnswer: "b",
        explanation: "فِي (fī) means \"in\" in Arabic."
      },
      {
        difficulty: "Easy",
        question: "How does the noun change after a preposition?",
        options: {
          a: "It stays the same",
          b: "It becomes nominative (مرفوع)",
          c: "It takes the genitive case (مجرور)",
          d: "It becomes accusative (منصوب)"
        },
        correctAnswer: "c",
        explanation: "After a preposition, the noun takes the genitive case (مجرور)."
      },
      {
        difficulty: "Medium",
        question: "Which of the following sentences correctly uses a preposition?",
        options: {
          a: "الكتابَ على الطاولةِ",
          b: "القلمُ في الحقيبةِ",
          c: "البيتُ إلى المسجدِ",
          d: "أنا مِنْ المدرسةُ"
        },
        correctAnswer: "b",
        explanation: "القلمُ في الحقيبةِ is correct because the noun after the preposition في is in the genitive case."
      },
      {
        difficulty: "Medium",
        question: "Which preposition is used to express \"towards\" in Arabic?",
        options: {
          a: "مِنْ",
          b: "إِلَى",
          c: "عَنْ",
          d: "بَيْنَ"
        },
        correctAnswer: "b",
        explanation: "إِلَى (ilā) means \"to\" or \"towards\" in Arabic."
      },
      {
        difficulty: "Hard",
        question: "Choose the correct sentence using a preposition with an attached pronoun:",
        options: {
          a: "ذهب إلىكَ السوق",
          b: "جلستُ بينَهُ و بينَها",
          c: "أنا مِنْ هو",
          d: "سافرتَ إليهَ"
        },
        correctAnswer: "b",
        explanation: "جلستُ بينَهُ و بينَها correctly uses the preposition with attached pronouns."
      }
    ]
  }
}; 