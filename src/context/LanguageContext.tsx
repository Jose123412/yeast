import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations: { [key: string]: { [key: string]: any } } = {};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Load saved language from localStorage or default to 'es'
    return localStorage.getItem('preferred-language') || 'es';
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load translations on mount
  useEffect(() => {
    const loadTranslations = async () => {
      const languages = ['es', 'en', 'fr', 'pt'];
      
      try {
        for (const lang of languages) {
          const module = await import(`../locales/${lang}.json`);
          translations[lang] = module.default;
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading translations:', error);
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, []);

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
    // Save language preference to localStorage
    localStorage.setItem('preferred-language', language);
  };

  const t = (key: string): string => {
    if (isLoading) return key;
    
    const keys = key.split('.');
    let value: any = translations[currentLanguage] || {};
    
    for (const k of keys) {
      value = value[k];
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found for language "${currentLanguage}"`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    isLoading,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};