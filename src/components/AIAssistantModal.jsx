import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, ArrowRight, MessageSquare } from 'lucide-react';
import { RobotHead } from 'robot-heads';

const AIAssistantModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [robotState, setRobotState] = useState('idle');
  const [isHopping, setIsHopping] = useState(false);
  const [activeExplanation, setActiveExplanation] = useState(null);
  const explanationTimerRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "👋 Hi! I'm Harsh's AI Companion. Ask me anything about his AI/ML experience, projects, or why he's a great fit for your team!",
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

  // Knowledge Base logic for the Chat
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

    if (q.includes('wanderlust') || q.includes('project') || q.includes('flagship') || q.includes('portfolio') || q.includes('careercraft') || q.includes('codechaska')) {
      return {
        text: "🌍 Featured Projects & AI Systems (8+ Total):\n\n• WanderLust.ai: Flagship AI travel planner powered by Gemini 1.5 Pro.\n• CareerCraft AI: Data-driven career intelligence hub with ML & resume optimizer.\n• CodeChaska: Gamified cyberpunk coding universe with 360 missions (code-chaska.vercel.app).\n• ATC Constructions: Live production commercial web portal.\n• Healthcare Assistant Chatbot: Real-time symptom triage with NLP.\n• Real-Time Object Detection: 30+ FPS computer vision with SSD MobileNet v3.",
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
        text: "🎓 Academic Background:\n\n• MBA in Decision Science – Indian Institute of Technology (IIT) Patna (2026–28)\n• B.Tech in Computer Science & Engineering – Rayat Bahra University (76.8% First Class)",
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
    setRobotState('thinking');

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
      setRobotState('happy');
    }, 600);
  };

  const handleActionClick = (action) => {
    if (action.href) {
      window.open(action.href, '_blank');
    } else if (action.id) {
      setIsOpen(false);
      const el = document.getElementById(action.id);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -40, duration: 1.3 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Helper to determine what section/element was clicked and generate smart explanation
  const getElementExplanation = (target) => {
    const text = target.innerText?.toLowerCase() || '';

    // Check specific projects
    if (text.includes('wanderlust')) {
      return {
        title: "WanderLust.ai",
        text: "Flagship AI travel agent powered by Gemini 1.5 Pro! Generates hyper-personalized itineraries with budget analytics & day-by-day maps! ✈️"
      };
    }
    if (text.includes('atc') || text.includes('constructions')) {
      return {
        title: "ATC Constructions",
        text: "Live production commercial portal for govt civil contractor Amit Thakur, featuring dynamic project galleries and instant WhatsApp contact! 🏗️"
      };
    }
    if (text.includes('careercraft')) {
      return {
        title: "CareerCraft AI",
        text: "AI career intelligence engine with skill gap analysis, job fit predictor, and automated ATS resume optimization! 💼"
      };
    }
    if (text.includes('codechaska')) {
      return {
        title: "CodeChaska",
        text: "Gamified cyberpunk platform with 360 coding challenges, interactive terminal feedback, and animated rewards! 🎮"
      };
    }

    // Check sections by DOM ID
    const section = target.closest('section');
    const sectionId = section?.id || '';

    if (sectionId === 'projects') {
      return {
        title: "Featured Projects",
        text: "Harsh builds production-ready Generative AI agents, low-latency FastAPI inference APIs, and full-stack web applications! 🚀"
      };
    }

    if (sectionId === 'skills') {
      if (text.includes('pytorch') || text.includes('deep learning')) {
        return {
          title: "Deep Learning Stack",
          text: "PyTorch & Deep Learning! Harsh's core toolkit for neural architectures, model fine-tuning, and computer vision pipelines! ⚡"
        };
      }
      if (text.includes('gemini') || text.includes('gen ai') || text.includes('generative')) {
        return {
          title: "Generative AI",
          text: "LLM Orchestration with Gemini 1.5, prompt caching, RAG vector search, and structured JSON output guardrails! 🤖"
        };
      }
      return {
        title: "Technical Arsenal",
        text: "Core skills across Machine Learning, Python, FastAPI, Docker, and modern reactive frontends! 💡"
      };
    }

    if (sectionId === 'about') {
      return {
        title: "Background & Vision",
        text: "Harsh blends Decision Science research at IIT Patna with practical, scalable neural architectures and low-latency microservices! 🧠"
      };
    }

    if (sectionId === 'experience') {
      return {
        title: "Industry Experience",
        text: "6+ industry internships across AI startups like SpectoV, Upto Skills, and innovation cells like eDC IIT Delhi! 📈"
      };
    }

    if (sectionId === 'education') {
      return {
        title: "Academic Ledger",
        text: "Pursuing MBA in Decision Science at IIT Patna (2026–28) following a First Class B.Tech in Computer Science Engineering (76.8%)! 🎓"
      };
    }

    if (sectionId === 'certifications') {
      return {
        title: "Verified Credentials",
        text: "Industry-standard certifications from IBM (AI Engineering), DeepLearning.AI, ISRO (Remote Sensing), and NVIDIA! 🏆"
      };
    }

    if (sectionId === 'contact') {
      return {
        title: "Get in Touch",
        text: "Harsh is actively exploring full-time AI Engineer & ML roles. Drop an email or connect on LinkedIn directly! 📬"
      };
    }

    if (sectionId === 'home') {
      return {
        title: "Harsh Lagwal",
        text: "AI & Machine Learning Engineer from IIT Patna! Specializing in Generative AI, PyTorch & Autonomous LLM Agents! ✨"
      };
    }

    // Default friendly guide
    return {
      title: "AI Companion",
      text: "Exploring Harsh's portfolio! Click on any project card or skill chip and I'll explain it for you with a smile! ^_^"
    };
  };

  // Global Click Listener: Whenever user clicks anywhere, robot floats up and explains!
  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Ignore clicks inside the robot container or chat modal
      if (e.target.closest('#robot-companion-dock') || e.target.closest('#robot-chat-modal')) {
        return;
      }

      // Do not interrupt direct interactive button or link clicks (filters, links, inputs)
      if (e.target.closest('button, a, input, select, textarea, [role="button"]')) {
        return;
      }

      const explanation = getElementExplanation(e.target);
      if (explanation) {
        setActiveExplanation(explanation);
        setRobotState('happy');
        setIsHopping(true);

        setTimeout(() => setIsHopping(false), 500);

        // Auto-dismiss explanation after 6.5s
        if (explanationTimerRef.current) clearTimeout(explanationTimerRef.current);
        explanationTimerRef.current = setTimeout(() => {
          setActiveExplanation(null);
          setRobotState('idle');
        }, 6500);
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
      if (explanationTimerRef.current) clearTimeout(explanationTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* ── Interactive Floating Robot Companion Dock (Replaces plain Ask AI button) ── */}
      <div 
        id="robot-companion-dock" 
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-auto select-none"
      >
        {/* Floating Speech Bubble Above Robot */}
        <AnimatePresence>
          {activeExplanation && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.88 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mb-2 max-w-[280px] sm:max-w-[320px] p-3.5 rounded-2xl bg-white/95 dark:bg-[#111318]/95 backdrop-blur-xl border border-blue-500/30 dark:border-cyan-400/30 shadow-2xl text-left font-sans text-xs"
            >
              <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-gray-100 dark:border-white/10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 flex items-center gap-1">
                  <Sparkles size={11} /> {activeExplanation.title}
                </span>
                <button 
                  onClick={() => {
                    setActiveExplanation(null);
                    setRobotState('idle');
                  }} 
                  className="text-gray-400 hover:text-gray-700 dark:hover:text-white p-0.5 cursor-pointer transition-colors"
                  aria-label="Close speech bubble"
                >
                  <X size={12} />
                </button>
              </div>

              <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                {activeExplanation.text}
              </p>

              <div className="mt-2.5 pt-1.5 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500 dark:text-gray-400">
                <span>Click me to ask questions!</span>
                <button 
                  onClick={() => { 
                    setActiveExplanation(null); 
                    setIsOpen(true); 
                  }} 
                  className="text-blue-600 dark:text-cyan-400 font-bold hover:underline cursor-pointer flex items-center gap-0.5"
                >
                  <span>Chat</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated Robot Avatar */}
        <motion.div
          onClick={() => {
            setIsOpen(!isOpen);
            if (!isOpen) {
              setActiveExplanation(null);
              setRobotState('happy');
            } else {
              setRobotState('idle');
            }
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          animate={isHopping ? { y: [0, -18, 0], rotate: [0, -3, 3, 0] } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative group cursor-pointer flex flex-col items-center"
          title="Click to chat with Harsh's AI Copilot!"
        >
          {/* Ambient Glow behind robot */}
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/30 via-cyan-400/25 to-indigo-600/30 blur-xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity -z-10" />

          {/* Floating Pill Tag */}
          <div className="px-2.5 py-0.5 mb-1 rounded-full bg-slate-900/90 dark:bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono font-medium text-cyan-300 dark:text-cyan-200 shadow-md whitespace-nowrap flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI Guide</span>
          </div>

          {/* Interactive RobotHead Component from robot-heads package */}
          <div className="relative">
            <RobotHead
              shape="rectangle"
              state={robotState}
              size={80}
              color="#2563eb"
              trimColor="#94a3b8"
              screenColor="#ffffff"
              speed={1.1}
              antenna={true}
              interactive={true}
            />
          </div>
        </motion.div>
      </div>

      {/* ── Compact Chat Popover Card with Robot Header ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="robot-chat-modal"
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[360px] h-[480px] max-h-[75vh] bg-white/95 dark:bg-[#0c1222]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/90 dark:border-white/10 flex flex-col overflow-hidden font-sans"
          >
            {/* Header with Mini RobotHead */}
            <div className="px-4 py-2.5 border-b border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-blue-600/10 dark:bg-cyan-500/10 border border-blue-500/20">
                  <RobotHead
                    shape="rectangle"
                    state={isTyping ? "thinking" : robotState}
                    size={46}
                    color="#2563eb"
                    antenna={false}
                  />
                </div>
                <div>
                  <h3 className="text-xs font-bold font-display text-gray-900 dark:text-white leading-tight flex items-center gap-1.5">
                    Harsh AI Copilot
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <p className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                    {isTyping ? "Thinking..." : "Ready to assist"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setRobotState('idle');
                }}
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
