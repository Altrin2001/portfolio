import React, { useState } from 'react';
import Portfolio from '../assets/Portfolio.PNG';
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "Portfolio",
    desc: 'A personal portfolio website showcasing my skills, projects, and contact info using a modern and responsive tech stack.',
    technologies: ['React', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/Altrin2001/evento-creators-omega-flow',
    demo: '#', // Add demo link if available
    image: Portfolio
  },
  {
    id: 2,
    title: "Coastal Residency",
    desc: 'A hotel booking and management platform with user/admin roles, secure authentication, and cloud deployment.',
    technologies: ['React', 'TailwindCSS', 'SpringBoot', 'SpringSecurity', 'AWS', 'MySQL'],
    github: 'https://github.com/Altrin2001/evento-creators-omega-flow',
    demo: '#',
    image: Portfolio
  },
  {
    id: 3,
    title: "Harishma Boutique",
    desc: 'A Java Swing desktop application for managing boutique operations including orders, inventory, and customer profiles.',
    technologies: ['Core Java', 'Swing', 'MS SQL'],
    github: 'https://github.com/Altrin2001/evento-creators-omega-flow',
    demo: '#',
    image: Portfolio
  },
  {
    id: 4,
    title: "Hotel-Coastal-1",
    desc: 'A web-based hotel management system with user roles, product catalog, order processing, and responsive UI.',
    technologies: ['Core Java', 'JSP', 'MS SQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Altrin2001/evento-creators-omega-flow',
    demo: '#',
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

  const getVisibleProjects = () => {
    const end = currentIndex + projectsPerPage;
    if (end <= projects.length) {
      return projects.slice(currentIndex, end);
    }
    return [
      ...projects.slice(currentIndex),
      ...projects.slice(0, end - projects.length)
    ];
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-8 relative bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            My <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here's a collection of my work featuring both web applications and
            Windows desktop applications.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 z-10 transition-all"
            aria-label="Previous projects"
          >
            <FiChevronLeft className="text-white text-xl" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-all"
                        aria-label={`View ${project.title} code`}
                      >
                        <FiGithub className="text-lg" />
                      </a>
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/90 text-gray-900 p-2 rounded-full hover:bg-white transition-all"
                          aria-label={`View ${project.title} demo`}
                        >
                          <FiExternalLink className="text-lg" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-gray-200 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FiGithub className="mr-2" /> View Code
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-400 hover:text-green-300 transition-colors"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-700 z-10 transition-all"
            aria-label="Next projects"
          >
            <FiChevronRight className="text-white text-xl" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index * projectsPerPage
                  ? 'bg-blue-500 w-6'
                  : 'bg-gray-600 hover:bg-gray-500'
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