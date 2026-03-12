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
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[90vh] max-h-[90dvh] flex flex-col bg-white dark:bg-[#0b0f1a] border border-gray-200 dark:border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-[#0b0f1a]/50">
              <h3 className="text-xl font-semibold font-display text-gray-900 dark:text-white tracking-tight">
                Certificate <span className="text-vibrant-blue">Preview</span>
              </h3>
              <button 
                onClick={onClose}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 w-full bg-gray-100 dark:bg-gray-900 overflow-hidden min-h-[50vh] min-h-[50dvh] md:min-h-[60vh] md:min-h-[60dvh] relative">
              <iframe 
                src={previewLink} 
                className="absolute inset-0 w-full h-full border-0"
                title="Certificate Preview"
                allow="autoplay"
              />
            </div>

            {/* Footer / Buttons */}
            <div className="p-6 bg-white dark:bg-[#0b0f1a] border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-end gap-4">
              <button 
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center font-sans text-sm"
              >
                Close
              </button>
              <a 
                href={certificateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-vibrant-blue text-white font-medium hover:bg-blue-600 hover:shadow-lg hover:shadow-vibrant-blue/20 transition-all flex items-center justify-center gap-2 font-sans text-sm"
              >
                <ExternalLink size={18} /> Open Full Certificate
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
