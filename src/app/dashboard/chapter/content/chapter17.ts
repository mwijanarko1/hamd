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

export const chapter17Content: ChapterContent = {
  title: "Verbs (الأفعال - Al-Af'āl)",
  introduction: "A verb (فعل - fi'l) in Arabic represents an action or a state and always occurs within a specific time frame. Arabic verbs are categorized into three main tenses: Past tense (الماضي - Al-Māḍī) for actions that have already happened, Present tense (المضارع - Al-Muḍāri') for actions happening now or continuously, and Imperative (الأمر - Al-Amr) for commands or requests.",
  mainCategories: [
    {
      arabic: "الماضي",
      transliteration: "Al-Māḍī",
      english: "Past Tense"
    },
    {
      arabic: "المضارع",
      transliteration: "Al-Muḍāri'",
      english: "Present Tense"
    },
    {
      arabic: "الأمر",
      transliteration: "Al-Amr",
      english: "Imperative"
    }
  ],
  sections: [
    {
      title: "Past Tense Verbs (الفعل الماضي)",
      content: "Past tense verbs indicate actions that have already happened and are fixed in time. The basic form is found in the third-person singular masculine (he) form.",
      characteristics: [
        {
          name: "Basic Pattern",
          description: "Most past tense verbs follow the فَعَلَ (fa'ala) pattern",
          example: "كَتَبَ (kataba) - He wrote, ذَهَبَ (dhahaba) - He went"
        },
        {
          name: "Conjugation",
          description: "Verbs change based on the subject with specific suffixes",
          example: "كَتَبَ (he wrote), كَتَبَتْ (she wrote), كَتَبْتُ (I wrote)"
        },
        {
          name: "Plural Forms",
          description: "Special endings for plural subjects",
          example: "كَتَبُوا (they [m] wrote), كَتَبْنَ (they [f] wrote)"
        }
      ],
      examples: [
        {
          arabic: "كَتَبَ الطالبُ الدرسَ",
          transliteration: "Kataba aṭ-ṭālibu ad-darsa",
          english: "The student wrote the lesson"
        },
        {
          arabic: "ذَهَبَتْ البنتُ إلى المدرسةِ",
          transliteration: "Dhahabat al-bintu ilā al-madrasati",
          english: "The girl went to school"
        }
      ]
    },
    {
      title: "Present Tense Verbs (الفعل المضارع)",
      content: "Present tense verbs describe actions happening now, in the near future, or occurring habitually. They begin with specific prefixes (أ، ن، ي، ت) depending on the subject.",
      types: [
        {
          name: "Third Person Masculine",
          description: "Begins with يَ (ya-)",
          example: "يَكْتُبُ (yaktubu) - he writes, يَذْهَبُ (yadhhabu) - he goes"
        },
        {
          name: "Third Person Feminine",
          description: "Begins with تَ (ta-)",
          example: "تَكْتُبُ (taktubu) - she writes, تَذْهَبُ (tadhhabu) - she goes"
        },
        {
          name: "First Person",
          description: "Begins with أَ (a-) for singular, نَ (na-) for plural",
          example: "أَكْتُبُ (aktubu) - I write, نَكْتُبُ (naktubu) - we write"
        }
      ],
      examples: [
        {
          arabic: "يَكْتُبُ الطالبُ الواجبَ",
          transliteration: "Yaktubu aṭ-ṭālibu al-wājiba",
          english: "The student writes the homework"
        },
        {
          arabic: "نَذْهَبُ إلى المدرسةِ كلَّ يومٍ",
          transliteration: "Nadhhabu ilā al-madrasati kulla yawmin",
          english: "We go to school every day"
        }
      ]
    }
  ],
  vocabularyList: [
    {
      type: "Verb",
      arabic: "كَتَبَ",
      transliteration: "Kataba",
      english: "He wrote"
    },
    {
      type: "Verb",
      arabic: "ذَهَبَ",
      transliteration: "Dhahaba",
      english: "He went"
    },
    {
      type: "Verb",
      arabic: "قَرَأَ",
      transliteration: "Qara'a",
      english: "He read"
    },
    {
      type: "Verb",
      arabic: "جَلَسَ",
      transliteration: "Jalasa",
      english: "He sat"
    },
    {
      type: "Verb",
      arabic: "أَكَلَ",
      transliteration: "Akala",
      english: "He ate"
    },
    {
      type: "Verb",
      arabic: "يَكْتُبُ",
      transliteration: "Yaktubu",
      english: "He writes"
    },
    {
      type: "Verb",
      arabic: "يَذْهَبُ",
      transliteration: "Yadhhabu",
      english: "He goes"
    },
    {
      type: "Verb",
      arabic: "يَقْرَأُ",
      transliteration: "Yaqra'u",
      english: "He reads"
    },
    {
      type: "Verb",
      arabic: "يَجْلِسُ",
      transliteration: "Yajlisu",
      english: "He sits"
    },
    {
      type: "Verb",
      arabic: "يَأْكُلُ",
      transliteration: "Ya'kulu",
      english: "He eats"
    }
  ],
  quiz: {
    title: "Chapter 17 Quiz: Verbs (الأفعال)",
    questions: [
      {
        difficulty: "Easy",
        question: "What are the three tenses of Arabic verbs?",
        options: {
          a: "Past, present, future",
          b: "Past, present, imperative",
          c: "Active, passive, imperative",
          d: "Past, continuous, perfect"
        },
        correctAnswer: "b",
        explanation: "Arabic verbs have three main tenses: Past (الماضي), Present (المضارع), and Imperative (الأمر)."
      },
      {
        difficulty: "Easy",
        question: "What is the present tense form of كَتَبَ (kataba - 'he wrote')?",
        options: {
          a: "أَكْتُبُ",
          b: "يَكْتُبُ",
          c: "تَكْتُبُ",
          d: "نَكْتُبُ"
        },
        correctAnswer: "b",
        explanation: "The present tense form of كَتَبَ for 'he' is يَكْتُبُ (yaktubu), which begins with يَ for third person masculine singular."
      },
      {
        difficulty: "Medium",
        question: "What is the imperative form of يَقْرَأُ (yaqra'u - 'he reads')?",
        options: {
          a: "اِقْرَأْ",
          b: "أَقْرَأُ",
          c: "يَقْرَأُ",
          d: "قَرَأَ"
        },
        correctAnswer: "a",
        explanation: "The imperative form اِقْرَأْ (iqra') is formed by removing the prefix يَ and adding a helping vowel اِ."
      },
      {
        difficulty: "Medium",
        question: "What is the past tense form of يَذْهَبُ (yadhhabu - 'he goes')?",
        options: {
          a: "ذَهَبَ",
          b: "أَذْهَبُ",
          c: "ذَهَبُوا",
          d: "يَذْهَبُ"
        },
        correctAnswer: "a",
        explanation: "The past tense form of يَذْهَبُ is ذَهَبَ (dhahaba), following the basic فَعَلَ pattern."
      },
      {
        difficulty: "Hard",
        question: "What is the first-person plural (we) form of كتب in the present tense?",
        options: {
          a: "نَكْتُبُ",
          b: "يَكْتُبُونَ",
          c: "تَكْتُبُ",
          d: "أَكْتُبُ"
        },
        correctAnswer: "a",
        explanation: "The first-person plural (we) form uses the prefix نَ, making it نَكْتُبُ (naktubu - 'we write')."
      }
    ]
  }
}; 