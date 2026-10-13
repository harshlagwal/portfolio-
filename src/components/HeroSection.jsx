import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Check, Copy, Zap } from 'lucide-react';
import Navbar from './Navbar';
import ResumeModal from './ResumeModal';
import harshCutout from '../assets/harsh-cutout.png';

const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [hasCopiedBio, setHasCopiedBio] = useState(false);
  
  const heroRef = useRef(null);

  // Parallax / 3D Tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const portraitRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const portraitRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-7, 7]);
  const streakShiftX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const headingShiftX = useTransform(smoothMouseX, [-0.5, 0.5], [12, -12]);

  const resumeLink = "https://drive.google.com/file/d/1PA8fV23UmJ2AYf7kxUGaihI88M1NWW0b/view?usp=sharing";
  const emailAddress = "Harshlagwal2005@gmail.com";

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Keyboard Shortcuts (R = Resume, C = Contact)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if ((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setIsResumeModalOpen(true);
      } else if ((e.key === 'c' || e.key === 'C') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        scrollToContact();
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

  const handleCopyBio = () => {
    const recruiterSummary = "Harsh Lagwal | AI & ML Engineer | MBA in Decision Science (IIT Patna, 2026–2028) | Core: Generative AI, PyTorch, Gemini 1.5, Deep Learning, FastAPI, Cloud ML | Email: Harshlagwal2005@gmail.com | Portfolio: harshlagwalportfolio.netlify.app";
    navigator.clipboard.writeText(recruiterSummary);
    setHasCopiedBio(true);
    setToastMessage('✓ Recruiter bio summary copied to clipboard!');
    setTimeout(() => {
      setToastMessage('');
      setHasCopiedBio(false);
    }, 3500);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -40, duration: 1.3 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100vh] min-h-[100dvh] w-full overflow-hidden flex flex-col justify-between pt-24 md:pt-28 pb-8 bg-white dark:bg-[#08090d] text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      <Navbar 
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* ── Cinematic Ambient Background & Motion Streaks ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Subtle dot matrix & fine grain */}
        <div className="absolute inset-0 dot-matrix-canvas opacity-15 dark:opacity-40" />
        <div className="absolute inset-0 cinematic-streaks opacity-20 dark:opacity-80" />

        {/* Horizontal Motion Light Streaks (Cyan left, Orange right - matching reference image) */}
        <motion.div 
          style={{ x: streakShiftX }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[280px] md:h-[360px] pointer-events-none flex items-center justify-center opacity-30 dark:opacity-100"
        >
          {/* Cyan Glow (Left & Center) */}
          <div className="absolute left-[3%] md:left-[10%] w-[380px] md:w-[650px] h-[150px] md:h-[230px] bg-gradient-to-r from-transparent via-[#55DFFF]/20 dark:via-[#55DFFF]/30 to-transparent blur-[50px] md:blur-[75px] transform -skew-x-12" />
          
          {/* Warm Amber / Orange Flare (Right & Center) */}
          <div className="absolute right-[3%] md:right-[10%] w-[400px] md:w-[700px] h-[160px] md:h-[250px] bg-gradient-to-r from-transparent via-[#FF9868]/25 dark:via-[#FF9868]/35 to-transparent blur-[55px] md:blur-[80px] transform skew-x-12" />

          {/* Deep horizontal beam streak lines */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#55DFFF]/30 dark:via-[#55DFFF]/45 to-transparent absolute top-[30%]" />
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9868]/35 dark:via-[#FF9868]/50 to-transparent absolute bottom-[35%]" />
          <div className="w-[85%] h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent absolute top-[50%]" />
        </motion.div>

        {/* Soft Vignette around screen edges */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/10 dark:to-black/80 pointer-events-none" />
      </div>

      {/* ── Main 3-Column Hero Composition ── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto flex flex-col justify-center relative py-4 lg:py-6">
        
        {/* ── Oversized Cinematic Signature Heading Layered Tight Behind Center Portrait ── */}
        <motion.div 
          style={{ x: headingShiftX }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-[3%] sm:top-[2%] md:top-[1%] lg:top-[2%] left-1/2 -translate-x-1/2 w-full max-w-[560px] sm:max-w-[660px] md:max-w-[740px] lg:max-w-[800px] xl:max-w-[860px] px-4 flex items-center justify-between select-none pointer-events-none z-10"
        >
          <span 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[115px] font-cursive tracking-normal text-slate-950 dark:text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_4px_30px_rgba(255,255,255,0.22)] leading-none"
          >
            Harsh
          </span>
          <span 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[115px] font-cursive tracking-normal text-slate-950 dark:text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_4px_30px_rgba(255,255,255,0.22)] leading-none"
          >
            Lagwal
          </span>
        </motion.div>

        {/* ── 3-Column Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center pt-8 sm:pt-10 md:pt-12 lg:pt-10">
          
          {/* 1. Left Column: Pure, Clean, Professional Tech Specs & Socials (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left z-20 order-2 lg:order-1"
          >
            {/* Clean Professional Skill Cards - High Contrast in Light Mode */}
            <div className="space-y-3 sm:space-y-3.5 font-sans mb-7 w-full max-w-xs sm:max-w-sm lg:max-w-none">
              {[
                { title: "AI & ML Engineering", sub: "Deep Learning • PyTorch", idx: "01", accent: "hover:border-blue-500/50 dark:hover:border-[#55DFFF]/40 group-hover:text-blue-600 dark:group-hover:text-[#55DFFF]" },
                { title: "Generative AI & LLMs", sub: "Agents • RAG • Gemini", idx: "02", accent: "hover:border-indigo-500/50 dark:hover:border-[#8ab4f8]/40 group-hover:text-indigo-600 dark:group-hover:text-[#8ab4f8]" },
                { title: "Intelligent Web Systems", sub: "FastAPI • React • Cloud ML", idx: "03", accent: "hover:border-amber-500/50 dark:hover:border-[#FF9868]/40 group-hover:text-amber-600 dark:group-hover:text-[#FF9868]" },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`group relative p-3 sm:p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.08] shadow-sm dark:shadow-none ${item.accent} transition-all duration-300 hover:translate-x-1 backdrop-blur-xs text-left cursor-default`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-slate-500 dark:text-white/40">{item.idx}</span>
                  </div>
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-mono block font-medium">
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: Github, href: "https://github.com/harshlagwal", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/harsh-lagwal", label: "LinkedIn" },
                { icon: Mail, href: "mailto:Harshlagwal2005@gmail.com", label: "Email" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/15 border border-slate-300 dark:border-white/10 hover:border-blue-600 dark:hover:border-[#8ab4f8] flex items-center justify-center text-slate-800 hover:text-blue-600 dark:text-white/80 dark:hover:text-[#8ab4f8] transition-all hover:scale-110 shadow-xs"
                >
                  <item.icon size={18} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* 2. Center Column: Pure Cutout Portrait with Smooth Fade (6 cols) */}
          <motion.div 
            style={{ 
              rotateX: portraitRotateX,
              rotateY: portraitRotateY,
              transformStyle: "preserve-3d" 
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col items-center justify-center relative z-30 select-none order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] flex justify-center">
              
              {/* Dual-tone cinematic rim light glow behind portrait (soft in light mode) */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#55DFFF]/20 via-transparent to-[#FF9868]/25 dark:from-[#55DFFF]/25 dark:to-[#FF9868]/30 blur-3xl -z-10 pointer-events-none opacity-50 dark:opacity-100" />

              {/* Pure cutout portrait feathering smoothly at bottom */}
              <div 
                className="relative w-full overflow-hidden flex justify-center"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 70%, rgba(0,0,0,0.8) 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, rgba(0,0,0,0.8) 82%, transparent 100%)',
                }}
              >
                <img
                  src={harshCutout}
                  alt="Harsh Lagwal"
                  className="w-full h-auto max-h-[460px] sm:max-h-[510px] lg:max-h-[550px] object-contain object-top transition-transform duration-700 ease-out hover:scale-[1.02] filter contrast-[1.05] brightness-[1.0] drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]"
                />
              </div>

            </div>
          </motion.div>

          {/* 3. Right Column: Introduction, High-Impact Headline & Premium CTA (3 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right z-20 order-3"
          >
            {/* Status Pill - High Contrast in Light & Dark Mode */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-sky-100 text-sky-900 border border-sky-300 dark:bg-[#55DFFF]/10 dark:text-[#55DFFF] dark:border-[#55DFFF]/25 mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-[#55DFFF] animate-pulse" />
              Available for AI Roles
            </div>

            {/* Premium Readable Headline with High-Contrast Gradient */}
            <h2 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-slate-900 dark:text-white leading-snug max-w-sm mb-6 font-sans">
              AI & Machine Learning Engineer developing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 dark:from-[#55DFFF] dark:via-[#8ab4f8] dark:to-[#FF9868]">Generative AI, LLM Agents</span> & scalable high-performance systems.
            </h2>

            {/* Luminous Modern CTA - High Contrast in Light Mode, Glowing in Dark Mode */}
            <div className="flex items-center gap-2.5 mb-5">
              {/* Lightning Icon Circle Button */}
              <button
                onClick={scrollToContact}
                aria-label="Contact Harsh Lagwal"
                className="w-11 h-11 rounded-full bg-slate-900 text-[#55DFFF] dark:bg-black border border-slate-800 dark:border-white/20 flex items-center justify-center hover:scale-105 transition-all shadow-md cursor-pointer"
              >
                <Zap size={18} className="fill-[#55DFFF] text-[#55DFFF]" />
              </button>

              {/* Pill Button "Hire Me" */}
              <button
                onClick={scrollToContact}
                className="group px-6 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(85,223,255,0.5)] cursor-pointer flex items-center gap-2 border border-slate-800 dark:border-white/60"
              >
                <span>Hire Me</span>
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Clean Single-Line Text Links */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-slate-800 dark:text-white/70 font-medium">
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="hover:underline hover:text-blue-600 dark:hover:text-[#55DFFF] cursor-pointer transition-colors"
              >
                Resume
              </button>

              <span className="text-slate-400 dark:text-white/30">•</span>

              <button
                onClick={handleCopyBio}
                title="Copy recruiter bio"
                className="hover:underline hover:text-blue-600 dark:hover:text-[#55DFFF] cursor-pointer transition-colors"
              >
                {hasCopiedBio ? '✓ Bio Copied' : 'Recruiter Bio'}
              </button>

              <span className="text-slate-400 dark:text-white/30">•</span>

              <button
                onClick={handleCopyEmail}
                title="Copy email address"
                className="hover:underline hover:text-blue-600 dark:hover:text-[#55DFFF] cursor-pointer transition-colors"
              >
                Copy Email
              </button>
            </div>
          </motion.div>

        </div>

      </div>

      {/* ── Bottom Scroll Prompt - Visible in both Light and Dark Mode ── */}
      <div className="hidden sm:flex flex-col items-center gap-2 w-full z-10 select-none">
        <span className="text-[10px] text-slate-600 dark:text-white/40 uppercase tracking-[0.25em] font-bold font-mono">
          Scroll to explore
        </span>
        <div className="w-1 h-5 bg-slate-300 dark:bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            animate={{ y: [-20, 20] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[50%] bg-blue-600 dark:bg-[#55DFFF]"
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
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-slate-900 text-white dark:bg-[#121515] dark:text-white shadow-2xl backdrop-blur-md border border-slate-700 dark:border-[#55DFFF]/30 flex items-center gap-2.5 text-xs font-mono font-medium"
          >
            <Check size={16} className="text-emerald-400 dark:text-[#55DFFF]" />
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





