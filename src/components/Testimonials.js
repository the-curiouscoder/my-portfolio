// components/Testimonials.js
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import Counter from './Counter';

const Testimonials = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart',
      content: 'CyberDev delivered an exceptional web application that exceeded our expectations. The attention to detail and innovative approach was impressive.',
      gradient: 'from-cyber-gold to-cyber-cyan'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateCorp',
      content: 'Working with CyberDev was a game-changer for our project. The technical expertise and creative solutions provided were outstanding.',
      gradient: 'from-cyber-cyan to-neon-pink'
    },
    {
      name: 'Emma Davis',
      position: 'Director, Digital Agency',
      content: 'The UI/UX design and development skills are top-notch. Our users love the new interface and the performance improvements are remarkable.',
      gradient: 'from-neon-pink to-cyber-gold'
    }
  ];

  const stats = [
    { value: 150, label: 'Projects Delivered', color: 'text-cyber-gold' },
    { value: 98, label: 'Client Satisfaction %', color: 'text-cyber-cyan' },
    { value: 5, label: 'Years Experience', color: 'text-neon-pink' },
    { value: 24, label: 'Hours Support', color: 'text-cyber-gold' }
  ];

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 gradient-text font-cyber">
          CLIENT TESTIMONIALS
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyber-gold to-cyber-cyan mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 rounded-lg">
                <Counter 
                  target={stat.value}
                  className={`text-4xl font-bold mb-2 ${stat.color}`}
                  isVisible={isVisible}
                />
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, position, content, gradient, isVisible, delay }) => {
  return (
    <div 
      className={`testimonial-card p-8 rounded-lg transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mr-4`}>
          <i className="fas fa-user text-black"></i>
        </div>
        <div>
          <h4 className="text-cyber-gold font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
      <p className="text-gray-300 italic mb-4">{content}</p>
      <div className="flex text-cyber-gold">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;