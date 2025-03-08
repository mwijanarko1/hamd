'use client';

import { motion } from 'framer-motion';
import { Lock, Unlock, MessageCircle, Brain, Rocket, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const lessons = [
  {
    title: 'Arabic Survival Phrases for Everyday Life',
    description: 'Learn essential expressions for greetings, asking for directions, ordering food, shopping, and basic small talk. Mastering these phrases will give you confidence in real-life interactions.',
    icon: MessageCircle,
    isFree: true
  },
  {
    title: 'The 100 Most Common Verbs in Quranic Arabic',
    description: 'A deep dive into the most frequently used verbs, covering their conjugation, usage, and common phrases. This lesson ensures you can express actions confidently in different tenses.',
    icon: Brain,
    isFree: true
  },
  {
    title: 'Mastering Arabic Pronunciation and Accent',
    description: 'Techniques to train your tongue to pronounce Arabic sounds naturally. This includes listening exercises, tongue twisters, and native speaker comparisons to help refine your accent.',
    icon: MessageCircle,
    isFree: true
  },
  {
    title: 'Real-Life Conversations: Simulated Dialogue Practice',
    description: 'Interactive scripts where learners practice conversations in scenarios like introducing yourself, visiting the doctor, negotiating prices, or making a phone call—helping them think and respond quickly.',
    icon: Brain,
    isFree: true
  },
  {
    title: 'The Art of Asking Questions in Arabic',
    description: "Fluency isn't just about speaking—it's about keeping conversations going. This lesson teaches how to ask engaging \"why,\" \"how,\" and \"what\" questions to sound more natural and interactive.",
    icon: MessageCircle,
    isFree: true
  },
  {
    title: 'Storytelling in Arabic: Expressing Ideas & Narrating Events',
    description: 'Learn how to tell stories, describe past experiences, and share opinions using proper connectors and transitions. This enhances fluency by teaching natural flow and structure in speech.',
    icon: Brain,
    isFree: false
  },
  {
    title: 'Arabic Idioms and Expressions for Natural Speech',
    description: 'A collection of commonly used Arabic idioms, proverbs, and slang that make conversations sound more authentic—just like how native speakers talk.',
    icon: MessageCircle,
    isFree: false
  },
  {
    title: 'Arabic for Travel & Social Situations',
    description: 'A practical lesson focused on travel-related conversations (booking hotels, using transport, asking for help) and social gatherings (making friends, engaging in small talk, and expressing politeness).',
    icon: Brain,
    isFree: false
  },
  {
    title: 'Thinking in Arabic: Breaking the Translation Habit',
    description: 'Techniques and exercises to stop thinking in English first and start forming sentences directly in Arabic, which is the key to speaking fluently and quickly.',
    icon: Rocket,
    isFree: false
  },
  {
    title: 'Speed Conversations: How to Respond Quickly in Arabic',
    description: 'Training exercises to improve reaction time in conversations by practicing fast-response drills, role-playing, and timed speaking challenges to help learners express thoughts without hesitation.',
    icon: Brain,
    isFree: false
  }
];

export default function ExtracurricularPage() {
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
              <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-semibold">Accelerate Your Learning</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Extracurricular Lessons</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                10 specialized lessons designed to accelerate conversational fluency in Arabic. Master practical, real-world speaking skills.
              </p>
              <div className="flex items-center justify-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <Unlock className="w-5 h-5 text-gold-600" />
                  <span className="text-gray-600">5 Free Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-gold-600" />
                  <span className="text-gray-600">5 Premium Lessons</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Lessons Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={lesson.title}
                  className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                    lesson.isFree ? 'border-gold-200' : 'border-gray-100'
                  }`}
                  {...fadeIn}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${lesson.isFree ? 'bg-gold-100' : 'bg-gray-100'}`}>
                      <lesson.icon className={`w-6 h-6 ${lesson.isFree ? 'text-gold-600' : 'text-gray-400'}`} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">Lesson {index + 1}</h3>
                        {lesson.isFree ? (
                          <div className="bg-gold-100 px-3 py-1 rounded-full">
                            <span className="text-sm text-gold-600 font-medium">Free</span>
                          </div>
                        ) : (
                          <div className="bg-gray-100 px-3 py-1 rounded-full">
                            <span className="text-sm text-gray-500 font-medium">Premium</span>
                          </div>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{lesson.title}</h4>
                      <p className="text-gray-600">{lesson.description}</p>
                    </div>
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
              <h2 className="text-4xl font-bold mb-6">Unlock All Extracurricular Lessons</h2>
              <p className="text-xl mb-8 opacity-90">
                Get lifetime access to all extracurricular lessons as part of our complete package for just £19.99.
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