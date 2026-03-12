import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[95%] max-w-6xl"
    >
      <div 
        className={`rounded-3xl md:rounded-full px-5 py-3 md:px-8 md:py-4 flex justify-between items-center transition-all duration-500 border
          ${isScrolled 
            ? 'bg-white/80 dark:bg-slate-900/80 shadow-xl backdrop-blur-[20px] border-white/30 dark:border-white/10' 
            : 'bg-white/60 dark:bg-slate-900/60 shadow-lg backdrop-blur-[12px] border-white/20 dark:border-white/5'
          }`}
      >
        <a href="#home" className="flex items-center gap-1.5 hover:opacity-80 transition-all duration-300 group z-50">
          <span className="text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-display transition-colors duration-500">
            Harsh
          </span>
          <span className="text-lg md:text-2xl font-bold tracking-tight text-vibrant-blue font-display transition-colors duration-500">
            Lagwal
          </span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-vibrant-blue dark:hover:text-vibrant-blue transition-all duration-300 font-sans relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vibrant-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4 z-50">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 md:p-2.5 rounded-full bg-white/70 dark:bg-slate-800/70 text-gray-900 dark:text-white hover:scale-105 active:scale-95 transition-all duration-500 shadow-sm border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md"
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
                {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-900" />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Hire Me - Hidden on mobile, visible on small and up */}
          <a 
            href="#contact" 
            className="hidden sm:flex items-center justify-center px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-[#0b0f1a] text-sm font-medium transition-colors duration-500 shadow-md font-sans hover:scale-105 active:scale-95"
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white transition-all duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="absolute top-20 left-0 right-0 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-white/10 shadow-2xl p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name} 
                  variants={itemVariants}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-gray-900 dark:text-white hover:text-vibrant-blue dark:hover:text-vibrant-blue transition-all duration-300 font-display flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-8 h-[2px] bg-vibrant-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
                </motion.a>
              ))}
              <motion.div variants={itemVariants} className="pt-4 border-t border-gray-100 dark:border-white/5">
                <a 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-4 rounded-2xl bg-vibrant-blue text-white font-bold text-lg shadow-lg shadow-vibrant-blue/20"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

