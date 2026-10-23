import React from 'react';
import { Award, Briefcase, FolderGit2, GraduationCap } from 'lucide-react';
import iitPatnaSeal from '/logos/iit-patna.png';

export const ProofRibbon = () => {
  const verifiedStats = [
    {
      icon: GraduationCap,
      label: "IIT Patna",
      value: "MBA Scholar",
      detail: "Decision Science (2026–28)"
    },
    {
      icon: Briefcase,
      label: "Work Experience",
      value: "4+ Roles",
      detail: "AI/ML Industry Internships"
    },
    {
      icon: FolderGit2,
      label: "Engineering",
      value: "8+ Projects",
      detail: "Production & Open Source"
    },
    {
      icon: Award,
      label: "Credentials",
      value: "8+ Verified",
      detail: "Google, NVIDIA, ISRO & more"
    }
  ];

  // Authentic Brand Logos + Names of organizations Harsh actually studied / worked / verified with
  const marqueeRow1 = [
    {
      name: "IIT Patna",
      logo: (
        <img 
          src={iitPatnaSeal} 
          alt="IIT Patna" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    },
    {
      name: "Rayat Bahra University",
      logo: (
        <img 
          src="/logos/rayat-bahra-seal.webp" 
          alt="Rayat Bahra University" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    },
    {
      name: "Google",
      logo: (
        <svg viewBox="0 0 24 24" className="w-full h-full shrink-0">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      )
    },
    {
      name: "Anthropic",
      logo: (
        <img 
          src="/logos/anthropic.png" 
          alt="Anthropic" 
          className="w-full h-full object-contain rounded-xs shrink-0" 
        />
      )
    },
    {
      name: "NVIDIA",
      logo: (
        <img 
          src="/logos/nvidia.svg" 
          alt="NVIDIA" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    },
    {
      name: "ISRO",
      logo: (
        <img 
          src="/logos/isro.png" 
          alt="ISRO" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    },
    {
      name: "SpectoV",
      logo: (
        <img 
          src="/logos/spectov.svg" 
          alt="SpectoV" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    }
  ];

  const marqueeRow2 = [
    {
      name: "ChatGPT",
      logo: (
        <img 
          src="/logos/chatgpt.svg" 
          alt="ChatGPT" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    },
    {
      name: "Microsoft Azure",
      logo: (
        <img 
          src="/logos/microsoft-azure.svg" 
          alt="Microsoft Azure" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    },
    {
      name: "TATA",
      logo: (
        <img 
          src="/logos/tata.png" 
          alt="TATA" 
          className="w-full h-full object-contain rounded-xs shrink-0" 
        />
      )
    },
    {
      name: "Scaler",
      logo: (
        <img 
          src="/logos/scaler.svg" 
          alt="Scaler" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    },
    {
      name: "Upto Skills",
      logo: (
        <img 
          src="/logos/upto-skills.webp" 
          alt="Upto Skills" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    },
    {
      name: "Hack2Skills",
      logo: (
        <img 
          src="/logos/hack2skills.svg" 
          alt="Hack2Skills" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    },
    {
      name: "Edunet Foundation",
      logo: (
        <img 
          src="/logos/edunet-foundation.png" 
          alt="Edunet Foundation" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    },
    {
      name: "IIT Delhi eDC",
      logo: (
        <img 
          src="/logos/edc-iit-delhi.png" 
          alt="eDC IIT Delhi" 
          className="w-full h-full object-contain shrink-0" 
        />
      )
    }
  ];

  // Double list for 100% seamless infinite scroll loop
  const infiniteRow1 = [...marqueeRow1, ...marqueeRow1];
  const infiniteRow2 = [...marqueeRow2, ...marqueeRow2];

  return (
    <section className="py-8 md:py-10 bg-[#e7eaf0] dark:bg-[#0c0d10] border-y border-[#cbd0d9] dark:border-[#262933] transition-colors duration-250 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Verified Metric Highlights (4 Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-8">
          {verifiedStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="bg-[#dadde3] dark:bg-[#171920] border border-[#cbd0d9] dark:border-[#262933] rounded-[22px] p-4 sm:p-5 transition-all duration-200 hover:border-[#9fa6b6] dark:hover:border-[#3b3f4d] shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-white dark:bg-[#20232d] border border-[#cbd0d9] dark:border-[#2a2d37] flex items-center justify-center shrink-0">
                    <Icon size={13} strokeWidth={1.8} className="text-[#0d0f12] dark:text-[#ffffff]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider font-mono text-[#0d0f12] dark:text-white">
                    {stat.label}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#0d0f12] dark:text-[#ffffff] font-display">
                  {stat.value}
                </div>
                <div className="text-xs text-[#494f5c] dark:text-[#9fa6b6] mt-0.5 font-medium">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Real Logo + Name Infinite Smooth Marquee (Dual-Row matching reference image) ── */}
        <div className="pt-4 border-t border-[#cbd0d9]/80 dark:border-[#262933]/80 flex flex-col gap-3">
          
          {/* Row 1: Smooth Left Flow */}
          <div className="relative w-full overflow-hidden marquee-mask py-1">
            <div className="animate-marquee-smooth flex items-center gap-10 sm:gap-14">
              {infiniteRow1.map((item, i) => (
                <div 
                  key={`r1-${i}`}
                  className="flex items-center gap-2.5 sm:gap-3 shrink-0 opacity-90 hover:opacity-100 transition-opacity cursor-default select-none group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-[#cbd0d9] dark:border-white/20 p-1 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    {item.logo}
                  </div>
                  <span className="text-sm sm:text-base font-medium tracking-tight text-[#0d0f12] dark:text-[#ffffff] font-display whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Smooth Flow Offset matching the double row in user image */}
          <div className="relative w-full overflow-hidden marquee-mask py-1">
            <div className="animate-marquee-reverse flex items-center gap-10 sm:gap-14">
              {infiniteRow2.map((item, i) => (
                <div 
                  key={`r2-${i}`}
                  className="flex items-center gap-2.5 sm:gap-3 shrink-0 opacity-90 hover:opacity-100 transition-opacity cursor-default select-none group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-[#cbd0d9] dark:border-white/20 p-1 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    {item.logo}
                  </div>
                  <span className="text-sm sm:text-base font-medium tracking-tight text-[#0d0f12] dark:text-[#ffffff] font-display whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


export default ProofRibbon;
