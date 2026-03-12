import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      <div 
        className={`rounded-full px-6 py-3 md:px-8 md:py-4 flex justify-between items-center transition-all duration-500 border
          ${isScrolled 
            ? 'bg-white/70 dark:bg-slate-900/70 shadow-xl backdrop-blur-[16px] border-white/30 dark:border-white/10' 
            : 'bg-white/60 dark:bg-slate-900/60 shadow-lg backdrop-blur-[12px] border-white/20 dark:border-white/5'
          }`}
      >
        <a href="#home" className="flex items-center gap-1.5 hover:opacity-80 transition-all duration-300 group">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-display transition-colors duration-500">
            Harsh
          </span>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-vibrant-blue font-display transition-colors duration-500">
            Lagwal
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500 transition-all duration-500 font-sans"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white/70 dark:bg-slate-800/70 text-gray-900 dark:text-white hover:scale-105 active:scale-95 transition-all duration-500 shadow-sm border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md"
            aria-label="Toggle Dark Mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, ease: "backOut" }}
              >
                {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-900" />}
              </motion.div>
            </AnimatePresence>
          </button>

          <a 
            href="#contact" 
            className="hidden sm:flex items-center justify-center px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-[#0b0f1a] text-sm font-medium transition-colors duration-500 shadow-md font-sans hover:scale-105 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
