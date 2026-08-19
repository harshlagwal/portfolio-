import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import CertificateModal from './CertificateModal';

const certificates = [
  {
    title: "Build with AI Mohali Bootcamp",
    company: "Google & Hack2Skills",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://drive.google.com/file/d/1atFwqxAHDX24JzzekEqOFNUnUJTGA2aw/view?usp=drive_link",
  },
  {
    title: "Model Context Protocol Certificate",
    company: "Anthropic",
    logo: "https://i.postimg.cc/hG7JzcyH/Anthropic-Logo-PNG-Vector-(SVG)-Free-Download.jpg",
    link: "https://drive.google.com/file/d/1-vLv3rkLdm5cTH7fReVC0eJYZ9X9XrBw/view?usp=drivesdk",
  },
  {
    title: "Google For Startups Certificate",
    company: "Google & Scalar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://drive.google.com/file/d/1soVOoJWsWXyNXMqSV7qYnGn2Wi1FiXEU/view?usp=drivesdk",
  },
  {
    title: "ChatGPT for Everyday Certificate",
    company: "OpenAI / ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    link: "https://drive.google.com/file/d/1QtKoyZt15OQdXYCov7lMH82fk-1yBT6E/view?usp=drivesdk",
  },
  {
    title: "Google Workshop Certificate",
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://drive.google.com/file/d/1jm8SMC_guUU2T7Q9oRx5or9m9up8K5cl/view?usp=drivesdk",
  },
  {
    title: "AI & ML for Geodata Analysis Certificate",
    company: "ISRO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg",
    link: "https://drive.google.com/file/d/1RVIpwaa5oVoHaIYE8S4MA1XCfH9Ov4NY/view?usp=drivesdk",
  },
  {
    title: "Generative AI Certificate",
    company: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg",
    link: "https://drive.google.com/file/d/1SrmjS-cTVHlIrb7uKtRRmyfqd4EfYhq0/view?usp=drivesdk",
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    company: "TATA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    link: "https://drive.google.com/file/d/1XWAbgsq4b2I5ZTERwjL01xqNXDNT2Zfs/view?usp=drivesdk",
  },
];

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certifications"
      className="py-16 md:py-20 bg-gray-50/50 dark:bg-[#060913] transition-colors duration-500 relative"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200/60 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold font-mono tracking-wide mb-3">
            <Award size={13} />
            <span>INDUSTRY ACCREDITATIONS</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 dark:text-white tracking-tight mb-3"
          >
            Recognitions &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">Certifications</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Validated technical expertise from globally recognized organizations.
          </p>
        </div>

        {/* Compact Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="flex flex-col"
            >
              <div
                className="h-full group flex items-center justify-between gap-4
                           bg-white dark:bg-[#0c1222]
                           border border-gray-200/80 dark:border-white/10
                           rounded-2xl p-4 sm:p-4.5
                           hover:border-blue-500/40 dark:hover:border-cyan-500/40
                           hover:shadow-sm
                           transition-all duration-300"
              >
                {/* Logo + Text */}
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* High contrast pure white badge container so all logos pop clearly in dark mode */}
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-200/90 p-2 shadow-xs flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={cert.logo}
                      alt={cert.company}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cert.company)}&background=2563eb&color=fff&size=64&bold=true`;
                      }}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold font-display text-gray-900 dark:text-white
                                   tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-cyan-400
                                   transition-colors duration-200 truncate">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <CheckCircle2 size={11} className="text-emerald-500 shrink-0" />
                      <p className="text-[11px] font-semibold font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider truncate">
                        {cert.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* View Action Button */}
                <div className="shrink-0">
                  <button
                    onClick={() => setSelected(cert.link)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                               bg-gray-50 dark:bg-white/[0.06]
                               border border-gray-200/80 dark:border-white/10
                               text-gray-700 dark:text-gray-200
                               hover:bg-blue-50 dark:hover:bg-cyan-500/10 hover:text-blue-600 dark:hover:text-cyan-400
                               hover:border-blue-300 dark:hover:border-cyan-500/30 transition-all duration-200 whitespace-nowrap"
                  >
                    View
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <CertificateModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        certificateLink={selected}
      />
    </section>
  );
};

export default Certifications;



