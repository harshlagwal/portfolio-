import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Indian Institute of Technology (IIT) Patna",
      location: "Patna, Bihar",
      degree: "Master of Business Administration (MBA)",
      specialization: "Generative AI, Data Analysis & Decision Science",
      duration: "2026 – 2028",
      logo: "https://i.postimg.cc/KzXVz8yP/iitp-logo.png",
      status: "Current",
      isCurrent: true,
      grade: null,
      tags: ["Generative AI", "Decision Science", "Predictive Analytics"],
      details: [
        "Advanced specialization integrating Generative AI architectures with enterprise decision science and data analytics.",
        "Deep research into predictive mathematical modeling, algorithmic decision optimization, and autonomous AI automation."
      ]
    },
    {
      institution: "Rayat Bahra University",
      location: "Kharar, Mohali",
      degree: "B.Tech in Computer Science & Engineering",
      specialization: "Artificial Intelligence & Core Computer Science",
      duration: "2022 – 2026",
      logo: "https://i.postimg.cc/PJ5MfgNy/rayat-bahra-professional-university-hoshiarpur-rbpu-7021468-logo-1773898511521.jpg",
      status: "Completed",
      isCurrent: false,
      grade: "76.8% Aggregate",
      tags: ["Data Structures", "Machine Learning", "System Design"],
      details: [
        "Rigorous foundation in computer science engineering, Data Structures & Algorithms, Operating Systems, and Deep Learning.",
        "Graduated with a first-class engineering aggregate score of 76.8%."
      ]
    },
    {
      institution: "Public Model Senior Secondary School",
      location: "Bambloh Uhal",
      degree: "Higher Secondary (12th Non-Medical)",
      specialization: "Physics, Chemistry & Advanced Mathematics",
      duration: "2021 – 2022",
      logo: null,
      status: "Completed",
      isCurrent: false,
      grade: "87.6% Distinction",
      tags: ["Mathematics", "Physics", "STEM Foundation"],
      details: [
        "Completed Senior Secondary Education with major concentration in Mathematics, Physics, and Analytical Logic.",
        "Achieved a high academic distinction score of 87.6% in the state board examinations."
      ]
    }
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-white dark:bg-[#131314] transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] dark:bg-[#8ab4f8]/10 border border-[#dadce0] dark:border-[#8ab4f8]/20 text-[#1a73e8] dark:text-[#8ab4f8] text-xs font-medium font-mono tracking-wide mb-3">
              <GraduationCap size={14} strokeWidth={1.5} />
              <span>ACADEMIC FOUNDATION & DEGREES</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-medium font-display text-[#202124] dark:text-[#f1f3f4] tracking-tight"
            >
              Academic <span className="text-[#1a73e8] dark:text-[#8ab4f8]">Qualifications</span>
            </motion.h2>
          </div>
          <p className="text-[#5f6368] dark:text-[#9aa0a6] max-w-md text-xs sm:text-sm leading-relaxed">
            Formal engineering education, premier institute enrollment at IIT Patna, and quantitative STEM foundation.
          </p>
        </div>

        {/* Google / Apple RGB Laser Timeline Track Wrapper */}
        <div className="relative border-t border-[#dadce0] dark:border-[#2e3134]">
          
          {/* Vertical RGB Laser Guide Rail (Google 4-Color Gradient) */}
          <div className="hidden lg:block absolute left-[-24px] top-0 bottom-0 w-[2px] bg-[#dadce0]/50 dark:bg-[#2e3134]/60 overflow-hidden">
            {/* Smooth Continuous Traveling RGB Laser Beam */}
            <motion.div
              animate={{
                y: ['-100%', '350%'],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-full h-56 bg-gradient-to-b from-transparent via-[#4285f4] via-[#ea4335] via-[#fbbc04] to-[#34a853] shadow-[0_0_12px_rgba(66,133,244,0.8)]"
            />
          </div>
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: idx * 0.04 }}
              className="py-8 md:py-10 border-b border-[#dadce0] dark:border-[#2e3134] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start hover:bg-[#f8f9fa]/50 dark:hover:bg-[#1a1b1e]/50 px-4 -mx-4 rounded-2xl transition-colors duration-150"
            >
              {/* Col 1: Timeline & Current Status (3 cols) */}
              <div className="md:col-span-3 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#1a73e8] dark:text-[#8ab4f8] font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#dadce0] dark:bg-[#3c4043]" />
                  <span className="text-xs font-mono font-medium text-[#202124] dark:text-[#e3e3e3] flex items-center gap-1.5">
                    <Calendar size={12} strokeWidth={1.5} className="text-[#5f6368] dark:text-[#9aa0a6]" />
                    {edu.duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-1">
                  {edu.isCurrent ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e6f4ea] dark:bg-[#137333]/20 border border-[#ceead6] dark:border-[#137333]/40 text-[11px] font-mono font-medium text-[#137333] dark:text-[#81c995]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#137333] dark:bg-[#81c995] animate-ping" />
                      In Progress
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e8f0fe] dark:bg-[#8ab4f8]/10 border border-[#dadce0] dark:border-[#8ab4f8]/20 text-[11px] font-mono font-medium text-[#1a73e8] dark:text-[#8ab4f8]">
                      Graduated
                    </span>
                  )}

                  {edu.location && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#5f6368] dark:text-[#9aa0a6]">
                      <MapPin size={10} strokeWidth={1.5} />
                      {edu.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Col 2: Degree, Institution & Academic Focus (6 cols) */}
              <div className="md:col-span-6 flex items-start gap-4">
                {/* University Emblem / Logo in sleek container */}
                <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-[#dadce0] dark:border-[#3c4043] p-1.5 shadow-2xs overflow-hidden flex items-center justify-center mt-0.5">
                  {edu.logo ? (
                    <img 
                      src={edu.logo} 
                      alt={edu.institution} 
                      className="w-full h-full rounded-lg object-contain"
                    />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-[#1a73e8] dark:text-[#8ab4f8]" strokeWidth={1.5} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-medium text-[#202124] dark:text-[#f1f3f4] font-display tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5 mb-2">
                    <span className="text-xs font-mono font-medium text-[#1a73e8] dark:text-[#8ab4f8]">
                      {edu.institution}
                    </span>
                    <CheckCircle2 size={12} strokeWidth={1.8} className="text-[#137333] dark:text-[#81c995]" />
                  </div>

                  {edu.specialization && (
                    <p className="text-xs font-medium text-[#3c4043] dark:text-[#bdc1c6] mb-3 flex items-center gap-1.5">
                      <BookOpen size={12} strokeWidth={1.5} className="text-[#1a73e8] dark:text-[#8ab4f8]" />
                      <span>Specialization: <span className="text-[#5f6368] dark:text-[#9aa0a6]">{edu.specialization}</span></span>
                    </p>
                  )}

                  <div className="space-y-1.5">
                    {edu.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] dark:bg-[#8ab4f8] mt-2 shrink-0 opacity-80" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Col 3: Academic Score & Domain Tags (3 cols) */}
              <div className="md:col-span-3 flex md:flex-col md:items-end justify-start gap-2 pt-2 md:pt-0">
                {edu.grade && (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f1f3f4] dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] text-xs font-mono font-medium text-[#202124] dark:text-[#f1f3f4] shadow-2xs">
                    <Award size={13} strokeWidth={1.8} className="text-[#1a73e8] dark:text-[#8ab4f8]" />
                    <span>{edu.grade}</span>
                  </div>
                )}

                {edu.tags && (
                  <div className="flex flex-wrap md:justify-end gap-1.5 mt-1">
                    {edu.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-[#f8f9fa] dark:bg-[#1a1b1e] border border-[#dadce0] dark:border-[#2e3134] text-[10.5px] font-mono text-[#5f6368] dark:text-[#9aa0a6]"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Education;
