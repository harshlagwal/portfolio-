import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export const Certifications = ({ onOpenCertificate }) => {
  const certificates = [
    {
      title: "Build with AI Bootcamp",
      issuer: "Google & Hack2Skills",
      year: "2025",
      logo: "/logos/google-developers.svg",
      link: "https://drive.google.com/file/d/1atFwqxAHDX24JzzekEqOFNUnUJTGA2aw/view?usp=drive_link",
      badge: "Google Verified"
    },
    {
      title: "Model Context Protocol",
      issuer: "Anthropic",
      year: "2025",
      logo: "/logos/anthropic.png",
      link: "https://drive.google.com/file/d/1-vLv3rkLdm5cTH7fReVC0eJYZ9X9XrBw/view?usp=drivesdk",
      badge: "AI Infrastructure"
    },
    {
      title: "Google For Startups",
      issuer: "Google & Scaler",
      year: "2025",
      logo: "/logos/google-developers.svg",
      link: "https://drive.google.com/file/d/1soVOoJWsWXyNXMqSV7qYnGn2Wi1FiXEU/view?usp=drivesdk",
      badge: "Product & Scaling"
    },
    {
      title: "ChatGPT for Everyday & Prompting",
      issuer: "OpenAI / ChatGPT",
      year: "2025",
      logo: "/logos/chatgpt.svg",
      link: "https://drive.google.com/file/d/1QtKoyZt15OQdXYCov7lMH82fk-1yBT6E/view?usp=drivesdk",
      badge: "LLM Prompting"
    },
    {
      title: "AI Workshop Series",
      issuer: "Google Developers",
      year: "2025",
      logo: "/logos/google-developers.svg",
      link: "https://drive.google.com/file/d/1jm8SMC_guUU2T7Q9oRx5or9m9up8K5cl/view?usp=drivesdk",
      badge: "Google Cloud AI"
    },
    {
      title: "Geodata Analysis & Remote Sensing",
      issuer: "ISRO / IIRS",
      year: "2025",
      logo: "/logos/isro.png",
      link: "https://drive.google.com/file/d/1RVIpwaa5oVoHaIYE8S4MA1XCfH9Ov4NY/view?usp=drivesdk",
      badge: "Computer Vision"
    },
    {
      title: "Generative AI Foundations",
      issuer: "NVIDIA Deep Learning Institute",
      year: "2025",
      logo: "/logos/nvidia.svg",
      link: "https://drive.google.com/file/d/1SrmjS-cTVHlIrb7uKtRRmyfqd4EfYhq0/view?usp=drivesdk",
      badge: "Deep Learning"
    },
    {
      title: "Data Visualisation for Decision Insights",
      issuer: "TATA",
      year: "2025",
      logo: "/logos/tata.png",
      link: "https://drive.google.com/file/d/1XWAbgsq4b2I5ZTERwjL01xqNXDNT2Zfs/view?usp=drivesdk",
      badge: "Decision Analytics"
    }
  ];

  return (
    <section 
      id="certifications" 
      className="py-20 md:py-24 bg-[#f0f2f5] dark:bg-[#090a0d] text-[#0d0f12] dark:text-[#ffffff] border-t border-[#cbd0d9] dark:border-[#262933] transition-colors duration-250"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] text-xs font-mono text-[#494f5c] dark:text-[#9fa6b6] mb-3 font-semibold">
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0d0f12] dark:text-white font-display mb-4">
            Certifications &amp; technical honors.
          </h2>
          <p className="text-base text-[#494f5c] dark:text-[#9fa6b6] leading-relaxed">
            Verified accreditations across deep learning, prompt engineering, computer vision, and cloud intelligence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between group shadow-xs hover:border-[#9fa6b6] dark:hover:border-[#3b3f4d] transition-all"
            >
              <div>
                {/* Top Row: Logo + Badge in one clean line (no nested mini-cards) */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="h-8 flex items-center shrink-0">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuer} 
                      className={`h-7 w-auto max-w-[90px] object-contain filter contrast-110 ${cert.logo.includes('chatgpt') ? 'dark:invert' : ''}`}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#494f5c] dark:text-[#9fa6b6] uppercase tracking-wider">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0d0f12] dark:text-white font-display mb-1 group-hover:text-blue-600 dark:group-hover:text-[#8ab4f8] transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <div className="text-xs text-[#494f5c] dark:text-[#9fa6b6] font-medium mb-4">
                  {cert.issuer}
                </div>
              </div>

              {/* Bottom Row: Year + Preview in one clean line */}
              <div className="pt-3 border-t border-[#cbd0d9] dark:border-[#262933] flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#494f5c] dark:text-[#9fa6b6]">
                  {cert.year}
                </span>

                <button
                  type="button"
                  onClick={() => onOpenCertificate ? onOpenCertificate(cert.link) : window.open(cert.link, '_blank')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d0f12] dark:text-white hover:text-blue-600 dark:hover:text-[#8ab4f8] transition-colors cursor-pointer"
                >
                  <span>Preview</span>
                  <ExternalLink size={12} strokeWidth={1.8} />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
