import React from 'react';
import { motion } from 'framer-motion';
import { AppIcon } from '../macos/AppIcon';
import { portfolioData } from '../../data/portfolioData';

export const MobileBottomDock = ({ onOpenApp, activeApp }) => {
  const linkedinUrl = portfolioData.personal.linkedin || 'https://www.linkedin.com/in/harshlagwal';

  const dockItems = [
    { id: 'safari', name: 'Safari', isExternal: false },
    { id: 'mail', name: 'Mail', isExternal: false },
    { id: 'github', name: 'GitHub', isExternal: false },
    { id: 'linkedin', name: 'LinkedIn', isExternal: true, url: linkedinUrl },
  ];

  const handleClick = (item) => {
    if (item.isExternal) {
      window.open(item.url, '_blank');
      return;
    }
    onOpenApp(item.id);
  };

  return (
    <motion.div 
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 25, stiffness: 280, delay: 0.65 }}
      className="fixed bottom-3 inset-x-0 z-50 flex justify-center pointer-events-none select-none px-3"
    >
      <div className="pointer-events-auto flex items-center justify-around gap-3 px-4 py-2 rounded-[2rem] bg-white/20 dark:bg-black/45 backdrop-blur-3xl border border-white/25 dark:border-white/15 shadow-[0_16px_40px_-6px_rgba(0,0,0,0.5)] w-full max-w-[340px] transition-all">
        {dockItems.map((item, idx) => {
          const isActive = activeApp === item.id;

          return (
            <motion.button
              key={item.id}
              initial={{ scale: 0.6, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 18,
                stiffness: 320,
                delay: 0.7 + idx * 0.05
              }}
              whileTap={{ scale: 0.82 }}
              onClick={() => handleClick(item)}
              className="relative flex flex-col items-center justify-center cursor-pointer group"
              aria-label={item.name}
            >
              <div className="relative">
                <AppIcon id={item.id} size={50} className="drop-shadow-lg" />
                
                {/* Active process dot under running app */}
                {isActive && (
                  <motion.span 
                    layoutId="activeDockDot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-xs" 
                  />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MobileBottomDock;
