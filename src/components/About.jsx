import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const facets = [
    {
      icon: GraduationCap,
      label: "Academic Ledger",
      title: "Decision Science & Computing",
      desc: "MBA in Decision Science at IIT Patna (2026–2028) paired with a B.Tech in Computer Science from Rayat Bahra University (76.8% First Class)."
    },
    {
      icon: Brain,
      label: "Specialization",
      title: "Generative AI & LLM Systems",
      desc: "Architecting autonomous agents, structured prompt pipelines with Google Gemini 1.5 and PyTorch, and hallucination-resistant guardrails."
    },
    {
      icon: Cpu,
      label: "Production Focus",
      title: "High-Throughput Engineering",
      desc: "Deploying low-latency microservices with FastAPI, Docker, and Microsoft Azure ML for real-time model inference and scalable workflows."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 md:py-24 bg-[#f0f2f5] dark:bg-[#090a0d] text-[#0d0f12] dark:text-[#ffffff] border-t border-[#cbd0d9] dark:border-[#262933] transition-colors duration-250"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-xs font-mono text-[#494f5c] dark:text-[#9fa6b6] mb-3">
            <span>ABOUT HARSH LAGWAL</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0d0f12] dark:text-white font-display mb-4">
            Engineering intelligent systems with purpose.
          </h2>
          <p className="text-base text-[#494f5c] dark:text-[#9fa6b6] leading-relaxed">
            Bridging quantitative decision science with practical machine learning engineering to deliver reliable, production-ready software.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Personal Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] rounded-[28px] p-7 sm:p-9 flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0d0f12] dark:text-[#ffffff] uppercase tracking-wider mb-4 bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] px-3.5 py-1 rounded-full">
                <MapPin size={13} />
                <span>{portfolioData.personal.location}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0d0f12] dark:text-white font-display mb-5 leading-snug">
                Turning complex machine learning models into intuitive, high-value digital experiences.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#2b303a] dark:text-[#c5cad6] leading-relaxed">
                <p>
                  My engineering journey began with a curiosity for how algorithms discover non-linear patterns in raw data. Today, that curiosity has grown into building production-grade Generative AI agents, computer vision systems, and client software platforms.
                </p>
                <p>
                  At <strong className="font-semibold text-[#0d0f12] dark:text-white">IIT Patna</strong>, my research in Decision Science explores the intersection of algorithmic optimization, predictive modeling, and business intelligence — ensuring that technical architectures directly translate into measurable operational outcomes.
                </p>
                <p>
                  Whether fine-tuning neural networks during my internships at <strong className="font-semibold text-[#0d0f12] dark:text-white">Upto Skills</strong> and <strong className="font-semibold text-[#0d0f12] dark:text-white">SpectoV</strong>, or deploying live production web portals for government civil contractors, I treat software engineering and machine learning as two halves of the same discipline.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#cbd0d9] dark:border-[#262933] flex flex-wrap items-center justify-between gap-3">
              <div className="bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] px-4 py-2.5 rounded-2xl flex-1 min-w-[200px]">
                <div className="text-[11px] font-mono text-[#494f5c] dark:text-[#9fa6b6] uppercase tracking-wider">Current Degree</div>
                <div className="text-sm font-semibold text-[#0d0f12] dark:text-white">MBA in Decision Science · IIT Patna</div>
              </div>
              <div className="bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] px-4 py-2.5 rounded-2xl flex-1 min-w-[200px]">
                <div className="text-[11px] font-mono text-[#494f5c] dark:text-[#9fa6b6] uppercase tracking-wider">Undergraduate</div>
                <div className="text-sm font-semibold text-[#0d0f12] dark:text-white">B.Tech in CSE · Rayat Bahra University</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3 Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {facets.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] rounded-[28px] p-6 sm:p-7 flex-1 flex flex-col justify-center shadow-xs hover:border-[#9fa6b6] dark:hover:border-[#3b3f4d] transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] flex items-center justify-center text-[#0d0f12] dark:text-[#ffffff]">
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#494f5c] dark:text-[#9fa6b6] font-semibold">
                        {item.label}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#0d0f12] dark:text-white font-display">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-[#2b303a] dark:text-[#c5cad6] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
