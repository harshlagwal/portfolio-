import React, { useState, useEffect } from 'react';
import { 
  Folder, 
  LayoutGrid, 
  List, 
  Search, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Eye, 
  Tag, 
  Code2, 
  X,
  Layers,
  FolderGit2
} from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { soundFX } from '../../../utils/soundEffects';

// Authentic Apple macOS Blue Folder SVG
const MacFolderIcon = ({ size = 42, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={`drop-shadow-md shrink-0 ${className}`}>
    <defs>
      <linearGradient id="macFolderTab" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#79bbf7" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="macFolderFront" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="35%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="folderGleam" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M12 28 C12 24, 15 22, 19 22 L40 22 C43 22, 46 25, 48 28 L54 34 L81 34 C85 34, 88 37, 88 41 L88 74 C88 78, 85 81, 81 81 L19 81 C15 81, 12 78, 12 74 Z" fill="url(#macFolderTab)" />
    <rect x="20" y="27" width="60" height="20" rx="3" fill="#ffffff" opacity="0.8" />
    <path d="M10 40 C10 36, 13 34, 17 34 L83 34 C87 34, 90 36, 90 40 L88 75 C88 79, 85 82, 81 82 L19 82 C15 82, 12 79, 12 75 Z" fill="url(#macFolderFront)" />
    <rect x="12" y="34" width="76" height="3" rx="1.5" fill="url(#folderGleam)" />
  </svg>
);

export const FinderApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [quickLookProject, setQuickLookProject] = useState(null);

  const categories = [
    { id: 'All', label: 'All Projects', icon: Folder },
    { id: 'Generative AI', label: 'Generative AI', icon: Sparkles },
    { id: 'Machine Learning', label: 'Machine Learning', icon: Code2 },
    { id: 'Computer Vision & Tools', label: 'Vision & Tools', icon: Eye },
    { id: 'Client & Web Apps', label: 'Production Web', icon: ExternalLink },
  ];

  const filteredProjects = portfolioData.projects.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Spacebar triggers Quick Look
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && selectedProject && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        soundFX.playPop();
        setQuickLookProject((prev) => (prev ? null : selectedProject));
      } else if (e.key === 'Escape' && quickLookProject) {
        setQuickLookProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, quickLookProject]);

  return (
    <div className="flex h-full w-full select-none text-slate-800 dark:text-slate-100 overflow-hidden relative font-sans bg-[#f6f7fb] dark:bg-[#11131a]">
      {/* ── Left Sidebar (Desktop Only) ── */}
      <div className="hidden sm:flex w-48 md:w-52 bg-slate-100/90 dark:bg-[#161822]/95 border-r border-black/10 dark:border-white/10 p-3 flex-col justify-between shrink-0 text-xs backdrop-blur-md">
        <div>
          <div className="text-[10.5px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-2 mb-2">
            Categories
          </div>
          <div className="space-y-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              const count = cat.id === 'All' 
                ? portfolioData.projects.length 
                : portfolioData.projects.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    soundFX.playClick();
                  }}
                  className={`w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'hover:bg-black/5 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <Icon size={14} className={isSelected ? 'text-white' : 'text-blue-500 dark:text-blue-400'} />
                    <span className="truncate">{cat.label}</span>
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'text-slate-500 dark:text-slate-400 bg-black/5 dark:bg-white/5'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimalist Summary Badge */}
        <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-[11px] text-slate-600 dark:text-slate-400">
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-slate-900 dark:text-white">Repository Files</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[10px]">Verified</span>
          </div>
          <p className="text-[10.5px] leading-relaxed text-slate-500 dark:text-slate-400">
            Tap any project to view details, demo, and source code.
          </p>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#0d0f15]">
        {/* Mobile Horizontal Category Filter Bar */}
        <div className="sm:hidden sticky top-0 z-20 flex items-center gap-1.5 overflow-x-auto px-3 py-2 border-b border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#14161f]/95 backdrop-blur-md scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Toolbar Header */}
        <div className="h-11 sm:h-12 px-3 sm:px-5 border-b border-black/10 dark:border-white/10 flex items-center justify-between gap-2 bg-slate-50/90 dark:bg-[#14161f]/90">
          <div className="flex items-center gap-2 min-w-0 truncate">
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400 truncate">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} in <span className="text-slate-900 dark:text-white font-semibold">{selectedCategory}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-black/5 dark:bg-white/5 p-0.5 rounded-lg border border-black/10 dark:border-white/10">
              <button
                onClick={() => setViewMode('grid')}
                title="Grid Showcase"
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                <LayoutGrid size={13} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                title="List View"
                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                <List size={13} />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-24 sm:w-40 md:w-56 pl-7 pr-2.5 py-1 text-xs rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500/50 transition-all font-sans"
              />
            </div>
          </div>
        </div>

        {/* Projects Viewport */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 pb-20 sm:pb-8 scrollbar-thin scrollbar-thumb-black/10 dark:scrollbar-thumb-white/10">
          {viewMode === 'grid' ? (
            /* Apple & Google Style Balanced Product Cards */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {filteredProjects.map((project) => {
                const isSelected = selectedProject?.id === project.id;

                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    onDoubleClick={() => {
                      soundFX.playPop();
                      setQuickLookProject(project);
                    }}
                    className={`h-auto min-h-[280px] p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-sm ${
                      isSelected
                        ? 'bg-blue-50/90 dark:bg-[#1e2333] border-blue-500 ring-2 ring-blue-500/30 shadow-lg'
                        : 'bg-slate-50/90 dark:bg-[#151722]/90 border-black/10 dark:border-white/10 hover:border-blue-500/40 hover:bg-white dark:hover:bg-[#1b1e2c]'
                    }`}
                  >
                    <div>
                      {/* Top Header: Icon + Category Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <MacFolderIcon size={40} className="group-hover:scale-105 transition-transform" />
                        <span className="text-[10px] font-medium tracking-wide px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/25 truncate max-w-[130px]">
                          {project.tag}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight line-clamp-1 mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
                        {project.summary}
                      </p>
                    </div>

                    <div>
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-3.5 h-[24px] overflow-hidden">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.05] border border-black/5 dark:border-white/5 text-slate-700 dark:text-slate-300 whitespace-nowrap"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links (Symmetrically Aligned) */}
                      <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-black/10 dark:border-white/10 text-xs">
                        {project.liveDemo ? (
                          <>
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="h-8 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                            >
                              <ExternalLink size={12} />
                              <span>Live Demo</span>
                            </a>
                            <a
                              href={project.github || portfolioData.personal.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="h-8 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-slate-800 dark:text-white font-medium flex items-center justify-center gap-1.5 transition-colors border border-black/10 dark:border-white/10"
                            >
                              <Github size={12} />
                              <span>Source</span>
                            </a>
                          </>
                        ) : (
                          <a
                            href={project.github || portfolioData.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="col-span-2 h-8 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-slate-800 dark:text-white font-medium flex items-center justify-center gap-1.5 transition-colors border border-black/10 dark:border-white/10"
                          >
                            <Github size={12} />
                            <span>Inspect Source Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Apple Finder Table List View */
            <div className="w-full text-xs">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-black/10 dark:border-white/10 text-slate-500 dark:text-slate-400 font-medium text-[11px]">
                    <th className="pb-2.5 pl-2 font-medium">Project Name</th>
                    <th className="pb-2.5 font-medium">Category</th>
                    <th className="pb-2.5 font-medium">Technologies</th>
                    <th className="pb-2.5 pr-2 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/5">
                  {filteredProjects.map((project) => {
                    const isSelected = selectedProject?.id === project.id;
                    return (
                      <tr
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        onDoubleClick={() => setQuickLookProject(project)}
                        className={`cursor-pointer transition-colors ${
                          isSelected
                            ? 'bg-blue-600/15 text-blue-700 dark:text-blue-300 font-medium'
                            : 'hover:bg-black/5 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <td className="py-2.5 pl-2 flex items-center gap-2">
                          <MacFolderIcon size={20} className="shrink-0" />
                          <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px]">
                            {project.title}
                          </span>
                        </td>
                        <td className="py-2.5 text-slate-500 dark:text-slate-400">{project.category}</td>
                        <td className="py-2.5 text-slate-500 dark:text-slate-400 truncate max-w-[220px]">
                          {project.tech.join(' · ')}
                        </td>
                        <td className="py-2.5 pr-2 text-right">
                          <div className="inline-flex items-center gap-3">
                            {project.liveDemo && (
                              <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 font-medium hover:underline flex items-center gap-1"
                              >
                                Live <ExternalLink size={10} />
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium flex items-center gap-1"
                              >
                                Code <Github size={10} />
                              </a>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* ── Spacebar Quick Look Modal ── */}
      {quickLookProject && (
        <div 
          onClick={() => setQuickLookProject(null)}
          className="absolute inset-0 z-[50] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl bg-white/95 dark:bg-[#161822]/98 border border-black/10 dark:border-white/15 shadow-2xl p-6 text-slate-900 dark:text-white flex flex-col max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <MacFolderIcon size={34} />
                <div>
                  <h3 className="font-semibold text-base text-slate-900 dark:text-white leading-tight">
                    {quickLookProject.title}
                  </h3>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {quickLookProject.category} · {quickLookProject.tag}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setQuickLookProject(null)}
                className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer text-slate-700 dark:text-white"
              >
                <X size={14} />
              </button>
            </div>

            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              {quickLookProject.summary}
            </p>

            {/* Metrics */}
            {quickLookProject.metrics && (
              <div className="mb-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Key Highlights</div>
                <div className="grid grid-cols-3 gap-2">
                  {quickLookProject.metrics.map((m) => (
                    <div key={m} className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-center border border-black/5 dark:border-white/5">
                      <div className="text-xs font-bold text-blue-600 dark:text-cyan-400">{m}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full Tech Stack */}
            <div className="mb-6">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Architecture & Technologies</div>
              <div className="flex flex-wrap gap-2">
                {quickLookProject.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="flex items-center gap-3 pt-3 border-t border-black/10 dark:border-white/10">
              {quickLookProject.liveDemo && (
                <a
                  href={quickLookProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <ExternalLink size={14} />
                  <span>Launch Live Demo</span>
                </a>
              )}
              {quickLookProject.github && (
                <a
                  href={quickLookProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-slate-800 dark:text-white font-medium text-xs flex items-center justify-center gap-2 border border-black/10 dark:border-white/10"
                >
                  <Github size={14} />
                  <span>Inspect Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
