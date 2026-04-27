import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import Navbar from './Navbar';
import ResumeModal from './ResumeModal';
import ParticleBackground from './ParticleBackground';


const HeroSection = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const resumeLink = "https://drive.google.com/file/d/1vNNk4_ihkiXDV5_Nqb5ex33aS1JctulH/view?usp=drive_link";

  return (
    <section id="home" className="relative min-h-[100vh] min-h-[100dvh] w-full overflow-hidden flex flex-col justify-between pt-24 md:pt-40 pb-8 bg-white dark:bg-[#0b0f1a] transition-colors duration-500">
      <Navbar />

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-100 dark:opacity-40 transition-opacity duration-500 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-pattern dark:opacity-20 opacity-60"></div>
        <div className="mesh-glow"></div>
        <ParticleBackground />
        
        {/* Soft Blur Circles - Reduced size for mobile */}
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="blur-circle w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-sky/20 dark:bg-vibrant-blue/10 top-[-50px] left-[-50px]"
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="blur-circle w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-vibrant-blue/5 dark:bg-vibrant-blue/10 bottom-[-100px] right-[-50px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center font-sans z-10 flex-grow justify-center mt-8 md:mt-12">
        {/* Tagline */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-6 md:mb-8 flex justify-center w-full"
        >
          <span className="px-4 md:px-6 py-2 rounded-full bg-sky/30 dark:bg-vibrant-blue/20 backdrop-blur border border-sky/50 dark:border-vibrant-blue/30 text-vibrant-blue dark:text-vibrant-blue text-[10px] md:text-sm font-semibold tracking-wide font-mono transition-colors duration-500 shadow-sm leading-relaxed max-w-[90%] md:max-w-none">
            AI Engineer • AI Full Stack Engineer • Generative AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4 md:space-y-6 mb-8 md:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] md:leading-[1.05] font-display transition-colors duration-500"
              style={{ fontSize: 'clamp(2.25rem, 8vw, 5.5rem)' }}>
            Building Intelligent <br className="hidden sm:block" />
            <span className="text-gradient-focus">AI Systems</span> for the Future
          </h1>
          <div className="text-lg md:text-2xl font-semibold text-vibrant-blue italic font-sans tracking-tight">
            AI That Solves Real-World Problems
          </div>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-normal leading-relaxed font-sans mb-10 md:mb-14 transition-colors duration-500"
        >
          Hi, I'm Harsh Lagwal — an AI Engineer passionate about building intelligent systems using Machine Learning, Generative AI, NLP, and AI automation.
        </motion.p>

        {/* Buttons & Socials Container */}
        <div className="flex flex-col items-center gap-10 md:gap-14 w-full">
          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="px-8 md:px-10 py-4 md:py-5 rounded-full bg-gray-900 dark:bg-vibrant-blue text-white font-bold text-base md:text-lg hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 font-sans w-full sm:w-auto justify-center"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <button 
              onClick={() => setIsResumeModalOpen(true)}
              className="px-8 md:px-10 py-4 md:py-5 rounded-full bg-white dark:bg-[#0b0f1a] text-gray-900 dark:text-white font-bold text-base md:text-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-500 font-sans shadow-sm flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              Download Resume <Download size={20} className="opacity-80"/>
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-6 md:gap-8"
          >
            {[
              { icon: Github, href: "https://github.com/harshlagwal" },
              { icon: Linkedin, href: "https://linkedin.com/in/harsh-lagwal" },
              { icon: Mail, href: "mailto:Harshlagwal2005@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target={social.href.startsWith('mailto') ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                className="relative flex items-center justify-center p-3.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:-translate-y-1 hover:border-vibrant-blue/20 hover:text-vibrant-blue dark:hover:text-white shadow-sm hover:shadow-lg transition-all duration-500 group"
              >
                <social.icon size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-8 md:mt-12 hidden sm:flex flex-col items-center gap-4 w-full"
      >
        <span className="text-[10px] text-gray-600 dark:text-gray-400 uppercase tracking-[0.4em] font-bold font-mono opacity-80 transition-colors duration-500">Scroll to explore</span>
        <div className="w-1 h-12 md:h-16 bg-gray-200/50 dark:bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-vibrant-blue to-transparent"
          />
        </div>
      </motion.div>
      
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

