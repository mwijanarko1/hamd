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

export const chapter18Content: ChapterContent = {
  title: "Verbal Sentence (الجملة الفعلية)",
  introduction: "In Arabic, sentences are categorized into nominal sentences (الجملة الاسمية) and verbal sentences (الجملة الفعلية). A verbal sentence is a sentence that begins with a verb. It conveys an action performed by a subject and can include additional elements like objects, adverbs, and prepositional phrases.",
  mainCategories: [
    {
      arabic: "فعل",
      transliteration: "Fi'l",
      english: "Verb"
    },
    {
      arabic: "فاعل",
      transliteration: "Fā'il",
      english: "Subject"
    },
    {
      arabic: "مفعول به",
      transliteration: "Maf'ūl bihi",
      english: "Object"
    }
  ],
  sections: [
    {
      title: "Structure of a Verbal Sentence",
      content: "A verbal sentence follows a specific structure with the verb at the beginning, followed by the subject and optional object.",
      characteristics: [
        {
          name: "Basic Components",
          description: "Verb (فعل) represents the action, Subject (فاعل) is the doer, Object (مفعول به) is optional",
          example: "كتبَ الطالبُ الدرسَ (The student wrote the lesson)"
        },
        {
          name: "Verb-Subject Agreement",
          description: "Verbs change based on the number and gender of the subject",
          example: "كتبَ (he wrote), كتبتْ (she wrote), كتبوا (they wrote)"
        },
        {
          name: "Word Order",
          description: "The verb must come first in a verbal sentence",
          example: "ذهبَ الولدُ إلى المدرسة (The boy went to school)"
        }
      ],
      examples: [
        {
          arabic: "قرأَ المعلمُ القصةَ",
          transliteration: "Qara'a al-mu'allimu al-qiṣṣata",
          english: "The teacher read the story"
        },
        {
          arabic: "كتبتْ الطالبةُ الدرسَ",
          transliteration: "Katabat aṭ-ṭālibatu ad-darsa",
          english: "The female student wrote the lesson"
        }
      ]
    },
    {
      title: "Types of Verbal Sentences",
      content: "Verbal sentences can be classified based on the type of verb used and whether they are affirmative or negative.",
      types: [
        {
          name: "Transitive Verbs (الفعل المتعدي)",
          description: "Verbs that need an object to complete their meaning",
          example: "أكلَ الولدُ التفاحةَ (The boy ate the apple)"
        },
        {
          name: "Intransitive Verbs (الفعل اللازم)",
          description: "Verbs that do not need an object",
          example: "نامَ الطفلُ (The child slept)"
        },
        {
          name: "Negative Sentences",
          description: "Using negation particles لم, لن, ما, or لا",
          example: "لم يذهبْ أحمدُ إلى السوق (Ahmad did not go to the market)"
        }
      ],
      examples: [
        {
          arabic: "نامَ الطفلُ في السرير",
          transliteration: "Nāma aṭ-ṭiflu fī as-sarīr",
          english: "The child slept in the bed"
        },
        {
          arabic: "لم يكتبْ الطالبُ الواجبَ",
          transliteration: "Lam yaktub aṭ-ṭālibu al-wājiba",
          english: "The student did not write the homework"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Verb",
      arabic: "كَتَبَ",
      transliteration: "Kataba",
      english: "To write"
    },
    {
      type: "Verb",
      arabic: "قَرَأَ",
      transliteration: "Qara'a",
      english: "To read"
    },
    {
      type: "Verb",
      arabic: "ذَهَبَ",
      transliteration: "Dhahaba",
      english: "To go"
    },
    {
      type: "Verb",
      arabic: "فَهِمَ",
      transliteration: "Fahima",
      english: "To understand"
    },
    {
      type: "Verb",
      arabic: "دَرَسَ",
      transliteration: "Darasa",
      english: "To study"
    },
    {
      type: "Verb",
      arabic: "يَكْتُبُ",
      transliteration: "Yaktubu",
      english: "Writes"
    },
    {
      type: "Verb",
      arabic: "يَقْرَأُ",
      transliteration: "Yaqra'u",
      english: "Reads"
    },
    {
      type: "Verb",
      arabic: "يَذْهَبُ",
      transliteration: "Yadhhabu",
      english: "Goes"
    },
    {
      type: "Verb",
      arabic: "يَفْهَمُ",
      transliteration: "Yafhamu",
      english: "Understands"
    },
    {
      type: "Verb",
      arabic: "يَدْرُسُ",
      transliteration: "Yadrusu",
      english: "Studies"
    }
  ],
  quiz: {
    title: "Chapter 18 Quiz: Verbal Sentence (الجملة الفعلية)",
    questions: [
      {
        difficulty: "Easy",
        question: "What is the basic structure of a verbal sentence in Arabic?",
        options: {
          a: "Subject + Verb",
          b: "Verb + Subject",
          c: "Noun + Adjective",
          d: "Object + Verb"
        },
        correctAnswer: "b",
        explanation: "A verbal sentence in Arabic must begin with a verb, followed by the subject (Verb + Subject)."
      },
      {
        difficulty: "Easy",
        question: "Identify the verb in the sentence: يقرأُ الطالبُ الكتابَ",
        options: {
          a: "الطالبُ",
          b: "الكتابَ",
          c: "يقرأُ",
          d: "الطالبُ الكتابَ"
        },
        correctAnswer: "c",
        explanation: "يقرأُ (reads) is the verb in this sentence, while الطالبُ is the subject and الكتابَ is the object."
      },
      {
        difficulty: "Medium",
        question: "Choose the correct sentence:",
        options: {
          a: "المعلمُ كتبَ الكتابَ",
          b: "كتبَ المعلمُ الكتابَ",
          c: "الكتابَ المعلمُ كتبَ",
          d: "المعلمُ الكتابَ كتبَ"
        },
        correctAnswer: "b",
        explanation: "كتبَ المعلمُ الكتابَ is correct because the verb (كتبَ) comes first in a verbal sentence."
      },
      {
        difficulty: "Medium",
        question: "Which verb is intransitive?",
        options: {
          a: "كتبَ",
          b: "ذهبَ",
          c: "قرأَ",
          d: "أكلَ"
        },
        correctAnswer: "b",
        explanation: "ذهبَ (to go) is intransitive because it does not require an object to complete its meaning."
      },
      {
        difficulty: "Hard",
        question: "What is the correct negative form of ذهبَ الولدُ إلى المدرسة using لم?",
        options: {
          a: "لا يذهبْ الولدُ إلى المدرسة",
          b: "لم يذهبْ الولدُ إلى المدرسة",
          c: "ما ذهبَ الولدُ إلى المدرسة",
          d: "لن يذهبَ الولدُ إلى المدرسة"
        },
        correctAnswer: "b",
        explanation: "لم يذهبْ الولدُ إلى المدرسة is correct. When using لم, the verb changes to the jussive form (يذهبْ)."
      }
    ]
  }
}; 