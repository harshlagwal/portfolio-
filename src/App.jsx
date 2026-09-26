import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import HeroSection from './components/HeroSection';

// Lazy-load everything below the fold — optimal initial paint
const ScrollingSkills  = lazy(() => import('./components/ScrollingSkills'));
const About            = lazy(() => import('./components/About'));
const Skills           = lazy(() => import('./components/Skills'));
const Projects         = lazy(() => import('./components/Projects'));
const Experience       = lazy(() => import('./components/Experience'));
const Education        = lazy(() => import('./components/Education'));
const Certifications   = lazy(() => import('./components/Certifications'));
const Contact          = lazy(() => import('./components/Contact'));
const Footer           = lazy(() => import('./components/Footer'));
const ScrollToTop      = lazy(() => import('./components/ScrollToTop'));
const AIAssistantModal = lazy(() => import('./components/AIAssistantModal'));
const SectionWelcomeNotifier = lazy(() => import('./components/SectionWelcomeNotifier'));

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { isDark } = useTheme();

  // Dynamic Header-to-Footer scroll tracking with smooth spring damping
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    restDelta: 0.001
  });

  return (
    <div className="min-h-[100vh] min-h-[100dvh] bg-[#ffffff] text-[#202124] dark:bg-[#131314] dark:text-[#e3e3e3] selection:bg-[#1a73e8]/20 selection:text-[#1a73e8] dark:selection:bg-[#8ab4f8]/20 dark:selection:text-[#8ab4f8] font-sans transition-colors duration-300">
      
      {/* Top Header-to-Footer Chromatic Laser Progress Bar */}
      <motion.div 
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#4285f4] via-[#ea4335] via-[#fbbc04] to-[#34a853] z-[100] origin-left pointer-events-none shadow-[0_0_10px_rgba(66,133,244,0.5)]" 
      />

      <main>
        {/* Hero loads immediately */}
        <HeroSection />

        {/* Below the fold loaded smoothly */}
        <Suspense fallback={<div className="h-[100px]" />}>
          <ScrollingSkills />
        </Suspense>
        
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <ScrollToTop />
        <AIAssistantModal />
        <SectionWelcomeNotifier />
      </Suspense>
    </div>
  );
};

export default App;
