import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, 
  Award, 
  FileText, 
  Terminal, 
  Code2, 
  Mail,
  ShieldCheck,
  MapPin,
  Sparkles,
  Sliders,
  GraduationCap
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { portfolioData } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundEffects';

// Mobile Subcomponents
import { MobileBottomSheet } from './MobileBottomSheet';
import { MobileBottomDock } from './MobileBottomDock';
import { MobileIPhoneClock } from './MobileIPhoneClock';
import { AppIcon } from '../macos/AppIcon';
import { HelloIntro } from '../macos/HelloIntro';

// Real Desktop Apps for Bottom Sheets
import { FinderApp } from '../macos/apps/FinderApp';
import { GitHubApp } from '../macos/apps/GitHubApp';
import { NotesApp } from '../macos/apps/NotesApp';
import { PreviewApp } from '../macos/apps/PreviewApp';
import { TerminalApp } from '../macos/apps/TerminalApp';
import { ResumeApp } from '../macos/apps/ResumeApp';
import { MailApp } from '../macos/apps/MailApp';
import { SettingsApp } from '../macos/apps/SettingsApp';
import { SiriApp } from '../macos/apps/SiriApp';
import { IITPatnaApp } from '../macos/apps/IITPatnaApp';

// High-Res Portrait Wallpaper Assets for Slideshow
import wp1 from '../../assets/wallpapers/ios_liquid_nebula.jpg';
import wp2 from '../../assets/wallpapers/ios_dark_aurora.jpg';
import wp3 from '../../assets/wallpapers/ios_deep_gradient.jpg';
import wp4 from '../../assets/wallpapers/wallpaper2.jpg';

// Assets
import harshImg from '../../assets/Harsh-portfolio.jpg';

const MOBILE_WALLPAPERS = [wp1, wp2, wp3, wp4];

