import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import CertificateModal from './CertificateModal';
import { useTheme } from '../context/ThemeContext';

const certificates = [
  {
    title: "Model Context Protocol Certificate",
    company: "Anthropic",
    logo: "https://i.postimg.cc/hG7JzcyH/Anthropic-Logo-PNG-Vector-(SVG)-Free-Download.jpg",
    link: "https://drive.google.com/file/d/1yFA0V5VbBI9OTmgT3_lJAbOqEx3qkBa0/view?usp=drivesdk",
  },
  {
    title: "Google For Startups Certificate",
    company: "Google & Scalar",
    logo: "https://i.postimg.cc/02krPppm/g-download-(3).jpg",
    link: "https://drive.google.com/file/d/1soVOoJWsWXyNXMqSV7qYnGn2Wi1FiXEU/view?usp=drivesdk",
  },
  {
    title: "ChatGPT for Everyday Certificate",
    company: "OpenAI",
    logo: "https://i.postimg.cc/J41B6w0s/Open-AI-Logo-PNG-Vector-(SVG)-Free-Download.jpg",
    link: "https://drive.google.com/file/d/1QtKoyZt15OQdXYCov7lMH82fk-1yBT6E/view?usp=drivesdk",
  },
  {
    title: "Google Workshop Certificate",
    company: "Google",
    logo: "https://i.postimg.cc/02krPppm/g-download-(3).jpg",
    link: "https://drive.google.com/file/d/1jm8SMC_guUU2T7Q9oRx5or9m9up8K5cl/view?usp=drivesdk",
  },
  {
    title: "AI & ML for Geodata Analysis Certificate",
    company: "ISRO",
    logo: "https://i.postimg.cc/MHwjJNYy/Isro-Logo-Simple-Art-Print-by-Infinity-Studios.jpg",
    link: "https://drive.google.com/file/d/1RVIpwaa5oVoHaIYE8S4MA1XCfH9Ov4NY/view?usp=drivesdk",
  },
  {
    title: "Generative AI Certificate",
    company: "NVIDIA",
    logo: "https://i.postimg.cc/W4b7ZFLs/n-download-(3).jpg",
    link: "https://drive.google.com/file/d/1SrmjS-cTVHlIrb7uKtRRmyfqd4EfYhq0/view?usp=drivesdk",
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    company: "TATA",
    logo: "https://i.postimg.cc/7hv7Kbcq/Download-Tata-logo-vector-Tata-icon-free-vector.jpg",
    link: "https://drive.google.com/file/d/1XWAbgsq4b2I5ZTERwjL01xqNXDNT2Zfs/view?usp=drivesdk",
  },
];

const Certifications = () => {
  const [selected, setSelected] = useState(null);
  const { isDark } = useTheme();

  const logoBg = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)';

  return (
    <section
      id="certifications"
      className="py-16 md:py-20 bg-white dark:bg-[#0b0f1a] transition-colors duration-500 relative overflow-hidden"
    >
      {/* Subtle background glows */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-vibrant-blue/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vibrant-blue/5 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold mb-5 font-display text-gray-900 dark:text-white tracking-tight transition-colors duration-500"
          >
            Recognitions &amp; <span className="text-vibrant-blue">Certifications</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-sans text-lg leading-relaxed transition-colors duration-500">
            Validated expertise through globally recognised organisations.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: 'easeOut' }}
              whileHover={{ y: -3, boxShadow: '0 12px 40px -8px rgba(37,99,235,0.15)' }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4
                         bg-gray-50 dark:bg-gray-800/70
                         border border-gray-200/80 dark:border-gray-700/60
                         rounded-[20px] px-5 py-4 sm:px-6 sm:py-4
                         hover:border-vibrant-blue/40
                         transition-all duration-400 cursor-default"
              style={{
                backdropFilter: 'blur(4px)',
              }}
            >
              {/* ── LEFT: logo + text ─────────────────────────── */}
              <div className="flex items-center gap-4 min-w-0">

                {/* Circular logo container — Matches Experience section style exactly */}
                <div
                  className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-200 dark:border-gray-700 p-1 bg-white dark:bg-[#0b0f1a] shadow-sm overflow-hidden transition-all duration-500 group-hover:border-vibrant-blue/50"
                >
                  <img
                    src={cert.logo}
                    alt={cert.company}
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cert.company)}&background=2563eb&color=fff&size=64&bold=true`;
                    }}
                  />
                </div>

                {/* Title + company */}
                <div className="min-w-0">
                  <h3 className="text-sm md:text-base font-bold font-display text-gray-900 dark:text-white
                                 tracking-tight leading-snug group-hover:text-vibrant-blue
                                 transition-colors duration-300 truncate">
                    {cert.title}
                  </h3>
                  <p className="mt-0.5 text-[10px] font-bold font-mono text-gray-400 dark:text-gray-500
                                uppercase tracking-widest">
                    {cert.company}
                  </p>
                </div>
              </div>

              {/* ── RIGHT: button ─────────────────────────────── */}
              <div className="shrink-0 sm:ml-4">
                <button
                  onClick={() => setSelected(cert.link)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold font-sans
                             bg-white dark:bg-[#0b0f1a]
                             border border-gray-200 dark:border-gray-700
                             text-gray-600 dark:text-gray-400
                             hover:border-vibrant-blue hover:text-vibrant-blue dark:hover:text-vibrant-blue
                             hover:shadow-sm transition-all duration-300 group/btn whitespace-nowrap"
                >
                  View Certificate
                  <ExternalLink
                    size={12}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reuse existing modal */}
      <CertificateModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        certificateLink={selected}
      />
    </section>
  );
};

export default Certifications;
