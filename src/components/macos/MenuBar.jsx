import React, { useState, useEffect, useRef } from 'react';
import { 
  Wifi, 
  Search, 
  SlidersHorizontal
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { soundFX } from '../../utils/soundEffects';

export const MenuBar = () => {
  const {
    activeWindowId,
    windows,
    openWindow,
    setIsSpotlightOpen,
    isControlCenterOpen,
    setIsControlCenterOpen,
    setIsAboutMacOpen
  } = useWindowManager();

  const [appleMenuOpen, setAppleMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const menuRef = useRef(null);

  // Live formatted authentic macOS Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { 
        weekday: 'short', 
        day: 'numeric', 
        month: 'short', 
        hour: 'numeric', 
        minute: '2-digit' 
      };
      setCurrentTime(now.toLocaleString('en-US', options).replace(/,/g, ''));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setAppleMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Active App Title (e.g., Finder, Safari, Terminal, Notes)
  const activeAppTitle = activeWindowId && windows[activeWindowId]
    ? windows[activeWindowId].id.charAt(0).toUpperCase() + windows[activeWindowId].id.slice(1)
    : 'Finder';

  return (
    <div 
      ref={menuRef}
      className="fixed top-0 left-0 right-0 h-7 md:h-7.5 px-3 md:px-4 z-[999] flex items-center justify-between text-[12px] font-medium tracking-tight backdrop-blur-2xl bg-white/70 dark:bg-black/45 border-b border-black/5 dark:border-white/10 text-slate-800 dark:text-slate-100 select-none transition-colors"
    >
      {/* ── Left Side: Apple Menu & App Controls ── */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Apple Logo Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setAppleMenuOpen((prev) => !prev);
              soundFX.playClick();
            }}
            className={`px-2 py-0.5 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center ${
              appleMenuOpen ? 'bg-black/10 dark:bg-white/15' : ''
            }`}
          >
            {/* Authentic Apple Icon */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.96-14.42-5.46-8.38-9.84-17.77-13.16-28.18-3.32-10.4-4.98-20.35-4.98-29.84 0-14.42 3.65-26.31 10.96-35.67 7.31-9.36 16.59-14.12 27.84-14.28 4.89 0 10.3 1.25 16.23 3.75 5.92 2.5 9.77 3.81 11.53 3.93 1.52-.22 5.5-1.58 11.94-4.08 6.44-2.5 12.06-3.64 16.86-3.41 12.51.65 22.42 5.16 29.74 13.53-10.88 6.53-16.21 15.56-16 27.1.22 9.03 3.69 16.7 10.41 23.01 6.72 6.31 14.75 9.89 24.09 10.74-2.18 6.64-4.89 13.49-8.14 20.57zm-32.99-106.9c0-6.75 2.45-13.06 7.36-18.94 4.9-5.88 11.05-9.69 18.43-11.41.87 6.42-.71 12.63-4.73 18.63-4.03 6-9.74 9.9-17.13 11.72-.87-.66-2.03-1.07-3.93-1.07v1.07z" />
            </svg>
          </button>

          {/* Clean Apple Menu Dropdown */}
          {appleMenuOpen && (
            <div className="absolute top-7 left-0 w-56 py-1.5 rounded-xl shadow-2xl backdrop-blur-2xl bg-white/95 dark:bg-[#1f2029]/95 border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-100 font-normal z-[1000]">
              <button
                onClick={() => {
                  setIsAboutMacOpen(true);
                  setAppleMenuOpen(false);
                }}
                className="w-full px-3.5 py-1 text-left hover:bg-blue-600 hover:text-white rounded-md mx-auto"
              >
                About This Mac
              </button>
              <div className="h-[1px] bg-black/10 dark:bg-white/10 my-1 mx-2" />
              <button
                onClick={() => {
                  openWindow('settings');
                  setAppleMenuOpen(false);
                }}
                className="w-full px-3.5 py-1 text-left hover:bg-blue-600 hover:text-white rounded-md mx-auto"
              >
                System Settings...
              </button>
              <button
                onClick={() => {
                  openWindow('finder');
                  setAppleMenuOpen(false);
                }}
                className="w-full px-3.5 py-1 text-left hover:bg-blue-600 hover:text-white rounded-md mx-auto"
              >
                App Store...
              </button>
              <div className="h-[1px] bg-black/10 dark:bg-white/10 my-1 mx-2" />
              <button
                onClick={() => {
                  openWindow('terminal');
                  setAppleMenuOpen(false);
                }}
                className="w-full px-3.5 py-1 text-left hover:bg-blue-600 hover:text-white rounded-md mx-auto flex items-center justify-between"
              >
                <span>Terminal (iTerm2)</span>
                <span className="text-[10px] opacity-60">⌥⌘T</span>
              </button>
              <div className="h-[1px] bg-black/10 dark:bg-white/10 my-1 mx-2" />
              <button
                onClick={() => window.location.reload()}
                className="w-full px-3.5 py-1 text-left hover:bg-blue-600 hover:text-white rounded-md mx-auto"
              >
                Restart...
              </button>
            </div>
          )}
        </div>

        {/* Active Application Name in Bold */}
        <span className="font-bold text-slate-900 dark:text-white">{activeAppTitle}</span>

        {/* Standard macOS Menus */}
        <div className="hidden md:flex items-center gap-1 text-slate-600 dark:text-slate-300">
          <button 
            onClick={() => openWindow('finder')}
            className="px-2 py-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            File
          </button>
          <button 
            onClick={() => openWindow('notes')}
            className="px-2 py-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            Edit
          </button>
          <button 
            onClick={() => openWindow('safari')}
            className="px-2 py-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            View
          </button>
          <button 
            onClick={() => openWindow('preview')}
            className="px-2 py-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            Window
          </button>
          <button 
            onClick={() => openWindow('mail')}
            className="px-2 py-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            Help
          </button>
        </div>
      </div>

      {/* ── Right Side: Clean Authentic Status Items ── */}
      <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
        {/* Wi-Fi Symbol */}
        <div title="Wi-Fi: Connected to HarshLagwal-5G" className="flex items-center">
          <Wifi size={14} className="stroke-[2.2]" />
        </div>

        {/* Spotlight Search Icon */}
        <button
          onClick={() => {
            setIsSpotlightOpen(true);
            soundFX.playClick();
          }}
          title="Spotlight Search (Cmd+K)"
          className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <Search size={14} className="stroke-[2.2]" />
        </button>

        {/* Control Center 2-Switch Icon */}
        <button
          onClick={() => {
            setIsControlCenterOpen((prev) => !prev);
            soundFX.playClick();
          }}
          title="Control Center"
          className={`p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${
            isControlCenterOpen ? 'bg-black/10 dark:bg-white/15' : ''
          }`}
        >
          <SlidersHorizontal size={14} className="stroke-[2.2]" />
        </button>

        {/* Clean Date & Time Display */}
        <div className="font-semibold text-[11.5px] tracking-tight ml-1">
          {currentTime || 'Mon 19 Oct  4:15 PM'}
        </div>
      </div>
    </div>
  );
};
