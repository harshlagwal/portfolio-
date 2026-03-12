import React, { Suspense, lazy } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import HeroSection from './components/HeroSection';

// Lazy-load everything below the fold — they won't block initial paint
const ScrollingSkills  = lazy(() => import('./components/ScrollingSkills'));
const About            = lazy(() => import('./components/About'));
const Skills           = lazy(() => import('./components/Skills'));
const Projects         = lazy(() => import('./components/Projects'));
const Experience       = lazy(() => import('./components/Experience'));
const Certifications   = lazy(() => import('./components/Certifications'));
const Contact          = lazy(() => import('./components/Contact'));
const Footer           = lazy(() => import('./components/Footer'));
const ScrollToTop      = lazy(() => import('./components/ScrollToTop'));

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
    <div className="min-h-[100vh] min-h-[100dvh] bg-white text-gray-900 dark:bg-[#0b0f1a] dark:text-white selection:bg-primary/10 selection:text-primary font-sans transition-colors duration-500">
      <main>
        {/* Hero loads immediately — no lazy */}
        <HeroSection />

        {/* Everything else is lazy — loads after hero paints */}
        <Suspense fallback={<div className="h-[140px]" />}>
          <ScrollingSkills />
        </Suspense>
        
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
};

export default App;
