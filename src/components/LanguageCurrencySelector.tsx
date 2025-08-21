import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'es', name: 'Español', flag: 'es' },
  { code: 'en', name: 'English', flag: 'us' },
  { code: 'fr', name: 'Français', flag: 'fr' },
  { code: 'pt', name: 'Português', flag: 'br' },
];

const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="flex items-center">
      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200"
        >
          <Globe size={16} className="text-gray-500" />
          <span className="flex items-center space-x-2">
            <span className={`fi fi-${currentLang?.flag} w-4 h-3`}></span>
            <span className="text-sm font-medium">{currentLang?.code.toUpperCase()}</span>
          </span>
          <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {showLanguageDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setShowLanguageDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                    currentLanguage === lang.code ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`fi fi-${lang.flag} w-5 h-4`}></span>
                    <span className="font-medium">{lang.name}</span>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LanguageSelector;