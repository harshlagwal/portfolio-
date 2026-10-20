import React from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { portfolioData } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundEffects';
import MacOSDock from '../ui/mac-os-dock';

import finderImg from '../../assets/icons/finder.png';
import notesImg from '../../assets/icons/notes.png';
import certificateImg from '../../assets/icons/certificate.png';
import resumeImg from '../../assets/icons/resume.png';
import terminalImg from '../../assets/icons/terminal.png';
import mailImg from '../../assets/icons/mail.png';
import siriImg from '../../assets/icons/siri.png';
import linkedinImg from '../../assets/icons/linkedin_official.svg';
import githubImg from '../../assets/icons/github_official.svg';
import settingsImg from '../../assets/icons/settings.png';

export const Dock = () => {
  const { 
    windows, 
    openWindow,
    toggleWindowFromDock,
    isSiriOpen
  } = useWindowManager();

  // Pinned persistent dock applications
  const pinnedApps = [
    { id: 'finder', name: 'Finder', icon: finderImg },
    { id: 'notes', name: 'Notes', icon: notesImg },
    { id: 'terminal', name: 'Terminal', icon: terminalImg },
    { id: 'mail', name: 'Mail', icon: mailImg },
    { id: 'siri', name: 'Siri', icon: siriImg },
    { id: 'github', name: 'GitHub Skyline', icon: githubImg },
    { 
      id: 'linkedin', 
      name: 'LinkedIn', 
      icon: linkedinImg, 
      action: () => window.open(portfolioData.personal.linkedin, '_blank') 
    },
    { id: 'settings', name: 'Settings', icon: settingsImg }
  ];

  // Dynamic Apps: If an unpinned window is open (such as Preview/Certifications or Resume), show it dynamically in the dock!
  const dynamicApps = [];
  if (windows['preview']?.isOpen) {
    dynamicApps.push({
      id: 'preview',
      name: 'Certifications',
      icon: certificateImg,
      action: () => toggleWindowFromDock('preview')
    });
  }
  if (windows['resume']?.isOpen) {
    dynamicApps.push({
      id: 'resume',
      name: 'Resume (CV)',
      icon: resumeImg,
      action: () => toggleWindowFromDock('resume')
    });
  }

  // Insert dynamic running apps right before Settings, just like macOS
  const settingsIndex = pinnedApps.findIndex((a) => a.id === 'settings');
  const dockApps = settingsIndex !== -1
    ? [
        ...pinnedApps.slice(0, settingsIndex),
        ...dynamicApps,
        ...pinnedApps.slice(settingsIndex)
      ]
    : [...pinnedApps, ...dynamicApps];

  const handleAppClick = (appId) => {
    soundFX.playPop();
    const target = dockApps.find((a) => a.id === appId);
    if (target?.action) {
      target.action();
      return;
    }
    toggleWindowFromDock(appId);
  };

  // Compute active process indicator dots
  const openApps = dockApps
    .filter((a) => {
      if (a.id === 'siri') return isSiriOpen;
      return windows[a.id]?.isOpen && !windows[a.id]?.isMinimized;
    })
    .map((a) => a.id);

  return (
    <div className="fixed bottom-3 inset-x-0 flex justify-center z-[900] pointer-events-none select-none px-2">
      <MacOSDock
        apps={dockApps}
        onAppClick={handleAppClick}
        openApps={openApps}
        className="pointer-events-auto"
      />
    </div>
  );
};
