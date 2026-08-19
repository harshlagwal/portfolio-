import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Terminal, 
  FolderGit2, 
  Cpu, 
  FileText, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  X, 
  ArrowRight,
  ExternalLink,
  Award
} from 'lucide-react';

const CommandPalette = ({ 
  isOpen, 
  onClose, 
  onOpenResume, 
  onOpenTerminal 
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Global keydown listener for Escape and toggle inside CommandPalette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);


  const actions = [
    {
      id: 'resume',
      title: 'View & Download Resume',
      subtitle: 'Harsh Lagwal Resume (PDF)',
      icon: FileText,
      badge: 'ACTION',
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'terminal',
      title: 'Open Interactive Terminal (Hacker Mode)',
      subtitle: 'Execute CLI commands: help, skills, projects, sudo hire',
      icon: Terminal,
      badge: 'CLI',
      action: () => {
        onClose();
        onOpenTerminal();
      }
    },
    {
      id: 'wanderlust',
      title: 'Project: WanderLust.ai',
      subtitle: 'AI Travel Planner with Gemini AI, React, TypeScript',
      icon: FolderGit2,
      badge: 'AI PROJECT',
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'healthcare',
      title: 'Project: Healthcare Assistant Chatbot',
      subtitle: 'NLP medical guidance chatbot',
      icon: FolderGit2,
      badge: 'NLP',
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'object_detection',
      title: 'Project: Object Detection System',
      subtitle: 'SSD MobileNet v3, OpenCV DNN, COCO',
      icon: FolderGit2,
      badge: 'COMPUTER VISION',
      action: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'skills',
      title: 'Explore Technical Expertise',
      subtitle: 'Generative AI, Machine Learning, Python, PyTorch, Agentic AI',
      icon: Cpu,
      badge: 'STACK',
      action: () => {
        onClose();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'experience',
      title: 'View Experience & Internships',
      subtitle: 'Upto Skills, eDC IIT Delhi, SpectoV, Edunet Foundation',
      icon: Briefcase,
      badge: 'TIMELINE',
      action: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'certifications',
      title: 'View Certifications & Recognitions',
      subtitle: 'Google, Anthropic, OpenAI, ISRO, NVIDIA, TATA',
      icon: Award,
      badge: 'VERIFIED',
      action: () => {
        onClose();
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'education',
      title: 'Academic Background',
      subtitle: 'IIT Patna MBA (Decision Science), Rayat Bahra B.Tech CSE',
      icon: GraduationCap,
      badge: 'EDUCATION',
      action: () => {
        onClose();
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'contact',
      title: 'Send a Message / Email Harsh',
      subtitle: 'Harshlagwal2005@gmail.com',
      icon: Mail,
      badge: 'CONNECT',
      action: () => {
        onClose();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  ];

  const filtered = actions.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    item.badge.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 md:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#0c1222] border border-gray-200 dark:border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 font-sans"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-gray-200 dark:border-gray-800/80 bg-gray-50/70 dark:bg-[#070b16]/70">
              <Search className="text-gray-400 dark:text-cyan-400 mr-3 shrink-0" size={20} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command, project name, or skill... (e.g. 'WanderLust', 'Resume')"
                className="w-full bg-transparent text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm md:text-base outline-none font-medium"
              />
              <button
                onClick={onClose}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg transition-colors ml-2"
              >
                <X size={18} />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
              {filtered.length > 0 ? (
                filtered.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-cyan-950/40 text-left transition-all group border border-transparent hover:border-blue-200 dark:hover:border-cyan-500/30"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800/80 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors truncate">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                          {item.badge}
                        </span>
                        <ArrowRight size={14} className="text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400 text-sm font-mono">
                  No matching commands found for "{query}"
                </div>
              )}
            </div>

            {/* Footer Telemetry */}
            <div className="px-4 py-2.5 bg-gray-100/60 dark:bg-[#070b16]/90 border-t border-gray-200 dark:border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">ESC</kbd> to exit
              </span>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">Ctrl + K</kbd> to toggle
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
