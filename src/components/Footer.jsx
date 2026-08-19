import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-10 border-t border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#060913] transition-colors duration-500 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        
        {/* Left: Name & Role */}
        <div className="text-center sm:text-left">
          <span className="text-base font-bold text-gray-900 dark:text-white font-display tracking-tight">
            Harsh Lagwal
          </span>
          <span className="text-xs font-mono text-gray-500 dark:text-gray-400 block sm:inline sm:ml-2">
            AI & ML Engineer
          </span>
        </div>

        {/* Center: Social Icons */}
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
              className="p-2 bg-gray-100/80 dark:bg-white/[0.05] border border-gray-200/80 dark:border-white/10 rounded-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105 shadow-xs transition-all"
            >
              <social.icon size={15} />
            </a>
          ))}
        </div>

        {/* Right Corner: Scroll to top Button */}
        <div className="flex items-center justify-end">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-100/80 dark:bg-white/[0.05] hover:bg-gray-200/80 dark:hover:bg-white/[0.1] border border-gray-200/80 dark:border-white/10 text-xs font-mono text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-all cursor-pointer shadow-xs group"
          >
            <span>Scroll to top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>


      </div>
    </footer>
  );
};

export default Footer;




