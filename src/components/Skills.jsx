import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, Brain, Layers } from 'lucide-react';
import TechIcon from './TechIcon';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain className="text-blue-600 dark:text-cyan-400" size={18} />,
      badge: "Core Focus",
      skills: ["Generative AI", "Machine Learning", "Deep Learning", "NLP", "Prompt Engineering", "TensorFlow", "PyTorch"]
    },
    {
      title: "Programming & Data",
      icon: <Code2 className="text-blue-600 dark:text-cyan-400" size={18} />,
      badge: "Backend & Data",
      skills: ["Python", "SQL", "MongoDB", "Data Analysis", "Postman", "Data Pipelines"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Settings className="text-blue-600 dark:text-cyan-400" size={18} />,
      badge: "Dev & Deployment",
      skills: ["Streamlit", "VS Code", "Git", "GitHub", "Anaconda", "Terminal"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 relative bg-gray-50/50 dark:bg-[#060913] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200/60 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold font-mono tracking-wide mb-3">
            <Layers size={13} />
            <span>TECH STACK & TOOLS</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white mb-3"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">Expertise</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Core technologies, libraries, and frameworks I use to build scalable AI systems.
          </p>
        </div>

        {/* Clean, Uniform Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex flex-col"
            >
              <div className="h-full bg-white dark:bg-[#0c1222] border border-gray-200/80 dark:border-white/10 p-5 sm:p-6 rounded-2xl flex flex-col shadow-sm hover:shadow-md hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300">
                {/* Category Top Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="p-2 bg-blue-50 dark:bg-cyan-500/10 rounded-lg">
                    {category.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.06] text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-white/5">
                    {category.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-display tracking-tight text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                
                {/* Skills with Real Vector Logos flowing naturally */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-white/5 flex-grow content-start">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-white/[0.04] hover:bg-blue-50/60 dark:hover:bg-cyan-500/10 border border-gray-200/80 dark:border-white/10 hover:border-blue-300 dark:hover:border-cyan-500/30 rounded-lg text-xs font-medium text-gray-800 dark:text-gray-200 transition-all duration-200 shadow-xs select-none"
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



