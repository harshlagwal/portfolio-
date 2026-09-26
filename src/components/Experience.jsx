import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ExternalLink, Globe, CheckCircle2, Sparkles } from 'lucide-react';
import CertificateModal from './CertificateModal';

const Experience = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const experiences = [
    {
      role: "AI / ML Intern",
      company: "Upto Skills",
      duration: "Jan 10, 2026 – Apr 10, 2026",
      type: "Remote",
      accentColor: "#4285f4", // Google Blue
      logo: "https://i.postimg.cc/9MC1Vk0Y/upto-skill.jpg",
      description: "Architecting cutting-edge AI/ML systems, implementing advanced deep learning algorithms, fine-tuning neural networks, and optimizing predictive pipelines for enterprise deployment.",
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
      accentColor: "#ea4335", // Google Red
      logo: "https://i.postimg.cc/zVdWrxc9/edc-iit-delhi.jpg", 
      description: "Represented the Entrepreneurship Development Cell of IIT Delhi, driving technical hackathons, entrepreneurship mentorship, and AI innovation culture among collegiate engineering cohorts.",
      certificate: "https://drive.google.com/file/d/1tIkMYWmhuA2pzWlGqaduzdmu5AwsJGu8/view?usp=drivesdk"
    },
    {
      role: "Generative AI Engineer",
      company: "SpectoV",
      duration: "Jul 2025 – Sep 2025",
      type: "Remote",
      accentColor: "#fbbc04", // Google Yellow
      logo: "https://i.postimg.cc/PrgWT7FZ/specto-V1.jpg",
      description: "Engineered state-of-the-art Generative AI workflows, implementing custom LLM orchestration, structured output prompt architectures, and context-window optimization for high-throughput AI agents.",
      certificate: "https://drive.google.com/file/d/1HqxEmc6-nWhCpVRRHlxMlusENMk1DwtW/view?usp=sharing"
    },
    {
      role: "AI Azure Intern",
      company: "Edunet Foundation",
      duration: "Jun 2025 – Jul 2025",
      type: "Remote",
      accentColor: "#34a853", // Google Green
      logo: "https://i.postimg.cc/XqN2KP0r/edunet-foundation.jpg",
      description: "Leveraged Microsoft Azure Cognitive Services and Azure ML Studio to deploy scalable cloud-native machine learning models, REST endpoints, and automated computer vision pipelines.",
      certificate: "https://drive.google.com/file/d/1RptrUewLOq4PEjWw21tfNbmCULuM5-oZ/view?usp=drivesdk"
    },
    {
      role: "Artificial Intelligence & ML Intern",
      company: "Edunet Foundation",
      duration: "Jun 2025 – Jul 2025 (2 mos)",
      type: "Remote",
      accentColor: "#4285f4", // Google Blue
      logo: "https://i.postimg.cc/XqN2KP0r/edunet-foundation.jpg",
      description: "Mastered fundamental machine learning algorithms, advanced feature engineering, cross-validation architectures, and automated model evaluation using scikit-learn, TensorFlow, and Pandas.",
      certificate: "https://drive.google.com/file/d/1HSbd9Xg9fbVCI8o0TVt1guDC4cQJL2wf/view?usp=drivesdk"
    },
    {
      role: "AI Transformative Learning Intern",
      company: "Edunet Foundation",
      duration: "Jan 2025 – Mar 2025",
      type: "Remote",
      accentColor: "#a142f4", // Purple
      logo: "https://i.postimg.cc/XqN2KP0r/edunet-foundation.jpg",
      description: "Developed adaptive AI learning methodologies and intelligent NLP assessment tools to augment educational retention and automate real-time query resolution.",
      certificate: "https://drive.google.com/file/d/1scilZSa8bJNOJCDlpnINwLbfBrjUsjZL/view?usp=drivesdk"
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-white dark:bg-[#131314] transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle Ambient Background RGB Aura */}
      <div className="absolute top-1/4 left-[-150px] w-96 h-96 rounded-full bg-gradient-to-br from-[#4285f4]/5 via-[#ea4335]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-150px] w-96 h-96 rounded-full bg-gradient-to-tl from-[#34a853]/5 via-[#fbbc04]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] dark:bg-[#8ab4f8]/10 border border-[#dadce0] dark:border-[#8ab4f8]/20 text-[#1a73e8] dark:text-[#8ab4f8] text-xs font-medium font-mono tracking-wide mb-3">
              <Briefcase size={14} strokeWidth={1.5} />
              <span>CAREER MILESTONES & WORK HISTORY</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-medium font-display text-[#202124] dark:text-[#f1f3f4] tracking-tight"
            >
              Professional <span className="text-[#1a73e8] dark:text-[#8ab4f8]">Experience</span>
            </motion.h2>
          </div>
          <p className="text-[#5f6368] dark:text-[#9aa0a6] max-w-md text-xs sm:text-sm leading-relaxed">
            Hands-on machine learning engineering, enterprise Generative AI workflows, and certified industrial roles.
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

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: idx * 0.04 }}
              className="relative py-8 md:py-10 border-b border-[#dadce0] dark:border-[#2e3134] grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start hover:bg-[#f8f9fa]/60 dark:hover:bg-[#1a1b1e]/60 px-4 -mx-4 rounded-2xl transition-all duration-150 group"
            >

              {/* Col 1: Timeline & Meta (3 cols) */}
              <div className="md:col-span-3 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span 
                    className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md border"
                    style={{ 
                      color: exp.accentColor, 
                      borderColor: `${exp.accentColor}30`,
                      backgroundColor: `${exp.accentColor}10` 
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#dadce0] dark:bg-[#3c4043]" />
                  <span className="text-xs font-mono font-medium text-[#202124] dark:text-[#e3e3e3] flex items-center gap-1.5">
                    <Calendar size={12} strokeWidth={1.5} className="text-[#5f6368] dark:text-[#9aa0a6]" />
                    {exp.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f1f3f4] dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] text-[11px] font-mono text-[#5f6368] dark:text-[#9aa0a6]">
                    <Globe size={10} strokeWidth={1.5} />
                    {exp.type}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e8f0fe] dark:bg-[#8ab4f8]/10 border border-[#dadce0] dark:border-[#8ab4f8]/20 text-[11px] font-mono font-medium text-[#1a73e8] dark:text-[#8ab4f8]">
                    Completed
                  </span>
                </div>
              </div>

              {/* Col 2: Role, Company & Deliverables (6 cols) */}
              <div className="md:col-span-6 flex items-start gap-4">
                {/* Company Logo in sleek square */}
                <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-[#dadce0] dark:border-[#3c4043] p-1.5 shadow-2xs overflow-hidden flex items-center justify-center mt-0.5 group-hover:border-[#1a73e8] dark:group-hover:border-[#8ab4f8] transition-colors">
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-full h-full rounded-lg object-contain"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=1a73e8&color=fff`; }}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-medium text-[#202124] dark:text-[#f1f3f4] font-display tracking-tight group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5 mb-3">
                    <span className="text-xs font-mono font-medium text-[#1a73e8] dark:text-[#8ab4f8]">
                      {exp.company}
                    </span>
                    <CheckCircle2 size={12} strokeWidth={1.8} className="text-[#137333] dark:text-[#81c995]" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Col 3: Verified Proof / Certificate Actions (3 cols) */}
              <div className="md:col-span-3 flex md:flex-col md:items-end justify-start gap-2 pt-2 md:pt-0">
                {exp.certificate && (
                  <button 
                    onClick={() => setSelectedCertificate(exp.certificate)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#f1f3f4] hover:bg-[#e8eaed] dark:bg-[#252629] dark:hover:bg-[#303236] text-[#202124] dark:text-[#f1f3f4] border border-[#dadce0] dark:border-[#3c4043] transition-all shadow-2xs hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={12} strokeWidth={1.8} className="text-[#1a73e8] dark:text-[#8ab4f8]" />
                  </button>
                )}
                {exp.certificates && exp.certificates.map((cert, cIdx) => (
                  <button 
                    key={cIdx}
                    onClick={() => setSelectedCertificate(cert.link)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#f1f3f4] hover:bg-[#e8eaed] dark:bg-[#252629] dark:hover:bg-[#303236] text-[#202124] dark:text-[#f1f3f4] border border-[#dadce0] dark:border-[#3c4043] transition-all shadow-2xs hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    <span>View {cert.label}</span>
                    <ExternalLink size={12} strokeWidth={1.8} className="text-[#1a73e8] dark:text-[#8ab4f8]" />
                  </button>
                ))}
              </div>

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
