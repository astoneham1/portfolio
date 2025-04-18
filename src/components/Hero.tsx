import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Student at the University of St Andrews and aspiring software engineer.";
  const indexRef = React.useRef(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayText((prev) => {
        const nextIndex = prev.length;
        if (nextIndex < fullText.length) {
          return prev + fullText.charAt(nextIndex);
        } else {
          clearInterval(typingInterval);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-[92vh] flex flex-col justify-center items-center text-center px-4 pt-48 pb-20">
      <img
        src="/Alessandro.jpeg"
        alt="Alessandro"
        className="w-64 h-64 rounded-full object-cover mb-6 shadow-lg"
      />

      <div className="animate-fade-in animation-delay-100 mb-3">
        <span className="text-foreground font-mono font-semibold tracking-wide text-lg md:text-xl">
          Hello, I'm
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in animation-delay-200">
        Alessandro
      </h1>

      <div className="h-16 flex items-center justify-center">
        <h2 className="text-xl md:text-2xl text-foreground/80 font-medium animate-fade-in animation-delay-300">
          {displayText}
          <span className="typing-cursor"></span>
        </h2>
      </div>

      <p className="max-w-2xl text-foreground my-6 animate-fade-in animation-delay-400">
        Experienced in Java backend development and SQL database management,
        I also possess a strong interest in front-end technologies.
        My ongoing professional development includes studying networking principles and the C programming language.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-500 justify-center">
        <Button className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white">
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" className="border-border hover:bg-secondary">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </Button>
      </div>

      <div className="relative mt-32 flex justify-center">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects">
            <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-portfolio-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;