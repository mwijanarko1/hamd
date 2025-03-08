'use client';

import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { BookOpen, Star, GraduationCap, Award, ArrowRight, Sparkles, Gift, PiggyBank, Brain, Clock, Lock } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useRef, ReactNode } from 'react';
import Image from 'next/image';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

const FadeInSection = ({ children, className = "" }: FadeInSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage() {
  const router = useRouter();

  const handleJoinNow = () => {
    router.push('/auth/signup');
  };

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Section 1: Arabic, But Make It Addictive */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-geometric-pattern opacity-5" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInSection className="text-left relative z-10">
                <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Experience Arabic Learning</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Arabic, But Make It Addictive</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Most language courses feel like a chore. <span className="font-bold">Hamd</span> is different. We&apos;ve designed a <span className="font-bold">70-level journey</span> where each lesson builds on the last, keeping you engaged and excited to learn more.
                </p>
                <p className="text-xl text-gray-600 mb-8">
                  Every lesson you complete <span className="font-bold">unlocks new words</span> in your personal <span className="font-bold">Vocabulary Bank</span>, making it impossible to forget what you&apos;ve learned.
                </p>
                <button
                  onClick={handleJoinNow}
                  className="bg-gold-500 text-white text-lg px-8 py-3 rounded-lg hover:bg-gold-600 hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center gap-2 relative"
                >
                  Join Now <ArrowRight className="w-5 h-5" />
                </button>
              </FadeInSection>
              <FadeInSection className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/arabic-but-make-it-addictive.png"
                    alt="Arabic Learning Journey Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-gold-600" />
                    <span className="text-lg font-bold text-gray-900">70 Levels</span>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Section 2: 20 Free Lessons */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInSection className="order-2 lg:order-1 relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-cream-50 p-6 rounded-xl shadow-lg">
                    <Gift className="w-8 h-8 text-gold-600 mb-3" />
                    <h4 className="text-lg font-bold mb-2">20 Core Lessons</h4>
                    <p className="text-gray-600">Start your journey with our carefully crafted lessons</p>
                  </div>
                  <div className="bg-cream-50 p-6 rounded-xl shadow-lg mt-8">
                    <Sparkles className="w-8 h-8 text-gold-600 mb-3" />
                    <h4 className="text-lg font-bold mb-2">5 Bonus Lessons</h4>
                    <p className="text-gray-600">Extra content to boost your learning</p>
                  </div>
                  <div className="bg-cream-50 p-6 rounded-xl shadow-lg">
                    <Brain className="w-8 h-8 text-gold-600 mb-3" />
                    <h4 className="text-lg font-bold mb-2">Think in Arabic</h4>
                    <p className="text-gray-600">Natural progression to fluency</p>
                  </div>
                  <div className="bg-cream-50 p-6 rounded-xl shadow-lg mt-8">
                    <Clock className="w-8 h-8 text-gold-600 mb-3" />
                    <h4 className="text-lg font-bold mb-2">Learn at Your Pace</h4>
                    <p className="text-gray-600">No pressure, no deadlines</p>
                  </div>
                </div>
              </FadeInSection>
              <FadeInSection className="order-1 lg:order-2 text-left">
                <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
                  <Gift className="w-4 h-4" />
                  <span className="text-sm font-semibold">Free Access</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">20 Free Lessons – No Strings Attached</h2>
                <p className="text-xl text-gray-600 mb-6">
                  We believe in <span className="font-bold">showing</span> you how powerful our method is. That&apos;s why we&apos;re giving you <span className="font-bold">the first 20 lessons of our core curriculum and 5 extra lessons—completely free.</span>
                </p>
                <p className="text-xl text-gray-600 mb-8">
                  By the time you finish these free lessons, you&apos;ll <span className="font-bold">already be thinking in Arabic</span>—and you won&apos;t want to stop.
                </p>
                <button
                  onClick={handleJoinNow}
                  className="bg-gold-500 text-white text-lg px-8 py-3 rounded-lg hover:bg-gold-600 hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                >
                  Start Free Lessons <ArrowRight className="w-5 h-5" />
                </button>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Section 3: The Best Price */}
        <section className="py-20 bg-cream-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInSection className="text-left">
                <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
                  <PiggyBank className="w-4 h-4" />
                  <span className="text-sm font-semibold">One-time Payment</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">The Best Price You&apos;ll Ever See – Forever</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Language learning platforms charge <span className="font-bold">monthly fees</span> that add up to hundreds over time. Not here.
                </p>
                <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-6xl font-bold text-gray-900">£19.99</span>
                    <span className="text-xl text-gray-600">one-time</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-gray-600">
                      <Star className="w-5 h-5 text-gold-600" />
                      <span>All 50 remaining lessons</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Star className="w-5 h-5 text-gold-600" />
                      <span>Extra content and resources</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <Star className="w-5 h-5 text-gold-600" />
                      <span>Lifetime access</span>
                    </li>
                  </ul>
                  <button
                    onClick={handleJoinNow}
                    className="bg-gold-500 text-white text-lg px-8 py-3 rounded-lg hover:bg-gold-600 hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center gap-2 w-full justify-center"
                  >
                    Lock In This Price <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </FadeInSection>
              <FadeInSection className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/libraryextra.png"
                    alt="Comprehensive Arabic Library"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <PiggyBank className="w-6 h-6 text-gold-600" />
                    <span className="text-lg font-bold text-gray-900">Save £100s</span>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Section 4: Designed for Real Progress */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInSection className="order-2 lg:order-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/natural-path.jpg"
                    alt="Natural Learning Path - Beautiful autumn forest path"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
                    <div className="text-white max-w-md">
                      <h4 className="text-2xl font-bold mb-2">Natural Learning Path</h4>
                      <p className="text-lg opacity-90">Like a path through nature, your journey to Arabic fluency unfolds naturally and beautifully</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent mix-blend-overlay" />
                </div>
              </FadeInSection>
              <FadeInSection className="order-1 lg:order-2 text-left">
                <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
                  <Brain className="w-4 h-4" />
                  <span className="text-sm font-semibold">Smart Learning</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Designed for Real Progress</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Memorizing random words won&apos;t make you fluent. That&apos;s why <span className="font-bold">Hamd</span> teaches you <span className="font-bold">the way native speakers learn</span>—step by step, with <span className="font-bold">real-world usage in mind.</span>
                </p>
                <div className="space-y-6">
                  <div className="bg-cream-50 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gold-100 p-2 rounded-lg">
                        <BookOpen className="w-6 h-6 text-gold-600" />
                      </div>
                      <h4 className="text-lg font-bold">Natural Progression</h4>
                    </div>
                    <p className="text-gray-600">Each lesson unlocks new words, phrases, and grammar naturally</p>
                  </div>
                  <div className="bg-cream-50 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gold-100 p-2 rounded-lg">
                        <Star className="w-6 h-6 text-gold-600" />
                      </div>
                      <h4 className="text-lg font-bold">Smart Vocabulary Bank</h4>
                    </div>
                    <p className="text-gray-600">Your progress is automatically saved and tracked</p>
                  </div>
                  <div className="bg-cream-50 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gold-100 p-2 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-gold-600" />
                      </div>
                      <h4 className="text-lg font-bold">Progressive Learning</h4>
                    </div>
                    <p className="text-gray-600">The more you learn, the easier it becomes</p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Section 5: Your Future Self */}
        <section className="py-20 bg-cream-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInSection className="text-left">
                <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full mb-6">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">Your Journey Begins</span>
                </div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Your Future Self Will Thank You</h2>
                <div className="space-y-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-bold mb-3 text-gray-900">One Year From Now</h4>
                    <p className="text-gray-600">
                      Imagine looking back, realizing you could have been <span className="font-bold">speaking and understanding Arabic with ease</span>—but you didn&apos;t start.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h4 className="text-xl font-bold mb-3 text-gray-900">The Alternative</h4>
                    <p className="text-gray-600">
                      You took the first step today. You made Arabic a <span className="font-bold">part of your life</span>. And now, it&apos;s second nature.
                    </p>
                  </div>
                  <div className="bg-gold-100 p-6 rounded-xl">
                    <p className="text-xl font-bold text-gold-800">
                      <span className="font-bold">That future is waiting for you.</span> You just need to take the first step.
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleJoinNow}
                  className="bg-gold-500 text-white text-lg px-8 py-3 rounded-lg hover:bg-gold-600 hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                >
                  Start Your Journey <ArrowRight className="w-5 h-5" />
                </button>
              </FadeInSection>
              <FadeInSection className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/vocabbank.png"
                    alt="Your Arabic Vocabulary Journey"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '18% center' }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-gold-600" />
                    <span className="text-lg font-bold text-gray-900">Your Success</span>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
