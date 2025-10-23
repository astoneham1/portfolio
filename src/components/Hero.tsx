import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = "Student at the University of St. Andrews and aspiring software engineer.";
  const typingSpeed = 100; // milliseconds per character
  const resetDelay = 10000; // 10 seconds

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const startTyping = () => {
      setDisplayText('');
      let currentIndex = 0;

      typingInterval = setInterval(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;

        if (currentIndex >= fullText.length) {
          clearInterval(typingInterval);
          // Schedule next typing animation
          resetTimeout = setTimeout(startTyping, resetDelay);
        }
      }, typingSpeed);
    };

    if (prefersReduced) {
      setDisplayText(fullText);
    } else {
      startTyping();
    }

    return () => {
      clearInterval(typingInterval);
      clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <section className="min-h-[82vh] sm:min-h-[85vh] flex flex-col items-center text-center px-4 pt-20 pb-6 justify-between">
      <div className="flex flex-col items-center w-full">
        <div className="relative w-40 h-40 md:w-56 md:h-56">
        {!imageLoaded && (
          <div className="absolute inset-0 rounded-full bg-secondary/30 animate-pulse" />
        )}
        <img
          src="/Alessandro.jpeg"
          alt="Alessandro profile photo"
          width="224" height="224"
          fetchpriority="high"
          className={cn(
            "w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg",
            "border-2 border-portfolio-accent/20",
            "transition-all duration-300",
            "hover:border-portfolio-accent hover:scale-105 hover:shadow-xl hover:shadow-portfolio-accent/20",
            !imageLoaded && "blur-sm",
            imageLoaded && "blur-0"
          )}
          style={{ transform: "translate3d(0, 0, 0)" }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="mt-5 animate-fade-in animation-delay-100">
        <div className="relative inline-block">
          <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-portfolio-accent transform origin-left scale-x-0 animate-[expand_0.5s_ease-out_0.3s_forwards]"></span>
          <span className="text-foreground font-mono font-semibold tracking-wide text-lg md:text-xl opacity-0 animate-[fadeSlideIn_0.5s_ease-out_0.3s_forwards]">
            Hello, I'm
          </span>
          <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-portfolio-accent transform origin-right scale-x-0 animate-[expand_0.5s_ease-out_0.3s_forwards]"></span>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text animate-fade-in animation-delay-200">
        Alessandro
      </h1>

      <div className="h-12 flex items-center justify-center mb-4">
        <h2 className="text-xl md:text-2xl text-foreground/80 font-medium animate-fade-in animation-delay-300">
          {displayText}
          <span className="typing-cursor"></span>
        </h2>
      </div>

      <p className="max-w-2xl text-foreground animate-fade-in animation-delay-400">
          I’m a 19-year-old student with a long-standing passion for coding and problem solving. I love breaking ideas down, tinkering with small projects, and learning by building. Recently I’ve been spending most of my time with Java and Spring on the backend, while exploring React and TypeScript on the front end.
      </p>

      <div className="mt-5 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-500 justify-center">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-portfolio-accent hover:bg-portfolio-accent-light text-white focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View CV (opens in new tab)"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-border bg-card text-foreground hover:bg-secondary/50 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2 [transition:color_100ms_ease-in-out]"
        >
          View CV
        </a>
      </div>
      </div>

      <div className="flex justify-center mt-8 mb-0">
        <a href="#projects" aria-label="Skip to Projects" className="focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2 rounded">
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-portfolio-accent" />
        </a>
      </div>
    </section>
  );
};

export default Hero;