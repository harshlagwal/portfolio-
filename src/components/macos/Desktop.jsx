import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, 
  FileText, 
  Terminal, 
  Image as ImageIcon,
  Info,
  RotateCw
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { portfolioData } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundEffects';
import { AppIcon } from './AppIcon';
import { WorldClockWidget } from './widgets/WorldClockWidget';
import { GlassTimeWidget } from './widgets/GlassTimeWidget';

import wallpaper1 from '../../assets/wallpapers/wallpaper1.jpg';
import wallpaper2 from '../../assets/wallpapers/wallpaper2.jpg';
import wallpaper3 from '../../assets/wallpapers/wallpaper3.jpg';

const WALLPAPERS = [wallpaper1, wallpaper2, wallpaper3];

export const Desktop = () => {
  const { 
    openWindow, 
    brightness, 
    setIsAboutMacOpen 
  } = useWindowManager();

  const [contextMenu, setContextMenu] = useState(null);
  const [selectedDesktopIcon, setSelectedDesktopIcon] = useState(null);
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);

  // Smooth automatic wallpaper slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWallpaperIndex((prev) => (prev + 1) % WALLPAPERS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Desktop shortcut items (rendered with official macOS squircle icons)
  const defaultDesktopShortcuts = [
    {
      id: 'projects-folder',
      title: 'Projects',
      appId: 'finder',
      action: () => openWindow('finder')
    },
    {
      id: 'certifications-shortcut',
      title: 'Certificates',
      appId: 'certificate',
      action: () => openWindow('preview')
    },
    {
      id: 'resume-shortcut',
      title: 'Resume (CV)',
      appId: 'resume',
      action: () => openWindow('resume')
    },
    {
      id: 'github-shortcut',
      title: 'GitHub 3D',
      appId: 'github',
      action: () => openWindow('github')
    },
    {
      id: 'notes-shortcut',
      title: 'About Harsh',
      appId: 'notes',
      action: () => openWindow('notes')
    },
    {
      id: 'terminal-shortcut',
      title: 'Terminal',
      appId: 'terminal',
      action: () => openWindow('terminal')
    }
  ];

  // Draggable & Reorderable Desktop App Grid (Live Slot Swapping - Zero Overlap!)
  const [desktopApps, setDesktopApps] = useState(() => {
    try {
      const saved = localStorage.getItem('harsh_macos_desktop_order_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === defaultDesktopShortcuts.length) {
          const map = new Map(defaultDesktopShortcuts.map((s) => [s.id, s]));
          const restored = parsed.map((id) => map.get(id)).filter(Boolean);
          if (restored.length === defaultDesktopShortcuts.length) return restored;
        }
      }
    } catch {}
    return defaultDesktopShortcuts;
  });

  const desktopSlotRefs = React.useRef([]);
  const [draggingDesktopId, setDraggingDesktopId] = useState(null);
  const desktopDraggingRef = React.useRef(false);
  const desktopDragStartPointRef = React.useRef({ x: 0, y: 0 });
  const desktopLastSwapTimeRef = React.useRef(0);

  const handleDesktopDragStart = (id, e, info) => {
    desktopDragStartPointRef.current = { x: info.point.x, y: info.point.y };
    setDraggingDesktopId(id);
  };

  const handleDesktopDrag = (id, e, info) => {
    const moveDist = Math.hypot(
      info.point.x - desktopDragStartPointRef.current.x,
      info.point.y - desktopDragStartPointRef.current.y
    );
    if (moveDist > 6) {
      desktopDraggingRef.current = true;
    }

    const now = Date.now();
    // Throttle slot swaps for buttery smooth 60fps animations
    if (now - desktopLastSwapTimeRef.current < 160) return;

    let closestSlotIndex = -1;
    let minDistance = 50;

    desktopSlotRefs.current.forEach((slotEl, idx) => {
      if (!slotEl) return;
      const rect = slotEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(info.point.x - centerX, info.point.y - centerY);
      if (dist < minDistance) {
        minDistance = dist;
        closestSlotIndex = idx;
      }
    });

    if (closestSlotIndex !== -1) {
      setDesktopApps((prev) => {
        const fromIdx = prev.findIndex((item) => item.id === id);
        if (fromIdx === -1 || fromIdx === closestSlotIndex) return prev;

        desktopLastSwapTimeRef.current = now;
        soundFX.playPop();

        const reordered = [...prev];
        const [movedItem] = reordered.splice(fromIdx, 1);
        reordered.splice(closestSlotIndex, 0, movedItem);
        return reordered;
      });
    }
  };

  const handleDesktopDragEnd = () => {
    setDraggingDesktopId(null);
    try {
      localStorage.setItem(
        'harsh_macos_desktop_order_v2',
        JSON.stringify(desktopApps.map((a) => a.id))
      );
    } catch {}

    setTimeout(() => {
      desktopDraggingRef.current = false;
    }, 220);
  };

  const handleResetDesktopIcons = () => {
    soundFX.playPop();
    setDesktopApps(defaultDesktopShortcuts);
    try {
      localStorage.removeItem('harsh_macos_desktop_order_v2');
      localStorage.removeItem('harsh_macos_desktop_positions');
    } catch {}
  };

  // Right-click context menu handler
  const handleContextMenu = (e) => {
    e.preventDefault();
    soundFX.playClick();
    setContextMenu({
      x: Math.min(e.clientX, window.innerWidth - 220),
      y: Math.min(e.clientY, window.innerHeight - 300)
    });
  };

  useEffect(() => {
    const handleClick = () => setContextMenu(null);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={() => setSelectedDesktopIcon(null)}
      style={{ filter: `brightness(${brightness}%)` }}
      className="fixed inset-0 select-none overflow-hidden bg-black"
    >
      {/* ── macOS Wallpapers Automated Crossfade Slideshow ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentWallpaperIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${WALLPAPERS[currentWallpaperIndex]})` }}
          />
        </AnimatePresence>
        {/* Cinematic dark ambient overlay for maximum readability and contrast */}
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px]" />
      </div>

      {/* ── Left Side: Pure Minimalist Analog Clock (Zero Inner Text) ── */}
      <div className="absolute top-10 md:top-14 left-6 md:left-12 z-[25] pointer-events-auto">
        <WorldClockWidget />
      </div>

      {/* ── Center: Pure Liquid Glass Digital Watch + "Welcome to My Portfolio" Greeting ── */}
      <div className="absolute top-8 md:top-12 left-1/2 -translate-x-1/2 z-[25] flex flex-col items-center pointer-events-auto text-center gap-3">
        <GlassTimeWidget />
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-6 py-2 rounded-full backdrop-blur-3xl bg-black/30 border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
        >
          <span className="text-xs md:text-sm font-medium tracking-[0.22em] uppercase text-white/95 drop-shadow-sm font-sans">
            Welcome to My Portfolio
          </span>
        </motion.div>
      </div>

      {/* ── Desktop App & Folder Shortcuts (Interactive Live Slot Reorder - Zero Overlap!) ── */}
      <div className="absolute top-10 md:top-12 right-6 md:right-8 flex flex-col gap-3 z-[30] pointer-events-auto select-none">
        {desktopApps.map((item, index) => {
          const isSelected = selectedDesktopIcon === item.id;
          const isDraggingThis = draggingDesktopId === item.id;

          return (
            <div
              key={item.id}
              ref={(el) => (desktopSlotRefs.current[index] = el)}
              className="relative flex items-center justify-center min-h-[82px]"
            >
              <motion.div
                layout={!isDraggingThis}
                drag
                dragSnapToOrigin={true}
                dragElastic={0.25}
                onDragStart={(e, info) => handleDesktopDragStart(item.id, e, info)}
                onDrag={(e, info) => handleDesktopDrag(item.id, e, info)}
                onDragEnd={handleDesktopDragEnd}
                whileDrag={{ 
                  scale: 1.15, 
                  zIndex: 100, 
                  filter: "drop-shadow(0 18px 32px rgba(0,0,0,0.75))",
                  cursor: "grabbing"
                }}
                whileTap={{ scale: 0.94 }}
                whileHover={{ scale: 1.05 }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (desktopDraggingRef.current) return;
                  setSelectedDesktopIcon(item.id);
                }}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  if (desktopDraggingRef.current) return;
                  soundFX.playPop();
                  item.action();
                }}
                transition={{
                  layout: { type: "spring", damping: 25, stiffness: 350 },
                  default: { type: "spring", damping: 20, stiffness: 320 }
                }}
                className={`w-20 md:w-22 p-2 rounded-2xl flex flex-col items-center justify-center gap-1.5 cursor-grab active:cursor-grabbing transition-colors group select-none touch-none ${
                  isDraggingThis ? 'z-50' : 'z-10'
                } ${
                  isSelected ? 'bg-white/20 ring-1 ring-white/30 backdrop-blur-xs' : 'hover:bg-white/10'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform drop-shadow-xl pointer-events-none">
                  <AppIcon id={item.appId} size={54} />
                </div>
                <span className="text-[11.5px] font-semibold tracking-tight text-white drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.95)] text-center line-clamp-1 leading-tight px-1 rounded pointer-events-none">
                  {item.title}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* ── macOS Desktop Right-Click Context Menu ── */}
      <AnimatePresence>
        {contextMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            style={{ left: contextMenu.x, top: contextMenu.y }}
            className="fixed w-56 py-1.5 rounded-2xl backdrop-blur-3xl bg-white/85 dark:bg-[#1a1b24]/90 border border-black/10 dark:border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] z-[1300] text-slate-800 dark:text-slate-100 text-xs select-none"
          >
            <button
              onClick={() => {
                soundFX.playPop();
                openWindow('finder');
              }}
              className="w-full px-3.5 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <Folder size={14} />
              <span>Open Projects Finder</span>
            </button>
            <button
              onClick={() => {
                soundFX.playPop();
                openWindow('resume');
              }}
              className="w-full px-3.5 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <FileText size={14} />
              <span>Inspect Resume (CV Document)</span>
            </button>
            <button
              onClick={() => {
                soundFX.playPop();
                openWindow('preview');
              }}
              className="w-full px-3.5 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <FileText size={14} />
              <span>View Certifications & Credentials</span>
            </button>
            <button
              onClick={() => {
                soundFX.playPop();
                openWindow('terminal');
              }}
              className="w-full px-3.5 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <Terminal size={14} />
              <span>New Terminal Window</span>
            </button>
            <div className="h-[1px] bg-black/10 dark:bg-white/10 my-1 mx-2" />
            <button
              onClick={handleResetDesktopIcons}
              className="w-full px-3.5 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <RotateCw size={14} />
              <span>Clean Up Desktop Icons</span>
            </button>
            <button
              onClick={() => {
                setCurrentWallpaperIndex((prev) => (prev + 1) % WALLPAPERS.length);
              }}
              className="w-full px-3.5 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <ImageIcon size={14} />
              <span>Next Wallpaper</span>
            </button>
            <button
              onClick={() => setIsAboutMacOpen(true)}
              className="w-full px-3.5 py-1.5 text-left hover:bg-blue-600 hover:text-white flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <Info size={14} />
              <span>About This Mac...</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
