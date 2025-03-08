import { ChapterContent } from '../types';

export const chapter11Content: ChapterContent = {
  title: "Declension of a Noun (الإعراب – Al-I'rāb)",
  introduction: "In Arabic, I'rāb (الإعراب) refers to the grammatical declension of a noun, meaning the changes in the endings of words depending on their role in a sentence. These changes affect nouns (الأسماء), verbs (الأفعال), and adjectives (الصفات) but are most commonly discussed in the context of nouns. Understanding I'rāb is essential because it helps determine the function of words in a sentence, such as whether a noun is the subject, object, or part of a prepositional phrase.",
  mainCategories: [
    {
      arabic: "حالات الإعراب",
      transliteration: "Ḥālāt Al-I'rāb",
      english: "Cases of Declension"
    },
    {
      arabic: "علامات الإعراب",
      transliteration: "ʿAlāmāt Al-I'rāb",
      english: "Signs of Declension"
    },
    {
      arabic: "أنواع الإعراب",
      transliteration: "Anwāʿ Al-I'rāb",
      english: "Types of Declension"
    }
  ],
  sections: [
    {
      title: "The Three Cases in Arabic",
      content: "Arabic nouns can appear in three grammatical cases: nominative, accusative, and genitive. Each case has specific uses and markers.",
      characteristics: [
        {
          name: "Nominative Case (المرفوع)",
          description: "Used for subjects and predicates",
          example: "جاءَ الطالبُ (The student came)"
        },
        {
          name: "Accusative Case (المنصوب)",
          description: "Used for objects and adverbial phrases",
          example: "رأيتُ الطالبَ (I saw the student)"
        },
        {
          name: "Genitive Case (المجرور)",
          description: "Used after prepositions and in possessive constructions",
          example: "ذهبتُ إلى الطالبِ (I went to the student)"
        }
      ],
      examples: [
        {
          arabic: "الطالبُ مجتهدٌ",
          transliteration: "aṭ-ṭālibu mujtahidun",
          english: "The student is hardworking (nominative)"
        },
        {
          arabic: "رأيتُ المعلمينَ",
          transliteration: "ra'aytu al-muʿallimīna",
          english: "I saw the teachers (accusative)"
        },
        {
          arabic: "تحدثتُ مع المعلمينَ",
          transliteration: "taḥaddathtu maʿa al-muʿallimīna",
          english: "I spoke with the teachers (genitive)"
        }
      ]
    },
    {
      title: "Signs of Each Case",
      content: "Each case is marked by specific vowel endings (harakāt) and suffixes that vary based on the type of noun.",
      types: [
        {
          name: "Nominative Signs",
          description: "Dammah (ـُ) for singular, Wāw (ـونَ) for masculine sound plurals, Alif (ـانِ) for dual",
          example: "الطالبُ، المعلمونَ، طالبانِ"
        },
        {
          name: "Accusative Signs",
          description: "Fatḥah (ـَ) for singular, Yā' (ـينَ) for masculine sound plurals, Alif (ـينِ) for dual",
          example: "الطالبَ، المعلمينَ، طالبينِ"
        },
        {
          name: "Genitive Signs",
          description: "Kasrah (ـِ) for singular, Yā' (ـينَ) for masculine sound plurals, Yā' (ـينِ) for dual",
          example: "الطالبِ، المعلمينَ، طالبينِ"
        }
      ],
      examples: [
        {
          arabic: "المعلمونَ مجتهدونَ",
          transliteration: "al-muʿallimūna mujtahidūna",
          english: "The teachers are hardworking"
        },
        {
          arabic: "رأيتُ طالبينِ",
          transliteration: "ra'aytu ṭālibaini",
          english: "I saw two students"
        },
        {
          arabic: "ذهبتُ إلى المدرسةِ",
          transliteration: "dhahabtu ilā al-madrasati",
          english: "I went to the school"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Noun",
      arabic: "طالبٌ",
      transliteration: "ṭālibun",
      english: "student"
    },
    {
      type: "Noun",
      arabic: "كتابٌ",
      transliteration: "kitābun",
      english: "book"
    },
    {
      type: "Noun",
      arabic: "معلمٌ",
      transliteration: "muʿallimun",
      english: "teacher"
    },
    {
      type: "Noun",
      arabic: "مسجدٌ",
      transliteration: "masjidun",
      english: "mosque"
    },
    {
      type: "Noun",
      arabic: "مدرسةٌ",
      transliteration: "madrasatun",
      english: "school"
    },
    {
      type: "Noun",
      arabic: "بيتٌ",
      transliteration: "baytun",
      english: "house"
    },
    {
      type: "Noun",
      arabic: "ولدٌ",
      transliteration: "waladun",
      english: "boy"
    },
    {
      type: "Noun",
      arabic: "بنتٌ",
      transliteration: "bintun",
      english: "girl"
    },
    {
      type: "Noun",
      arabic: "جامعةٌ",
      transliteration: "jāmiʿatun",
      english: "university"
    },
    {
      type: "Noun",
      arabic: "بابٌ",
      transliteration: "bābun",
      english: "door"
    }
  ],
  quiz: {
    title: "Chapter 11 Quiz: Declension of a Noun (الإعراب)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which case is used for the subject of a sentence?",
        options: {
          a: "Accusative (منصوب)",
          b: "Nominative (مرفوع)",
          c: "Genitive (مجرور)",
          d: "None of the above"
        },
        correctAnswer: "b",
        explanation: "The nominative case (مرفوع) is used for subjects of sentences."
      },
      {
        difficulty: "Easy",
        question: "What is the correct genitive form of \"المسجدُ\"?",
        options: {
          a: "المسجدُ",
          b: "المسجدَ",
          c: "المسجدِ",
          d: "المسجدٍ"
        },
        correctAnswer: "c",
        explanation: "The genitive form takes a kasrah (ـِ), making it المسجدِ."
      },
      {
        difficulty: "Medium",
        question: "Which of the following words is partially declined (ممنوع من الصرف)?",
        options: {
          a: "كتاب",
          b: "أحمد",
          c: "طالب",
          d: "مدرسة"
        },
        correctAnswer: "b",
        explanation: "أحمد is partially declined because it's a proper noun that follows a specific pattern."
      },
      {
        difficulty: "Medium",
        question: "Which case do you use after a preposition (حروف الجرّ)?",
        options: {
          a: "Nominative (مرفوع)",
          b: "Accusative (منصوب)",
          c: "Genitive (مجرور)",
          d: "Depends on the preposition"
        },
        correctAnswer: "c",
        explanation: "After prepositions, nouns always take the genitive case (مجرور)."
      },
      {
        difficulty: "Hard",
        question: "Identify the correct sentence with all nouns correctly declined:",
        options: {
          a: "رأيتُ الطالبِ في الجامعةِ",
          b: "رأيتُ الطالبَ في الجامعةِ",
          c: "رأيتُ الطالبُ في الجامعةَ",
          d: "رأيتُ الطالبَ في الجامعةَ"
        },
        correctAnswer: "b",
        explanation: "رأيتُ الطالبَ في الجامعةِ is correct because the object takes accusative case and the noun after the preposition takes genitive case."
      }
    ]
  }
}; 