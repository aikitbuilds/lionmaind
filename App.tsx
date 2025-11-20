
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ScienceSection from './components/ScienceSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import WhyUsSection from './components/WhyUsSection';
import SocialProofSection from './components/SocialProofSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-deep-blue min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ScienceSection />
        <HowItWorks />
        <PricingSection />
        <WhyUsSection />
        <SocialProofSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
