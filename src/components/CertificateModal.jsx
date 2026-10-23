import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export const CertificateModal = ({ isOpen, onClose, certificateLink }) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!certificateLink) return null;

  // Robustly convert Drive share URL → embed preview URL
  const previewLink = certificateLink.replace(/\/view.*$/, '/preview');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] max-h-[90dvh] flex flex-col bg-[#ffffff] dark:bg-[#16181f] border border-[#cbd0d9] dark:border-[#262933] rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#cbd0d9] dark:border-[#262933] bg-[#dadde3] dark:bg-[#171920]">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#0d0f12] dark:text-white font-display">
                  Verified Credential Document
                </h3>
                <span className="text-xs text-[#494f5c] dark:text-[#9fa6b6] font-mono font-medium">
                  Official verification from issuing institution
                </span>
              </div>
              <button 
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#0d0f12] dark:text-[#ffffff] hover:bg-[#cbd0d9] dark:hover:bg-[#20232d] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>

            {/* Iframe Preview Container */}
            <div className="flex-1 w-full bg-[#eceef2] dark:bg-[#0c0d10] overflow-hidden min-h-[50vh] min-h-[50dvh] md:min-h-[60vh] md:min-h-[60dvh] relative">
              <iframe 
                src={previewLink} 
                className="absolute inset-0 w-full h-full border-0"
                title="Verified Certificate Preview"
                allow="autoplay"
              />
            </div>

            {/* Footer Actions */}
            <div className="p-4 sm:p-5 bg-[#ffffff] dark:bg-[#16181f] border-t border-[#cbd0d9] dark:border-[#262933] flex flex-col sm:flex-row items-center justify-end gap-3">
              <button 
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto pill-btn-secondary"
              >
                Close Preview
              </button>
              
              <a 
                href={certificateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto pill-btn-dark"
              >
                <span>Open in Google Drive</span>
                <ExternalLink size={14} strokeWidth={1.8} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
