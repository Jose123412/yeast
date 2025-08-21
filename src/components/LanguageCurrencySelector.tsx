import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'ARS', symbol: '$', name: 'Peso Argentino' },
  { code: 'BRL', symbol: 'R$', name: 'Real Brasileiro' },
];

const LanguageCurrencySelector: React.FC = () => {
  const { currentLanguage, currentCurrency, setLanguage, setCurrency } = useLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const currentLang = languages.find(lang => lang.code === currentLanguage);
  const currentCurr = currencies.find(curr => curr.code === currentCurrency);

  return (
    <div className="flex items-center space-x-4">
      {/* Language Selector */}
      <div className="relative">
        <button
          onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200"
        >
          <Globe size={16} className="text-gray-500" />
          <span className="text-sm font-medium">{currentLang?.flag} {currentLang?.code.toUpperCase()}</span>
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
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Currency Selector */}
      <div className="relative">
        <button
          onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
          className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200"
        >
          <DollarSign size={16} className="text-gray-500" />
          <span className="text-sm font-medium">{currentCurr?.code}</span>
          <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${showCurrencyDropdown ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {showCurrencyDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            >
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => {
                    setCurrency(curr.code);
                    setShowCurrencyDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                    currentCurrency === curr.code ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{curr.code}</span>
                    <span className="text-sm text-gray-500">{curr.name}</span>
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

export default LanguageCurrencySelector;