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

export const chapter20Content: ChapterContent = {
  title: "The Imperative (Part 2) – Indirect Commands and Prohibitions",
  introduction: "After learning about direct commands in the previous chapter, we now explore indirect commands (الأمر غير المباشر) and prohibitions (النهي) in Arabic. Indirect commands are used to give an order indirectly, often by referring to a third person rather than speaking directly to the listener.",
  mainCategories: [
    {
      arabic: "الأمر غير المباشر",
      transliteration: "Al-Amr Ghayr al-Mubāshir",
      english: "Indirect Command"
    },
    {
      arabic: "النهي",
      transliteration: "An-Nahy",
      english: "Prohibition"
    },
    {
      arabic: "المجزوم",
      transliteration: "Al-Majzūm",
      english: "Jussive Form"
    }
  ],
  sections: [
    {
      title: "Indirect Commands (الأمر غير المباشر)",
      content: "Indirect commands are formed using لِــ (Li) + Present Tense Verb in the jussive form, which loses the final vowel if applicable.",
      characteristics: [
        {
          name: "Formation Rule",
          description: "Use لِ + فعل المضارع (Present Tense Verb)",
          example: "لْيكتبْ (Let him write!), لْتجلسْ (Let her sit!)"
        },
        {
          name: "Jussive Form",
          description: "The verb must be in مجزوم form",
          example: "لْيذهبوا (Let them go!), لأقرأْ (Let me read!)"
        },
        {
          name: "Usage",
          description: "Used for third-person commands or suggestions",
          example: "لْيذهبْ إلى المسجد (Let him go to the mosque)"
        }
      ],
      examples: [
        {
          arabic: "لْنكتبْ الدرس معًا",
          transliteration: "Li-naktub ad-darsa ma'an",
          english: "Let's write the lesson together"
        },
        {
          arabic: "لْيجلسْ الطلاب في أماكنهم",
          transliteration: "Li-yajlis aṭ-ṭullābu fī amākinihim",
          english: "Let the students sit in their places"
        }
      ]
    },
    {
      title: "The Prohibition (النهي)",
      content: "Prohibition is used to tell someone NOT to do something, formed using لا + Present Tense Verb in Jussive Form.",
      types: [
        {
          name: "Basic Formation",
          description: "Use لا + فعل المضارع in jussive form",
          example: "لا تكتبْ (Don't write!), لا تجلسْ (Don't sit!)"
        },
        {
          name: "Different Addressees",
          description: "Changes based on who is being addressed",
          example: "لا تذهبْ (Don't go! - to male), لا تذهبي (Don't go! - to female)"
        },
        {
          name: "Complex Prohibitions",
          description: "Can include additional elements",
          example: "لا تأكلْ بسرعة (Don't eat fast), لا تتأخرْ عن الصلاة (Don't be late for prayer)"
        }
      ],
      examples: [
        {
          arabic: "لا تفتحِ الباب",
          transliteration: "Lā taftaḥi al-bāb",
          english: "Don't open the door"
        },
        {
          arabic: "لا تتكلمْ بصوت عالٍ",
          transliteration: "Lā tatakallam bi-ṣawtin 'ālin",
          english: "Don't speak in a loud voice"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Verb",
      arabic: "لْيجلسْ",
      transliteration: "Li-yajlis",
      english: "Let him sit!"
    },
    {
      type: "Verb",
      arabic: "لْتأكلْ",
      transliteration: "Li-ta'kul",
      english: "Let him eat!"
    },
    {
      type: "Verb",
      arabic: "لْيتكلمْ",
      transliteration: "Li-yatakallam",
      english: "Let him speak!"
    },
    {
      type: "Verb",
      arabic: "لْنذهبْ",
      transliteration: "Li-nadhhab",
      english: "Let us go!"
    },
    {
      type: "Verb",
      arabic: "لْيكتبْ",
      transliteration: "Li-yaktub",
      english: "Let him write!"
    },
    {
      type: "Verb",
      arabic: "لا تجلسْ",
      transliteration: "Lā tajlis",
      english: "Don't sit!"
    },
    {
      type: "Verb",
      arabic: "لا تأكلْ",
      transliteration: "Lā ta'kul",
      english: "Don't eat!"
    },
    {
      type: "Verb",
      arabic: "لا تتكلمْ",
      transliteration: "Lā tatakallam",
      english: "Don't speak!"
    },
    {
      type: "Verb",
      arabic: "لا تذهبْ",
      transliteration: "Lā tadhhab",
      english: "Don't go!"
    },
    {
      type: "Verb",
      arabic: "لا تكتبْ",
      transliteration: "Lā taktub",
      english: "Don't write!"
    }
  ],
  quiz: {
    title: "Chapter 20 Quiz: Indirect Commands & Prohibitions",
    questions: [
      {
        difficulty: "Easy",
        question: "Which word is used to form an indirect command?",
        options: {
          a: "لا",
          b: "لِـ",
          c: "هل",
          d: "ما"
        },
        correctAnswer: "b",
        explanation: "لِـ is used to form indirect commands, as in لْيكتبْ (Let him write!)."
      },
      {
        difficulty: "Easy",
        question: "Choose the correct prohibition:",
        options: {
          a: "لا تجلسْ",
          b: "لْيجلسْ",
          c: "اجلسْ",
          d: "جلسَ"
        },
        correctAnswer: "a",
        explanation: "لا تجلسْ (Don't sit) is the correct prohibition form using لا + present tense verb."
      },
      {
        difficulty: "Medium",
        question: "Convert this direct command into an indirect command: اكتبْ الدرس!",
        options: {
          a: "لْيكتبْ الدرس!",
          b: "لا تكتبْ الدرس!",
          c: "يكتبُ الدرس!",
          d: "كتبَ الدرس!"
        },
        correctAnswer: "a",
        explanation: "لْيكتبْ الدرس! is the correct indirect command meaning 'Let him write the lesson!'"
      },
      {
        difficulty: "Medium",
        question: "Which of the following is NOT a correct prohibition?",
        options: {
          a: "لا تأكلْ بسرعة",
          b: "لا تذهبوا إلى السوق",
          c: "لا يكتبْ الدرس",
          d: "لا تجلسْ هنا"
        },
        correctAnswer: "c",
        explanation: "لا يكتبْ الدرس is incorrect because لا is not used for third-person prohibitions."
      },
      {
        difficulty: "Hard",
        question: "What is the correct prohibition form of اذهبْ إلى المسجد! (Go to the mosque!)?",
        options: {
          a: "لا تذهبْ إلى المسجد!",
          b: "لْيذهبْ إلى المسجد!",
          c: "لا يذهبْ إلى المسجد!",
          d: "ما ذهبَ إلى المسجد!"
        },
        correctAnswer: "a",
        explanation: "لا تذهبْ إلى المسجد! is the correct prohibition form meaning 'Don't go to the mosque!'"
      }
    ]
  }
}; 