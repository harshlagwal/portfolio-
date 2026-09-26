import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download, 
  ChevronDown, 
  Compass, 
  Building2, 
  Bot, 
  Scan, 
  Brain, 
  Code2, 
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Briefcase,
  Award,
  ShieldCheck,
  Cpu,
  Sparkles,
  Settings,
  Globe,
  CheckCircle2,
  Mail,
  MessageSquare,
  Layers
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import harshPhoto from '../assets/Harsh-portfolio.jpg';

const Navbar = ({ onOpenResume }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const resumeLink = "https://drive.google.com/file/d/1PA8fV23UmJ2AYf7kxUGaihI88M1NWW0b/view?usp=sharing";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'skills', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, '', href);
    }
  };

  // Curated Google Antigravity dropdown configurations for each section
  const dropdownConfig = {
    projects: {
      title: <>Explore our<br />next generation<br />products</>,
      desc: "Featured AI models, agentic systems & client platforms.",
      cta: "See overview",
      category: "Products",
      width: "w-[92vw] sm:w-[500px]",
      align: "-left-8 sm:-left-20",
      items: [
        { name: "WanderLust.ai", sub: "Google Gemini 1.5 Travel Agent", icon: Compass, href: "#projects" },
        { name: "ATC Constructions", sub: "Client Commercial Web Portal", icon: Building2, href: "#projects" },
        { name: "Healthcare Assistant", sub: "NLP Medical Triage Bot", icon: Bot, href: "#projects" },
        { name: "Object Detection", sub: "SSD MobileNet v3 30+ FPS", icon: Scan, href: "#projects" },
        { name: "CareerCraft AI", sub: "Predictive Career Intelligence", icon: Brain, href: "#projects" },
        { name: "CodeChaska", sub: "Gamified Cyberpunk Coding Universe", icon: Code2, href: "#projects" },
      ]
    },
    about: {
      title: <>Engineering<br />systems with<br />purpose</>,
      desc: "AI engineer blending decision science with scalable neural architectures.",
      cta: "Read story",
      category: "Background",
      width: "w-[92vw] sm:w-[480px]",
      align: "-left-14 sm:-left-28",
      items: [
        { name: "Decision Science Focus", sub: "MBA research at IIT Patna", icon: Sparkles, href: "#about" },
        { name: "Production-First AI", sub: "FastAPI, Docker & microservices", icon: Cpu, href: "#about" },
        { name: "Agentic Engineering", sub: "Deterministic fallback & guardrails", icon: ShieldCheck, href: "#about" },
        { name: "Academic & Industry Trust", sub: "IIT Patna, Google, NVIDIA, ISRO", icon: Award, href: "#about" },
      ]
    },
    skills: {
      title: <>Technical<br />stack &amp;<br />toolchain</>,
      desc: "Deep learning frameworks, modern backends, and cloud infrastructure.",
      cta: "View matrix",
      category: "Specializations",
      width: "w-[92vw] sm:w-[480px]",
      align: "-left-20 sm:-left-36",
      items: [
        { name: "AI & Machine Learning", sub: "Generative AI, PyTorch, TensorFlow, NLP", icon: Brain, href: "#skills" },
        { name: "Programming & Data", sub: "Python, SQL, MongoDB, Postman", icon: Code2, href: "#skills" },
        { name: "Tools & Frameworks", sub: "Streamlit, VS Code, Git, Linux", icon: Settings, href: "#skills" },
        { name: "System Architecture", sub: "REST APIs, model inference & caching", icon: Layers, href: "#skills" },
      ]
    },
    experience: {
      title: <>Career &amp;<br />industry<br />trajectory</>,
      desc: "Experience across AI startups, innovation cells, and tech foundations.",
      cta: "View timeline",
      category: "Work History",
      width: "w-[92vw] sm:w-[480px]",
      align: "-left-28 sm:-left-48",
      items: [
        { name: "Upto Skills", sub: "AI / ML Intern · Deep learning pipelines", icon: Briefcase, href: "#experience" },
        { name: "eDC IIT Delhi", sub: "Campus Ambassador · Hackathons & AI", icon: Building2, href: "#experience" },
        { name: "SpectoV", sub: "Generative AI Engineer · LLM agents", icon: Sparkles, href: "#experience" },
        { name: "Edunet Foundation", sub: "AI Azure & ML Intern · Cloud ML", icon: Globe, href: "#experience" },
      ]
    },
    education: {
      title: <>Academic<br />ledger &amp;<br />qualifications</>,
      desc: "Formal education in Decision Science and Computer Science Engineering.",
      cta: "View degrees",
      category: "Institutions",
      width: "w-[92vw] sm:w-[480px]",
      align: "-left-36 sm:-left-56",
      items: [
        { name: "IIT Patna", sub: "MBA in Decision Science & Gen AI (2026–28)", icon: GraduationCap, href: "#education" },
        { name: "Rayat Bahra University", sub: "B.Tech in CSE · 76.8% First Class", icon: BookOpen, href: "#education" },
        { name: "Senior Secondary", sub: "12th Non-Medical · 87.6% Distinction", icon: Award, href: "#education" },
      ]
    },
    certifications: {
      title: <>Verified<br />credentials &amp;<br />honors</>,
      desc: "Industry-standard certifications from leading technology bodies.",
      cta: "Browse all",
      category: "Accreditations",
      width: "w-[92vw] sm:w-[480px]",
      align: "-right-16 sm:-right-36",
      items: [
        { name: "IBM AI Engineering", sub: "Professional ML Specialization", icon: Award, href: "#certifications" },
        { name: "DeepLearning.AI", sub: "Neural Networks & Prompting", icon: Brain, href: "#certifications" },
        { name: "ISRO Remote Sensing", sub: "Geospatial Image Processing", icon: Globe, href: "#certifications" },
        { name: "Google & Microsoft", sub: "Cloud ML & Azure Cognitive Services", icon: CheckCircle2, href: "#certifications" },
      ]
    },
    contact: {
      title: <>Get in touch<br />with Harsh<br />Lagwal</>,
      desc: "Open for AI/ML roles, consultations, and collaborative projects.",
      cta: "Contact form",
      category: "Channels",
      width: "w-[92vw] sm:w-[460px]",
      align: "right-0 sm:-right-12",
      items: [
        { name: "WhatsApp Direct", sub: "+91 6230624011 · Instant response", icon: MessageSquare, href: "https://wa.me/916230624011", external: true },
        { name: "Official Email", sub: "harshlagwal123@gmail.com", icon: Mail, href: "mailto:harshlagwal123@gmail.com", external: true },
        { name: "Schedule a Chat", sub: "Discuss AI pipelines & collaborations", icon: ArrowUpRight, href: "#contact" },
      ]
    }
  };

  const navLinks = [
    { name: 'Work',           href: '#projects',       id: 'projects' },
    { name: 'About',          href: '#about',          id: 'about' },
    { name: 'Skills',         href: '#skills',         id: 'skills' },
    { name: 'Experience',     href: '#experience',     id: 'experience' },
    { name: 'Education',      href: '#education',      id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact',        href: '#contact',        id: 'contact' },
  ];

  return (
    <div className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[96vw]">
      {/* Floating Centered Pill Bar - Size Strictly Fixed, Invariant to Cursor Moves */}
      <nav className="h-11 sm:h-12 bg-white/90 dark:bg-[#1e1f20]/95 text-[#202124] dark:text-[#e3e3e3] rounded-full px-2 shadow-lg shadow-black/[0.04] dark:shadow-2xl dark:shadow-black/50 border border-[#dadce0] dark:border-[#2e3134] flex items-center gap-1 sm:gap-2 backdrop-blur-xl transition-colors duration-300 shrink-0">
        
        {/* Left: Photo Avatar & Name (Strictly Single Line, Invariant Width) */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, '#home')}
          title="Harsh Lagwal - AI & ML Engineer"
          className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full hover:bg-[#f1f3f4] dark:hover:bg-[#2a2b2e] transition-colors group cursor-pointer shrink-0 whitespace-nowrap"
        >
          {/* Photo Avatar */}
          <div className="w-7 h-7 rounded-full bg-white dark:bg-[#202124] p-0.5 shrink-0 overflow-hidden flex items-center justify-center border border-[#dadce0] dark:border-[#3c4043] shadow-2xs group-hover:scale-105 transition-transform">
            <img 
              src={harshPhoto} 
              alt="Harsh Lagwal" 
              className="w-full h-full object-cover object-top rounded-full" 
            />
          </div>

          <span className="text-[13px] font-medium tracking-tight text-[#202124] dark:text-[#f1f3f4] font-display whitespace-nowrap shrink-0">
            Harsh Lagwal
          </span>
        </a>

        {/* Center: Clean Text Navigation Links with Subtle Floating Dropdowns */}
        <div className="hidden md:flex items-center gap-0.5 px-0.5 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const config = dropdownConfig[link.id];
            const isOpen = activeDropdown === link.id;

            return (
              <div 
                key={link.name} 
                className="relative shrink-0"
                onMouseEnter={() => setActiveDropdown(link.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs lg:text-[13px] font-medium rounded-full transition-colors duration-150 select-none cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive || isOpen
                      ? 'text-[#202124] dark:text-[#f1f3f4] bg-[#f1f3f4] dark:bg-[#2e3134]'
                      : 'text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-[#f1f3f4] hover:bg-[#f1f3f4]/70 dark:hover:bg-[#252629]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronDown 
                    size={11} 
                    strokeWidth={1.8} 
                    className={`transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#1a73e8] dark:text-[#8ab4f8]' : 'opacity-60'
                    }`} 
                  />
                </button>

                {/* Absolute Floating Dropdown Panel (Positioned out of flow, 0 impact on navbar size) */}
                <AnimatePresence>
                  {isOpen && config && (
                    <div className={`absolute top-full pt-2.5 ${config.align} z-50 pointer-events-auto`}>
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: "easeOut" }}
                        className={`${config.width} bg-white dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134] rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/15 text-left`}
                      >
                        <div className="grid grid-cols-12 gap-5 items-start">
                          
                          {/* Left Column: Overview Prompt & CTA */}
                          <div className="col-span-5 flex flex-col justify-between h-full pr-3 border-r border-[#dadce0] dark:border-[#2e3134]">
                            <div>
                              <h4 className="text-base sm:text-lg font-medium text-[#202124] dark:text-[#f1f3f4] font-display leading-tight mb-2.5">
                                {config.title}
                              </h4>
                              <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed mb-6">
                                {config.desc}
                              </p>
                            </div>

                            <button
                              onClick={(e) => {
                                handleScroll(e, link.href);
                                setActiveDropdown(null);
                              }}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f1f3f4] hover:bg-[#e8eaed] dark:bg-[#252629] dark:hover:bg-[#303236] text-[#202124] dark:text-[#f1f3f4] border border-[#dadce0] dark:border-[#3c4043] text-xs font-medium transition-all shadow-2xs self-start cursor-pointer hover:scale-[1.02]"
                            >
                              <span>{config.cta}</span>
                              <ArrowUpRight size={12} strokeWidth={1.8} />
                            </button>
                          </div>

                          {/* Right Column: List of items with outline icons */}
                          <div className="col-span-7 space-y-1">
                            <span className="block text-[11px] font-mono uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6] mb-2 px-2">
                              {config.category}
                            </span>

                            {config.items.map((item, itemIdx) => {
                              const Icon = item.icon;

                              if (item.external) {
                                return (
                                  <a
                                    key={itemIdx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setActiveDropdown(null)}
                                    className="flex items-center gap-3 px-2 py-1.5 rounded-xl hover:bg-[#f8f9fa] dark:hover:bg-[#252629] transition-colors group cursor-pointer"
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-[#f1f3f4] dark:bg-[#2a2b2e] flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8] shrink-0 group-hover:scale-105 transition-transform">
                                      <Icon size={16} strokeWidth={1.6} />
                                    </div>
                                    <div className="min-w-0">
                                      <span className="block text-[13px] font-medium text-[#202124] dark:text-[#f1f3f4] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors truncate">
                                        {item.name}
                                      </span>
                                      <span className="block text-[11px] text-[#5f6368] dark:text-[#9aa0a6] truncate">
                                        {item.sub}
                                      </span>
                                    </div>
                                  </a>
                                );
                              }

                              return (
                                <a
                                  key={itemIdx}
                                  href={item.href}
                                  onClick={(e) => {
                                    handleScroll(e, item.href);
                                    setActiveDropdown(null);
                                  }}
                                  className="flex items-center gap-3 px-2 py-1.5 rounded-xl hover:bg-[#f8f9fa] dark:hover:bg-[#252629] transition-colors group cursor-pointer"
                                >
                                  <div className="w-7 h-7 rounded-lg bg-[#f1f3f4] dark:bg-[#2a2b2e] flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8] shrink-0 group-hover:scale-105 transition-transform">
                                    <Icon size={16} strokeWidth={1.6} />
                                  </div>
                                  <div className="min-w-0">
                                    <span className="block text-[13px] font-medium text-[#202124] dark:text-[#f1f3f4] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors truncate">
                                      {item.name}
                                    </span>
                                    <span className="block text-[11px] text-[#5f6368] dark:text-[#9aa0a6] truncate">
                                      {item.sub}
                                    </span>
                                  </div>
                                </a>
                              );
                            })}
                          </div>

                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right: Utility Icons & CTA */}
        <div className="flex items-center gap-1 sm:gap-1.5 pl-1 shrink-0">

          {/* WhatsApp Direct Connect */}
          <a
            href="https://wa.me/916230624011?text=Hi%20Harsh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp (+91 6230624011)"
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#188038] dark:hover:text-[#81c995] hover:bg-[#e6f4ea] dark:hover:bg-[#137333]/20 transition-all select-none shrink-0"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="15" 
              height="15" 
              fill="currentColor"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
            </svg>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white hover:bg-[#f1f3f4] dark:hover:bg-[#2a2b2e] transition-colors cursor-pointer shrink-0"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'dark' : 'light'}
                initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isDark ? (
                  <Sun size={15} strokeWidth={1.8} className="text-[#fbbc04]" />
                ) : (
                  <Moon size={15} strokeWidth={1.8} className="text-[#5f6368]" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Sleek Antigravity Black Pill Button "Resume ↓" */}
          <button
            onClick={() => onOpenResume ? onOpenResume() : window.open(resumeLink, '_blank')}
            className="hidden sm:inline-flex bg-[#202124] hover:bg-[#303134] text-white dark:bg-[#f1f3f4] dark:text-[#131314] dark:hover:bg-white font-medium px-3.5 py-1.5 rounded-full text-xs transition-all shrink-0 shadow-2xs items-center gap-1.5 select-none hover:scale-[1.02] active:scale-95 cursor-pointer ml-0.5"
          >
            <span>Resume</span>
            <Download size={13} strokeWidth={1.8} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white hover:bg-[#f1f3f4] dark:hover:bg-[#2a2b2e] transition-colors cursor-pointer shrink-0"
          >
            {isMobileMenuOpen ? <X size={16} strokeWidth={1.8} /> : <Menu size={16} strokeWidth={1.8} />}
          </button>

        </div>

      </nav>

      {/* Mobile Drawer Dropdown Sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="mt-2 p-3 rounded-2xl bg-white/95 dark:bg-[#1e1f20]/95 backdrop-blur-2xl border border-[#dadce0] dark:border-[#2e3134] text-[#202124] dark:text-[#e3e3e3] shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleScroll(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive 
                        ? 'bg-[#f1f3f4] dark:bg-[#2e3134] text-[#202124] dark:text-white font-semibold'
                        : 'text-[#5f6368] dark:text-[#9aa0a6] hover:bg-[#f8f9fa] dark:hover:bg-[#2a2b2e]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] dark:bg-[#8ab4f8]" />}
                  </a>
                );
              })}



              <div className="pt-2 flex flex-col gap-1.5">
                <a
                  href="https://wa.me/916230624011?text=Hi%20Harsh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-[#188038] hover:bg-[#137333] text-white font-medium text-xs transition-all shadow-2xs"
                >
                  <span>Chat on WhatsApp (+91 6230624011)</span>
                </a>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenResume ? onOpenResume() : window.open(resumeLink, '_blank');
                  }}
                  className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-[#202124] dark:bg-white text-white dark:text-black font-medium text-xs transition-all shadow-xs cursor-pointer"
                >
                  <span>Download Resume</span>
                  <Download size={13} strokeWidth={1.8} />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
