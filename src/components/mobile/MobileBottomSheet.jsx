import React from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { X } from 'lucide-react';

export const MobileBottomSheet = ({ 
  isOpen, 
  onClose, 
  title, 
  icon: Icon, 
  children 
}) => {
  const dragControls = useDragControls();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex flex-col justify-end pointer-events-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transform-gpu"
          />

          {/* Bottom Sheet Modal with Dedicated Drag Handle */}
          <motion.div
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0 }}
            dragElastic={0.18}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100 || info.velocity.y > 350) {
                onClose();
              }
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              type: 'spring',
              damping: 32,
              stiffness: 340,
              mass: 0.82
            }}
            className="relative z-10 w-full max-h-[92vh] rounded-t-[2rem] bg-white dark:bg-[#12141c] border-t border-black/10 dark:border-white/10 shadow-[0_-15px_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden text-slate-800 dark:text-slate-100 transform-gpu will-change-transform"
          >
            {/* iOS Pull Grabber Bar (Drag Trigger) */}
            <div 
              onPointerDown={(e) => dragControls.start(e)}
              className="w-full pt-3 pb-1.5 flex justify-center cursor-grab active:cursor-grabbing select-none touch-none"
            >
              <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            </div>

            {/* Sheet Title Bar (Also Drag Trigger) */}
            <div 
              onPointerDown={(e) => dragControls.start(e)}
              className="px-5 py-2.5 border-b border-black/5 dark:border-white/10 flex items-center justify-between gap-3 shrink-0 cursor-grab active:cursor-grabbing select-none touch-none"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {Icon && (
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 pointer-events-none">
                    <Icon size={16} />
                  </div>
                )}
                <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate pointer-events-none">
                  {title}
                </h3>
              </div>

              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:scale-105 active:scale-95 transition-all cursor-pointer touch-auto"
                aria-label="Close sheet"
              >
                <X size={15} />
              </button>
            </div>

            {/* Scrollable Sheet Content with Native Smooth Touch Scroll */}
            <div className="flex-1 overflow-y-auto overscroll-contain select-text">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileBottomSheet;
