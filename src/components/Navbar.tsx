
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-10 w-full flex justify-between items-center border-b border-gray-800">
      <div>
        <h1 className="text-lg font-mono font-semibold">
          <span className="text-portfolio-accent">{'<'}</span>
          <span className="text-portfolio-light">Alex Stoneham</span>
          <span className="text-portfolio-accent">{' />'}</span>
        </h1>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#projects" className="animated-link text-sm text-gray-300 hover:text-portfolio-light font-medium">Projects</a>
        <a href="#about" className="animated-link text-sm text-gray-300 hover:text-portfolio-light font-medium">About</a>
        <a href="#contact" className="animated-link text-sm text-gray-300 hover:text-portfolio-light font-medium">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800">
          <a href="https://github.com/astoneham" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-gray-300 hover:text-portfolio-accent" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800">
          <a href="https://linkedin.com/in/alex-stoneham" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-gray-300 hover:text-portfolio-accent" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800">
          <a href="mailto:info@alexstoneham.co.uk">
            <Mail className="h-5 w-5 text-gray-300 hover:text-portfolio-accent" />
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
