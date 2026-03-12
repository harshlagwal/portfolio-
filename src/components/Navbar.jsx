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
    // Immediately check on mount in case page is already scrolled
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      transition: { duration: 0.3, staggerChildren: 0.05, staggerDirection: -1 }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.1, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-[95%] max-w-6xl"
      style={{ willChange: 'transform' }}
    >
      {/* ─── Pill Container ─────────────────────────────────────────────────────── */}
      {/*
        ALL layout properties are STATIC — no conditional layout classes.
        Only visual properties (bg opacity, shadow, blur) change on scroll via inline style.
        This guarantees zero layout shift between initial & scrolled state.
      */}
      <div
        className="rounded-3xl md:rounded-full border flex items-center justify-between"
        style={{
          // Fixed padding — identical in every state
          padding: '10px 16px',
          // Visual-only transitions — no layout triggers
          transition: 'background-color 400ms ease, box-shadow 400ms ease, border-color 400ms ease',
          // --- Scrolled vs. initial (visual only) ---
          backgroundColor: isScrolled
            ? isDark ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.92)'
            : isDark ? 'rgba(15, 23, 42, 0.75)' : 'rgba(255, 255, 255, 0.75)',
          boxShadow: isScrolled
            ? '0 8px 32px rgba(0,0,0,0.18)'
            : '0 4px 16px rgba(0,0,0,0.08)',
          borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-1 hover:opacity-80 transition-opacity duration-300"
          style={{ lineHeight: 1 }}
        >
          <span className="text-xl font-bold font-display tracking-tight text-gray-900 dark:text-white leading-none">
            Harsh
          </span>
          <span className="text-xl font-bold font-display tracking-tight text-vibrant-blue leading-none">
            &nbsp;Lagwal
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-vibrant-blue dark:hover:text-vibrant-blue transition-colors duration-300 font-sans relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vibrant-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full border border-gray-200/60 dark:border-gray-700/60 bg-white/60 dark:bg-slate-800/60 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.35, ease: 'backOut' }}
                className="flex items-center justify-center"
              >
                {isDark
                  ? <Sun size={17} className="text-yellow-400" />
                  : <Moon size={17} className="text-gray-800" />
                }
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Hire Me — sm and up */}
          <a
            href="#contact"
            className="hidden sm:flex items-center justify-center h-9 px-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold font-sans hover:scale-105 active:scale-95 transition-transform duration-200 shadow"
          >
            Hire Me
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="flex md:hidden w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-slate-800 items-center justify-center text-gray-900 dark:text-white hover:scale-105 active:scale-95 transition-transform duration-200 shrink-0"
          >
            {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu Dropdown ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="absolute top-[calc(100%+8px)] left-0 right-0 md:hidden rounded-3xl border border-gray-200/50 dark:border-white/10 shadow-2xl p-6 overflow-hidden"
            style={{
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.97)' : 'rgba(255, 255, 255, 0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  variants={itemVariants}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-gray-900 dark:text-white hover:text-vibrant-blue dark:hover:text-vibrant-blue transition-colors duration-300 font-display flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-8 h-[2px] bg-vibrant-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                </motion.a>
              ))}

              <motion.div variants={itemVariants} className="pt-4 border-t border-gray-100 dark:border-white/10">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-4 rounded-2xl bg-vibrant-blue text-white font-bold text-base shadow-lg shadow-vibrant-blue/20 hover:bg-blue-600 transition-colors duration-300"
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
