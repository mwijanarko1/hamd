'use client';

import { motion } from 'framer-motion';
import { Lock, Unlock, BookOpen, Star, GraduationCap, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const chapters = [
  // Free Chapters (1-20)
  { title: 'Words', isFree: true },
  { title: 'Number', isFree: true },
  { title: 'Pronouns', isFree: true },
  { title: 'Prepositions', isFree: true },
  { title: 'Adverb of time and place', isFree: true },
  { title: 'Demonstrative Pronoun', isFree: true },
  { title: 'Relative Pronouns', isFree: true },
  { title: 'Interrogative Pronouns', isFree: true },
  { title: 'Possessive Phrase', isFree: true },
  { title: 'Descriptive Phrase', isFree: true },
  { title: 'Declension of a Noun', isFree: true },
  { title: 'Feminine Gender', isFree: true },
  { title: 'Noun of Place and Time', isFree: true },
  { title: 'Noun of Instrument', isFree: true },
  { title: 'Noun of Pre-eminence', isFree: true },
  { title: 'Nominal Sentence', isFree: true },
  { title: 'Verb', isFree: true },
  { title: 'Verbal Sentence', isFree: true },
  { title: 'The Imperative 1', isFree: true },
  { title: 'The Imperative 2', isFree: true },
  // Premium Chapters
  { title: 'Conditional Sentences', isFree: false },
  { title: 'Inna and its Sisters', isFree: false },
  { title: 'Kaana and its Sisters', isFree: false },
  { title: 'Present Tense and Consonant Verbs', isFree: false },
  { title: 'Imperfect Tense', isFree: false },
  { title: 'Imperfect Tense 2', isFree: false },
  { title: 'Imperfect Tense 3', isFree: false },
  { title: 'Imperfect Tense 4', isFree: false },
  { title: 'Past Continuous', isFree: false },
  { title: 'Moods of the Imperfect Tense 1', isFree: false },
  { title: 'Moods of the Imperfect Tense 2', isFree: false },
  { title: 'Transitive and Intransitive Verbs', isFree: false },
  { title: 'Past Passive Verb', isFree: false },
  { title: 'Imperfect Passive Verb', isFree: false },
  { title: 'Verbs with Hamzah', isFree: false },
  { title: 'Weak Verbs', isFree: false },
  { title: 'Weak Verbs 2', isFree: false },
  { title: 'Weak Verbs 3', isFree: false },
  { title: 'Doubly Weak Verb', isFree: false },
  { title: 'Double Lettered Verbs', isFree: false },
  { title: 'Verbs with Fixed Prepositions', isFree: false },
  { title: 'Absolute Negation', isFree: false },
  { title: 'Triliteral Derived Verb Forms', isFree: false },
  { title: 'Form 2', isFree: false },
  { title: 'Form 3', isFree: false },
  { title: 'Form 4', isFree: false },
  { title: 'Form 5', isFree: false },
  { title: 'Form 6', isFree: false },
  { title: 'Form 7', isFree: false },
  { title: 'Form 8', isFree: false },
  { title: 'Form 9', isFree: false },
  { title: 'Form 10', isFree: false },
  { title: 'Form 11', isFree: false },
  { title: '4 Lettered Verbs (Form 12)', isFree: false },
  { title: 'Derived Forms of 4 Lettered Verbs (Forms 13, 14, 15)', isFree: false },
  { title: 'Exception', isFree: false },
  { title: 'Double Emphasis', isFree: false },
  { title: 'Active Participle', isFree: false },
  { title: 'Passive Participle', isFree: false },
  { title: 'Verbal Noun', isFree: false },
  { title: 'Substitute', isFree: false },
  { title: 'Accusative', isFree: false },
  { title: 'Accusative 2', isFree: false },
  { title: 'Particles of Conjunction', isFree: false },
  { title: 'Interjection, Vocative, and Other Particles of Interjection', isFree: false },
  { title: 'Adjectives', isFree: false },
  { title: 'Elative', isFree: false },
  { title: 'More Numbers', isFree: false },
  { title: 'Five Magnified Nouns', isFree: false },
  { title: 'Various Unorthodox Verbs', isFree: false },
];

export default function CurriculumPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div {...fadeIn}>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Complete Arabic Curriculum</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Master Arabic through our comprehensive 70-lesson journey, carefully designed to build your understanding step by step.
              </p>
              <div className="flex items-center justify-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <Unlock className="w-5 h-5 text-gold-600" />
                  <span className="text-gray-600">20 Free Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-gold-600" />
                  <span className="text-gray-600">50 Premium Lessons</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Curriculum Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.title}
                  className={`bg-white rounded-xl p-6 shadow-lg border-2 ${
                    chapter.isFree ? 'border-gold-200' : 'border-gray-100'
                  }`}
                  {...fadeIn}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Chapter {index + 1}</span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1">{chapter.title}</h3>
                    </div>
                    {chapter.isFree ? (
                      <div className="bg-gold-100 p-2 rounded-lg">
                        <Unlock className="w-5 h-5 text-gold-600" />
                      </div>
                    ) : (
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              className="bg-gold-500 rounded-2xl p-12 shadow-lg text-white"
              {...fadeIn}
            >
              <h2 className="text-4xl font-bold mb-6">Unlock All 70 Lessons</h2>
              <p className="text-xl mb-8 opacity-90">
                Get lifetime access to our complete curriculum for just £19.99. No monthly fees, no hidden costs.
              </p>
              <button
                onClick={() => window.location.href = '/auth/signup'}
                className="bg-white text-gold-600 text-lg px-8 py-3 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 