import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  GitBranch, 
  Flame, 
  Code2, 
  Layers, 
  CheckCircle2,
  FolderGit2,
  Loader2
} from 'lucide-react';
import ContributionSkyline from '@/components/ui/contribution-skyline';
import { portfolioData } from '../../../data/portfolioData';
import githubOfficialSvg from '../../../assets/icons/github_official.svg';
import { useTheme } from '../../../context/ThemeContext';

// Module-level cache so real data persists across window open/close
let cachedContributions = null;
let cachedTotalContributions = 224;

export const GitHubApp = () => {
  const { isDark } = useTheme();
  const username = portfolioData.personal.handle || 'harshlagwal';
  const profileUrl = portfolioData.personal.github || `https://github.com/${username}`;

  const [contributionData, setContributionData] = useState(cachedContributions);
  const [isLoading, setIsLoading] = useState(!cachedContributions);
  const [totalContributions, setTotalContributions] = useState(cachedTotalContributions);

  // Fetch real-time GitHub contribution data
  useEffect(() => {
    let isMounted = true;
    const fetchGitHubData = async () => {
      try {
        if (!cachedContributions) {
          setIsLoading(true);
        }
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (res.ok) {
          const json = await res.json();
          if (json && Array.isArray(json.contributions) && json.contributions.length > 0) {
            const mapped = json.contributions.map((c) => ({
              date: c.date,
              count: c.count ?? 0
            }));
            cachedContributions = mapped;
            if (json.total?.lastYear) {
              cachedTotalContributions = json.total.lastYear;
            }
            if (isMounted) {
              setContributionData(mapped);
              setTotalContributions(cachedTotalContributions);
            }
          }
        }
      } catch (err) {
        console.log('GitHub API offline or rate-limited; verified fallback will be used', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchGitHubData();
    return () => {
      isMounted = false;
    };
  }, [username]);

  return (
    <div className={`h-full flex flex-col font-sans overflow-y-auto select-text scrollbar-thin transition-colors duration-200 ${
      isDark 
        ? 'bg-[#0d1117] text-[#c9d1d9] scrollbar-thumb-white/10' 
        : 'bg-[#f6f8fa] text-[#1f2328] scrollbar-thumb-black/10'
    }`}>
      {/* ── Top Header Bar (macOS GitHub Native Chrome) ── */}
      <header className={`sticky top-0 z-30 flex items-center justify-between gap-2.5 px-3.5 sm:px-5 py-2.5 sm:py-3.5 backdrop-blur-xl border-b transition-colors duration-200 shadow-sm ${
        isDark 
          ? 'bg-[#161b22]/95 border-[#30363d]' 
          : 'bg-white/95 border-[#d0d7de]'
      }`}>
        <div className="flex items-center gap-2.5 min-w-0 truncate">
          <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden p-1.5 border flex items-center justify-center shrink-0 shadow-inner ${
            isDark ? 'bg-[#21262d] border-white/10' : 'bg-[#f6f8fa] border-[#d0d7de]'
          }`}>
            <img src={githubOfficialSvg} alt="GitHub" className="w-full h-full object-contain" />
          </div>
          <div className="min-w-0 truncate">
            <div className="flex items-center gap-1.5 truncate">
              <h2 className={`text-sm sm:text-[15px] font-semibold tracking-tight truncate ${
                isDark ? 'text-white' : 'text-[#1f2328]'
              }`}>
                {portfolioData.personal.name}
              </h2>
              <span className={`text-[11px] font-mono shrink-0 hidden xs:inline ${
                isDark ? 'text-[#8b949e]' : 'text-[#656d76]'
              }`}>
                @{username}
              </span>
            </div>
            <p className={`text-[10.5px] sm:text-[11.5px] truncate ${isDark ? 'text-[#8b949e]' : 'text-[#656d76]'}`}>
              AI & ML Engineer · 3D Interactive Skyline
            </p>
          </div>
        </div>

        {/* ── Prominent Action Buttons ── */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => window.open(profileUrl, '_blank')}
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-medium text-white transition-colors shadow-sm cursor-pointer border active:scale-95 ${
              isDark 
                ? 'bg-[#238636] hover:bg-[#2ea043] active:bg-[#1f7f32] border-[#3fb950]/30' 
                : 'bg-[#1f883d] hover:bg-[#1a7f37] active:bg-[#197935] border-[#1a7f37]'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Profile</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </button>
        </div>
      </header>

      {/* ── Main Skyline Section ── */}
      <div className="p-3 sm:p-4 md:p-6 pb-24 sm:pb-8 space-y-6">
        {/* Interactive 3D Contribution Skyline Canvas */}
        <div 
          className={`rounded-2xl border p-2 shadow-xl overflow-hidden relative min-h-[380px] flex flex-col justify-center transition-all duration-200 ${
            isDark 
              ? 'border-[#30363d] bg-[#0d1117] shadow-2xl' 
              : 'border-[#d0d7de] bg-white shadow-md'
          }`}
          style={{
            '--color-background': isDark ? '#0d1117' : '#ffffff',
            '--color-foreground': isDark ? '#f0f6fc' : '#1f2328',
            '--color-border': isDark ? '#30363d' : '#d0d7de',
            '--color-muted-foreground': isDark ? '#8b949e' : '#656d76',
            color: isDark ? '#f0f6fc' : '#1f2328',
            backgroundColor: isDark ? '#0d1117' : '#ffffff'
          }}
        >
          {isLoading && !contributionData ? (
            <div className="h-[360px] flex flex-col items-center justify-center gap-3">
              <Loader2 className={`w-8 h-8 animate-spin ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <div className="text-center">
                <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#1f2328]'}`}>Scanning Live GitHub Data</p>
                <p className={`text-xs font-mono mt-0.5 ${isDark ? 'text-[#8b949e]' : 'text-[#656d76]'}`}>@{username} contributions</p>
              </div>
            </div>
          ) : (
            <ContributionSkyline
              key={isDark ? 'github-dark' : 'github-light'}
              data={contributionData}
              defaultView="3d"
              palette="github"
              orbit={true}
              showStats={true}
              showLegend={true}
              showToggle={true}
              title={
                <div className="flex items-center gap-2">
                  <Flame className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <span className={`font-medium text-sm ${isDark ? 'text-white' : 'text-[#1f2328]'}`}>
                    GitHub Contribution Skyline (3D Real-time)
                  </span>
                </div>
              }
              className={`border-0 bg-transparent ${isDark ? 'text-[#c9d1d9]' : 'text-[#1f2328]'}`}
            />
          )}
        </div>

        {/* ── Featured GitHub Repositories Grid ── */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-2 ${
              isDark ? 'text-[#8b949e]' : 'text-[#656d76]'
            }`}>
              <Code2 className={`w-3.5 h-3.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              Pinned Repositories & Engineering Work
            </h3>
            <a 
              href={profileUrl} 
              target="_blank" 
              rel="noreferrer" 
              className={`text-xs flex items-center gap-1 hover:underline ${
                isDark ? 'text-blue-400 hover:text-blue-300' : 'text-[#0969da] hover:text-[#0550ae]'
              }`}
            >
              View all repos on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {portfolioData.projects.map((proj) => (
              <div
                key={proj.id}
                className={`group flex flex-col justify-between p-4 rounded-xl border transition-all duration-200 shadow-xs ${
                  isDark 
                    ? 'bg-[#161b22] border-[#30363d] hover:border-[#8b949e]/50 hover:bg-[#1c2128]' 
                    : 'bg-white border-[#d0d7de] hover:border-[#0969da]/50 hover:bg-[#f6f8fa]'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <a
                      href={proj.github || profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`font-semibold text-sm group-hover:underline flex items-center gap-1.5 ${
                        isDark ? 'text-[#58a6ff]' : 'text-[#0969da]'
                      }`}
                    >
                      <FolderGit2 className={`w-3.5 h-3.5 ${isDark ? 'text-[#8b949e]' : 'text-[#656d76]'}`} />
                      {proj.title}
                    </a>
                    {proj.tag && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium whitespace-nowrap border ${
                        isDark 
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                          : 'bg-blue-50 text-[#0969da] border-blue-200'
                      }`}>
                        {proj.tag}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs line-clamp-2 leading-relaxed mb-3 ${
                    isDark ? 'text-[#8b949e]' : 'text-[#656d76]'
                  }`}>
                    {proj.summary}
                  </p>
                </div>

                <div className={`space-y-3 pt-2 border-t ${
                  isDark ? 'border-[#30363d]/60' : 'border-[#d0d7de]/60'
                }`}>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.slice(0, 3).map((t) => (
                      <span 
                        key={t} 
                        className={`text-[10px] px-2 py-0.5 rounded border ${
                          isDark 
                            ? 'bg-[#21262d] text-[#c9d1d9] border-white/5' 
                            : 'bg-[#f6f8fa] text-[#24292f] border-[#d0d7de]'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className={`text-[11px] flex items-center gap-1 ${
                      isDark ? 'text-[#8b949e]' : 'text-[#656d76]'
                    }`}>
                      <GitBranch className="w-3 h-3" /> main
                    </span>
                    <a
                      href={proj.github || profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors border ${
                        isDark 
                          ? 'bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white border-white/10' 
                          : 'bg-[#f6f8fa] hover:bg-[#eaeef2] text-[#24292f] hover:text-black border-[#d0d7de]'
                      }`}
                    >
                      <span>Code</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
