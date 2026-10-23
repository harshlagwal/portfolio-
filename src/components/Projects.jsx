import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Globe, 
  Terminal, 
  ArrowUpRight, 
  Building2, 
  Code2, 
  Church,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectMockup } from './projects/ProjectMockups';

const projectIconMap = {
  'master-ai': Sparkles,
  'codeink': BookOpen,
  'pyviz-sandbox': Cpu,
  'codechaska': Code2,
  'atc-constructions': Building2,
  'sheetla-mata-mandir': Church,
  'algoflow': Terminal
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null);
  const isManualJumping = useRef(false);

  const categories = [
    'All',
    'Generative AI',
    'Developer Tools',
    'Client & Web Apps'
  ];

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  const handleFilterSelect = (cat) => {
    setActiveFilter(cat);
    setActiveIndex(0);
  };

  // Framer Motion scroll tracking for desktop sticky stage
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isManualJumping.current) return;
    const total = filteredProjects.length;
    if (total <= 1) {
      setActiveIndex(0);
      return;
    }
    // Map scroll percentage directly to project index
    const computedIndex = Math.min(Math.floor(latest * total), total - 1);
    if (computedIndex >= 0 && computedIndex !== activeIndex) {
      setActiveIndex(computedIndex);
    }
  });

  // Direct smooth jump to project
  const scrollToProject = useCallback((targetIdx) => {
    const total = filteredProjects.length;
    const clampedIdx = Math.max(0, Math.min(targetIdx, total - 1));
    setActiveIndex(clampedIdx);

    if (!containerRef.current) return;
    isManualJumping.current = true;

    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const scrollableRange = containerRef.current.offsetHeight - window.innerHeight;
    
    // Position slightly past the segment threshold for stable focus
    const targetY = scrollableRange > 0 
      ? containerTop + (clampedIdx / total) * scrollableRange + 20
      : containerTop;

    if (window.__lenis) {
      window.__lenis.scrollTo(targetY, {
        duration: 0.85,
        onComplete: () => {
          setTimeout(() => {
            isManualJumping.current = false;
          }, 120);
        }
      });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      setTimeout(() => {
        isManualJumping.current = false;
      }, 850);
    }
  }, [filteredProjects.length]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      scrollToProject(activeIndex - 1);
    }
  }, [activeIndex, scrollToProject]);

  const handleNext = useCallback(() => {
    if (activeIndex < filteredProjects.length - 1) {
      scrollToProject(activeIndex + 1);
    }
  }, [activeIndex, filteredProjects.length, scrollToProject]);

  // Keyboard navigation when user is focused on the section
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only react if section is in viewport
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (activeIndex < filteredProjects.length - 1) {
          e.preventDefault();
          scrollToProject(activeIndex + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (activeIndex > 0) {
          e.preventDefault();
          scrollToProject(activeIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, filteredProjects.length, scrollToProject]);

  const safeActiveIndex = Math.min(activeIndex, Math.max(0, filteredProjects.length - 1));
  const currentProject = filteredProjects[safeActiveIndex] || filteredProjects[0];
  const IconComponent = currentProject ? (projectIconMap[currentProject.id] || Sparkles) : Sparkles;

  // Calculate dynamic height for desktop sticky track based on projects count
  const desktopTrackHeight = `${Math.max(filteredProjects.length, 1) * 90}vh`;

  return (
    <section 
      id="projects" 
      className="bg-[#f0f2f5] dark:bg-[#090a0d] text-[#0d0f12] dark:text-[#ffffff] border-t border-[#cbd0d9] dark:border-[#262933] transition-colors duration-250"
    >
      {/* Section Entry Header (Sticky top context) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-xs font-mono text-[#494f5c] dark:text-[#9fa6b6] mb-3 font-semibold">
              <Sparkles size={12} className="text-[#0d0f12] dark:text-white" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d0f12] dark:text-white font-display">
              Engineering ideas into digital products.
            </h2>
            <p className="text-sm sm:text-base text-[#494f5c] dark:text-[#9fa6b6] leading-relaxed mt-2.5">
              Autonomous agents, computer vision pipelines, and deployed production applications.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-3">
            <div className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-[#494f5c] dark:text-[#9fa6b6] whitespace-nowrap">
              Active Focus: <strong className="text-[#0d0f12] dark:text-white font-bold">0{activeIndex + 1}</strong> / 0{filteredProjects.length}
            </div>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            const count = cat === 'All' 
              ? portfolioData.projects.length 
              : portfolioData.projects.filter(p => p.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleFilterSelect(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#0d0f12] text-white dark:bg-white dark:text-[#0d0f12] shadow-xs font-bold'
                    : 'bg-[#dadde3] dark:bg-[#171920] text-[#0d0f12] dark:text-[#ffffff] hover:bg-[#cfd3da] dark:hover:bg-[#252832] border border-[#cbd0d9] dark:border-[#262933]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 dark:bg-black/20 text-white dark:text-[#0d0f12]' : 'opacity-60'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP: CINEMATIC STICKY SCROLL-DRIVEN SHOWCASE (lg:block)               */}
      {/* ========================================================================= */}
      <div 
        ref={containerRef} 
        className="relative hidden lg:block w-full"
        style={{ height: desktopTrackHeight }}
      >
        <div className="sticky top-20 h-[calc(100vh-5.5rem)] max-h-[880px] min-h-[660px] max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-between pb-6">
          
          {/* Main 2-Column Product Showcase Stage */}
          <div className="flex-1 grid grid-cols-12 gap-8 items-center min-h-0 py-2">
            
            {/* Left Column: Editorial & Engineering Specs (5 Cols) */}
            <div className="col-span-5 flex flex-col justify-between h-full max-h-[580px] pr-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject ? currentProject.id : 'empty'}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Meta Top: Monospace Index + Category + Sub-tag */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-2xl font-black text-[#0d0f12]/30 dark:text-white/30 tracking-tight">
                          0{activeIndex + 1}
                        </span>
                        <div className="h-4 w-px bg-[#cbd0d9] dark:border-[#262933]" />
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-xs font-mono font-semibold text-[#0d0f12] dark:text-white">
                          <IconComponent size={13} className="shrink-0" />
                          <span>{currentProject.category}</span>
                        </div>
                      </div>

                      {currentProject.tag && (
                        <span className="text-xs font-mono font-semibold text-[#494f5c] dark:text-[#9fa6b6]">
                          {currentProject.tag}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl xl:text-3xl font-bold tracking-tight text-[#0d0f12] dark:text-white font-display mb-2">
                      {currentProject.title}
                    </h3>

                    {/* Factual Narrative Summary */}
                    <p className="text-xs sm:text-[13px] text-[#2b303a] dark:text-[#c5cad6] leading-relaxed mb-3">
                      {currentProject.summary}
                    </p>

                    {/* Problem & Solution Specs Box (Apple-style Engineering Insights) */}
                    <div className="space-y-2 mb-3">
                      {currentProject.problem && (
                        <div className="p-2.5 rounded-xl bg-[#dadde3]/60 dark:bg-[#171920]/60 border border-[#cbd0d9] dark:border-[#262933]">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-[#494f5c] dark:text-[#9fa6b6] font-bold mb-0.5">
                            Challenge
                          </div>
                          <p className="text-[11px] text-[#2b303a] dark:text-[#c5cad6] leading-relaxed">
                            {currentProject.problem}
                          </p>
                        </div>
                      )}

                      {currentProject.solution && (
                        <div className="p-2.5 rounded-xl bg-[#dadde3]/60 dark:bg-[#171920]/60 border border-[#cbd0d9] dark:border-[#262933]">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-[#494f5c] dark:text-[#9fa6b6] font-bold mb-0.5">
                            Engineered Architecture
                          </div>
                          <p className="text-[11px] text-[#2b303a] dark:text-[#c5cad6] leading-relaxed">
                            {currentProject.solution}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Verified Metrics Row */}
                    {currentProject.metrics && currentProject.metrics.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mb-3">
                        {currentProject.metrics.map((metric, mIdx) => (
                          <span 
                            key={mIdx} 
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-[11px] font-mono text-[#0d0f12] dark:text-[#e3e6ed] font-medium"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>{metric}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Architecture & Stack + CTAs */}
                  <div className="pt-2 border-t border-[#cbd0d9] dark:border-[#262933] mt-auto">
                    {/* Tech Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      {currentProject.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2 py-0.5 rounded-md bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9]/60 dark:border-[#262933] text-[10px] font-mono font-medium text-[#0d0f12] dark:text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2.5">
                      {currentProject.liveDemo ? (
                        <a
                          href={currentProject.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0d0f12] hover:bg-[#23272f] text-white dark:bg-white dark:text-[#0d0f12] dark:hover:bg-[#eaecef] text-xs font-semibold transition-all shadow-xs"
                        >
                          <Globe size={13} strokeWidth={2} />
                          <span>Live Site</span>
                          <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-[11px] font-mono text-[#494f5c] dark:text-[#9fa6b6]">
                          <CheckCircle2 size={12} className="text-emerald-500" />
                          <span>Production Code Verified</span>
                        </span>
                      )}

                      {currentProject.github && (
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#dadde3] dark:bg-[#171920] hover:bg-[#cfd3da] dark:hover:bg-[#252832] border border-[#cbd0d9] dark:border-[#262933] text-xs font-semibold text-[#0d0f12] dark:text-white transition-colors"
                        >
                          <Github size={13} strokeWidth={2} />
                          <span>Repository</span>
                          <ExternalLink size={11} className="opacity-70" />
                        </a>
                      )}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Dominant Interactive UI Window Mockup (7 Cols) */}
            <div className="col-span-7 h-full max-h-[580px] flex items-center justify-center p-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject ? currentProject.id : 'empty-mockup'}
                  initial={{ opacity: 0, scale: 0.98, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -12 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full max-h-[560px]"
                >
                  <ProjectMockup projectId={currentProject.id} />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Bottom Persistent Scrubber & Navigation Track */}
          <div className="mt-4 pt-3 border-t border-[#cbd0d9] dark:border-[#262933] flex items-center justify-between gap-4">
            
            {/* Quick-Jump Index Pills (01 - 08) */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-mono text-[#494f5c] dark:text-[#9fa6b6] mr-1 hidden xl:inline">
                INDEX:
              </span>
              {filteredProjects.map((proj, pIdx) => {
                const isActive = pIdx === activeIndex;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => scrollToProject(pIdx)}
                    aria-label={`Jump to project 0${pIdx + 1}: ${proj.title}`}
                    className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#0d0f12] text-white dark:bg-white dark:text-[#0d0f12] font-bold shadow-xs scale-105'
                        : 'bg-[#dadde3] dark:bg-[#171920] text-[#494f5c] dark:text-[#9fa6b6] hover:text-[#0d0f12] dark:hover:text-white border border-[#cbd0d9] dark:border-[#262933]'
                    }`}
                  >
                    <span>0{pIdx + 1}</span>
                    <span className="hidden 2xl:inline text-[11px] font-sans font-medium truncate max-w-[90px]">
                      {proj.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Stepper Controls: Prev / Next */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono text-[#494f5c] dark:text-[#9fa6b6] mr-2">
                Use <kbd className="px-1.5 py-0.5 rounded bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-[10px]">→</kbd> keys
              </span>

              <button
                type="button"
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="p-2 rounded-full bg-[#dadde3] dark:bg-[#171920] hover:bg-[#cfd3da] dark:hover:bg-[#252832] disabled:opacity-40 disabled:cursor-not-allowed border border-[#cbd0d9] dark:border-[#262933] text-[#0d0f12] dark:text-white transition-all cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={activeIndex === filteredProjects.length - 1}
                aria-label="Next project"
                className="p-2 rounded-full bg-[#dadde3] dark:bg-[#171920] hover:bg-[#cfd3da] dark:hover:bg-[#252832] disabled:opacity-40 disabled:cursor-not-allowed border border-[#cbd0d9] dark:border-[#262933] text-[#0d0f12] dark:text-white transition-all cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET: FLUID INTERACTIVE ADAPTIVE SHOWCASE (< lg)                */}
      {/* ========================================================================= */}
      <div className="lg:hidden max-w-2xl mx-auto px-4 sm:px-6 pb-20">
        
        {/* Mobile Navigation Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#cbd0d9] dark:border-[#262933]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg font-bold text-[#0d0f12] dark:text-white">
              0{activeIndex + 1}
            </span>
            <span className="text-xs font-mono text-[#494f5c] dark:text-[#9fa6b6]">
              of 0{filteredProjects.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="p-1.5 rounded-full bg-[#dadde3] dark:bg-[#171920] disabled:opacity-30 border border-[#cbd0d9] dark:border-[#262933] text-[#0d0f12] dark:text-white cursor-pointer"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === filteredProjects.length - 1}
              aria-label="Next project"
              className="p-1.5 rounded-full bg-[#dadde3] dark:bg-[#171920] disabled:opacity-30 border border-[#cbd0d9] dark:border-[#262933] text-[#0d0f12] dark:text-white cursor-pointer"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Mobile Card Container */}
        <div className="bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] rounded-[24px] p-5 sm:p-6 shadow-sm">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject ? currentProject.id : 'mob-empty'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Category + Tag */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1.5">
                  <IconComponent size={14} className="text-[#0d0f12] dark:text-white shrink-0" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#494f5c] dark:text-[#9fa6b6] font-semibold">
                    {currentProject.category}
                  </span>
                </div>
                {currentProject.tag && (
                  <span className="text-xs font-mono font-medium text-[#0d0f12] dark:text-white">
                    {currentProject.tag}
                  </span>
                )}
              </div>

              {/* Title & Summary */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0d0f12] dark:text-white font-display mb-2">
                {currentProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#2b303a] dark:text-[#c5cad6] leading-relaxed mb-4">
                {currentProject.summary}
              </p>

              {/* Mobile Bespoke UI Window Mockup */}
              <div className="h-[280px] sm:h-[320px] w-full my-4">
                <ProjectMockup projectId={currentProject.id} />
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-2 my-4">
                {currentProject.problem && (
                  <div className="p-3 rounded-xl bg-[#f0f2f5]/80 dark:bg-[#090a0d]/80 border border-[#cbd0d9] dark:border-[#262933]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#494f5c] dark:text-[#9fa6b6] font-bold mb-1">
                      Challenge
                    </div>
                    <p className="text-xs text-[#2b303a] dark:text-[#c5cad6] leading-relaxed">
                      {currentProject.problem}
                    </p>
                  </div>
                )}
                {currentProject.solution && (
                  <div className="p-3 rounded-xl bg-[#f0f2f5]/80 dark:bg-[#090a0d]/80 border border-[#cbd0d9] dark:border-[#262933]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#494f5c] dark:text-[#9fa6b6] font-bold mb-1">
                      Architecture
                    </div>
                    <p className="text-xs text-[#2b303a] dark:text-[#c5cad6] leading-relaxed">
                      {currentProject.solution}
                    </p>
                  </div>
                )}
              </div>

              {/* Verified Metrics */}
              {currentProject.metrics && currentProject.metrics.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 my-3">
                  {currentProject.metrics.map((metric, mIdx) => (
                    <span 
                      key={mIdx} 
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f0f2f5] dark:bg-[#090a0d] border border-[#cbd0d9] dark:border-[#262933] text-[11px] font-mono text-[#0d0f12] dark:text-[#e3e6ed]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{metric}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-1.5 my-3">
                {currentProject.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2 py-0.5 rounded-md bg-[#f0f2f5] dark:bg-[#090a0d] border border-[#cbd0d9]/60 dark:border-[#262933] text-[10px] font-mono font-medium text-[#0d0f12] dark:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#cbd0d9] dark:border-[#262933] mt-4">
                {currentProject.liveDemo ? (
                  <a
                    href={currentProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0d0f12] text-white dark:bg-white dark:text-[#0d0f12] text-xs font-semibold shadow-xs"
                  >
                    <Globe size={13} strokeWidth={2} />
                    <span>Live Site</span>
                    <ArrowUpRight size={12} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0f2f5] dark:bg-[#090a0d] border border-[#cbd0d9] dark:border-[#262933] text-[11px] font-mono text-[#494f5c] dark:text-[#9fa6b6]">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span>Verified Code</span>
                  </span>
                )}

                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#f0f2f5] dark:bg-[#090a0d] border border-[#cbd0d9] dark:border-[#262933] text-xs font-semibold text-[#0d0f12] dark:text-white"
                  >
                    <Github size={13} strokeWidth={2} />
                    <span>Repo</span>
                    <ExternalLink size={11} className="opacity-70" />
                  </a>
                )}
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Mobile Quick Scrubber Pills */}
        <div className="flex items-center justify-center gap-1.5 mt-5 flex-wrap">
          {filteredProjects.map((p, idx) => {
            const isCur = idx === activeIndex;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  isCur
                    ? 'bg-[#0d0f12] text-white dark:bg-white dark:text-[#0d0f12] font-bold shadow-xs'
                    : 'bg-[#dadde3] dark:bg-[#171920] text-[#494f5c] dark:text-[#9fa6b6] border border-[#cbd0d9] dark:border-[#262933]'
                }`}
              >
                0{idx + 1}
              </button>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default Projects;
