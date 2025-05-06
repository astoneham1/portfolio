import React, { useEffect, useRef } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import { useInView } from 'react-intersection-observer';

const projects: ProjectProps[] = [
  {
    title: "Nonograms Puzzle",
    description: "A university group project - a Nonograms game that works with different sized and colored puzzles. Includes a presentable UI built in Java Swing, a checker to check the progress of the current puzzle, and a solver that works with a couple of puzzles. My contribution to this project was implementing a fully functional GUI using Java Swing to implement the backend features.",
    image: "https://i.gyazo.com/1fe4fb6d53291ba6af63a886de46d7c7.png",
    tags: ["Java", "Java Swing", "JSON", "Puzzle"],
    githubUrl: "https://github.com/astoneham1/nonograms",
    liveUrl: ""
  },
  {
    title: "Breakout Game",
    description: "A university group project - a game inspired by Breakout, where the user controls a paddle to bounce a ball into bricks to break them. Contains multiple levels and powers. Built using the Processing environment for Java. My contribution to this project was implementing the game logic and the level system.",
    image: "https://i.gyazo.com/de97d754df3ecd7af4187fb575cd6e4c.png",
    tags: ["Java", "Processing", "Level Progression", "Game"],
    githubUrl: "https://github.com/astoneham1/brickbreak",
    liveUrl: ""
  },
  {
    title: "Java + SQLite Implementation Example",
    description: "A university assignment - I created a Java application that connects to an SQLite database, allowing users to perform CRUD operations on a simple data model such as inserting predefined DDL schema and queries with command line arguments.",
    image: "/placeholder.svg",
    tags: ["Java", "SQLite", "JDBC API", "Command Line Args"],
    githubUrl: "https://astoneham1.github.io/jdbc/",
    liveUrl: ""
  },
  {
    title: "Country Statistics Viewer",
    description: "A simple app using Java and Swing that calls the restcountries API to display cool and fun stats about a country that a user enters. Complete build with a DMG for MacOS available, with support for other platforms and additional features coming soon.",
    image: "https://i.gyazo.com/70a51a8b574b5078ec7719b77a1f3bf9.png",
    tags: ["Java", "Java Swing", "JSON", "Restcountries API", "MacOS"],
    githubUrl: "https://github.com/astoneham1/countries-api-client",
    liveUrl: "https://github.com/astoneham1/countries-api-client/releases/latest"
  },
  {
    title: "EAFC 24 Pack Opener and Minigames",
    description: "A lightweight application where you can pack cards, build drafts, and play an endless amount of minigames with the cards in EA's FC 24.",
    image: "https://i.gyazo.com/e3ccd1dab2765ef235bf4c9c2feee7fa.png",
    tags: ["Livecode", "SQLite", "EAFC24", "FIFA"],
    githubUrl: "https://github.com/astoneham1/higherlower",
    liveUrl: ""
  },
  {
    title: "Rainbow Six Siege Clip Hub",
    description: "A site for me to store links to folders containing gameplay clips from Tom Clancy's Rainbow Six Siege from 2020 onwards.",
    image: "https://i.gyazo.com/308886c407e530f658062993c6226917.png",
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

  const rafRef = useRef<number>();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const cards = document.querySelectorAll('.project-card');
        const currentScrollY = window.scrollY;
        
        // Only update if scroll position has changed significantly
        if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;
        
        lastScrollY.current = currentScrollY;
        
        cards.forEach((card) => {
          const rect = (card as HTMLElement).getBoundingClientRect();
          const centerPosition = (rect.top + rect.bottom) / 2;
          const viewportHeight = window.innerHeight;
          const distanceFromCenter = Math.abs(viewportHeight / 2 - centerPosition);
          const maxDistance = viewportHeight / 2;
          const scale = 1 - (distanceFromCenter / maxDistance) * 0.05; // Reduced scale effect
          (card as HTMLElement).style.transform = `scale(${Math.min(Math.max(scale, 0.95), 1)})`; // Increased minimum scale
        });
      });
    };

    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold gradient-text inline-block mb-4">Projects</h2>
          <p className="text-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. I enjoy working on a variety of projects, 
            including ones made just for fun and others with a designed purpose and a focus on user experience.
          </p>
        </div>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card transition-opacity duration-700 ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`}
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
