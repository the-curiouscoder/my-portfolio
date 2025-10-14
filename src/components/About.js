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
              Fist of all, thank you for giviong me this oppertunity to introduce myself .My name is Gullraiz Haider - a passionate web development learner focused on the MERN stack (MongoDB, Express, React, Node.js). <br/>
I enjoy creating simple yet functional web applications and building projects to continuously improve my skills.<br/>

While my core strengths are in frontend design (HTML, CSS, JavaScript, React), I am actively learning backend development to become a full-stack developer.<br/>

I also provide support services like content rewriting, proofreading, and data entry/file conversion to offer clients fast and reliable help beyond coding. <br/>
My goal is to gain real-world experience, deliver high-quality work, and grow professionally as a developer.            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center cyber-card p-4 rounded-lg">
                <div className="text-3xl font-bold text-cyber-gold mb-2">3+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center cyber-card p-4 rounded-lg">
                <div className="text-3xl font-bold text-cyber-cyan mb-2">6+ Months</div>
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