'use client';

import { motion } from 'framer-motion';
import { 
  User, Globe, Shield, Moon, Volume2, 
  Mail, Key, Smartphone, Eye, Languages, 
  BookOpen, MessageSquare, Clock
} from 'lucide-react';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '@/lib/contexts/AuthContext';
import { useMasterKey } from '@/lib/contexts/MasterKeyContext';

interface AccountSettings {
  email: string;
  name: string;
  phone?: string;
}

interface PreferenceSettings {
  difficulty: string;
  learningSpeed: string;
  interfaceLanguage: string;
  theme: string;
}

interface PrivacySettings {
  profileVisibility: string;
  showProgress: boolean;
  showActivity: boolean;
}

interface MasterKeySettings {
  unlocked: boolean;
}

interface Settings {
  account: AccountSettings;
  preferences: PreferenceSettings;
  privacy: PrivacySettings;
  masterKey?: MasterKeySettings;
}

const difficultyLevels = ['beginner', 'intermediate', 'advanced'];
const learningSpeedOptions = ['relaxed', 'normal', 'intensive'];
const languages = ['English', 'Arabic', 'French', 'Spanish'];
const themes = ['light', 'dark', 'system'];

export default function SettingsPage() {
  const { user } = useContext(AuthContext);
  const { isUnlocked, unlockAll } = useMasterKey();
  const [masterKeyInput, setMasterKeyInput] = useState('');

  const [settings, setSettings] = useState<Settings>({
    account: {
      email: user?.email || '',
      name: user?.displayName || 'Guest',
      phone: ''
    },
    preferences: {
      difficulty: 'intermediate',
      learningSpeed: 'normal',
      interfaceLanguage: 'English',
      theme: 'light'
    },
    privacy: {
      profileVisibility: 'public',
      showProgress: true,
      showActivity: true
    },
    masterKey: {
      unlocked: isUnlocked
    }
  });
  const [currentSection, setCurrentSection] = useState('account');

  // Update settings when master key status changes
  useEffect(() => {
    setSettings(prev => ({
      ...prev,
      masterKey: {
        unlocked: isUnlocked
      }
    }));
  }, [isUnlocked]);

  const updateSetting = (category: keyof Settings, setting: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  const handleSubmitMasterKey = () => {
    if (masterKeyInput === 'ALHAMDULILLAH') {
      unlockAll();
      alert('All lessons have been unlocked! Alhamdulillah!');
      setMasterKeyInput(''); // Clear input after successful unlock
    } else {
      alert('Incorrect master key code. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <nav className="space-y-1">
              {[
                { id: 'account', name: 'Account', icon: User },
                { id: 'preferences', name: 'Learning Preferences', icon: BookOpen },
                { id: 'privacy', name: 'Privacy & Security', icon: Shield },
                { id: 'masterKey', name: 'Master Key', icon: Key }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`
                    w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg
                    ${currentSection === item.id 
                      ? 'bg-gold-50 text-gold-500' 
                      : 'text-gray-600 hover:bg-gray-50'}
                  `}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Content */}
          <div className="md:col-span-3">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-sm p-6"
            >
              {/* Account Settings */}
              {currentSection === 'account' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          value={settings.account.email}
                          onChange={(e) => updateSetting('account', 'email', e.target.value)}
                          className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
                        />
                        <button className="px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600">
                          Update
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={settings.account.name}
                        onChange={(e) => updateSetting('account', 'name', e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={settings.account.phone}
                        onChange={(e) => updateSetting('account', 'phone', e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>

                    <div>
                      <button className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Learning Preferences */}
              {currentSection === 'preferences' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Learning Preferences</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Difficulty Level
                      </label>
                      <select
                        value={settings.preferences.difficulty}
                        onChange={(e) => updateSetting('preferences', 'difficulty', e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        {difficultyLevels.map((level) => (
                          <option key={level} value={level}>
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Learning Speed
                      </label>
                      <select
                        value={settings.preferences.learningSpeed}
                        onChange={(e) => updateSetting('preferences', 'learningSpeed', e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        {learningSpeedOptions.map((speed) => (
                          <option key={speed} value={speed}>
                            {speed.charAt(0).toUpperCase() + speed.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Interface Language
                      </label>
                      <select
                        value={settings.preferences.interfaceLanguage}
                        onChange={(e) => updateSetting('preferences', 'interfaceLanguage', e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        {languages.map((language) => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Theme
                      </label>
                      <select
                        value={settings.preferences.theme}
                        onChange={(e) => updateSetting('preferences', 'theme', e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        {themes.map((theme) => (
                          <option key={theme} value={theme}>
                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy & Security */}
              {currentSection === 'privacy' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Privacy & Security</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Profile Visibility
                      </label>
                      <select
                        value={settings.privacy.profileVisibility}
                        onChange={(e) => updateSetting('privacy', 'profileVisibility', e.target.value)}
                        className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        <option value="public">Public</option>
                        <option value="friends">Friends Only</option>
                        <option value="private">Private</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Eye className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-700">Show Progress to Others</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.privacy.showProgress}
                          onChange={(e) => updateSetting('privacy', 'showProgress', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-700">Show Activity Status</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.privacy.showActivity}
                          onChange={(e) => updateSetting('privacy', 'showActivity', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                      </label>
                    </div>

                    <div className="pt-4">
                      <button className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Master Key Settings */}
              {currentSection === 'masterKey' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Master Key</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Enter Master Key Code
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          placeholder="Enter the master key code"
                          value={masterKeyInput}
                          onChange={(e) => setMasterKeyInput(e.target.value)}
                          className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleSubmitMasterKey();
                            }
                          }}
                        />
                        <button
                          onClick={handleSubmitMasterKey}
                          className="px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors"
                          disabled={isUnlocked}
                        >
                          Enter Code
                        </button>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className={`p-4 rounded-lg ${isUnlocked ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <p className="text-sm">
                          {isUnlocked 
                            ? '✅ All lessons are unlocked! Alhamdulillah!' 
                            : 'Enter the correct master key code to unlock all lessons.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 