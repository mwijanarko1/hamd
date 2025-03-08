'use client';

import { motion } from 'framer-motion';
import { Book, Bookmark, Search, Filter, ChevronDown, FolderOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';
import { libraryService } from '@/lib/services/libraryService';
import { LibraryContent, Topic } from '@/lib/types/library';
import { LoadingSpinner } from '@/components/LoadingSpinner';

export default function LibraryPage() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All Content');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [libraryContent, setLibraryContent] = useState<LibraryContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLibraryContent = async () => {
      if (!user) return;
      try {
        const content = await libraryService.getUserLibraryContent(user.uid);
        setLibraryContent(content);
      } catch (error) {
        console.error('Error fetching library content:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLibraryContent();
  }, [user]);

  const handleBookmarkToggle = async (topicId: string) => {
    if (!user) return;
    try {
      await libraryService.toggleBookmark(user.uid, topicId);
      // Refresh library content
      const content = await libraryService.getUserLibraryContent(user.uid);
      setLibraryContent(content);
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!libraryContent) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <Book className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Unable to load library</h3>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  const filteredTopics = libraryContent.topics.filter((topic: Topic) => 
    (selectedCategory === 'All Content' || topic.category === selectedCategory) &&
    (topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     topic.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Learning Library</h1>
          <p className="mt-2 text-gray-600">Explore additional lessons and resources</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full md:w-auto px-4 py-2 bg-white border border-gray-200 rounded-lg flex items-center justify-between hover:bg-gray-50"
              >
                <Filter className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-700">{selectedCategory}</span>
                <ChevronDown className="w-5 h-5 text-gray-400 ml-2" />
              </button>

              {showFilters && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10 py-2">
                  {libraryContent.categories.map((category: string) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowFilters(false);
                      }}
                      className={`
                        w-full px-4 py-2 text-left hover:bg-gray-50
                        ${selectedCategory === category ? 'text-gold-500' : 'text-gray-700'}
                      `}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic: Topic) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Topic Card */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{topic.thumbnail}</div>
                  <button 
                    onClick={() => handleBookmarkToggle(topic.id)}
                    className={`${topic.isBookmarked ? 'text-gold-500' : 'text-gray-400'} hover:text-gold-500`}
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {topic.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {topic.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">
                      {topic.lessons.length} lessons
                    </span>
                    {topic.progress !== undefined && topic.progress > 0 && (
                      <div className="mt-1">
                        <div className="h-1 w-20 bg-gray-100 rounded-full">
                          <div 
                            className="h-1 bg-gold-500 rounded-full" 
                            style={{ width: `${topic.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <Link 
                    href={`/dashboard/library/${topic.id}`}
                    className="flex items-center text-gold-500 hover:text-gold-600"
                  >
                    <FolderOpen className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">View Lessons</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTopics.length === 0 && (
          <div className="text-center py-12">
            <Book className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No topics found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find what you're looking for
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 