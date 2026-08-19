import React, { Suspense, lazy } from 'react';
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <div className="min-h-[100vh] min-h-[100dvh] bg-[#f8fafc] text-[#0f172a] dark:bg-[#060913] dark:text-[#f8fafc] selection:bg-cyan-500/20 selection:text-cyan-400 font-sans transition-colors duration-500">
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

