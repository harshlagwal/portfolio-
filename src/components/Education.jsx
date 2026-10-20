import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Calendar, GraduationCap, MapPin, Award, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';

const Education = () => {
  const containerRef = useRef(null);

  // Live Scroll-Linked Laser Trace
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"]
  });

  const laserScaleY = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    restDelta: 0.001
  });

  const educationData = [
    {
      institution: "Indian Institute of Technology (IIT) Patna",
      location: "Patna, Bihar",
      degree: "Master of Business Administration (MBA)",
      specialization: "Generative AI, Data Analysis & Decision Science",
      duration: "2026 – 2028",
      logo: "/logos/iit_patna_seal.png",
      status: "In Progress",
      isCurrent: true,
      grade: "Enrolled",
      tags: ["Generative AI", "Decision Science", "Predictive Analytics"],
      details: "Advanced curriculum integrating Generative AI architectures with algorithmic decision optimization and enterprise predictive modeling at one of India's premier institutes."
    },
    {
      institution: "Rayat Bahra University",
      location: "Kharar, Mohali",
      degree: "B.Tech in Computer Science & Engineering",
      specialization: "Artificial Intelligence & Core Computer Science",
      duration: "2022 – 2026",
      logo: "https://i.postimg.cc/PJ5MfgNy/rayat-bahra-professional-university-hoshiarpur-rbpu-7021468-logo-1773898511521.jpg",
      status: "First Class",
      isCurrent: false,
      grade: "76.8% Aggregate",
      tags: ["Data Structures", "Deep Learning", "System Design"],
      details: "Rigorous engineering foundation in core Computer Science, advanced Data Structures, Operating Systems, Neural Networks, and Distributed Computing."
    },
    {
      institution: "Public Model Senior Secondary School",
      location: "Bambloh Uhal",
      degree: "Higher Secondary (12th Non-Medical)",
      specialization: "Physics, Chemistry & Advanced Mathematics",
      duration: "2021 – 2022",
      logo: null,
      status: "Distinction",
      isCurrent: false,
      grade: "87.6% Distinction",
      tags: ["Mathematics", "Physics", "Analytical Logic"],
      details: "Completed Senior Secondary STEM curriculum with high distinction, focusing on Calculus, Physics, and quantitative analytical problem solving."
    }
  ];

  return (
    <section id="education" className="py-20 md:py-24 bg-white dark:bg-[#08090d] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle Ambient Background Glow - Hardware accelerated & Clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 translate-x-1/3 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/3 left-0 -translate-x-1/3 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold font-mono tracking-wide mb-3">
              <GraduationCap size={14} strokeWidth={1.8} />
              <span>ACADEMIC FOUNDATION & DEGREES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-slate-900 dark:text-white">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Qualifications</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed font-sans">
            Formal engineering education, premier institute enrollment at IIT Patna, and quantitative STEM foundation.
          </p>
        </div>

        {/* ── Illuminated Circuit Timeline with Scroll-Linked Laser Trace ── */}
        <div ref={containerRef} className="relative pl-10 sm:pl-14 md:pl-16 space-y-10">
          
          {/* Continuous Vertical Guide Rail */}
          <div className="absolute left-3.5 sm:left-5 md:left-6 top-5 bottom-8 w-[2px] bg-slate-200 dark:bg-white/10" />

          {/* Real-time Scroll-Linked Electric Laser Beam */}
          <motion.div
            style={{ scaleY: laserScaleY, transformOrigin: 'top' }}
            className="absolute left-3.5 sm:left-5 md:left-6 top-5 bottom-8 w-[2.5px] bg-gradient-to-b from-blue-600 via-cyan-400 to-indigo-500 shadow-[0_0_12px_#3b82f6] origin-top z-10"
          />

          {/* Traveling Glowing Laser Spark Head */}
          <motion.div
            style={{ top: useTransform(laserScaleY, [0, 1], ['20px', 'calc(100% - 24px)']) }}
            className="absolute left-[14px] sm:left-[20px] md:left-[24px] -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_14px_#00f0ff,0_0_24px_#3b82f6] pointer-events-none z-20 flex items-center justify-center -translate-y-1/2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </motion.div>

          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial="idle"
              whileInView="active"
              viewport={{ amount: 0.45, once: false }}
              className="relative group"
            >
              {/* ── 1. The External Anchor Node (Sits 100% OUTSIDE the card on the rail) ── */}
              <div className="absolute -left-10 sm:-left-14 md:-left-16 top-5 flex items-center">
                {/* External Node Badge with Ignition Halo */}
                <motion.div 
                  variants={{
                    idle: { scale: 0.95, borderColor: "rgba(148, 163, 184, 0.3)", boxShadow: "0 0 0px transparent" },
                    active: { scale: 1.1, borderColor: "#3b82f6", boxShadow: "0 0 20px rgba(59, 130, 246, 0.55)" }
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-[#0d1117] border p-1.5 flex items-center justify-center shrink-0 z-20 transition-transform"
                >
                  {edu.logo ? (
                    <img 
                      src={edu.logo} 
                      alt={edu.institution} 
                      className="w-full h-full object-contain rounded-md"
                      onError={(e) => { 
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(edu.institution)}&background=2563eb&color=fff`; 
                      }}
                    />
                  ) : (
                    <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
                  )}
                </motion.div>
                {/* Horizontal Laser Connector Bridge into the card */}
                <motion.div 
                  variants={{
                    idle: { width: "8px", backgroundColor: "rgba(148, 163, 184, 0.3)", boxShadow: "none" },
                    active: { width: "22px", backgroundColor: "#3b82f6", boxShadow: "0 0 8px #3b82f6" }
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-[2px]" 
                />
              </div>

              {/* ── 2. The Razor-Sharp Card Container with Active Glow ── */}
              <motion.div 
                variants={{
                  idle: { borderColor: "rgba(226, 232, 240, 0.8)", x: 0 },
                  active: { borderColor: "rgba(59, 130, 246, 0.5)", x: 4 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-xl bg-white dark:bg-[#0c1018] border p-5 sm:p-6 shadow-sm dark:shadow-[0_4px_25px_rgba(0,0,0,0.5)] transition-shadow will-change-transform"
              >
                
                {/* Top Row: Degree & Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 font-semibold border border-blue-200 dark:border-blue-500/20">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.05] px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/10 shrink-0 self-start sm:self-auto">
                    <Calendar size={12} className="text-blue-600 dark:text-blue-400" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 font-sans">
                    {edu.institution}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20" />
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <MapPin size={11} />
                    {edu.location}
                  </span>

                  {edu.isCurrent ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2 py-0.2 rounded-full border border-blue-200 dark:border-blue-500/20 ml-auto sm:ml-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      Current Cohort
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.2 rounded-full border border-emerald-200 dark:border-emerald-500/20 ml-auto sm:ml-0">
                      <CheckCircle2 size={10} />
                      {edu.grade}
                    </span>
                  )}
                </div>

                {/* Specialization Highlight */}
                <div className="text-xs font-mono text-slate-800 dark:text-slate-300 bg-slate-50 dark:bg-white/[0.02] p-2.5 rounded-lg border border-slate-200/80 dark:border-white/5 mb-3 font-medium">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold mr-1.5">Specialization:</span>
                  {edu.specialization}
                </div>

                {/* Concise Impact Description */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans mb-4">
                  {edu.details}
                </p>

                {/* Tags Pill Row */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                  {edu.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.04] px-2 py-0.5 rounded-md border border-slate-200 dark:border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
