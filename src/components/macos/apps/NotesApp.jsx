import React, { useState } from 'react';
import { 
  Folder, 
  Search, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Zap, 
  Layers, 
  CheckCircle2,
  ExternalLink,
  Code2,
  Terminal,
  FileText,
  User,
  Clock,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { soundFX } from '../../../utils/soundEffects';

export const NotesApp = () => {
  const [selectedNoteId, setSelectedNoteId] = useState('about-me');
  const [searchQuery, setSearchQuery] = useState('');

  // Verified Trusted Organizations with Official Researched Logos
  const trustedOrganizations = [
    {
      name: "Google",
      role: "AI Certified & Startups",
      logo: "/logos/google-developers.svg"
    },
    {
      name: "NVIDIA",
      role: "Generative AI & DLI",
      logo: "/logos/nvidia.svg"
    },
    {
      name: "ISRO",
      role: "Geodata Remote Sensing",
      logo: "/logos/isro.png"
    },
    {
      name: "Microsoft",
      role: "Azure AI Fundamentals",
      logo: "/logos/microsoft-azure.svg"
    },
    {
      name: "Anthropic",
      role: "Model Context Protocol",
      logo: "/logos/anthropic.png"
    },
    {
      name: "ChatGPT",
      role: "ChatGPT & Prompt Eng.",
      logo: "/logos/chatgpt.svg"
    },
    {
      name: "TATA",
      role: "Data Insights Visualisation",
      logo: "/logos/tata.png"
    },
    {
      name: "IIT Delhi (eDC)",
      role: "Ambassador & Hackathons",
      logo: "/logos/edc-iit-delhi.png"
    },
    {
      name: "SpectoV",
      role: "Generative AI Engineer",
      logo: "/logos/spectov.svg"
    },
    {
      name: "Upto Skills",
      role: "AI / ML Engineering",
      logo: "/logos/upto-skills.webp"
    },
    {
      name: "Edunet Foundation",
      role: "Microsoft Cloud AI",
      logo: "/logos/edunet-foundation.png"
    },
    {
      name: "IIT Patna",
      role: "MBA in Decision Science",
      logo: "/logos/iit-patna.png"
    },
    {
      name: "Rayat Bahra Univ.",
      role: "B.Tech Computer Science",
      logo: "/logos/rayat-bahra-seal.webp"
    }
  ];

  const notesList = [
    {
      id: 'about-me',
      title: 'Executive Biography & Strategic Vision',
      date: 'Oct 19, 2026',
      fullDate: 'October 19, 2026 at 4:45 PM',
      snippet: 'Harsh Lagwal — AI & Machine Learning Engineer and MBA Scholar in Decision Science at IIT Patna...',
      category: 'Biography',
      icon: User
    },
    {
      id: 'education-iit',
      title: 'Academic Foundations: IIT Patna & Rayat Bahra',
      date: 'Oct 18, 2026',
      fullDate: 'October 18, 2026 at 11:20 AM',
      snippet: 'MBA in Decision Science (2026–2028) at IIT Patna. Quantitative business analytics, big data systems...',
      category: 'Education',
      icon: GraduationCap
    },
    {
      id: 'work-experience',
      title: 'Commercial Industry Experience & Deployments',
      date: 'Oct 16, 2026',
      fullDate: 'October 16, 2026 at 2:15 PM',
      snippet: 'SpectoV, Upto Skills, Microsoft Edunet, and eDC IIT Delhi. Production neural networks and agentic AI...',
      category: 'Experience',
      icon: Briefcase
    },
    {
      id: 'core-philosophy',
      title: 'Engineering Guardrails & Production Philosophies',
      date: 'Oct 14, 2026',
      fullDate: 'October 14, 2026 at 4:30 PM',
      snippet: 'Production-First AI microservices, Token Economics & Latency Optimization, Hallucination-Resistant workflows...',
      category: 'Philosophy',
      icon: ShieldCheck
    },
    {
      id: 'skills-arsenal',
      title: 'Technical Arsenal & Enterprise Architecture Stack',
      date: 'Oct 12, 2026',
      fullDate: 'October 12, 2026 at 10:00 AM',
      snippet: 'PyTorch, Gemini 1.5 Pro, DeepSeek, FastAPI, React, TypeScript, Docker, Azure AI, LangChain...',
      category: 'Skills',
      icon: Code2
    }
  ];

  const filteredNotes = notesList.filter(
    (n) =>
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.snippet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeNote = notesList.find((n) => n.id === selectedNoteId) || notesList[0];

  return (
    <div className="flex flex-col md:flex-row h-full w-full select-none text-slate-800 dark:text-slate-100 overflow-hidden bg-white dark:bg-[#151720] font-['Google_Sans',sans-serif]">
      
      {/* ── Mobile Sticky Notes Category Switcher Bar ── */}
      <div className="md:hidden sticky top-0 z-20 flex items-center gap-1.5 overflow-x-auto px-3 py-2 border-b border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#151720]/95 backdrop-blur-md shrink-0 scrollbar-none">
        {notesList.map((n) => {
          const isSelected = selectedNoteId === n.id;
          const Icon = n.icon;
          return (
            <button
              key={n.id}
              onClick={() => {
                setSelectedNoteId(n.id);
                soundFX.playClick();
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer active:scale-95 ${
                isSelected
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-black/10 dark:hover:bg-white/10'
              }`}
            >
              <Icon size={12} className={isSelected ? 'text-white' : 'text-slate-400'} />
              <span>{n.category}</span>
            </button>
          );
        })}
      </div>

      {/* ── Column 1: Desktop Folders Sidebar (macOS Notes style) ── */}
      <div className="hidden lg:flex w-44 md:w-52 border-r border-black/10 dark:border-white/10 p-3 bg-slate-50/80 dark:bg-[#181a24]/90 flex-col justify-between text-xs shrink-0 backdrop-blur-md">
        <div className="space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 font-sans">
            Folders
          </div>
          <button className="w-full px-2.5 py-1.5 rounded-lg bg-amber-500/15 text-amber-800 dark:text-amber-400 font-semibold flex items-center justify-between transition-colors">
            <div className="flex items-center gap-2">
              <Folder size={14} className="fill-amber-500/30 text-amber-500" />
              <span>All Notes</span>
            </div>
            <span className="text-[10px] text-amber-700 dark:text-amber-400 font-mono font-bold">
              {notesList.length}
            </span>
          </button>
        </div>

        {/* Minimal iCloud Status Badge */}
        <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 text-[10.5px] text-slate-500 dark:text-slate-400">
          <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5 mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>iCloud Synced</span>
          </div>
          <span>Updated across all devices.</span>
        </div>
      </div>

      {/* ── Column 2: Desktop Notes List ── */}
      <div className="hidden md:flex w-64 md:w-76 border-r border-black/10 dark:border-white/10 flex-col bg-slate-50/40 dark:bg-[#161822]/50 shrink-0">
        {/* Search Notes Header */}
        <div className="p-2.5 border-b border-black/10 dark:border-white/10">
          <div className="relative">
            <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Notes..."
              className="w-full pl-7 pr-2.5 py-1 text-xs rounded-lg bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-amber-500/50 transition-colors font-sans"
            />
          </div>
        </div>

        {/* Note Cards List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin">
          {filteredNotes.map((note) => {
            const isSelected = selectedNoteId === note.id;

            return (
              <div
                key={note.id}
                onClick={() => {
                  setSelectedNoteId(note.id);
                  soundFX.playClick();
                }}
                className={`p-3 rounded-xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-amber-400/20 text-slate-900 dark:text-white border-amber-400/40 shadow-xs'
                    : 'bg-transparent border-transparent hover:bg-black/5 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                }`}
              >
                <div className="font-bold text-xs leading-snug mb-1 truncate font-sans">
                  {note.title}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 mb-1 font-mono">
                  <span>{note.date}</span>
                  <span>•</span>
                  <span>{note.category}</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-sans">
                  {note.snippet}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Column 3: Full Width Rich Note View (Apple & Google Aligned) ── */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10 pb-16 sm:pb-12 bg-white dark:bg-[#13151e] scrollbar-thin font-['Google_Sans',sans-serif]">
        
        {/* Apple Notes Style Centered Header Timestamp */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            {activeNote.fullDate}
          </span>
        </div>

        {/* ── NOTE 1: ABOUT HARSH & TRUSTED ORGANIZATIONS ── */}
        {selectedNoteId === 'about-me' && (
          <div className="max-w-2xl mx-auto space-y-6">
            
            {/* Header Title Section */}
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-sans">
                Harsh Lagwal — Strategic Executive Profile
              </h1>
              <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 font-sans">
                AI & Machine Learning Engineer • MBA in Decision Science (IIT Patna)
              </div>
            </div>

            {/* Apple Notes Style Highlight Quote Box */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed font-medium font-sans">
              "Engineering intelligent, hallucination-resistant Generative AI systems and quantitative decision algorithms that solve high-stakes business challenges."
            </div>

            {/* Structured Biography Content */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              <p>
                I am an AI & Machine Learning Engineer currently pursuing an <strong className="text-slate-900 dark:text-white">MBA in Decision Science at the Indian Institute of Technology, Patna (IIT Patna, 2026–2028)</strong>, backed by an engineering foundation in Computer Science from Rayat Bahra University.
              </p>
              <p>
                My technical philosophy bridges theoretical deep learning research with robust enterprise deployments. I build autonomous multi-agent pipelines, low-latency microservices with FastAPI & PyTorch, and context-optimized LLM workflows designed for real-world impact.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 text-center">
                <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">IIT Patna</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Decision Science</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 text-center">
                <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">9+ Systems</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Production AI</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 text-center">
                <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">12 Partners</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Verified Honors</div>
              </div>
            </div>

            {/* Trusted By & Enterprise Accreditations (Clean Full-Width Grid) */}
            <div className="pt-6 border-t border-black/10 dark:border-white/10 space-y-3.5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-sans flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span>Trusted & Accredited By</span>
                </h4>
                <span className="text-[11px] text-slate-400 font-mono font-medium">12 Enterprise Entities</span>
              </div>

              {/* Responsive Cards: 1 column on mobile, 2 on tablet, 3 on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                {trustedOrganizations.map((org) => (
                  <div
                    key={org.name}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-between gap-3 shadow-2xs hover:border-blue-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 border border-black/5 dark:border-white/20 shadow-2xs group-hover:scale-105 transition-transform">
                        <img
                          src={org.logo}
                          alt={org.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(org.name)}&background=2563eb&color=fff&size=64&bold=true`;
                          }}
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate font-sans">
                          {org.name}
                        </div>
                        <div className="text-[10.5px] text-slate-500 dark:text-slate-400 truncate font-sans">
                          {org.role}
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 opacity-80" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ── NOTE 2: ACADEMIC FOUNDATIONS ── */}
        {selectedNoteId === 'education-iit' && (
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
                Academic Pedigree & Research Foundations
              </h1>
              <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 font-sans">
                IIT Patna & Rayat Bahra University
              </div>
            </div>

            <div className="space-y-4">
              {portfolioData.education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 space-y-3 shadow-xs"
                >
                  {/* Responsive Header: Prevents Text Squishing */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-bold text-sm sm:text-base text-blue-600 dark:text-cyan-400 font-sans leading-snug">
                      {edu.degree}
                    </span>
                    <span className="self-start sm:self-auto text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 shrink-0">
                      {edu.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm text-slate-900 dark:text-white font-sans">
                    <GraduationCap size={16} className="text-slate-500 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {edu.focus}
                  </p>

                  {/* Highlights / Specialization Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {edu.degree.includes('MBA') ? (
                      ['Decision Science', 'Quantitative Modeling', 'Probabilistic AI', 'Big Data Analytics', 'Enterprise Optimization'].map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-700 dark:text-blue-300 text-[10px] font-medium font-sans">
                          {tag}
                        </span>
                      ))
                    ) : (
                      ['Deep Learning', 'Machine Learning', 'Cloud Computing', 'Data Structures & Algorithms'].map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] font-medium font-sans">
                          {tag}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Specialization Callout */}
            <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              <strong className="text-blue-700 dark:text-blue-300">IIT Patna Decision Science Specialization:</strong> Focuses on empirical quantitative modeling, algorithmic optimization, probabilistic graphs, risk analytics, and enterprise data-driven decision frameworks.
            </div>

          </div>
        )}

        {/* ── NOTE 3: WORK EXPERIENCE & DEPLOYMENTS ── */}
        {selectedNoteId === 'work-experience' && (
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
                Commercial Experience & Deployments
              </h1>
              <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 font-sans">
                Neural Networks, Cloud AI & Production Deployments
              </div>
            </div>

            <div className="space-y-4">
              {portfolioData.experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 space-y-3 shadow-xs"
                >
                  {/* Experience Header: Mobile-Friendly Flex Layout */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-white dark:bg-white/10 p-1.5 flex items-center justify-center shrink-0 border border-black/5 dark:border-white/10 shadow-xs">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&background=2563eb&color=fff&size=64&bold=true`;
                          }}
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-sans truncate">
                          {exp.role}
                        </div>
                        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-sans flex items-center gap-1.5">
                          <span>{exp.company}</span>
                          <span className="opacity-40">•</span>
                          <span className="text-slate-500 dark:text-slate-400 font-normal">{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    <div className="self-start sm:self-auto text-[10.5px] font-mono text-slate-500 dark:text-slate-400 font-medium px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/5 shrink-0">
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* High-Fidelity Verified Credential Action Buttons */}
                  {exp.certificate && (
                    <div className="pt-1">
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold border border-blue-500/20 active:scale-95 transition-all cursor-pointer"
                      >
                        <Award size={13} />
                        <span>Verified Credential Link</span>
                        <ExternalLink size={11} className="opacity-70" />
                      </a>
                    </div>
                  )}

                  {exp.certificates && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.certificates.map((c) => (
                        <a
                          key={c.label}
                          href={c.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold border border-blue-500/20 active:scale-95 transition-all cursor-pointer"
                        >
                          <Award size={13} />
                          <span>{c.label}</span>
                          <ExternalLink size={11} className="opacity-70" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ── NOTE 4: ENGINEERING PHILOSOPHIES ── */}
        {selectedNoteId === 'core-philosophy' && (
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
                Engineering Principles & AI Guardrails
              </h1>
              <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 font-sans">
                Production-Grade Standards for Enterprise Deployments
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base text-slate-900 dark:text-white font-sans">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Zap size={16} />
                  </div>
                  <span>Production-First AI Architectures</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Moving models out of isolated research environments by containerizing pipelines into high-throughput, low-latency microservices with FastAPI, Docker, and orchestrated GPU nodes.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['FastAPI', 'Docker', 'GPU Microservices', 'High-Throughput'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base text-slate-900 dark:text-white font-sans">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Layers size={16} />
                  </div>
                  <span>Token Economics & Inference Latency Optimization</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Optimizing inference costs and API round-trips via semantic caching, structured schema prompts, targeted fine-tuning, and quantized local deployment (GGUF/AWQ).
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Semantic Caching', 'GGUF / AWQ', 'Schema Prompts', 'Cost Reduction'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base text-slate-900 dark:text-white font-sans">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <span>Hallucination-Resistant Autonomous Agents</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  Deploying multi-step autonomous workflows constrained by strict JSON validation schemas, deterministic programmatic guardrails, and real-time execution feedback loops.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Structured Outputs', 'Deterministic Guardrails', 'JSON Schema', 'Feedback Loops'].map(t => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ── NOTE 5: SKILLS ARSENAL ── */}
        {selectedNoteId === 'skills-arsenal' && (
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-sans tracking-tight">
                Technical Arsenal & Systems Stack
              </h1>
              <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 font-sans">
                Enterprise AI, Microservices & Deep Learning Frameworks
              </div>
            </div>

            <div className="space-y-4">
              {Object.entries(portfolioData.skills).map(([category, items]) => {
                let CategoryIcon = Code2;
                if (category.toLowerCase().includes('ai')) CategoryIcon = Sparkles;
                else if (category.toLowerCase().includes('framework')) CategoryIcon = Layers;
                else if (category.toLowerCase().includes('tool')) CategoryIcon = Terminal;

                return (
                  <div
                    key={category}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <CategoryIcon size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                      <h4 className="font-bold text-xs sm:text-sm text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-sans">
                        {category}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/[0.06] border border-black/5 dark:border-white/5 text-slate-800 dark:text-slate-200 text-xs font-medium font-sans hover:border-blue-500/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
