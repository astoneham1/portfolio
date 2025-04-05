
import React, { useEffect, useRef } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { useInView } from 'react-intersection-observer';

const projects: ProjectProps[] = [
  {
    title: "E-Commerce Dashboard",
    description: "A responsive admin dashboard with charts, tables and advanced filtering for an e-commerce platform.",
    image: "https://via.placeholder.com/500x300/1a1a1a/808080?text=Dashboard",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    liveUrl: "https://ecommerce-dashboard.example.com"
  },
  {
    title: "Personal Finance Tracker",
    description: "A web app that helps users track expenses, manage budgets, and visualize spending patterns.",
    image: "https://via.placeholder.com/500x300/1a1a1a/808080?text=Finance+App",
    tags: ["React", "Node.js", "MongoDB", "D3.js"],
    githubUrl: "https://github.com/yourusername/finance-tracker",
    liveUrl: "https://finance-tracker.example.com"
  },
  {
    title: "Weather Forecast App",
    description: "A sleek weather application that provides current and forecasted weather conditions for any location.",
    image: "https://via.placeholder.com/500x300/1a1a1a/808080?text=Weather+App",
    tags: ["React", "Redux", "Weather API", "CSS Modules"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-app.example.com"
  },
  {
    title: "Social Media Dashboard",
    description: "A unified dashboard to manage and analyze multiple social media accounts from one place.",
    image: "https://via.placeholder.com/500x300/1a1a1a/808080?text=Social+Media",
    tags: ["Next.js", "OAuth", "PostgreSQL", "TailwindCSS"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://social-dashboard.example.com"
  }
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was designed and built with attention to detail and a focus on user experience.
          </p>
        </div>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`transition-opacity duration-700 ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
