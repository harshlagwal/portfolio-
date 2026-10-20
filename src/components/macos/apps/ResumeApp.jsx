import React, { useState } from 'react';
import { 
  Download, 
  ExternalLink, 
  RotateCw, 
  Share2, 
  CheckCircle2,
  FileText,
  FileCheck2
} from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { soundFX } from '../../../utils/soundEffects';

export const ResumeApp = () => {
  const [iframeKey, setIframeKey] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Official resume Google Drive link converted to direct embed preview
  const rawDriveLink = portfolioData.personal.resumeLink || "https://drive.google.com/file/d/1PA8fV23UmJ2AYf7kxUGaihI88M1NWW0b/view?usp=sharing";
  const embedPreviewUrl = rawDriveLink.replace(/\/view.*$/, '/preview');

  const handleReload = () => {
    soundFX.playClick();
    setIframeKey((prev) => prev + 1);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(rawDriveLink);
    soundFX.playPop();
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleOpenDrive = () => {
    soundFX.playClick();
    window.open(rawDriveLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col h-full w-full min-h-[540px] select-none text-slate-800 dark:text-slate-100 bg-[#eef0f4] dark:bg-[#10121a] overflow-hidden font-['Google_Sans',sans-serif]">
      {/* ── macOS & iOS Document Window Toolbar ── */}
      <div className="h-12 px-3 sm:px-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between gap-2 bg-white/95 dark:bg-[#161822]/95 backdrop-blur-md text-xs shrink-0 z-20">
        {/* Document Title & Status */}
        <div className="flex items-center gap-2.5 truncate min-w-0">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            <FileText size={16} />
          </div>
          <div className="truncate">
            <div className="font-bold text-slate-900 dark:text-white truncate text-xs sm:text-sm">
              Harsh_Lagwal_Resume.pdf
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="truncate">Google Drive Verified Document</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Reload Iframe */}
          <button
            onClick={handleReload}
            title="Reload Resume"
            className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer active:scale-95"
          >
            <RotateCw size={13} />
          </button>

          {/* Share / Copy Link */}
          <button
            onClick={handleShare}
            title="Copy Drive Link"
            className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer text-xs font-medium active:scale-95"
          >
            <Share2 size={13} />
            <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
          </button>

          {/* Open Original Drive Tab Button */}
          <button
            onClick={handleOpenDrive}
            title="Open in Google Drive"
            className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer text-xs font-sans active:scale-95"
          >
            <ExternalLink size={13} />
            <span>Open in Drive</span>
          </button>
        </div>
      </div>

      {/* ── Official Google Drive Access Notice Banner ── */}
      <div className="px-3.5 py-2 bg-blue-50/90 dark:bg-blue-500/10 border-b border-blue-200/60 dark:border-blue-500/20 flex items-center justify-between gap-2.5 text-xs shrink-0">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 min-w-0">
          <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
          <span className="truncate text-[11px] sm:text-xs">
            Live PDF: <strong className="text-slate-900 dark:text-white">Completed Final Harsh Lagwal.pdf</strong>
          </span>
        </div>
        <button
          onClick={handleOpenDrive}
          className="text-blue-600 dark:text-cyan-400 font-semibold text-[11px] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
        >
          <span>Fullscreen Drive</span>
          <ExternalLink size={11} />
        </button>
      </div>

      {/* ── Main Canvas: Live Google Drive PDF Iframe (Full Height) ── */}
      <div className="flex-1 w-full min-h-[480px] bg-[#1a1c24] relative overflow-hidden flex flex-col">
        <iframe
          key={iframeKey}
          src={embedPreviewUrl}
          title="Harsh Lagwal Resume (Google Drive)"
          className="w-full h-full min-h-[480px] flex-1 border-0 bg-white"
          allow="autoplay"
        />
      </div>
    </div>
  );
};

export default ResumeApp;
