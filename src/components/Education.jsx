import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Indian Institute of Technology (IIT) Patna",
      degree: "MBA",
      specialization: "Generative AI, Data Analysis, and Decision Science",
      duration: "2026 – 2028",
      logo: "https://i.postimg.cc/KzXVz8yP/iitp-logo.png",
      status: "Current",
      grade: null,
      details: [
        "Specializing in the integration of Generative AI with business systems, machine learning pipelines, and advanced analytics.",
        "Deep diving into Decision Science, predictive modeling, and strategic AI automation solutions."
      ]
    },
    {
      institution: "Rayat Bahra University",
      location: "Kharar, Mohali",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2022 – 2026",
      logo: "https://i.postimg.cc/PJ5MfgNy/rayat-bahra-professional-university-hoshiarpur-rbpu-7021468-logo-1773898511521.jpg",
      status: "Completed",
      grade: "76.8%",
      details: [
        "Studied core computer science fundamentals including Data Structures, Algorithms, Software Engineering, and AI/ML.",
        "Completed graduation with an aggregate score of 76.8%."
      ]
    },
    {
      institution: "Public Model Senior Secondary School",
      location: "Bambloh Uhal",
      degree: "12th (Non-Medical)",
      duration: "2021 – 2022",
      logo: null,
      status: "Completed",
      grade: "87.6%",
      details: [
        "Focused on Mathematics, Physics, and Chemistry (Non-Medical stream).",
        "Graduated with a senior secondary board percentage of 87.6%."
      ]
    }
  ];

  return (
    <section id="education" className="py-16 md:py-20 bg-white dark:bg-[#060913] transition-colors duration-500 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200/60 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold font-mono tracking-wide mb-3">
            <GraduationCap size={13} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 dark:text-white tracking-tight mb-3"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">Education</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Academic milestones and higher education in Computer Science and Decision Science.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/10 -translate-x-1/2" />

          <div className="space-y-6 md:space-y-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#060913] border-[3px] border-blue-600 dark:border-cyan-400 z-20 shadow-xs" />

                {/* Content Card */}
                <div className="w-full md:w-[46%] ml-12 md:ml-0">
                  <div className="bg-white dark:bg-[#0c1222] border border-gray-200/80 dark:border-white/10 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 text-[11px] font-semibold font-mono rounded-md border border-blue-200/60 dark:border-cyan-500/20">
                        <Calendar size={11} /> {edu.duration}
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold font-mono rounded-md border border-emerald-200/60 dark:border-emerald-500/20">
                        {edu.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl border border-gray-200/80 dark:border-white/10 p-1 bg-white dark:bg-white/[0.04] shadow-xs shrink-0 overflow-hidden flex items-center justify-center">
                        {edu.logo ? (
                          <img 
                            src={edu.logo} 
                            alt={edu.institution} 
                            className="w-full h-full rounded-lg object-contain"
                          />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">
                          {edu.degree}
                        </h3>
                        <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400 font-mono tracking-wide">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {edu.specialization && (
                      <div className="mb-2.5 flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <BookOpen size={14} className="mt-0.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                        <span className="font-medium">Specialization: <span className="text-gray-600 dark:text-gray-400">{edu.specialization}</span></span>
                      </div>
                    )}

                    {edu.location && (
                      <div className="mb-2.5 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <MapPin size={13} className="text-blue-600 dark:text-cyan-400" />
                        <span>{edu.location}</span>
                      </div>
                    )}

                    {edu.grade && (
                      <div className="mb-2.5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                        <Award size={14} className="text-blue-600 dark:text-cyan-400" />
                        <span>Score: <span className="text-blue-600 dark:text-cyan-400 font-mono">{edu.grade}</span></span>
                      </div>
                    )}
                    
                    <ul className="list-none space-y-1.5 mt-3 pt-3 border-t border-gray-100 dark:border-white/5">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex items-start gap-2">
                          <span className="text-blue-600 dark:text-cyan-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block w-[46%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;


