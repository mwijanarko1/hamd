import { ChapterContent } from '../types';

export const chapter10Content: ChapterContent = {
  title: "Descriptive Phrase (المركب التوصيفي – Al-Murakkab At-Tawṣīfī)",
  introduction: "A descriptive phrase (المركب التوصيفي – Al-Murakkab At-Tawṣīfī) in Arabic is a phrase where a noun is described by an adjective. In English, we say \"a big house\" or \"a smart student.\" In Arabic, adjectives follow the noun they describe, unlike in English, where adjectives come before the noun. The noun being described is called الموصوف (Al-Mawṣūf), meaning \"the described\", and the adjective is called الصِّفة (Aṣ-Ṣifah), meaning \"the description\".",
  mainCategories: [
    {
      arabic: "الموصوف",
      transliteration: "Al-Mawṣūf",
      english: "The Described Noun"
    },
    {
      arabic: "الصِّفة",
      transliteration: "Aṣ-Ṣifah",
      english: "The Description (Adjective)"
    },
    {
      arabic: "المركب التوصيفي",
      transliteration: "Al-Murakkab At-Tawṣīfī",
      english: "Descriptive Phrase"
    }
  ],
  sections: [
    {
      title: "Structure of the Descriptive Phrase",
      content: "In Arabic, the adjective must match the noun in four aspects: gender, number, definiteness, and case ending.",
      characteristics: [
        {
          name: "Gender Agreement",
          description: "Adjective must match noun's gender (masculine or feminine)",
          example: "رجلٌ طويلٌ (tall man) → امرأةٌ طويلةٌ (tall woman)"
        },
        {
          name: "Number Agreement",
          description: "Adjective must match noun's number (singular, dual, or plural)",
          example: "طالبٌ مجتهدٌ (hardworking student) → طالبانِ مجتهدانِ (two hardworking students)"
        },
        {
          name: "Definiteness Agreement",
          description: "Adjective must match noun's definiteness (with or without ال)",
          example: "البيتُ الكبيرُ (the big house) vs. بيتٌ كبيرٌ (a big house)"
        }
      ],
      examples: [
        {
          arabic: "رجلٌ طويلٌ",
          transliteration: "rajulun ṭawīlun",
          english: "a tall man"
        },
        {
          arabic: "البيتُ الكبيرُ",
          transliteration: "al-baytu al-kabīru",
          english: "the big house"
        },
        {
          arabic: "سيارةٌ جديدةٌ",
          transliteration: "sayyāratun jadīdatun",
          english: "a new car"
        }
      ]
    },
    {
      title: "Types of Descriptive Phrases",
      content: "Descriptive phrases can be categorized based on the definiteness of the noun and its number.",
      types: [
        {
          name: "Indefinite Descriptive Phrases",
          description: "When the noun has no definite article (ال), the adjective must also be indefinite",
          example: "رجلٌ طويلٌ (a tall man)"
        },
        {
          name: "Definite Descriptive Phrases",
          description: "When the noun has ال, the adjective must also have ال",
          example: "الرجلُ الطويلُ (the tall man)"
        },
        {
          name: "Plural Descriptive Phrases",
          description: "Human plurals use matching plural forms, non-human plurals take singular feminine adjectives",
          example: "معلمونَ مجتهدونَ (hardworking teachers) vs. كتبٌ مفيدةٌ (useful books)"
        }
      ],
      examples: [
        {
          arabic: "معلمونَ مجتهدونَ",
          transliteration: "muʿallimūna mujtahidūna",
          english: "hardworking teachers"
        },
        {
          arabic: "طالباتٌ ذكياتٌ",
          transliteration: "ṭālibātun dhakiyyātun",
          english: "smart female students"
        },
        {
          arabic: "كتبٌ مفيدةٌ",
          transliteration: "kutubun mufīdatun",
          english: "useful books"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Noun",
      arabic: "بيتٌ",
      transliteration: "baytun",
      english: "house"
    },
    {
      type: "Adjective",
      arabic: "كبيرٌ",
      transliteration: "kabīrun",
      english: "big"
    },
    {
      type: "Noun",
      arabic: "كتابٌ",
      transliteration: "kitābun",
      english: "book"
    },
    {
      type: "Adjective",
      arabic: "مفيدٌ",
      transliteration: "mufīdun",
      english: "useful"
    },
    {
      type: "Noun",
      arabic: "طالبٌ",
      transliteration: "ṭālibun",
      english: "student"
    },
    {
      type: "Adjective",
      arabic: "مجتهدٌ",
      transliteration: "mujtahidun",
      english: "hardworking"
    },
    {
      type: "Noun",
      arabic: "سيارةٌ",
      transliteration: "sayyāratun",
      english: "car"
    },
    {
      type: "Adjective",
      arabic: "سريعةٌ",
      transliteration: "sarīʿatun",
      english: "fast"
    },
    {
      type: "Noun",
      arabic: "رجلٌ",
      transliteration: "rajulun",
      english: "man"
    },
    {
      type: "Adjective",
      arabic: "طويلٌ",
      transliteration: "ṭawīlun",
      english: "tall"
    }
  ],
  quiz: {
    title: "Chapter 10 Quiz: Descriptive Phrases (المركب التوصيفي)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which of the following is the correct descriptive phrase for \"a new book\"?",
        options: {
          a: "كتابٌ الجديدُ",
          b: "الكتابُ جديدٌ",
          c: "كتابٌ جديدٌ",
          d: "جديدةٌ كتابٌ"
        },
        correctAnswer: "c",
        explanation: "كتابٌ جديدٌ is correct because both the noun and adjective are indefinite and match in gender and case."
      },
      {
        difficulty: "Easy",
        question: "How do you say \"the tall man\" in Arabic?",
        options: {
          a: "الرجلُ الطويلُ",
          b: "الرجلُ الطويلَ",
          c: "الرجلِ الطويلِ",
          d: "الرجلُ طويلةٌ"
        },
        correctAnswer: "a",
        explanation: "الرجلُ الطويلُ is correct because both words are definite and match in gender, number, and case."
      },
      {
        difficulty: "Medium",
        question: "What happens to the adjective if the noun is in the accusative case?",
        options: {
          a: "It remains nominative (مرفوع)",
          b: "It also takes the accusative case ending",
          c: "It takes the genitive case ending",
          d: "It becomes definite"
        },
        correctAnswer: "b",
        explanation: "The adjective must match the noun in case, so it also takes the accusative case ending."
      },
      {
        difficulty: "Medium",
        question: "Which of the following is incorrect?",
        options: {
          a: "بيتٌ صغيرٌ",
          b: "السيارةُ سريعةٌ",
          c: "رجلٌ طويلةٌ",
          d: "كتابٌ مفيدٌ"
        },
        correctAnswer: "c",
        explanation: "رجلٌ طويلةٌ is incorrect because there is no gender agreement - the noun is masculine but the adjective is feminine."
      },
      {
        difficulty: "Hard",
        question: "Translate the sentence: \"I saw a beautiful girl and a smart boy.\"",
        options: {
          a: "رأيتُ بنتًا جميلةً وولدًا ذكيًا",
          b: "رأيتُ بنتٌ جميلةٌ وولدٌ ذكيٌ",
          c: "رأيتُ البنتَ الجميلةَ والولدَ الذكيَ",
          d: "رأيتُ بنتًا جميلًا وولدًا ذكيًا"
        },
        correctAnswer: "a",
        explanation: "رأيتُ بنتًا جميلةً وولدًا ذكيًا is correct because all words are in the accusative case and match in gender and definiteness."
      }
    ]
  }
}; 