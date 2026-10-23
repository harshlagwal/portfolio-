import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink, 
  GraduationCap, 
  Cpu, 
  ArrowRight,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import harshCutout from '../assets/harsh-cutout.png';
import harshPhoto from '../assets/Harsh-portfolio.jpg';

export const HeroSection = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailAddress = portfolioData.personal.email;
  const githubLink = portfolioData.personal.github;
  const linkedinLink = portfolioData.personal.linkedin;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) {
      if (window.__lenis) {
        window.__lenis.scrollTo(elem, { offset: -50, duration: 1.1 });
      } else {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) {
      if (window.__lenis) {
        window.__lenis.scrollTo(elem, { offset: -50, duration: 1.1 });
      } else {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const elem = document.getElementById('about');
    if (elem) {
      if (window.__lenis) {
        window.__lenis.scrollTo(elem, { offset: -50, duration: 1.1 });
      } else {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section 
      id="home"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#f0f2f5] dark:bg-[#090a0d] text-[#0d0f12] dark:text-[#ffffff] transition-colors duration-250"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ── Studio Hero Bento Layout (Matching User Reference Image) ── */}
        <div className="flex flex-col gap-4 sm:gap-5">

          {/* Top Row: Portrait Box + Main Bento Profile Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
            
            {/* Left Bento: Clean Elevated Portrait Card (4 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 bg-white dark:bg-[#16181f] border border-[#cbd0d9] dark:border-[#262933] rounded-[28px] p-3 sm:p-4 relative flex flex-col justify-between items-center shadow-xs overflow-hidden min-h-[380px] lg:min-h-[430px]"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute inset-0 bg-radial from-[#cbd0d9]/20 dark:from-[#262933]/30 via-transparent to-transparent pointer-events-none" />

              {/* Status Pill on Top */}
              <div className="w-full flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] text-[11px] font-semibold text-[#0d0f12] dark:text-[#e3e6ed] shadow-2xs">
                  <span className="pulse-indicator" />
                  <span>Available for AI Roles</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] text-[10.5px] font-mono text-[#494f5c] dark:text-[#9fa6b6] shadow-2xs">
                  <GraduationCap size={12} />
                  <span>IIT Patna</span>
                </div>
              </div>

              {/* Authentic Portrait Image Frame */}
              <div className="relative w-full flex-1 flex items-end justify-center pt-4 z-0">
                <img 
                  src={harshCutout || harshPhoto} 
                  alt="Harsh Lagwal" 
                  className="w-full max-h-[340px] sm:max-h-[360px] object-cover object-top filter contrast-[1.03] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Bottom Credential Tag */}
              <div className="w-full pt-2 flex items-center justify-between border-t border-[#cbd0d9]/70 dark:border-[#262933] z-10 text-[11px] text-[#494f5c] dark:text-[#9fa6b6]">
                <span className="font-semibold text-[#0d0f12] dark:text-white">Harsh Lagwal</span>
                <span className="font-mono text-[10px]">Decision Science (2026–28)</span>
              </div>
            </motion.div>

            {/* Right Bento: Studio Tinted Info Card (8 Cols - Exactly matching Marco Lee Card) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] rounded-[28px] p-6 sm:p-9 relative flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Header Row: Corner Bracket Tag */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#0d0f12] dark:text-[#ffffff] bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] px-3 py-1 rounded-md shadow-2xs">
                    <span>AI Engineering</span>
                    <span>•</span>
                    <span>Decision Science</span>
                  </div>

                  {/* Signature Corner Framing Tag like [ Capturing raw emotion ] */}
                  <div className="hidden sm:inline-flex items-center font-mono text-xs text-[#0d0f12] dark:text-[#ffffff] bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] px-3 py-1 rounded-lg shadow-2xs select-none">
                    <span className="text-[#494f5c] dark:text-[#9fa6b6] font-mono mr-1.5">[</span>
                    <span>Autonomous Systems &amp; LLM Pipelines</span>
                  </div>
                </div>

                {/* Primary Name Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#0d0f12] dark:text-white font-display leading-[1.1] mb-1.5">
                  Harsh Lagwal
                </h1>

                {/* Subtitle Role */}
                <div className="text-base sm:text-xl font-normal tracking-tight text-[#494f5c] dark:text-[#9fa6b6] font-display mb-5">
                  AI &amp; Machine Learning Engineer • MBA Scholar at IIT Patna
                </div>

                {/* Narrative Bio Copy */}
                <p className="text-sm sm:text-base text-[#2b303a] dark:text-[#c5cad6] leading-relaxed max-w-2xl mb-6 font-sans">
                  Decision Science Scholar at <strong className="font-semibold text-[#0d0f12] dark:text-white">IIT Patna</strong> with a B.Tech in CSE. Designing end-to-end autonomous agent architectures, fine-tuned Generative AI workflows, and resilient microservices with FastAPI, PyTorch, and Docker.
                </p>
              </div>

              {/* Bottom Exploration Link */}
              <div className="pt-4 border-t border-[#cbd0d9]/70 dark:border-[#262933]/70 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="#about"
                  onClick={handleScrollToAbout}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0d0f12] dark:text-white hover:underline group cursor-pointer"
                >
                  <span>Explore Engineering Standards &amp; Background</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-2 text-xs text-[#494f5c] dark:text-[#9fa6b6] font-mono">
                  <Cpu size={13} className="text-[#0d0f12] dark:text-[#e3e6ed]" />
                  <span>Sub-100ms Inference Focus</span>
                </div>
              </div>

            </motion.div>

          </div>

          {/* Middle Row: Two Large Tactile Pill Buttons (Portfolio & Contact blocks in reference images) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          >
            {/* Portfolio Pill Card Button */}
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="studio-btn-pill tap-spring flex items-center justify-center gap-3 py-4 sm:py-5 px-6 rounded-2xl"
            >
              <FolderGit2 size={19} strokeWidth={1.9} />
              <span className="text-base sm:text-lg font-medium font-display">Explore Projects (8+ Production)</span>
            </a>

            {/* Contact Pill Card Button */}
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="studio-btn-pill tap-spring flex items-center justify-center gap-3 py-4 sm:py-5 px-6 rounded-2xl"
            >
              <MessageSquare size={19} strokeWidth={1.9} />
              <span className="text-base sm:text-lg font-medium font-display">Get in Touch / Contact</span>
            </a>
          </motion.div>

          {/* Bottom Row: Secondary Pill Action & Socials Bar (Matching the bottom pill bar in reference image) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-between gap-3 pt-1"
          >
            {/* Left CTAs: Résumé & Email */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={onOpenResume}
                className="pill-btn-dark tap-spring text-xs sm:text-sm font-medium py-2.5 px-5"
              >
                <span>View Résumé</span>
                <ExternalLink size={13} strokeWidth={2} />
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono bg-white hover:bg-[#f5f6f8] dark:bg-[#20232d] dark:hover:bg-[#282c38] text-[#0d0f12] dark:text-[#e3e6ed] border border-[#cbd0d9] dark:border-[#2a2d37] shadow-2xs transition-all cursor-pointer tap-spring"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check size={13} className="text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>{emailAddress}</span>
                  </>
                )}
              </button>
            </div>

            {/* Right: Connected Profiles & Quick Links Pill Box */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#262933] text-xs sm:text-sm shadow-2xs">
              <a
                href={`mailto:${emailAddress}`}
                title="Send Email"
                className="text-[#494f5c] dark:text-[#9fa6b6] hover:text-[#0d0f12] dark:hover:text-white transition-colors"
              >
                <Mail size={16} />
              </a>
              <span className="text-[#cbd0d9] dark:text-[#262933]">•</span>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#494f5c] dark:text-[#9fa6b6] hover:text-[#0d0f12] dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-[#cbd0d9] dark:text-[#262933]">•</span>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#494f5c] dark:text-[#9fa6b6] hover:text-[#0d0f12] dark:hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-[#cbd0d9] dark:text-[#262933]">•</span>
              <a
                href={`https://wa.me/916230624011?text=${encodeURIComponent("Hi Harsh, I saw your portfolio and would like to connect!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#494f5c] dark:text-[#9fa6b6] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                WhatsApp
              </a>
            </div>

          </motion.div>

          {/* Micro Focus Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#494f5c] dark:text-[#9fa6b6]">
            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">Specialization:</span>
            {["Generative AI", "PyTorch", "Decision Science", "FastAPI", "Full-Stack & Agentic AI"].map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-lg bg-white dark:bg-[#1c1e25] border border-[#cbd0d9] dark:border-[#2a2d37] text-[11px] font-medium text-[#0d0f12] dark:text-[#e3e6ed]"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
