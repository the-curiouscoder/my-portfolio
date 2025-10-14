// src/components/FloatingParticles.js
import React, { useEffect, useState } from 'react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  const createParticle = () => {
    return {
      id: Math.random(),
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      animationDelay: Math.random() * 3,
      animationDuration: Math.random() * 3 + 3,
      opacity: Math.random() * 0.5 + 0.3,
    };
  };

  const generateParticles = (count = 15) => {
    const newParticles = [];
    for (let i = 0; i < count; i++) {
      newParticles.push(createParticle());
    }
    return newParticles;
  };

  useEffect(() => {
    // Initial particles
    setParticles(generateParticles());

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prevParticles => {
        // Remove old particles and add new ones
        const filteredParticles = prevParticles.slice(-10); // Keep only last 10
        const newParticles = generateParticles(5); // Add 5 new ones
        return [...filteredParticles, ...newParticles];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}
    </div>
  );
};

const Particle = ({ left, top, size, animationDelay, animationDuration, opacity }) => {
  const [shouldRemove, setShouldRemove] = useState(false);

  useEffect(() => {
    // Remove particle after animation completes
    const timer = setTimeout(() => {
      setShouldRemove(true);
    }, (animationDuration + animationDelay) * 1000);

    return () => clearTimeout(timer);
  }, [animationDuration, animationDelay]);

  if (shouldRemove) return null;

  return (
    <div
      className="particle"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${animationDelay}s`,
        animationDuration: `${animationDuration}s`,
        opacity: opacity,
      }}
    />
  );
};

export default FloatingParticles;