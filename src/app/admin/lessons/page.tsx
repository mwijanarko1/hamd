'use client';

import { useState, useEffect } from 'react';
import RichTextEditor from '@/app/components/RichTextEditor';
import { useAuth } from '@/lib/hooks/useAuth';
import { db } from '@/lib/firebase/firebase';
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';

interface Lesson {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function LessonsAdmin() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const lessonsCollection = collection(db, 'lessons');
      const lessonsSnapshot = await getDocs(lessonsCollection);
      const lessonsList = lessonsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      })) as Lesson[];
      setLessons(lessonsList);
    } catch (error) {
      console.error('Error fetching lessons:', error);
    }
  };

  const handleSave = async () => {
    try {
      if (!title || !content || !category) {
        alert('Please fill in all fields');
        return;
      }

      if (selectedLesson) {
        // Update existing lesson
        const lessonRef = doc(db, 'lessons', selectedLesson.id);
        await updateDoc(lessonRef, {
          title,
          content,
          category,
          updatedAt: new Date(),
        });
      } else {
        // Create new lesson
        await addDoc(collection(db, 'lessons'), {
          title,
          content,
          category,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      // Reset form and refresh lessons
      setTitle('');
      setContent('');
      setCategory('');
      setSelectedLesson(null);
      await fetchLessons();
    } catch (error) {
      console.error('Error saving lesson:', error);
    }
  };

  const handleEdit = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setTitle(lesson.title);
    setContent(lesson.content);
    setCategory(lesson.category);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          {selectedLesson ? 'Edit Lesson' : 'Create New Lesson'}
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
            <RichTextEditor content={content} onChange={setContent} />
          </div>
          <div className="flex justify-end space-x-3">
            {selectedLesson && (
              <button
                onClick={() => {
                  setSelectedLesson(null);
                  setTitle('');
                  setContent('');
                  setCategory('');
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
            )}
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              {selectedLesson ? 'Update Lesson' : 'Create Lesson'}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Existing Lessons</h2>
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => handleEdit(lesson)}
            >
              <h3 className="text-lg font-medium">{lesson.title}</h3>
              <p className="text-sm text-gray-500">{lesson.category}</p>
              <p className="text-xs text-gray-400">
                Last updated: {lesson.updatedAt?.toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 