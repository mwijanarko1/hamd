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

export const chapter13Content: ChapterContent = {
  title: "Noun of Place and Time (اسم الزمان والمكان – Ism Al-Zaman wal-Makan)",
  introduction: "In Arabic, certain nouns indicate where or when an action takes place. These nouns are called 'Ism Al-Zaman' (اسم الزمان – Noun of Time) and 'Ism Al-Makan' (اسم المكان – Noun of Place). These nouns are derived from verbs and follow specific patterns, similar to how English has words like library (a place for books) or sunrise (the time of the sun rising).",
  mainCategories: [
    {
      arabic: "اسم الزمان",
      transliteration: "Ism Al-Zaman",
      english: "Noun of Time"
    },
    {
      arabic: "اسم المكان",
      transliteration: "Ism Al-Makan",
      english: "Noun of Place"
    }
  ],
  sections: [
    {
      title: "How to Form Ism Al-Zaman and Ism Al-Makan",
      content: "We derive Ism Al-Zaman and Ism Al-Makan from verbs by following specific patterns.",
      characteristics: [
        {
          name: "Pattern for Three-Letter Verbs",
          description: "مَفْعَل (Maf'al) pattern for past tense verbs with three root letters",
          example: "مَوْلِد (Mawlid) – Time of birth, مَسْجِد (Masjid) – Place of prostration"
        },
        {
          name: "Pattern for More Than Three Letters",
          description: "مَفْعِل (Maf'il) or مَفْعَل (Maf'al) pattern for verbs with more than three letters",
          example: "مَدْخَل (Madkhal) – Time of entry, مَسْبَح (Masbah) – Swimming pool"
        }
      ],
      examples: [
        {
          arabic: "ذهبتُ إلى المسجد للصلاة",
          transliteration: "Dhahabtu ila al-masjid liṣ-ṣalāh",
          english: "I went to the mosque to pray"
        },
        {
          arabic: "الجندي في المعسكر",
          transliteration: "Al-jundī fī al-mu'askar",
          english: "The soldier is in the camp"
        },
        {
          arabic: "قرأتُ القرآن في المكتبة",
          transliteration: "Qara'tu al-Qur'an fī al-maktabah",
          english: "I read the Quran in the library"
        }
      ]
    },
    {
      title: "Common Patterns for Ism Al-Zaman and Ism Al-Makan",
      content: "There are two main patterns used to form nouns of time and place.",
      types: [
        {
          name: "Pattern: مَفْعَل (Maf'al)",
          description: "For three-letter verbs where the middle letter has 'a' (فتح)",
          example: "مَجلِس (Majlis) → Place of sitting (Assembly, council)"
        },
        {
          name: "Pattern: مَفْعِل (Maf'il)",
          description: "For three-letter verbs where the middle letter has 'i' or 'u' (كسر أو ضم)",
          example: "مَنزِل (Manzil) → Place of descending (House, residence)"
        }
      ],
      examples: [
        {
          arabic: "نحن في فصل الخريف الآن",
          transliteration: "Naḥnu fī faṣl al-kharīf al-ān",
          english: "We are in the season of autumn now"
        },
        {
          arabic: "أتى الحاجُّ من المشرق",
          transliteration: "Atā al-ḥājju min al-mashriq",
          english: "The pilgrim came from the East"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Noun",
      arabic: "مسجد",
      transliteration: "Masjid",
      english: "Mosque (place of prostration)"
    },
    {
      type: "Noun",
      arabic: "مدرسة",
      transliteration: "Madrasah",
      english: "School (place of learning)"
    },
    {
      type: "Noun",
      arabic: "مكتب",
      transliteration: "Maktab",
      english: "Office (place of writing)"
    },
    {
      type: "Noun",
      arabic: "مغرب",
      transliteration: "Maghrib",
      english: "Sunset (time/place of sunset)"
    },
    {
      type: "Noun",
      arabic: "مشرق",
      transliteration: "Mashriq",
      english: "Sunrise (time/place of sunrise)"
    },
    {
      type: "Noun",
      arabic: "مدخل",
      transliteration: "Madkhal",
      english: "Entrance (place of entering)"
    },
    {
      type: "Noun",
      arabic: "مجلس",
      transliteration: "Majlis",
      english: "Assembly (place of sitting)"
    },
    {
      type: "Noun",
      arabic: "مطبخ",
      transliteration: "Maṭbakh",
      english: "Kitchen (place of cooking)"
    },
    {
      type: "Noun",
      arabic: "مخزن",
      transliteration: "Makhzan",
      english: "Store (place of storage)"
    },
    {
      type: "Noun",
      arabic: "موسم",
      transliteration: "Mawsim",
      english: "Season (time of a recurring event)"
    }
  ],
  quiz: {
    title: "Chapter 13 Quiz: Noun of Time and Place (اسم الزمان والمكان)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which of the following words is a noun of place?",
        options: {
          a: "مطبخ",
          b: "شمس",
          c: "كتاب",
          d: "قلم"
        },
        correctAnswer: "a",
        explanation: "مطبخ (kitchen) is a noun of place, following the pattern مَفْعَل to indicate where cooking takes place."
      },
      {
        difficulty: "Easy",
        question: "Which pattern is commonly used for nouns of time and place?",
        options: {
          a: "فاعل",
          b: "مفعل",
          c: "مفعول",
          d: "فعيل"
        },
        correctAnswer: "b",
        explanation: "The pattern مفعل (Maf'al) is one of the main patterns used to form nouns of time and place in Arabic."
      },
      {
        difficulty: "Medium",
        question: "Choose the correct meaning of مشرق.",
        options: {
          a: "Time of sleeping",
          b: "Time or place of sunrise",
          c: "Place of eating",
          d: "Time of writing"
        },
        correctAnswer: "b",
        explanation: "مشرق (Mashriq) means the time or place of sunrise, and it follows the pattern مَفْعِل."
      },
      {
        difficulty: "Medium",
        question: "Which sentence correctly uses a noun of place?",
        options: {
          a: "جلستُ في المكتبة",
          b: "قرأتُ الكتاب",
          c: "شاهدتُ التلفاز",
          d: "كتبتُ الدرس"
        },
        correctAnswer: "a",
        explanation: "The sentence جلستُ في المكتبة (I sat in the library) correctly uses مكتبة, which is a noun of place."
      },
      {
        difficulty: "Hard",
        question: "Which of the following words can mean both a noun of time and place?",
        options: {
          a: "مغرب",
          b: "سيارة",
          c: "كرسي",
          d: "قلم"
        },
        correctAnswer: "a",
        explanation: "مغرب (Maghrib) can refer to both the time of sunset and the western direction/place."
      }
    ]
  }
}; 