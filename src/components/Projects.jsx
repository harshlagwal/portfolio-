import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, FolderGit2, ExternalLink, Sparkles, Filter, Globe } from 'lucide-react';
import TechIcon from './TechIcon';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Generative AI', 'Machine Learning', 'Computer Vision & Tools', 'Client & Web Apps'];

  const projects = [
    {
      title: "WanderLust.ai",
      tag: "Flagship AI Agent",
      category: "Generative AI",
      metrics: ["Gemini 1.5 Pro", "Dynamic Maps", "Admin Dashboard"],
      description: [
        "AI Travel Planner – Discover, plan, and organize trips with intelligent automated itineraries",
        "Smart Itinerary Generation – Powered by Google Gemini AI, tailored to preferences, budget, and duration",
        "Trip Management – Save, revisit, and share travel plans with ease",
        "Modern UI/UX – Interactive maps, responsive design, and immersive visuals",
        "Admin Dashboard – Manage users, itineraries, and search analytics"
      ],
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Firebase", "Gemini AI"],
      github: "https://github.com/harshlagwal/WanderLust.ai"
    },
    {
      title: "ATC Constructions Portal",
      tag: "Client Production Web",
      category: "Client & Web Apps",
      metrics: ["Govt. Contractor", "Live on Vercel", "Lead Generation"],
      subtitle: "Engineered for Amit Thakur (Govt. Approved Contractor)",
      description: [
        "Commercial web platform designed and deployed for government-approved civil contractor Amit Thakur",
        "Showcases major civil infrastructure works, commercial projects, and equipment capabilities",
        "Integrated quotation inquiry flow and responsive project portfolio gallery",
        "Optimized for fast mobile performance, local SEO, and client lead generation"
      ],
      tech: ["React", "JavaScript", "Tailwind CSS", "Vercel", "UI/UX Design"],
      liveDemo: "https://atc-constructions.vercel.app",
      github: "https://github.com/harshlagwal/ATC-Constructions-"
    },

    {
      title: "Shree Sheetla Mata Mandir Portal",
      tag: "Community Platform",
      category: "Client & Web Apps",
      metrics: ["Temple Portal", "Festival Schedule", "Mobile First"],
      subtitle: "Community & Cultural Heritage Platform",
      description: [
        "Dedicated digital portal for Shree Sheetla Mata Mandir to connect devotees and manage temple information",
        "Features daily darshan timings, upcoming religious festivals, and historical heritage archives",
        "Community notices, donation transparency guidelines, and interactive location navigation",
        "Clean, culturally resonant aesthetic with responsive layout across all device screens"
      ],
      tech: ["React", "JavaScript", "Tailwind CSS", "UI/UX Design", "Vercel"],
      github: "https://github.com/harshlagwal"
    },
    {
      title: "Healthcare Assistant Chatbot",
      tag: "Healthcare NLP",
      category: "Generative AI",
      metrics: ["NLP Intent Engine", "Sub-100ms Inference", "Triage Guidance"],
      subtitle: "Developed during AI Transformative Learning Internship (Edunet Foundation)",
      description: [
        "AI-powered healthcare chatbot for symptom analysis and medical guidance",
        "Uses Natural Language Processing to understand user queries accurately",
        "Provides basic health advice and symptom suggestions safely",
        "Interactive chatbot interface for user-friendly healthcare support"
      ],
      tech: ["Python", "Streamlit", "TensorFlow", "PyTorch", "NLP"],
      github: "https://github.com/harshlagwal"
    },
    {
      title: "Object Detection System",
      tag: "Computer Vision",
      category: "Computer Vision & Tools",
      metrics: ["SSD MobileNet v3", "30+ FPS Inference", "80 COCO Classes"],
      description: [
        "Deep Learning & Computer Vision project for high-speed object detection",
        "Uses OpenCV’s DNN module with SSD MobileNet v3 trained on COCO dataset",
        "Detects objects in images, videos, and live webcam streams in real time",
        "Draws bounding boxes with class labels and confidence levels",
        "Demonstrates robust real-time detection capabilities on standard hardware"
      ],
      tech: ["Python", "TensorFlow", "Deep Learning", "Data Analysis"],
      github: "https://github.com/harshlagwal/Object-Detection"
    },
    {
      title: "CareerCraft AI",
      tag: "Career Intelligence SaaS",
      category: "Machine Learning",
      metrics: ["Next-Gen AI", "AI Resume Optimizer", "Career Roadmaps"],
      subtitle: "Next-Generation, Data-Driven Career Intelligence Hub",
      description: [
        "Advanced full-stack SaaS platform designed to eliminate guesswork from career planning",
        "Leverages deep data analysis & machine learning to evaluate skills, values, and academic background",
        "Predicts high-probability career paths with industrial precision and personalized analytics",
        "Multi-module suite offering real-time Market Intelligence, automated AI Resume Optimization, and step-by-step Career Roadmaps"
      ],
      tech: ["React", "Tailwind CSS", "AI Engine", "Machine Learning", "Python"],
      github: "https://github.com/harshlagwal/CareerCraft-AI"
    },
    {
      title: "CodeChaska",
      tag: "Gamified Coding Universe",
      category: "Client & Web Apps",
      metrics: ["360 Missions", "60 FPS Mini-Games", "Flow & DSA Lab"],
      subtitle: "Stop reading boring docs. Start slaying compilers.",
      description: [
        "Turns programming education into an immersive cyberpunk adventure with 360 progressive missions (Python, C++, JS, DSA)",
        "Interactive Terminal & Fill-In-The-Blank evaluation engine with real-time audio-visual feedback and auto-focus pills",
        "60 FPS Infinite Bug Runner arcade mini-game dodging SyntaxErrors and StackOverflows with responsive controls",
        "Flow Lab program execution tracer and 2D animated visualizers for Linked Lists, BST, BFS/DFS, and sorting algorithms",
        "Full RPG gamification system with XP progression, streaks, achievement badges, and zero-dependency 8-bit Web Audio synth"
      ],
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Web Audio API"],
      liveDemo: "https://code-chaska.vercel.app",
      github: "https://github.com/harshlagwal/CodeChaska"
    },
    {
      title: "AlgoFlow VS Code Extension",
      tag: "Developer Tool",
      category: "Computer Vision & Tools",
      metrics: ["Step-by-Step Flow", "Big-O Complexity", "7 Languages"],
      description: [
        "Educational VS Code extension to visualize algorithms using flowcharts",
        "Converts code into interactive animated flowcharts instantly",
        "Step-by-step execution with real-time variable tracking",
        "Loop visualization to clearly show iteration flow and recursion",
        "Automatic Big-O algorithmic complexity analysis",
        "Supports Python, Java, C, C++, JavaScript, TypeScript, and R"
      ],
      tech: ["VS Code", "Python", "Git", "GitHub"],
      github: "https://github.com/harshlagwal/AlgoFlow-"
    }
  ];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 md:py-20 bg-white dark:bg-[#131314] transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] dark:bg-[#8ab4f8]/10 border border-[#dadce0] dark:border-[#8ab4f8]/20 text-[#1a73e8] dark:text-[#8ab4f8] text-xs font-medium font-mono tracking-wide mb-3">
              <FolderGit2 size={14} strokeWidth={1.5} />
              <span>FEATURED WORK & CLIENT DELIVERABLES</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-medium font-display tracking-tight text-[#202124] dark:text-[#e3e3e3]"
            >
              Featured <span className="text-[#1a73e8] dark:text-[#8ab4f8]">Projects</span>
            </motion.h2>
          </div>
          <p className="text-[#5f6368] dark:text-[#9aa0a6] max-w-md text-sm sm:text-base leading-relaxed">
            Real-world AI systems, machine learning architectures, and live client web deliverables.
          </p>
        </div>

        {/* Google Antigravity Filter Category Pills with Live Counts */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isSelected = selectedFilter === cat;
            const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#202124] text-white dark:bg-white dark:text-[#131314] font-semibold shadow-xs'
                    : 'bg-[#f1f3f4] hover:bg-[#e8eaed] dark:bg-[#1e1f20] dark:hover:bg-[#2d3135] text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white border border-[#dadce0] dark:border-[#2e3134]'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10.5px] font-mono ${
                  isSelected 
                    ? 'bg-white/20 dark:bg-black/15 text-white dark:text-black font-semibold' 
                    : 'bg-[#dadce0]/60 dark:bg-[#2e3134] text-[#5f6368] dark:text-[#9aa0a6]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Google Antigravity Editorial Split Layout (No Boxed Cards) */}
        <div className="border-t border-[#dadce0] dark:border-[#2e3134]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.28, delay: idx * 0.04 }}
                className="py-10 md:py-14 border-b border-[#dadce0] dark:border-[#2e3134] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left Column: Index, Title, Problem, & Actions (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Index & Tag */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">
                        0{idx + 1}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#dadce0] dark:bg-[#3c4043]" />
                      <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#f1f3f4] dark:bg-[#252629] text-[#5f6368] dark:text-[#9aa0a6] border border-[#dadce0] dark:border-[#3c4043]">
                        {project.tag}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#202124] dark:text-[#f1f3f4] font-display mb-1.5">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="text-xs sm:text-sm font-medium text-[#1a73e8] dark:text-[#8ab4f8] mb-3">
                        {project.subtitle}
                      </p>
                    )}

                    {/* Bullet Points */}
                    <div className="space-y-2 mb-6">
                      {project.description.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] dark:bg-[#8ab4f8] mt-2 shrink-0 opacity-80" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions: GitHub & Live Demo */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#202124] hover:bg-[#303134] text-white dark:bg-white dark:text-[#131314] dark:hover:bg-[#f1f3f4] text-xs font-medium transition-all shadow-2xs hover:scale-[1.02] active:scale-95 cursor-pointer"
                      >
                        <Github size={14} strokeWidth={1.8} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f1f3f4] hover:bg-[#e8eaed] dark:bg-[#1e1f20] dark:hover:bg-[#252629] text-[#202124] dark:text-[#f1f3f4] border border-[#dadce0] dark:border-[#3c4043] text-xs font-medium transition-all shadow-2xs hover:scale-[1.02] active:scale-95 cursor-pointer"
                      >
                        <Globe size={14} strokeWidth={1.8} className="text-[#1a73e8] dark:text-[#8ab4f8]" />
                        <span>Live Production Web</span>
                        <ExternalLink size={12} strokeWidth={1.8} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Architectural Highlights & Tech Stack (5 cols) */}
                <div className="lg:col-span-5 bg-[#f8f9fa] dark:bg-[#1a1b1e] border border-[#dadce0] dark:border-[#2e3134] rounded-2xl p-6">
                  {/* System Metrics */}
                  {project.metrics && (
                    <div className="mb-5">
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6] mb-2.5">
                        Performance & Architecture
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.metrics.map((metric, mIdx) => (
                          <span 
                            key={mIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] rounded-lg text-xs font-mono font-medium text-[#202124] dark:text-[#e3e3e3] shadow-2xs hover:-translate-y-0.5 transition-all select-none cursor-default"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Core Technologies */}
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6] mb-2.5">
                      Technologies & Libraries
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <div 
                          key={tIdx}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] rounded-lg text-xs text-[#202124] dark:text-[#e3e3e3] shadow-2xs select-none hover:-translate-y-0.5 transition-all cursor-default"
                        >
                          <TechIcon name={t} size={15} />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

    </div>
  </section>
);
};

export default Projects;




