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
      metrics: ["⚡ Gemini 1.5 Pro", "🗺️ Dynamic Maps", "👥 Admin Dashboard"],
      description: [
        "🌍 AI Travel Planner – Discover, plan, and organize trips with intelligent itineraries",
        "🗺️ Smart Itinerary Generation – Powered by Google Gemini AI, tailored to preferences, budget, and duration",
        "💾 Trip Management – Save, revisit, and share travel plans with ease",
        "🎨 Modern UI/UX – Interactive maps, responsive design, immersive visuals",
        "👥 Admin Dashboard – Manage users, itineraries, and search analytics"
      ],
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Firebase", "Gemini AI"],
      github: "https://github.com/harshlagwal/WanderLust.ai"
    },
    {
      title: "ATC Constructions Portal",
      tag: "Client Production Web",
      category: "Client & Web Apps",
      metrics: ["🏢 Govt. Contractor", "⚡ Live on Vercel", "📈 Lead Generation"],
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
      metrics: ["🕉️ Temple Portal", "📅 Festival Schedule", "📱 Mobile First"],
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
      metrics: ["🎯 NLP Intent Engine", "⚡ Sub-100ms Inference", "🩺 Triage Guidance"],
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
      metrics: ["👁️ SSD MobileNet v3", "⚡ 30+ FPS Inference", "📦 80 COCO Classes"],
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
      metrics: ["🚀 Next-Gen AI", "📄 AI Resume Optimizer", "🗺️ Career Roadmaps"],
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
      metrics: ["🎮 360 Missions", "🕹️ 60 FPS Mini-Games", "⚡ Flow & DSA Lab"],
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
      metrics: ["🔄 Step-by-Step Flow", "⚡ Big-O Complexity", "💻 7 Languages"],
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
    <section id="projects" className="py-16 md:py-20 bg-white dark:bg-[#060913] transition-colors duration-500 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200/60 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold font-mono tracking-wide mb-3">
              <FolderGit2 size={13} />
              <span>FEATURED WORK & CLIENT DELIVERABLES</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">Projects</span>
            </motion.h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-md text-sm sm:text-base leading-relaxed">
            Real-world AI systems, machine learning architectures, and live client web deliverables.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isSelected = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 dark:bg-white text-white dark:text-black font-semibold shadow-xs'
                    : 'bg-gray-100/80 hover:bg-gray-200/80 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Clean, Normal-Sized Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col"
              >

              <div className="h-full bg-white dark:bg-[#0c1222] border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    {/* Top Tag & Metric Badges */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-cyan-500/20">
                        {project.tag}
                      </span>
                      <span className="text-xs font-mono text-gray-400">0{idx + 1}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white font-display tracking-tight hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    {project.subtitle && (
                      <p className="text-blue-600 dark:text-cyan-400 text-xs font-semibold mb-2.5 italic">
                        {project.subtitle}
                      </p>
                    )}

                    {/* Impact / Performance Metric Pills */}
                    {project.metrics && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.metrics.map((metric, mIdx) => (
                          <span 
                            key={mIdx}
                            className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-500/20"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-5 leading-relaxed space-y-1.5 list-disc pl-4">
                      {project.description.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 bg-gray-50 dark:bg-white/[0.04] rounded-md border border-gray-200/80 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium">
                          <TechIcon name={t} size={13} />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center gap-3">
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-white font-semibold text-xs sm:text-sm hover:scale-[1.01] active:scale-95 transition-all shadow-xs"
                      >
                        <Globe size={15} />
                        <span>Live Demo ↗</span>
                      </a>
                    )}
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.liveDemo ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 dark:bg-white/[0.08] dark:hover:bg-white/15 text-white font-semibold text-xs sm:text-sm hover:scale-[1.01] active:scale-95 transition-all shadow-xs border border-gray-700/30 dark:border-white/10`}
                    >
                      <Github size={15} />
                      <span>{project.liveDemo ? 'Source' : 'View Source Code'}</span>
                    </a>
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




