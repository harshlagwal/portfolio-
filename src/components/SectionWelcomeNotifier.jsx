import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2, Cpu, Briefcase, GraduationCap, Award, Mail, X } from 'lucide-react';

const sectionMetadata = {
  home: {
    title: 'Welcome to Harsh Lagwal’s Portfolio',
    subtitle: 'AI & Machine Learning Engineer',
    icon: Sparkles,
    color: '#1a73e8',
  },
  projects: {
    title: 'Welcome to My Work',
    subtitle: 'Exploring 5 production-grade AI & ML engineering systems',
    icon: Code2,
    color: '#1a73e8',
  },
  skills: {
    title: 'Welcome to My Skills',
    subtitle: 'Deep Learning, NLP, Generative AI & full-stack infrastructure',
    icon: Cpu,
    color: '#34a853',
  },
  experience: {
    title: 'Welcome to My Experience',
    subtitle: 'Machine learning internships, AI development & industry practice',
    icon: Briefcase,
    color: '#fbbc04',
  },
  education: {
    title: 'Welcome to My Education',
    subtitle: 'B.Tech in Computer Science & Engineering (2022 - 2026)',
    icon: GraduationCap,
    color: '#ea4335',
  },
  certifications: {
    title: 'Welcome to My Certifications',
    subtitle: 'Stanford, DeepLearning.AI, IBM & Google verified credentials',
    icon: Award,
    color: '#a142f4',
  },
  contact: {
    title: 'Welcome to Contact',
    subtitle: 'Open for full-time AI roles, research collaborations & projects',
    icon: Mail,
    color: '#1a73e8',
  },
};

const SectionWelcomeNotifier = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const lastSectionRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'skills', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      let active = null;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            active = sectionId;
            break;
          }
        }
      }

      if (active && active !== lastSectionRef.current) {
        lastSectionRef.current = active;
        setCurrentSection(active);
        setIsVisible(true);

        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 3200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!currentSection || !sectionMetadata[currentSection]) return null;

  const data = sectionMetadata[currentSection];
  const IconComponent = data.icon;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none select-none max-w-sm w-auto">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto bg-white/95 dark:bg-[#1e1f20]/95 backdrop-blur-xl border border-[#dadce0] dark:border-[#2e3134] rounded-2xl p-3.5 pr-4 shadow-xl shadow-black/10 dark:shadow-black/40 flex items-center gap-3.5"
          >
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${data.color}15`, color: data.color }}
            >
              <IconComponent size={18} strokeWidth={1.8} />
            </div>

            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
                  Section
                </span>
                <span className="w-1 h-1 rounded-full bg-[#1a73e8]" />
              </div>
              <h4 className="text-xs sm:text-[13px] font-semibold text-[#202124] dark:text-white truncate font-display">
                {data.title}
              </h4>
              <p className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] truncate mt-0.5">
                {data.subtitle}
              </p>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="w-6 h-6 flex items-center justify-center rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:bg-[#f1f3f4] dark:hover:bg-[#252629] transition-colors cursor-pointer shrink-0"
              aria-label="Dismiss notification"
            >
              <X size={12} strokeWidth={1.8} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWelcomeNotifier;
