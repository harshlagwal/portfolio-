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
    <section className="py-6 bg-white dark:bg-[#131314] overflow-hidden border-y border-[#dadce0] dark:border-[#2e3134] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <h3 className="text-center text-[11px] font-medium uppercase tracking-[0.16em] text-[#5f6368] dark:text-[#9aa0a6] font-mono flex items-center justify-center gap-2.5">
          <span className="w-8 h-[1px] bg-[#dadce0] dark:bg-[#2e3134]" />
          <span>Core Technologies & AI Infrastructure</span>
          <span className="w-8 h-[1px] bg-[#dadce0] dark:bg-[#2e3134]" />
        </h3>
      </div>

      <div className="relative w-full overflow-hidden group flex items-center">
        {/* Edge Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white dark:from-[#131314] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white dark:from-[#131314] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
          {duplicatedSkills.map((skill, idx) => (
            <div 
              key={idx}
              className="px-4 py-2 mx-2 flex items-center gap-2.5 bg-[#f8f9fa] dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134] rounded-full shadow-2xs hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] transition-all duration-200 whitespace-nowrap cursor-default"
            >
              <TechIcon name={skill} size={16} />
              <span className="text-xs font-medium text-[#202124] dark:text-[#e3e3e3] font-sans tracking-tight">
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


