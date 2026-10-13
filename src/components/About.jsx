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
      icon: <Zap size={18} />,
      title: "Production-First AI",
      description: "Moving beyond Jupyter notebooks to deploy scalable, low-latency microservices with FastAPI, Docker, and robust cloud pipelines."
    },
    {
      icon: <Layers size={18} />,
      title: "Inference & Token Optimization",
      description: "Optimizing token economics through smart prompt caching, quantized model inference, and targeted fine-tuning over brute compute."
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Hallucination-Resistant Agents",
      description: "Engineering autonomous agentic workflows with structured JSON outputs, guardrails, and deterministic fallback mechanics."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-white dark:bg-[#08090d] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      
      {/* Ambient Lighting - Hardware accelerated & Clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 -translate-x-1/3 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold font-mono tracking-wide mb-3">
            <Activity size={13} strokeWidth={1.8} />
            <span>BACKGROUND & VISION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Intelligent Systems</span> with Purpose
          </h2>
        </div>

        {/* Institutional Trust & Credibility Ribbon */}
        <div className="mb-14 p-3.5 sm:p-5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/90 dark:border-white/[0.08]">
          <div className="text-[10.5px] font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-center mb-3">
            ACADEMIC & INDUSTRY TRUSTED INSTITUTIONS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {trustLogos.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-xs hover:border-blue-400/50 transition-colors"
              >
                <Award size={13} strokeWidth={1.8} className="text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-bold font-sans text-slate-900 dark:text-white">{item.name}</span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">({item.role})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid: Story & Engineering Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="h-full bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm backdrop-blur-xs">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 mb-3 font-semibold uppercase tracking-wider">
                  <Cpu size={14} strokeWidth={1.8} /> Engineer Profile
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-white mb-4">
                  Building Autonomous, High-Impact AI Solutions
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-4 leading-relaxed font-sans">
                  I’m <strong className="text-slate-900 dark:text-white font-semibold">Harsh Lagwal</strong>, an AI Engineer passionate about developing intelligent, reliable systems. Currently pursuing an <strong className="text-blue-600 dark:text-blue-400 font-semibold">MBA in Decision Science at IIT Patna</strong> and a <strong className="text-blue-600 dark:text-blue-400 font-semibold">B.Tech in Computer Science</strong>.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-sans mb-6">
                  My work spans across <strong className="text-slate-900 dark:text-white font-semibold">Generative AI pipelines, Machine Learning architectures, and Computer Vision</strong>, delivering scalable automation tools and real-time inference systems.
                </p>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-slate-100 dark:border-white/5">
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-sans">6</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase font-mono tracking-wider mt-0.5">INTERNSHIPS</div>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-sans">8+</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase font-mono tracking-wider mt-0.5">PROJECTS & CLIENTS</div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 text-center flex flex-col justify-center">
                  <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase font-mono tracking-wider mt-0.5">FOR HIRE</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {[
              {
                icon: <Brain strokeWidth={1.8} size={18} />,
                title: "AI Journey",
                description: "Starting with a curiosity for predictive data, evolved into an AI engineer specializing in Generative AI and NLP."
              },
              {
                icon: <Terminal strokeWidth={1.8} size={18} />,
                title: "Intelligent Tech",
                description: "Building technologies that don't just process information but reason with context and structured deterministic outputs."
              },
              {
                icon: <Rocket strokeWidth={1.8} size={18} />,
                title: "Problem Solving",
                description: "Focused on solving real-world challenges through automation, deep learning models, and intelligent AI agents."
              }
            ].map((item, index) => (
              <div key={index} className="flex-1 bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] rounded-xl p-5 shadow-xs hover:border-blue-400/50 transition-all duration-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold mb-1 text-slate-900 dark:text-white font-sans">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* ── Engineering Philosophy Cards with External Floating Icons ── */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-slate-900 dark:text-white">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Philosophy</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans mt-1">
              Architectural principles I follow when designing production AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {philosophies.map((phil, pIdx) => (
              <motion.div
                key={pIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pIdx * 0.08 }}
                className="relative bg-white dark:bg-white/[0.03] border border-slate-200/90 dark:border-white/[0.08] rounded-xl p-6 pt-9 shadow-xs hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* External Floating Anchor Icon */}
                <div className="absolute -top-4 left-6 w-9 h-9 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 flex items-center justify-center border border-blue-400/50 group-hover:scale-110 transition-transform">
                  {phil.icon}
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold font-sans text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {phil.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
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
