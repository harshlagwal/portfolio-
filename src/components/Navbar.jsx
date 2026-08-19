import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Terminal, Search, Mail, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import harshPhoto from '../assets/Harsh-portfolio.jpg';

const Navbar = ({ onOpenCommandPalette, onOpenTerminal }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work',       href: '#projects',   id: 'projects' },
    { name: 'About',      href: '#about',      id: 'about' },
    { name: 'Skills',     href: '#skills',     id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education',  href: '#education',  id: 'education' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[96vw]">
      {/* Floating Capsule Bar with full Light & Dark mode support */}
      <nav className="bg-white/90 dark:bg-[#18181b]/95 text-gray-800 dark:text-white rounded-full p-1.5 pl-2 pr-2 shadow-xl shadow-gray-300/40 dark:shadow-2xl dark:shadow-black/50 border border-gray-200/90 dark:border-white/10 flex items-center gap-1 sm:gap-2 backdrop-blur-xl transition-colors duration-300">
        
        {/* Left: Circular Avatar Badge */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, '#home')}
          title="Harsh Lagwal - AI Engineer"
          className="w-9 h-9 rounded-full bg-white dark:bg-white p-0.5 shrink-0 overflow-hidden flex items-center justify-center border border-gray-200/80 dark:border-white/20 shadow-xs hover:scale-105 transition-transform"
        >
          <img 
            src={harshPhoto} 
            alt="Harsh Lagwal" 
            className="w-full h-full object-cover object-top rounded-full" 
          />
        </a>

        {/* Center: Clean Text Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`px-3 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-150 ${
                  isActive
                    ? 'text-gray-950 dark:text-white bg-gray-100 dark:bg-white/15 font-semibold'
                    : 'text-gray-600 dark:text-white/75 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Utility Icon Actions (⌘K Search, Terminal, Theme Toggle) */}
        <div className="flex items-center gap-1">
          
          {/* Quick Search Palette (⌘K) */}
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              title="Search (Ctrl+K)"
              className="hidden lg:flex items-center justify-center w-8 h-8 rounded-full text-gray-600 dark:text-white/70 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-xs"
            >
              <Search size={14} />
            </button>
          )}

          {/* Terminal CLI Shortcut */}
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              title="Open Terminal"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full text-gray-600 dark:text-white/70 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <Terminal size={14} />
            </button>
          )}

          {/* WhatsApp Direct Connect */}
          <a
            href="https://wa.me/916230624011?text=Hi%20Harsh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp (+91 6230624011)"
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 dark:text-white/75 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/15 transition-all select-none"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="15" 
              height="15" 
              fill="currentColor"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
            </svg>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 dark:text-white/70 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'dark' : 'light'}
                initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isDark ? (
                  <Sun size={15} className="text-yellow-400" />
                ) : (
                  <Moon size={15} className="text-gray-700" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>


        {/* Right: Distinct High-Contrast Email / Contact Pill Button */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, '#contact')}
          className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100 font-semibold px-4 py-2 rounded-full text-xs sm:text-sm transition-all shrink-0 shadow-sm flex items-center gap-1.5 select-none hover:scale-[1.02] active:scale-95 ml-1"
        >
          <span className="hidden sm:inline">Harshlagwal2005@gmail.com</span>
          <span className="sm:hidden">Contact</span>
          <ArrowUpRight size={13} className="text-gray-300 dark:text-gray-700" />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-full text-gray-700 dark:text-white/80 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        >
          {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>

      </nav>

      {/* Mobile Drawer Dropdown Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mt-2 p-4 rounded-3xl bg-white/95 dark:bg-[#18181b]/95 backdrop-blur-2xl border border-gray-200/90 dark:border-white/10 text-gray-900 dark:text-white shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleScroll(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive 
                        ? 'bg-gray-100 dark:bg-white/15 text-gray-950 dark:text-white font-semibold'
                        : 'text-gray-600 dark:text-white/80 hover:bg-gray-50 dark:hover:bg-white/10'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400" />}
                  </a>
                );
              })}

              <div className="pt-3 mt-1 border-t border-gray-100 dark:border-white/10 flex gap-2">
                {onOpenCommandPalette && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenCommandPalette();
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white font-mono text-xs flex items-center justify-center gap-1.5"
                  >
                    <Search size={13} /> ⌘K Search
                  </button>
                )}
                {onOpenTerminal && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenTerminal();
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white font-mono text-xs flex items-center justify-center gap-1.5"
                  >
                    <Terminal size={13} /> Terminal
                  </button>
                )}
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/916230624011?text=Hi%20Harsh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-xs"
                >
                  <span>Chat on WhatsApp (+91 6230624011)</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    handleScroll(e, '#contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center w-full py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-semibold text-xs transition-all shadow-sm"
                >
                  Contact Harsh
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

};

export default Navbar;





