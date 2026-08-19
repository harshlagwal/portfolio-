import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ExternalLink, Globe } from 'lucide-react';
import CertificateModal from './CertificateModal';

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const experiences = [
    {
      role: "AI / ML Intern",
      company: "Upto Skills",
      duration: "Jan 10, 2026 – Apr 10, 2026",
      type: "Remote",
      logo: "https://i.postimg.cc/9MC1Vk0Y/upto-skill.jpg",
      description: "Working on cutting-edge AI/ML solutions, implementing advanced algorithms and fine-tuning models for real-world applications.",
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
      description: "Represented the Entrepreneurship Development Cell of IIT Delhi, fostering innovation and technical culture among students.",
      certificate: "https://drive.google.com/file/d/1tIkMYWmhuA2pzWlGqaduzdmu5AwsJGu8/view?usp=drivesdk"
    },
    {
        role: "Generative AI Engineer",
        company: "SpectoV",
        duration: "Jul 2025 – Sep 2025",
        type: "Remote",
        logo: "https://i.postimg.cc/PrgWT7FZ/specto-V1.jpg",
        description: "Specialized in Generative AI workflows, developing LLM-based solutions and optimizing prompt engineering for complex tasks."
    },
    {
      role: "AI Azure Intern",
      company: "Edunet Foundation",
      duration: "Jun 2025 – Jul 2025",
      type: "Remote",
      logo: "https://i.postimg.cc/XqN2KP0r/edunet-foundation.jpg",
      description: "Leveraged Microsoft Azure AI services to build scalable cloud-based machine learning models and cognitive solutions.",
      certificate: "https://drive.google.com/file/d/1RptrUewLOq4PEjWw21tfNbmCULuM5-oZ/view?usp=drivesdk"
    },
    {
      role: "Artificial Intelligence and Machine Learning Intern",
      company: "Edunet Foundation",
      duration: "Jun 2025 – Jul 2025 (2 months)",
      type: "Remote",
      logo: "https://i.postimg.cc/XqN2KP0r/edunet-foundation.jpg",
      description: "Focused on core AI/ML principles, data preprocessing, and training predictive models using industry-standard frameworks.",
      certificate: "https://drive.google.com/file/d/1HSbd9Xg9fbVCI8o0TVt1guDC4cQJL2wf/view?usp=drivesdk"
    },
    {
      role: "AI Transformative Learning Intern",
      company: "Edunet Foundation",
      duration: "Jan 2025 – Mar 2025",
      type: "Remote",
      logo: "https://i.postimg.cc/XqN2KP0r/edunet-foundation.jpg",
      description: "Explored the transformative potential of AI in education, developing intelligent learning tools and methodologies.",
      certificate: "https://drive.google.com/file/d/1scilZSa8bJNOJCDlpnINwLbfBrjUsjZL/view?usp=drivesdk"
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-white dark:bg-[#060913] transition-colors duration-500 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200/60 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold font-mono tracking-wide mb-3">
            <Briefcase size={13} />
            <span>CAREER MILESTONES</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 dark:text-white tracking-tight mb-3"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">Timeline</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Industrial internships and engineering roles in AI/ML & Generative AI.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/10 -translate-x-1/2" />

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Node Indicator */}
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-[#060913] border-[3px] ${idx === 0 ? 'border-emerald-500 shadow-[0_0_10px_#10b981]' : 'border-blue-600 dark:border-cyan-400'} z-20 shadow-xs flex items-center justify-center`}>
                  {idx === 0 && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[46%] ml-12 md:ml-0">
                  <div className="bg-white dark:bg-[#0c1222] border border-gray-200/80 dark:border-white/10 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-0.5 hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`flex items-center gap-1.5 px-2.5 py-0.5 ${idx === 0 ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-500/20' : 'bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-300 border-blue-200/60 dark:border-cyan-500/20'} text-[11px] font-semibold font-mono rounded-md border`}>
                        <Calendar size={11} /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-[11px] font-medium font-mono">
                         <Globe size={11} /> {exp.type}
                      </span>
                    </div>


                    <div className="flex items-center gap-3.5 mb-3">
                       <div className="w-10 h-10 rounded-xl border border-gray-200/80 dark:border-white/10 p-1 bg-white dark:bg-white/[0.04] shadow-xs shrink-0 overflow-hidden flex items-center justify-center">
                          <img 
                            src={exp.logo} 
                            alt={exp.company} 
                            className="w-full h-full rounded-lg object-contain"
                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=2563eb&color=fff`; }}
                          />
                       </div>
                       <div>
                          <h3 className="text-base font-bold text-gray-900 dark:text-white font-display">
                            {exp.role}
                          </h3>
                          <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400 font-mono tracking-wide">
                            {exp.company}
                          </p>
                       </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap justify-end gap-x-4 gap-y-1.5 pt-3 border-t border-gray-100 dark:border-white/5">
                      {exp.certificate && (
                        <button 
                          onClick={() => setSelectedCertificate(exp.certificate)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline font-mono"
                        >
                          View Certificate <ExternalLink size={11} />
                        </button>
                      )}
                      {exp.certificates && exp.certificates.map((cert, cIdx) => (
                        <button 
                          key={cIdx}
                          onClick={() => setSelectedCertificate(cert.link)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline font-mono"
                        >
                          View {cert.label} <ExternalLink size={11} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-[46%]" />
              </motion.div>
            ))}
          </div>
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
