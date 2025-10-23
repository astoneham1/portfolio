import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

type Theme = 'light' | 'dark';

const Index = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme === 'light' || storedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', storedTheme);
      return storedTheme;
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', initial);
    localStorage.setItem('theme', initial);
    return initial;
  });

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    // Respect reduced motion: avoid fancy transitions
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced) {
      // Add a brief theme transition class for a subtle cross-fade
      document.documentElement.classList.add('theme-transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 220);
    }

    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Update the page title when component mounts
  useEffect(() => {
    document.title = "Alex Stoneham | Portfolio";
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <div className="animated-gradient" />
      <header className="sticky top-0 left-0 right-0 z-50" role="banner">
        <div className="backdrop-blur-md bg-background/30 border-b border-border/40">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>
      <div className="relative w-full">
        <main id="main-content" className="relative w-full" role="main">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default Index;
