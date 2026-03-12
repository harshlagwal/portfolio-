import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0b0f1a] transition-colors duration-500 mt-0">
      <div className="max-w-6xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        
        {/* Left: Name */}
        <div className="text-center md:text-left">
          <span className="text-lg font-bold text-gray-900 dark:text-white font-display tracking-tight transition-colors duration-500">
            Harsh Lagwal
          </span>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center justify-center gap-4">
          <a 
            href="https://github.com/harshlagwal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-vibrant-blue hover:border-vibrant-blue hover:scale-110 shadow-sm transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/harshlagwal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-vibrant-blue hover:border-vibrant-blue hover:scale-110 shadow-sm transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:Harshlagwal2005@gmail.com" 
            className="p-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-vibrant-blue hover:border-vibrant-blue hover:scale-110 shadow-sm transition-all duration-300"
          >
            <Mail size={18} />
          </a>
        </div>
        
        {/* Right: Copyright */}
        <div className="text-center md:text-right">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-sans transition-colors duration-500">
            © 2026 Harsh Lagwal
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
