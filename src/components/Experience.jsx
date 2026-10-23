import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Briefcase, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = ({ onOpenCertificate }) => {
  return (
    <section 
      id="experience" 
      className="py-20 md:py-24 bg-[#f0f2f5] dark:bg-[#090a0d] text-[#0d0f12] dark:text-[#ffffff] border-t border-[#cbd0d9] dark:border-[#262933] transition-colors duration-250"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-xs font-mono text-[#494f5c] dark:text-[#9fa6b6] mb-3 font-semibold">
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0d0f12] dark:text-white font-display mb-4">
            Professional work &amp; internships.
          </h2>
          <p className="text-base text-[#494f5c] dark:text-[#9fa6b6] leading-relaxed">
            Verified engineering roles spanning deep learning architectures, cloud machine learning, and Generative AI workflows.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[#cbd0d9] dark:border-[#262933] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
          {portfolioData.experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Discreet Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2.5 w-3.5 h-3.5 rounded-full bg-[#f0f2f5] dark:bg-[#090a0d] border-2 border-[#0d0f12] dark:border-white transition-transform group-hover:scale-125" />

              {/* Card Container */}
              <div className="bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] rounded-[28px] p-6 sm:p-7 shadow-xs hover:border-[#9fa6b6] dark:hover:border-[#3b3f4d] transition-all">
                
                {/* Header: Logo + Role + Dates */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3.5">
                    {exp.logo && (
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#cbd0d9] dark:border-white/20 flex items-center justify-center p-2 shrink-0 shadow-2xs">
                        <img 
                          src={exp.logo} 
                          alt={exp.company} 
                          className="w-full h-full object-contain filter contrast-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0d0f12] dark:text-white font-display">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-[#494f5c] dark:text-[#9fa6b6] flex items-center gap-2 mt-0.5">
                        <span className="font-semibold">{exp.company}</span>
                        <span>•</span>
                        <span className="font-mono text-xs">{exp.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#494f5c] dark:text-[#9fa6b6] self-start sm:self-auto sm:shrink-0">
                    <Calendar size={13} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-[14px] text-[#2b303a] dark:text-[#c5cad6] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Verified Credential Links in One Clean Line */}
                {(exp.certificates || exp.certificate) && (
                  <div className="pt-3 border-t border-[#cbd0d9]/80 dark:border-[#262933]/80 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#494f5c] dark:text-[#9fa6b6] font-semibold">
                      Verified Documents:
                    </span>

                    {exp.certificates ? (
                      exp.certificates.map((cert, cIdx) => (
                        <button
                          key={cIdx}
                          type="button"
                          onClick={() => onOpenCertificate ? onOpenCertificate(cert.link) : window.open(cert.link, '_blank')}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#0d0f12] dark:text-white hover:text-blue-600 dark:hover:text-[#8ab4f8] transition-colors cursor-pointer"
                        >
                          <Award size={13} />
                          <span>{cert.label}</span>
                          <ExternalLink size={10} className="opacity-70" />
                        </button>
                      ))
                    ) : (
                      <button
                        type="button"
                        onClick={() => onOpenCertificate ? onOpenCertificate(exp.certificate) : window.open(exp.certificate, '_blank')}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0d0f12] dark:text-white hover:text-blue-600 dark:hover:text-[#8ab4f8] transition-colors cursor-pointer"
                      >
                        <Award size={13} />
                        <span>Experience Certificate</span>
                        <ExternalLink size={10} className="opacity-70" />
                      </button>
                    )}
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
