'use client';

import { motion } from 'framer-motion';

export default function BlogHero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeIn}>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Arabic Learning Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and stories to enhance your Arabic learning journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 