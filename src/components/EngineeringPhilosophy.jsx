import React from 'react';
import { Cpu, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export const EngineeringPhilosophy = () => {
  const principles = [
    {
      icon: Cpu,
      title: "Production-First AI",
      summary: "Moving beyond experimental notebooks to deploy scalable, low-latency microservices with FastAPI, Docker, and resilient cloud architectures.",
      tag: "Deployment Reliability"
    },
    {
      icon: Layers,
      title: "Inference & Token Optimization",
      summary: "Maximizing token economics through context-window caching, structured output schema enforcement, and targeted fine-tuning over brute-force compute.",
      tag: "Cost & Speed"
    },
    {
      icon: ShieldCheck,
      title: "Structured Agent Workflows",
      summary: "Designing multi-step AI agents with Pydantic validation, deterministic fallbacks, and strict guardrails to resist hallucinations.",
      tag: "Agentic Engineering"
    },
    {
      icon: Sparkles,
      title: "Human-Centered Utility",
      summary: "Crafting digital experiences where machine intelligence quietly accelerates human productivity instead of complicating the interface.",
      tag: "User Experience"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-[#f0f2f5] dark:bg-[#090a0d] text-[#0d0f12] dark:text-[#ffffff] border-t border-[#cbd0d9] dark:border-[#262933] transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-xs font-mono text-[#494f5c] dark:text-[#9fa6b6] mb-3 font-semibold">
            <span>ENGINEERING PRINCIPLES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0d0f12] dark:text-white font-display mb-4">
            How I build intelligent software.
          </h2>
          <p className="text-base text-[#494f5c] dark:text-[#9fa6b6] leading-relaxed">
            Practical design standards learned from building machine learning systems, client web applications, and agentic workflows.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#9fa6b6] dark:hover:border-[#3b3f4d] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] flex items-center justify-center text-[#0d0f12] dark:text-[#ffffff] shadow-2xs">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] text-[#0d0f12] dark:text-[#ffffff] font-semibold shadow-2xs">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0d0f12] dark:text-white font-display mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#2b303a] dark:text-[#c5cad6] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EngineeringPhilosophy;
