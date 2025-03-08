import { ChapterContent } from '../types';

export const chapter7Content: ChapterContent = {
  title: "Relative Pronouns (الأسماء الموصولة)",
  introduction: "Relative pronouns in Arabic (الأسماء الموصولة) are used to connect two parts of a sentence by referring to a noun that has already been mentioned. They function like the English words \"who,\" \"whom,\" \"that,\" and \"which.\" Unlike English, relative pronouns in Arabic change based on gender and number.",
  mainCategories: [
    {
      arabic: "الأسماء الموصولة",
      transliteration: "Al-Asmā' Al-Mawṣūlah",
      english: "Relative Pronouns"
    },
    {
      arabic: "صلة الموصول",
      transliteration: "Ṣilat Al-Mawṣūl",
      english: "Relative Clause"
    },
    {
      arabic: "المطابقة",
      transliteration: "Al-Muṭābaqah",
      english: "Agreement in Gender and Number"
    }
  ],
  sections: [
    {
      title: "List of Relative Pronouns in Arabic",
      content: "Relative pronouns in Arabic change based on gender and number. Here are the different forms:",
      characteristics: [
        {
          name: "Singular Forms",
          description: "Used for single nouns",
          example: "الذي (alladhī) - masculine, التي (allatī) - feminine"
        },
        {
          name: "Dual Forms",
          description: "Used for pairs of nouns",
          example: "اللذانِ (alladhāni) - masculine, اللتانِ (allatāni) - feminine"
        },
        {
          name: "Plural Forms",
          description: "Used for three or more",
          example: "الذينَ (alladhīna) - masculine, اللائي/اللاتي (allā'ī/allatī) - feminine"
        }
      ],
      examples: [
        {
          arabic: "الرجلُ الذي يعملُ هنا معلمٌ",
          transliteration: "ar-rajulu alladhī yaʿmalu hunā muʿallimun",
          english: "The man who works here is a teacher"
        },
        {
          arabic: "الفتاةُ التي تجلسُ هناك مجتهدةٌ",
          transliteration: "al-fatātu allatī tajlisu hunāka mujtahidatun",
          english: "The girl who sits there is hardworking"
        },
        {
          arabic: "الطالبانِ اللذانِ فازا في المسابقةِ ماهرانِ",
          transliteration: "aṭ-ṭālibāni alladhāni fāzā fī al-musābaqati māhirāni",
          english: "The two students who won the competition are skilled"
        }
      ]
    },
    {
      title: "How Relative Pronouns Work in a Sentence",
      content: "In Arabic, a relative pronoun must be followed by a complete sentence (صلة الموصول) that describes the noun. This sentence provides more information about the noun.",
      examples: [
        {
          arabic: "الكتابُ الذي اشتريتُه مفيدٌ",
          transliteration: "al-kitābu alladhī ishtaraytuhu mufīdun",
          english: "The book that I bought is useful"
        },
        {
          arabic: "المعلمونَ الذينَ يدرسونَ في هذهِ المدرسةِ محترفونَ",
          transliteration: "al-muʿallimūna alladhīna yudarrisūna fī hādhihi al-madrasati muḥtarifūna",
          english: "The teachers who teach at this school are professionals"
        },
        {
          arabic: "الطالبتانِ اللتانِ فازتا في المسابقةِ مشهورتانِ",
          transliteration: "aṭ-ṭālibatāni allatāni fāzatā fī al-musābaqati mashhūratāni",
          english: "The two female students who won the competition are famous"
        }
      ]
    },
    {
      title: "Omission of the Relative Pronoun",
      content: "In Arabic, the relative pronoun is sometimes omitted when the noun is indefinite (not specific). This happens especially in short phrases. However, when the noun is definite (specific), the relative pronoun must be included.",
      examples: [
        {
          arabic: "أحبُ كتابًا قرأتُه أمس",
          transliteration: "uḥibbu kitāban qara'tuhu ams",
          english: "I love a book that I read yesterday"
        },
        {
          arabic: "أحبُ الكتابَ الذي قرأتُه أمس",
          transliteration: "uḥibbu al-kitāba alladhī qara'tuhu ams",
          english: "I love the book that I read yesterday"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Noun",
      arabic: "معلمٌ",
      transliteration: "muʿallimun",
      english: "teacher"
    },
    {
      type: "Noun",
      arabic: "طالبٌ",
      transliteration: "ṭālibun",
      english: "student"
    },
    {
      type: "Noun",
      arabic: "فتاةٌ",
      transliteration: "fatātun",
      english: "girl"
    },
    {
      type: "Noun",
      arabic: "رجلٌ",
      transliteration: "rajulun",
      english: "man"
    },
    {
      type: "Noun",
      arabic: "منزلٌ",
      transliteration: "manzilun",
      english: "house"
    },
    {
      type: "Noun",
      arabic: "سيارةٌ",
      transliteration: "sayyāratun",
      english: "car"
    },
    {
      type: "Noun",
      arabic: "طالبانِ",
      transliteration: "ṭālibāni",
      english: "two students"
    },
    {
      type: "Noun",
      arabic: "نساءٌ",
      transliteration: "nisā'un",
      english: "women"
    },
    {
      type: "Noun",
      arabic: "كتابٌ",
      transliteration: "kitābun",
      english: "book"
    },
    {
      type: "Noun",
      arabic: "مسجدٌ",
      transliteration: "masjidun",
      english: "mosque"
    }
  ],
  quiz: {
    title: "Chapter 7 Quiz: Relative Pronouns (الأسماء الموصولة)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which relative pronoun is used for singular masculine nouns?",
        options: {
          a: "التي",
          b: "الذي",
          c: "اللذانِ",
          d: "اللائي"
        },
        correctAnswer: "b",
        explanation: "الذي is used for singular masculine nouns."
      },
      {
        difficulty: "Easy",
        question: "Choose the correct sentence using a relative pronoun for a singular feminine noun.",
        options: {
          a: "الفتاةُ الذي تجلسُ هناك مجتهدةٌ",
          b: "الفتاةُ اللتانِ تجلسُ هناك مجتهدةٌ",
          c: "الفتاةُ التي تجلسُ هناك مجتهدةٌ",
          d: "الفتاةُ الذينَ تجلسُ هناك مجتهدةٌ"
        },
        correctAnswer: "c",
        explanation: "التي is the correct relative pronoun for singular feminine nouns."
      },
      {
        difficulty: "Medium",
        question: "Which relative pronoun is used for plural masculine nouns?",
        options: {
          a: "الذي",
          b: "الذينَ",
          c: "التي",
          d: "اللائي"
        },
        correctAnswer: "b",
        explanation: "الذينَ is used for plural masculine nouns."
      },
      {
        difficulty: "Medium",
        question: "Which sentence correctly uses a dual relative pronoun?",
        options: {
          a: "الطالبانِ اللذانِ يدرسانِ ذكيانِ",
          b: "الطالبانِ الذي يدرسانِ ذكيانِ",
          c: "الطالبانِ اللاتي يدرسانِ ذكيانِ",
          d: "الطالبانِ التي يدرسانِ ذكيانِ"
        },
        correctAnswer: "a",
        explanation: "اللذانِ is the correct relative pronoun for dual masculine nouns."
      },
      {
        difficulty: "Hard",
        question: "Which of the following is incorrect?",
        options: {
          a: "المعلمُ الذي يدرسُ هنا محترفٌ",
          b: "السيارةُ التي اشتريتها غاليةٌ",
          c: "الطالبتانِ اللذانِ فازتا في المسابقةِ ذكيتانِ",
          d: "النساءُ اللاتي يقرأنَ كثيرًا مثقفاتٌ"
        },
        correctAnswer: "c",
        explanation: "الطالبتانِ اللذانِ فازتا في المسابقةِ ذكيتانِ is incorrect because اللذانِ is used for masculine, but الطالبتانِ is feminine."
      }
    ]
  }
}; 