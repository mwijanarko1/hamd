'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, PenLine, BookText, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { BlogPost } from '../lib/blogData';
import { calculateReadingTime, formatDate } from '../lib/blogUtils';

const iconMap = {
  'BookText': BookText,
  'Lightbulb': Lightbulb,
} as const;

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function BlogContent({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap] || BookText;
    return <Icon className="w-12 h-12 text-gold-500" />;
  };

  return (
    <>
      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.title}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-48 bg-gold-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {getIcon(post.icon)}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{calculateReadingTime(post.content)}</span>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-gold-600 hover:text-gold-700 font-medium flex items-center gap-1"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-16"
              {...fadeIn}
            >
              <div className="inline-block p-4 bg-gold-100 rounded-full mb-6">
                <PenLine className="w-8 h-8 text-gold-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Our team is working on creating valuable content to help you on your Arabic learning journey. Check back soon!
              </p>
            </motion.div>
          )}

          {/* Newsletter Signup */}
          <motion.div 
            className="mt-16 bg-white rounded-2xl p-12 shadow-lg text-center"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get notified when we publish new articles and learning resources.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
              <button className="bg-gold-500 text-white px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 