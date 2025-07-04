import React, { useState } from 'react';
import portfolio1 from '../assets/portfolio1.jpeg';
import { FiChevronLeft, FiChevronRight, FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: "Portfolio",
    desc: 'A personal portfolio website showcasing my skills, projects, and contact info using a modern and responsive tech stack.',
    technologies: ['React', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/Altrin2001/portfolio',
    image: portfolio1
  },
  {
    id: 2,
    title: "Coastal Residency",
    desc: 'A hotel booking and management platform with user/admin roles, secure authentication, and cloud deployment.',
    technologies: ['React', 'TailwindCSS', 'SpringBoot', 'SpringSecurity', 'AWS', 'MySQL'],
    github: 'https://github.com/Altrin2001/evento-creators-omega-flow',
    image: portfolio1
  },
  {
    id: 3,
    title: "Harishma Boutique",
    desc: 'A Java Swing desktop application for managing boutique operations including orders, inventory, and customer profiles.',
    technologies: ['Core Java', 'Swing', 'MS SQL'],
    github: 'https://github.com/Altrin2001/evento-creators-omega-flow',
    image: portfolio1
  },
  {
    id: 4,
    title: "Hotel-Coastal-1",
    desc: 'A web-based hotel management system with user roles, product catalog, order processing, and responsive UI.',
    technologies: ['Core Java', 'JSP', 'MS SQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Altrin2001/evento-creators-omega-flow',
    image: portfolio1
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

  // Get visible projects with wrap-around
  const getVisibleProjects = () => {
    const end = currentIndex + projectsPerPage;
    if (end <= projects.length) {
      return projects.slice(currentIndex, end);
    } else {
      return [
        ...projects.slice(currentIndex),
        ...projects.slice(0, end - projects.length)
      ];
    }
  };

  const visibleProjects = getVisibleProjects();

 return (
    <section id="projects" className="w-full py-20 px-4 sm:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">
            My <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Here's a collection of my work featuring both web and desktop applications.
          </p>
        </div>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100 z-10"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-grow p-5">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 text-xs text-gray-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Code Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-blue-600 hover:text-blue-800 text-sm underline font-medium"
                  >
                    <FiGithub className="mr-2" /> View Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100 z-10"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentIndex === index * projectsPerPage
                  ? 'bg-blue-600'
                  : 'bg-gray-400 hover:bg-gray-500'
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