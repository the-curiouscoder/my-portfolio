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
        "A simple, effective, and user-friendly interactive task management application built with pure JavaScript. It allows users to fully control their workflow—adding, editing, and deleting tasks—with persistent data storage achieved using the browser's Local Storage API. This project showcases core JavaScript functionality and expert DOM manipulation.",
      // icon: "fas fa-shopping-cart",
      gradient: "from-cyber-gold/20 to-cyber-cyan/20",
      iconColor: "text-cyber-gold",
      demolink: "https://the-curiouscoder.github.io/Todo-list/",
      image: todolist, // imported image
    },
    {
      title: "Portfolio Project",
      description:
        "This portfolio is one of my own projects, built with React while learning the MERN stack. It showcases my frontend development skills, highlights key projects, and serves as a central hub for my work. The design is responsive, user-friendly, and reflects my focus on clean UI and modern web practices.",
      // icon: "fas fa-mobile-alt",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      demolink: "https://the-curiouscoder.github.io/my-portfolio/",
      image: portfolio, // imported image
    },
    {
      title: "Landing Page Project",
      description:
        "A modern and fully responsive landing page featuring a clean UI, smooth layout, and optimized performance. Designed to highlight key information clearly, with a focus on simplicity, speed, and user engagement. Built to adapt seamlessly across all devices.",
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
