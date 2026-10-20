import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import iitPatnaSeal from '../../../assets/icons/iit_patna.png';
import { portfolioData } from '../../../data/portfolioData';
import { soundFX } from '../../../utils/soundEffects';

export const IITPatnaApp = () => {
  return (
    <div className="flex flex-col h-full w-full select-none text-slate-800 dark:text-slate-100 bg-[#f8fafc] dark:bg-[#111218] overflow-y-auto font-['Google_Sans',sans-serif] p-4 sm:p-6 space-y-6">
      
      {/* ── Institution Header Card ── */}
      <div className="rounded-3xl p-5 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
        
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-lg flex items-center justify-center shrink-0">
            <img src={iitPatnaSeal} alt="IIT Patna" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-semibold tracking-wide backdrop-blur-md mb-1">
              <ShieldCheck size={12} className="text-cyan-300" />
              <span>Institute of National Importance</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              Indian Institute of Technology Patna
            </h2>
            <p className="text-xs text-blue-100 flex items-center gap-1.5 mt-0.5">
              <MapPin size={12} /> Bihta, Patna, Bihar, India
            </p>
          </div>
        </div>
      </div>

      {/* ── Active Degree: MBA in Decision Science ── */}
      <div className="rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#1a1b24] border border-black/10 dark:border-white/10 shadow-sm space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Master of Business Administration (MBA)
              </h3>
              <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                Specialization in Decision Science & Analytics
              </p>
            </div>
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
            2026 – 2028
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Rigorous master's curriculum combining statistical decision theory, computational predictive modeling, machine learning workflows, and business intelligence strategy.
        </p>

        <div className="pt-2 border-t border-black/5 dark:border-white/5 grid grid-cols-2 gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            <span>Decision Optimization</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            <span>AI Predictive Modeling</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            <span>Statistical Inference</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            <span>Quantitative Analytics</span>
          </div>
        </div>
      </div>

      {/* ── Undergraduate Degree: B.Tech in CSE ── */}
      <div className="rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#1a1b24] border border-black/10 dark:border-white/10 shadow-sm space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Bachelor of Technology (B.Tech)
              </h3>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                Computer Science and Engineering • Rayat Bahra University
              </p>
            </div>
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 shrink-0">
            2022 – 2026
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Strong core foundations in Data Structures, Algorithms, Software Architecture, Database Management Systems, and Artificial Intelligence engineering.
        </p>
      </div>

      {/* ── Key Academic Pillars ── */}
      <div className="grid grid-cols-3 gap-2.5 text-center">
        <div className="p-3 rounded-2xl bg-white dark:bg-[#1a1b24] border border-black/10 dark:border-white/10 shadow-xs">
          <div className="text-base font-extrabold text-blue-600 dark:text-blue-400">IIT</div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Premier Alumni</div>
        </div>
        <div className="p-3 rounded-2xl bg-white dark:bg-[#1a1b24] border border-black/10 dark:border-white/10 shadow-xs">
          <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">6+</div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Internships</div>
        </div>
        <div className="p-3 rounded-2xl bg-white dark:bg-[#1a1b24] border border-black/10 dark:border-white/10 shadow-xs">
          <div className="text-base font-extrabold text-violet-600 dark:text-violet-400">100%</div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Verified Merit</div>
        </div>
      </div>

    </div>
  );
};

export default IITPatnaApp;
