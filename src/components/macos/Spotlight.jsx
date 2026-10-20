import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Folder, 
  Globe, 
  FileText, 
  Terminal, 
  Eye, 
  Mail, 
  Sparkles, 
  Settings, 
  ArrowRight,
  ExternalLink,
  Code2,
  FolderGit2,
  Linkedin
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { portfolioData } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundEffects';

export const Spotlight = () => {
  const { 
    isSpotlightOpen, 
    setIsSpotlightOpen, 
    openWindow 
  } = useWindowManager();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Focus input automatically on open
  useEffect(() => {
    if (isSpotlightOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isSpotlightOpen]);

  // Unified searchable item index
  const allItems = [
    // Applications
    { id: 'finder', title: 'Finder — Projects & Files', category: 'Applications', icon: Folder, action: () => openWindow('finder') },
    { id: 'safari', title: 'Safari — LinkedIn & Web Demos', category: 'Applications', icon: Globe, action: () => openWindow('safari') },
    { id: 'notes', title: 'Notes — About Harsh & MBA IIT Patna', category: 'Applications', icon: FileText, action: () => openWindow('notes') },
    { id: 'terminal', title: 'Terminal — iTerm2 Shell', category: 'Applications', icon: Terminal, action: () => openWindow('terminal') },
    { id: 'preview', title: 'Preview — Resume & Certifications', category: 'Applications', icon: Eye, action: () => openWindow('preview') },
    { id: 'mail', title: 'Mail — Contact Harsh', category: 'Applications', icon: Mail, action: () => openWindow('mail') },
    { id: 'siri', title: 'Siri — Apple Intelligence AI Assistant', category: 'Applications', icon: Sparkles, action: () => openWindow('siri') },
    { id: 'github-app', title: 'GitHub — 3D Contribution Skyline', category: 'Applications', icon: FolderGit2, action: () => openWindow('github') },
    { id: 'settings', title: 'System Settings', category: 'Applications', icon: Settings, action: () => openWindow('settings') },

    // Featured Projects
    ...portfolioData.projects.map((p) => ({
      id: p.id,
      title: `${p.title} (${p.category})`,
      category: 'Projects',
      icon: Code2,
      subtitle: p.summary,
      action: () => openWindow('finder', { selectedProjectId: p.id })
    })),

    // Quick Web Links
    {
      id: 'linkedin',
      title: 'LinkedIn: Harsh Lagwal Profile',
      category: 'Quick Links',
      icon: ExternalLink,
      action: () => window.open(portfolioData.personal.linkedin, '_blank')
    },
    {
      id: 'github',
      title: 'GitHub: @harshlagwal',
      category: 'Quick Links',
      icon: ExternalLink,
      action: () => window.open(portfolioData.personal.github, '_blank')
    },
    {
      id: 'resume',
      title: 'Download Resume (PDF)',
      category: 'Quick Links',
      icon: ExternalLink,
      action: () => window.open(portfolioData.personal.resumeLink, '_blank')
    }
  ];

  const filteredItems = query.trim() === ''
    ? allItems.slice(0, 7)
    : allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 8);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        soundFX.playPop();
        filteredItems[selectedIndex].action();
        setIsSpotlightOpen(false);
      }
    } else if (e.key === 'Escape') {
      setIsSpotlightOpen(false);
    }
  };

  if (!isSpotlightOpen) return null;

  return (
    <div 
      onClick={() => setIsSpotlightOpen(false)}
      className="fixed inset-0 z-[1100] flex items-start justify-center pt-[18vh] bg-black/45 backdrop-blur-md px-4 select-none"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: -15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="w-full max-w-[620px] rounded-2xl overflow-hidden backdrop-blur-3xl bg-white/90 dark:bg-[#1a1b22]/90 border border-black/10 dark:border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] text-slate-800 dark:text-slate-100"
      >
        {/* Search Bar Input */}
        <div className="h-14 px-4 flex items-center gap-3 border-b border-black/5 dark:border-white/10">
          <Search size={20} className="text-slate-400 shrink-0 stroke-[2.2]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Spotlight Search (apps, projects, skills, links)..."
            className="w-full bg-transparent outline-none text-base md:text-lg font-normal text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-black/5 dark:bg-white/10 text-slate-500 dark:text-slate-400">
            ESC to close
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching apps or files found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              const Icon = item.icon;

              return (
                <div
                  key={item.id + index}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => {
                    soundFX.playPop();
                    item.action();
                    setIsSpotlightOpen(false);
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                    isSelected 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-black/5 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/10 text-blue-500 dark:text-blue-400'
                    }`}>
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0 text-left">
                      <div className="text-sm font-medium leading-tight truncate">{item.title}</div>
                      {item.subtitle && (
                        <div className={`text-[11px] truncate leading-normal ${
                          isSelected ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'
                        }`}>
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-[10px] font-medium uppercase px-2 py-0.5 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/5 text-slate-400'
                    }`}>
                      {item.category}
                    </span>
                    <ArrowRight size={14} className={`opacity-0 ${isSelected ? 'opacity-100' : ''}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </motion.div>
    </div>
  );
};
