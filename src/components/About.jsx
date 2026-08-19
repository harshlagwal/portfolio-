import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Brain, Rocket, Cpu, Activity, ShieldCheck, Zap, Layers, Award } from 'lucide-react';

const About = () => {
  const trustLogos = [
    { name: "IIT Patna", role: "MBA (Decision Science)" },
    { name: "Rayat Bahra", role: "B.Tech (CSE)" },
    { name: "Google", role: "AI Verified" },
    { name: "ISRO", role: "Remote Sensing" },
    { name: "NVIDIA", role: "Deep Learning" },
    { name: "Anthropic", role: "Claude AI" },
    { name: "OpenAI", role: "Prompting" },
    { name: "Microsoft", role: "Azure AI" },
  ];

  const philosophies = [
    {
      icon: <Zap className="text-blue-600 dark:text-cyan-400" size={18} />,
      title: "Production-First AI",
      description: "Moving beyond Jupyter notebooks to deploy scalable, low-latency microservices with FastAPI, Docker, and robust cloud pipelines."
    },
    {
      icon: <Layers className="text-blue-600 dark:text-cyan-400" size={18} />,
      title: "Inference & Token Optimization",
      description: "Optimizing token economics through smart prompt caching, quantized model inference, and targeted fine-tuning over brute compute."
    },
    {
      icon: <ShieldCheck className="text-blue-600 dark:text-cyan-400" size={18} />,
      title: "Hallucination-Resistant Agents",
      description: "Engineering autonomous agentic workflows with structured JSON outputs, guardrails, and deterministic fallback mechanics."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white dark:bg-[#060913] transition-colors duration-500 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200/60 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold font-mono tracking-wide mb-3">
            <Activity size={13} />
            <span>BACKGROUND & VISION</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white max-w-3xl mx-auto"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">Intelligent Systems</span> with Purpose
          </motion.h2>
        </div>

        {/* Institutional Trust & Credibility Ribbon */}
        <div className="mb-12 p-3 sm:p-4 rounded-2xl bg-gray-50/70 dark:bg-white/[0.02] border border-gray-200/70 dark:border-white/5">
          <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest text-center mb-2.5">
            ACADEMIC & INDUSTRY CREDENTIALS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {trustLogos.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#0c1222] border border-gray-200/80 dark:border-white/10 shadow-xs"
              >
                <Award size={12} className="text-blue-600 dark:text-cyan-400" />
                <span className="text-xs font-bold font-display text-gray-900 dark:text-white">{item.name}</span>
                <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">({item.role})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid: Story & Engineering Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          
          {/* Main Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="h-full bg-white dark:bg-[#0c1222] border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 mb-3 font-semibold uppercase tracking-wider">
                  <Cpu size={15} /> Engineer Profile
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white mb-4">
                  Building Autonomous, High-Impact AI Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 leading-relaxed font-normal">
                  I’m <strong className="text-gray-900 dark:text-white font-semibold">Harsh Lagwal</strong>, an AI Engineer passionate about developing intelligent, reliable systems. Currently pursuing an <strong className="text-blue-600 dark:text-cyan-400 font-semibold">MBA in Decision Science at IIT Patna</strong> and a <strong className="text-blue-600 dark:text-cyan-400 font-semibold">B.Tech in Computer Science</strong>.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-6">
                  My work spans across <strong className="text-gray-900 dark:text-white font-semibold">Generative AI pipelines, Machine Learning architectures, and Computer Vision</strong>, delivering scalable automation tools and real-time inference systems.
                </p>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-gray-100 dark:border-white/5">
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 text-center">
                  <div className="text-2xl font-extrabold text-blue-600 dark:text-cyan-400 font-display">6</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase font-mono tracking-wider mt-0.5">INTERNSHIPS</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 text-center">
                  <div className="text-2xl font-extrabold text-blue-600 dark:text-cyan-400 font-display">8+</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase font-mono tracking-wider mt-0.5">PROJECTS & CLIENTS</div>
                </div>

                <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 text-center flex flex-col justify-center">
                  <div className="text-lg font-extrabold text-emerald-500 font-mono flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase font-mono tracking-wider mt-0.5">FOR HIRE</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-3.5"
          >
            {[
              {
                icon: <Brain className="text-blue-600 dark:text-cyan-400" size={18} />,
                title: "AI Journey",
                description: "Starting with a curiosity for data, evolved into an AI engineer specializing in Generative AI and NLP."
              },
              {
                icon: <Terminal className="text-blue-600 dark:text-cyan-400" size={18} />,
                title: "Intelligent Tech",
                description: "Building technologies that don't just process information but reason with context and structured outputs."
              },
              {
                icon: <Rocket className="text-blue-600 dark:text-cyan-400" size={18} />,
                title: "Problem Solving",
                description: "Focused on solving real-world challenges through automation, deep learning models, and intelligent AI agents."
              }
            ].map((item, index) => (
              <div key={index} className="flex-1 bg-white dark:bg-[#0c1222] border border-gray-200/80 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-50 dark:bg-cyan-500/10 rounded-xl text-blue-600 dark:text-cyan-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1 text-gray-900 dark:text-white font-display">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Engineering Philosophy Cards (3 Columns) */}
        <div>
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">Philosophy</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono mt-1">
              Architectural principles I follow when designing production AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {philosophies.map((phil, pIdx) => (
              <motion.div
                key={pIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pIdx * 0.1 }}
                className="bg-white dark:bg-[#0c1222] border border-gray-200/80 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="p-2.5 w-fit rounded-xl bg-blue-50 dark:bg-cyan-500/10 mb-3.5">
                  {phil.icon}
                </div>
                <h4 className="text-base font-bold font-display text-gray-900 dark:text-white mb-2">
                  {phil.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {phil.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;



