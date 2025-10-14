// components/TechnicalExpertise.js
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TechnicalExpertise = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const expertiseData = [
    {
      icon: 'fas fa-code',
      title: 'Frontend Development',
      description: 'Expert in React, HTML , JavaScript , and modern CSS frameworks. Creating responsive and interactive user interfaces with cutting-edge technologies.',
      skills: ['React ,', 'Tailwind ,' , 'Bootstrap'],
      progress: 'w-11/12'
    },
    {
      icon: 'fas fa-server',
      title: 'Content & Writing Services',
      description: 'I help refine and rewrite your text using modern AI tools + manual editing for a natural, polished finish. Whether it’s blogs, essays, emails, or business documents, I ensure your content is clear, professional, and ready to publish.',
      skills: ['Content Rewriting ,', 'Proofreading & Editing ,', 'Resume / CV Design (Basics Templates)'],
      progress: 'w-5/6'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Data Entry & File Conversion',
      description: 'I provide fast and accurate data entry services in Excel and Word. I also handle file conversions (Word, PDF, Excel) and basic internet research. My focus is on accuracy, formatting, and timely delivery, so you can save time and focus on your main work.',
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