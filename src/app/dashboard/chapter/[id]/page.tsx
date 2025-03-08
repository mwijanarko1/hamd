'use client';

import { useParams, useRouter } from 'next/navigation';
import { levels, useLevels } from '../../journey/page';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Lock, BookOpen, GraduationCap, ListChecks, CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useVocabulary } from '@/lib/hooks/useVocabulary';
import { getChapterContent } from '@/app/lib/chapterUtils';
import { ChapterContent, Category, Section, Example, Characteristic, Type, Tense, VocabularyWord, QuizQuestion } from '../types';

export default function ChapterPage() {
  const params = useParams();
  const router = useRouter();
  const { levels, unlockNextChapter } = useLevels();
  const { addWordsFromChapter } = useVocabulary();
  const chapterId = parseInt(params.id as string);
  const chapter = levels[chapterId - 1];

  const [chapterContent, setChapterContent] = useState<ChapterContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [hasPassedQuiz, setHasPassedQuiz] = useState(false);

  useEffect(() => {
    async function loadChapterContent() {
      try {
        const content = await getChapterContent(chapterId);
        setChapterContent(content);
      } catch (error) {
        console.error('Error loading chapter content:', error);
      } finally {
        setLoading(false);
      }
    }

    loadChapterContent();
  }, [chapterId]);

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmitQuiz = () => {
    if (!chapterContent) return;
    
    const allCorrect = chapterContent.quiz.questions.every(
      (q, index) => selectedAnswers[index] === q.correctAnswer
    );
    setHasPassedQuiz(allCorrect);
    setShowResults(true);
  };

  const handleRetryQuiz = () => {
    setShowResults(false);
    setSelectedAnswers({});
    setCurrentQuestion(0);
  };

  const handleFinishChapter = async () => {
    if (!chapterContent) return;

    // Add chapter vocabulary to the bank
    const vocabularyWithChapterId = chapterContent.vocabularyList.map(word => ({
      ...word,
      chapterId
    }));
    await addWordsFromChapter(chapterId, vocabularyWithChapterId);
    
    // Unlock next chapter and redirect
    unlockNextChapter(chapterId);
    router.push('/dashboard/journey');
  };

  if (!chapter) {
    return (
      <div className="min-h-screen bg-cream-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Chapter Not Found</h1>
            <p className="mt-2 text-gray-600">The chapter you're looking for doesn't exist.</p>
            <Link 
              href="/dashboard/journey"
              className="mt-4 inline-flex items-center text-gold-600 hover:text-gold-700"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Journey
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (chapter.isLocked || chapter.isPremium) {
    return (
      <div className="min-h-screen bg-cream-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto text-center">
            <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-gold-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {chapter.isPremium ? 'Premium Content' : 'Chapter Locked'}
            </h1>
            <p className="text-gray-600 mb-6">
              {chapter.isPremium 
                ? 'Unlock all 70 chapters and get access to premium features by upgrading to PRO.'
                : 'Complete the previous chapters to unlock this one.'}
            </p>
            <div className="flex space-x-4 justify-center">
              <Link
                href="/dashboard/journey"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Back to Journey
              </Link>
              {chapter.isPremium && (
                <button className="px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600">
                  Upgrade to PRO
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading || !chapterContent) {
    return (
      <div className="min-h-screen bg-cream-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading chapter content...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/dashboard/journey"
            className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Journey
          </Link>
        </div>

        {/* Chapter Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{chapter.name}: {chapterContent.title}</h1>
          <p className="text-gray-600">{chapterContent.introduction}</p>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {chapterContent.mainCategories.map((category: Category, index: number) => (
              <div key={index} className="bg-cream-50 rounded-lg p-4">
                <div className="text-xl font-bold text-gray-900 mb-1">{category.english}</div>
                <div className="text-gold-600">{category.arabic}</div>
                <div className="text-sm text-gray-500">{category.transliteration}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8">
          {chapterContent.sections.map((section: Section, index: number) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <p className="text-gray-600 mb-6">{section.content}</p>

              {section.characteristics && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Characteristics:</h3>
                  <div className="space-y-4">
                    {section.characteristics.map((char: Characteristic, idx: number) => (
                      <div key={idx} className="bg-cream-50 rounded-lg p-4">
                        <div className="font-medium text-gray-900">{char.name}</div>
                        <p className="text-gray-600">{char.description}</p>
                        <div className="mt-2 text-gold-600">{char.example}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.tenses && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tenses:</h3>
                  <div className="space-y-4">
                    {section.tenses.map((tense: Tense, idx: number) => (
                      <div key={idx} className="bg-cream-50 rounded-lg p-4">
                        <div className="font-medium text-gray-900">{tense.name}</div>
                        <p className="text-gray-600">{tense.description}</p>
                        <div className="mt-2 text-gold-600">{tense.example}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.types && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Types:</h3>
                  <div className="space-y-4">
                    {section.types.map((type: Type, idx: number) => (
                      <div key={idx} className="bg-cream-50 rounded-lg p-4">
                        <div className="font-medium text-gray-900">{type.name}</div>
                        <p className="text-gray-600">{type.description}</p>
                        <div className="mt-2 text-gold-600">{type.example}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Examples:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {section.examples.map((example: Example, idx: number) => (
                    <div key={idx} className="bg-cream-50 rounded-lg p-4">
                      <div className="text-xl text-gold-600">{example.arabic}</div>
                      <div className="text-sm text-gray-500">{example.transliteration}</div>
                      <div className="text-gray-900">{example.english}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Vocabulary List */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vocabulary List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {chapterContent.vocabularyList.map((word: VocabularyWord, index: number) => (
                <div key={index} className="bg-cream-50 rounded-lg p-4">
                  <div className="text-sm text-gold-600 mb-1">{word.type}</div>
                  <div className="text-3xl text-gold-600 mb-1">{word.arabic}</div>
                  <div className="text-sm text-gray-500">{word.transliteration}</div>
                  <div className="text-gray-900">{word.english}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quiz Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Test Your Knowledge?</h2>
            <p className="text-gray-600 mb-6">Take the quiz to complete this chapter and unlock the next one!</p>
            <button
              onClick={handleStartQuiz}
              className="px-6 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
            >
              Start Quiz
            </button>
          </div>
        </div>

        {/* Quiz Modal */}
        <AnimatePresence>
          {showQuiz && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {showResults ? (
                  <div className="text-center">
                    {hasPassedQuiz ? (
                      <>
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Congratulations!</h3>
                        <p className="text-gray-600 mb-6">You've successfully completed the quiz!</p>
                        <button
                          onClick={handleFinishChapter}
                          className="px-6 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600"
                        >
                          Complete Chapter
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <XCircle className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Keep Practicing!</h3>
                        <p className="text-gray-600 mb-6">Review the material and try again.</p>
                        <button
                          onClick={handleRetryQuiz}
                          className="px-6 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600"
                        >
                          Retry Quiz
                        </button>
                      </>
                    )}
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Question {currentQuestion + 1} of {chapterContent.quiz.questions.length}
                    </h3>
                    <div className="mb-8">
                      <p className="text-gray-900 text-lg mb-4">
                        {chapterContent.quiz.questions[currentQuestion].question}
                      </p>
                      <div className="space-y-3">
                        {Object.entries(chapterContent.quiz.questions[currentQuestion].options).map(([key, value]) => (
                          <button
                            key={key}
                            onClick={() => handleAnswerSelect(currentQuestion, key)}
                            className={`w-full p-4 rounded-lg text-left transition-colors ${
                              selectedAnswers[currentQuestion] === key
                                ? 'bg-gold-500 text-white'
                                : 'bg-cream-50 text-gray-900 hover:bg-cream-100'
                            }`}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                        disabled={currentQuestion === 0}
                        className="px-4 py-2 text-gray-600 disabled:opacity-50"
                      >
                        Previous
                      </button>
                      {currentQuestion < chapterContent.quiz.questions.length - 1 ? (
                        <button
                          onClick={() => setCurrentQuestion(prev => prev + 1)}
                          disabled={!selectedAnswers[currentQuestion]}
                          className="px-6 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600 disabled:opacity-50"
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmitQuiz}
                          disabled={!selectedAnswers[currentQuestion]}
                          className="px-6 py-3 bg-gold-500 text-white rounded-lg hover:bg-gold-600 disabled:opacity-50"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 