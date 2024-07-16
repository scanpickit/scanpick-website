import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import TermsOverlay from './components/Terms&Cond';
import PrivacyPolicyOverlay from './components/PrivacyPolicy';

import FooterComponent from './components/footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
  const [showTermsOverlay, setShowTermsOverlay] = useState(false);
  const [showPrivacyPolicyOverlay, setShowPrivacyPolicyOverlay] = useState(false);

  const handleOpenTermsOverlay = () => {
    setShowTermsOverlay(true);
  };

  const handleCloseTermsOverlay = () => {
    setShowTermsOverlay(false);
  };

  const handleOpenPrivacyPolicyOverlay = () => {
    setShowPrivacyPolicyOverlay(true);
  };

  const handleClosePrivacyPolicyOverlay = () => {
    setShowPrivacyPolicyOverlay(false);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs></AboutUs>
      <ContactUs />
      <FooterComponent 
        onOpenTermsOverlay={handleOpenTermsOverlay} 
        onOpenPrivacyPolicyOverlay={handleOpenPrivacyPolicyOverlay} 
      />
      
      
      {showTermsOverlay && <TermsOverlay onClose={handleCloseTermsOverlay} />}
      {showPrivacyPolicyOverlay && <PrivacyPolicyOverlay onClose={handleClosePrivacyPolicyOverlay} />}
      
    </div>
  );
}

export default App;
