import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Authentic Apple macOS "hello" Frosted Glass Intro
 * 
 * Features:
 * - Real Glassmorphism backdrop-blur revealing the live macOS desktop behind it
 * - Strict Sequential Choreography:
 *    1. (0.0s – 2.6s) ONLY Apple's iconic cursive "hello" draws out on the frosted glass
 *    2. (2.6s – 4.0s) "Welcome to my portfolio" appears in matching cursive handwriting script
 *    3. (3.8s – 4.8s) Executive badge with official IIT Patna seal appears
 *    4. (4.8s – 5.6s) Cinematic pause to view composition
 *    5. (5.6s – 6.4s) Frosted glass smoothly melts away directly into live, interactive desktop
 * - Zero skip buttons or prompt clutter
 * - Optional instant dismissal on tap/click or keyboard press
 */

// Official Apple SF-Hello vector curves (normalized viewBox: 2584 x 826)
const APPLE_HELLO_STROKE_1 = "M -109.06,632.23 C 1.95,570.52 103.11,491.16 217.88,356.08 C 296.0,263.87 338.0,158.58 340.0,85.96 C 341.0,31.96 314.67,-9.0 266.0,-9.0 C 212.0,-9.0 178.0,31.96 157.0,125.99 C 134.0,229.34 117.0,347.92 74.0,728.16";
const APPLE_HELLO_STROKE_2 = "M 78.21,691.0 C 100.23,497.47 184.0,356.16 291.0,356.16 C 355.0,356.16 395.67,407.16 384.13,480.16 C 377.62,523.16 370.09,567.16 361.31,618.16 C 351.07,682.16 380.33,732.16 468.96,732.16 C 598.22,732.16 739.24,660.32 811.41,549.06 C 836.0,511.16 846.0,477.16 847.0,444.16 C 848.0,384.16 814.0,339.16 754.0,339.16 C 678.0,339.16 620.0,425.16 620.0,535.16 C 620.0,653.16 684.0,736.16 819.92,736.16 C 1004.72,736.16 1209.42,514.31 1303.48,266.73 C 1330.04,196.83 1340.0,131.92 1340.0,86.56 C 1340.0,32.78 1323.0,-8.52 1275.0,-8.52 C 1228.0,-8.52 1197.0,27.98 1169.0,85.6 C 1136.19,152.43 1111.93,248.83 1102.0,357.8 C 1077.0,631.22 1133.0,732.16 1266.15,732.16 C 1427.61,732.16 1607.12,507.23 1698.77,265.97 C 1725.04,196.83 1735.0,131.92 1735.0,86.56 C 1735.0,32.78 1718.0,-8.52 1670.0,-8.52 C 1623.0,-8.52 1592.0,27.98 1564.0,85.6 C 1531.19,152.43 1506.93,248.83 1497.0,357.8 C 1472.0,631.22 1528.0,732.16 1646.91,732.16 C 1765.62,732.16 1830.11,628.67 1868.78,518.78 C 1907.0,410.16 1954.0,343.16 2052.0,343.16 C 2133.0,343.16 2197.0,403.16 2197.0,516.16 C 2197.0,641.16 2115.9,735.16 2013.42,736.16 C 1923.23,737.16 1864.0,664.16 1870.0,554.16 C 1877.0,432.16 1951.0,343.16 2048.0,343.16 C 2104.0,343.16 2151.04,368.05 2188.0,395.16 C 2288.21,468.26 2365.43,423.08 2395.0,350.8";

export const HelloIntro = () => {
  const [isVisible, setIsVisible] = useState(true);

  const dismissIntro = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    // Keyboard listener for early skip if user presses Enter, Space, or Escape
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        dismissIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Natural timeline: After complete presentation (~5.8s), smoothly dissolve to live desktop
    const autoDismissTimer = setTimeout(() => {
      dismissIntro();
    }, 5800);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(autoDismissTimer);
    };
  }, [dismissIntro]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="apple-hello-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            backdropFilter: 'blur(0px)',
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] } 
          }}
          onClick={dismissIntro}
          className="fixed inset-0 z-[3000] flex flex-col items-center justify-center select-none cursor-pointer overflow-hidden bg-black/40 backdrop-blur-3xl saturate-150"
          style={{ fontFamily: "'Google Sans', -apple-system, BlinkMacSystemFont, sans-serif" }}
        >
          {/* Subtle Ambient Radial Glow for cinematic contrast */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-amber-500/10 blur-[100px]" />
            <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />
          </div>

          {/* ── Main Stage Container ── */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-4xl w-full text-center">

            {/* ── STEP 1: ONLY Apple Cursive "hello" (0.0s – 2.6s) ── */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-[280px] sm:w-[420px] md:w-[520px] lg:w-[600px] flex items-center justify-center mb-1 sm:mb-3"
            >
              <svg
                viewBox="-149.1 -49.0 2584.1 826.2"
                className="w-full h-auto overflow-visible filter drop-shadow-[0_0_30px_rgba(255,255,255,0.45)] drop-shadow-[0_0_60px_rgba(168,85,247,0.35)]"
              >
                <defs>
                  <linearGradient id="appleHelloGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#f8fafc" />
                    <stop offset="75%" stopColor="#fed7aa" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                </defs>

                {/* Path 1: Opening flourish & 'h' stem */}
                <motion.path
                  d={APPLE_HELLO_STROKE_1}
                  fill="none"
                  stroke="url(#appleHelloGradient)"
                  strokeWidth="56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 0.95, ease: [0.45, 0.05, 0.25, 1.0] },
                    opacity: { duration: 0.2 }
                  }}
                />

                {/* Path 2: Rebound of 'h', 'e', 'l', 'l', and flourishing 'o' */}
                <motion.path
                  d={APPLE_HELLO_STROKE_2}
                  fill="none"
                  stroke="url(#appleHelloGradient)"
                  strokeWidth="56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { delay: 0.75, duration: 1.85, ease: [0.42, 0.0, 0.25, 1.0] },
                    opacity: { delay: 0.75, duration: 0.2 }
                  }}
                />
              </svg>
            </motion.div>

            {/* ── STEP 2: "Welcome to my portfolio" in Matching Cursive (Starts at 2.6s) ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col items-center justify-center gap-1.5"
            >
              <h2 
                style={{ fontFamily: "'Dancing Script', 'Alex Brush', cursive" }}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200 drop-shadow-[0_0_24px_rgba(255,255,255,0.45)]"
              >
                Welcome to my portfolio
              </h2>

              {/* ── STEP 3: Google Sans Executive Identity & Official IIT Patna Emblem (Starts at 3.8s) ── */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 3.8, duration: 0.9, ease: 'easeOut' }}
                className="flex items-center gap-2 sm:gap-3 mt-3 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              >
                <img 
                  src="/logos/iit-patna.png" 
                  alt="IIT Patna Emblem" 
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain rounded-full shadow-sm"
                />
                <span className="text-xs sm:text-sm font-medium text-white/95 tracking-wide">
                  Harsh Lagwal
                </span>
                <span className="text-white/30 text-xs">·</span>
                <span className="text-[11px] sm:text-xs text-slate-300 font-light tracking-wide">
                  AI Engineer & Decision Science Scholar (IIT Patna)
                </span>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
