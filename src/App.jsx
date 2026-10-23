import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProofRibbon } from './components/ProofRibbon';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { EngineeringPhilosophy } from './components/EngineeringPhilosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal } from './components/CertificateModal';
import { portfolioData } from './data/portfolioData';

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Initialize Lenis smooth velocity scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f0f2f5] dark:bg-[#090a0d] text-[#0d0f12] dark:text-[#ffffff] selection:bg-[#cbd0d9] dark:selection:bg-[#262933] selection:text-[#0d0f12] dark:selection:text-white transition-colors duration-250 flex flex-col font-sans">
        
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1 w-full">
          <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />
          <ProofRibbon />
          <About />
          <Projects />
          <Skills />
          <Experience onOpenCertificate={(link) => setSelectedCertificate(link)} />
          <Education />
          <Certifications onOpenCertificate={(link) => setSelectedCertificate(link)} />
          <EngineeringPhilosophy />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <ResumeModal 
          isOpen={isResumeModalOpen} 
          onClose={() => setIsResumeModalOpen(false)} 
          resumeLink={portfolioData.personal.resumeLink} 
        />

        <CertificateModal 
          isOpen={!!selectedCertificate} 
          onClose={() => setSelectedCertificate(null)} 
          certificateLink={selectedCertificate} 
        />

      </div>
    </ThemeProvider>
  );
}

export default App;
