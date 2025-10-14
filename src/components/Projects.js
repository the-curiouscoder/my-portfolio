// src/components/Projects.js
import React from "react";
import landingpage from '../assets/landingpage.png';
import portfolio from '../assets/portfolio.png';
import todolist from '../assets/todolist.png';
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // All project data
  const projects = [
    {
      title: "Todo List App Project",
      description:
        "An interactive Todo List application created with JavaScript. It helps users add, edit, and delete tasks, while saving them in the browser using Local Storage. Simple, effective, and user-friendly.",
      // icon: "fas fa-shopping-cart",
      gradient: "from-cyber-gold/20 to-cyber-cyan/20",
      iconColor: "text-cyber-gold",
      demolink: "https://the-curiouscoder.github.io/Todo-list/",
      image: todolist, // imported image
    },
    {
      title: "Portfolio",
      description:
        "This portfolio itself is one of my projects — built with React while learning MERN stack. It highlights my skills in frontend development and serves as a central hub for my work.",
      // icon: "fas fa-mobile-alt",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      demolink: "https://www.google.com/",
      image: portfolio, // imported image
    },
    {
      title: "Landing Page Project",
      description:
        "A modern and responsive landing page designed with clean UI and smooth layout. Focused on simplicity, speed, and user engagement.",
      // icon: "fas fa-chart-line",
      gradient: "from-cyber-cyan/20 to-cyber-gold/20",
      iconColor: "text-cyber-cyan",
      demolink: "https://the-curiouscoder.github.io/Landing_page/",
      image: landingpage, // imported image
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-6">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 gradient-text font-cyber">
          FEATURED PROJECTS
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-cyber-gold to-cyber-cyan mx-auto mb-16"></div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`cyber-card rounded-lg overflow-hidden transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card Top (Icon Section) */}
              <div
                className={`h-30 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <i
                  className={`${project.icon} text-4xl ${project.iconColor}`}
                ></i>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Clickable Project Image */}
                {project.image && (
                  <a
                    href={project.demolink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-md mb-4 hover:opacity-90 transition-opacity"
                    />
                  </a>
                )}


                <h3 className="text-xl font-bold mb-3 text-cyber-gold font-cyber">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Live Demo Button */}
                <div className="flex justify-center mt-4">
                  {project.demolink && (
                    <a
                      href={project.demolink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyber-cyan bg-black border px-4 py-2 rounded-md hover:text-cyber-gold transition-colors flex items-center justify-center no-underline"
                      style={{ textDecoration: "none" }}
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Live Demo
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
