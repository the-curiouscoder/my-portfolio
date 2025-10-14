// src/App.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechnicalExpertise from './components/TechnicalExpertise';
import SkillsProgress from './components/SkillsProgress';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import CustomCursor from './components/CustomCursor';
import FloatingParticles from './components/FloatingParticles';
import MatrixBackground from './components/MatrixBackground';
import Loader from './components/Loader'; // ✅ import your Loader


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dark mode detection
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (event.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });

    // Loading effect (hide after 5 sec)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // ✅ show loader first
  }

  return (
    <div className="App bg-cyber-dark text-white min-h-screen">
      {/* Matrix Background Effect */}
      <div className="matrix-bg"></div>
      
      <Header />
      <Hero />
      <TechnicalExpertise />
      <SkillsProgress />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <CustomCursor />    
      <FloatingParticles /> 
      <MatrixBackground />
    
      <div className="particles fixed inset-0 pointer-events-none z-0">
        <div className="particle" style={{left: '10%', top: '20%', width: '4px', height: '4px', animationDelay: '0s'}}></div>
        <div className="particle" style={{left: '20%', top: '80%', width: '6px', height: '6px', animationDelay: '1s'}}></div>
        <div className="particle" style={{left: '60%', top: '30%', width: '3px', height: '3px', animationDelay: '2s'}}></div>
        <div className="particle" style={{left: '80%', top: '70%', width: '5px', height: '5px', animationDelay: '1.5s'}}></div>
        <div className="particle" style={{left: '90%', top: '10%', width: '4px', height: '4px', animationDelay: '0.5s'}}></div>
      </div>
    </div>
  );
};

export default App;
