import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  ExternalLink,
  Code2,
  GraduationCap,
  Briefcase,
  Mail,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { useWindowManager } from '../../context/WindowManagerContext';
import { portfolioData } from '../../data/portfolioData';
import { soundFX } from '../../utils/soundEffects';
import siriIconImg from '../../assets/icons/siri.png';

const QUICK_PROMPTS = [
  { label: '🌟 Featured AI Agents', query: 'Tell me about Harsh’s flagship AI projects.' },
  { label: '💻 Core Tech Stack', query: 'What technologies and frameworks does Harsh specialize in?' },
  { label: '🎓 Education & IIT Patna', query: 'What is Harsh’s educational background and IIT Patna MBA?' },
  { label: '📬 Contact & Collaboration', query: 'How can I get in touch or hire Harsh Lagwal?' }
];

export const SiriIntelligenceOverlay = () => {
  const { isSiriOpen, setIsSiriOpen } = useWindowManager();
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: `Hello! I am Harsh’s Apple Intelligence assistant. Ask me anything about his AI/ML engineering, IIT Patna Decision Science MBA, or production software achievements.`
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);
  const inputRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isSiriOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isSiriOpen]);

  // Scroll to bottom on message
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Intelligent Q&A Knowledge Engine
  const generateAnswer = (userQuery) => {
    const q = userQuery.toLowerCase();

    if (q.includes('project') || q.includes('wanderlust') || q.includes('atc') || q.includes('codechaska') || q.includes('flagship')) {
      return `Harsh has engineered multiple high-impact production applications:\n\n• **WanderLust.ai**: Autonomous AI travel planner with Google Gemini 1.5 Pro, interactive maps, and budget analytics.\n• **ATC Constructions Portal**: Live commercial platform for a govt-approved civil contractor (atc-constructions.vercel.app).\n• **CodeChaska**: Cyberpunk gamified interactive coding universe with 360 missions and real-time DSA flow tracers.\n• **AgroSense AI**: Crop yield & soil disease diagnostic system with PyTorch & FastAPI.`;
    }

    if (q.includes('tech') || q.includes('stack') || q.includes('skills') || q.includes('language') || q.includes('tools')) {
      return `Harsh's technical toolkit includes:\n\n• **Languages**: Python, JavaScript, TypeScript, C++, SQL.\n• **AI & ML**: PyTorch, TensorFlow, Hugging Face, LangChain, Google Gemini API, OpenAI APIs, LlamaIndex.\n• **Web & Cloud**: React, Next.js, Node.js, FastAPI, Tailwind CSS, Docker, MongoDB, PostgreSQL, Vercel.`;
    }

    if (q.includes('education') || q.includes('iit') || q.includes('patna') || q.includes('mba') || q.includes('degree') || q.includes('college')) {
      return `**Harsh Lagwal's Academic Credentials**:\n\n• **MBA in Decision Science (2026–2028)** at Indian Institute of Technology (IIT) Patna.\n• **B.Tech in Computer Science & Engineering** from Rayat Bahra University.\n• Verified Certifications from Google, NVIDIA Deep Learning Institute, ISRO, and Anthropic.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('linkedin') || q.includes('reach')) {
      return `You can reach Harsh directly:\n\n• **Email**: Harshlagwal2005@gmail.com\n• **LinkedIn**: linkedin.com/in/harshlagwal\n• **GitHub**: github.com/harshlagwal\n• **Location**: India (Open to global remote and on-site AI roles)`;
    }

    return `Harsh Lagwal is an AI & Machine Learning Engineer and MBA Decision Science Scholar at IIT Patna. He specializes in Generative AI architectures, high-performance web applications, and low-latency microservices with FastAPI & PyTorch. Feel free to explore his projects in Finder or inspect his resume in Preview!`;
  };

  const handleSend = (textToSend) => {
    const text = textToSend || query;
    if (!text.trim()) return;

    soundFX.playPop();
    const userMsg = { id: Date.now().toString(), role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setQuery('');
    setIsTyping(true);

    setTimeout(() => {
      soundFX.playClick();
      const replyText = generateAnswer(text);
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'assistant', text: replyText }
      ]);
      setIsTyping(false);
    }, 650);
  };

  if (!isSiriOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[1200] overflow-hidden flex items-center justify-center p-4 md:p-6 select-text"
        onClick={() => setIsSiriOpen(false)}
      >
        {/* ── macOS Sequoia Screen-Edge Multi-Color Flowing Glow ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Edge Glow Bleed */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 blur-3xl opacity-70 animate-pulse" />
          <div className="absolute -inset-1 rounded-3xl border-2 border-white/20 shadow-[0_0_120px_rgba(168,85,247,0.45)] pointer-events-none" />
        </div>

        {/* ── Backdrop Blur Layer (Google Gemini / Apple Intelligence style) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-2xl"
        />

        {/* ── Floating Apple Intelligence Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl rounded-3xl bg-[#14161f]/95 border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-3xl overflow-hidden flex flex-col max-h-[82vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl overflow-hidden drop-shadow-md flex items-center justify-center bg-black/40 border border-white/10">
                <img src={siriIconImg} alt="Siri" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    Apple Intelligence
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Siri AI Core
                  </span>
                </div>
                <p className="text-[11px] text-white/50">
                  Ask anything about Harsh Lagwal’s engineering and research
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsSiriOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs md:text-sm font-sans leading-relaxed scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Sparkles size={13} className="text-white" />
                  </div>
                )}

                <div
                  className={`p-4 rounded-2xl max-w-[85%] whitespace-pre-line leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                      : 'bg-[#1e2230]/90 text-white/90 border border-white/10 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-white/50 text-xs italic pl-10"
              >
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce [animation-delay:0.4s]" />
                </div>
                <span>Siri is thinking...</span>
              </motion.div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Quick Suggested Prompts Pills */}
          <div className="px-6 py-2 flex flex-wrap gap-2 border-t border-white/5 bg-black/20">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt.label}
                onClick={() => handleSend(prompt.query)}
                className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition-colors cursor-pointer"
              >
                {prompt.label}
              </button>
            ))}
          </div>

          {/* Bottom Prompt Bar (Google Gemini / Apple Intelligence style) */}
          <div className="p-4 bg-[#11131a] border-t border-white/10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="relative flex items-center"
            >
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask Siri about Harsh’s AI models, IIT Patna, or skills..."
                className="w-full pl-5 pr-12 py-3 rounded-2xl bg-white/10 border border-white/15 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all font-sans"
              />
              <button
                type="submit"
                disabled={!query.trim()}
                className="absolute right-2.5 p-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-30 disabled:hover:bg-blue-600 text-white transition-all cursor-pointer shadow-sm"
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
