// components/TechnicalExpertise.js
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TechnicalExpertise = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const expertiseData = [
    {
      icon: 'fas fa-code',
      title: 'Frontend Development',
      description: 'Expert in React, HTML, JavaScript, and modern CSS frameworks. I create responsive, interactive, and visually appealing user interfaces using cutting-edge technologies. With a focus on clean code and user experience, I aim to build scalable solutions that bring ideas to life and perform seamlessly across all devices.',
      skills: ['React ,', 'Tailwind ,' , 'Bootstrap'],
      progress: 'w-11/12'
    },
    {
      icon: 'fas fa-server',
      title: 'Content & Writing Services',
      description: 'I refine and rewrite text using modern AI tools along with manual editing to deliver a natural, polished finish. From blogs and essays to emails and business documents, I make sure your content is clear, professional, and ready to publish.',
      skills: ['Content Rewriting ,', 'Proofreading & Editing ,', 'Resume / CV Design (Basics Templates)'],
      progress: 'w-5/6'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Data Entry & File Services',
      description: 'I provide fast and accurate data entry in Excel and Word, along with file conversions (Word, PDF, Excel) and basic internet research. My focus is on accuracy, proper formatting, and timely delivery—helping you save time and concentrate on your core work.',
      skills: ['PDF/Word to Excel or Word ,', 'Copy-paste jobs  ,', 'Web research ,', 'Excel formatting'],
      progress: 'w-10/12'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 gradient-text font-cyber">
          TECHNICAL EXPERTISE
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyber-gold to-cyber-cyan mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <ExpertiseCard 
              key={index} 
              {...item} 
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseCard = ({ icon, title, description, skills, progress, isVisible, delay }) => {
  return (
    <div 
      className={`cyber-card p-8 rounded-lg group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-5xl mb-6 text-cyber-cyan group-hover:text-cyber-gold transition-all duration-300 transform group-hover:scale-110">
        <i className={icon}></i>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-cyber-gold font-cyber">{title}</h3>
      
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-gradient-to-r from-cyber-gold/20 to-cyber-cyan/20 px-3 py-1 rounded-full text-sm border border-cyber-gold/30"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="h-2 bg-cyber-gray rounded-full overflow-hidden">
        <div className={`skill-progress ${progress} transition-all duration-2000 delay-500`}></div>
      </div>
    </div>
  );
};

export default TechnicalExpertise;