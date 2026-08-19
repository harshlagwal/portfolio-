import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, MessageSquare, Terminal, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

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
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
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
    <section id="contact" className="py-16 md:py-20 relative bg-white dark:bg-[#060913] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-cyan-500/10 border border-blue-200/60 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-semibold font-mono tracking-wide mb-3">
            <MessageSquare size={13} />
            <span>GET IN TOUCH</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white mb-3"
          >
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-400">Intelligent</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            I'm always open to discussing AI projects, engineering roles, and innovative collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Side Bento (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="h-full bg-white dark:bg-[#0c1222] border border-gray-200/80 dark:border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 font-semibold uppercase tracking-wider mb-6">
                  <Terminal size={14} /> Direct Channels
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-cyan-500/10 border border-blue-200/60 dark:border-cyan-500/20 rounded-xl text-blue-600 dark:text-cyan-400 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold font-mono tracking-wider">Email</p>
                      <a 
                        href="mailto:Harshlagwal2005@gmail.com" 
                        className="text-gray-900 dark:text-white text-sm sm:text-base font-semibold hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-mono"
                      >
                        Harshlagwal2005@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.13.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold font-mono tracking-wider">WhatsApp / Phone</p>
                      <a 
                        href="https://wa.me/916230624011?text=Hi%20Harsh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-white text-sm sm:text-base font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
                      >
                        +91 6230624011 ↗
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-cyan-500/10 border border-blue-200/60 dark:border-cyan-500/20 rounded-xl text-blue-600 dark:text-cyan-400 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold font-mono tracking-wider">Location</p>
                      <p className="text-gray-900 dark:text-white text-sm sm:text-base font-semibold">Himachal Pradesh, India</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Status Box */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10">
                <div className="flex items-center gap-2 mb-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  RESPONSE TIME: &lt; 24 HOURS
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Available for full-time AI Engineer, GenAI Developer, and ML Engineering opportunities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Side Bento (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-[#0c1222] border border-gray-200/80 dark:border-white/10 p-6 sm:p-8 rounded-2xl shadow-sm">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 font-mono mb-1.5">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-[#060913] outline-none transition-all placeholder:text-gray-400 text-gray-900 dark:text-white text-sm"
                      placeholder="Your Name"
                    />
                    {/* Hidden inputs to guarantee compatibility with any template variables */}
                    <input type="hidden" name="user_name" value={formData.name} />
                    <input type="hidden" name="from_name" value={formData.name} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 font-mono mb-1.5">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-[#060913] outline-none transition-all placeholder:text-gray-400 text-gray-900 dark:text-white text-sm"
                      placeholder="your.email@example.com"
                    />
                    {/* Hidden inputs to guarantee compatibility with any template variables */}
                    <input type="hidden" name="user_email" value={formData.email} />
                    <input type="hidden" name="from_email" value={formData.email} />
                    <input type="hidden" name="reply_to" value={formData.email} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 font-mono mb-1.5">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-[#060913] outline-none transition-all placeholder:text-gray-400 resize-none text-gray-900 dark:text-white text-sm"
                    placeholder="Describe your project, team, or opportunity..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 font-semibold text-white shadow-sm hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "Send Message"} 
                  {!isSending && <Send size={15} />}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-center text-xs font-medium flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 size={16} /> Message sent successfully! I will get back to you soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400 text-center text-xs font-medium space-y-2.5"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <AlertCircle size={16} /> 
                        <span>Direct send failed ({errorMessage || 'Check EmailJS connection'})</span>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                        <a 
                          href={mailtoLink}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-xs"
                        >
                          <Mail size={13} /> Open in Email App
                        </a>
                        <a 
                          href={`https://wa.me/916230624011?text=${encodeURIComponent(`Hi Harsh,\nName: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'N/A'}\nMessage: ${formData.message || 'Hello!'}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
                        >
                          Send via WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


