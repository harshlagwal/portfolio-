import React from 'react';

import finderImg from '../../assets/icons/finder.png';
import mailImg from '../../assets/icons/mail.png';
import notesImg from '../../assets/icons/notes.png';
import previewImg from '../../assets/icons/preview.png';
import siriImg from '../../assets/icons/siri.png';
import safariImg from '../../assets/icons/safari.png';
import terminalImg from '../../assets/icons/terminal.png';
import settingsImg from '../../assets/icons/settings.png';
import linkedinImg from '../../assets/icons/linkedin_official.svg';
import githubImg from '../../assets/icons/github_official.svg';
import certificateImg from '../../assets/icons/certificate.png';
import resumeImg from '../../assets/icons/resume.png';
import iitPatnaImg from '../../assets/icons/iit_patna.png';

/**
 * Official Apple macOS Sonoma / Sequoia App Icons
 * Uses authentic official artwork provided & downloaded,
 * framed in Apple continuous squircle curvature with drop shadows.
 */
export const AppIcon = ({ id, size = 52, className = '' }) => {
  const iconMap = {
    finder: finderImg,
    mail: mailImg,
    notes: notesImg,
    preview: previewImg,
    siri: siriImg,
    safari: safariImg,
    terminal: terminalImg,
    settings: settingsImg,
    linkedin: linkedinImg,
    github: githubImg,
    certificate: certificateImg,
    resume: resumeImg,
    iitpatna: iitPatnaImg,
  };

  const imgSrc = iconMap[id];

  if (imgSrc) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`relative rounded-[22.5%] overflow-hidden flex items-center justify-center transition-transform ${className}`}
      >
        <img
          src={imgSrc}
          alt={id}
          className="w-full h-full object-contain pointer-events-none drop-shadow-md select-none"
          loading="eager"
        />
      </div>
    );
  }

  // Fallback for settings or trash
  if (id === 'settings') {
    return (
      <div
        style={{ width: size, height: size }}
        className={`relative rounded-[22.5%] overflow-hidden shadow-lg border border-white/20 bg-gradient-to-b from-[#64748b] via-[#334155] to-[#1e293b] flex items-center justify-center ${className}`}
      >
        <svg className="w-3/4 h-3/4" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="28" fill="#94a3b8" />
          <circle cx="50" cy="50" r="12" fill="#1e293b" />
        </svg>
      </div>
    );
  }

  if (id === 'trash') {
    return (
      <div
        style={{ width: size, height: size }}
        className={`relative rounded-[22.5%] overflow-hidden shadow-md border border-white/20 bg-gradient-to-b from-[#94a3b8] to-[#475569] flex items-center justify-center ${className}`}
      >
        <svg className="w-3/5 h-3/5" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-[22.5%] bg-blue-600 flex items-center justify-center text-white font-bold text-xs ${className}`}
    >
      {id}
    </div>
  );
};
