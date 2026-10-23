import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose, resumeLink }) => {
  // Prevent body scroll and listen for Escape key
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

  if (!resumeLink) return null;

  // Convert the drive link to a preview link and download link
  const previewLink = resumeLink.replace(/\/view.*$/, '/preview');
  
  // Extract ID and create a direct download link
  const fileIdMatch = resumeLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const directDownloadLink = fileIdMatch 
    ? `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}` 
    : resumeLink;

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

          {/* Modal Card */}
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
                <h3 className="text-lg font-semibold text-[#0d0f12] dark:text-white font-display">
                  Harsh Lagwal — Résumé
                </h3>
                <span className="text-xs text-[#494f5c] dark:text-[#9fa6b6] font-mono font-medium">
                  AI &amp; Machine Learning Engineer • IIT Patna MBA Scholar
                </span>
              </div>
              <button 
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#0d0f12] dark:text-[#ffffff] hover:bg-[#cbd0d9] dark:hover:bg-[#20232d] transition-colors cursor-pointer"
                aria-label="Close résumé preview"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 w-full bg-[#eceef2] dark:bg-[#0c0d10] overflow-hidden min-h-[55vh] min-h-[55dvh] md:min-h-[65vh] md:min-h-[65dvh] relative">
              <iframe 
                src={previewLink} 
                className="absolute inset-0 w-full h-full border-0"
                title="Harsh Lagwal Resume Preview"
                allow="autoplay"
              />
            </div>

            {/* Footer Actions */}
            <div className="p-4 sm:p-5 bg-[#ffffff] dark:bg-[#16181f] border-t border-[#cbd0d9] dark:border-[#262933] flex flex-col sm:flex-row items-center justify-end gap-3">
              <a 
                href={resumeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto pill-btn-secondary"
              >
                <ExternalLink size={14} />
                <span>Open in Drive</span>
              </a>

              <a 
                href={directDownloadLink}
                target="_blank" 
                rel="noopener noreferrer"
                download
                className="w-full sm:w-auto pill-btn-dark"
              >
                <Download size={15} strokeWidth={2} />
                <span>Download PDF</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
