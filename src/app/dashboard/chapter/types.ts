export interface Category {
  arabic: string;
  transliteration: string;
  english: string;
}

export interface Example {
  arabic: string;
  transliteration: string;
  english: string;
}

export interface Characteristic {
  name: string;
  description: string;
  example: string;
}

export interface Tense {
  name: string;
  description: string;
  example: string;
}

export interface Type {
  name: string;
  description: string;
  example: string;
}

export interface Section {
  title: string;
  content: string;
  characteristics?: Characteristic[];
  tenses?: Tense[];
  types?: Type[];
  examples: Example[];
}

export interface VocabularyWord {
  type: string;
  arabic: string;
  transliteration: string;
  english: string;
}

export interface QuizQuestion {
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