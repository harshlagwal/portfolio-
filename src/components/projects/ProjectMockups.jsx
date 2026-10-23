import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';

const projectImages = {
  'master-ai': {
    src: '/projects/master-ai.png',
    title: 'Master AI – Real Engines. Real Architectures.',
    liveUrl: 'https://master-ai-iota.vercel.app',
    status: 'Live Production'
  },
  'codeink': {
    src: '/projects/codeink.png',
    title: 'CODEINK – Interactive CS Learning Platform',
    liveUrl: 'https://code-ink-theta.vercel.app/',
    status: 'Live on Vercel'
  },
  'pyviz-sandbox': {
    src: '/projects/pyviz-sandbox.png',
    title: 'PyViz Sandbox – Zero-Latency Python Data Science',
    liveUrl: 'https://py-viz-sandbox.vercel.app/',
    status: 'Live on Vercel'
  },
  'codechaska': {
    src: '/projects/codechaska.png',
    title: 'CodeChaska – Cyberpunk Coding Universe',
    liveUrl: 'https://code-chaska.vercel.app',
    status: 'Live on Vercel'
  },
  'atc-constructions': {
    src: '/projects/atc-constructions.png',
    title: 'Amit Traders & Constructions Portal',
    liveUrl: 'https://atc-constructions.vercel.app/',
    status: 'Client Production'
  },
  'sheetla-mata-mandir': {
    src: '/projects/sheetla-mata.png',
    title: 'Shree Sheetla Mata Mandir Website',
    liveUrl: 'https://sheetla-mata-mandir-website.pages.dev/',
    status: 'Cloudflare Pages Live'
  },
  'algoflow': {
    src: '/projects/algoflow.png',
    title: 'AlgoFlow – Visual Algorithms Made Simple',
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=harshlagwal.algoflow',
    status: 'VS Code Marketplace'
  }
};

/**
 * High-fidelity, authentic project showcase rendering real, verified screenshots.
 * Replaces simulated mockups with actual production interfaces and direct live links.
 */
export const ProjectMockup = ({ projectId }) => {
  const meta = projectImages[projectId] || projectImages['master-ai'];

  return (
    <div className="group relative w-full h-full flex items-center justify-center">
      {/* Interactive Link Container */}
      <a
        href={meta.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live project: ${meta.title}`}
        className="relative block w-full h-full max-h-[560px] rounded-2xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.015] focus:outline-none focus:ring-2 focus:ring-[#0d0f12] dark:focus:ring-white cursor-pointer"
      >
        {/* High-Resolution Real Screenshot with Ambient Glow */}
        <img
          src={meta.src}
          alt={meta.title}
          loading="lazy"
          className="w-full h-full object-contain drop-shadow-2xl select-none"
        />

        {/* Subtle Live Badge Hover Indicator */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0d0f12]/90 hover:bg-[#0d0f12] text-white dark:bg-white/95 dark:hover:bg-white dark:text-[#0d0f12] text-xs font-semibold shadow-lg backdrop-blur-md">
            <Globe size={13} strokeWidth={2} />
            <span>Visit Live</span>
            <ArrowUpRight size={12} strokeWidth={2.2} />
          </span>
        </div>
      </a>
    </div>
  );
};

export default ProjectMockup;
