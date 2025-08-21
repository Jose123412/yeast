import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CookieProvider } from './context/CookieContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookiePolicy from './pages/CookiePolicy';
import About from './pages/About';
import News from './pages/News';
import Team from './pages/Team';
import Publications from './pages/Publications';

const AppContent: React.FC = () => {
  const { isLoading } = useLanguage();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<Team />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
};

function App() {
  return (
    <LanguageProvider>
      <CookieProvider>
        <AppContent />
      </CookieProvider>
    </LanguageProvider>
  );
}

export default App;