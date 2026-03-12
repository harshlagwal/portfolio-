import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Brain, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="text-vibrant-blue" />,
      title: "AI Journey",
      description: "Starting with a curiosity for data, I evolved into an AI engineer specializing in Generative AI and NLP."
    },
    {
      icon: <Terminal className="text-vibrant-blue" />,
      title: "Intelligent Tech",
      description: "Passionate about building technologies that don't just process information but understand it."
    },
    {
      icon: <Rocket className="text-vibrant-blue" />,
      title: "Problem Solving",
      description: "Focused on solving real-world challenges through automation and intelligent AI agents."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white dark:bg-[#0b0f1a] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 font-display tracking-tight text-gray-900 dark:text-white transition-colors duration-500">
              Innovating at the <span className="text-vibrant-blue">Intersection</span> of Human Intelligence and AI
            </h2>
            <div className="mb-10">
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4 leading-relaxed font-normal transition-colors duration-500">
                I am Harsh Lagwal, an AI Engineer dedicated to crafting intelligent systems. My expertise lies in Generative AI, Machine Learning, and creating AI solutions that bridge the gap between complex data and actionable insights.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-normal transition-colors duration-500">
                Whether it's developing healthcare chatbots that provide critical guidance or building autonomous AI agents for automation, my goal is to create technology that makes a tangible impact.
              </p>
            </div>
            
            <div className="flex gap-4">
                <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl min-w-[100px] transition-colors duration-500">
                    <span className="text-2xl font-bold text-vibrant-blue font-display">6</span>
                    <span className="text-[10px] text-gray-600 dark:text-gray-400 font-bold uppercase font-mono tracking-widest transition-colors duration-500">INTERNSHIPS</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl min-w-[100px] transition-colors duration-500">
                    <span className="text-2xl font-bold text-vibrant-blue font-display">6</span>
                    <span className="text-[10px] text-gray-600 dark:text-gray-400 font-bold uppercase font-mono tracking-widest transition-colors duration-500">PROJECTS</span>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-1 gap-6"
          >
            {highlights.map((item, index) => (
              <div key={index} className="p-8 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl hover:border-vibrant-blue/30 transition-all duration-500 group">
                <div className="mb-4 p-3 bg-sky/30 dark:bg-vibrant-blue/20 w-fit rounded-xl group-hover:bg-vibrant-blue/10 transition-all text-vibrant-blue">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white font-display tracking-tight transition-colors duration-500">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-sans leading-relaxed transition-colors duration-500">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
