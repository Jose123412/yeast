import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  preferences: boolean;
}

interface CookieContextType {
  cookiePreferences: CookiePreferences | null;
  showBanner: boolean;
  acceptAllCookies: () => void;
  rejectAllCookies: () => void;
  updateCookiePreferences: (preferences: CookiePreferences) => void;
  resetCookiePreferences: () => void;
  hideBanner: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

interface CookieProviderProps {
  children: ReactNode;
}

const COOKIE_CONSENT_KEY = 'lab-patagonia-cookie-consent';
const COOKIE_CONSENT_DATE_KEY = 'lab-patagonia-cookie-consent-date';
const SIX_MONTHS_MS = 6 * 30 * 24 * 60 * 60 * 1000; // 6 months in milliseconds

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const checkCookieConsent = () => {
      const savedPreferences = localStorage.getItem(COOKIE_CONSENT_KEY);
      const consentDate = localStorage.getItem(COOKIE_CONSENT_DATE_KEY);
      
      if (savedPreferences && consentDate) {
        const consentTimestamp = parseInt(consentDate);
        const now = Date.now();
        
        // Check if 6 months have passed
        if (now - consentTimestamp > SIX_MONTHS_MS) {
          // Reset consent after 6 months
          localStorage.removeItem(COOKIE_CONSENT_KEY);
          localStorage.removeItem(COOKIE_CONSENT_DATE_KEY);
          setShowBanner(true);
        } else {
          // Load saved preferences
          setCookiePreferences(JSON.parse(savedPreferences));
          setShowBanner(false);
        }
      } else {
        // No consent found, show banner
        setShowBanner(true);
      }
    };

    checkCookieConsent();
  }, []);

  const saveCookiePreferences = (preferences: CookiePreferences) => {
    setCookiePreferences(preferences);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, Date.now().toString());
    setShowBanner(false);
  };

  const acceptAllCookies = () => {
    const preferences: CookiePreferences = {
      essential: true,
      analytics: true,
      preferences: true,
    };
    saveCookiePreferences(preferences);
  };

  const rejectAllCookies = () => {
    const preferences: CookiePreferences = {
      essential: true, // Essential cookies cannot be rejected
      analytics: false,
      preferences: false,
    };
    saveCookiePreferences(preferences);
  };

  const updateCookiePreferences = (preferences: CookiePreferences) => {
    saveCookiePreferences(preferences);
  };

  const resetCookiePreferences = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_CONSENT_DATE_KEY);
    setCookiePreferences(null);
    setShowBanner(true);
  };

  const hideBanner = () => {
    setShowBanner(false);
  };

  const value: CookieContextType = {
    cookiePreferences,
    showBanner,
    acceptAllCookies,
    rejectAllCookies,
    updateCookiePreferences,
    resetCookiePreferences,
    hideBanner,
  };

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};