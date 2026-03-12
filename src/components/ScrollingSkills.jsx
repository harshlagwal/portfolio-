import React from 'react';
import { motion } from 'framer-motion';

const ScrollingSkills = () => {
  const skills = [
    "Python",
    "Machine Learning",
    "Generative AI",
    "Prompt Engineering",
    "Natural Language Processing",
    "TensorFlow",
    "PyTorch",
    "Data Analysis",
    "MongoDB",
    "Streamlit",
    "Postman",
    "Computer Vision",
    "AI Automation",
    "Agentic Ai",
    "SQL",
    "AI Full Stack"
  ];

  // Duplicate the array to create a seamless infinite loop effect
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="py-6 bg-white dark:bg-[#0b0f1a] overflow-hidden border-y border-gray-100 dark:border-gray-800/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-mono transition-colors duration-500 flex items-center justify-center gap-4">
          <span className="w-12 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
          Skills & Technologies
          <span className="w-12 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
        </h3>
      </div>

      <div className="relative w-full overflow-hidden group flex items-center">
        {/* Subtle Fade Contextual Gradients for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0b0f1a] to-transparent z-10 pointer-events-none transition-colors duration-500" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0b0f1a] to-transparent z-10 pointer-events-none transition-colors duration-500" />

        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
          {duplicatedSkills.map((skill, idx) => (
            <div 
              key={idx}
              className="px-6 py-3 mx-3 flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm hover:shadow-md hover:border-vibrant-blue/30 dark:hover:border-vibrant-blue/30 transition-all duration-300 whitespace-nowrap"
            >
              <span className="text-sm font-medium text-gray-900 dark:text-white font-sans transition-colors duration-500 tracking-wide">
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
