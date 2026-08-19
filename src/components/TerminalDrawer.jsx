import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';

const TerminalDrawer = ({ isOpen, onClose, onOpenContact, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState([
    { text: '==================================================', type: 'system' },
    { text: '⚡ HARSH LAGWAL AI CORE SYSTEM v3.4.0 (ACTIVE)', type: 'system' },
    { text: 'Type "help" to view available terminal commands.', type: 'info' },
    { text: '==================================================', type: 'system' },
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `harsh@portfolio:~$ ${input}`, type: 'user' }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: 'Available Commands:', type: 'system' },
          { text: '  • help        - List all commands', type: 'info' },
          { text: '  • skills      - Display AI / ML & full-stack expertise', type: 'info' },
          { text: '  • projects    - View AI & Machine Learning repositories', type: 'info' },
          { text: '  • experience  - Display professional timeline & internships', type: 'info' },
          { text: '  • resume      - Open Harsh Lagwal\'s Resume viewer', type: 'info' },
          { text: '  • contact     - Display email and direct reach channels', type: 'info' },
          { text: '  • sudo hire   - Authorize hiring protocol', type: 'accent' },
          { text: '  • clear       - Clear terminal logs', type: 'info' },
          { text: '  • exit        - Close terminal', type: 'info' }
        );
        break;

      case 'skills':
        newHistory.push(
          { text: '── [CORE AI & MACHINE LEARNING] ──', type: 'accent' },
          { text: 'Generative AI, Machine Learning, Deep Learning, NLP, Prompt Engineering, TensorFlow, PyTorch, Agentic AI, Computer Vision', type: 'info' },
          { text: '── [LANGUAGES & DATA] ──', type: 'accent' },
          { text: 'Python, SQL, MongoDB, Data Analysis, Postman', type: 'info' },
          { text: '── [TOOLS & FRAMEWORKS] ──', type: 'accent' },
          { text: 'Streamlit, Git, GitHub, VS Code, Anaconda, OpenCV', type: 'info' }
        );
        break;

      case 'projects':
        newHistory.push(
          { text: '── [HIGHLIGHTED PROJECTS] ──', type: 'accent' },
          { text: '1. WanderLust.ai - AI Travel Planner (Gemini AI + React + TS)', type: 'info' },
          { text: '2. Healthcare Assistant Chatbot - NLP medical assistant', type: 'info' },
          { text: '3. Object Detection System - SSD MobileNet v3 & OpenCV DNN', type: 'info' },
          { text: '4. Safalta Apki Chatbot - Streamlit & DeepSeek API', type: 'info' },
          { text: '5. Employee Salary Prediction - Scikit-learn ML solution', type: 'info' },
          { text: '6. AlgoFlow VS Code Extension - Interactive Algorithm Visualizer', type: 'info' }
        );
        break;

      case 'experience':
        newHistory.push(
          { text: '── [PROFESSIONAL TIMELINE] ──', type: 'accent' },
          { text: '• AI / ML Intern @ Upto Skills (Jan 2026 - Apr 2026)', type: 'info' },
          { text: '• Campus Ambassador @ eDC IIT Delhi (Dec 2025 - Feb 2026)', type: 'info' },
          { text: '• Generative AI Engineer @ SpectoV (Jul 2025 - Sep 2025)', type: 'info' },
          { text: '• AI Azure Intern @ Edunet Foundation (Jun 2025 - Jul 2025)', type: 'info' },
          { text: '• AI/ML Intern @ Edunet Foundation (Jun 2025 - Jul 2025)', type: 'info' },
          { text: '• AI Transformative Learning Intern @ Edunet Foundation (Jan 2025 - Mar 2025)', type: 'info' }
        );
        break;

      case 'resume':
        newHistory.push({ text: '📄 Launching Resume Viewer...', type: 'system' });
        setTimeout(() => onOpenResume(), 300);
        break;

      case 'contact':
        newHistory.push(
          { text: '📧 Email: Harshlagwal2005@gmail.com', type: 'info' },
          { text: '📍 Location: Himachal Pradesh, India', type: 'info' },
          { text: '🌐 GitHub: https://github.com/harshlagwal', type: 'info' },
          { text: '💼 LinkedIn: https://linkedin.com/in/harsh-lagwal', type: 'info' }
        );
        break;

      case 'sudo hire':
      case 'hire':
        newHistory.push(
          { text: '🎉 ACCESS GRANTED: Protocol "HIRE_HARSH" executed successfully!', type: 'accent' },
          { text: 'Redirecting to Contact console...', type: 'system' }
        );
        setTimeout(() => {
          onClose();
          onOpenContact();
        }, 500);
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        newHistory.push({
          text: `Command not found: "${cmd}". Type "help" for a list of commands.`,
          type: 'error'
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 font-mono">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Terminal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative flex flex-col bg-[#050811] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden z-10 transition-all duration-300 ${
              isMaximized ? 'w-full h-full' : 'w-full max-w-3xl h-[65vh] md:h-[520px]'
            }`}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0c1222] border-b border-cyan-500/20 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 flex items-center gap-1.5 text-xs text-cyan-400 font-bold">
                  <TerminalIcon size={14} /> harsh@ai-engine:~$
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-1 hover:text-cyan-400 transition-colors"
                >
                  {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                </button>
                <button
                  onClick={onClose}
                  className="p-1 hover:text-red-400 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Terminal Logs */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1.5 text-xs sm:text-sm">
              {history.map((item, idx) => (
                <div
                  key={idx}
                  className={`${
                    item.type === 'user'
                      ? 'text-cyan-300 font-semibold'
                      : item.type === 'accent'
                      ? 'text-emerald-400 font-bold'
                      : item.type === 'error'
                      ? 'text-red-400'
                      : item.type === 'system'
                      ? 'text-purple-400'
                      : 'text-gray-300'
                  }`}
                >
                  {item.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Terminal Input Line */}
            <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-[#080d1a] border-t border-cyan-500/20">
              <span className="text-cyan-400 font-bold mr-2 text-xs sm:text-sm">harsh@ai:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command (e.g. 'help', 'skills', 'projects', 'sudo hire')..."
                className="flex-1 bg-transparent text-white placeholder:text-gray-600 outline-none text-xs sm:text-sm font-mono"
              />
              <button type="submit" className="text-cyan-400 hover:text-cyan-300 ml-2">
                <CornerDownLeft size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TerminalDrawer;
