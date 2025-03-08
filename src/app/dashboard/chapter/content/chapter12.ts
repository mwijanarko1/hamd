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

export const chapter12Content: ChapterContent = {
  title: "Feminine Gender (أقسام المؤنث – Aqsaam Al-Mu'annath)",
  introduction: "In Arabic, nouns, pronouns, and adjectives can be masculine (مذكر) or feminine (مؤنث). Unlike English, where gender applies only to living beings, Arabic assigns gender to all nouns, including inanimate objects. Understanding the rules of feminine nouns is essential for forming correct adjectives, verbs, and pronouns when speaking or writing in Arabic.",
  mainCategories: [
    {
      arabic: "المؤنث الحقيقي",
      transliteration: "Al-Mu'annath Al-Ḥaqīqī",
      english: "Real Feminine"
    },
    {
      arabic: "المؤنث المجازي",
      transliteration: "Al-Mu'annath Al-Majāzī",
      english: "Metaphorical Feminine"
    },
    {
      arabic: "المؤنث اللفظي",
      transliteration: "Al-Mu'annath Al-Lafẓī",
      english: "Linguistic Feminine"
    }
  ],
  sections: [
    {
      title: "How to Identify Feminine Nouns",
      content: "Most feminine nouns in Arabic have clear indicators that show they are feminine.",
      characteristics: [
        {
          name: "The Tied Taa' (التاء المربوطة)",
          description: "The most common sign of a feminine noun, ending in ـة",
          example: "مدرسة (school), سيارة (car)"
        },
        {
          name: "Naturally Feminine Words",
          description: "Words referring to female people and animals, even without ـة",
          example: "أم (mother), بنت (girl)"
        },
        {
          name: "Dual Body Parts",
          description: "Some body parts that come in pairs are treated as feminine",
          example: "يد (hand), عين (eye)"
        },
        {
          name: "Places and Natural Phenomena",
          description: "Names of cities, countries, and some natural objects",
          example: "مصر (Egypt), الشمس (the sun)"
        }
      ],
      examples: [
        {
          arabic: "مدرسة كبيرة",
          transliteration: "madrasatun kabīratun",
          english: "a big school"
        },
        {
          arabic: "أم حنون",
          transliteration: "ummun ḥanūnun",
          english: "a caring mother"
        },
        {
          arabic: "شمس مشرقة",
          transliteration: "shamsun mushriqatun",
          english: "a shining sun"
        }
      ]
    },
    {
      title: "Types of Feminine Nouns",
      content: "There are three types of feminine nouns in Arabic, each with its own characteristics.",
      types: [
        {
          name: "Real Feminine (المؤنث الحقيقي)",
          description: "Refers to actual female beings",
          example: "أم، بنت، امرأة (mother, girl, woman)"
        },
        {
          name: "Metaphorical Feminine (المؤنث المجازي)",
          description: "Objects that are feminine by convention",
          example: "شمس، ريح، نار (sun, wind, fire)"
        },
        {
          name: "Linguistic Feminine (المؤنث اللفظي)",
          description: "Words that look feminine but refer to masculine things",
          example: "حمزة، طلحة (names of men)"
        }
      ],
      examples: [
        {
          arabic: "الطالبةُ مجتهدةٌ",
          transliteration: "aṭ-ṭālibatu mujtahidatun",
          english: "The female student is hardworking"
        },
        {
          arabic: "السيارةُ سريعةٌ",
          transliteration: "as-sayyāratu sarīʿatun",
          english: "The car is fast"
        },
        {
          arabic: "الشمسُ مشرقةٌ",
          transliteration: "ash-shamsu mushriqatun",
          english: "The sun is shining"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Noun",
      arabic: "مدرسة",
      transliteration: "madrasah",
      english: "school"
    },
    {
      type: "Noun",
      arabic: "سيارة",
      transliteration: "sayyārah",
      english: "car"
    },
    {
      type: "Noun",
      arabic: "بنت",
      transliteration: "bint",
      english: "girl"
    },
    {
      type: "Noun",
      arabic: "أم",
      transliteration: "umm",
      english: "mother"
    },
    {
      type: "Noun",
      arabic: "شمس",
      transliteration: "shams",
      english: "sun"
    },
    {
      type: "Noun",
      arabic: "نار",
      transliteration: "nār",
      english: "fire"
    },
    {
      type: "Noun",
      arabic: "ريح",
      transliteration: "rīḥ",
      english: "wind"
    },
    {
      type: "Noun",
      arabic: "يد",
      transliteration: "yad",
      english: "hand"
    },
    {
      type: "Noun",
      arabic: "عين",
      transliteration: "ʿayn",
      english: "eye"
    },
    {
      type: "Noun",
      arabic: "سماء",
      transliteration: "samā'",
      english: "sky"
    }
  ],
  quiz: {
    title: "Chapter 12 Quiz: Feminine Gender (أقسام المؤنث)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which of the following is a clear sign of a feminine noun in Arabic?",
        options: {
          a: "Alif (ا)",
          b: "Tā' Marbūṭah (ة)",
          c: "Wāw (و)",
          d: "Yā' (ي)"
        },
        correctAnswer: "b",
        explanation: "The Tā' Marbūṭah (ة) is the most common sign of a feminine noun in Arabic."
      },
      {
        difficulty: "Easy",
        question: "Which of these words is NOT feminine?",
        options: {
          a: "مدرسة",
          b: "قلم",
          c: "سيارة",
          d: "بنت"
        },
        correctAnswer: "b",
        explanation: "قلم (pen) is a masculine noun, while all other options are feminine nouns."
      },
      {
        difficulty: "Medium",
        question: "Which type of feminine noun does \"شمس\" belong to?",
        options: {
          a: "Real Feminine (المؤنث الحقيقي)",
          b: "Metaphorical Feminine (المؤنث المجازي)",
          c: "Linguistic Feminine (المؤنث اللفظي)",
          d: "None of the above"
        },
        correctAnswer: "b",
        explanation: "شمس (sun) is a metaphorical feminine noun because it's an object that is feminine by convention."
      },
      {
        difficulty: "Medium",
        question: "Choose the correct feminine form of the adjective in: الطالبةُ _____",
        options: {
          a: "مجتهدٌ",
          b: "مجتهدةٌ",
          c: "مجتهدونَ",
          d: "مجتهداتٌ"
        },
        correctAnswer: "b",
        explanation: "مجتهدةٌ is correct because adjectives must match the noun in gender, and الطالبة is feminine singular."
      },
      {
        difficulty: "Hard",
        question: "Which of the following sentences is correct?",
        options: {
          a: "الشمسُ مشرقٌ",
          b: "السماءُ واسعٌ",
          c: "المدرسةُ كبيرةٌ",
          d: "البنتُ مجتهدٌ"
        },
        correctAnswer: "c",
        explanation: "المدرسةُ كبيرةٌ is correct because both the noun and adjective are in their feminine forms."
      }
    ]
  }
}; 