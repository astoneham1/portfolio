import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Update the page title when component mounts
  React.useEffect(() => {
    document.title = "Alex Stoneham | Portfolio";
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <div className="fixed inset-0">
        <div className="animated-gradient" />
      </div>
      <div className="sticky top-0 left-0 right-0 z-50">
        <div className="backdrop-blur-md bg-background/30 border-b border-border/40">
          <Navbar />
        </div>
      </div>
      <div className="relative w-full">
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
