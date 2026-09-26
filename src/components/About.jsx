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
    <section id="about" className="py-16 md:py-20 bg-white dark:bg-[#131314] transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] dark:bg-[#8ab4f8]/10 border border-[#dadce0] dark:border-[#8ab4f8]/20 text-[#1a73e8] dark:text-[#8ab4f8] text-xs font-medium font-mono tracking-wide mb-3">
            <Activity size={14} strokeWidth={1.5} />
            <span>BACKGROUND & VISION</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-medium font-display tracking-tight text-[#202124] dark:text-[#e3e3e3] max-w-3xl mx-auto"
          >
            Engineering <span className="text-[#1a73e8] dark:text-[#8ab4f8]">Intelligent Systems</span> with Purpose
          </motion.h2>
        </div>

        {/* Institutional Trust & Credibility Ribbon */}
        <div className="mb-12 p-3 sm:p-4 rounded-2xl bg-[#f8f9fa] dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134]">
          <div className="text-[10px] font-mono font-medium text-[#5f6368] dark:text-[#9aa0a6] uppercase tracking-widest text-center mb-2.5">
            ACADEMIC & INDUSTRY CREDENTIALS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {trustLogos.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] shadow-xs"
              >
                <Award size={13} strokeWidth={1.5} className="text-[#1a73e8] dark:text-[#8ab4f8]" />
                <span className="text-xs font-medium font-display text-[#202124] dark:text-[#e3e3e3]">{item.name}</span>
                <span className="text-[10px] font-mono text-[#5f6368] dark:text-[#9aa0a6]">({item.role})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid: Story & Engineering Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* Main Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="h-full bg-white dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#1a73e8] dark:text-[#8ab4f8] mb-3 font-medium uppercase tracking-wider">
                  <Cpu size={15} strokeWidth={1.5} /> Engineer Profile
                </div>
                <h3 className="text-xl sm:text-2xl font-medium font-display text-[#202124] dark:text-[#e3e3e3] mb-4">
                  Building Autonomous, High-Impact AI Solutions
                </h3>
                <p className="text-[#5f6368] dark:text-[#9aa0a6] text-sm sm:text-base mb-4 leading-relaxed font-normal">
                  I’m <strong className="text-[#202124] dark:text-white font-medium">Harsh Lagwal</strong>, an AI Engineer passionate about developing intelligent, reliable systems. Currently pursuing an <strong className="text-[#1a73e8] dark:text-[#8ab4f8] font-medium">MBA in Decision Science at IIT Patna</strong> and a <strong className="text-[#1a73e8] dark:text-[#8ab4f8] font-medium">B.Tech in Computer Science</strong>.
                </p>
                <p className="text-[#5f6368] dark:text-[#9aa0a6] text-sm sm:text-base leading-relaxed font-normal mb-6">
                  My work spans across <strong className="text-[#202124] dark:text-white font-medium">Generative AI pipelines, Machine Learning architectures, and Computer Vision</strong>, delivering scalable automation tools and real-time inference systems.
                </p>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-[#f1f3f4] dark:border-[#2e3134]">
                <div className="p-3 rounded-xl bg-[#f8f9fa] dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] text-center">
                  <div className="text-2xl font-medium text-[#1a73e8] dark:text-[#8ab4f8] font-display">6</div>
                  <div className="text-[10px] text-[#5f6368] dark:text-[#9aa0a6] font-medium uppercase font-mono tracking-wider mt-0.5">INTERNSHIPS</div>
                </div>
                <div className="p-3 rounded-xl bg-[#f8f9fa] dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] text-center">
                  <div className="text-2xl font-medium text-[#1a73e8] dark:text-[#8ab4f8] font-display">8+</div>
                  <div className="text-[10px] text-[#5f6368] dark:text-[#9aa0a6] font-medium uppercase font-mono tracking-wider mt-0.5">PROJECTS & CLIENTS</div>
                </div>

                <div className="p-3 rounded-xl bg-[#f8f9fa] dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] text-center flex flex-col justify-center">
                  <div className="text-lg font-medium text-[#137333] dark:text-[#81c995] font-mono flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#137333] dark:bg-[#81c995] animate-pulse" />
                    LIVE
                  </div>
                  <div className="text-[10px] text-[#5f6368] dark:text-[#9aa0a6] font-medium uppercase font-mono tracking-wider mt-0.5">FOR HIRE</div>
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
                icon: <Brain strokeWidth={1.5} size={20} />,
                title: "AI Journey",
                description: "Starting with a curiosity for data, evolved into an AI engineer specializing in Generative AI and NLP."
              },
              {
                icon: <Terminal strokeWidth={1.5} size={20} />,
                title: "Intelligent Tech",
                description: "Building technologies that don't just process information but reason with context and structured outputs."
              },
              {
                icon: <Rocket strokeWidth={1.5} size={20} />,
                title: "Problem Solving",
                description: "Focused on solving real-world challenges through automation, deep learning models, and intelligent AI agents."
              }
            ].map((item, index) => (
              <div key={index} className="flex-1 bg-white dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134] rounded-2xl p-5 shadow-xs hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] transition-all duration-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#f1f3f4] dark:bg-[#2a2b2e] flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-medium mb-1 text-[#202124] dark:text-[#e3e3e3] font-display">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Engineering Philosophy Cards (3 Columns - Exact Google Antigravity Card Style) */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-medium font-display text-[#202124] dark:text-[#e3e3e3]">
              Engineering <span className="text-[#1a73e8] dark:text-[#8ab4f8]">Philosophy</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#5f6368] dark:text-[#9aa0a6] font-normal mt-1">
              Architectural principles I follow when designing production AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophies.map((phil, pIdx) => (
              <motion.div
                key={pIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pIdx * 0.1 }}
                className="bg-white dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134] rounded-2xl p-6 shadow-xs hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Clean Outline Icon at Top */}
                  <div className="w-10 h-10 rounded-xl bg-[#f1f3f4] dark:bg-[#2a2b2e] flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8] mb-4">
                    {phil.icon}
                  </div>
                  <h4 className="text-lg font-medium font-display text-[#202124] dark:text-[#e3e3e3] mb-2.5">
                    {phil.title}
                  </h4>
                  <p className="text-[13.5px] sm:text-[14px] text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed font-normal">
                    {phil.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;



