import React, { useState } from 'react';
import { ExternalLink, Award, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
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
    title: "Data Visualisation: Empowering Business Insights",
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
      className="py-20 md:py-24 bg-white dark:bg-[#08090d] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative"
    >
      {/* Ambient Radial Lighting - Hardware accelerated & Clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 translate-x-1/3 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold font-mono tracking-wide mb-3">
            <Award size={13} strokeWidth={1.8} />
            <span>INDUSTRY ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-slate-900 dark:text-white mb-3">
            Recognitions &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-sans">
            Scroll down to inspect verified credentials stacked one after another. Scroll up to peel them away.
          </p>
        </div>

        {/* ── Sticky Full-Cover Stacking Cards (Each certificate cleanly overlays the previous) ── */}
        <div className="relative pt-2 pb-20 max-w-4xl mx-auto">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="sticky top-24 sm:top-28 will-change-transform mb-12 sm:mb-16"
              style={{
                zIndex: idx + 1,
              }}
            >
              <div className="relative rounded-2xl bg-white dark:bg-[#0c1018] border border-slate-200/95 dark:border-white/10 p-6 sm:p-7 shadow-xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.85)] hover:border-blue-500/40 transition-colors min-h-[170px]">
                
                {/* Top Corner Meta Tab */}
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-white/5 pb-2.5">
                  <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <span>0{idx + 1}</span>
                    <span className="text-slate-300 dark:text-white/20">//</span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">OFFICIAL CREDENTIAL</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-white/30">
                    CREDENTIAL {idx + 1} / {certificates.length}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  {/* Logo + Details */}
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 p-2.5 shadow-xs flex items-center justify-center overflow-hidden">
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
                      <h3 className="text-base sm:text-lg font-bold font-sans text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2.5 mt-1.5 flex-wrap">
                        <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          {cert.company}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20" />
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-500/20">
                          <CheckCircle2 size={11} /> Verified Certificate
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Verify Action Button */}
                  <div className="shrink-0 self-start sm:self-auto">
                    <button
                      onClick={() => setSelected(cert.link)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-500/20 cursor-pointer whitespace-nowrap"
                    >
                      <span>Verify Credential</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
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
