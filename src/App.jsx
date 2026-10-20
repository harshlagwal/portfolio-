import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { WindowManagerProvider } from './context/WindowManagerContext';
import { MacDesktopPortfolio } from './components/macos/MacDesktopPortfolio';
import { MobilePortfolio } from './components/mobile/MobilePortfolio';

function App() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeProvider>
      <WindowManagerProvider>
        {isMobile ? (
          <MobilePortfolio />
        ) : (
          <div className="relative w-screen h-screen overflow-hidden select-none bg-black">
            <MacDesktopPortfolio />
          </div>
        )}
      </WindowManagerProvider>
    </ThemeProvider>
  );
}

export default App;
