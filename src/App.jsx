import React, { Suspense, lazy, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from './context/ThemeContext';
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  // Ultra-smooth momentum scroll with Lenis (Apple/Google ProMotion caliber)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
      infinite: false,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.__lenis = null;
      lenis.destroy();
    };
  }, []);

  // Dynamic Header-to-Footer scroll tracking with smooth spring damping
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    restDelta: 0.001
  });

  return (
    <div className="min-h-[100vh] min-h-[100dvh] w-full max-w-full overflow-x-clip bg-[#ffffff] text-slate-900 dark:bg-[#08090d] dark:text-slate-100 selection:bg-blue-500/20 selection:text-blue-600 dark:selection:bg-blue-400/20 dark:selection:text-blue-300 font-sans transition-colors duration-300">
      
      {/* Top Header-to-Footer Electric Laser Progress Bar */}
      <motion.div 
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 z-[100] origin-left pointer-events-none shadow-[0_0_12px_rgba(59,130,246,0.7)]" 
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
      </Suspense>
    </div>
  );
};

export default App;
