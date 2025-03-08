import { DocumentData } from 'firebase/firestore';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  difficulty: Difficulty;
  description: string;
  isCompleted?: boolean;
  lastAccessed?: string;
}

export interface Topic {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  lessons: Lesson[];
  isBookmarked?: boolean;
  progress?: number;
  lastAccessed?: string;
}

export interface UserProgress {
  completedLessons: number;
  totalLessons: number;
  bookmarkedTopics: string[];
}

export interface LibraryContent {
  categories: string[];
  topics: Topic[];
  userProgress: UserProgress;
}

export interface FirestoreLesson extends DocumentData {
  title: string;
  duration: string;
  difficulty: Difficulty;
  description: string;
}

export interface FirestoreTopic extends DocumentData {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
} 