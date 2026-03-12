import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pillRef = useRef(null);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 20);
    update(); // run immediately on mount
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const navLinks = [
    { name: 'Home',       href: '#home' },
    { name: 'About',      href: '#about' },
    { name: 'Skills',     href: '#skills' },
    { name: 'Projects',   href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact',    href: '#contact' },
  ];

  // ─── Visual-only style (no layout properties change) ────────────────────────
  const pillStyle = {
    // === LAYOUT — never changes ===
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 16px',
    borderRadius: '999px',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    // === VISUAL — transitions on scroll ===
    backgroundColor: isScrolled
      ? (isDark ? 'rgba(15,23,42,0.94)' : 'rgba(255,255,255,0.94)')
      : (isDark ? 'rgba(15,23,42,0.72)' : 'rgba(255,255,255,0.72)'),
    boxShadow: isScrolled
      ? '0 8px 32px rgba(0,0,0,0.22)'
      : '0 2px 12px rgba(0,0,0,0.08)',
    transition: 'background-color 350ms ease, box-shadow 350ms ease',
  };

  return (
    /*
      ⚠️ NO Framer Motion on <nav> — plain element so browser positions it
         correctly on the very first paint. No transform animation that could
         fight with left:50% + translateX(-50%) on mobile.
    */
    <nav
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        width: '92%',
        maxWidth: '1152px',
        willChange: 'transform',   /* GPU layer for sub-pixel centering */
      }}
    >
      {/* ── Pill ─────────────────────────────────────────────────────────────── */}
      <div ref={pillRef} style={pillStyle}>

        {/* Logo */}
        <a
          href="#home"
          style={{ display: 'flex', alignItems: 'center', lineHeight: 1, gap: '2px', textDecoration: 'none' }}
        >
          <span className="text-xl font-bold font-display tracking-tight text-gray-900 dark:text-white leading-none">
            Harsh
          </span>
          <span className="text-xl font-bold font-display tracking-tight text-vibrant-blue leading-none">
            &nbsp;Lagwal
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-8">
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

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            style={{
              width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)'}`,
              background: isDark ? 'rgba(30,41,59,0.7)' : 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'dark' : 'light'}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.3, ease: 'backOut' }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {isDark
                  ? <Sun size={17} className="text-yellow-400" />
                  : <Moon size={17} className="text-gray-800" />
                }
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Hire Me — desktop only */}
          <a
            href="#contact"
            className="hidden lg:flex"
            style={{
              height: '36px',
              padding: '0 16px',
              borderRadius: '999px',
              background: isDark ? '#ffffff' : '#111827',
              color: isDark ? '#111827' : '#ffffff',
              fontSize: '14px',
              fontWeight: 600,
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            Hire Me
          </a>

          {/* Hamburger — tablet/mobile only (<1024px) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden"
            style={{
              width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)'}`,
              background: isDark ? 'rgba(30,41,59,0.7)' : 'rgba(243,244,246,0.9)',
              color: isDark ? '#ffffff' : '#111827',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>
      </div>

      {/* ── Mobile dropdown ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              right: 0,
              borderRadius: '24px',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
              background: isDark ? 'rgba(10,18,35,0.97)' : 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              padding: '24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
              zIndex: 49,
            }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold text-gray-900 dark:text-white hover:text-vibrant-blue dark:hover:text-vibrant-blue transition-colors duration-300 font-display flex items-center justify-between group"
                >
                  {link.name}
                  <span className="w-8 h-[2px] bg-vibrant-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                </a>
              ))}

              <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-4 rounded-2xl bg-vibrant-blue text-white font-bold text-base shadow-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
