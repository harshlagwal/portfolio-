import React, { useState } from 'react';
import { 
  Send, 
  Paperclip, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Briefcase, 
  MessageSquare,
  Clock,
  User,
  Mail as MailIcon
} from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { soundFX } from '../../../utils/soundEffects';

export const MailApp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [intent, setIntent] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errorMsg, setErrorMsg] = useState('');

  const quickPrompts = [
    { label: 'Full-Time AI Role', text: 'Hi Harsh, we came across your portfolio and would like to discuss full-time AI/ML opportunities at our team.' },
    { label: 'Generative AI Project', text: 'Hi Harsh, we are looking for an AI Engineer with your PyTorch & Gemini expertise for an upcoming project.' },
    { label: 'Decision Science Chat', text: 'Hi Harsh, loved your MBA Decision Science background at IIT Patna! Let’s connect for a quick conversation.' }
  ];

  const handleSelectPrompt = (p) => {
    setIntent(p.label);
    setFormData((prev) => ({
      ...prev,
      subject: `Inquiry: ${p.label}`,
      message: p.text
    }));
    soundFX.playClick();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);
    setErrorMsg('');

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
          intent: intent || 'macOS Mail Form Inquiry',
          message: formData.message,
          _subject: formData.subject || `New macOS Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        soundFX.playChime();
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIntent('');
      } else {
        setStatus('error');
        setErrorMsg('Could not send message. Please email directly to Harshlagwal2005@gmail.com');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please email directly to Harshlagwal2005@gmail.com');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full select-none text-slate-800 dark:text-slate-100 bg-white dark:bg-[#181920] overflow-hidden">
      {/* ── Apple Mail Toolbar ── */}
      <div className="h-11 px-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between bg-slate-100/70 dark:bg-white/[0.03] text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={handleSubmit}
            disabled={isSending || !formData.email || !formData.message}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold transition-all shadow-xs ${
              isSending || !formData.email || !formData.message
                ? 'bg-slate-300 dark:bg-zinc-700 text-slate-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
            }`}
          >
            <Send size={13} className={isSending ? 'animate-bounce' : ''} />
            <span>{isSending ? 'Sending...' : 'Send Message'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-[11px]">
          <Clock size={12} />
          <span>Typical response: Under 24 hours</span>
        </div>
      </div>

      {/* ── Compose Form Fields ── */}
      <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 md:p-6 pb-24 sm:pb-8 space-y-3 font-['Google_Sans',sans-serif]">
        {/* Quick Intent Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-black/5 dark:border-white/5">
          <span className="text-[11px] font-semibold text-slate-400 mr-1">Quick Templates:</span>
          {quickPrompts.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => handleSelectPrompt(p)}
              className="text-[11px] px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors border border-blue-200/50 dark:border-blue-700/20 cursor-pointer active:scale-95"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* To Field (Read-only) */}
        <div className="flex items-center gap-2.5 py-1.5 border-b border-black/5 dark:border-white/10 text-xs">
          <span className="text-slate-400 font-medium w-14 shrink-0">To:</span>
          <span className="font-semibold text-blue-600 dark:text-cyan-400 truncate">
            Harsh Lagwal &lt;{portfolioData.personal.email}&gt;
          </span>
        </div>

        {/* Your Name */}
        <div className="flex items-center gap-2.5 py-1.5 border-b border-black/5 dark:border-white/10 text-xs">
          <label htmlFor="name" className="text-slate-400 font-medium w-14 shrink-0">Name:</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your Name / Organization"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="flex-1 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400 text-xs"
          />
        </div>

        {/* Your Email */}
        <div className="flex items-center gap-2.5 py-1.5 border-b border-black/5 dark:border-white/10 text-xs">
          <label htmlFor="email" className="text-slate-400 font-medium w-14 shrink-0">From:</label>
          <input
            id="email"
            type="email"
            required
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="flex-1 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400 text-xs"
          />
        </div>

        {/* Subject */}
        <div className="flex items-center gap-2.5 py-1.5 border-b border-black/5 dark:border-white/10 text-xs">
          <label htmlFor="subject" className="text-slate-400 font-medium w-14 shrink-0">Subject:</label>
          <input
            id="subject"
            type="text"
            placeholder="Opportunity / Collaboration / Inquiry"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="flex-1 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400 font-medium text-xs"
          />
        </div>

        {/* Message Body */}
        <div className="pt-2">
          <textarea
            required
            rows={8}
            placeholder="Write your message to Harsh here..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-transparent outline-none text-xs md:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 resize-none leading-relaxed font-sans"
          />
        </div>

        {/* Feedback Messages */}
        {status === 'success' && (
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
            <span>✓ Message dispatched successfully! Harsh will receive your notification and reply promptly.</span>
          </div>
        )}

        {status === 'error' && (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2">
            <AlertCircle size={16} className="text-rose-500 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>
    </div>
  );
};
