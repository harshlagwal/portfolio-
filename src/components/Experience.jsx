import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Calendar, Briefcase, ExternalLink, Globe, CheckCircle2, Sparkles } from 'lucide-react';
import CertificateModal from './CertificateModal';

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
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

  const experiences = [
    {
      role: "AI / ML Intern",
      company: "Upto Skills",
      duration: "Jan 2026 – Apr 2026",
      type: "Remote",
      logo: "https://i.postimg.cc/9MC1Vk0Y/upto-skill.jpg",
      description: "Architecting deep learning algorithms, fine-tuning neural networks, and optimizing predictive ML pipelines for high-throughput enterprise deployments.",
      certificates: [
        { label: "Experience Letter", link: "https://drive.google.com/file/d/16dbN9y3l5rsR2Y70AeaLxqIT20_tEKma/view?usp=drive_link" },
        { label: "Certificate", link: "https://drive.google.com/file/d/1nlus1dHLJ44rN04BLj5MgpA2lEaH6mp6/view?usp=drive_link" }
      ]
    },
    {
      role: "Campus Ambassador",
      company: "eDC IIT Delhi",
      duration: "Dec 2025 – Feb 2026",
      type: "Remote",
      logo: "https://i.postimg.cc/zVdWrxc9/edc-iit-delhi.jpg", 
      description: "Represented the Entrepreneurship Development Cell of IIT Delhi, organizing high-impact AI hackathons and technical mentorship for student engineering cohorts.",
      certificate: "https://drive.google.com/file/d/1tIkMYWmhuA2pzWlGqaduzdmu5AwsJGu8/view?usp=drivesdk"
    },
    {
      role: "Generative AI Engineer",
      company: "SpectoV",
      duration: "Jul 2025 – Sep 2025",
      type: "Remote",
      logo: "https://i.postimg.cc/PrgWT7FZ/specto-V1.jpg",
      description: "Engineered state-of-the-art Generative AI workflows, implementing custom LLM orchestration, structured output prompt architectures, and context-window optimization.",
      certificate: "https://drive.google.com/file/d/1HqxEmc6-nWhCpVRRHlxMlusENMk1DwtW/view?usp=sharing"
    },
    {
      role: "AI Azure Intern",
      company: "Edunet Foundation",
      duration: "Jun 2025 – Jul 2025",
      type: "Remote",
      logo: "https://i.postimg.cc/XqN2KP0r/edunet-foundation.jpg",
      description: "Deployed scalable cloud-native machine learning models and automated computer vision REST endpoints using Microsoft Azure ML Studio.",
      certificate: "https://drive.google.com/file/d/1RptrUewLOq4PEjWw21tfNbmCULuM5-oZ/view?usp=drivesdk"
    },
    {
      role: "Artificial Intelligence & ML Intern",
      company: "Edunet Foundation",
      duration: "Jun 2025 – Jul 2025 (2 mos)",
      type: "Remote",
      logo: "https://i.postimg.cc/XqN2KP0r/edunet-foundation.jpg",
      description: "Implemented machine learning algorithms, automated feature engineering, and cross-validation pipelines with scikit-learn and TensorFlow.",
      certificate: "https://drive.google.com/file/d/1HSbd9Xg9fbVCI8o0TVt1guDC4cQJL2wf/view?usp=drivesdk"
    },
    {
      role: "AI Transformative Learning Intern",
      company: "Edunet Foundation",
      duration: "Jan 2025 – Mar 2025",
      type: "Remote",
      logo: "https://i.postimg.cc/XqN2KP0r/edunet-foundation.jpg",
      description: "Engineered intelligent NLP assessment models and automated query resolution agents to enhance student learning retention.",
      certificate: "https://drive.google.com/file/d/1scilZSa8bJNOJCDlpnINwLbfBrjUsjZL/view?usp=drivesdk"
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-24 bg-white dark:bg-[#08090d] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle Ambient Background Glow - Hardware accelerated & Clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 -translate-x-1/3 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-1/4 right-0 translate-x-1/3 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold font-mono tracking-wide mb-3">
              <Briefcase size={13} strokeWidth={1.8} />
              <span>CAREER & INDUSTRY MILESTONES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-slate-900 dark:text-white">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Experience</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-xs sm:text-sm leading-relaxed font-sans">
            Hands-on machine learning engineering, enterprise Generative AI workflows, and certified industrial roles.
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

          {experiences.map((exp, idx) => (
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
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-full h-full object-contain rounded-md"
                    onError={(e) => { 
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=2563eb&color=fff`; 
                    }}
                  />
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
                
                {/* Top Row: Role, Duration & Tags */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 font-semibold border border-blue-200 dark:border-blue-500/20">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Duration Pill */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.05] px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/10 shrink-0 self-start sm:self-auto">
                    <Calendar size={12} className="text-blue-600 dark:text-blue-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Company & Type */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 font-sans">
                    {exp.company}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20" />
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Globe size={11} />
                    {exp.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.2 rounded-full border border-emerald-200 dark:border-emerald-500/20 ml-auto sm:ml-0">
                    <CheckCircle2 size={10} />
                    Verified
                  </span>
                </div>

                {/* Concise Impact Description */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans mb-4">
                  {exp.description}
                </p>

                {/* Action Buttons for Verified Certificates */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
                  {exp.certificate && (
                    <button 
                      onClick={() => setSelectedCertificate(exp.certificate)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-blue-50 dark:bg-white/[0.05] dark:hover:bg-blue-500/15 text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300 border border-slate-200 dark:border-white/10 hover:border-blue-400 transition-all cursor-pointer shadow-xs"
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={12} />
                    </button>
                  )}
                  {exp.certificates && exp.certificates.map((cert, cIdx) => (
                    <button 
                      key={cIdx}
                      onClick={() => setSelectedCertificate(cert.link)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-blue-50 dark:bg-white/[0.05] dark:hover:bg-blue-500/15 text-slate-800 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300 border border-slate-200 dark:border-white/10 hover:border-blue-400 transition-all cursor-pointer shadow-xs"
                    >
                      <span>View {cert.label}</span>
                      <ExternalLink size={12} />
                    </button>
                  ))}
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      <CertificateModal 
        isOpen={!!selectedCertificate} 
        onClose={() => setSelectedCertificate(null)} 
        certificateLink={selectedCertificate} 
      />
    </section>
  );
};

export default Experience;
