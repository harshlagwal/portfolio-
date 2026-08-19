import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Terminal, Search, Sparkles, Check, Copy } from 'lucide-react';
import Navbar from './Navbar';
import ResumeModal from './ResumeModal';
import CommandPalette from './CommandPalette';
import TerminalDrawer from './TerminalDrawer';
import harshPhoto from '../assets/Harsh-portfolio.jpg';

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const resumeLink = "https://drive.google.com/file/d/1PA8fV23UmJ2AYf7kxUGaihI88M1NWW0b/view?usp=sharing";
  const emailAddress = "Harshlagwal2005@gmail.com";

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Global Keyboard Shortcuts (Ctrl+K = Search, R = Resume, T = Terminal, C = Contact)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Handle Ctrl+K / Cmd+K search palette globally
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
        return;
      }

      // Don't trigger single-letter shortcuts if typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if ((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setIsResumeModalOpen(true);
      } else if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      } else if ((e.key === 'c' || e.key === 'C') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setToastMessage('✓ Email copied to clipboard: ' + emailAddress);
    setTimeout(() => setToastMessage(''), 3500);
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] min-h-[100dvh] w-full overflow-hidden flex flex-col justify-between pt-28 md:pt-36 pb-12 bg-white dark:bg-[#060913] text-gray-900 dark:text-white transition-colors duration-500"
    >
      <Navbar 
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="mouse-spotlight hidden lg:block opacity-60 dark:opacity-0"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.08), transparent 80%)`,
        }}
      />
      <div 
        className="mouse-spotlight hidden lg:dark:block opacity-80"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.08), rgba(99, 102, 241, 0.04) 40%, transparent 75%)`,
        }}
      />

      {/* Subtle Ambient Lighting Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-[0.15] dark:opacity-[0.25]" />
        
        {/* Soft Ambient Blobs */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-cyan-500/10 blur-[130px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-purple-600/10 blur-[140px] bottom-[-100px] right-[-100px]" />
      </div>


      {/* ── Main Clean Split Hero Layout ── */}
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 flex-grow my-auto">
        
        {/* Left Column: Typography & CTAs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left font-sans">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-medium shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for AI / ML Roles</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15] font-display">
              Hi, I'm Harsh Lagwal. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300">
                AI & Machine Learning
              </span> Engineer.
            </h1>
          </motion.div>

          {/* Bio Description (Authentic, Clean, No Buzzword Soup) */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed mb-7 font-normal"
          >
            Building practical, high-performance systems with Generative AI, Large Language Models, and intelligent automation.
          </motion.p>

          {/* Action Buttons Row (2 Clean, Non-crowded Buttons) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-7 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="px-6 sm:px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-white font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-95 transition-all shadow-sm flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowRight size={17} />
            </a>

            <button 
              onClick={() => setIsResumeModalOpen(true)}
              className="px-5 sm:px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200/80 dark:bg-white/[0.08] dark:hover:bg-white/15 text-gray-900 dark:text-white font-semibold text-sm sm:text-base border border-gray-200/80 dark:border-white/10 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Download size={17} className="text-blue-600 dark:text-cyan-400" />
              <span>Resume</span>
            </button>
          </motion.div>


          {/* Social Links Row & Quick Copy Email */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
          >
            {[
              { icon: Github, href: "https://github.com/harshlagwal", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/harsh-lagwal", label: "LinkedIn" },
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.label}
                className="p-2.5 rounded-xl bg-gray-100/80 hover:bg-blue-50 dark:bg-white/[0.05] dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105 transition-all shadow-xs"
              >
                <social.icon size={18} />
              </a>
            ))}

            {/* 1-Click Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              title="Copy Harsh's Email Address"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-100/80 hover:bg-emerald-50 dark:bg-white/[0.05] dark:hover:bg-emerald-500/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400/40 text-xs font-mono font-medium transition-all shadow-xs group cursor-pointer"
            >
              <Copy size={14} className="text-gray-500 group-hover:text-emerald-500 transition-colors" />
              <span>Copy Email</span>
            </button>

            {/* Keyboard Shortcuts Hint */}
            <div className="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-400 dark:text-gray-500 ml-2 pl-3 border-l border-gray-200 dark:border-white/10">
              <span>Press</span>
              <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 font-bold text-[10px]">R</kbd>
              <span>Resume</span>
              <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 font-bold text-[10px]">C</kbd>
              <span>Contact</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Sleek Clean Portrait (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center select-none"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            
            {/* Soft Ambient Halo behind the portrait */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-cyan-400/20 rounded-[2.5rem] blur-2xl -z-10" />

            {/* Clean Glass Portrait Container */}
            <div className="relative rounded-3xl p-3 bg-white/70 dark:bg-[#0c1222]/80 border border-gray-200/80 dark:border-white/10 shadow-2xl backdrop-blur-xl transition-all group">
              
              {/* Photo */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200/60 dark:border-white/5">
                <img
                  src={harshPhoto}
                  alt="Harsh Lagwal"
                  className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle soft gradient fade at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* Clean Bottom Bio Tag */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-sm font-bold font-display tracking-tight">Harsh Lagwal</p>
                    <p className="text-xs text-gray-200 dark:text-cyan-300 font-sans">AI & Machine Learning Engineer</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-bold bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    OPEN
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Subtle Bottom Scroll Prompt */}
      <div className="mt-6 hidden sm:flex flex-col items-center gap-2 w-full z-10">
        <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.25em] font-bold font-mono">
          Scroll to explore
        </span>
        <div className="w-1 h-6 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            animate={{ y: [-20, 20] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[40%] bg-blue-600 dark:bg-cyan-400"
          />
        </div>
      </div>
      
      {/* Toast Notification Container */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-gray-900/95 dark:bg-white/95 text-white dark:text-black shadow-2xl backdrop-blur-md border border-gray-700/50 dark:border-gray-200 flex items-center gap-2.5 text-xs font-mono font-medium"
          >
            <Check size={16} className="text-emerald-400 dark:text-emerald-600" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
        resumeLink={resumeLink} 
      />


      {/* Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Terminal Drawer */}
      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenContact={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />
    </section>
  );
};

export default HeroSection;





