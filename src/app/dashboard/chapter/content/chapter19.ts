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

export const chapter19Content: ChapterContent = {
  title: "The Imperative (Part 1) – Direct Commands (الأمر المباشر)",
  introduction: "The imperative verb (فعل الأمر) in Arabic is used to give direct commands, instructions, or requests. It always comes in the second person (you - أنتَ / أنتِ / أنتما / أنتم / أنتنّ) and follows specific formation rules.",
  mainCategories: [
    {
      arabic: "فعل الأمر",
      transliteration: "Fi'l al-Amr",
      english: "Imperative Verb"
    },
    {
      arabic: "المضارع",
      transliteration: "Al-Muḍāri'",
      english: "Present Tense (base form)"
    },
    {
      arabic: "صيغ المخاطب",
      transliteration: "Ṣiyagh al-Mukhāṭab",
      english: "Forms of Address"
    }
  ],
  sections: [
    {
      title: "Formation of the Imperative Verb",
      content: "To form the imperative, follow three steps: start with the present tense verb, remove the present tense prefix, and add helping vowels if needed.",
      characteristics: [
        {
          name: "Step 1: Present Tense Base",
          description: "Start with the present tense form in second person",
          example: "تَكْتُبُ (you write) → اكتبْ (Write!)"
        },
        {
          name: "Step 2: Remove Prefix",
          description: "Remove the present tense prefix (ت, ي, ن, أ)",
          example: "تَقْرَأُ (you read) → اقرأْ (Read!)"
        },
        {
          name: "Step 3: Add Helping Vowels",
          description: "Add Alif (ا) if the verb starts with two consonants",
          example: "تَذْهَبُ (you go) → اذهبْ (Go!)"
        }
      ],
      examples: [
        {
          arabic: "اكتبْ الدرسَ",
          transliteration: "Uktub ad-darsa",
          english: "Write the lesson!"
        },
        {
          arabic: "اقرأْ الكتابَ",
          transliteration: "Iqra' al-kitāba",
          english: "Read the book!"
        }
      ]
    },
    {
      title: "Addressing Different People in Commands",
      content: "Commands change depending on whom you are speaking to, with different forms for gender and number.",
      types: [
        {
          name: "Masculine Singular (أنتَ)",
          description: "Basic form with sukūn ending",
          example: "اكتبْ (Write!) - to one male"
        },
        {
          name: "Feminine Singular (أنتِ)",
          description: "Add ي at the end",
          example: "اكتبي (Write!) - to one female"
        },
        {
          name: "Dual (أنتما)",
          description: "Add ا at the end",
          example: "اكتبا (Write!) - to two people"
        },
        {
          name: "Masculine Plural (أنتم)",
          description: "Add وا at the end",
          example: "اكتبوا (Write!) - to group of males/mixed"
        },
        {
          name: "Feminine Plural (أنتنّ)",
          description: "Add نَ at the end",
          example: "اكتبنَ (Write!) - to group of females"
        }
      ],
      examples: [
        {
          arabic: "اجلسوا هنا",
          transliteration: "Ijlisū hunā",
          english: "Sit here! (to a group)"
        },
        {
          arabic: "اصبرْ على الصعوبات",
          transliteration: "Iṣbir 'alā aṣ-ṣu'ūbāt",
          english: "Be patient with difficulties!"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Verb",
      arabic: "اجلسْ",
      transliteration: "Ijlis",
      english: "Sit!"
    },
    {
      type: "Verb",
      arabic: "اسمعْ",
      transliteration: "Isma'",
      english: "Listen!"
    },
    {
      type: "Verb",
      arabic: "اشربْ",
      transliteration: "Ishrab",
      english: "Drink!"
    },
    {
      type: "Verb",
      arabic: "افهمْ",
      transliteration: "Ifham",
      english: "Understand!"
    },
    {
      type: "Verb",
      arabic: "اقرأْ",
      transliteration: "Iqra'",
      english: "Read!"
    },
    {
      type: "Verb",
      arabic: "قفْ",
      transliteration: "Qif",
      english: "Stop!"
    },
    {
      type: "Verb",
      arabic: "تعالَ",
      transliteration: "Ta'āla",
      english: "Come!"
    },
    {
      type: "Verb",
      arabic: "خذْ",
      transliteration: "Khudh",
      english: "Take!"
    },
    {
      type: "Verb",
      arabic: "اكتبْ",
      transliteration: "Uktub",
      english: "Write!"
    },
    {
      type: "Verb",
      arabic: "اذهبْ",
      transliteration: "Idhhab",
      english: "Go!"
    }
  ],
  quiz: {
    title: "Chapter 19 Quiz: Imperative Verbs (Direct Commands)",
    questions: [
      {
        difficulty: "Easy",
        question: "What is the correct imperative form of تقرأُ?",
        options: {
          a: "قرأَ",
          b: "اقرأْ",
          c: "قرأتَ",
          d: "يقرأُ"
        },
        correctAnswer: "b",
        explanation: "The imperative form of تقرأُ is اقرأْ, formed by removing the prefix تَ and adding a helping vowel ا."
      },
      {
        difficulty: "Easy",
        question: "Which sentence is a correct direct command?",
        options: {
          a: "أنتَ تكتبُ الكتابَ",
          b: "اكتبْ الكتابَ",
          c: "هو كتبَ الكتابَ",
          d: "نكتبُ الكتابَ"
        },
        correctAnswer: "b",
        explanation: "اكتبْ الكتابَ is a direct command meaning 'Write the book!', while the other options are statements."
      },
      {
        difficulty: "Medium",
        question: "Choose the correct imperative verb for 'you all (أنتم) write':",
        options: {
          a: "اكتبوا",
          b: "اكتبْ",
          c: "تكتبون",
          d: "يكتبون"
        },
        correctAnswer: "a",
        explanation: "اكتبوا is the correct imperative form for addressing a group (أنتم), adding وا to the basic command form."
      },
      {
        difficulty: "Medium",
        question: "How do you say 'Sit down!' to a female?",
        options: {
          a: "اجلسْ",
          b: "اجلسي",
          c: "اجلسوا",
          d: "اجلسنَ"
        },
        correctAnswer: "b",
        explanation: "اجلسي is the correct form for addressing a single female, adding ي to the basic command form."
      },
      {
        difficulty: "Hard",
        question: "Convert this present tense sentence into a command: أنتَ تذهبُ إلى السوق",
        options: {
          a: "ذهبَ إلى السوق",
          b: "اذهبْ إلى السوق",
          c: "تذهبُ إلى السوق",
          d: "يذهبُ إلى السوق"
        },
        correctAnswer: "b",
        explanation: "The command form is اذهبْ إلى السوق (Go to the market!), formed by converting تذهبُ to the imperative."
      }
    ]
  }
}; 