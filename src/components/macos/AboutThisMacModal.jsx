import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, HardDrive, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { soundFX } from '../../utils/soundEffects';

export const AboutThisMacModal = () => {
  const { isAboutMacOpen, setIsAboutMacOpen, openWindow } = useWindowManager();

  if (!isAboutMacOpen) return null;

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
        className="w-full max-w-[480px] rounded-2xl overflow-hidden backdrop-blur-3xl bg-white/90 dark:bg-[#1a1b22]/90 border border-black/10 dark:border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] text-slate-800 dark:text-slate-100"
      >
        {/* Header bar with close button */}
        <div className="h-9 px-3 flex items-center justify-between border-b border-black/5 dark:border-white/10 bg-slate-100/50 dark:bg-white/[0.03]">
          <button
            onClick={() => {
              setIsAboutMacOpen(false);
              soundFX.playClick();
            }}
            className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center hover:opacity-80 active:scale-90"
          >
            <X size={8} className="text-[#4A0002]" />
          </button>
          <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">About This Mac</div>
          <div className="w-3" />
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 flex flex-col items-center text-center">
          {/* macOS Sequoia Logo Orb */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-700 p-1 shadow-xl mb-4 relative flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center backdrop-blur-sm border border-white/30">
              <Sparkles size={36} className="text-white drop-shadow-md" />
            </div>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-0.5">
            macOS Sequoia
          </h2>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-4">
            Version 15.2 (Harsh Lagwal Edition)
          </div>

          {/* Machine Specs Table */}
          <div className="w-full rounded-xl bg-black/5 dark:bg-white/[0.04] border border-black/5 dark:border-white/5 p-3.5 mb-5 text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Model:</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">AI Engineering Workstation (Silicon Edition)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Developer:</span>
              <span className="font-semibold text-blue-600 dark:text-cyan-400">Harsh Lagwal</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Academic:</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">MBA Decision Science @ IIT Patna</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Chip:</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">Apple M3 Max • 16-Core Neural Engine</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Memory:</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">64 GB Unified Memory</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Serial No:</span>
              <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">IITP-DEC-SCI-2026</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsAboutMacOpen(false);
                openWindow('terminal');
              }}
              className="px-4 py-1.5 rounded-lg text-xs font-medium bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 border border-black/10 dark:border-white/10 transition-colors"
            >
              System Report (Terminal)...
            </button>
            <button
              onClick={() => {
                setIsAboutMacOpen(false);
                openWindow('finder');
              }}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
            >
              Explore Projects
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
