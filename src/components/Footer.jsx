import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);

  // Track scroll progress specifically when approaching and entering footer
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // Buttery-smooth spring damping for Apple/Google grade tactile physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001
  });

  // Dynamic zoom in/out: zooms in (scales up) as you scroll towards footer, zooms out in reverse
  const scale = useTransform(smoothProgress, [0, 0.7, 1], [0.72, 0.98, 1.08]);
  const opacity = useTransform(smoothProgress, [0, 0.35, 1], [0.3, 0.82, 1]);
  const y = useTransform(smoothProgress, [0, 1], [50, 0]);
  const letterSpacing = useTransform(smoothProgress, [0, 1], ["-0.05em", "-0.02em"]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer 
      ref={footerRef}
      className="pt-20 pb-12 bg-white dark:bg-[#131314] text-[#202124] dark:text-[#e3e3e3] border-t border-[#dadce0] dark:border-[#2e3134] transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Giant Architectural Google Antigravity Wordmark - Zoom In / Out on Scroll */}
        <div className="mb-12 sm:mb-16 select-none flex justify-center items-center text-center overflow-visible py-4 relative">
          
          {/* Subtle Chromatic Reactive Aura Glow */}
          <motion.div 
            style={{ opacity, scale }}
            className="absolute inset-0 max-w-2xl mx-auto bg-gradient-to-r from-[#4285f4]/10 via-[#8ab4f8]/15 to-[#34a853]/10 dark:from-[#4285f4]/15 dark:via-[#8ab4f8]/20 dark:to-[#34a853]/15 blur-3xl rounded-full pointer-events-none -z-10"
          />

          <motion.div
            style={{ scale, opacity, y }}
            className="origin-center will-change-transform inline-block"
          >
            <motion.h2 
              style={{ letterSpacing }}
              className="text-[11.5vw] sm:text-[10vw] lg:text-[124px] font-medium tracking-tight text-[#202124] dark:text-[#f1f3f4] leading-[1.18] pb-3 transition-colors duration-200 text-center mx-auto cursor-default select-none hover:text-[#1a73e8] dark:hover:text-[#8ab4f8]"
            >
              Harsh Lagwal
            </motion.h2>
          </motion.div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="border-t border-[#dadce0] dark:border-[#2e3134] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Bottom Left: Brand Signature & Status */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[#202124] dark:text-white font-display">
              Harsh Lagwal
            </span>
            <span className="text-xs text-[#5f6368] dark:text-[#9aa0a6]">
              • AI & Machine Learning Engineer
            </span>
          </div>

          {/* Bottom Center / Right: Clean Google Antigravity Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-[#5f6368] dark:text-[#9aa0a6]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Scroll to top */}
          <div className="flex items-center gap-2.5">
            {[
              { icon: Github, href: "https://github.com/harshlagwal", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/harshlagwal", label: "LinkedIn" },
              { icon: Mail, href: "mailto:Harshlagwal2005@gmail.com", label: "Email" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target={social.href.startsWith('mailto') ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-[#f1f3f4] dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134] flex items-center justify-center text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] hover:scale-105 shadow-xs transition-all"
              >
                <social.icon size={14} strokeWidth={1.5} />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f1f3f4] dark:bg-[#1e1f20] hover:bg-[#e8eaed] dark:hover:bg-[#252629] border border-[#dadce0] dark:border-[#2e3134] text-xs font-mono text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-all cursor-pointer shadow-xs group"
            >
              <span>Back to top</span>
              <ArrowUp size={12} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
