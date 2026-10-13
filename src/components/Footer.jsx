import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer 
      className="py-10 bg-white dark:bg-[#08090d] text-slate-900 dark:text-slate-100 border-t border-slate-200/90 dark:border-white/10 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Bottom Left: Brand Signature & Status */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-[#202124] dark:text-white font-display">
              Harsh Lagwal
            </span>
            <span className="text-xs text-[#5f6368] dark:text-[#9aa0a6]">
              • AI & Machine Learning Engineer
            </span>
          </div>

          {/* Bottom Center / Right: Clean Google Antigravity Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-[#5f6368] dark:text-[#9aa0a6]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Scroll to top */}
          <div className="flex items-center gap-2.5">
            {[
              { icon: Github, href: "https://github.com/harshlagwal", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/harshlagwal", label: "LinkedIn" },
              { icon: Mail, href: "mailto:Harshlagwal2005@gmail.com", label: "Email" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target={social.href.startsWith('mailto') ? '_self' : '_blank'} 
                rel="noopener noreferrer" 
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-[#f1f3f4] dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134] flex items-center justify-center text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] hover:scale-105 shadow-xs transition-all"
              >
                <social.icon size={14} strokeWidth={1.5} />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f1f3f4] dark:bg-[#1e1f20] hover:bg-[#e8eaed] dark:hover:bg-[#252629] border border-[#dadce0] dark:border-[#2e3134] text-xs font-mono text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-all cursor-pointer shadow-xs group"
            >
              <span>Back to top</span>
              <ArrowUp size={12} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
