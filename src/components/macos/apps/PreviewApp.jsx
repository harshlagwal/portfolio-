import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Search, 
  RotateCw, 
  Share2, 
  Briefcase, 
  GraduationCap,
  Sparkles,
  ArrowLeft,
  Eye,
  FileText
} from 'lucide-react';
import { soundFX } from '../../../utils/soundEffects';

export const PreviewApp = () => {
  // All verified certificates & experience documents from codebase
  const credentials = [
    {
      id: 'google-build-ai',
      title: 'Build with AI Mohali Bootcamp',
      company: 'Google & Hack2Skills',
      category: 'Certifications',
      logo: '/logos/google-developers.svg',
      link: 'https://drive.google.com/file/d/1atFwqxAHDX24JzzekEqOFNUnUJTGA2aw/view?usp=drive_link',
      date: '2025'
    },
    {
      id: 'anthropic-mcp',
      title: 'Model Context Protocol Certificate',
      company: 'Anthropic',
      category: 'Certifications',
      logo: '/logos/anthropic.png',
      link: 'https://drive.google.com/file/d/1-vLv3rkLdm5cTH7fReVC0eJYZ9X9XrBw/view?usp=drivesdk',
      date: '2025'
    },
    {
      id: 'google-startups',
      title: 'Google For Startups Certificate',
      company: 'Google & Scaler',
      category: 'Certifications',
      logo: '/logos/google-developers.svg',
      link: 'https://drive.google.com/file/d/1soVOoJWsWXyNXMqSV7qYnGn2Wi1FiXEU/view?usp=drivesdk',
      date: '2025'
    },
    {
      id: 'openai-chatgpt',
      title: 'ChatGPT for Everyday Certificate',
      company: 'OpenAI / ChatGPT',
      category: 'Certifications',
      logo: '/logos/chatgpt.svg',
      link: 'https://drive.google.com/file/d/1QtKoyZt15OQdXYCov7lMH82fk-1yBT6E/view?usp=drivesdk',
      date: '2025'
    },
    {
      id: 'google-workshop',
      title: 'Google Workshop Certificate',
      company: 'Google',
      category: 'Certifications',
      logo: '/logos/google-developers.svg',
      link: 'https://drive.google.com/file/d/1jm8SMC_guUU2T7Q9oRx5or9m9up8K5cl/view?usp=drivesdk',
      date: '2025'
    },
    {
      id: 'isro-geodata',
      title: 'AI & ML for Geodata Analysis Certificate',
      company: 'ISRO',
      category: 'Certifications',
      logo: '/logos/isro.png',
      link: 'https://drive.google.com/file/d/1RVIpwaa5oVoHaIYE8S4MA1XCfH9Ov4NY/view?usp=drivesdk',
      date: '2025'
    },
    {
      id: 'nvidia-genai',
      title: 'Generative AI Certificate',
      company: 'NVIDIA',
      category: 'Certifications',
      logo: '/logos/nvidia.svg',
      link: 'https://drive.google.com/file/d/1SrmjS-cTVHlIrb7uKtRRmyfqd4EfYhq0/view?usp=drivesdk',
      date: '2025'
    },
    {
      id: 'tata-dataviz',
      title: 'Data Visualisation: Empowering Business Insights',
      company: 'TATA',
      category: 'Certifications',
      logo: '/logos/tata.png',
      link: 'https://drive.google.com/file/d/1XWAbgsq4b2I5ZTERwjL01xqNXDNT2Zfs/view?usp=drivesdk',
      date: '2025'
    },
    {
      id: 'uptoskills-letter',
      title: 'AI / ML Internship Experience Letter',
      company: 'Upto Skills',
      category: 'Experience',
      logo: '/logos/upto-skills.webp',
      link: 'https://drive.google.com/file/d/16dbN9y3l5rsR2Y70AeaLxqIT20_tEKma/view?usp=drive_link',
      date: '2026'
    },
    {
      id: 'uptoskills-cert',
      title: 'AI / ML Internship Completion Certificate',
      company: 'Upto Skills',
      category: 'Experience',
      logo: '/logos/upto-skills.webp',
      link: 'https://drive.google.com/file/d/1nlus1dHLJ44rN04BLj5MgpA2lEaH6mp6/view?usp=drive_link',
      date: '2026'
    },
    {
      id: 'edc-iit-delhi',
      title: 'Campus Ambassador Certificate',
      company: 'eDC IIT Delhi',
      category: 'Experience',
      logo: '/logos/edc-iit-delhi.png',
      link: 'https://drive.google.com/file/d/1tIkMYWmhuA2pzWlGqaduzdmu5AwsJGu8/view?usp=drivesdk',
      date: '2026'
    },
    {
      id: 'spectov-genai',
      title: 'Generative AI Engineer Experience',
      company: 'SpectoV',
      category: 'Experience',
      logo: '/logos/spectov.svg',
      link: 'https://drive.google.com/file/d/1HqxEmc6-nWhCpVRRHlxMlusENMk1DwtW/view?usp=sharing',
      date: '2025'
    },
    {
      id: 'edunet-azure',
      title: 'AI Azure Internship Certificate',
      company: 'Edunet Foundation / Microsoft',
      category: 'Experience',
      logo: '/logos/edunet-foundation.png',
      link: 'https://drive.google.com/file/d/1RptrUewLOq4PEjWw21tfNbmCULuM5-oZ/view?usp=drivesdk',
      date: '2025'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [iframeKey, setIframeKey] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [mobileViewingDoc, setMobileViewingDoc] = useState(false);

  const filtered = credentials.filter((c) => {
    const matchesCategory = filterCategory === 'All' || c.category === filterCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedCert = filtered[selectedIndex] || filtered[0] || credentials[0];
  const previewUrl = selectedCert?.link ? selectedCert.link.replace(/\/view.*$/, '/preview') : '';

  const handleSelect = (idx) => {
    soundFX.playClick();
    setSelectedIndex(idx);
    setIframeKey((prev) => prev + 1);
  };

  const handleMobileOpenDoc = (idx) => {
    soundFX.playClick();
    setSelectedIndex(idx);
    setIframeKey((prev) => prev + 1);
    setMobileViewingDoc(true);
  };

  const handleShare = (link) => {
    const targetLink = link || selectedCert?.link;
    if (targetLink) {
      navigator.clipboard.writeText(targetLink);
      soundFX.playPop();
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="flex h-full w-full select-none text-slate-800 dark:text-slate-100 bg-[#f6f7fb] dark:bg-[#10121a] overflow-hidden font-['Google_Sans',sans-serif]">
      
      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE VIEW (< md): Clean Master-Detail Stack (List -> Document View)
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="flex md:hidden flex-col h-full w-full bg-white dark:bg-[#12141c]">
        {mobileViewingDoc ? (
          /* Mobile Live Document Preview Screen */
          <div className="flex flex-col h-full w-full">
            {/* Top Toolbar */}
            <div className="px-3 py-2.5 border-b border-black/10 dark:border-white/10 flex items-center justify-between gap-2 bg-slate-50 dark:bg-[#161822] shrink-0">
              <button
                onClick={() => setMobileViewingDoc(false)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>All Certificates</span>
              </button>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleShare(selectedCert.link)}
                  className="p-1.5 rounded-lg bg-black/5 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                  title="Copy link"
                >
                  <Share2 size={13} />
                </button>
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-xs active:scale-95 transition-all"
                >
                  <span>Open in Drive</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Document Info Bar */}
            <div className="px-4 py-2 bg-white dark:bg-[#141620] border-b border-black/5 dark:border-white/5 flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 border border-black/5 dark:border-white/20 shadow-2xs">
                <img
                  src={selectedCert.logo}
                  alt={selectedCert.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedCert.company)}&background=2563eb&color=fff&size=64&bold=true`;
                  }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-xs text-slate-900 dark:text-white truncate">
                  {selectedCert.title}
                </div>
                <div className="text-[10px] text-blue-600 dark:text-cyan-400 font-semibold truncate">
                  {selectedCert.company} • Verified Document
                </div>
              </div>
            </div>

            {/* Live Iframe */}
            <div className="flex-1 w-full min-h-[460px] bg-[#1a1c24] relative">
              <iframe
                key={`${selectedCert.id}-${iframeKey}`}
                src={previewUrl}
                title={selectedCert.title}
                className="w-full h-full border-0 bg-white"
                allow="autoplay"
              />
            </div>
          </div>
        ) : (
          /* Mobile Certificate Catalog / Cards Feed */
          <div className="flex flex-col h-full w-full overflow-y-auto">
            {/* Top Category Filter & Search */}
            <div className="sticky top-0 z-10 p-3 space-y-2 border-b border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#12141c]/95 backdrop-blur-md">
              {/* Search Bar */}
              <div className="relative">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search certificate or company..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-black/5 dark:border-white/10 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                {['All', 'Certifications', 'Experience'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilterCategory(cat);
                      soundFX.playClick();
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      filterCategory === cat
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Cards List */}
            <div className="p-3 space-y-2.5 pb-20">
              {filtered.map((cert, idx) => (
                <div
                  key={cert.id}
                  onClick={() => handleMobileOpenDoc(idx)}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 space-y-2.5 shadow-2xs active:scale-[0.98] transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 border border-black/5 dark:border-white/20 shadow-2xs">
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
                        <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug font-sans line-clamp-1">
                          {cert.title}
                        </div>
                        <div className="text-[11px] font-semibold text-blue-600 dark:text-cyan-400 mt-0.5 truncate">
                          {cert.company}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                      Verified
                    </span>
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5 text-xs">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMobileOpenDoc(idx);
                      }}
                      className="inline-flex items-center gap-1.5 font-semibold text-blue-600 dark:text-cyan-400"
                    >
                      <Eye size={13} />
                      <span>View Document Preview</span>
                    </button>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      <span>Drive</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP VIEW (>= md): Authentic macOS Preview Dual-Pane Experience
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:flex h-full w-full overflow-hidden">
        {/* ── Left Sidebar: Credential Selection List ── */}
        <div className="w-72 md:w-80 border-r border-black/10 dark:border-white/10 bg-slate-100/90 dark:bg-[#161822]/95 flex flex-col shrink-0 text-xs backdrop-blur-md">
          {/* Header & Search */}
          <div className="p-3.5 border-b border-black/10 dark:border-white/10 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="font-bold text-slate-900 dark:text-white font-sans text-xs tracking-tight">
                  Verified Credentials ({credentials.length})
                </span>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by company or certificate..."
                className="w-full pl-7 pr-2.5 py-1 text-[11px] rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 outline-none text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 font-sans"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-0.5 rounded-lg border border-black/5 dark:border-white/5 text-[10.5px]">
              {['All', 'Certifications', 'Experience'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilterCategory(cat);
                    setSelectedIndex(0);
                    soundFX.playClick();
                  }}
                  className={`flex-1 py-1 rounded-md font-medium text-center transition-all cursor-pointer ${
                    filterCategory === cat
                      ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Credentials Scrollable List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5 scrollbar-thin">
            {filtered.map((cert, idx) => {
              const isSelected = selectedCert.id === cert.id;

              return (
                <div
                  key={cert.id}
                  onClick={() => handleSelect(idx)}
                  className={`p-2.5 rounded-xl cursor-pointer transition-all flex items-center gap-3 border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-1 ring-blue-500/30'
                      : 'bg-white/80 dark:bg-white/[0.03] border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.07] text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {/* Official Company Logo */}
                  <div className={`w-10 h-10 rounded-lg p-1.5 shrink-0 flex items-center justify-center overflow-hidden border ${
                    isSelected ? 'bg-white border-white/20' : 'bg-white border-black/5 dark:border-white/20 shadow-2xs'
                  }`}>
                    <img
                      src={cert.logo}
                      alt={cert.company}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cert.company)}&background=2563eb&color=fff&size=64&bold=true`;
                      }}
                    />
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">
                    <div className={`font-semibold text-xs leading-snug line-clamp-1 font-sans ${
                      isSelected ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}>
                      {cert.title}
                    </div>
                    <div className={`text-[10.5px] truncate font-sans mt-0.5 ${
                      isSelected ? 'text-blue-100 font-medium' : 'text-blue-600 dark:text-blue-400 font-medium'
                    }`}>
                      {cert.company}
                    </div>
                  </div>

                  <CheckCircle2
                    size={14}
                    className={`shrink-0 ${isSelected ? 'text-white' : 'text-emerald-500'}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right Area: Live Google Drive PDF Preview Iframe (Inside Window) ── */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#161722] overflow-hidden">
          {/* Detail Top Header Toolbar */}
          <div className="h-12 px-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between gap-3 bg-white/95 dark:bg-[#161822]/95 backdrop-blur-md text-xs shrink-0 z-10">
            <div className="flex items-center gap-3 truncate">
              <div className="w-7 h-7 rounded-lg p-1 bg-slate-50 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                <img
                  src={selectedCert.logo}
                  alt={selectedCert.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedCert.company)}&background=2563eb&color=fff&size=64&bold=true`;
                  }}
                />
              </div>
              <div className="truncate">
                <div className="font-bold text-slate-900 dark:text-white truncate font-sans text-xs">
                  {selectedCert.title}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-sans">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{selectedCert.company}</span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Verified Google Drive Document</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setIframeKey((k) => k + 1);
                }}
                title="Reload Certificate"
                className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              >
                <RotateCw size={14} />
              </button>

              <button
                onClick={() => handleShare()}
                title="Copy Certificate Link"
                className="px-2.5 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer text-xs font-medium font-sans"
              >
                <Share2 size={13} />
                <span className="hidden sm:inline">{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
              </button>

              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer text-xs font-sans"
              >
                <ExternalLink size={13} />
                <span className="hidden sm:inline">Open in Drive</span>
              </a>
            </div>
          </div>

          {/* Live Iframe Display Area (Actual Google Drive Certificate) */}
          <div className="flex-1 w-full h-full bg-[#1b1c22] relative overflow-hidden">
            <iframe
              key={`${selectedCert.id}-${iframeKey}`}
              src={previewUrl}
              title={selectedCert.title}
              className="absolute inset-0 w-full h-full border-0 bg-white"
              allow="autoplay"
            />
          </div>
        </div>
      </div>

    </div>
  );
};
