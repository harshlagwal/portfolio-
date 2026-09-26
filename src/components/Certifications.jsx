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
      className="py-16 md:py-20 bg-white dark:bg-[#131314] transition-colors duration-300 relative"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] dark:bg-[#8ab4f8]/10 border border-[#dadce0] dark:border-[#8ab4f8]/20 text-[#1a73e8] dark:text-[#8ab4f8] text-xs font-medium font-mono tracking-wide mb-3">
            <Award size={14} strokeWidth={1.5} />
            <span>INDUSTRY ACCREDITATIONS</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-medium font-display text-[#202124] dark:text-[#e3e3e3] tracking-tight mb-3"
          >
            Recognitions &amp; <span className="text-[#1a73e8] dark:text-[#8ab4f8]">Certifications</span>
          </motion.h2>
          <p className="text-[#5f6368] dark:text-[#9aa0a6] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Validated technical expertise from globally recognized organizations.
          </p>
        </div>

        {/* Google Antigravity Editorial Certifications List (No Boxed Cards) */}
        <div className="border-y border-[#dadce0] dark:border-[#2e3134] divide-y divide-[#dadce0] dark:divide-[#2e3134]">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="py-4.5 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#f8f9fa]/60 dark:hover:bg-[#1a1b1e]/60 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl transition-colors duration-150"
            >
              {/* Logo + Text */}
              <div className="flex items-center gap-4 min-w-0">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-[#dadce0] dark:border-[#3c4043] p-2 shadow-2xs flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.logo}
                    alt={cert.company}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cert.company)}&background=1a73e8&color=fff&size=64&bold=true`;
                    }}
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-medium font-display text-[#202124] dark:text-[#f1f3f4] tracking-tight group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors truncate">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <CheckCircle2 size={12} strokeWidth={1.5} className="text-[#137333] dark:text-[#81c995] shrink-0" />
                    <span className="text-xs font-mono font-medium text-[#1a73e8] dark:text-[#8ab4f8] uppercase tracking-wider truncate">
                      {cert.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* View Action Pill Button */}
              <div className="shrink-0 flex items-center sm:self-center self-end">
                <button
                  onClick={() => setSelected(cert.link)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-[#f1f3f4] hover:bg-[#e8eaed] dark:bg-[#252629] dark:hover:bg-[#303236] text-[#202124] dark:text-[#f1f3f4] border border-[#dadce0] dark:border-[#3c4043] transition-all duration-150 shadow-2xs hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={12} strokeWidth={1.8} className="text-[#1a73e8] dark:text-[#8ab4f8]" />
                </button>
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



