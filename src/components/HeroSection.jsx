import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Check, Copy } from 'lucide-react';
import Navbar from './Navbar';
import ResumeModal from './ResumeModal';
import harshPhoto from '../assets/Harsh-portfolio.jpg';

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
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

  // Global Keyboard Shortcuts (R = Resume, C = Contact)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger single-letter shortcuts if typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if ((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setIsResumeModalOpen(true);
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

  const [hasCopiedBio, setHasCopiedBio] = useState(false);

  const handleCopyBio = () => {
    const recruiterSummary = "Harsh Lagwal | AI & ML Engineer | MBA in Decision Science (IIT Patna, 2026–2028) | B.Tech CSE (76.8%) | Core: Generative AI, PyTorch, Gemini 1.5, Deep Learning, FastAPI, Cloud ML | Email: Harshlagwal2005@gmail.com | Portfolio: harshlagwal.vercel.app";
    navigator.clipboard.writeText(recruiterSummary);
    setHasCopiedBio(true);
    setToastMessage('✓ Recruiter bio summary copied to clipboard!');
    setTimeout(() => {
      setToastMessage('');
      setHasCopiedBio(false);
    }, 3500);
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] min-h-[100dvh] w-full overflow-hidden flex flex-col justify-between pt-28 md:pt-36 pb-12 bg-white dark:bg-[#131314] text-[#202124] dark:text-[#e3e3e3] transition-colors duration-300"
    >
      <Navbar 
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Interactive Cursor Spotlight Glow */}
      <div 
        className="mouse-spotlight hidden lg:block opacity-40 dark:opacity-0"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(26, 115, 232, 0.08), transparent 80%)`,
        }}
      />
      <div 
        className="mouse-spotlight hidden lg:dark:block opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(138, 180, 248, 0.08), rgba(66, 133, 244, 0.04) 40%, transparent 75%)`,
        }}
      />

      {/* Subtle Ambient Background Grid & Dot Matrix */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 dot-matrix-canvas opacity-70 dark:opacity-60" />
        
        {/* Soft Ambient Blobs */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#1a73e8]/5 dark:bg-[#8ab4f8]/5 blur-[130px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#4285f4]/5 dark:bg-[#8ab4f8]/5 blur-[140px] bottom-[-100px] right-[-100px]" />
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
            className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6f4ea] dark:bg-[#137333]/20 border border-[#ceead6] dark:border-[#137333]/40 text-[#137333] dark:text-[#81c995] text-xs font-mono font-medium shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#137333] dark:bg-[#81c995] animate-pulse" />
            <span>Available for AI / ML Roles</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-[#202124] dark:text-[#e3e3e3] leading-[1.18] font-display">
              Hi, I'm Harsh Lagwal. <br />
              <span className="text-[#1a73e8] dark:text-[#8ab4f8]">
                AI & Machine Learning
              </span> Engineer.
            </h1>
          </motion.div>

          {/* Bio Description (Authentic, Clean) */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#5f6368] dark:text-[#9aa0a6] max-w-lg leading-relaxed mb-7 font-normal"
          >
            Building practical, high-performance systems with Generative AI, Large Language Models, and intelligent automation.
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-7 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="px-6 sm:px-7 py-3 rounded-xl bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#8ab4f8] dark:text-[#131314] dark:hover:bg-[#a8c7fa] text-white font-medium text-sm sm:text-base hover:scale-[1.01] active:scale-95 transition-all shadow-xs flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowRight size={17} strokeWidth={1.5} />
            </a>

            <button 
              onClick={() => setIsResumeModalOpen(true)}
              className="px-5 sm:px-6 py-3 rounded-xl bg-[#f1f3f4] hover:bg-[#e8eaed] dark:bg-[#1e1f20] dark:hover:bg-[#2d3135] text-[#202124] dark:text-[#e3e3e3] font-medium text-sm sm:text-base border border-[#dadce0] dark:border-[#2e3134] hover:scale-[1.01] active:scale-95 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Download size={17} strokeWidth={1.5} className="text-[#1a73e8] dark:text-[#8ab4f8]" />
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
                className="p-2.5 rounded-xl bg-[#f1f3f4] hover:bg-[#e8eaed] dark:bg-[#1e1f20] dark:hover:bg-[#2d3135] border border-[#dadce0] dark:border-[#2e3134] text-[#3c4043] dark:text-[#bdc1c6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] hover:scale-105 transition-all shadow-xs"
              >
                <social.icon size={18} strokeWidth={1.5} />
              </a>
            ))}

            {/* 1-Click Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              title="Copy Harsh's Email Address"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#f1f3f4] hover:bg-[#e6f4ea] dark:bg-[#1e1f20] dark:hover:bg-[#137333]/20 border border-[#dadce0] dark:border-[#2e3134] text-[#3c4043] dark:text-[#bdc1c6] hover:text-[#137333] dark:hover:text-[#81c995] text-xs font-mono font-medium transition-all shadow-xs group cursor-pointer"
            >
              <Copy size={14} strokeWidth={1.5} className="text-[#5f6368] group-hover:text-[#137333] transition-colors" />
              <span>Copy Email</span>
            </button>

            {/* 1-Click Recruiter Quick-Bio Button */}
            <button
              onClick={handleCopyBio}
              title="Copy 1-click summary for Recruiters & Hiring Managers"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#f1f3f4] hover:bg-[#e8f0fe] dark:bg-[#1e1f20] dark:hover:bg-[#8ab4f8]/15 border border-[#dadce0] dark:border-[#2e3134] text-[#3c4043] dark:text-[#bdc1c6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] text-xs font-mono font-medium transition-all shadow-xs group cursor-pointer"
            >
              {hasCopiedBio ? (
                <Check size={14} strokeWidth={2} className="text-[#137333] dark:text-[#81c995]" />
              ) : (
                <Sparkles size={14} strokeWidth={1.5} className="text-[#1a73e8] dark:text-[#8ab4f8]" />
              )}
              <span>{hasCopiedBio ? 'Bio Copied!' : 'Recruiter Bio'}</span>
            </button>

            {/* Keyboard Shortcuts Hint */}
            <div className="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-mono text-[#80868b] dark:text-[#9aa0a6] ml-2 pl-3 border-l border-[#dadce0] dark:border-[#2e3134]">
              <span>Press</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#f1f3f4] dark:bg-[#2a2b2e] text-[#3c4043] dark:text-[#e3e3e3] font-bold text-[10px]">R</kbd>
              <span>Resume</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#f1f3f4] dark:bg-[#2a2b2e] text-[#3c4043] dark:text-[#e3e3e3] font-bold text-[10px]">C</kbd>
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
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1a73e8]/10 via-[#4285f4]/10 to-[#8ab4f8]/10 rounded-[2.5rem] blur-2xl -z-10" />

            {/* Clean Glass Portrait Container */}
            <div className="relative rounded-3xl p-3 bg-white/90 dark:bg-[#1e1f20]/90 border border-[#dadce0] dark:border-[#2e3134] shadow-lg backdrop-blur-xl transition-all group">
              
              {/* Photo */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#f1f3f4] dark:bg-[#131314] border border-[#dadce0] dark:border-[#2e3134]">
                <img
                  src={harshPhoto}
                  alt="Harsh Lagwal"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.99] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle soft gradient fade at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* Clean Bottom Bio Tag */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-sm font-medium font-display tracking-tight">Harsh Lagwal</p>
                    <p className="text-xs text-gray-200 dark:text-[#8ab4f8] font-sans">AI & Machine Learning Engineer</p>
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



    </section>
  );
};

export default HeroSection;





