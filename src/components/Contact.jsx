import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const directLinks = [
    { name: "Email", href: `mailto:${portfolioData.personal.email}` },
    { name: "WhatsApp", href: portfolioData.personal.whatsapp },
    { name: "LinkedIn", href: portfolioData.personal.linkedin },
    { name: "GitHub", href: portfolioData.personal.github },
    { name: "Résumé (PDF)", href: portfolioData.personal.resumeLink },
    { name: "Call", href: `tel:${portfolioData.personal.phone}` }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 bg-[#f0f2f5] dark:bg-[#090a0d] text-[#0d0f12] dark:text-[#ffffff] border-t border-[#cbd0d9] dark:border-[#262933] transition-colors duration-250"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Simple Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-xs font-mono font-semibold text-[#494f5c] dark:text-[#9fa6b6] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>GET IN TOUCH</span>
        </div>

        {/* Clean Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0d0f12] dark:text-white font-display mb-3">
          Let's connect.
        </h2>

        <p className="text-sm sm:text-base text-[#494f5c] dark:text-[#9fa6b6] max-w-xl mb-8 leading-relaxed">
          Open to full-time AI/ML roles, Generative AI systems engineering, and collaborative projects. Reach out directly:
        </p>

        {/* Primary Clean Email Click + Copy */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-[#0d0f12] dark:text-white hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors inline-flex items-center gap-2 group"
          >
            <span>{portfolioData.personal.email}</span>
            <ArrowUpRight size={24} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-xs font-mono font-semibold text-[#494f5c] dark:text-[#9fa6b6] hover:text-[#0d0f12] dark:hover:text-white hover:border-[#9fa6b6] dark:hover:border-[#3b3f4d] transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
            title="Copy Email Address"
          >
            {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Minimalist Direct Links (No Cards, Pure Links) */}
        <div className="pt-6 border-t border-[#cbd0d9]/60 dark:border-[#262933]/60 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3">
          {directLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.name === 'Email' || link.name === 'Call' ? undefined : '_blank'}
              rel={link.name === 'Email' || link.name === 'Call' ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-1 text-sm sm:text-base font-semibold text-[#0d0f12] dark:text-white hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors group cursor-pointer"
            >
              <span className="border-b border-[#cbd0d9] dark:border-[#262933] group-hover:border-current pb-0.5 transition-colors">
                {link.name}
              </span>
              <ArrowUpRight size={14} className="text-[#494f5c] dark:text-[#9fa6b6] group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>
          ))}
        </div>

        {/* Subtle Location & Response Time */}
        <div className="mt-8 text-xs font-mono text-[#788090] dark:text-[#666c7a]">
          {portfolioData.personal.location} · Typically replies within a few hours
        </div>

      </div>
    </section>
  );
};

export default Contact;
