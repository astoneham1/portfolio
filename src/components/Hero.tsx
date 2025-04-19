import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const fullText = "Student at the University of St. Andrews and aspiring software engineer.";
  const typingSpeed = 100; // milliseconds per character
  const resetDelay = 10000; // 10 seconds

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;

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

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <section className="min-h-[92vh] flex flex-col justify-center items-center text-center px-4 pt-28 pb-16">
      <div className="relative w-56 h-56">
        {!imageLoaded && (
          <div className="absolute inset-0 rounded-full bg-secondary/30 animate-pulse" />
        )}
        <Dialog>
          <DialogTrigger>
            <img
              src="/Alessandro.jpeg"
              alt="Alessandro"
              className={cn(
                "w-56 h-56 rounded-full object-cover shadow-lg cursor-pointer",
                "border-2 border-portfolio-accent/20",
                "transition-all duration-300",
                "hover:border-portfolio-accent hover:scale-105 hover:shadow-xl hover:shadow-portfolio-accent/20",
                !imageLoaded && "blur-sm",
                imageLoaded && "blur-0"
              )}
              style={{ transform: "translate3d(0, 0, 0)" }}
              onLoad={() => setImageLoaded(true)}
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <img
              src="/Alessandro.jpeg"
              alt="Alessandro"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-8 animate-fade-in animation-delay-100">
        <div className="relative inline-block">
          <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-portfolio-accent transform origin-left scale-x-0 animate-[expand_0.5s_ease-out_0.3s_forwards]"></span>
          <span className="text-foreground font-mono font-semibold tracking-wide text-lg md:text-xl opacity-0 animate-[fadeSlideIn_0.5s_ease-out_0.3s_forwards]">
            Hello, I'm
          </span>
          <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-portfolio-accent transform origin-right scale-x-0 animate-[expand_0.5s_ease-out_0.3s_forwards]"></span>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-in animation-delay-200">
        Alessandro
      </h1>

      <div className="h-12 flex items-center justify-center mb-6">
        <h2 className="text-xl md:text-2xl text-foreground/80 font-medium animate-fade-in animation-delay-300">
          {displayText}
          <span className="typing-cursor"></span>
        </h2>
      </div>

      <p className="max-w-2xl text-foreground animate-fade-in animation-delay-400">
        Passionate about building robust backends with Java and creating seamless user experiences with modern web technologies. 
        Currently exploring system-level programming with C and diving deep into network architecture, while actively contributing to open-source projects.
      </p>

      <div className="mt-5 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-500 justify-center">
        <Button className="bg-portfolio-accent hover:bg-portfolio-accent-light text-white">
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" className="border-border hover:bg-secondary">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="[transition:color_100ms_ease-in-out]"
          >
            Download Resume
          </a>
        </Button>
      </div>

      <div className="relative mt-24 flex justify-center">
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects">
            <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-portfolio-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;