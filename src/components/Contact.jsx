import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs.sendForm(
      'service_2bma8yx', 
      'template_wes0ufh', 
      formRef.current, 
      'hglQLzrTx7mnCnEu7'
    )
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        setIsSending(false);
        formRef.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative bg-white dark:bg-[#0b0f1a] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 font-display tracking-tight text-gray-900 dark:text-white transition-colors duration-500">
              Let's Build Something <span className="text-gradient-focus">Intelligent</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 font-sans leading-relaxed transition-colors duration-500">
              I'm always open to discussing AI projects, research collaborations, or opportunities in the AI/ML landscape. Reach out and let's start a conversation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl group-hover:bg-vibrant-blue/10 transition-all text-vibrant-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 uppercase font-bold font-mono tracking-widest transition-colors duration-500">Email</p>
                  <p className="text-gray-900 dark:text-white text-lg font-medium hover:text-vibrant-blue transition-colors font-sans duration-500">
                    Harshlagwal2005@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl group-hover:bg-vibrant-blue/5 transition-all text-vibrant-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400 uppercase font-bold font-mono tracking-widest transition-colors duration-500">Location</p>
                  <p className="text-gray-900 dark:text-white text-lg font-medium font-sans transition-colors duration-500">Himachal Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-10 rounded-[2.5rem] transition-colors duration-500 shadow-lg"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 font-sans">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest font-mono mb-2 transition-colors duration-500">Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 focus:border-vibrant-blue outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 font-sans shadow-sm text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest font-mono mb-2 transition-colors duration-500">Email</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 focus:border-vibrant-blue outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 font-sans shadow-sm text-gray-900 dark:text-white"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest font-mono mb-2 transition-colors duration-500">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-6 py-4 focus:border-vibrant-blue outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 font-sans shadow-sm resize-none text-gray-900 dark:text-white"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-5 rounded-2xl bg-gray-900 dark:bg-vibrant-blue font-medium text-white shadow-xl hover:bg-gray-800 dark:hover:bg-vibrant-blue/95 transition-all flex items-center justify-center gap-2 group font-sans text-lg duration-500 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Send Message"} 
                {!isSending && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-500 dark:text-green-400 text-center font-medium flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={18} /> ✅ Message sent successfully! I will get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 dark:text-red-400 text-center font-medium flex items-center justify-center gap-2"
                  >
                    <AlertCircle size={18} /> ❌ Something went wrong. Please try again later.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
