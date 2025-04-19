import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  theme: string;
  toggleTheme: () => void;
}

const Footer = ({ theme, toggleTheme }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-4">
        <h3 className="text-lg font-mono font-semibold">
          <span className="text-portfolio-accent">{'<'}</span>
          <span className="text-foreground">astoneham</span>
          <span className="text-portfolio-accent"><span className="mr-[1px]">/</span>{'>'}</span>
        </h3>

        <button
          onClick={toggleTheme}
          className="rounded-full transition-transform duration-200 hover:scale-125"
          aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <img
            src={theme === 'dark' ? '/dark.svg' : '/light.svg'}
            alt={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="h-5 w-5"
          />
        </button>

        <div className="flex space-x-6">
          <a
            href="https://github.com/astoneham1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125"
          >
            <Github className="h-5 w-5 text-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-stoneham-03aa70341/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125"
          >
            <Linkedin className="h-5 w-5 text-foreground" />
          </a>
          <a
            href="mailto:me@alexstoneham.co.uk"
            className="transition-transform duration-200 hover:scale-125"
          >
            <Mail className="h-5 w-5 text-foreground" />
          </a>
        </div>

        <div className="text-foreground text-sm">
          © {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;