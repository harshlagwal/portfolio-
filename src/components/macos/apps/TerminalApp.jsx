import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../../../data/portfolioData';
import { soundFX } from '../../../utils/soundEffects';
import { useWindowManager } from '../../../context/WindowManagerContext';

export const TerminalApp = () => {
  const { openWindow } = useWindowManager();
  const [history, setHistory] = useState([
    {
      type: 'output',
      text: [
        'Last login: Mon Oct 19 15:45:00 on ttys001',
        'Welcome to HarshOS (Darwin Kernel Version 24.1.0: Apple M3 Max)',
        'Type "help" to view available terminal commands or "sudo hire" to initiate recruiter fast-track.',
        ''
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    setCmdHistory((prev) => [...prev, rawCmd]);
    setHistoryPointer(-1);

    // Command echo
    const echoEntry = { type: 'command', text: rawCmd };

    if (!cmd) {
      setHistory((prev) => [...prev, echoEntry]);
      return;
    }

    soundFX.playClick();
    let responseLines = [];

    switch (cmd) {
      case 'help':
        responseLines = [
          'AVAILABLE SYSTEM COMMANDS:',
          '  help        - Show this reference menu',
          '  whoami      - Developer identity & IIT Patna background',
          '  skills      - List machine learning & software engineering stack',
          '  projects    - Output featured software & AI agents',
          '  experience  - View industry internship timeline',
          '  resume      - Inspect resume links and summary',
          '  contact     - Display direct communications info',
          '  neofetch    - System architecture & runtime information',
          '  date        - Current timestamp',
          '  clear       - Clear screen buffer',
          '  sudo hire   - Launch the fast-track hiring protocol 🚀'
        ];
        break;

      case 'whoami':
        responseLines = [
          `NAME: ${portfolioData.personal.name}`,
          `TITLE: ${portfolioData.personal.title}`,
          `ACADEMICS: ${portfolioData.personal.subTitle}`,
          `LOCATION: ${portfolioData.personal.location}`,
          `SUMMARY: ${portfolioData.personal.bio}`
        ];
        break;

      case 'skills':
        responseLines = [
          'TECHNICAL ARSENAL:',
          '• AI & ML: Generative AI, PyTorch, TensorFlow, Deep Learning, Gemini 1.5, OpenCV DNN, NLP',
          '• Languages: Python, JavaScript, TypeScript, SQL, C++',
          '• Web & Microservices: React, FastAPI, Node.js, Express, Tailwind CSS, Docker',
          '• Cloud & Platforms: Azure ML, MongoDB, Git, Linux/Bash, Vercel'
        ];
        break;

      case 'projects':
        responseLines = [
          'FEATURED CODE & PRODUCTION DELIVERABLES:',
          ...portfolioData.projects.map((p) => `• [${p.tag}] ${p.title} - ${p.category} (${p.github})`)
        ];
        break;

      case 'experience':
        responseLines = [
          'PROFESSIONAL EXPERIENCES:',
          ...portfolioData.experiences.map((e) => `• ${e.role} @ ${e.company} (${e.duration}) - ${e.type}`)
        ];
        break;

      case 'resume':
        responseLines = [
          '📄 Harsh Lagwal Resume PDF:',
          `Direct URL: ${portfolioData.personal.resumeLink}`,
          'Opening Preview.app...'
        ];
        openWindow('preview');
        break;

      case 'contact':
        responseLines = [
          `Email: ${portfolioData.personal.email}`,
          `LinkedIn: ${portfolioData.personal.linkedin}`,
          `GitHub: ${portfolioData.personal.github}`,
          'Opening Mail.app...'
        ];
        openWindow('mail');
        break;

      case 'neofetch':
        responseLines = [
          '       .:\'       harsh@ai-studio',
          '     __ :\'__     -----------------',
          '  .\'`.  ` : `\'.  OS: macOS Sequoia 15.2 (HarshOS)',
          ' : /.\'     \'.\\ : Host: AI Studio Workstation (Apple Silicon)',
          ' : /         \\ : Kernel: 24.1.0 Darwin x86_64/arm64',
          '  \'.__     __.\'  Uptime: 2 days, 4 hours',
          '     ``---``     Shell: zsh 5.9',
          '                 Academics: MBA Decision Science @ IIT Patna',
          '                 Core: PyTorch | FastAPI | GenAI | React'
        ];
        break;

      case 'date':
        responseLines = [new Date().toString()];
        break;

      case 'sudo hire':
        responseLines = [
          '🎉 [SUCCESS]: HIRING PROTOCOL ACTIVATED!',
          '--------------------------------------------------',
          'Candidate: Harsh Lagwal is immediately primed for your engineering team.',
          'Launching Mail compose window to send an interview invitation...'
        ];
        soundFX.playChime();
        openWindow('mail');
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        responseLines = [
          `zsh: command not found: ${rawCmd}`,
          'Type "help" for a list of available commands.'
        ];
    }

    setHistory((prev) => [
      ...prev,
      echoEntry,
      { type: 'output', text: responseLines }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextPointer = historyPointer === -1 ? cmdHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setInputVal(cmdHistory[nextPointer]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= cmdHistory.length) {
        setHistoryPointer(-1);
        setInputVal('');
      } else {
        setHistoryPointer(nextPointer);
        setInputVal(cmdHistory[nextPointer]);
      }
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="h-full w-full bg-[#121317] text-[#34d399] font-mono text-xs md:text-sm p-4 pb-24 sm:pb-6 overflow-y-auto select-text cursor-text"
    >
      {/* History Output */}
      {history.map((entry, idx) => (
        <div key={idx} className="mb-2">
          {entry.type === 'command' ? (
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-blue-400">harsh@ai-studio:~$</span>
              <span>{entry.text}</span>
            </div>
          ) : (
            <div className="space-y-0.5 text-slate-300">
              {entry.text.map((line, lIdx) => (
                <div key={lIdx} className="whitespace-pre-wrap leading-relaxed">
                  {line}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Live Input Line */}
      <div className="flex items-center gap-2 text-slate-300">
        <span className="text-blue-400 shrink-0">harsh@ai-studio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 bg-transparent outline-none text-[#34d399] caret-emerald-400"
        />
      </div>

      <div ref={terminalEndRef} />
    </div>
  );
};
