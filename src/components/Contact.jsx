import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Briefcase, 
  Sparkles, 
  Users, 
  ArrowUpRight,
  Clock
} from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [selectedIntent, setSelectedIntent] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const quickIntents = [
    { label: "Full-Time AI Role", icon: Briefcase, prompt: "Hi Harsh, I came across your portfolio and would like to discuss full-time AI/ML opportunities at our company." },
    { label: "GenAI Project", icon: Sparkles, prompt: "Hi Harsh, we have an exciting Generative AI project and are looking for an engineer with your expertise." },
    { label: "Research & Collab", icon: Users, prompt: "Hi Harsh, I'd love to connect regarding AI research, paper discussion, or open-source collaboration." },
    { label: "Quick Chat", icon: MessageSquare, prompt: "Hi Harsh, I loved your portfolio and would like to connect for a quick tech chat." }
  ];

  const handleSelectIntent = (intent) => {
    setSelectedIntent(intent.label);
    setFormData(prev => ({
      ...prev,
      message: intent.prompt
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xdenprwy', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          intent: selectedIntent || 'General Inquiry',
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name} [${selectedIntent || 'AI Inquiry'}]`
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setSelectedIntent('');
        if (formRef.current) formRef.current.reset();
      } else {
        const errorMsg = data?.errors?.map(err => err.message).join(', ') || 'Form submission failed.';
        setStatus('error');
        setErrorMessage(errorMsg);
      }
    } catch (error) {
      console.error('Formspree Submission Error:', error);
      setStatus('error');
      setErrorMessage(error?.message || 'Network transmission error.');
    } finally {
      setIsSending(false);
    }
  };

  const mailtoLink = `mailto:Harshlagwal2005@gmail.com?subject=Contact from Portfolio: ${encodeURIComponent(formData.name || 'AI Collaboration')}&body=${encodeURIComponent(formData.message ? `${formData.message}\n\nFrom: ${formData.name} (${formData.email})` : 'Hi Harsh, I would like to connect with you regarding AI / ML opportunities.')}`;

  return (
    <section id="contact" className="py-16 md:py-20 relative bg-white dark:bg-[#131314] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] dark:bg-[#8ab4f8]/10 border border-[#dadce0] dark:border-[#8ab4f8]/20 text-[#1a73e8] dark:text-[#8ab4f8] text-xs font-medium font-mono tracking-wide mb-3">
              <MessageSquare size={14} strokeWidth={1.5} />
              <span>DIRECT OUTREACH & COLLABORATION</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-medium font-display tracking-tight text-[#202124] dark:text-[#f1f3f4]"
            >
              Let's Build Something <span className="text-[#1a73e8] dark:text-[#8ab4f8]">Intelligent</span>
            </motion.h2>
          </div>
          <p className="text-[#5f6368] dark:text-[#9aa0a6] max-w-md text-xs sm:text-sm leading-relaxed">
            Open for full-time AI roles, high-impact Generative AI projects, and research partnerships.
          </p>
        </div>

        {/* Google Antigravity Editorial Split Layout (No Chunky Boxed Cards) */}
        <div className="border-t border-[#dadce0] dark:border-[#2e3134] pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Communication Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6] block mb-5">
                Official Channels
              </span>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f8f9fa] dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134] flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8] shrink-0">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] font-mono uppercase">Email Address</span>
                    <a 
                      href="mailto:Harshlagwal2005@gmail.com" 
                      className="block text-sm sm:text-base font-medium text-[#202124] dark:text-[#f1f3f4] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors font-mono"
                    >
                      Harshlagwal2005@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f4ea] dark:bg-[#137333]/20 border border-[#ceead6] dark:border-[#137333]/30 flex items-center justify-center text-[#137333] dark:text-[#81c995] shrink-0">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] font-mono uppercase">Direct Message / Phone</span>
                    <a 
                      href="https://wa.me/916230624011?text=Hi%20Harsh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm sm:text-base font-medium text-[#202124] dark:text-[#f1f3f4] hover:text-[#188038] dark:hover:text-[#81c995] transition-colors font-mono"
                    >
                      +91 6230624011 ↗
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f8f9fa] dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134] flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8] shrink-0">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] font-mono uppercase">Location</span>
                    <p className="text-sm sm:text-base font-medium text-[#202124] dark:text-[#f1f3f4]">
                      Himachal Pradesh / Mohali, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time SLA & Status Indicator */}
            <div className="p-4 rounded-2xl bg-[#f8f9fa] dark:bg-[#1a1b1e] border border-[#dadce0] dark:border-[#2e3134]">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-mono font-medium text-[#137333] dark:text-[#81c995]">
                <span className="w-2 h-2 rounded-full bg-[#137333] dark:bg-[#81c995] animate-ping" />
                <span>RESPONSE SLA: &lt; 24 HOURS</span>
              </div>
              <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed">
                Currently reviewing full-time engineering inquiries and technical collaborations.
              </p>
            </div>

            {/* Direct Connect Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href="https://wa.me/916230624011?text=Hi%20Harsh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#188038] hover:bg-[#137333] text-white text-xs font-medium transition-all shadow-2xs hover:scale-[1.02] active:scale-95"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight size={13} strokeWidth={1.8} />
              </a>
              <a
                href="mailto:Harshlagwal2005@gmail.com"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f1f3f4] hover:bg-[#e8eaed] dark:bg-[#252629] dark:hover:bg-[#303236] text-[#202124] dark:text-[#f1f3f4] border border-[#dadce0] dark:border-[#3c4043] text-xs font-medium transition-all shadow-2xs hover:scale-[1.02] active:scale-95"
              >
                <span>Open Mail Client</span>
                <ArrowUpRight size={13} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#f8f9fa] dark:bg-[#1a1b1e] border border-[#dadce0] dark:border-[#2e3134] p-6 sm:p-8 rounded-3xl">
            
            {/* Quick Intent Chips */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-[#5f6368] dark:text-[#9aa0a6] font-mono uppercase tracking-wider mb-2.5">
                Select Conversation Topic
              </label>
              <div className="flex flex-wrap gap-2">
                {quickIntents.map((intent, iIdx) => {
                  const Icon = intent.icon;
                  const isSelected = selectedIntent === intent.label;
                  return (
                    <button
                      key={iIdx}
                      type="button"
                      onClick={() => handleSelectIntent(intent)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer select-none ${
                        isSelected 
                          ? 'bg-[#1a73e8] text-white dark:bg-[#8ab4f8] dark:text-[#131314] shadow-xs scale-[1.02]' 
                          : 'bg-white dark:bg-[#252629] text-[#202124] dark:text-[#e3e3e3] border border-[#dadce0] dark:border-[#3c4043] hover:border-[#1a73e8]/40 dark:hover:border-[#8ab4f8]/40'
                      }`}
                    >
                      <Icon size={13} strokeWidth={1.6} />
                      <span>{intent.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#5f6368] dark:text-[#9aa0a6] font-mono uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] rounded-xl px-4 py-2.5 focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] outline-none transition-all placeholder:text-[#80868b] text-[#202124] dark:text-[#e3e3e3] text-sm"
                    placeholder="Jane Doe"
                  />
                  <input type="hidden" name="user_name" value={formData.name} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5f6368] dark:text-[#9aa0a6] font-mono uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] rounded-xl px-4 py-2.5 focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] outline-none transition-all placeholder:text-[#80868b] text-[#202124] dark:text-[#e3e3e3] text-sm"
                    placeholder="jane@company.com"
                  />
                  <input type="hidden" name="user_email" value={formData.email} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#5f6368] dark:text-[#9aa0a6] font-mono uppercase tracking-wider mb-1.5">
                  Message Description
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-white dark:bg-[#252629] border border-[#dadce0] dark:border-[#3c4043] rounded-xl px-4 py-2.5 focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] outline-none transition-all placeholder:text-[#80868b] resize-none text-[#202124] dark:text-[#e3e3e3] text-sm leading-relaxed"
                  placeholder="Tell me about the engineering requirements, team, or opportunity..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-3 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#8ab4f8] dark:text-[#131314] dark:hover:bg-[#a8c7fa] font-medium text-white shadow-xs hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>{isSending ? "Transmitting..." : "Send Message"}</span>
                {!isSending && <Send size={14} strokeWidth={1.8} />}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-2xl bg-[#e6f4ea] dark:bg-[#137333]/20 border border-[#ceead6] dark:border-[#137333]/30 text-[#137333] dark:text-[#81c995] text-center text-xs font-medium flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={16} strokeWidth={1.8} /> 
                    <span>Message delivered to Harsh Lagwal. I'll get back to you within 24 hours!</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400 text-center text-xs font-medium space-y-2.5"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <AlertCircle size={16} strokeWidth={1.8} /> 
                      <span>Direct send failed ({errorMessage || 'Network error'})</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                      <a 
                        href={mailtoLink}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#ea4335] text-white rounded-full font-medium hover:bg-red-700 transition-colors shadow-2xs"
                      >
                        <Mail size={13} strokeWidth={1.8} /> Open in Email App
                      </a>
                      <a 
                        href={`https://wa.me/916230624011?text=${encodeURIComponent(`Hi Harsh,\nName: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'N/A'}\nMessage: ${formData.message || 'Hello!'}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#188038] text-white rounded-full font-medium hover:bg-[#137333] transition-colors shadow-2xs"
                      >
                        Send via WhatsApp
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
