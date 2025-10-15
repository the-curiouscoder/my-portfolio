// src/components/About.js
import React from 'react';
import logo from '../assets/logo2.jpg'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-cyber-gray">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-4xl font-bold mb-8 gradient-text font-cyber">About Me</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Gullraiz Haider here. I'm a passionate web development learner specializing in the MERN stack (MongoDB, Express, React, Node.js). I focus on building clean, functional web applications and continuously improving my skills through project work. My core strengths lie in frontend development—HTML, CSS, JavaScript, and React—while I actively pursue backend mastery to become a comprehensive full-stack developer. Additionally, I support clients with reliable, fast solutions through content rewriting, proofreading, and data services. My goal is to gain real-world experience, deliver high-quality work, and grow professionally as a developer.
               </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center cyber-card p-4 rounded-lg">
                <div className="text-3xl font-bold text-cyber-gold mb-2">4+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center cyber-card p-4 rounded-lg">
                <div className="text-3xl font-bold text-cyber-cyan mb-2">1+ Years</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            <div>
              <img className="w-full h-100 bg-gradient-to-br from-cyber-gold/20 to-cyber-cyan/20 rounded-lg flex items-center justify-center cyber-card" src={logo} alt="hj" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;