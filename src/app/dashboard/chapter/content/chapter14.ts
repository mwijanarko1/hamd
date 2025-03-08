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

export const chapter14Content: ChapterContent = {
  title: "Noun of Instrument (اسم الآلة – Ism Al-Ālah)",
  introduction: "In Arabic, a Noun of Instrument (اسم الآلة – Ism Al-Ālah) refers to a tool or device used to perform an action. These nouns are derived from verbs and follow specific patterns, just like how English has words like 'scissors' (for cutting) or 'hammer' (for hammering). By learning Ism Al-Ālah, you will be able to recognize words that describe tools, devices, and objects used for specific actions.",
  mainCategories: [
    {
      arabic: "مِفْعَل",
      transliteration: "Mif'al",
      english: "Pattern for many tools and devices"
    },
    {
      arabic: "مِفعَلة",
      transliteration: "Mif'alah",
      english: "Pattern for larger tools or appliances"
    },
    {
      arabic: "مِفعَال",
      transliteration: "Mif'āl",
      english: "Pattern for intensive tools or devices"
    }
  ],
  sections: [
    {
      title: "How to Form Ism Al-Ālah",
      content: "The Noun of Instrument is usually derived from three-letter root verbs (الفعل الثلاثي) and follows specific patterns.",
      characteristics: [
        {
          name: "Pattern: مِفْعَل (Mif'al)",
          description: "Used for many common tools and devices",
          example: "مِفتاح (Miftāḥ) – Key (tool for opening), from فتح (Fataḥa) – to open"
        },
        {
          name: "Pattern: مِفعَلة (Mif'alah)",
          description: "Often used for larger tools or appliances",
          example: "مِكنسة (Miknasah) – Broom (tool for sweeping), from كنس (Kanas) – to sweep"
        },
        {
          name: "Pattern: مِفعَال (Mif'āl)",
          description: "Used for intensive tools or devices",
          example: "مِقدَام (Miqdām) – Sharp knife (tool for cutting), from قدم (Qadama) – to advance"
        }
      ],
      examples: [
        {
          arabic: "استخدمتُ المِفتاح لفتح الباب",
          transliteration: "Istakhdamtu al-miftāḥ lifatḥ al-bāb",
          english: "I used the key to open the door"
        },
        {
          arabic: "أمسكتُ بالمِقصّ وقصصت الورقة",
          transliteration: "Amsaktu bi-al-miqaṣṣ wa qaṣaṣtu al-waraqah",
          english: "I held the scissors and cut the paper"
        }
      ]
    },
    {
      title: "Common Patterns and Their Uses",
      content: "Each pattern has specific uses and characteristics in forming nouns of instrument.",
      types: [
        {
          name: "Tools Using مِفْعَل Pattern",
          description: "Common everyday tools",
          example: "مِقَصّ (Miqaṣṣ) – Scissors, مِبرد (Mibraḍ) – File"
        },
        {
          name: "Appliances Using مِفعَلة Pattern",
          description: "Larger tools and household appliances",
          example: "مِروحة (Mirwaḥah) – Fan, مِصفاة (Miṣfāh) – Strainer"
        },
        {
          name: "Intensive Tools Using مِفعَال Pattern",
          description: "Tools used for intensive actions",
          example: "مِطرَاق (Miṭrāq) – Hammer, مِزمار (Mizmār) – Flute"
        }
      ],
      examples: [
        {
          arabic: "يوجد مِكواة جديدة في الغرفة",
          transliteration: "Yūjad mikwāh jadīdah fī al-ghurfah",
          english: "There is a new iron in the room"
        },
        {
          arabic: "وضعتُ الماء في المِصفاة لتنقيته",
          transliteration: "Wada'tu al-mā' fī al-miṣfāh li tanqiyatih",
          english: "I put the water in the strainer to filter it"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Noun",
      arabic: "مِفتاح",
      transliteration: "Miftāḥ",
      english: "Key"
    },
    {
      type: "Noun",
      arabic: "مِقصّ",
      transliteration: "Miqaṣṣ",
      english: "Scissors"
    },
    {
      type: "Noun",
      arabic: "مِكنسة",
      transliteration: "Miknasah",
      english: "Broom"
    },
    {
      type: "Noun",
      arabic: "مِطرَاق",
      transliteration: "Miṭrāq",
      english: "Hammer"
    },
    {
      type: "Noun",
      arabic: "مِصفاة",
      transliteration: "Miṣfāh",
      english: "Strainer"
    },
    {
      type: "Noun",
      arabic: "مِكواة",
      transliteration: "Mikwāh",
      english: "Iron"
    },
    {
      type: "Noun",
      arabic: "مِروحة",
      transliteration: "Mirwaḥah",
      english: "Fan"
    },
    {
      type: "Noun",
      arabic: "مِسطَار",
      transliteration: "Mistaār",
      english: "Ruler"
    },
    {
      type: "Noun",
      arabic: "مِبرَد",
      transliteration: "Mibraḍ",
      english: "File"
    },
    {
      type: "Noun",
      arabic: "مِزمار",
      transliteration: "Mizmār",
      english: "Flute"
    }
  ],
  quiz: {
    title: "Chapter 14 Quiz: Noun of Instrument (اسم الآلة)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which of the following words is a noun of instrument?",
        options: {
          a: "مدرسة",
          b: "مفتاح",
          c: "شمس",
          d: "كتاب"
        },
        correctAnswer: "b",
        explanation: "مفتاح (key) is a noun of instrument that follows the مِفْعَل pattern and is used for opening."
      },
      {
        difficulty: "Easy",
        question: "Which pattern is commonly used for nouns of instrument?",
        options: {
          a: "فاعل",
          b: "مِفعَل",
          c: "مفعول",
          d: "فعيل"
        },
        correctAnswer: "b",
        explanation: "The pattern مِفعَل (Mif'al) is one of the main patterns used to form nouns of instrument in Arabic."
      },
      {
        difficulty: "Medium",
        question: "Choose the correct meaning of مِطرَاق.",
        options: {
          a: "Broom",
          b: "Hammer",
          c: "Table",
          d: "Book"
        },
        correctAnswer: "b",
        explanation: "مِطرَاق (Miṭrāq) means hammer and follows the مِفعَال pattern for intensive tools."
      },
      {
        difficulty: "Medium",
        question: "Which sentence correctly uses a noun of instrument?",
        options: {
          a: "استخدمتُ المكنسة لتنظيف الغرفة",
          b: "رأيتُ الكتاب على الطاولة",
          c: "ذهبتُ إلى السوق",
          d: "جلستُ في البيت"
        },
        correctAnswer: "a",
        explanation: "The sentence استخدمتُ المكنسة لتنظيف الغرفة correctly uses مكنسة (broom), which is a noun of instrument."
      },
      {
        difficulty: "Hard",
        question: "Which of the following words is formed using the مِفعَلة pattern?",
        options: {
          a: "مفتاح",
          b: "مكنسة",
          c: "مبرَد",
          d: "مزمار"
        },
        correctAnswer: "b",
        explanation: "مكنسة (broom) follows the مِفعَلة pattern, which is commonly used for larger tools and appliances."
      }
    ]
  }
}; 