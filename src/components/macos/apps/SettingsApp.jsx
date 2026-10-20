import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Moon, 
  Sun, 
  Volume2, 
  Sliders, 
  Sparkles, 
  Check, 
  Info,
  Play,
  Smartphone,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { useWindowManager } from '../../../context/WindowManagerContext';
import { useTheme } from '../../../context/ThemeContext';
import { soundFX } from '../../../utils/soundEffects';

export const SettingsApp = () => {
  const [activeCategory, setActiveCategory] = useState('wallpaper');
  const { 
    wallpaper, 
    setWallpaper, 
    soundEnabled, 
    toggleSound 
  } = useWindowManager();

  const { isDark, toggleTheme } = useTheme();

  const categories = [
    { id: 'wallpaper', label: 'Wallpaper', icon: ImageIcon },
    { id: 'appearance', label: 'Appearance', icon: Moon },
    { id: 'sound', label: 'Sound & Audio', icon: Volume2 },
    { id: 'about', label: 'About Device', icon: Info },
  ];

  const wallpapers = [
    {
      id: 'sonoma-dark',
      name: 'Sonoma Dark Aurora',
      preview: 'from-[#0f172a] via-[#1e1b4b] to-[#0a0c16]'
    },
    {
      id: 'ventura-dynamic',
      name: 'Ventura Sunset Dynamic',
      preview: 'from-amber-600 via-rose-600 to-indigo-900'
    },
    {
      id: 'cyberpunk',
      name: 'Deep Cyberpunk Code Matrix',
      preview: 'from-[#05070e] via-[#09152a] to-[#040814]'
    },
    {
      id: 'cupertino',
      name: 'Cupertino Slate Blue',
      preview: 'from-[#1c2738] via-[#101722] to-[#0a0f16]'
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row h-full w-full select-none text-slate-800 dark:text-slate-100 bg-white dark:bg-[#181920] overflow-hidden font-['Google_Sans',sans-serif]">
      
      {/* ── Mobile Category Navigation Bar (Horizontal Scroll) ── */}
      <div className="sm:hidden sticky top-0 z-20 flex items-center gap-1.5 overflow-x-auto px-3 py-2 border-b border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#181920]/95 backdrop-blur-md scrollbar-none shrink-0">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                soundFX.playClick();
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer active:scale-95 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300'
              }`}
            >
              <Icon size={13} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Desktop Settings Sidebar ── */}
      <div className="hidden sm:flex w-48 md:w-56 border-r border-black/5 dark:border-white/10 p-3 bg-slate-100/60 dark:bg-white/[0.02] flex-col gap-1 text-xs shrink-0">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                soundFX.playClick();
              }}
              className={`w-full px-3 py-2 rounded-xl flex items-center gap-2.5 font-medium transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'hover:bg-black/5 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
              }`}
            >
              <Icon size={15} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Settings Panel Content ── */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 pb-20">
        {/* WALLPAPERS */}
        {activeCategory === 'wallpaper' && (
          <div className="max-w-xl space-y-5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-0.5">
                Wallpaper Presets
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Choose a dynamic atmospheric gradient preset for your device.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {wallpapers.map((wp) => {
                const isSelected = wallpaper === wp.id;

                return (
                  <div
                    key={wp.id}
                    onClick={() => {
                      setWallpaper(wp.id);
                      soundFX.playClick();
                    }}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-blue-500 ring-2 ring-blue-500/30 bg-blue-50/50 dark:bg-blue-900/10'
                        : 'border-black/5 dark:border-white/10 hover:border-black/20'
                    }`}
                  >
                    <div className={`h-20 sm:h-24 rounded-xl bg-gradient-to-tr ${wp.preview} mb-2 shadow-inner flex items-center justify-center relative overflow-hidden`}>
                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
                          <Check size={14} />
                        </div>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                      {wp.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* APPEARANCE */}
        {activeCategory === 'appearance' && (
          <div className="max-w-xl space-y-5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-0.5">
                System Appearance
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Select between Light and Dark mode theme presets.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <button
                onClick={() => {
                  if (isDark) toggleTheme();
                  soundFX.playClick();
                }}
                className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                  !isDark
                    ? 'border-blue-500 ring-2 ring-blue-500/30 bg-blue-50/50 dark:bg-blue-900/10'
                    : 'border-black/5 dark:border-white/10 hover:bg-black/5'
                }`}
              >
                <div className="h-16 sm:h-20 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center mb-2 text-amber-500">
                  <Sun size={26} />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Light</div>
              </button>

              <button
                onClick={() => {
                  if (!isDark) toggleTheme();
                  soundFX.playClick();
                }}
                className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                  isDark
                    ? 'border-blue-500 ring-2 ring-blue-500/30 bg-blue-50/50 dark:bg-blue-900/10'
                    : 'border-black/5 dark:border-white/10 hover:bg-black/5'
                }`}
              >
                <div className="h-16 sm:h-20 rounded-xl bg-[#121319] border border-white/10 flex items-center justify-center mb-2 text-indigo-400">
                  <Moon size={26} />
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Dark (Default)</div>
              </button>
            </div>
          </div>
        )}

        {/* SOUND */}
        {activeCategory === 'sound' && (
          <div className="max-w-xl space-y-5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-0.5">
                Sound & Audio Effects
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Configure synthesized Web Audio API sounds for actions.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">UI Sound Effects</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Window actions, pop and click audio cues</div>
              </div>
              <button
                onClick={() => {
                  toggleSound();
                  soundFX.playClick();
                }}
                className={`w-12 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer shrink-0 ${
                  soundEnabled ? 'bg-blue-600' : 'bg-slate-300 dark:bg-zinc-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                  soundEnabled ? 'translate-x-6' : 'translate-x-0'
                }`} />
              </button>
            </div>

            <button
              onClick={() => soundFX.playChime()}
              className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Play size={13} />
              <span>Test Audio Feedback</span>
            </button>
          </div>
        )}

        {/* ABOUT DEVICE */}
        {activeCategory === 'about' && (
          <div className="max-w-xl space-y-5">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-0.5">
                About Portfolio OS
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Software & engineering specifications for Harsh Lagwal's portfolio.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 space-y-2.5 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">System Architecture</span>
                <span className="font-semibold text-slate-900 dark:text-white">HarshOS v2.4 (iOS / macOS Hybrid)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">Engineer / Scholar</span>
                <span className="font-semibold text-slate-900 dark:text-white">Harsh Lagwal</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">Academic Affiliation</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">IIT Patna (MBA Decision Science)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-black/5 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">Framework</span>
                <span className="font-semibold text-slate-900 dark:text-white">React 19 + Vite + Framer Motion</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 dark:text-slate-400">Status</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Check size={13} /> Production Deployed
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsApp;
