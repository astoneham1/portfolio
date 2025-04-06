
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-mono font-semibold">
            <span className="text-portfolio-accent">{'< '}</span>
            <span className="text-portfolio-light">astoneham</span>
            <span className="text-portfolio-accent">{'/ >'}</span>
          </h3>
        </div>
        <div className="mt-4 md:mt-0 text-gray-400 text-sm">
        © {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
