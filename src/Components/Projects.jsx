import React, { useState } from 'react';
import Portfolio from '../assets/Portfolio.PNG'; // Make sure this path is correct
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "Portfolio",
    desc: 'A personal portfolio website showcasing my skills, projects, and contact info using a modern and responsive tech stack.',
    technologies: ['React', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/Altrin2001/portfolio',
    demo: 'https://altrin-portfolio.netlify.app/ ',
    image: Portfolio
  },
  {
    id: 2,
    title: "Coastal Residency",
    desc: 'A hotel booking and management platform with user/admin roles, secure authentication, and cloud deployment.',
    technologies: ['React', 'TailwindCSS', 'SpringBoot', 'SpringSecurity', 'AWS', 'MySQL'],
    github: 'https://github.com/Altrin2001/evento-creators-omega-flow ',
    demo: 'https://coastal-residency-demo.netlify.app/ ',
    image: Portfolio
  },
  {
    id: 3,
    title: "Harishma Boutique",
    desc: 'A Java Swing desktop application for managing boutique operations including orders, inventory, and customer profiles.',
    technologies: ['Core Java', 'Swing', 'MS SQL'],
    github: 'https://github.com/Altrin2001/evento-creators-omega-flow ',
    demo: '',
    image: Portfolio
  },
  {
    id: 4,
    title: "Hotel-Coastal-1",
    desc: 'A web-based hotel management system with user roles, product catalog, order processing, and responsive UI.',
    technologies: ['Core Java', 'JSP', 'MS SQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Altrin2001/evento-creators-omega-flow ',
    demo: '',
    image: Portfolio
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? projects.length - projectsPerPage : prev - projectsPerPage));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + projectsPerPage >= projects.length ? 0 : prev + projectsPerPage));
  };

  const visibleProjects = (() => {
    const end = currentIndex + projectsPerPage;
    if (end <= projects.length) {
      return projects.slice(currentIndex, end);
    } else {
      return [
        ...projects.slice(currentIndex),
        ...projects.slice(0, end - projects.length)
      ];
    }
  })();

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-8 relative bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-2 tracking-tight">
            My <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here's a collection of my work featuring both web applications and Windows desktop applications.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/70 p-2 rounded-full shadow-lg hover:bg-gray-700 z-10 transition"
            aria-label="Previous projects"
          >
            <FiChevronLeft className="text-white text-2xl" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-gray-700 hover:border-blue-500"
              >
                {/* Full-width image banner */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>

                {/* Card content */}
                <div className="relative z-20 p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 justify-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-200 transition-colors underline"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-400 hover:text-green-200 transition-colors underline"
                      >
                        <FiExternalLink className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/70 p-2 rounded-full shadow-lg hover:bg-gray-700 z-10 transition"
            aria-label="Next projects"
          >
            <FiChevronRight className="text-white text-2xl" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index * projectsPerPage
                  ? 'bg-blue-600'
                  : 'bg-gray-500 hover:bg-blue-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 