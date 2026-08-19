import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, ArrowRight } from 'lucide-react';

const AIAssistantModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "👋 Hi! I'm Harsh's AI Copilot. Ask me anything about his AI/ML experience, projects, or why he's a great fit for your team!",
      quickPrompts: [
        "Why hire Harsh?",
        "What is his Tech Stack?",
        "Tell me about WanderLust.ai",
        "How can I contact him?"
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const knowledgeBase = (query) => {
    const q = query.toLowerCase();

    if (q.includes('why hire') || q.includes('hire') || q.includes('reason') || q.includes('strength')) {
      return {
        text: "🎯 Top 3 Reasons to Hire Harsh Lagwal:\n\n1. Applied AI Expertise: Hands-on experience in Generative AI, PyTorch, TensorFlow, and Large Language Models (Gemini, DeepSeek, OpenAI).\n2. Proven Track Record: Completed 6 industry internships (including Upto Skills, SpectoV, Edunet Foundation) and built 6+ production AI solutions.\n3. Full-Stack Execution: Ability to take an AI model from raw data and fine-tuning all the way to a production web app with React, FastAPI, and Cloud deployment.",
        action: { label: "View Resume", href: "https://drive.google.com/file/d/1PA8fV23UmJ2AYf7kxUGaihI88M1NWW0b/view?usp=sharing" }
      };
    }

    if (q.includes('tech stack') || q.includes('skill') || q.includes('technolog') || q.includes('python') || q.includes('pytorch')) {
      return {
        text: "⚡ Harsh's Core Technical Arsenal:\n\n• AI & ML: Generative AI, PyTorch, TensorFlow, Deep Learning, NLP, Prompt Engineering, OpenCV DNN.\n• Languages & Tools: Python, SQL, TypeScript, React, MongoDB, Git, Docker, Streamlit.\n• LLMs & APIs: Gemini 1.5 Pro, DeepSeek, HuggingFace Transformers, LangChain.",
      };
    }

    if (q.includes('atc') || q.includes('client') || q.includes('construction') || q.includes('mandir') || q.includes('sheetla')) {
      return {
        text: "🏢 Client & Production Web Deliverables:\n\n1. ATC Constructions (Live: atc-constructions.vercel.app): Full-stack commercial platform for govt-approved civil contractor Amit Thakur.\n2. Shree Sheetla Mata Mandir Portal: Digital community platform for temple event schedules, darshan timings, and devotee information.",
        action: { label: "View ATC Live", href: "https://atc-constructions.vercel.app" }
      };
    }

    if (q.includes('wanderlust') || q.includes('project') || q.includes('flagship') || q.includes('portfolio')) {
      return {
        text: "🌍 Featured Projects & AI Systems (8+ Total):\n\n• WanderLust.ai: Flagship AI travel planner powered by Gemini 1.5 Pro.\n• ATC Constructions: Live production commercial web portal.\n• Healthcare Assistant Chatbot: Real-time symptom triage with NLP.\n• Real-Time Object Detection: 30+ FPS computer vision with SSD MobileNet v3.\n• Shree Sheetla Mata Mandir: Community cultural portal.",
        action: { label: "Explore Projects", id: "projects" }
      };
    }


    if (q.includes('contact') || q.includes('email') || q.includes('hire him') || q.includes('reach') || q.includes('phone')) {
      return {
        text: "📬 Get in Touch with Harsh:\n\n• Email: Harshlagwal2005@gmail.com\n• LinkedIn: linkedin.com/in/harsh-lagwal\n• GitHub: github.com/harshlagwal\n\nHe is currently open to Full-time AI Engineer and ML roles!",
        action: { label: "Send Message", id: "contact" }
      };
    }

    if (q.includes('internship') || q.includes('experience') || q.includes('work') || q.includes('edunet') || q.includes('upto skill')) {
      return {
        text: "💼 Professional Experience:\n\n• Upto Skills: AI / ML Intern (Model fine-tuning & algorithms)\n• SpectoV: Generative AI Engineer (LLM workflows & prompt optimization)\n• eDC IIT Delhi: Campus Ambassador\n• Edunet Foundation: AI Azure & Transformative Learning Intern (3 internships).",
        action: { label: "View Timeline", id: "experience" }
      };
    }

    if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('iit') || q.includes('university')) {
      return {
        text: "🎓 Academic Background:\n\n• MBA in Decision Science – Indian Institute of Technology (IIT) Patna\n• B.Tech in Computer Science & Engineering – Rayat Bahra University",
        action: { label: "View Education", id: "education" }
      };
    }

    return {
      text: "Harsh is an AI Engineer with deep expertise in Generative AI, PyTorch, and NLP. You can ask me about his projects, skills, education, or how to contact him!",
    };
  };

  const handleSend = (textToSend) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = knowledgeBase(messageText);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.text,
        action: response.action
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 500);
  };

  const handleActionClick = (action) => {
    if (action.href) {
      window.open(action.href, '_blank');
    } else if (action.id) {
      setIsOpen(false);
      document.getElementById(action.id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-950 shadow-xl shadow-black/20 backdrop-blur-md border border-gray-700/40 dark:border-gray-200 text-xs font-semibold select-none cursor-pointer transition-all duration-200"
      >
        <Sparkles size={14} className="text-blue-400 dark:text-blue-600" />
        <span>Ask AI</span>
      </motion.button>

      {/* Compact Chat Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-16 right-4 sm:right-6 z-50 w-[92vw] sm:w-[360px] h-[460px] max-h-[75vh] bg-white/95 dark:bg-[#0c1222]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/90 dark:border-white/10 flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-600 dark:bg-cyan-500 text-white dark:text-black flex items-center justify-center shadow-xs">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-bold font-display text-gray-900 dark:text-white leading-tight">
                    Harsh AI Copilot
                  </h3>
                  <p className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                    AI Knowledge Base
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Close AI chat"
              >
                <X size={16} />
              </button>
            </div>


            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div 
                    className={`max-w-[88%] p-3 rounded-2xl leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-xs'
                        : 'bg-gray-100 dark:bg-white/[0.06] text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-white/5 rounded-bl-xs'
                    }`}
                  >
                    {msg.text}

                    {/* Action Button inside bot response */}
                    {msg.action && (
                      <div className="mt-2.5 pt-2 border-t border-gray-200/60 dark:border-white/10">
                        <button
                          onClick={() => handleActionClick(msg.action)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-semibold text-[11px] transition-all shadow-xs cursor-pointer"
                        >
                          <span>{msg.action.label}</span>
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Quick Prompts Chips */}
                  {msg.quickPrompts && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {msg.quickPrompts.map((prompt, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => handleSend(prompt)}
                          className="px-2.5 py-1 rounded-full bg-gray-100 hover:bg-blue-50 dark:bg-white/[0.04] dark:hover:bg-cyan-500/10 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-300 border border-gray-200/80 dark:border-white/10 text-[10px] font-medium transition-colors cursor-pointer select-none"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-2.5 max-w-[80px] rounded-2xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200/60 dark:border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-bounce [animation-delay:0.3s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="p-2.5 border-t border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.02] flex items-center gap-1.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Harsh..."
                className="flex-1 px-3 py-2 rounded-xl bg-white dark:bg-white/[0.05] border border-gray-200/80 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 text-xs outline-none focus:border-blue-500 dark:focus:border-cyan-400"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 rounded-xl bg-blue-600 disabled:opacity-40 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black transition-colors cursor-pointer"
                aria-label="Send query"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistantModal;
