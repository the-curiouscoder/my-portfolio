import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechnicalExpertise from './components/TechnicalExpertise';
import SkillsProgress from './components/SkillsProgress';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


const App = () => {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);


  return (
    <div className="App bg-cyber-dark text-white min-h-screen">
      <Header />
      <Hero />
      <TechnicalExpertise />
      <SkillsProgress />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
