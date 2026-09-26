import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const CertificateModal = ({ isOpen, onClose, certificateLink }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!certificateLink) return null;

  // Robustly convert any Drive share URL → embed preview URL
  // Handles: /view, /view?usp=drivesdk, /view?usp=sharing, etc.
  const previewLink = certificateLink.replace(/\/view.*$/, '/preview');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-4xl max-h-[90vh] max-h-[90dvh] flex flex-col bg-white dark:bg-[#1e1f20] border border-[#dadce0] dark:border-[#2e3134] rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#dadce0] dark:border-[#2e3134] bg-[#f8f9fa] dark:bg-[#1a1b1e]">
              <h3 className="text-lg sm:text-xl font-medium font-display text-[#202124] dark:text-[#f1f3f4] tracking-tight">
                Certificate <span className="text-[#1a73e8] dark:text-[#8ab4f8]">Preview</span>
              </h3>
              <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#5f6368] dark:text-[#9aa0a6] hover:bg-[#e8eaed] dark:hover:bg-[#252629] hover:text-[#202124] dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>

            {/* Iframe Preview Container */}
            <div className="flex-1 w-full bg-[#f1f3f4] dark:bg-[#131314] overflow-hidden min-h-[50vh] min-h-[50dvh] md:min-h-[60vh] md:min-h-[60dvh] relative">
              <iframe 
                src={previewLink} 
                className="absolute inset-0 w-full h-full border-0"
                title="Certificate Preview"
                allow="autoplay"
              />
            </div>

            {/* Footer Actions (Consistent Google Pill Button Theme) */}
            <div className="p-4 sm:p-5 bg-white dark:bg-[#1e1f20] border-t border-[#dadce0] dark:border-[#2e3134] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button 
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#f1f3f4] hover:bg-[#e8eaed] dark:bg-[#252629] dark:hover:bg-[#303236] text-[#202124] dark:text-[#f1f3f4] border border-[#dadce0] dark:border-[#3c4043] font-medium text-xs sm:text-[13px] transition-all cursor-pointer shadow-2xs hover:scale-[1.01] active:scale-95"
              >
                Close Preview
              </button>
              
              <a 
                href={certificateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white dark:bg-[#8ab4f8] dark:text-[#131314] dark:hover:bg-[#a8c7fa] font-medium text-xs sm:text-[13px] transition-all flex items-center justify-center gap-2 shadow-2xs hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <ExternalLink size={14} strokeWidth={1.8} />
                <span>Open Full Certificate</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
