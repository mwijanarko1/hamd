'use client';

import { motion } from 'framer-motion';
import { 
  User, Edit, Trophy, Book, Star, 
  Clock, Award, Users, BookOpen, GraduationCap,
  Check, X
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import { updateProfile } from 'firebase/auth';

interface UserStats {
  studyHours: number;
  wordsLearned: number;
  streakDays: number;
  rank: number;
  totalUsers: number;
  xp: number;
  level: number;
}

export default function ProfilePage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [stats, setStats] = useState<UserStats>({
    studyHours: 0,
    wordsLearned: 0,
    streakDays: 0,
    rank: 0,
    totalUsers: 0,
    xp: 0,
    level: 1
  });

  useEffect(() => {
    const fetchUserStats = async () => {
      if (user?.uid) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setStats(userDoc.data() as UserStats);
        }
      }
    };

    fetchUserStats();
  }, [user]);

  useEffect(() => {
    if (user?.displayName) {
      setNewName(user.displayName);
    }
  }, [user?.displayName]);

  const handleUpdateName = async () => {
    if (!user || !newName.trim()) return;

    try {
      await updateProfile(user, { displayName: newName.trim() });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start gap-2 mb-4">
                <div className="flex items-center gap-4">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="text-2xl font-bold text-gray-900 bg-gray-50 border border-gray-300 rounded px-2 py-1"
                        placeholder="Enter your name"
                      />
                      <button 
                        onClick={handleUpdateName}
                        className="text-green-500 hover:text-green-600"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => {
                          setIsEditing(false);
                          setNewName(user.displayName || '');
                        }}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <h1 className="text-2xl font-bold text-gray-900">{user.displayName || 'User'}</h1>
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="text-gray-400 hover:text-gold-500"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
                <div className="bg-gold-500 text-white rounded-full px-2 py-1 text-sm font-medium">
                  Level {stats.level}
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Level Progress</span>
                  <span>{stats.xp} / {(stats.level + 1) * 1000} XP</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className="bg-gold-500 rounded-full h-2 transition-all duration-300"
                    style={{ width: `${(stats.xp / ((stats.level + 1) * 1000)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-2 bg-gold-50 rounded-lg">
                  <Clock className="w-5 h-5 text-gold-500 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">{stats.studyHours}h</div>
                  <div className="text-xs text-gray-600">Study Time</div>
                </div>
                <div className="text-center p-2 bg-gold-50 rounded-lg">
                  <BookOpen className="w-5 h-5 text-gold-500 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">{stats.wordsLearned}</div>
                  <div className="text-xs text-gray-600">Words Learned</div>
                </div>
                <div className="text-center p-2 bg-gold-50 rounded-lg">
                  <Star className="w-5 h-5 text-gold-500 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">{stats.streakDays} Days</div>
                  <div className="text-xs text-gray-600">Current Streak</div>
                </div>
                <div className="text-center p-2 bg-gold-50 rounded-lg">
                  <Users className="w-5 h-5 text-gold-500 mx-auto mb-1" />
                  <div className="text-sm font-medium text-gray-900">Top {Math.round((stats.rank / stats.totalUsers) * 100)}%</div>
                  <div className="text-xs text-gray-600">Ranking</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Add achievements rendering logic here */}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {/* Add recent activity rendering logic here */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 