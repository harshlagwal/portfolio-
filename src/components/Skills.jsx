import React from 'react';
import { Brain, Layers, Code2, Cpu, Sparkles } from 'lucide-react';

export const Skills = () => {
  const skillStreams = [
    {
      id: "ai-ml",
      index: "01",
      title: "Generative AI & Machine Learning",
      icon: Brain,
      duration: "30s",
      reverse: false,
      skills: [
        "Gemini 1.5 Pro",
        "PyTorch",
        "LangChain",
        "Generative AI",
        "TensorFlow",
        "Deep Learning",
        "NLP Intent Engines",
        "Hugging Face",
        "Prompt Engineering",
        "OpenCV DNN",
        "Autonomous Multi-Agents",
        "Computer Vision"
      ]
    },
    {
      id: "frontend",
      index: "02",
      title: "Interactive Web & Frontend Engines",
      icon: Layers,
      duration: "34s",
      reverse: true,
      skills: [
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Spline 3D",
        "Framer Motion",
        "Vite",
        "JavaScript (ES6+)",
        "Web Audio API",
        "HTML5 & Semantic CSS",
        "Responsive Architecture",
        "Component Design Systems"
      ]
    },
    {
      id: "systems",
      index: "03",
      title: "Systems, Runtimes & Data Science",
      icon: Code2,
      duration: "28s",
      reverse: false,
      skills: [
        "WebAssembly (WASM)",
        "Pyodide",
        "FastAPI",
        "Python 3",
        "SQL",
        "C++",
        "Node.js",
        "Express",
        "MongoDB",
        "Linux / Bash",
        "Decision Analytics",
        "Plotly Data Viz"
      ]
    },
    {
      id: "cloud-dev",
      index: "04",
      title: "Cloud, Platforms & Developer APIs",
      icon: Cpu,
      duration: "32s",
      reverse: true,
      skills: [
        "VS Code Extension API",
        "Wandbox Compiler API",
        "Vercel Edge",
        "Cloudflare Pages",
        "Git & GitHub",
        "Docker",
        "Postman",
        "Microsoft Azure ML",
        "REST APIs",
        "CI/CD Pipelines"
      ]
    }
  ];

  const totalSkillsCount = skillStreams.reduce((acc, curr) => acc + curr.skills.length, 0);

  return (
    <section 
      id="skills" 
      className="py-20 md:py-24 bg-[#f0f2f5] dark:bg-[#090a0d] text-[#0d0f12] dark:text-[#ffffff] border-t border-[#cbd0d9] dark:border-[#262933] transition-colors duration-250"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-xs font-mono text-[#494f5c] dark:text-[#9fa6b6] mb-3 font-semibold">
              <Sparkles size={12} className="text-[#0d0f12] dark:text-white" />
              <span>TECHNICAL ARSENAL &amp; ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0d0f12] dark:text-white font-display">
              Continuous engineering capabilities.
            </h2>
            <p className="text-sm sm:text-base text-[#494f5c] dark:text-[#9fa6b6] leading-relaxed mt-2.5">
              Verified technologies, machine learning frameworks, WebAssembly runtimes, and cloud infrastructure streaming in continuous production flow.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-2">
            <div className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-[#494f5c] dark:text-[#9fa6b6] whitespace-nowrap">
              Active Streams: <strong className="text-[#0d0f12] dark:text-white font-bold">{skillStreams.length}</strong> Tracks · <strong className="text-[#0d0f12] dark:text-white font-bold">{totalSkillsCount}+</strong> Skills
            </div>
          </div>
        </div>

        {/* ONE Unified High-Density Skill Stream Console Card */}
        <div className="bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xs hover:border-[#9fa6b6] dark:hover:border-[#3b3f4d] transition-all duration-200">
          
          {/* Card Top Console Bar */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-3 border-b border-[#cbd0d9]/70 dark:border-[#262933]/70 bg-[#d2d6dd]/40 dark:bg-[#13151b]/40">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
              <span className="ml-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#494f5c] dark:text-[#9fa6b6]">
                Production Engineering Stack
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono font-medium text-[#494f5c] dark:text-[#9fa6b6]">
                4 Real-time Streams · {totalSkillsCount}+ Technologies
              </span>
            </div>
          </div>

          {/* 4 Continuous Moving Stream Rows inside ONE card */}
          <div className="divide-y divide-[#cbd0d9]/60 dark:divide-[#262933]/60">
            {skillStreams.map((stream) => {
              const Icon = stream.icon;
              // Double list for 100% seamless infinite scroll loop
              const infiniteList = [...stream.skills, ...stream.skills];

              return (
                <div
                  key={stream.id}
                  className="group flex flex-col md:flex-row md:items-center py-3.5 sm:py-4 px-4 sm:px-6 transition-colors duration-150 hover:bg-[#cfd3da]/35 dark:hover:bg-[#1f222b]/35"
                >
                  {/* Row Category Label on Left */}
                  <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 md:w-64 lg:w-72 mb-2 md:mb-0 md:pr-4 md:border-r md:border-[#cbd0d9]/60 md:dark:border-[#262933]/60">
                    <span className="font-mono text-xs font-bold text-[#494f5c] dark:text-[#9fa6b6]">
                      {stream.index}
                    </span>
                    <Icon size={16} strokeWidth={2} className="text-[#0d0f12] dark:text-white shrink-0" />
                    <span className="text-sm font-bold text-[#0d0f12] dark:text-white font-display tracking-tight whitespace-nowrap">
                      {stream.title}
                    </span>
                  </div>

                  {/* Infinite Continuous Moving Skills Track without logos in UI colors */}
                  <div className="flex-1 overflow-hidden relative marquee-mask md:pl-6 py-1">
                    <div 
                      className="animate-marquee-smooth flex items-center gap-8 sm:gap-10 group-hover:[animation-play-state:paused]"
                      style={{ animationDuration: stream.duration }}
                    >
                      {infiniteList.map((skillName, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-8 sm:gap-10 shrink-0 group/skill cursor-default select-none"
                        >
                          <span className="text-base sm:text-lg md:text-xl font-bold font-display tracking-tight text-[#0d0f12] dark:text-[#ffffff] group-hover/skill:text-[#1a73e8] dark:group-hover/skill:text-[#8ab4f8] transition-colors whitespace-nowrap">
                            {skillName}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#cbd0d9] dark:bg-[#3b3f4d] group-hover/skill:bg-[#1a73e8] dark:group-hover/skill:bg-[#8ab4f8] transition-colors shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
