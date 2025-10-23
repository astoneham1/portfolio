import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { LINKS } from '../constants/links.ts';

type Theme = 'light' | 'dark';

interface FooterProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Footer = ({ theme, toggleTheme }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-10" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-4">
        <h3 className="text-lg font-mono font-semibold">
          <span className="text-portfolio-accent">{'<'}</span>
          <span className="text-foreground">astoneham</span>
          <span className="text-portfolio-accent"><span className="mr-[1px]">/</span>{'>'}</span>
        </h3>

        <button
          onClick={toggleTheme}
          className="rounded-full transition-transform duration-200 hover:scale-125 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2"
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
            href={LINKS.github}
            target="_blank"
            rel="me noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2 rounded"
            aria-label="GitHub profile (opens in new tab)"
          >
            <Github className="h-5 w-5 text-foreground" />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className="transition-transform duration-200 hover:scale-125 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2 rounded"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <Linkedin className="h-5 w-5 text-foreground" />
          </a>
          <a
            href={LINKS.email}
            className="transition-transform duration-200 hover:scale-125 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2 rounded"
            aria-label="Email Alex"
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