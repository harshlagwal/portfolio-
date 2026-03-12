import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin, ExternalLink, Globe } from 'lucide-react';

import CertificateModal from './CertificateModal';

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const experiences = [
    {
      role: "AI / ML Intern",
      company: "Upto Skills",
      duration: "Present",
      type: "Remote",
      logo: "https://i.postimg.cc/9MC1Vk0Y/upto-skill.jpg",
      description: "Working on cutting-edge AI/ML solutions, implementing advanced algorithms and fine-tuning models for real-world applications."
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
    <section id="experience" className="py-16 md:py-20 bg-white dark:bg-[#0b0f1a] transition-colors duration-500 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-vibrant-blue/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none transition-colors duration-500" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vibrant-blue/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold mb-5 font-display text-gray-900 dark:text-white tracking-tight transition-colors duration-500"
          >
            Professional <span className="text-vibrant-blue">Timeline</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans text-lg leading-relaxed transition-colors duration-500">
            A chronological journey through my professional growth and technical contributions in the field of AI.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700 -translate-x-1/2 transition-colors duration-500" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, idx) => (
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
                    className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 md:p-8 rounded-3xl hover:border-vibrant-blue/30 transition-all duration-500 group shadow-md"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-vibrant-blue/10 dark:bg-vibrant-blue/20 text-vibrant-blue text-[9px] md:text-[10px] font-bold font-mono rounded-full uppercase tracking-wider transition-colors">
                        <Calendar size={10} /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-[9px] md:text-[10px] font-bold font-sans uppercase tracking-widest transition-colors duration-500">
                         <Globe size={10} /> {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                       <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-200 dark:border-gray-700 p-1 bg-white dark:bg-[#0b0f1a] shadow-md shrink-0 overflow-hidden transition-all duration-500 group-hover:border-vibrant-blue/50">
                          <img 
                            src={exp.logo} 
                            alt={exp.company} 
                            className="w-full h-full rounded-full object-cover"
                            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=random&color=fff`; }}
                          />
                       </div>
                       <div>
                          <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white font-display tracking-tight group-hover:text-vibrant-blue transition-colors duration-500">
                            {exp.role}
                          </h3>
                          <p className="text-[11px] md:text-sm font-semibold text-gray-600 dark:text-gray-400 font-display tracking-wide uppercase transition-colors duration-500">
                            {exp.company}
                          </p>
                       </div>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-sans transition-colors duration-500 mb-4 md:mb-6">
                      {exp.description}
                    </p>
                    
                    {exp.certificate && (
                      <div className="flex justify-end">
                        <button 
                          onClick={() => setSelectedCertificate(exp.certificate)}
                          className="group/cert inline-flex items-center gap-1.5 text-[10px] md:text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-vibrant-blue dark:hover:text-vibrant-blue transition-colors duration-300 relative font-sans"
                        >
                          View Certificate <ExternalLink size={10} className="group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform" />
                          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-vibrant-blue transition-all duration-300 group-hover/cert:w-full"></span>
                        </button>
                      </div>
                    )}
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