export const MobilePortfolio = () => {
  const { isDark } = useTheme();
  const [activeSheet, setActiveSheet] = useState(null); 
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);

  // Smooth automatic wallpaper slideshow every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWallpaperIndex((prev) => (prev + 1) % MOBILE_WALLPAPERS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Deduplicated 8 Apps on Homescreen (4x2 Grid)
  // Dock uniquely holds 4 Apps: Safari, Mail, GitHub, LinkedIn (Zero Overlap!)
  const defaultHomeApps = [
    { id: 'finder', name: 'Projects' },
    { id: 'notes', name: 'About Me' },
    { id: 'preview', name: 'Certificates' },
    { id: 'terminal', name: 'Terminal' },
    { id: 'resume', name: 'Resume (CV)' },
    { id: 'settings', name: 'Settings' },
    { id: 'siri', name: 'Siri AI' },
    { id: 'iitpatna', name: 'IIT Patna' },
  ];

  // Draggable & Reorderable iPhone App Grid state
  const [homeApps, setHomeApps] = useState(() => {
    try {
      const saved = localStorage.getItem('harsh_portfolio_mobile_apps_v4');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === defaultHomeApps.length) {
          const defaultIds = new Set(defaultHomeApps.map((a) => a.id));
          const hasAll = parsed.every((p) => defaultIds.has(p.id));
          if (hasAll) return parsed;
        }
      }
    } catch {}
    return defaultHomeApps;
  });

  const slotRefs = useRef([]);
  const [draggingAppId, setDraggingAppId] = useState(null);
  const isDraggingRef = useRef(false);
  const dragStartPointRef = useRef({ x: 0, y: 0 });
  const lastSwapTimeRef = useRef(0);

  const handleDragStart = (appId, e, info) => {
    dragStartPointRef.current = { x: info.point.x, y: info.point.y };
    setDraggingAppId(appId);
  };

  const handleDrag = (appId, e, info) => {
    const moveDist = Math.hypot(
      info.point.x - dragStartPointRef.current.x,
      info.point.y - dragStartPointRef.current.y
    );
    if (moveDist > 6) {
      isDraggingRef.current = true;
    }

    const now = Date.now();
    // Throttle live slot swaps for buttery smooth 60fps animations
    if (now - lastSwapTimeRef.current < 160) return;

    let closestSlotIndex = -1;
    let minDistance = 55; // Snap distance threshold around slot center

    slotRefs.current.forEach((slotEl, idx) => {
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
      setHomeApps((prev) => {
        const fromIdx = prev.findIndex((item) => item.id === appId);
        if (fromIdx === -1 || fromIdx === closestSlotIndex) return prev;

        lastSwapTimeRef.current = now;
        soundFX.playPop();

        const reordered = [...prev];
        const [movedItem] = reordered.splice(fromIdx, 1);
        reordered.splice(closestSlotIndex, 0, movedItem);
        return reordered;
      });
    }
  };

  const handleDragEnd = () => {
    setDraggingAppId(null);
    try {
      localStorage.setItem('harsh_portfolio_mobile_apps_v3', JSON.stringify(homeApps));
    } catch {}

    // Delay clearing isDraggingRef so mouse/touch release cannot trigger app tap
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 220);
  };

  const handleAppTap = (app) => {
    if (isDraggingRef.current) return;
    soundFX.playClick();
    if (app.isExternal) {
      window.open(app.url, '_blank');
      return;
    }
    setActiveSheet(app.id);
  };

  return (
    <div className="relative min-h-screen w-full font-['Google_Sans',sans-serif] select-none pb-28 overflow-x-hidden text-white">
      
      {/* ── 0. Authentic Apple "hello" Intro ── */}
      <HelloIntro />

      {/* ── 1. Dynamic Wallpaper Slideshow (High-Res Mobile Background) ── */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentWallpaperIndex}
            src={MOBILE_WALLPAPERS[currentWallpaperIndex]}
            alt="iOS Wallpaper"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </AnimatePresence>

        {/* Ambient Dark/Glass Scrim for 100% Text & Icon Readability */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
      </div>

      {/* ── 2. iPhone Digital Clock (Live Date + Large Digital Time) ── */}
      <motion.div 
        initial={{ scale: 0.93, opacity: 0, y: -10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 24, stiffness: 240, delay: 0.15 }}
        className="relative z-10 pt-4"
      >
        <MobileIPhoneClock />
      </motion.div>

      {/* ── 3. Main Scrollable Homescreen Feed (GPU Accelerated Smooth Scale) ── */}
      <motion.main 
        animate={{
          scale: activeSheet ? 0.95 : 1,
          opacity: activeSheet ? 0.85 : 1,
          y: activeSheet ? 8 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 320 }}
        className="relative z-10 max-w-sm mx-auto px-4 space-y-5 origin-top transform-gpu will-change-transform"
      >
        
        {/* ── iOS Apple Style Identity Widget (Compact, Frosted Glass) ── */}
        <motion.section 
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", damping: 24, stiffness: 260, delay: 0.28 }}
          className="rounded-3xl border border-white/20 bg-white/10 dark:bg-black/35 backdrop-blur-2xl p-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full p-0.5 bg-white/90 shadow-md border-2 border-[#0a66c2] overflow-hidden">
                <img 
                  src={harshImg} 
                  alt="Harsh Lagwal" 
                  className="w-full h-full object-cover object-top rounded-full" 
                />
              </div>
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white absolute -bottom-0.5 -right-0.5" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h1 className="text-sm font-bold tracking-tight text-white truncate">
                  Harsh Lagwal
                </h1>
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-[10px] text-white/70">He/Him</span>
              </div>
              <p className="text-[11px] font-medium text-white/90 truncate leading-snug">
                MBA Candidate @ IIT Patna
              </p>
              <p className="text-[10px] text-white/75 truncate">
                AI & Decision Science Specialist
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-white/80 pt-2.5 mt-2.5 border-t border-white/10">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-rose-400" />
              Hamirpur, Himachal Pradesh
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-300">
              ● Open to Work (AI/ML)
            </span>
          </div>
        </motion.section>

        {/* ── 4. iPhone Apps Grid (Real-time Interactive Live Slot Shifting) ── */}
        <section className="pt-1">
          <div className="grid grid-cols-4 gap-y-6 gap-x-2">
            {homeApps.map((app, index) => {
              const isDraggingThis = draggingAppId === app.id;

              return (
                <div
                  key={app.id}
                  ref={(el) => (slotRefs.current[index] = el)}
                  className="flex flex-col items-center justify-center relative select-none min-h-[78px]"
                >
                  <motion.div
                    layout={!isDraggingThis}
                    drag
                    dragSnapToOrigin={true}
                    dragElastic={0.25}
                    onDragStart={(e, info) => handleDragStart(app.id, e, info)}
                    onDrag={(e, info) => handleDrag(app.id, e, info)}
                    onDragEnd={handleDragEnd}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.88 }}
                    whileDrag={{
                      scale: 1.25,
                      zIndex: 80,
                      filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.65))"
                    }}
                    onClick={(e) => {
                      if (isDraggingRef.current) {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                      }
                      handleAppTap(app);
                    }}
                    transition={{
                      layout: { type: "spring", damping: 25, stiffness: 350 },
                      default: { type: "spring", damping: 20, stiffness: 320 }
                    }}
                    className={`flex flex-col items-center justify-center cursor-grab active:cursor-grabbing touch-none select-none ${
                      isDraggingThis ? 'z-50' : 'z-10'
                    }`}
                  >
                    <div className="w-14 h-14 flex items-center justify-center pointer-events-none">
                      <AppIcon id={app.id} size={54} className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]" />
                    </div>
                    <span className="text-[11px] font-medium text-white drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.95)] text-center tracking-tight truncate max-w-[74px] mt-1.5 pointer-events-none">
                      {app.name}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 5. Apple Style 3-Metric Quick Glance Bar ── */}
        <motion.section 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 24, stiffness: 260, delay: 0.65 }}
          className="grid grid-cols-3 gap-2 pt-2"
        >
          <motion.div 
            whileTap={{ scale: 0.92 }}
            onClick={() => setActiveSheet('finder')}
            className="p-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/15 text-center cursor-pointer shadow-md transition-colors"
          >
            <p className="text-base font-extrabold text-white leading-none">9+</p>
            <p className="text-[9.5px] font-medium text-white/75 mt-1 truncate">AI Systems</p>
          </motion.div>

          <motion.div 
            whileTap={{ scale: 0.92 }}
            onClick={() => setActiveSheet('github')}
            className="p-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/15 text-center cursor-pointer shadow-md transition-colors"
          >
            <p className="text-base font-extrabold text-white leading-none">224</p>
            <p className="text-[9.5px] font-medium text-white/75 mt-1 truncate">Skyline Activity</p>
          </motion.div>

          <motion.div 
            whileTap={{ scale: 0.92 }}
            onClick={() => setActiveSheet('preview')}
            className="p-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/15 text-center cursor-pointer shadow-md transition-colors"
          >
            <p className="text-base font-extrabold text-white leading-none">100%</p>
            <p className="text-[9.5px] font-medium text-white/75 mt-1 truncate">IIT Patna & Certs</p>
          </motion.div>
        </motion.section>

      </motion.main>

      {/* ── 6. Interactive iOS Bottom Sheets (Buttery Smooth 60-120fps) ── */}
      <MobileBottomSheet
        isOpen={activeSheet === 'finder'}
        onClose={() => setActiveSheet(null)}
        title="Projects & Engineering Systems"
        icon={Folder}
      >
        <div className="min-h-[520px]">
          <FinderApp />
        </div>
      </MobileBottomSheet>

      <MobileBottomSheet
        isOpen={activeSheet === 'github'}
        onClose={() => setActiveSheet(null)}
        title="GitHub 3D Contribution Skyline"
        icon={Code2}
      >
        <div className="min-h-[520px]">
          <GitHubApp />
        </div>
      </MobileBottomSheet>

      <MobileBottomSheet
        isOpen={activeSheet === 'notes'}
        onClose={() => setActiveSheet(null)}
        title="Notes — About Harsh Lagwal"
        icon={FileText}
      >
        <div className="min-h-[520px]">
          <NotesApp />
        </div>
      </MobileBottomSheet>

      <MobileBottomSheet
        isOpen={activeSheet === 'preview'}
        onClose={() => setActiveSheet(null)}
        title="Certifications & Verified Honors"
        icon={Award}
      >
        <div className="min-h-[520px]">
          <PreviewApp />
        </div>
      </MobileBottomSheet>

      <MobileBottomSheet
        isOpen={activeSheet === 'terminal'}
        onClose={() => setActiveSheet(null)}
        title="Terminal — iTerm2 Shell"
        icon={Terminal}
      >
        <div className="min-h-[460px]">
          <TerminalApp />
        </div>
      </MobileBottomSheet>

      <MobileBottomSheet
        isOpen={activeSheet === 'resume'}
        onClose={() => setActiveSheet(null)}
        title="Resume (Curriculum Vitae)"
        icon={FileText}
      >
        <div className="h-[78vh] min-h-[540px] w-full flex flex-col">
          <ResumeApp />
        </div>
      </MobileBottomSheet>

      <MobileBottomSheet
        isOpen={activeSheet === 'settings'}
        onClose={() => setActiveSheet(null)}
        title="Settings — System Preferences"
        icon={Sliders}
      >
        <div className="min-h-[500px]">
          <SettingsApp />
        </div>
      </MobileBottomSheet>

      <MobileBottomSheet
        isOpen={activeSheet === 'siri'}
        onClose={() => setActiveSheet(null)}
        title="Siri — Apple Intelligence Assistant"
        icon={Sparkles}
      >
        <div className="min-h-[520px]">
          <SiriApp />
        </div>
      </MobileBottomSheet>

      <MobileBottomSheet
        isOpen={activeSheet === 'mail'}
        onClose={() => setActiveSheet(null)}
        title="Mail — Contact Harsh"
        icon={Mail}
      >
        <div className="min-h-[460px]">
          <MailApp />
        </div>
      </MobileBottomSheet>

      <MobileBottomSheet
        isOpen={activeSheet === 'iitpatna'}
        onClose={() => setActiveSheet(null)}
        title="IIT Patna — Academic Excellence"
        icon={GraduationCap}
      >
        <div className="min-h-[500px]">
          <IITPatnaApp />
        </div>
      </MobileBottomSheet>

      {/* ── 7. Fixed Authentic iPhone Non-Duplicate Bottom Dock ── */}
      <MobileBottomDock
        onOpenApp={(appId) => setActiveSheet(appId)}
        activeApp={activeSheet}
      />

    </div>
  );
};

export default MobilePortfolio;
