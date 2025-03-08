'use client';

import { motion } from 'framer-motion';
import { BookOpen, Star, GraduationCap, Award, ArrowRight, Heart, Target, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
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
              <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us – The Story Behind Hamd</h1>
              <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {/* A New Way to Learn Arabic */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                {...fadeIn}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gold-100 p-3 rounded-xl">
                    <BookOpen className="w-6 h-6 text-gold-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">A New Way to Learn Arabic</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Learning Arabic should be exciting, not exhausting. At <span className="font-bold">Hamd</span>, we've created a unique learning experience designed to keep you engaged, motivated, and progressing step by step. Whether you're a beginner or someone looking to refine your skills, we make Arabic learning <span className="font-bold">structured, enjoyable, and effective</span>.
                </p>
              </motion.div>

              {/* Our Story */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                {...fadeIn}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gold-100 p-3 rounded-xl">
                    <Heart className="w-6 h-6 text-gold-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Story: Frustration Led to Innovation</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Hamd was born out of frustration. Too many Arabic courses focus on memorization without application, leaving students stuck in a cycle of forgetting what they've learned. We knew there had to be a better way. So, we set out to build a system that <span className="font-bold">guides you through Arabic like an adventure</span>, making learning feel like a journey rather than a task.
                </p>
              </motion.div>

              {/* Journey-Based Approach */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                {...fadeIn}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gold-100 p-3 rounded-xl">
                    <Target className="w-6 h-6 text-gold-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">A Journey-Based Approach</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  What if learning Arabic felt like leveling up in a game? That's the approach we took. With <span className="font-bold">70 structured lessons</span>, you progress step by step, unlocking new knowledge and reinforcing old lessons as you go. Our <span className="font-bold">Vocabulary Bank</span> ensures you never lose track of what you've learned, making retention effortless.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-cream-50 p-6 rounded-xl">
                    <div className="text-4xl font-bold text-gold-600 mb-2">70</div>
                    <div className="text-gray-600">Structured Lessons</div>
                  </div>
                  <div className="bg-cream-50 p-6 rounded-xl">
                    <div className="text-4xl font-bold text-gold-600 mb-2">20+</div>
                    <div className="text-gray-600">Free Lessons</div>
                  </div>
                  <div className="bg-cream-50 p-6 rounded-xl">
                    <div className="text-4xl font-bold text-gold-600 mb-2">∞</div>
                    <div className="text-gray-600">Lifetime Access</div>
                  </div>
                </div>
              </motion.div>

              {/* Our Mission */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg"
                {...fadeIn}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gold-100 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-gold-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission: Make Arabic Learning Accessible and Engaging</h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our mission is simple: <span className="font-bold">to make Arabic learning engaging, structured, and accessible to everyone.</span> We believe that no one should struggle with disjointed resources or outdated methods. That's why we offer <span className="font-bold">the first 20 lessons and 5 extra lessons for free</span>, allowing you to experience our approach before making any commitment.
                </p>
              </motion.div>

              {/* Why Hamd is Different & Vision */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  {...fadeIn}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Hamd is Different</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Unlike other platforms that rely on repetitive drills, we focus on <span className="font-bold">real understanding</span>. Our lessons are carefully designed to build upon each other, making complex grammar feel natural and vocabulary stick effortlessly.
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  {...fadeIn}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We envision a future where learning Arabic is no longer seen as difficult or frustrating. Instead, it should be as <span className="font-bold">accessible and enjoyable</span> as learning any other language.
                  </p>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div 
                className="bg-gold-500 rounded-2xl p-12 shadow-lg text-center text-white"
                {...fadeIn}
              >
                <h2 className="text-4xl font-bold mb-6">Start Your Arabic Journey Today</h2>
                <p className="text-xl mb-8 opacity-90">
                  The best time to start learning Arabic was yesterday. The second-best time is today.
                </p>
                <button
                  onClick={() => window.location.href = '/auth/signup'}
                  className="bg-white text-gold-600 text-lg px-8 py-3 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200 flex items-center gap-2 mx-auto"
                >
                  Begin Your Journey <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 