import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, Brain, Layers } from 'lucide-react';
import TechIcon from './TechIcon';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain strokeWidth={1.5} size={20} />,
      badge: "Core Focus",
      skills: ["Generative AI", "Machine Learning", "Deep Learning", "NLP", "Prompt Engineering", "TensorFlow", "PyTorch"]
    },
    {
      title: "Programming & Data",
      icon: <Code2 strokeWidth={1.5} size={20} />,
      badge: "Backend & Data",
      skills: ["Python", "SQL", "MongoDB", "Data Analysis", "Postman", "Data Pipelines"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Settings strokeWidth={1.5} size={20} />,
      badge: "Dev & Deployment",
      skills: ["Streamlit", "VS Code", "Git", "GitHub", "Anaconda", "Terminal"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 relative bg-white dark:bg-[#131314] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] dark:bg-[#8ab4f8]/10 border border-[#dadce0] dark:border-[#8ab4f8]/20 text-[#1a73e8] dark:text-[#8ab4f8] text-xs font-medium font-mono tracking-wide mb-3">
            <Layers size={14} strokeWidth={1.5} />
            <span>TECH STACK & TOOLS</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-medium font-display tracking-tight text-[#202124] dark:text-[#e3e3e3] mb-3"
          >
            Technical <span className="text-[#1a73e8] dark:text-[#8ab4f8]">Expertise</span>
          </motion.h2>
          <p className="text-[#5f6368] dark:text-[#9aa0a6] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Core technologies, libraries, and frameworks I use to build scalable AI systems.
          </p>
        </div>

        {/* Google Antigravity Editorial Skills Matrix (No Boxed Cards) */}
        <div className="border-y border-[#dadce0] dark:border-[#2e3134] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#dadce0] dark:divide-[#2e3134]">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="py-8 md:py-10 px-6 sm:px-8 flex flex-col justify-between"
            >
              <div>
                {/* Category Top Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f1f3f4] dark:bg-[#2a2b2e] flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8]">
                    {category.icon}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#f1f3f4] dark:bg-[#2a2b2e] text-[#5f6368] dark:text-[#9aa0a6] border border-[#dadce0] dark:border-[#3c4043]">
                    {category.badge}
                  </span>
                </div>

                <h3 className="text-xl font-medium font-display tracking-tight text-[#202124] dark:text-[#f1f3f4] mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] mb-6">
                  {category.skills.length} core competencies
                </p>
                
                {/* Skills with Real Vector Logos */}
                <div className="flex flex-wrap gap-2 content-start">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f8f9fa] dark:bg-[#1e1f20] hover:bg-[#e8f0fe] dark:hover:bg-[#8ab4f8]/10 border border-[#dadce0] dark:border-[#2e3134] hover:border-[#1a73e8]/30 dark:hover:border-[#8ab4f8]/30 rounded-lg text-xs font-normal text-[#202124] dark:text-[#e3e3e3] transition-all duration-200 shadow-2xs select-none"
                    >
                      <TechIcon name={skill} size={15} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;



