import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ExternalLink,
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import { soundFX } from '../../../utils/soundEffects';
import { portfolioData } from '../../../data/portfolioData';

export const SiriApp = () => {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'siri',
      text: "Hello! I am Harsh's Apple Intelligence assistant. Ask me anything about his AI/ML models, IIT Patna Decision Science MBA, or full-stack software achievements.",
      quickPrompts: [
        "Why hire Harsh?",
        "What is his Tech Stack?",
        "Tell me about WanderLust.ai",
        "How can I contact him?"
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const queryKnowledge = (q) => {
    const text = q.toLowerCase();

    if (text.includes('why hire') || text.includes('hire') || text.includes('strength')) {
      return {
        text: "🎯 Top 3 Reasons to Hire Harsh Lagwal:\n\n1. Applied AI Expertise: Hands-on experience in Generative AI, PyTorch, and Large Language Models (Gemini, DeepSeek, OpenAI).\n2. Proven Track Record: Completed 6 industry internships (including Upto Skills, SpectoV, Edunet Foundation) and built 6+ production AI solutions.\n3. Full-Stack Execution: Ability to take an AI model from raw data and fine-tuning all the way to a production web app with React, FastAPI, and Cloud deployment.",
        link: portfolioData.personal.resumeLink,
        linkLabel: "Inspect Official Resume"
      };
    }

    if (text.includes('tech stack') || text.includes('skill') || text.includes('python') || text.includes('pytorch')) {
      return {
        text: "⚡ Harsh's Core Technical Arsenal:\n\n• AI & ML: Generative AI, PyTorch, TensorFlow, Deep Learning, NLP, Prompt Engineering, OpenCV DNN.\n• Languages & Tools: Python, SQL, TypeScript, React, MongoDB, Git, Docker, Streamlit.\n• LLMs & APIs: Gemini 1.5 Pro, DeepSeek, HuggingFace Transformers, LangChain."
      };
    }

    if (text.includes('wanderlust') || text.includes('travel') || text.includes('agent')) {
      return {
        text: "🌍 WanderLust.ai is Harsh's flagship autonomous AI travel agent! Powered by Google Gemini 1.5 Pro, it generates personalized multi-day itineraries, dynamic interactive maps, and budget analytics with sub-second response times.",
        link: "https://github.com/harshlagwal/WanderLust.ai",
        linkLabel: "View WanderLust.ai on GitHub"
      };
    }

    if (text.includes('contact') || text.includes('email') || text.includes('reach')) {
      return {
        text: `📬 Direct Contact Information:\n\n• Email: ${portfolioData.personal.email}\n• LinkedIn: ${portfolioData.personal.linkedin}\n• GitHub: ${portfolioData.personal.github}\n\nYou can also click the Mail app in the bottom Dock to send a message directly!`
      };
    }

    if (text.includes('iit') || text.includes('education') || text.includes('mba') || text.includes('decision science')) {
      return {
        text: "🎓 Academic Credentials:\n\nHarsh is pursuing his MBA in Decision Science at IIT Patna (2026–2028), specializing in quantitative business modeling and data-driven executive leadership, following his B.Tech in CSE at Rayat Bahra University."
      };
    }

    return {
      text: `Harsh Lagwal specializes in Generative AI, PyTorch, and decision science systems. For inquiries, you can reach him at ${portfolioData.personal.email} or ask me another question!`
    };
  };

  const handleSend = (userText) => {
    const query = userText || inputVal;
    if (!query.trim()) return;

    soundFX.playClick();
    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = queryKnowledge(query);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'siri',
        text: answer.text,
        link: answer.link,
        linkLabel: answer.linkLabel
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      soundFX.playPop();
    }, 600);
  };

  return (
    <div className="flex flex-col h-full w-full select-none text-slate-800 dark:text-slate-100 bg-[#f9fafc] dark:bg-[#13141b] overflow-hidden">
      {/* ── Siri Header with Glowing Gradient ── */}
      <div className="h-14 px-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between bg-white/70 dark:bg-white/[0.03] backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 flex items-center justify-center text-white shadow-md animate-pulse">
            <Sparkles size={16} />
          </div>
          <div>
            <div className="font-bold text-xs text-slate-900 dark:text-white leading-tight">
              Apple Intelligence
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400">
              Siri AI Assistant for Harsh Lagwal
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setMessages([messages[0]]);
            soundFX.playTrash();
          }}
          title="Reset Conversation"
          className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <RefreshCw size={14} />
        </button>
      </div>

      {/* ── Message Thread ── */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-[#1c1d27] border border-black/5 dark:border-white/10 text-slate-800 dark:text-slate-200 shadow-sm'
              }`}
            >
              <div className="whitespace-pre-wrap">{m.text}</div>

              {m.link && (
                <div className="mt-2.5 pt-2 border-t border-black/10 dark:border-white/10">
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>{m.linkLabel}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>

            {/* Quick Prompts under welcome message */}
            {m.quickPrompts && (
              <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[90%]">
                {m.quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 hover:bg-blue-100 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white dark:bg-[#1c1d27] border border-black/5 dark:border-white/10 w-16">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.4s]" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* ── Input Box with Glowing Border ── */}
      <div className="p-3 border-t border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/[0.02]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#1c1d27] border border-black/10 dark:border-white/10 shadow-sm focus-within:border-blue-500 transition-colors"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ask Siri about Harsh's experience, stack..."
            className="flex-1 bg-transparent px-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 outline-none"
          />
          <button
            type="submit"
            disabled={!inputVal.trim()}
            className="w-7 h-7 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white flex items-center justify-center transition-colors shadow-xs"
          >
            <Send size={13} />
          </button>
        </form>
      </div>
    </div>
  );
};
