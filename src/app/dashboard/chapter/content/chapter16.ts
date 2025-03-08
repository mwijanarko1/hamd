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

export const chapter16Content: ChapterContent = {
  title: "Nominal Sentence (الجملة الاسمية – Al-Jumlah Al-Ismiyyah)",
  introduction: "In Arabic, sentences are classified into two main types: Nominal Sentences (الجملة الاسمية) that start with a noun (اسم), and Verbal Sentences (الجملة الفعلية) that start with a verb (فعل). A nominal sentence (Al-Jumlah Al-Ismiyyah) is a sentence that begins with a noun and provides information about it, equivalent to 'The sky is blue' or 'The book is new' in English.",
  mainCategories: [
    {
      arabic: "المبتدأ",
      transliteration: "Al-Mubtada'",
      english: "Subject"
    },
    {
      arabic: "الخبر",
      transliteration: "Al-Khabar",
      english: "Predicate"
    }
  ],
  sections: [
    {
      title: "Structure of a Nominal Sentence",
      content: "A nominal sentence consists of two essential parts: the subject (المبتدأ) and the predicate (الخبر).",
      characteristics: [
        {
          name: "Subject (المبتدأ)",
          description: "The main noun that the sentence is talking about, always definite",
          example: "الكتابُ (The book), المسجدُ (The mosque)"
        },
        {
          name: "Predicate (الخبر)",
          description: "The information about the subject, can be definite or indefinite",
          example: "جديدٌ (new), كبيرٌ (big)"
        },
        {
          name: "Definiteness Rule",
          description: "The subject must be definite (proper noun, noun with الـ, or possessive noun)",
          example: "محمد, الكتابُ, كتابُ الطالبِ"
        }
      ],
      examples: [
        {
          arabic: "الكتابُ جديدٌ",
          transliteration: "Al-kitābu jadīdun",
          english: "The book is new"
        },
        {
          arabic: "السماءُ زرقاءُ",
          transliteration: "As-samā'u zarqā'u",
          english: "The sky is blue"
        },
        {
          arabic: "المسجدُ كبيرٌ",
          transliteration: "Al-masjidu kabīrun",
          english: "The mosque is big"
        }
      ]
    },
    {
      title: "Types of Predicates in Nominal Sentences",
      content: "The predicate (الخبر) can take different forms in nominal sentences.",
      types: [
        {
          name: "Simple Predicate (خبر مفرد)",
          description: "A single noun or adjective",
          example: "الطالبُ مجتهدٌ (The student is hardworking)"
        },
        {
          name: "Prepositional Phrase Predicate (خبر شبه جملة)",
          description: "A phrase that starts with a preposition (في, على, من)",
          example: "الكتابُ على الطاولةِ (The book is on the table)"
        },
        {
          name: "Sentential Predicate (خبر جملة فعلية)",
          description: "A complete verbal sentence as predicate",
          example: "الطالبُ يدرسُ (The student is studying)"
        }
      ],
      examples: [
        {
          arabic: "الولدُ في المدرسةِ",
          transliteration: "Al-waladu fī al-madrasati",
          english: "The boy is in the school"
        },
        {
          arabic: "المعلمُ يشرحُ الدرسَ",
          transliteration: "Al-mu'allimu yashraḥu ad-darsa",
          english: "The teacher is explaining the lesson"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Noun",
      arabic: "الكتابُ",
      transliteration: "Al-kitābu",
      english: "The book"
    },
    {
      type: "Noun",
      arabic: "المدرسةُ",
      transliteration: "Al-madrasatu",
      english: "The school"
    },
    {
      type: "Noun",
      arabic: "المسجدُ",
      transliteration: "Al-masjidu",
      english: "The mosque"
    },
    {
      type: "Noun",
      arabic: "الطالبُ",
      transliteration: "At-ṭālibu",
      english: "The student"
    },
    {
      type: "Noun",
      arabic: "البيتُ",
      transliteration: "Al-baytu",
      english: "The house"
    },
    {
      type: "Adjective",
      arabic: "كبيرٌ",
      transliteration: "Kabīrun",
      english: "Big"
    },
    {
      type: "Adjective",
      arabic: "صغيرٌ",
      transliteration: "Ṣaghīrun",
      english: "Small"
    },
    {
      type: "Adjective",
      arabic: "جميلٌ",
      transliteration: "Jamīlun",
      english: "Beautiful"
    },
    {
      type: "Adjective",
      arabic: "قريبٌ",
      transliteration: "Qarībun",
      english: "Near"
    },
    {
      type: "Adjective",
      arabic: "بعيدٌ",
      transliteration: "Ba'īdun",
      english: "Far"
    }
  ],
  quiz: {
    title: "Chapter 16 Quiz: Nominal Sentences",
    questions: [
      {
        difficulty: "Easy",
        question: "What are the two main parts of a nominal sentence?",
        options: {
          a: "فعل + فاعل",
          b: "مبتدأ + خبر",
          c: "اسم + فعل",
          d: "فاعل + مفعول"
        },
        correctAnswer: "b",
        explanation: "A nominal sentence consists of مبتدأ (subject) and خبر (predicate)."
      },
      {
        difficulty: "Easy",
        question: "Which of the following is a correct nominal sentence?",
        options: {
          a: "الطالبُ يدرسُ",
          b: "الولدُ في المدرسةِ",
          c: "يذهبُ الولدُ إلى المسجدِ",
          d: "درس الطالب"
        },
        correctAnswer: "b",
        explanation: "الولدُ في المدرسةِ is a correct nominal sentence with a subject and a prepositional phrase predicate."
      },
      {
        difficulty: "Medium",
        question: "Which of these is the correct translation of 'The mosque is big'?",
        options: {
          a: "المسجدُ كبيرٌ",
          b: "المسجدُ الكبر",
          c: "الكبيرُ مسجدٌ",
          d: "مسجدٌ كبيرٌ"
        },
        correctAnswer: "a",
        explanation: "المسجدُ كبيرٌ is the correct translation, with a definite subject and indefinite predicate."
      },
      {
        difficulty: "Medium",
        question: "Identify the subject (المبتدأ) in the sentence: البنتُ ذكيةٌ",
        options: {
          a: "البنتُ",
          b: "ذكيةٌ",
          c: "بنت",
          d: "البنتَ"
        },
        correctAnswer: "a",
        explanation: "البنتُ is the subject (المبتدأ) in this sentence, while ذكيةٌ is the predicate (الخبر)."
      },
      {
        difficulty: "Hard",
        question: "Which of the following is NOT a possible predicate (خبر) in a nominal sentence?",
        options: {
          a: "A noun",
          b: "A verb",
          c: "A prepositional phrase",
          d: "An adjective"
        },
        correctAnswer: "b",
        explanation: "While a verb can be part of a sentential predicate, a single verb alone cannot be a predicate in a nominal sentence."
      }
    ]
  }
}; 