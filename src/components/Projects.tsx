
import React, { useEffect, useRef } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { useInView } from 'react-intersection-observer';

const projects: ProjectProps[] = [
  {
    title: "Java + SQLite Implementation Example",
    description: "A university assignment - I created a Java application that connects to an SQLite database, allowing users to perform CRUD operations on a simple data model such as inserting predefined DDL schema and queries with command line arguments.",
    image: "https://via.placeholder.com/500x300/1a1a1a/808080?text=Dashboard",
    tags: ["Java", "SQLite", "JDBC API", "Command Line args"],
    githubUrl: "https://astoneham1.github.io/P3/",
    liveUrl: ""
  },
  {
    title: "Order Simulator",
    description: "Built for food lovers, this immersive simulator lets you choose your favorite restaurant or some of the fictional ones, explore a vast catalog of food and drink items and experience the fun of placing and customizing orders—without spending a penny.",
    image: "https://i.pinimg.com/736x/40/25/26/4025261b4df426168b8da38093b83a66.jpg",
    tags: ["React", "Node.js", "MongoDB", "D3.js"],
    githubUrl: "https://github.com/astoneham1/",
    liveUrl: ""
  },
  {
    title: "Lightweight EAFC 24 Pack Opener and Minigames",
    description: "A sleek application where you can pack cards, build drafts, and play an endless amount of minigames with the cards in EA's FC 24.",
    image: "https://via.placeholder.com/500x300/1a1a1a/808080?text=Weather+App",
    tags: ["Livecode", "SQLite", "EAFC24", "FIFA"],
    githubUrl: "https://github.com/astoneham1/",
    liveUrl: ""
  },
  {
    title: "Rainbow Six Siege Clip Hub",
    description: "A central site for me to store links to folders containing gameplay clips from Tom Clancy's Rainbow Six Siege from 2020 onwards.",
    image: "https://imgur.com/4UqI414",
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/astoneham1/clips",
    liveUrl: "https://clips.alexstoneham.co.uk"
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
