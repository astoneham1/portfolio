import React, { useState } from 'react';
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

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="#projects" className="animated-link text-sm text-foreground dark:text-white font-medium">Projects</a>
      <a href="#about" className="animated-link text-sm text-foreground dark:text-white font-medium">About</a>
      <a href="#contact" className="animated-link text-sm text-foreground dark:text-white font-medium">Contact</a>
    </>
  );

  const SocialLinks = () => (
    <div className="flex items-center space-x-6">
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
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
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
            className="rounded-full transition-transform duration-200 hover:scale-125"
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
              <Button variant="ghost" size="icon" className="hover:bg-transparent focus:ring-0">
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
