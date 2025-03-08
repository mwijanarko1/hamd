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

export const chapter3Content: ChapterContent = {
  title: "Pronouns (الضمائر)",
  introduction: "Pronouns (الضمائر) are words used to replace nouns and refer to people or things without repeating their names. In Arabic, pronouns are an essential part of speech and change based on gender, number, and grammatical function in a sentence.",
  mainCategories: [
    { arabic: "الضمائر المنفصلة", transliteration: "Ad-Damā'ir Al-Munfaṣilah", english: "Independent Pronouns" },
    { arabic: "الضمائر المتصلة", transliteration: "Ad-Damā'ir Al-Muttaṣilah", english: "Attached Pronouns" },
    { arabic: "أسماء الموصول", transliteration: "Asmā' Al-Mawṣūl", english: "Relative Pronouns" }
  ],
  sections: [
    {
      title: "1. Independent Pronouns (الضمائر المنفصلة)",
      content: "These pronouns function as standalone words and are used as subjects of sentences. They do not require any attachment to other words.",
      examples: [
        { arabic: "أنا طالب", transliteration: "anā ṭālib", english: "I am a student" },
        { arabic: "أنتَ مُدَرِّسٌ", transliteration: "anta mudarris", english: "You are a teacher" },
        { arabic: "هو في البيت", transliteration: "huwa fī al-bayt", english: "He is in the house" },
        { arabic: "هم يدرسون العربية", transliteration: "hum yadrusūna al-ʿarabiyyah", english: "They are studying Arabic" }
      ]
    },
    {
      title: "2. Attached Pronouns (الضمائر المتصلة)",
      content: "Attached pronouns are suffixes added to verbs, nouns, or prepositions to indicate possession, object pronouns, or subject pronouns in verbal sentences.",
      types: [
        {
          name: "Object Pronouns",
          description: "These pronouns are added to verbs to indicate the object of the action.",
          example: "كَتَبَنِي (katabanī) - He wrote to me"
        },
        {
          name: "Possessive Pronouns",
          description: "When attached to nouns, these pronouns indicate possession.",
          example: "كِتَابِي (kitābī) - My book"
        }
      ],
      examples: [
        { arabic: "أعطاني الكتاب", transliteration: "aʿṭānī al-kitāb", english: "He gave me the book" },
        { arabic: "رأيتك في السوق", transliteration: "ra'aytuka fī as-sūq", english: "I saw you in the market" },
        { arabic: "درستها جيدًا", transliteration: "darastuhā jayyidan", english: "I studied it well" },
        { arabic: "هذا قلمي", transliteration: "hādhā qalamī", english: "This is my pen" },
        { arabic: "أين سيارتُكِ؟", transliteration: "ayna sayyāratuki?", english: "Where is your car?" },
        { arabic: "بيته قريب من المسجد", transliteration: "baytuhu qarīb min al-masjid", english: "His house is near the mosque" }
      ]
    },
    {
      title: "3. Relative Pronouns (أسماء الموصول)",
      content: "Relative pronouns are used to connect two parts of a sentence by referring to a noun mentioned earlier.",
      characteristics: [
        {
          name: "Masculine Forms",
          description: "Used with masculine nouns",
          example: "الَّذِي (singular), اللَّذَانِ (dual), الَّذِينَ (plural)"
        },
        {
          name: "Feminine Forms",
          description: "Used with feminine nouns",
          example: "الَّتِي (singular), اللَّتَانِ (dual), اللَّاتِي (plural)"
        }
      ],
      examples: [
        { arabic: "الرجل الذي في المسجد هو أبي", transliteration: "ar-rajul alladhī fī al-masjid huwa abī", english: "The man who is in the mosque is my father" },
        { arabic: "الكتاب الذي قرأته كان مفيدًا", transliteration: "al-kitāb alladhī qara'tuhu kāna mufīdan", english: "The book that I read was useful" },
        { arabic: "الطلاب الذين يدرسون هنا متفوقون", transliteration: "aṭ-ṭullāb alladhīna yadrusūna hunā mutafawwiqūn", english: "The students who study here are excellent" }
      ]
    }
  ],
  vocabularyList: [
    { type: "Pronoun", arabic: "أنا", transliteration: "anā", english: "I" },
    { type: "Pronoun", arabic: "أنتَ", transliteration: "anta", english: "You (m.)" },
    { type: "Pronoun", arabic: "هو", transliteration: "huwa", english: "He" },
    { type: "Pronoun", arabic: "هي", transliteration: "hiya", english: "She" },
    { type: "Pronoun", arabic: "نحن", transliteration: "naḥnu", english: "We" },
    { type: "Pronoun", arabic: "هم", transliteration: "hum", english: "They (m.)" },
    { type: "Possessive", arabic: "كتابُهُ", transliteration: "kitābuhu", english: "His book" },
    { type: "Possessive", arabic: "قلمُها", transliteration: "qalumuhā", english: "Her pen" },
    { type: "Possessive", arabic: "بيتنا", transliteration: "baytunā", english: "Our house" },
    { type: "Possessive", arabic: "مدرستكِ", transliteration: "madrasatuki", english: "Your school (f.)" }
  ],
  quiz: {
    title: "Chapter 3: Pronouns (الضمائر)",
    questions: [
      {
        difficulty: "Easy",
        question: "Which of the following is an independent pronoun?",
        options: {
          a: "كتابُهُ",
          b: "أنتَ",
          c: "في",
          d: "الذي"
        },
        correctAnswer: "b",
        explanation: "أنتَ is an independent pronoun meaning 'you' (masculine)."
      },
      {
        difficulty: "Easy",
        question: "What is the correct attached pronoun for 'my book' in Arabic?",
        options: {
          a: "كتابُكَ",
          b: "كتابُهُ",
          c: "كتابِي",
          d: "كتابُها"
        },
        correctAnswer: "c",
        explanation: "كتابِي is the correct form for 'my book', where ي is the attached pronoun meaning 'my'."
      },
      {
        difficulty: "Medium",
        question: "Which relative pronoun would you use for a singular masculine noun?",
        options: {
          a: "الذين",
          b: "اللاتي",
          c: "الذي",
          d: "التي"
        },
        correctAnswer: "c",
        explanation: "الذي is the relative pronoun used for singular masculine nouns."
      },
      {
        difficulty: "Medium",
        question: "Choose the correct sentence using an attached pronoun:",
        options: {
          a: "هو مدرسها جيد",
          b: "كتابي على الطاولة",
          c: "أنا سيارتهُ كبيرة",
          d: "قلمكَ في الحقيبةُ"
        },
        correctAnswer: "b",
        explanation: "كتابي على الطاولة correctly uses the attached pronoun ي (my) with the noun كتاب (book)."
      },
      {
        difficulty: "Hard",
        question: "Which of the following sentences correctly uses an attached pronoun as an object pronoun?",
        options: {
          a: "أعطيته الكتاب",
          b: "هو الكتاب معي",
          c: "كتابكِ جميلة",
          d: "أنا يدرس العربية"
        },
        correctAnswer: "a",
        explanation: "أعطيته الكتاب correctly uses the attached pronoun ه as an object pronoun meaning 'I gave him the book'."
      }
    ]
  }
}; 