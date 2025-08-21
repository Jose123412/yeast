import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CookieProvider } from './context/CookieContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PriorityAreas from './components/PriorityAreas';
import Publications from './components/Publications';
import LabDimensions from './components/LabDimensions';
import News from './components/News';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookiePolicy from './pages/CookiePolicy';
import About from './pages/About';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PriorityAreas />
        <Publications />
        <LabDimensions />
        <News />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

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