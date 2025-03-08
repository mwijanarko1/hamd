import { 
  LibraryContent, 
  Topic, 
  Lesson, 
  UserProgress,
  FirestoreLesson,
  FirestoreTopic 
} from '@/lib/types/library';
import { db } from '@/lib/firebase';
import { 
  collection, 
  getDocs, 
  doc, 
  getDoc, 
  query, 
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
  DocumentData
} from 'firebase/firestore';

export const libraryService = {
  // Fetch all library content for a user
  async getUserLibraryContent(userId: string): Promise<LibraryContent> {
    try {
      // Get base categories
      const categoriesDoc = await getDoc(doc(db, 'library', 'categories'));
      const categories = categoriesDoc.data()?.list || [];

      // Get user's progress
      const userProgressDoc = await getDoc(doc(db, 'users', userId, 'progress', 'library'));
      const userProgress: UserProgress = userProgressDoc.data() as UserProgress || {
        completedLessons: 0,
        totalLessons: 0,
        bookmarkedTopics: []
      };

      // Get all topics
      const topicsSnapshot = await getDocs(collection(db, 'library', 'topics', 'list'));
      const topics: Topic[] = [];

      for (const topicDoc of topicsSnapshot.docs) {
        const topicData = topicDoc.data() as FirestoreTopic;
        
        // Get lessons for this topic
        const lessonsSnapshot = await getDocs(
          collection(db, 'library', 'topics', 'list', topicDoc.id, 'lessons')
        );
        
        // Get user's lesson progress
        const userLessonsDoc = await getDoc(
          doc(db, 'users', userId, 'progress', 'lessons', topicDoc.id, 'status')
        );
        const completedLessons = userLessonsDoc.data()?.completed || [];

        const lessons: Lesson[] = lessonsSnapshot.docs.map(lessonDoc => {
          const lessonData = lessonDoc.data() as FirestoreLesson;
          return {
            ...lessonData,
            id: lessonDoc.id,
            isCompleted: completedLessons.includes(lessonDoc.id)
          };
        });

        topics.push({
          ...topicData,
          id: topicDoc.id,
          lessons,
          isBookmarked: userProgress.bookmarkedTopics.includes(topicDoc.id),
          progress: (completedLessons.length / lessons.length) * 100
        });
      }

      return {
        categories,
        topics,
        userProgress
      };
    } catch (error) {
      console.error('Error fetching library content:', error);
      throw error;
    }
  },

  // Fetch a single topic with its lessons
  async getTopic(userId: string, topicId: string): Promise<Topic | null> {
    try {
      const topicDoc = await getDoc(doc(db, 'library', 'topics', 'list', topicId));
      if (!topicDoc.exists()) return null;

      const topicData = topicDoc.data() as FirestoreTopic;
      
      // Get lessons
      const lessonsSnapshot = await getDocs(
        collection(db, 'library', 'topics', 'list', topicId, 'lessons')
      );
      
      // Get user's lesson progress
      const userLessonsDoc = await getDoc(
        doc(db, 'users', userId, 'progress', 'lessons', topicId, 'status')
      );
      const completedLessons = userLessonsDoc.data()?.completed || [];

      const lessons: Lesson[] = lessonsSnapshot.docs.map(lessonDoc => {
        const lessonData = lessonDoc.data() as FirestoreLesson;
        return {
          ...lessonData,
          id: lessonDoc.id,
          isCompleted: completedLessons.includes(lessonDoc.id)
        };
      });

      // Get bookmark status
      const userProgressDoc = await getDoc(doc(db, 'users', userId, 'progress', 'library'));
      const isBookmarked = userProgressDoc.data()?.bookmarkedTopics?.includes(topicId) || false;

      return {
        ...topicData,
        id: topicId,
        lessons,
        isBookmarked,
        progress: (completedLessons.length / lessons.length) * 100
      };
    } catch (error) {
      console.error('Error fetching topic:', error);
      throw error;
    }
  },

  // Toggle topic bookmark
  async toggleBookmark(userId: string, topicId: string): Promise<void> {
    try {
      const userProgressRef = doc(db, 'users', userId, 'progress', 'library');
      const userProgressDoc = await getDoc(userProgressRef);
      const bookmarkedTopics = userProgressDoc.data()?.bookmarkedTopics || [];

      if (bookmarkedTopics.includes(topicId)) {
        await updateDoc(userProgressRef, {
          bookmarkedTopics: arrayRemove(topicId)
        });
      } else {
        await updateDoc(userProgressRef, {
          bookmarkedTopics: arrayUnion(topicId)
        });
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      throw error;
    }
  },

  // Mark a lesson as completed
  async markLessonCompleted(userId: string, topicId: string, lessonId: string): Promise<void> {
    try {
      const lessonProgressRef = doc(db, 'users', userId, 'progress', 'lessons', topicId, 'status');
      await updateDoc(lessonProgressRef, {
        completed: arrayUnion(lessonId),
        lastAccessed: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error marking lesson as completed:', error);
      throw error;
    }
  }
}; 