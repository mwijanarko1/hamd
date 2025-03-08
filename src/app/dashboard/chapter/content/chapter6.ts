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

export const chapter6Content: ChapterContent = {
  title: "Demonstrative Pronouns (أسماء الإشارة)",
  introduction: "In Arabic, demonstrative pronouns (أسماء الإشارة) are used to point to specific people, objects, or places. They are equivalent to \"this,\" \"that,\" \"these,\" and \"those\" in English. Demonstrative pronouns indicate whether the noun is near (قريب) or far (بعيد) and whether it is singular (مفرد), dual (مثنى), or plural (جمع).",
  mainCategories: [
    {
      arabic: "إشارة للقريب",
      transliteration: "Ishārah lil-qarīb",
      english: "Demonstratives for Near Objects"
    },
    {
      arabic: "إشارة للبعيد",
      transliteration: "Ishārah lil-baʿīd",
      english: "Demonstratives for Far Objects"
    },
    {
      arabic: "أسماء الإشارة",
      transliteration: "Asmā' al-ishārah",
      english: "Demonstrative Pronouns"
    }
  ],
  sections: [
    {
      title: "1. Demonstrative Pronouns for Near Objects (إشارة للقريب)",
      content: "These pronouns refer to something close to the speaker.",
      characteristics: [
        {
          name: "Masculine Forms",
          description: "Used with masculine nouns",
          example: "هذا (hādhā) - Singular, هذانِ (hadhāni) - Dual, هؤلاء (hā'ulā') - Plural"
        },
        {
          name: "Feminine Forms",
          description: "Used with feminine nouns",
          example: "هذه (hādhihi) - Singular, هاتانِ (hātāni) - Dual, هؤلاء (hā'ulā') - Plural"
        }
      ],
      examples: [
        {
          arabic: "هذا كتابٌ",
          transliteration: "hādhā kitābun",
          english: "This is a book"
        },
        {
          arabic: "هذه مدرسةٌ",
          transliteration: "hādhihi madrasatun",
          english: "This is a school"
        },
        {
          arabic: "هذانِ طالبانِ مجتهدانِ",
          transliteration: "hādhāni ṭālibāni mujtahidāni",
          english: "These two students are hardworking"
        },
        {
          arabic: "هاتانِ طالبتانِ ذكيتانِ",
          transliteration: "hātāni ṭālibatāni dhakiyyatāni",
          english: "These two female students are smart"
        },
        {
          arabic: "هؤلاء رجالٌ شجعانٌ",
          transliteration: "hā'ulā'i rijālun shujʿānun",
          english: "These are brave men"
        }
      ]
    },
    {
      title: "2. Demonstrative Pronouns for Far Objects (إشارة للبعيد)",
      content: "These pronouns refer to something far from the speaker.",
      characteristics: [
        {
          name: "Masculine Forms",
          description: "Used with masculine nouns",
          example: "ذلك (dhālika) - Singular, ذانِكَ (dhānika) - Dual, أولئك (ulā'ika) - Plural"
        },
        {
          name: "Feminine Forms",
          description: "Used with feminine nouns",
          example: "تلك (tilka) - Singular, تانِكَ (tānika) - Dual, أولئك (ulā'ika) - Plural"
        }
      ],
      examples: [
        {
          arabic: "ذلك المسجدُ كبيرٌ",
          transliteration: "dhālika al-masjidu kabīrun",
          english: "That mosque is big"
        },
        {
          arabic: "تلك الطالبةُ ذكيةٌ",
          transliteration: "tilka aṭ-ṭālibatu dhakiyyatun",
          english: "That female student is smart"
        },
        {
          arabic: "ذانِكَ طالبانِ مجتهدانِ",
          transliteration: "dhānika ṭālibāni mujtahidāni",
          english: "Those two students are hardworking"
        },
        {
          arabic: "تانِكَ طالبتانِ ماهرتانِ",
          transliteration: "tānika ṭālibatāni māhiratāni",
          english: "Those two female students are skillful"
        },
        {
          arabic: "أولئك الأولادُ يلعبونَ في الحديقة",
          transliteration: "ulā'ika al-awlādu yalʿabūna fī al-ḥadīqah",
          english: "Those boys are playing in the park"
        }
      ]
    },
    {
      title: "Rules for Using Demonstrative Pronouns",
      content: "Demonstrative pronouns must follow specific rules regarding their position in sentences and agreement with nouns.",
      characteristics: [
        {
          name: "Position in Sentence",
          description: "The demonstrative pronoun comes before the noun in a nominal sentence",
          example: "هذا كتابٌ (This is a book)"
        },
        {
          name: "Gender and Number Agreement",
          description: "Demonstrative pronouns must match the noun in gender and number",
          example: "هذا ولدٌ (This is a boy) - هذه بنتٌ (This is a girl)"
        },
        {
          name: "Grammatical Function",
          description: "Demonstrative pronouns can be used as subjects or adjectives",
          example: "ذلك مسجدٌ (That is a mosque) - هذا البيتُ جميلٌ (This house is beautiful)"
        }
      ],
      examples: [
        {
          arabic: "هذا البيتُ جميلٌ",
          transliteration: "hādhā al-baytu jamīlun",
          english: "This house is beautiful"
        },
        {
          arabic: "تلك سيارةٌ جديدةٌ",
          transliteration: "tilka sayyāratun jadīdatun",
          english: "That is a new car"
        },
        {
          arabic: "هؤلاء معلمونَ",
          transliteration: "hā'ulā'i muʿallimūna",
          english: "These are teachers"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Noun",
      arabic: "كتابٌ",
      transliteration: "kitābun",
      english: "book"
    },
    {
      type: "Noun",
      arabic: "بيتٌ",
      transliteration: "baytun",
      english: "house"
    },
    {
      type: "Noun",
      arabic: "مسجدٌ",
      transliteration: "masjidun",
      english: "mosque"
    },
    {
      type: "Noun",
      arabic: "بنتٌ",
      transliteration: "bintun",
      english: "girl"
    },
    {
      type: "Noun",
      arabic: "سيارةٌ",
      transliteration: "sayyāratun",
      english: "car"
    },
    {
      type: "Noun",
      arabic: "طاولةٌ",
      transliteration: "ṭāwilatun",
      english: "table"
    },
    {
      type: "Noun",
      arabic: "ولدٌ",
      transliteration: "waladun",
      english: "boy"
    },
    {
      type: "Noun",
      arabic: "مدرسةٌ",
      transliteration: "madrasatun",
      english: "school"
    },
    {
      type: "Noun",
      arabic: "قلمٌ",
      transliteration: "qalamun",
      english: "pen"
    },
    {
      type: "Noun",
      arabic: "معلمٌ",
      transliteration: "muʿallimun",
      english: "teacher"
    }
  ],
  quiz: {
    title: "Chapter 6 Quiz: Demonstrative Pronouns (أسماء الإشارة)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which demonstrative pronoun is used for a singular masculine noun that is near?",
        options: {
          a: "هذه",
          b: "هذا",
          c: "هؤلاء",
          d: "تلك"
        },
        correctAnswer: "b",
        explanation: "هذا is used for singular masculine nouns that are near the speaker."
      },
      {
        difficulty: "Easy",
        question: "Choose the correct sentence using a demonstrative pronoun for a far feminine noun.",
        options: {
          a: "هذه سيارةٌ سريعةٌ",
          b: "ذلك سيارةٌ سريعةٌ",
          c: "تلك سيارةٌ سريعةٌ",
          d: "أولئك سيارةٌ سريعةٌ"
        },
        correctAnswer: "c",
        explanation: "تلك is the correct demonstrative pronoun for a singular feminine noun that is far."
      },
      {
        difficulty: "Medium",
        question: "Which demonstrative pronoun is used for a group of people near the speaker?",
        options: {
          a: "هؤلاء",
          b: "أولئك",
          c: "تلك",
          d: "ذلك"
        },
        correctAnswer: "a",
        explanation: "هؤلاء is used for plural nouns (people or things) that are near the speaker."
      },
      {
        difficulty: "Medium",
        question: "Which sentence correctly uses a dual demonstrative pronoun?",
        options: {
          a: "هذا طالبانِ مجتهدانِ",
          b: "هذانِ طالبانِ مجتهدانِ",
          c: "تلك طالبانِ مجتهدانِ",
          d: "أولئك طالبانِ مجتهدانِ"
        },
        correctAnswer: "b",
        explanation: "هذانِ is the correct demonstrative pronoun for dual masculine nouns that are near."
      },
      {
        difficulty: "Hard",
        question: "Which of the following is incorrect?",
        options: {
          a: "هذا الكتابُ جديدٌ",
          b: "هذه الطالبةُ ذكيةٌ",
          c: "هؤلاء الولدُ طويلٌ",
          d: "أولئك الرجالُ أقوياءُ"
        },
        correctAnswer: "c",
        explanation: "هؤلاء الولدُ طويلٌ is incorrect because هؤلاء is used for plural, but الولد is singular."
      }
    ]
  }
}; 