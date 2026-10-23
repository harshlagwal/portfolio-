import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download, 
  ArrowUpRight 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';
import harshPhoto from '../assets/Harsh-portfolio.jpg';

export const Navbar = ({ onOpenResume }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const resumeLink = portfolioData.personal.resumeLink;

  useEffect(() => {
    const handleScroll = () => {
      // Trigger smooth floating capsule when scrolled down past 45px
      setIsScrolled(window.scrollY > 45);

      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 140;

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
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      if (window.__lenis) {
        window.__lenis.scrollTo(elem, {
          offset: isScrolled ? -50 : -80,
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        elem.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      window.history.pushState(null, '', href);
    }
  };

  const navLinks = [
    { name: 'About',          href: '#about',          id: 'about',          primary: true },
    { name: 'Projects',       href: '#projects',       id: 'projects',       primary: true },
    { name: 'Skills',         href: '#skills',         id: 'skills',         primary: true },
    { name: 'Experience',     href: '#experience',     id: 'experience',     primary: true },
    { name: 'Education',      href: '#education',      id: 'education',      primary: false },
    { name: 'Certifications', href: '#certifications', id: 'certifications', primary: false },
    { name: 'Contact',        href: '#contact',        id: 'contact',        primary: true },
  ];

  return (
    <>
      {/* ── Fixed Centered Header Wrapper (Zero layout snap, 100% fluid) ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none w-full transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'pt-2.5 sm:pt-3.5 px-3 sm:px-4' : 'pt-0 px-0'
        }`}
      >
        {/* Dynamic Morphing Navigation Shell */}
        <nav
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? 'w-auto max-w-[calc(100vw-1.5rem)] sm:max-w-fit h-11 sm:h-12 px-2.5 sm:pl-3 sm:pr-3.5 rounded-full bg-[#dadde3]/92 dark:bg-[#171920]/92 backdrop-blur-xl border border-[#cbd0d9] dark:border-[#262933] shadow-md shadow-black/[0.04] dark:shadow-xl dark:shadow-black/50 gap-2 sm:gap-3.5'
              : 'w-full max-w-6xl h-16 sm:h-18 px-4 sm:px-6 rounded-none bg-[#f0f2f5]/85 dark:bg-[#090a0d]/85 backdrop-blur-md border-b border-[#cbd0d9]/80 dark:border-[#262933]/80 shadow-none gap-4'
          }`}
        >
          {/* Brand Signature */}
          <a
            href="#home"
            onClick={(e) => handleScroll(e, '#home')}
            title="Harsh Lagwal"
            className={`flex items-center rounded-full transition-colors group cursor-pointer shrink-0 ${
              isScrolled ? 'gap-2 pl-0.5 pr-1.5 py-0.5 hover:bg-white/60 dark:hover:bg-[#1f2129]' : 'gap-3'
            }`}
          >
            <div 
              className={`rounded-full bg-white dark:bg-[#121317] shrink-0 overflow-hidden border border-[#cbd0d9] dark:border-[#262933] group-hover:scale-105 transition-all duration-300 ${
                isScrolled ? 'w-7 h-7 p-0.5' : 'w-9 h-9 p-0.5 shadow-2xs'
              }`}
            >
              <img 
                src={harshPhoto} 
                alt="Harsh Lagwal" 
                className="w-full h-full object-cover object-top rounded-full" 
              />
            </div>
            <div className="flex flex-col text-left">
              <span className={`font-medium tracking-tight text-[#0d0f12] dark:text-white font-display leading-tight truncate ${
                isScrolled ? 'text-xs sm:text-[13px] max-w-[95px] sm:max-w-none' : 'text-sm sm:text-base'
              }`}>
                Harsh Lagwal
              </span>
              {!isScrolled && (
                <span className="text-[11px] font-mono text-[#494f5c] dark:text-[#9fa6b6] leading-none mt-0.5 hidden sm:inline">
                  AI &amp; Machine Learning Engineer
                </span>
              )}
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex items-center ${isScrolled ? 'gap-0.5 px-0.5' : 'gap-1.5'}`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              // In scrolled pill mode, keep pill compact so it never exceeds card bounds
              const hideInCompact = isScrolled && !link.primary;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`rounded-full transition-all duration-150 select-none cursor-pointer whitespace-nowrap font-medium ${
                    hideInCompact ? 'hidden xl:inline-block' : 'inline-block'
                  } ${
                    isScrolled
                      ? `px-2.5 py-1 text-xs ${
                          isActive
                            ? 'text-[#0d0f12] dark:text-white bg-white dark:bg-[#262933] font-semibold shadow-2xs'
                            : 'text-[#494f5c] dark:text-[#9fa6b6] hover:text-[#0d0f12] dark:hover:text-white hover:bg-white/50 dark:hover:bg-[#1f2129]'
                        }`
                      : `px-3.5 py-1.5 text-xs sm:text-sm ${
                          isActive
                            ? 'text-[#0d0f12] dark:text-white bg-[#dadde3] dark:bg-[#1c1e25] font-semibold'
                            : 'text-[#494f5c] dark:text-[#9fa6b6] hover:text-[#0d0f12] dark:hover:text-white hover:bg-white/60 dark:hover:bg-[#171920]'
                        }`
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>


          {/* Utility Actions (Carefully bounded to prevent any overflow) */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* WhatsApp Quick Connect */}
            <a
              href={`https://wa.me/916230624011?text=${encodeURIComponent("Hi Harsh, I saw your portfolio and would like to connect!")}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className={`flex items-center justify-center rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-[#f8f9fc] dark:hover:bg-[#252629] transition-colors shrink-0 ${
                isScrolled ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-8 h-8 sm:w-9 sm:h-9'
              }`}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
              </svg>
            </a>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle light or dark theme"
              className={`flex items-center justify-center rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#121317] dark:hover:text-white hover:bg-[#f8f9fc] dark:hover:bg-[#252629] transition-colors cursor-pointer shrink-0 ${
                isScrolled ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-8 h-8 sm:w-9 sm:h-9'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'dark' : 'light'}
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center justify-center"
                >
                  {isDark ? (
                    <Sun size={15} strokeWidth={1.8} className="text-[#fbbc04]" />
                  ) : (
                    <Moon size={15} strokeWidth={1.8} className="text-[#5f6368]" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Résumé CTA Button — strictly contained, never overflows */}
            <button
              type="button"
              onClick={() => onOpenResume ? onOpenResume() : window.open(resumeLink, '_blank')}
              className={`hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#121317] hover:bg-[#2b2e35] text-white dark:bg-white dark:text-[#121317] dark:hover:bg-[#f1f3f4] font-medium transition-all shadow-2xs cursor-pointer shrink-0 select-none ${
                isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-xs sm:text-[13px]'
              }`}
            >
              <span>Résumé</span>
              <Download size={12} strokeWidth={2} />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#121317] dark:hover:text-white hover:bg-[#f8f9fc] dark:hover:bg-[#252629] transition-colors cursor-pointer shrink-0"
            >
              {isMobileMenuOpen ? <X size={16} strokeWidth={1.8} /> : <Menu size={16} strokeWidth={1.8} />}
            </button>
          </div>

        </nav>
      </header>

      {/* Mobile Drawer (Glassmorphic, clean, full responsiveness) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 pointer-events-auto md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-4 mt-16 sm:mt-20 p-4 rounded-3xl bg-[#dadde3]/95 dark:bg-[#171920]/95 backdrop-blur-2xl border border-[#cbd0d9] dark:border-[#262933] text-[#0d0f12] dark:text-[#ffffff] shadow-2xl max-w-md mx-auto"
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#cbd0d9] dark:border-[#262933]">
                <div className="flex items-center gap-2">
                  <img src={harshPhoto} alt="Harsh" className="w-7 h-7 rounded-full object-cover" />
                  <span className="font-medium text-sm text-[#0d0f12] dark:text-white font-display">Navigation</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#494f5c] hover:bg-white/60 dark:hover:bg-[#252832]"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
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
                      className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive 
                          ? 'bg-white dark:bg-[#262933] text-[#0d0f12] dark:text-white font-semibold'
                          : 'text-[#494f5c] dark:text-[#9fa6b6] hover:bg-white/50 dark:hover:bg-[#1f2129]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#0d0f12] dark:bg-white" />}
                    </a>
                  );
                })}

                <div className="pt-3 mt-1 border-t border-[#cbd0d9] dark:border-[#262933] flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenResume ? onOpenResume() : window.open(resumeLink, '_blank');
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#0d0f12] text-white dark:bg-white dark:text-[#0d0f12] text-xs font-medium transition-all shadow-xs cursor-pointer"
                  >
                    <span>Download Résumé</span>
                    <Download size={13} strokeWidth={2} />
                  </button>

                  <a
                    href={`https://wa.me/916230624011?text=${encodeURIComponent("Hi Harsh, I saw your portfolio and would like to connect!")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-all"
                  >
                    <span>WhatsApp (+91 6230624011)</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
