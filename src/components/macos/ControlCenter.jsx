import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  Bluetooth, 
  Share2, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  SunMedium, 
  Disc,
  Play,
  RotateCcw
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { useTheme } from '../../context/ThemeContext';
import { soundFX } from '../../utils/soundEffects';

export const ControlCenter = () => {
  const { 
    isControlCenterOpen, 
    setIsControlCenterOpen,
    soundEnabled,
    toggleSound,
    brightness,
    setBrightness
  } = useWindowManager();

  const { isDark, toggleTheme } = useTheme();
  const panelRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        // Only close if not clicking menu bar toggle button
        const isToggleBtn = e.target.closest('[title="Control Center"]');
        if (!isToggleBtn) {
          setIsControlCenterOpen(false);
        }
      }
    };
    if (isControlCenterOpen) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isControlCenterOpen, setIsControlCenterOpen]);

  if (!isControlCenterOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, scale: 0.94, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: -10 }}
        transition={{ type: 'spring', damping: 24, stiffness: 300 }}
        className="fixed top-9 right-3 w-80 md:w-84 p-3.5 rounded-3xl backdrop-blur-3xl bg-white/85 dark:bg-[#181920]/88 border border-black/10 dark:border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] z-[1000] text-slate-800 dark:text-slate-100 select-none"
      >
        {/* Top 2-Column Module */}
        <div className="grid grid-cols-2 gap-2.5 mb-2.5">
          {/* Left Column: Connectivity Platter */}
          <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/[0.06] flex flex-col justify-between gap-2.5 border border-black/5 dark:border-white/5">
            {/* Wi-Fi */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Wifi size={14} />
              </div>
              <div className="min-w-0">
                <div className="text-[12px] font-semibold leading-tight truncate">Wi-Fi</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Harsh-5G</div>
              </div>
            </div>

            {/* Bluetooth */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Bluetooth size={14} />
              </div>
              <div className="min-w-0">
                <div className="text-[12px] font-semibold leading-tight truncate">Bluetooth</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">AirPods Pro</div>
              </div>
            </div>

            {/* AirDrop */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Share2 size={13} />
              </div>
              <div className="min-w-0">
                <div className="text-[12px] font-semibold leading-tight truncate">AirDrop</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Contacts Only</div>
              </div>
            </div>
          </div>

          {/* Right Column: Theme & Sound Toggles */}
          <div className="flex flex-col gap-2.5">
            {/* Dark Mode Tile */}
            <button
              onClick={() => {
                toggleTheme();
                soundFX.playClick();
              }}
              className="flex-1 p-3 rounded-2xl bg-black/5 dark:bg-white/[0.06] border border-black/5 dark:border-white/5 flex items-center gap-2.5 text-left transition-colors active:scale-95"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isDark ? 'bg-indigo-600 text-white' : 'bg-amber-400 text-slate-900'
              }`}>
                {isDark ? <Moon size={15} /> : <Sun size={15} />}
              </div>
              <div>
                <div className="text-[12px] font-semibold leading-tight">Dark Mode</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">{isDark ? 'On' : 'Off'}</div>
              </div>
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={() => {
                toggleSound();
                soundFX.playClick();
              }}
              className="flex-1 p-3 rounded-2xl bg-black/5 dark:bg-white/[0.06] border border-black/5 dark:border-white/5 flex items-center gap-2.5 text-left transition-colors active:scale-95"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                soundEnabled ? 'bg-blue-500 text-white' : 'bg-slate-300 dark:bg-zinc-700 text-slate-600'
              }`}>
                {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
              </div>
              <div>
                <div className="text-[12px] font-semibold leading-tight">Sound FX</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">{soundEnabled ? 'Active' : 'Muted'}</div>
              </div>
            </button>
          </div>
        </div>

        {/* Display Brightness Slider */}
        <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/[0.06] border border-black/5 dark:border-white/5 mb-2.5">
          <div className="flex items-center justify-between text-[11px] font-medium mb-1.5 text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1.5"><SunMedium size={14} /> Display</span>
            <span>{brightness}%</span>
          </div>
          <input
            type="range"
            min="50"
            max="120"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer h-2 bg-slate-200 dark:bg-zinc-700 rounded-lg"
          />
        </div>

        {/* Now Playing Widget */}
        <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/[0.06] border border-black/5 dark:border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm animate-pulse">
              <Disc size={20} />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] font-semibold truncate leading-tight">Decision Science & AI</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Harsh Lagwal • IIT Patna</div>
            </div>
          </div>
          <button 
            onClick={() => soundFX.playChime()}
            title="Play Audio Chime"
            className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
          >
            <Play size={14} className="ml-0.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
