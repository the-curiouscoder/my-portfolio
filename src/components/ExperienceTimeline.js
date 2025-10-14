// src/components/ExperienceTimeline.js
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ExperienceTimeline = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const experiences = [
    {
      title: 'Frontend Developer',
      
      
      description:
        ['HTML / CSS / Bootstrap / Tailwind   ,','JavaScript (ES6+)   ,' , 'React.js (beginner to intermediate) ' ],
      icon: 'fas fa-paint-brush',
      color: 'bg-neon-pink',
    },
    {
      title: 'Data Entry / Copy Paste',
     
      description:['PDF/Word to Excel or Word ,',''],
      icon: 'fas fa-code',
      color: 'bg-cyber-gold',
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations Inc.',
      period: '2020 - 2022',
      description:
        'Developed and maintained multiple client projects, specializing in React and Node.js ecosystems.',
      icon: 'fas fa-laptop',
      color: 'bg-cyber-cyan',
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 gradient-text font-cyber">
          EXPERIENCE TIMELINE
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyber-gold to-cyber-cyan mx-auto mb-16"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full 
                          bg-gradient-to-b from-cyber-gold via-cyber-cyan to-neon-pink hidden md:block"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content side */}
                <div
                  className={`w-full md:w-1/2 flex ${
                    index % 2 === 0 ? 'justify-end pr-6' : 'justify-start pl-6'
                  }`}
                >
                  <div
                    className={`cyber-card p-6 rounded-lg transition-all duration-700 
                                max-w-[500px] w-full`}
                    style={{
                      transitionDelay: `${index * 200}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(20px)',
                    }}
                  >
                    <h3 className="text-xl font-bold text-cyber-gold mb-2 font-cyber">
                      {exp.title}
                    </h3>
                    <p className="text-cyber-cyan mb-2">{exp.company}</p>
                    <p className="text-gray-400 mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`hidden md:flex w-8 h-8 ${exp.color} rounded-full 
                              border-4 border-cyber-dark items-center justify-center z-10 mx-4`}
                >
                  <i className={`${exp.icon} text-black text-sm`}></i>
                </div>

                {/* Empty side */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
