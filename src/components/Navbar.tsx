import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import SunIcon from '/light.svg';
import MoonIcon from '/dark.svg';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme immediately
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);
      return storedTheme;
    }
    // Set default theme
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    return 'dark';
  });

  useEffect(() => {
    // This effect ensures theme persists across page reloads
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 md:px-12">
        <div className="w-[200px]">
          <h1 className="text-lg font-mono font-semibold">
            <span className="text-portfolio-accent">{'< '}</span>
            <span className="text-foreground">astoneham</span>
            <span className="text-portfolio-accent">{'/ >'}</span>
          </h1>
        </div>
        <div className="hidden md:flex space-x-8 flex-1 justify-center">
          <a href="#projects" className="animated-link text-sm text-foreground dark:text-white font-medium">Projects</a>
          <a href="#about" className="animated-link text-sm text-foreground dark:text-white font-medium">About</a>
          <a href="#contact" className="animated-link text-sm text-foreground dark:text-white font-medium">Contact</a>
        </div>
        <div className="flex items-center space-x-4 w-[200px] justify-end">
          <Button variant="ghost" size="icon" className="hover:bg-transparent focus:ring-0 transition-transform duration-200 hover:scale-125 p-0">
            <a href="https://github.com/astoneham1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
              <Github className="h-5 w-5 text-foreground" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent focus:ring-0 transition-transform duration-200 hover:scale-125 p-0">
            <a href="https://www.linkedin.com/in/alexander-stoneham-03aa70341/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-transparent focus:ring-0 transition-transform duration-200 hover:scale-125 p-0">
            <a href="mailto:me@alexstoneham.co.uk" className="flex items-center justify-center w-full h-full">
              <Mail className="h-5 w-5 text-foreground" />
            </a>
          </Button>
          <button
            onClick={toggleTheme}
            className="rounded-full transition-transform duration-200 hover:scale-125"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <img
              src={theme === 'dark' ? MoonIcon : SunIcon}
              alt={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
