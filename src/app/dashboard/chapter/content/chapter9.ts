import { ChapterContent } from '../types';

export const chapter9Content: ChapterContent = {
  title: "Possessive Phrase (الإضافة – Al-Idāfa)",
  introduction: "In Arabic, a possessive phrase (الإضافة – Al-Idāfa) is a grammatical structure used to show possession or ownership. Unlike English, where we use \"'s\" (e.g., Ali's book) or \"of\" (e.g., the book of Ali), Arabic expresses possession by placing two nouns together in a specific order.",
  mainCategories: [
    {
      arabic: "الإضافة",
      transliteration: "Al-Iḍāfah",
      english: "Possessive Phrase"
    },
    {
      arabic: "المضاف",
      transliteration: "Al-Muḍāf",
      english: "Possessed Item"
    },
    {
      arabic: "المضاف إليه",
      transliteration: "Al-Muḍāf Ilayhi",
      english: "Owner/Possessor"
    }
  ],
  sections: [
    {
      title: "Structure of the Possessive Phrase (الإضافة)",
      content: "A possessive phrase in Arabic consists of two nouns placed next to each other. The first noun (المُضاف) is the possessed item, and the second noun (المُضاف إليه) is the owner.",
      characteristics: [
        {
          name: "First Noun Rule",
          description: "The first noun (المُضاف) never takes ال (Alif-Lam, 'the')",
          example: "كتابُ الطالبِ (correct) vs. الكتابُ الطالبِ (incorrect)"
        },
        {
          name: "Second Noun Rule",
          description: "The second noun (المُضاف إليه) always takes the genitive case (مجرور)",
          example: "If definite: ends in kasrah (ـِ), if indefinite: takes tanween kasr (ـٍ)"
        }
      ],
      examples: [
        {
          arabic: "كتابُ الطالبِ",
          transliteration: "kitābu aṭ-ṭālibi",
          english: "the student's book"
        },
        {
          arabic: "قلمُ المعلمِ",
          transliteration: "qalamu al-muʿallimi",
          english: "the teacher's pen"
        },
        {
          arabic: "سيارةُ الرجلِ",
          transliteration: "sayyāratu ar-rajuli",
          english: "the car of the man"
        }
      ]
    },
    {
      title: "Types of Possessive Phrases",
      content: "Possessive phrases can be either definite or indefinite, depending on the second noun.",
      examples: [
        {
          arabic: "بابُ المسجدِ",
          transliteration: "bābu al-masjidi",
          english: "the door of the mosque (definite)"
        },
        {
          arabic: "قلمُ عليٍّ",
          transliteration: "qalamu ʿaliyyin",
          english: "Ali's pen (definite with proper noun)"
        },
        {
          arabic: "بابُ مسجدٍ",
          transliteration: "bābu masjidin",
          english: "a door of a mosque (indefinite)"
        }
      ]
    },
    {
      title: "Possessive Phrases with Pronouns",
      content: "To express possession with pronouns, Arabic uses attached pronouns (الضمائر المتصلة) instead of using a second noun.",
      examples: [
        {
          arabic: "كتابي",
          transliteration: "kitābī",
          english: "my book"
        },
        {
          arabic: "كتابُكَ",
          transliteration: "kitābuka",
          english: "your (m) book"
        },
        {
          arabic: "كتابُها",
          transliteration: "kitābuhā",
          english: "her book"
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
      arabic: "قلمٌ",
      transliteration: "qalamun",
      english: "pen"
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
      arabic: "سيارةٌ",
      transliteration: "sayyāratun",
      english: "car"
    },
    {
      type: "Noun",
      arabic: "مدرسةٌ",
      transliteration: "madrasatun",
      english: "school"
    },
    {
      type: "Noun",
      arabic: "حقيبةٌ",
      transliteration: "ḥaqībatun",
      english: "bag"
    },
    {
      type: "Noun",
      arabic: "طعامٌ",
      transliteration: "ṭaʿāmun",
      english: "food"
    },
    {
      type: "Noun",
      arabic: "هاتفٌ",
      transliteration: "hātifun",
      english: "phone"
    },
    {
      type: "Noun",
      arabic: "مكتبٌ",
      transliteration: "maktabun",
      english: "office/desk"
    }
  ],
  quiz: {
    title: "Chapter 9 Quiz: Possessive Phrases (الإضافة)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which of the following is a correct possessive phrase?",
        options: {
          a: "المسجدُ بابِ",
          b: "بابُ المسجدِ",
          c: "المسجدُ البابِ",
          d: "بابٌ المسجدِ"
        },
        correctAnswer: "b",
        explanation: "بابُ المسجدِ is correct because it follows the proper structure: first noun without ال + second noun in genitive case."
      },
      {
        difficulty: "Easy",
        question: "How do you say \"Ali's pen\" in Arabic?",
        options: {
          a: "قلمُ عليٍّ",
          b: "قلمُ المعلمِ",
          c: "كتابُ عليٍّ",
          d: "بابُ المسجدِ"
        },
        correctAnswer: "a",
        explanation: "قلمُ عليٍّ is correct, where قلمُ is the possessed item and عليٍّ is the owner in genitive case."
      },
      {
        difficulty: "Medium",
        question: "What happens to the second noun in a possessive phrase?",
        options: {
          a: "It takes \"ال\" and remains nominative (مرفوع)",
          b: "It stays in the nominative (مرفوع) case",
          c: "It takes the genitive (مجرور) case",
          d: "It takes tanween damm (ـٌ)"
        },
        correctAnswer: "c",
        explanation: "The second noun (المضاف إليه) must always be in the genitive case (مجرور)."
      },
      {
        difficulty: "Medium",
        question: "Which of the following is incorrect?",
        options: {
          a: "كتابُ الطالبِ",
          b: "سيارةُ المديرِ",
          c: "المسجدُ بابِ",
          d: "هاتفُ أبي"
        },
        correctAnswer: "c",
        explanation: "المسجدُ بابِ is incorrect because it reverses the proper order of the possessive phrase."
      },
      {
        difficulty: "Hard",
        question: "Translate the sentence: \"This is my book and that is the teacher's book.\"",
        options: {
          a: "هذا كتابُكَ وذاك كتابُ المعلمِ",
          b: "هذا كتابي وذلك كتابُ المعلمِ",
          c: "هذه كتبِي وتلك كتابُ المعلمِ",
          d: "هذا كتابٌ وذلك معلمُ الكتابِ"
        },
        correctAnswer: "b",
        explanation: "هذا كتابي وذلك كتابُ المعلمِ is correct, using both a possessive pronoun (ي) and a possessive phrase (كتابُ المعلمِ)."
      }
    ]
  }
}; 