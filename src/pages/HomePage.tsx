import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PriorityAreas from '../components/PriorityAreas';
import Publications from '../components/Publications';
import LabDimensions from '../components/LabDimensions';
import News from '../components/News';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

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

export default HomePage;