// components/SkillsProgress.js
import React from "react";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const SkillsProgress = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

const skillsData = [
  // 🔹 Web Development (what you’re learning now)
  { name: "HTML / CSS / Bootstrap / Tailwind", percentage: 90 },
  { name: "JavaScript (ES6+)", percentage: 70 },
  { name: "React.js (Beginner)", percentage: 65 },
  { name: "Node.js / Express (Learning)", percentage: 60 },
  { name: "MongoDB / Database Design (Learning)", percentage: 60 },

  // 🔹 Other useful skills for Fiverr/Upwork
  { name: "UI/UX Design (Figma, Canva basics)", percentage: 65 },
  { name: "Git / GitHub", percentage: 70 },
  { name: "Content Rewriting & Proofreading", percentage: 85 },
  { name: "Data Entry & File Conversion", percentage: 90 }
];

  return (
    <section ref={ref} className="py-20 px-6 bg-cyber-gray relative">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 gradient-text font-cyber">
          SKILLS MASTERY
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyber-gold to-cyber-cyan mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {[0, 1].map((columnIndex) => (
            <div key={columnIndex} className="space-y-8">
              {skillsData
                .slice(columnIndex * 4, (columnIndex + 1) * 4)
                .map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    {...skill}
                    isVisible={isVisible}
                    delay={index * 200}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ name, percentage, isVisible, delay }) => {
  return (
    <div className="skill-item">
      <div className="flex justify-between mb-3">
        <span className="text-cyber-gold font-semibold text-lg">{name}</span>
        <span className="text-cyber-cyan">{percentage}%</span>
      </div>
      <div className="skill-bar h-3 bg-gray-800 rounded-full overflow-hidden relative">
        <div
          className={`skill-progress h-full bg-gradient-to-r from-cyber-gold to-cyber-cyan rounded-full transition-[width] duration-2000 ease-out ${
            isVisible ? "animate-progress-shimmer" : "w-0"
          }`}
          style={{
            width: isVisible ? `${percentage}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

export default SkillsProgress;