import React from 'react';
import { Cpu } from 'lucide-react';
import TechIcon from './TechIcon';

const ScrollingSkills = () => {
  const skills = [
    "Python",
    "Machine Learning",
    "Generative AI",
    "Prompt Engineering",
    "NLP",
    "TensorFlow",
    "PyTorch",
    "Data Analysis",
    "MongoDB",
    "Streamlit",
    "Postman",
    "Deep Learning",
    "SQL",
    "VS Code",
    "Git",
    "GitHub"
  ];

  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="py-6 bg-white dark:bg-[#060913] overflow-hidden border-y border-gray-200/80 dark:border-white/10 transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <h3 className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-mono flex items-center justify-center gap-2.5">
          <span className="w-8 h-[1px] bg-gray-200 dark:bg-white/10" />
          <span>Core Technologies & AI Infrastructure</span>
          <span className="w-8 h-[1px] bg-gray-200 dark:bg-white/10" />
        </h3>
      </div>

      <div className="relative w-full overflow-hidden group flex items-center">
        {/* Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white dark:from-[#060913] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white dark:from-[#060913] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
          {duplicatedSkills.map((skill, idx) => (
            <div 
              key={idx}
              className="px-4 py-2 mx-2 flex items-center gap-2.5 bg-gray-50 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 rounded-full shadow-xs hover:border-blue-400 dark:hover:border-cyan-400/70 transition-all duration-200 whitespace-nowrap cursor-default"
            >
              <TechIcon name={skill} size={15} />
              <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 font-sans tracking-tight">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingSkills;


