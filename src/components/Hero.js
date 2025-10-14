// components/Hero.js
import pic from '../assets/gull.jpg';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg pt-20 relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 floating">
          <img 
            src={pic}
            alt="Profile" 
            className="w-48 h-48 rounded-full mx-auto object-cover profile-glow border-4 border-cyber-cyan"
          />
        </div>
        
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 font-cyber transition-all duration-1000 ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="gradient-text">Frontend</span><br />
          <span className="text-white">Developer</span>
        </h1>
        
        <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Building digital experiences that merge creativity with technology. 
          Specializing in modern web development and cyber systems.
          Learning and building modern web experiences with HTML, CSS, JavaScript, and React.

        </p>
        
        <button 
          onClick={handleConnectClick}
          className={`cyber-button px-8 py-4 rounded-lg text-black font-semibold text-lg transition-all duration-1000 delay-500 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Let's Connect
        </button>
      </div>
    </section>
  );
};

export default Hero;