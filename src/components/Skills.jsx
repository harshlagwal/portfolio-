import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI / Machine Learning",
      icon: <Brain className="text-vibrant-blue" />,
      skills: ["Generative AI", "Machine Learning", "Deep Learning", "NLP", "Prompt Engineering", "TensorFlow", "PyTorch"]
    },
    {
      title: "Programming & Data",
      icon: <Code2 className="text-vibrant-blue" />,
      skills: ["Python", "SQL", "Data Analysis", "MongoDB", "Postman"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Settings className="text-vibrant-blue" />,
      skills: ["Streamlit", "Git", "GitHub", "VS Code", "Anaconda"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden bg-white dark:bg-[#0b0f1a] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-5 font-display tracking-tight text-gray-900 dark:text-white transition-colors duration-500"
          >
            Technical <span className="text-vibrant-blue">Expertise</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans font-normal leading-relaxed transition-colors duration-500">
            A comprehensive set of skills focused on building the next generation of intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-3xl hover:border-vibrant-blue/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-sky/30 dark:bg-vibrant-blue/20 rounded-2xl group-hover:bg-vibrant-blue/10 transition-all text-vibrant-blue">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold font-display tracking-tight text-gray-900 dark:text-white transition-colors duration-500">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, sIdx) => (
                   <span 
                    key={sIdx}
                    className="px-5 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-bold font-sans text-gray-600 dark:text-gray-400 hover:bg-vibrant-blue/10 dark:hover:bg-vibrant-blue/20 hover:text-vibrant-blue dark:hover:text-vibrant-blue hover:border-vibrant-blue/30 transition-all cursor-default uppercase tracking-widest shadow-sm duration-300 min-w-[100px] text-center flex items-center justify-center h-10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
