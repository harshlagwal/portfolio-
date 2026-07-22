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
    <section id="education" className="py-16 md:py-20 bg-white dark:bg-[#0b0f1a] transition-colors duration-500 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-vibrant-blue/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-blue/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold mb-5 font-display text-gray-900 dark:text-white tracking-tight transition-colors duration-500"
          >
            Academic <span className="text-vibrant-blue">Education</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans text-lg leading-relaxed transition-colors duration-500">
            A reflection of my academic foundation and continuous learning journey.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700 -translate-x-1/2 transition-colors duration-500" />

          <div className="space-y-8 md:space-y-12">
            {educationData.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Connector Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-[#0b0f1a] border-4 border-vibrant-blue z-20 transition-colors duration-500" />

                {/* Content Card */}
                <div className="w-full md:w-[46%] ml-12 md:ml-0">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8 rounded-3xl hover:border-vibrant-blue/30 transition-all duration-500 group shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-vibrant-blue/10 dark:bg-vibrant-blue/20 text-vibrant-blue text-[9px] md:text-[10px] font-bold font-mono rounded-full uppercase tracking-wider transition-colors">
                        <Calendar size={10} /> {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[9px] md:text-[10px] font-bold font-mono rounded-full uppercase tracking-wider">
                        {edu.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                      {/* Logo Container - bg-white is forced to guarantee visibility of dark logos in dark mode */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-200 dark:border-gray-700 p-1 bg-white shadow-md shrink-0 overflow-hidden transition-all duration-500 group-hover:border-vibrant-blue/50 flex items-center justify-center">
                        {edu.logo ? (
                          <img 
                            src={edu.logo} 
                            alt={edu.institution} 
                            className="w-full h-full rounded-full object-contain"
                          />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-vibrant-blue" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white font-display tracking-tight group-hover:text-vibrant-blue transition-colors duration-500">
                          {edu.degree}
                        </h3>
                        <p className="text-[11px] md:text-sm font-semibold text-gray-600 dark:text-gray-400 font-display tracking-wide uppercase transition-colors duration-500">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {edu.specialization && (
                      <div className="mb-4 flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <BookOpen size={16} className="mt-0.5 text-vibrant-blue shrink-0" />
                        <span className="font-semibold">Specialization: <span className="font-normal text-gray-600 dark:text-gray-400">{edu.specialization}</span></span>
                      </div>
                    )}

                    {edu.location && (
                      <div className="mb-4 flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-sans">
                        <MapPin size={14} className="text-gray-400" />
                        <span>{edu.location}</span>
                      </div>
                    )}

                    {edu.grade && (
                      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                        <Award size={16} className="text-vibrant-blue" />
                        <span>Grade / Percentage: <span className="text-vibrant-blue font-mono">{edu.grade}</span></span>
                      </div>
                    )}
                    
                    <ul className="list-none space-y-2 mt-4">
                      {edu.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans transition-colors duration-500 flex items-start gap-2">
                          <span className="text-vibrant-blue mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Date/Label for Desktop - hidden on mobile */}
                <div className="hidden md:block w-[46%]">
                    {/* Empty space to balance the layout */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
