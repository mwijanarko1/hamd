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

export const chapter2Content: ChapterContent = {
  title: "Singular, Dual, and Plural (المفرد، المثنى، والجمع)",
  introduction: "In Arabic, nouns and adjectives change their form based on the number of items they refer to. Unlike English, which mainly distinguishes between singular and plural, Arabic has three forms: Singular (المفرد – Al-Mufrad) for one person or thing, Dual (المثنى – Al-Muthannā) for two people or things, and Plural (الجمع – Al-Jam') for three or more. Understanding these forms is essential for forming grammatically correct sentences in Arabic.",
  mainCategories: [
    { arabic: "المفرد", transliteration: "Al-Mufrad", english: "Singular" },
    { arabic: "المثنى", transliteration: "Al-Muthannā", english: "Dual" },
    { arabic: "الجمع", transliteration: "Al-Jam'", english: "Plural" }
  ],
  sections: [
    {
      title: "1. Singular (المفرد)",
      content: "The singular form is the base form of a noun. It refers to just one entity.",
      examples: [
        { arabic: "كِتَابٌ", transliteration: "kitāb", english: "A book" },
        { arabic: "قَلَمٌ", transliteration: "qalam", english: "A pen" },
        { arabic: "مُدَرِّسٌ", transliteration: "mudarris", english: "A teacher" },
        { arabic: "كِتَابٌ جَمِيلٌ", transliteration: "kitāb jamīl", english: "A beautiful book" },
        { arabic: "مُدَرِّسٌ ذَكِيٌّ", transliteration: "mudarris dhakiyy", english: "A smart teacher" }
      ]
    },
    {
      title: "2. Dual (المثنى)",
      content: "The dual form is used when referring to exactly two people or things. Unlike English (where we just use 'two' before a singular noun), Arabic has a special suffix for dual nouns.",
      characteristics: [
        {
          name: "Nominative Case",
          description: "Add َانِ (-ān) to form the dual",
          example: "كِتَابَانِ (kitābān) - two books"
        },
        {
          name: "Accusative/Genitive Case",
          description: "Add َيْنِ (-ayn) to form the dual",
          example: "كِتَابَيْنِ (kitābayn) - two books"
        }
      ],
      examples: [
        { arabic: "عِندِي كِتَابَانِ", transliteration: "ʿindī kitābān", english: "I have two books" },
        { arabic: "أَخَذْتُ قَلَمَيْنِ", transliteration: "akhadhtu qalamayn", english: "I took two pens" }
      ]
    },
    {
      title: "3. Plural (الجمع)",
      content: "The plural form is used when referring to three or more of something. Arabic has three types of plurals:",
      types: [
        {
          name: "Sound Masculine Plural (جمع مذكر سالم)",
          description: "Used for masculine human nouns and adjectives. Formed by adding ونَ (-ūn) in nominative and ينَ (-īn) in accusative/genitive.",
          example: "مُدَرِّسُونَ/مُدَرِّسِينَ (mudarrisūn/mudarrisīn)"
        },
        {
          name: "Sound Feminine Plural (جمع مؤنث سالم)",
          description: "Used for feminine nouns and adjectives. Formed by replacing ة (tā' marbūṭah) with ات (-āt).",
          example: "مُدَرِّسَاتٌ (mudarrisāt)"
        },
        {
          name: "Broken Plural (جمع التكسير)",
          description: "Many Arabic nouns do not follow regular plural patterns. Instead, their form changes entirely.",
          example: "كُتُبٌ (kutub) from كِتَابٌ (kitāb)"
        }
      ],
      examples: [
        { arabic: "المُدَرِّسُونَ فِي الفَصْلِ", transliteration: "al-mudarrisūna fī al-faṣl", english: "The teachers are in the classroom" },
        { arabic: "الطَّالِبَاتُ فِي المَدْرَسَةِ", transliteration: "aṭ-ṭālibātu fī al-madrasah", english: "The students (females) are in the school" },
        { arabic: "عِندِي كُتُبٌ كَثِيرَةٌ", transliteration: "ʿindī kutub kathīrah", english: "I have many books" },
        { arabic: "الأَطْفَالُ يَلْعَبُونَ فِي الحَدِيقَةِ", transliteration: "al-aṭfālu yalʿabūna fī al-ḥadīqah", english: "The children are playing in the park" }
      ]
    }
  ],
  vocabularyList: [
    { type: "Noun", arabic: "قَلَمٌ", transliteration: "qalam", english: "pen" },
    { type: "Noun", arabic: "بَيْتٌ", transliteration: "bayt", english: "house" },
    { type: "Noun", arabic: "مَدْرَسَةٌ", transliteration: "madrasah", english: "school" },
    { type: "Noun", arabic: "طَالِبٌ", transliteration: "ṭālib", english: "student" },
    { type: "Noun", arabic: "طَالِبَةٌ", transliteration: "ṭālibah", english: "female student" },
    { type: "Noun", arabic: "كِتَابٌ", transliteration: "kitāb", english: "book" },
    { type: "Noun", arabic: "مُدَرِّسٌ", transliteration: "mudarris", english: "teacher" },
    { type: "Noun", arabic: "مُهَنْدِسٌ", transliteration: "muhandis", english: "engineer" },
    { type: "Noun", arabic: "طِفْلٌ", transliteration: "ṭifl", english: "child" },
    { type: "Noun", arabic: "مُعَلِّمٌ", transliteration: "muʿallim", english: "teacher" }
  ],
  quiz: {
    title: "Chapter 2: Singular, Dual, and Plural",
    questions: [
      {
        difficulty: "Easy",
        question: "How do you form the dual (المثنى) for most nouns?",
        options: {
          a: "Add -ين (-īn) and -ون (-ūn)",
          b: "Add -ان (-ān) and -ين (-ayn)",
          c: "Replace the first letter",
          d: "Add ات (-āt)"
        },
        correctAnswer: "b",
        explanation: "The dual is formed by adding -ان (-ān) for nominative case and -ين (-ayn) for accusative/genitive cases."
      },
      {
        difficulty: "Easy",
        question: "Which of these words is in the plural form?",
        options: {
          a: "قَلَمٌ",
          b: "قَلَمَانِ",
          c: "أَقْلَامٌ",
          d: "قَلَمَيْنِ"
        },
        correctAnswer: "c",
        explanation: "أَقْلَامٌ is the broken plural form of قَلَمٌ (pen)."
      },
      {
        difficulty: "Medium",
        question: "What type of plural is formed by adding -ونَ (-ūn) or -ينَ (-īn)?",
        options: {
          a: "Sound Masculine Plural (جمع مذكر سالم)",
          b: "Sound Feminine Plural (جمع مؤنث سالم)",
          c: "Broken Plural (جمع تكسير)",
          d: "Dual (المثنى)"
        },
        correctAnswer: "a",
        explanation: "The Sound Masculine Plural is formed by adding -ونَ (-ūn) in nominative case or -ينَ (-īn) in accusative/genitive cases."
      },
      {
        difficulty: "Medium",
        question: "Which of the following is a Broken Plural (جمع تكسير)?",
        options: {
          a: "كِتَابَانِ",
          b: "مُدَرِّسُونَ",
          c: "طَالِبَاتٌ",
          d: "كُتُبٌ"
        },
        correctAnswer: "d",
        explanation: "كُتُبٌ is a broken plural form of كِتَابٌ (book), where the internal structure of the word changes."
      },
      {
        difficulty: "Hard",
        question: "Which of the following sentences correctly shows the use of the nominative dual form?",
        options: {
          a: "رَأَيْتُ طَالِبَيْنِ فِي الفَصْلِ",
          b: "المُدَرِّسَانِ فِي المَدْرَسَةِ",
          c: "شَرَحَ المُعَلِّمُونَ الدَّرْسَ",
          d: "لَدَيْنَا بُيُوتٌ كَثِيرَةٌ"
        },
        correctAnswer: "b",
        explanation: "المُدَرِّسَانِ فِي المَدْرَسَةِ correctly uses the nominative dual form -انِ (-ān) for the subject of the sentence."
      }
    ]
  }
};
  