import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import iitPatnaSeal from '/logos/iit-patna.png';
import rbuLogo from '/logos/rayat-bahra-seal.webp';

export const Education = () => {
  const educationHistory = [
    {
      institution: "Indian Institute of Technology, Patna (IIT Patna)",
      degree: "Master of Business Administration (MBA)",
      specialization: "Decision Science, Quantitative Modeling & AI Leadership",
      duration: "2026 – 2028",
      status: "Currently Enrolled",
      isCurrent: true,
      location: "Bihta, Patna, Bihar",
      logo: iitPatnaSeal,
      details: "Premier graduate curriculum combining advanced quantitative business modeling, mathematical optimization, and enterprise Generative AI strategy at an Institute of National Importance."
    },
    {
      institution: "Rayat Bahra University",
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science & Engineering",
      duration: "2022 – 2026",
      status: "First Class Distinction (76.8% Aggregate)",
      isCurrent: false,
      location: "Mohali, Punjab",
      logo: rbuLogo,
      details: "Comprehensive engineering curriculum with a strong core in Data Structures, Algorithms, Neural Networks, Cloud Computing, Operating Systems, and Distributed Computing."
    },
    {
      institution: "Public Model Senior Secondary School",
      degree: "Higher Secondary (12th Non-Medical)",
      specialization: "Physics, Chemistry & Advanced Mathematics",
      duration: "2021 – 2022",
      status: "Distinction (87.6%)",
      isCurrent: false,
      location: "Bambloh Uhal, HP",
      logo: null,
      details: "Rigorous STEM foundation in Calculus, Analytical Physics, and quantitative logic."
    }
  ];

  return (
    <section 
      id="education" 
      className="py-20 md:py-24 bg-[#f0f2f5] dark:bg-[#090a0d] text-[#0d0f12] dark:text-[#ffffff] border-t border-[#cbd0d9] dark:border-[#262933] transition-colors duration-250"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-xs font-mono text-[#494f5c] dark:text-[#9fa6b6] mb-3 font-semibold">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0d0f12] dark:text-white font-display mb-4">
            Education &amp; academic milestones.
          </h2>
          <p className="text-base text-[#494f5c] dark:text-[#9fa6b6] leading-relaxed">
            Formal training in Decision Science, Computer Science &amp; Engineering, and mathematical analysis.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationHistory.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] rounded-[28px] p-6 sm:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 shadow-xs hover:border-[#9fa6b6] dark:hover:border-[#3b3f4d] transition-all ${
                item.isCurrent ? 'border-[#9fa6b6] dark:border-[#3b3f4d]' : ''
              }`}
            >
              {/* Left Content */}
              <div className="flex items-start gap-4 sm:gap-5 flex-1">
                {item.logo ? (
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#cbd0d9] dark:border-white/20 p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
                    <img 
                      src={item.logo} 
                      alt={item.institution} 
                      className="w-full h-full object-contain filter contrast-110"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#0d0f12] dark:text-white shrink-0">
                    <GraduationCap size={24} strokeWidth={1.8} />
                  </div>
                )}

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0d0f12] dark:text-white font-display">
                      {item.institution}
                    </h3>
                    {item.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        In Progress
                      </span>
                    )}
                  </div>

                  <div className="text-sm font-semibold text-[#0d0f12] dark:text-[#ffffff] mb-1">
                    {item.degree} — <span className="font-normal text-[#494f5c] dark:text-[#9fa6b6]">{item.specialization}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#494f5c] dark:text-[#9fa6b6] font-mono mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {item.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-semibold text-[#0d0f12] dark:text-[#e3e6ed]">
                      <Award size={12} /> {item.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#2b303a] dark:text-[#c5cad6] leading-relaxed max-w-2xl">
                    {item.details}
                  </p>
                </div>
              </div>

              {/* Right: Duration */}
              <div className="self-start md:self-auto shrink-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#494f5c] dark:text-[#9fa6b6]">
                  <Calendar size={13} />
                  <span>{item.duration}</span>
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
