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

export const chapter15Content: ChapterContent = {
  title: "Noun of Pre-Eminence (اسم التفضيل – Ism Al-Tafḍīl)",
  introduction: "Ism Al-Tafḍīl (اسم التفضيل) is a grammatical structure in Arabic used to express comparison and superiority. It is equivalent to the English comparative ('bigger, stronger') and superlative ('biggest, strongest') forms of adjectives.",
  mainCategories: [
    {
      arabic: "أَفْعَلُ",
      transliteration: "Af'al",
      english: "Basic pattern for comparative/superlative"
    },
    {
      arabic: "فُعْلَى",
      transliteration: "Fu'lā",
      english: "Feminine form"
    },
    {
      arabic: "أَفَاعِل",
      transliteration: "Afā'il",
      english: "Plural form"
    }
  ],
  sections: [
    {
      title: "Formation of Ism Al-Tafḍīl",
      content: "To form Ism Al-Tafḍīl, Arabic typically uses the pattern أَفْعَلُ (Af'al). This pattern is applied to a base adjective to create a comparative or superlative meaning.",
      characteristics: [
        {
          name: "Basic Pattern أَفْعَلُ",
          description: "Used for masculine singular forms",
          example: "كبير (Kabīr) → أَكْبَرُ (Akbar) - Bigger/Biggest"
        },
        {
          name: "Three-Letter Root Requirement",
          description: "The adjective must be derived from a three-letter root",
          example: "جميل (Jamīl) → أَجْمَلُ (Ajmal) - More/Most beautiful"
        },
        {
          name: "Permanent Quality",
          description: "The base adjective must describe a quality that can vary in intensity",
          example: "قوي (Qawī) → أَقْوَى (Aqwā) - Stronger/Strongest"
        }
      ],
      examples: [
        {
          arabic: "هذا الكتاب أَفْضَلُ من ذاك",
          transliteration: "Hādhā al-kitāb afḍal min dhāk",
          english: "This book is better than that one"
        },
        {
          arabic: "محمد أَطْوَلُ من أحمد",
          transliteration: "Muḥammad aṭwal min Aḥmad",
          english: "Muhammad is taller than Ahmad"
        }
      ]
    },
    {
      title: "Rules for Using Ism Al-Tafḍīl",
      content: "There are specific rules governing the use of Ism Al-Tafḍīl in different contexts.",
      types: [
        {
          name: "Agreement in Gender",
          description: "Different forms for masculine and feminine",
          example: "هذا الطالبُ أَذْكَى (This male student is smarter), هذه الطالبةُ ذَكْيَى (This female student is smarter)"
        },
        {
          name: "Agreement in Number",
          description: "Use plural noun while keeping Ism Al-Tafḍīl singular",
          example: "هؤلاء الطلاب أذكى (These students are smarter)"
        },
        {
          name: "Restrictions",
          description: "Cannot be formed from adjectives describing absolute states",
          example: "Cannot form from ميت (dead)"
        }
      ],
      examples: [
        {
          arabic: "الجو في الشتاء أَبْرَدُ من الصيف",
          transliteration: "Al-jaww fī al-shitā' abrad min al-ṣayf",
          english: "The weather in winter is colder than in summer"
        },
        {
          arabic: "مكة أَقْدَسُ مدينة في الإسلام",
          transliteration: "Makkah aqdas madīnah fī al-Islām",
          english: "Makkah is the holiest city in Islam"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Adjective",
      arabic: "أَكْبَر",
      transliteration: "Akbar",
      english: "Bigger / Biggest"
    },
    {
      type: "Adjective",
      arabic: "أَصْغَر",
      transliteration: "Aṣghar",
      english: "Smaller / Smallest"
    },
    {
      type: "Adjective",
      arabic: "أَطْوَل",
      transliteration: "Aṭwal",
      english: "Taller / Tallest"
    },
    {
      type: "Adjective",
      arabic: "أَقْصَر",
      transliteration: "Aqṣar",
      english: "Shorter / Shortest"
    },
    {
      type: "Adjective",
      arabic: "أَقْرَب",
      transliteration: "Aqrab",
      english: "Closer / Closest"
    },
    {
      type: "Adjective",
      arabic: "أَبْعَد",
      transliteration: "Ab'ad",
      english: "Further / Farthest"
    },
    {
      type: "Adjective",
      arabic: "أَثْقَل",
      transliteration: "Athqal",
      english: "Heavier / Heaviest"
    },
    {
      type: "Adjective",
      arabic: "أَخَفّ",
      transliteration: "Akhaff",
      english: "Lighter / Lightest"
    },
    {
      type: "Adjective",
      arabic: "أَذْكَى",
      transliteration: "Adhka",
      english: "Smarter / Smartest"
    },
    {
      type: "Adjective",
      arabic: "أَجْمَل",
      transliteration: "Ajmal",
      english: "More beautiful / Most beautiful"
    }
  ],
  quiz: {
    title: "Chapter 15 Quiz: Ism Al-Tafḍīl (اسم التفضيل)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which of the following is an example of Ism Al-Tafḍīl?",
        options: {
          a: "طالب",
          b: "أكبر",
          c: "كتاب",
          d: "مدرسة"
        },
        correctAnswer: "b",
        explanation: "أكبر (bigger/biggest) is an Ism Al-Tafḍīl following the pattern أَفْعَل."
      },
      {
        difficulty: "Easy",
        question: "What is the correct comparative form of جميل (beautiful)?",
        options: {
          a: "أَجْمَل",
          b: "جملاء",
          c: "جمال",
          d: "جميلة"
        },
        correctAnswer: "a",
        explanation: "أَجْمَل is the correct Ism Al-Tafḍīl form, following the pattern أَفْعَل."
      },
      {
        difficulty: "Medium",
        question: "Which sentence correctly uses Ism Al-Tafḍīl?",
        options: {
          a: "هذا الكتاب كبير من ذاك",
          b: "هذا الكتاب أكبر من ذاك",
          c: "هذا الكتاب كبير جدًا",
          d: "هذا الكتاب كبير"
        },
        correctAnswer: "b",
        explanation: "هذا الكتاب أكبر من ذاك correctly uses أكبر to make a comparison between two books."
      },
      {
        difficulty: "Medium",
        question: "What is the Ism Al-Tafḍīl form of طويل (tall)?",
        options: {
          a: "أطول",
          b: "طوالي",
          c: "طول",
          d: "طويلة"
        },
        correctAnswer: "a",
        explanation: "أطول is the correct Ism Al-Tafḍīl form of طويل, following the pattern أَفْعَل."
      },
      {
        difficulty: "Hard",
        question: "Which of the following adjectives CANNOT be converted into Ism Al-Tafḍīl?",
        options: {
          a: "بارد (cold)",
          b: "ميت (dead)",
          c: "قريب (close)",
          d: "جميل (beautiful)"
        },
        correctAnswer: "b",
        explanation: "ميت (dead) cannot form Ism Al-Tafḍīl because it describes an absolute state that cannot vary in intensity."
      }
    ]
  }
}; 