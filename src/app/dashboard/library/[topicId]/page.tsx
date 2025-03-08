'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Book, Clock, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { libraryService } from '@/lib/services/libraryService';
import { Topic, Lesson } from '@/lib/types/library';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function TopicPage() {
  const { user } = useAuth();
  const { topicId } = useParams();
  const router = useRouter();
  const [topic, setTopic] = useState<Topic | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTopic = async () => {
      if (!user || !topicId) return;
      try {
        const topicData = await libraryService.getTopic(user.uid, topicId.toString());
        setTopic(topicData);
      } catch (error) {
        console.error('Error fetching topic:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTopic();
  }, [user, topicId]);

  const handleStartLesson = async (lessonId: string) => {
    if (!user || !topic) return;
    try {
      await libraryService.markLessonCompleted(user.uid, topic.id, lessonId);
      // Navigate to lesson page (you'll need to implement this)
      router.push(`/dashboard/lesson/${topic.id}/${lessonId}`);
    } catch (error) {
      console.error('Error starting lesson:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <Book className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Topic not found</h3>
          <Link 
            href="/dashboard/library"
            className="text-gold-500 hover:text-gold-600 flex items-center justify-center gap-2 mt-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Library
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/dashboard/library"
            className="text-gold-500 hover:text-gold-600 flex items-center gap-2 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Library
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-4xl">{topic.thumbnail}</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{topic.title}</h1>
              <p className="text-gray-600 mt-1">{topic.description}</p>
              {topic.progress !== undefined && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-500">
                      Progress: {Math.round(topic.progress)}%
                    </span>
                  </div>
                  <div className="h-2 w-full max-w-md bg-gray-100 rounded-full">
                    <div 
                      className="h-2 bg-gold-500 rounded-full transition-all duration-300" 
                      style={{ width: `${topic.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {topic.lessons.map((lesson: Lesson, index: number) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                lesson.isCompleted ? 'border-l-4 border-gold-500' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-gray-500">Lesson {index + 1}</span>
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-600'
                        : lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'}
                    `}>
                      {lesson.difficulty}
                    </span>
                    {lesson.isCompleted && (
                      <span className="text-gold-500 text-sm">Completed</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-gray-600">{lesson.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {lesson.duration}
                  </div>
                </div>
                <button 
                  onClick={() => handleStartLesson(lesson.id)}
                  className="flex items-center text-gold-500 hover:text-gold-600 ml-4"
                >
                  <PlayCircle className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 