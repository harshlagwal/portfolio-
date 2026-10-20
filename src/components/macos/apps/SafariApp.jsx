import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCw, 
  Share, 
  Lock, 
  ExternalLink, 
  Linkedin, 
  Github, 
  Globe, 
  Sparkles,
  Layers,
  CheckCircle2,
  Users,
  Compass
} from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { soundFX } from '../../../utils/soundEffects';

export const SafariApp = () => {
  const [activeTab, setActiveTab] = useState('linkedin'); // 'linkedin' | 'github' | 'atc' | 'codechaska'
  const [url, setUrl] = useState('https://linkedin.com/in/harshlagwal');

  const tabs = [
    { id: 'linkedin', title: 'LinkedIn — Harsh Lagwal', url: 'https://linkedin.com/in/harshlagwal', icon: Linkedin },
    { id: 'github', title: 'GitHub — @harshlagwal', url: 'https://github.com/harshlagwal', icon: Github },
    { id: 'atc', title: 'ATC Constructions Live', url: 'https://atc-constructions.vercel.app', icon: Globe },
    { id: 'codechaska', title: 'CodeChaska Universe', url: 'https://code-chaska.vercel.app', icon: Compass }
  ];

  const handleTabChange = (tab) => {
    soundFX.playClick();
    setActiveTab(tab.id);
    setUrl(tab.url);
  };

  return (
    <div className="flex flex-col h-full w-full select-none text-slate-800 dark:text-slate-100 bg-[#f9fafb] dark:bg-[#121319] overflow-hidden">
      {/* ── Safari Chrome Header ── */}
      <div className="h-12 px-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between gap-3 bg-slate-100/80 dark:bg-white/[0.04] backdrop-blur-md">
        {/* Navigation buttons */}
        <div className="flex items-center gap-1 text-slate-500">
          <button className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10">
            <ArrowLeft size={15} />
          </button>
          <button className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10">
            <ArrowRight size={15} />
          </button>
          <button 
            onClick={() => soundFX.playClick()}
            className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10"
          >
            <RotateCw size={14} />
          </button>
        </div>

        {/* Center Pill URL Bar */}
        <div className="flex-1 max-w-xl mx-auto h-8 px-3 rounded-lg bg-white dark:bg-black/30 border border-black/10 dark:border-white/10 flex items-center justify-between text-xs shadow-xs">
          <div className="flex items-center gap-2 truncate">
            <Lock size={12} className="text-emerald-500 shrink-0" />
            <span className="text-slate-700 dark:text-slate-200 font-medium truncate">{url}</span>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            title="Open in real browser tab"
            className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/10 text-slate-400 hover:text-blue-500"
          >
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Share Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              navigator.clipboard.writeText(url);
              soundFX.playClick();
            }}
            title="Copy URL"
            className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-slate-500"
          >
            <Share size={15} />
          </button>
        </div>
      </div>

      {/* ── Safari Tab Bar ── */}
      <div className="flex items-center px-2 pt-1 border-b border-black/10 dark:border-white/10 bg-slate-200/50 dark:bg-black/20 gap-1 overflow-x-auto text-xs">
        {tabs.map((t) => {
          const isActive = activeTab === t.id;
          const Icon = t.icon;

          return (
            <button
              key={t.id}
              onClick={() => handleTabChange(t)}
              className={`px-3 py-1.5 rounded-t-lg flex items-center gap-2 max-w-[200px] truncate border-t border-x transition-colors ${
                isActive
                  ? 'bg-white dark:bg-[#121319] border-black/10 dark:border-white/10 text-slate-900 dark:text-white font-medium shadow-xs'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:bg-white/40 dark:hover:bg-white/5'
              }`}
            >
              <Icon size={13} className={isActive ? 'text-blue-500' : 'text-slate-400'} />
              <span className="truncate">{t.title}</span>
            </button>
          );
        })}
      </div>

      {/* ── Safari Viewport / Active Tab Content ── */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 flex items-center justify-center">
        {/* TAB 1: LINKEDIN PROFILE SHOWCASE */}
        {activeTab === 'linkedin' && (
          <div className="w-full max-w-2xl bg-white dark:bg-[#1a1c24] rounded-2xl border border-black/10 dark:border-white/10 p-6 md:p-8 shadow-xl">
            {/* Header banner */}
            <div className="h-28 rounded-xl bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-800 relative mb-12 shadow-sm">
              <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-2xl bg-white dark:bg-zinc-800 p-1 shadow-lg border-2 border-white dark:border-zinc-700 flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                  HL
                </div>
              </div>
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5">
                <Linkedin size={13} />
                <span>Verified Candidate</span>
              </div>
            </div>

            {/* Profile Information */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Harsh Lagwal
                </h2>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <ExternalLink size={13} />
                  <span>Open Official LinkedIn</span>
                </a>
              </div>
              <p className="text-sm font-semibold text-blue-600 dark:text-sky-400 mb-2">
                AI & Machine Learning Engineer | MBA in Decision Science (IIT Patna, 2026–2028)
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Specializing in production Generative AI, PyTorch, Gemini 1.5 Pro, and quantitative business modeling. Completed multiple high-impact engineering internships including Upto Skills, SpectoV, and Edunet Foundation.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 font-medium">
                  🎓 IIT Patna MBA Scholar
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-medium">
                  ⚡ Open to AI/ML Opportunities
                </span>
                <span className="px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 font-medium">
                  🚀 6+ Production AI Apps
                </span>
              </div>
            </div>

            {/* Direct Connect CTA */}
            <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Looking to connect or hire?</span>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Send InMail / Connection Request &rarr;
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: GITHUB SHOWCASE */}
        {activeTab === 'github' && (
          <div className="w-full max-w-2xl bg-white dark:bg-[#1a1c24] rounded-2xl border border-black/10 dark:border-white/10 p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <Github size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">harshlagwal</h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Public GitHub Repositories & Open Source</div>
                </div>
              </div>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <ExternalLink size={13} />
                <span>Visit GitHub Profile</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {portfolioData.projects.slice(0, 4).map((p) => (
                <a
                  key={p.id}
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/[0.03] hover:border-blue-500 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-xs text-blue-600 dark:text-blue-400 group-hover:underline truncate">
                      {p.title}
                    </span>
                    <ExternalLink size={12} className="text-slate-400" />
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 mb-2">
                    {p.summary}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span>{p.tech[0]}</span>
                    <span>•</span>
                    <span>{p.category}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ATC CONSTRUCTIONS LIVE */}
        {activeTab === 'atc' && (
          <div className="w-full max-w-2xl bg-white dark:bg-[#1a1c24] rounded-2xl border border-black/10 dark:border-white/10 p-6 md:p-8 shadow-xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 mx-auto flex items-center justify-center text-white mb-4 shadow-lg">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              ATC Constructions Commercial Portal
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
              Client platform engineered and deployed for government-approved civil contractor Amit Thakur, featuring automated quotation flows and SEO optimization.
            </p>
            <a
              href="https://atc-constructions.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-md"
            >
              <ExternalLink size={14} />
              <span>Launch atc-constructions.vercel.app</span>
            </a>
          </div>
        )}

        {/* TAB 4: CODECHASKA LIVE */}
        {activeTab === 'codechaska' && (
          <div className="w-full max-w-2xl bg-white dark:bg-[#1a1c24] rounded-2xl border border-black/10 dark:border-white/10 p-6 md:p-8 shadow-xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 mx-auto flex items-center justify-center text-white mb-4 shadow-lg">
              <Compass size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              CodeChaska — Gamified Coding Universe
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
              Interactive cyberpunk platform with 360 coding missions, live DSA flow visualization, and real-time execution engines.
            </p>
            <a
              href="https://code-chaska.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-md"
            >
              <ExternalLink size={14} />
              <span>Launch code-chaska.vercel.app</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
