'use client';

import { useState } from 'react';
import { useVocabulary } from '@/lib/hooks/useVocabulary';
import { motion } from 'framer-motion';
import { Search, Book, Filter } from 'lucide-react';

export default function VocabularyPage() {
  const { vocabulary } = useVocabulary();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Get unique word types
  const wordTypes = Array.from(new Set(vocabulary.map(word => word.type)));

  // Filter vocabulary based on search and type
  const filteredVocabulary = vocabulary.filter(word => {
    const matchesSearch = searchTerm === '' || 
      word.arabic.includes(searchTerm) ||
      word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.transliteration.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = !selectedType || word.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Vocabulary Bank</h1>
          <p className="text-gray-600">
            Review all the Arabic words you{"'"}ve learned from completed chapters.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search words in Arabic, English, or transliteration..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Type Filter */}
            <div className="flex-shrink-0">
              <select
                value={selectedType || ''}
                onChange={(e) => setSelectedType(e.target.value || null)}
                className="w-full md:w-40 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="">All Types</option>
                {wordTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Vocabulary Grid */}
        {filteredVocabulary.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVocabulary.map((word, index) => (
              <motion.div
                key={word.arabic + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm">
                    {word.type}
                  </span>
                  <span className="text-sm text-gray-500">
                    Chapter {word.chapterId}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl text-gold-600">{word.arabic}</div>
                  <div className="text-sm text-gray-500">{word.transliteration}</div>
                  <div className="text-gray-900">{word.english}</div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Book className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No words found</h3>
            <p className="text-gray-600">
              {vocabulary.length === 0 
                ? "Complete chapters to add words to your vocabulary bank!"
                : "Try adjusting your search or filters."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 