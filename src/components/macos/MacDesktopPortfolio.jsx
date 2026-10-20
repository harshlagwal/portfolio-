import React, { useEffect } from 'react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { Dock } from './Dock';
import { Desktop } from './Desktop';
import { MacWindow } from './MacWindow';
import { ControlCenter } from './ControlCenter';
import { AboutThisMacModal } from './AboutThisMacModal';
import { Spotlight } from './Spotlight';

// App Components
import { FinderApp } from './apps/FinderApp';
import { SafariApp } from './apps/SafariApp';
import { NotesApp } from './apps/NotesApp';
import { TerminalApp } from './apps/TerminalApp';
import { PreviewApp } from './apps/PreviewApp';
import { ResumeApp } from './apps/ResumeApp';
import { MailApp } from './apps/MailApp';
import { SettingsApp } from './apps/SettingsApp';
import { GitHubApp } from './apps/GitHubApp';
import { SiriIntelligenceOverlay } from './SiriIntelligenceOverlay';
import { HelloIntro } from './HelloIntro';

import { 
  Folder, 
  Globe, 
  FileText, 
  Terminal, 
  Eye, 
  Award,
  Mail, 
  Settings, 
  Sparkles,
  FolderGit2
} from 'lucide-react';

export const MacDesktopPortfolio = () => {
  const { windows } = useWindowManager();

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none font-sans bg-black">
      {/* ── Background & Desktop Icons ── */}
      <Desktop />

      {/* ── Active Draggable Windows Layer ── */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Finder (Projects) */}
        <div className="pointer-events-auto">
          <MacWindow
            id="finder"
            title="Finder — Projects & Files"
            icon={Folder}
            defaultWidth={920}
            defaultHeight={580}
          >
            <FinderApp />
          </MacWindow>
        </div>

        {/* Safari (LinkedIn & Web) */}
        <div className="pointer-events-auto">
          <MacWindow
            id="safari"
            title="Safari — Portfolio Web"
            icon={Globe}
            defaultWidth={940}
            defaultHeight={600}
          >
            <SafariApp />
          </MacWindow>
        </div>

        {/* Notes (About & Experience) */}
        <div className="pointer-events-auto">
          <MacWindow
            id="notes"
            title="Notes — About Harsh & Journey"
            icon={FileText}
            defaultWidth={880}
            defaultHeight={560}
          >
            <NotesApp />
          </MacWindow>
        </div>

        {/* Terminal (iTerm2) */}
        <div className="pointer-events-auto">
          <MacWindow
            id="terminal"
            title="Terminal — harsh@ai-studio:~ (zsh)"
            icon={Terminal}
            defaultWidth={780}
            defaultHeight={480}
          >
            <TerminalApp />
          </MacWindow>
        </div>

        {/* Certifications (Verified Credentials & Honors) */}
        <div className="pointer-events-auto">
          <MacWindow
            id="preview"
            title="Certifications & Honors — Verified Credentials"
            icon={Award}
            defaultWidth={940}
            defaultHeight={600}
          >
            <PreviewApp />
          </MacWindow>
        </div>

        {/* Resume (Interactive CV & Google Drive PDF) */}
        <div className="pointer-events-auto">
          <MacWindow
            id="resume"
            title="Preview — Harsh Lagwal (Resume.pdf)"
            icon={FileText}
            defaultWidth={940}
            defaultHeight={620}
          >
            <ResumeApp />
          </MacWindow>
        </div>

        {/* Mail (Contact Harsh) */}
        <div className="pointer-events-auto">
          <MacWindow
            id="mail"
            title="Mail — New Message to Harsh Lagwal"
            icon={Mail}
            defaultWidth={740}
            defaultHeight={520}
          >
            <MailApp />
          </MacWindow>
        </div>

        {/* GitHub (Contribution Skyline & Projects) */}
        <div className="pointer-events-auto">
          <MacWindow
            id="github"
            title="GitHub — @harshlagwal (Contribution Skyline)"
            icon={FolderGit2}
            defaultWidth={960}
            defaultHeight={600}
          >
            <GitHubApp />
          </MacWindow>
        </div>

        {/* Settings */}
        <div className="pointer-events-auto">
          <MacWindow
            id="settings"
            title="System Settings"
            icon={Settings}
            defaultWidth={760}
            defaultHeight={520}
          >
            <SettingsApp />
          </MacWindow>
        </div>
      </div>

      {/* ── macOS Bottom Dock ── */}
      <Dock />

      {/* ── Apple Intelligence Full-Screen Siri Experience ── */}
      <SiriIntelligenceOverlay />

      {/* ── Global macOS Modals & Overlays ── */}
      <Spotlight />
      <ControlCenter />
      <AboutThisMacModal />

      {/* ── Iconic macOS "hello" Animated Intro ── */}
      <HelloIntro />
    </div>
  );
};
