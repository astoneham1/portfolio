import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { useInView } from 'react-intersection-observer';
import { prefersReducedMotion } from '@/lib/a11y.ts';
import projects from '@/data/projects';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rafRef = useRef<number>();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const noHover = typeof window !== 'undefined' && 'matchMedia' in window && window.matchMedia('(hover: none)').matches;
    if (prefersReducedMotion() || noHover) {
      return; // Disable scaling effect for reduced motion and touch devices
    }

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const cards = document.querySelectorAll('.project-card');
        const currentScrollY = window.scrollY;
        
        // Only update if the scroll position has changed significantly
        if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;
        
        lastScrollY.current = currentScrollY;
        
        cards.forEach((card) => {
          const rect = (card as HTMLElement).getBoundingClientRect();
          const centerPosition = (rect.top + rect.bottom) / 2;
          const viewportHeight = window.innerHeight;
          const distanceFromCenter = Math.abs(viewportHeight / 2 - centerPosition);
          const maxDistance = viewportHeight / 2;
          const scale = 1 - (distanceFromCenter / maxDistance) * 0.03; // Even more subtle
          (card as HTMLElement).style.transform = `scale(${Math.min(Math.max(scale, 0.97), 1)})`;
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
              className={`project-card cv-auto transition-opacity duration-700 ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`}
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
