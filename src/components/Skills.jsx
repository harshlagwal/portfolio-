import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Settings, Brain, Layers, Sparkles } from 'lucide-react';
import TechIcon from './TechIcon';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain strokeWidth={1.8} size={20} />,
      badge: "Core Specialization",
      description: "Neural network architectures, deep learning models, and LLM agent orchestration.",
      skills: ["Generative AI", "Machine Learning", "Deep Learning", "NLP", "Prompt Engineering", "TensorFlow", "PyTorch"]
    },
    {
      title: "Programming & Data",
      icon: <Code2 strokeWidth={1.8} size={20} />,
      badge: "Backend & Data",
      description: "Scalable backend systems, relational & NoSQL databases, and automated ETL pipelines.",
      skills: ["Python", "SQL", "MongoDB", "Data Analysis", "Postman", "Data Pipelines"]
    },
    {
      title: "Tools & Cloud Dev",
      icon: <Settings strokeWidth={1.8} size={20} />,
      badge: "Dev & Deployment",
      description: "Production development toolchains, containerization, and modern version control.",
      skills: ["FastAPI", "Docker", "Streamlit", "VS Code", "Git", "GitHub", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-24 relative bg-white dark:bg-[#08090d] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      
      {/* Ambient Lighting - Hardware accelerated & Clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 -translate-x-1/3 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold font-mono tracking-wide mb-3">
            <Layers size={13} strokeWidth={1.8} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-slate-900 dark:text-white mb-3">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Expertise</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-sans">
            Core technologies, deep learning frameworks, and modern tools I leverage to build scalable AI systems.
          </p>
        </div>

        {/* ── Razor-Sharp Bento Skills Grid with External Floating Icons ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch pt-4">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              className="relative rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] p-6 pt-9 shadow-sm hover:shadow-xl dark:hover:border-blue-500/40 hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-200 ease-out flex flex-col justify-between group will-change-transform"
            >
              {/* ── External Floating Anchor Icon (Floating outside top border) ── */}
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20 flex items-center justify-center border border-blue-400/50 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>

              <div>
                {/* Meta Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-white/30">
                    0{idx + 1}
                  </span>
                  <span className="text-[10.5px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20">
                    {category.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-sans text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-100/80 hover:bg-blue-50 dark:bg-white/[0.04] dark:hover:bg-blue-500/10 border border-slate-200/80 hover:border-blue-400/50 dark:border-white/5 dark:hover:border-blue-500/30 rounded-lg text-xs font-mono font-medium text-slate-800 dark:text-slate-200 transition-all duration-200 select-none cursor-default shadow-xs"
                    >
                      <TechIcon name={skill} size={14} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Count Pill */}
              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span>Domain Ready</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">{category.skills.length} Technologies</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
