import React, { useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';

export const MacWindow = ({
  id,
  title,
  icon: Icon,
  children,
  defaultWidth = 880,
  defaultHeight = 580,
  headerExtras = null
}) => {
  const {
    windows,
    activeWindowId,
    focusWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow
  } = useWindowManager();

  const win = windows[id];
  const dragControls = useDragControls();

  if (!win || !win.isOpen || win.isMinimized) {
    return null;
  }

  const isActive = activeWindowId === id;
  const isMaximized = win.isMaximized;

  return (
    <motion.div
      drag={!isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      initial={{ opacity: 0, scale: 0.94, y: 15 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', damping: 25, stiffness: 300 }
      }}
      exit={{ opacity: 0, scale: 0.92, y: 15, transition: { duration: 0.15 } }}
      style={{
        zIndex: win.zIndex,
        position: 'fixed',
        left: isMaximized ? 0 : win.position?.x ?? 80,
        top: isMaximized ? 28 : win.position?.y ?? 55,
        width: isMaximized ? '100vw' : `min(${defaultWidth}px, 94vw)`,
        height: isMaximized ? 'calc(100vh - 28px)' : `min(${defaultHeight}px, 86vh)`,
      }}
      onPointerDown={() => focusWindow(id)}
      className={`flex flex-col rounded-2xl overflow-hidden select-none transition-shadow duration-200 ${
        isMaximized ? 'rounded-none' : ''
      } ${
        isActive
          ? 'shadow-[0_25px_65px_-10px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.18)] dark:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.14)]'
          : 'shadow-[0_15px_35px_-10px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.1)] opacity-95'
      } backdrop-blur-3xl bg-white/92 dark:bg-[#16171f]/92 text-slate-800 dark:text-slate-100 border border-black/10 dark:border-white/10`}
    >
      {/* ── macOS Titlebar Header ── */}
      <div
        onPointerDown={(e) => dragControls.start(e)}
        onDoubleClick={() => maximizeWindow(id)}
        className="h-10 md:h-11 px-4 flex items-center justify-between border-b border-black/5 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.04] cursor-grab active:cursor-grabbing backdrop-blur-md relative"
      >
        {/* Left: Traffic Lights (Strictly isolated from drag & stationary) */}
        <div 
          onPointerDown={(e) => e.stopPropagation()}
          className="flex items-center gap-2 group/lights cursor-default z-10 shrink-0"
        >
          {/* Close Button 🔴 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            title="Close"
            className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center transition-opacity hover:brightness-95 active:scale-90"
          >
            <X size={8} className="opacity-0 group-hover/lights:opacity-100 text-[#4A0002] stroke-[3]" />
          </button>

          {/* Minimize Button 🟡 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            title="Minimize"
            className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center transition-opacity hover:brightness-95 active:scale-90"
          >
            <Minus size={8} className="opacity-0 group-hover/lights:opacity-100 text-[#543500] stroke-[3]" />
          </button>

          {/* Maximize / Zoom Button 🟢 */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              maximizeWindow(id);
            }}
            title="Zoom / Fullscreen"
            className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center transition-opacity hover:brightness-95 active:scale-90"
          >
            {isMaximized ? (
              <Minimize2 size={7} className="opacity-0 group-hover/lights:opacity-100 text-[#00380B] stroke-[3]" />
            ) : (
              <Maximize2 size={7} className="opacity-0 group-hover/lights:opacity-100 text-[#00380B] stroke-[3]" />
            )}
          </button>
        </div>

        {/* Center: Window Title & Icon (Centered like macOS) */}
        <div className="absolute inset-x-0 flex items-center justify-center gap-2 text-xs md:text-[13px] font-semibold tracking-tight text-slate-700 dark:text-slate-200 pointer-events-none px-20 truncate">
          {Icon && <Icon size={14} className="text-slate-500 dark:text-slate-400 shrink-0" />}
          <span className="truncate">{title}</span>
        </div>

        {/* Right: Header Extras */}
        <div 
          onPointerDown={(e) => e.stopPropagation()}
          className="flex items-center gap-2 text-xs z-10 shrink-0"
        >
          {headerExtras}
        </div>
      </div>

      {/* ── Window Content Body ── */}
      <div className="flex-1 overflow-auto relative">
        {children}
      </div>
    </motion.div>
  );
};
