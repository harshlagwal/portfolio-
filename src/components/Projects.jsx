import React, { useState } from 'react';
import { Github, FolderGit2, ExternalLink, Sparkles, Globe, Terminal, ArrowUpRight } from 'lucide-react';
import TechIcon from './TechIcon';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Generative AI', 'Machine Learning', 'Computer Vision & Tools', 'Client & Web Apps'];

  const projects = [
    {
      title: "WanderLust.ai",
      tag: "Flagship AI Agent",
      category: "Generative AI",
      metrics: ["Gemini 1.5 Pro", "Dynamic Maps", "Budget Analytics"],
      summary: "Autonomous AI travel planner that generates customized multi-day itineraries, interactive maps, and real-time trip analytics powered by Google Gemini 1.5.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Gemini AI"],
      github: "https://github.com/harshlagwal/WanderLust.ai"
    },
    {
      title: "ATC Constructions Portal",
      tag: "Client Production Web",
      category: "Client & Web Apps",
      metrics: ["Govt. Contractor", "Live on Vercel", "Lead Generation"],
      summary: "Commercial platform engineered and deployed for government-approved civil contractor Amit Thakur, with live quotation flows, project galleries, and SEO.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Vercel", "UI/UX Design"],
      liveDemo: "https://atc-constructions.vercel.app",
      github: "https://github.com/harshlagwal/ATC-Constructions-"
    },
    {
      title: "CodeChaska",
      tag: "Gamified Coding Universe",
      category: "Client & Web Apps",
      metrics: ["360 Missions", "60 FPS Games", "Flow DSA Lab"],
      summary: "Cyberpunk interactive coding platform turning programming into a game with 360 missions, real-time code evaluation, and visual 2D algorithm flow tracers.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Web Audio API"],
      liveDemo: "https://code-chaska.vercel.app",
      github: "https://github.com/harshlagwal/CodeChaska"
    },
    {
      title: "CareerCraft AI",
      tag: "Career Intelligence SaaS",
      category: "Machine Learning",
      metrics: ["Predictive ML", "Resume Optimizer", "Roadmap Engine"],
      summary: "Next-gen career intelligence platform evaluating skill gaps and predicting high-probability career trajectories using data-driven machine learning models.",
      tech: ["React", "Tailwind CSS", "Machine Learning", "Python", "FastAPI"],
      github: "https://github.com/harshlagwal/CareerCraft-AI"
    },
    {
      title: "Healthcare Assistant Chatbot",
      tag: "Healthcare NLP",
      category: "Generative AI",
      metrics: ["NLP Intent Engine", "Sub-100ms Inference", "Triage Guidance"],
      summary: "AI-driven medical triage assistant utilizing Natural Language Processing to evaluate symptoms, recommend immediate guidance, and assist patient triage safely.",
      tech: ["Python", "Streamlit", "TensorFlow", "PyTorch", "NLP"],
      github: "https://github.com/harshlagwal"
    },
    {
      title: "Object Detection System",
      tag: "Computer Vision",
      category: "Computer Vision & Tools",
      metrics: ["SSD MobileNet v3", "30+ FPS Inference", "80 COCO Classes"],
      summary: "High-speed computer vision architecture utilizing OpenCV DNN and SSD MobileNet v3 for real-time bounding-box detection on live video feeds.",
      tech: ["Python", "TensorFlow", "Deep Learning", "OpenCV"],
      github: "https://github.com/harshlagwal/Object-Detection"
    },
    {
      title: "Shree Sheetla Mata Mandir Portal",
      tag: "Community Platform",
      category: "Client & Web Apps",
      metrics: ["Temple Portal", "Festival Schedules", "Devotee Notices"],
      summary: "Digital community platform connecting thousands of devotees with daily live darshan schedules, festival notifications, and cultural heritage archives.",
      tech: ["React", "JavaScript", "Tailwind CSS", "UI/UX Design", "Vercel"],
      github: "https://github.com/harshlagwal"
    },
    {
      title: "AlgoFlow VS Code Extension",
      tag: "Developer Tool",
      category: "Computer Vision & Tools",
      metrics: ["Step-by-Step Flow", "Big-O Analysis", "7 Languages"],
      summary: "Developer extension converting complex code into animated flowcharts in real time, featuring step-by-step variable execution and automated Big-O complexity analysis.",
      tech: ["VS Code", "Python", "Git", "GitHub"],
      github: "https://github.com/harshlagwal/AlgoFlow-"
    }
  ];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-24 bg-white dark:bg-[#08090d] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      
      {/* Ambient Radial Lighting - Hardware accelerated & Clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold font-mono tracking-wide mb-3">
              <FolderGit2 size={13} strokeWidth={1.8} />
              <span>FEATURED WORK & CLIENT DELIVERABLES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-slate-900 dark:text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Projects</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed font-sans">
            Scroll down to inspect each architecture stacked sequentially. Scroll up to return to previous systems.
          </p>
        </div>

        {/* Filter Pills with Unified Electric Blue Styling */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedFilter === cat;
            const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-150 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 border border-blue-500'
                    : 'bg-slate-100 hover:bg-slate-200/80 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  isSelected 
                    ? 'bg-white/20 text-white font-bold' 
                    : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Sticky Full-Cover Stacking Cards (Each card cleanly overlays the previous) ── */}
        <div className="relative pt-4 pb-20 max-w-5xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              className="sticky top-24 sm:top-28 will-change-transform mb-16 sm:mb-24"
              style={{
                zIndex: idx + 1,
              }}
            >
              <div className="relative rounded-2xl bg-white dark:bg-[#0c1018] border border-slate-200/95 dark:border-white/10 p-6 sm:p-8 shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] hover:border-blue-500/40 transition-colors min-h-[460px] flex flex-col justify-between">
                
                {/* Top Corner Meta Row with Tag INSIDE the card */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 mb-4 border-b border-slate-100 dark:border-white/5 pb-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <span>0{idx + 1}</span>
                      <span className="text-slate-300 dark:text-white/20">//</span>
                      <span className="text-slate-500 dark:text-slate-400 font-medium">{project.category}</span>
                    </span>

                    {/* Sharp Tag Badge INSIDE the card */}
                    <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10.5px] font-mono font-bold uppercase tracking-wider shadow-xs border border-blue-400/50">
                      <Sparkles size={11} />
                      <span>{project.tag}</span>
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 dark:text-white/30">
                    PROJECT {idx + 1} / {filteredProjects.length}
                  </span>
                </div>

                {/* Responsive 2-Column Split: Narrative on Left, System Specs on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  
                  {/* Left Column: Title, Summary, Metrics, Tech */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-sans text-slate-900 dark:text-white tracking-tight mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-5">
                        {project.summary}
                      </p>

                      {/* Metrics Highlights Row */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.metrics.map((metric, mIdx) => (
                          <span 
                            key={mIdx}
                            className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-500/20"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5 mb-6">
                        {project.tech.map((t, tIdx) => (
                          <span 
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/5"
                          >
                            <TechIcon name={t} size={12} />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={14} />
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-slate-800 dark:text-white font-semibold text-xs sm:text-sm border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                          title="View Source on GitHub"
                        >
                          <Github size={15} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Blueprint Card */}
                  <div className="lg:col-span-5 bg-slate-50 dark:bg-[#07090e] border border-slate-200 dark:border-white/10 rounded-xl p-5 flex flex-col justify-between font-mono text-xs">
                    <div>
                      {/* Window Dots & Status */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          DEPLOYED
                        </span>
                      </div>

                      {/* Specs List */}
                      <div className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-slate-400 dark:text-white/40">MODULE:</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{project.title}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 dark:text-white/40">CATEGORY:</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 dark:text-white/40">PRIMARY:</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{project.tech[0]} + {project.tech[1]}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 dark:text-white/40">PERF:</span>
                          <span className="font-semibold text-emerald-600 dark:text-emerald-400">Sub-100ms Inference</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/10 text-[10px] text-slate-400 dark:text-white/40 flex items-center justify-between">
                      <span>HARSH LAGWAL // AI ENG</span>
                      <Terminal size={12} className="text-blue-500" />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
