import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";
import SunIcon from '/light.svg';
import MoonIcon from '/dark.svg';
import { LINKS } from '@/constants/links';

type Theme = 'light' | 'dark';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const sections = ['projects', 'about', 'contact'] as const;

type SectionId = typeof sections[number];

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id') as SectionId | null;
            if (id && sections.includes(id)) setActive(id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavLinks = () => (
    <>
      <a href="#projects" aria-label="Skip to Projects" aria-current={active === 'projects' ? 'page' : undefined} className="animated-link text-sm text-foreground dark:text-white font-medium focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2">Projects</a>
      <a href="#about" aria-label="Skip to About" aria-current={active === 'about' ? 'page' : undefined} className="animated-link text-sm text-foreground dark:text-white font-medium focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2">About</a>
      <a href="#contact" aria-label="Skip to Contact" aria-current={active === 'contact' ? 'page' : undefined} className="animated-link text-sm text-foreground dark:text-white font-medium focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2">Contact</a>
    </>
  );

  const SocialLinks = () => (
    <div className="flex items-center space-x-6">
      <a
        href={LINKS.github}
        aria-label="GitHub profile (opens in new tab)"
        target="_blank"
        rel="me noopener noreferrer"
        className="transition-transform duration-200 hover:scale-125 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2 rounded"
      >
        <Github className="h-5 w-5 text-foreground" />
      </a>
      <a
        href={LINKS.linkedin}
        aria-label="LinkedIn profile (opens in new tab)"
        target="_blank"
        rel="me noopener noreferrer"
        className="transition-transform duration-200 hover:scale-125 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2 rounded"
      >
        <Linkedin className="h-5 w-5 text-foreground" />
      </a>
      <a
        href={LINKS.email}
        aria-label="Email Alex"
        className="transition-transform duration-200 hover:scale-125 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2 rounded"
      >
        <Mail className="h-5 w-5 text-foreground" />
      </a>
      <button
        onClick={toggleTheme}
        className="rounded-full transition-transform duration-200 hover:scale-125 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2"
        aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <img
          src={theme === 'dark' ? MoonIcon : SunIcon}
          alt={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="h-5 w-5"
        />
      </button>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4" aria-label="Primary">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-background focus:text-foreground focus:px-3 focus:py-2 focus:rounded">Skip to content</a>
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="w-[200px]">
          <h1 className="text-lg font-mono font-semibold">
            <span className="text-portfolio-accent">{'<'}</span>
            <span className="text-foreground">astoneham</span>
            <span className="text-portfolio-accent"><span className="mr-[1px]">/</span>{'>'}</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 flex-1 justify-center">
          <NavLinks />
        </div>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center space-x-4 w-[200px] justify-end">
          <SocialLinks />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="rounded-full transition-transform duration-200 hover:scale-125 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <img
              src={theme === 'dark' ? MoonIcon : SunIcon}
              alt={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="h-5 w-5"
            />
          </button>
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-transparent focus:ring-0 focus-visible:outline-2 focus-visible:outline-portfolio-accent focus-visible:outline-offset-2">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="px-6 py-8 flex flex-col space-y-8">
              <div className="flex flex-col space-y-4 items-center text-lg">
                <NavLinks />
              </div>
              <div className="flex justify-center space-x-6">
                <SocialLinks />
              </div>
              <DrawerClose className="sr-only">Close menu</DrawerClose>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
