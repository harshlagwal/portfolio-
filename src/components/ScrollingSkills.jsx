import React from 'react';
import { Cpu } from 'lucide-react';
import TechIcon from './TechIcon';

const ScrollingSkills = () => {
  const skills = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Google Gemini",
    "OpenAI",
    "LangChain",
    "Hugging Face",
    "FastAPI",
    "Docker",
    "Machine Learning",
    "Generative AI",
    "Prompt Engineering",
    "NLP",
    "Deep Learning",
    "OpenCV",
    "MongoDB",
    "SQL",
    "Streamlit",
    "Postman",
    "Git",
    "GitHub",
    "VS Code"
  ];

  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="py-6 bg-white dark:bg-[#08090d] overflow-hidden border-y border-slate-200 dark:border-white/10 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <h3 className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 font-mono flex items-center justify-center gap-2.5">
          <span className="w-8 h-[1px] bg-slate-200 dark:bg-white/10" />
          <span>Core Technologies & AI Infrastructure</span>
          <span className="w-8 h-[1px] bg-slate-200 dark:bg-white/10" />
        </h3>
      </div>

      <div className="relative w-full overflow-hidden group flex items-center">
        {/* Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white dark:from-[#08090d] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white dark:from-[#08090d] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
          {duplicatedSkills.map((skill, idx) => (
            <div 
              key={idx}
              className="px-4 py-2 mx-2 flex items-center gap-2.5 bg-slate-50 dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/10 rounded-full shadow-2xs hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 whitespace-nowrap cursor-default"
            >
              <TechIcon name={skill} size={15} />
              <span className="text-xs font-medium text-slate-800 dark:text-slate-200 font-mono tracking-tight">
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


