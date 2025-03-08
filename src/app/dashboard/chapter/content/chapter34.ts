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

export interface ChapterContent {
  title: string;
  introduction: string;
  mainCategories: Category[];
  sections: Section[];
  vocabularyList: VocabularyWord[];
  quiz: {
    title: string;
    questions: QuizQuestion[];
  };
}

export const chapter34Content: ChapterContent = {
  title: 'Chapter 34',
  introduction: 'This is the introduction for Chapter 34.',
  mainCategories: [
    { arabic: 'مثال١', transliteration: 'Mithal 1', english: 'Example 1' },
    { arabic: 'مثال٢', transliteration: 'Mithal 2', english: 'Example 2' },
    { arabic: 'مثال٣', transliteration: 'Mithal 3', english: 'Example 3' }
  ],
  sections: [
    {
      title: 'Section 1',
      content: 'Content for section 1',
      examples: [
        { arabic: 'مثال', transliteration: 'mithal', english: 'example' }
      ]
    }
  ],
  vocabularyList: [
    { type: 'Noun', arabic: 'كلمة', transliteration: 'kalima', english: 'word' }
  ],
  quiz: {
    title: 'Chapter 34 Quiz',
    questions: [
      {
        difficulty: 'Easy',
        question: 'Sample question for Chapter 34?',
        options: {
          a: 'Option A',
          b: 'Option B',
          c: 'Option C',
          d: 'Option D'
        },
        correctAnswer: 'a',
        explanation: 'This is the explanation for the correct answer.'
      }
    ]
  }
}; 