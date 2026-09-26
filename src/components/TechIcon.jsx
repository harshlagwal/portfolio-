import React from 'react';

export const TechIcon = ({ name, size = 16, className = "" }) => {
  if (!name) return null;
  const iconKey = name.toLowerCase().trim();

  // Authentic, official vector brand SVGs
  switch (iconKey) {
    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M11.914 2C6.91 2 7.217 4.168 7.217 4.168l.006 2.246h4.757v.674H5.21S2 6.726 2 11.758c0 5.033 2.793 4.847 2.793 4.847h1.668v-2.34s-.09-2.793 2.738-2.793h4.717v-.695s.385-4.777-2-4.777h-8zm-2.07 1.455a.82.82 0 110 1.64.82.82 0 010-1.64z" fill="#3776AB"/>
          <path d="M12.086 22c5.004 0 4.697-2.168 4.697-2.168l-.006-2.246H12.02v-.674h6.77s3.21.362 3.21-4.67c0-5.033-2.793-4.847-2.793-4.847h-1.668v2.34s.09 2.793-2.738 2.793H10.08v.695s-.385 4.777 2 4.777h8zm2.07-1.455a.82.82 0 110-1.64.82.82 0 010 1.64z" fill="#FFD43B"/>
        </svg>
      );

    case 'pytorch':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12.72 2.05a9.8 9.8 0 00-1.44.11L12.7 3.6a7.7 7.7 0 011.08-.08c4.26 0 7.72 3.46 7.72 7.72s-3.46 7.72-7.72 7.72-7.72-3.46-7.72-7.72a7.65 7.65 0 011.45-4.47l-1.39-1.04a9.75 9.75 0 00-2.16 5.51c0 5.46 4.44 9.9 9.9 9.9s9.9-4.44 9.9-9.9-4.44-9.9-9.9-9.9l.08-.08z" fill="#EE4C2C"/>
          <path d="M14.9 6.2a1.35 1.35 0 100-2.7 1.35 1.35 0 000 2.7z" fill="#EE4C2C"/>
        </svg>
      );

    case 'tensorflow':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12.002 2.002L2.005 7.776l3.998 2.308v6.928l5.999 3.464 6-3.464v-6.928l3.998-2.308-10-5.774zm0 2.31l6.002 3.465-2.004 1.157-3.998-2.308-4 2.308-2.002-1.157 6.002-3.465zm-4.002 5.774l4 2.309v8.082l-4-2.308V10.086zm8 0v8.083l-4 2.308V12.395l4-2.309z" fill="#FF6F00"/>
        </svg>
      );

    case 'gemini ai':
    case 'gemini':
    case 'google gemini':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <defs>
            <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1B73E8" />
              <stop offset="45%" stopColor="#8AB4F8" />
              <stop offset="70%" stopColor="#A50E0E" />
              <stop offset="100%" stopColor="#EA4335" />
            </linearGradient>
          </defs>
          <path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z" fill="url(#geminiGrad)" />
        </svg>
      );

    case 'openai':
    case 'chatgpt':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.78a4.47 4.47 0 0 1 2.34-1.974v5.679a.761.761 0 0 0 .39.682l5.835 3.37-2.02 1.168a.076.076 0 0 1-.071 0L4.03 14.82a4.499 4.499 0 0 1-1.69-6.04zm16.597 3.865l-5.836-3.372 2.02-1.166a.076.076 0 0 1 .071 0l4.784 2.766a4.499 4.499 0 0 1-.676 8.01v-5.557a.795.795 0 0 0-.363-.681zm2.01-4.471l-.141-.085-4.783-2.759a.771.771 0 0 0-.78 0L9.4 8.7l-.001-2.332a.08.08 0 0 1 .033-.062l4.84-2.795a4.5 4.5 0 0 1 6.668 4.636zM8.307 14.887l-2.02-1.168a.071.071 0 0 1-.038-.052V8.084a4.504 4.504 0 0 1 7.37-3.454l-.142.08-4.778 2.758a.795.795 0 0 0-.392.681v6.738zm1.096-2.887l2.6-1.5 2.6 1.5-2.6 1.5-2.6-1.5z" />
        </svg>
      );

    case 'claude':
    case 'claude ai':
    case 'anthropic':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#D97757">
          <path d="M13.727 3.498a.952.952 0 0 0-1.748 0L8.852 11.23l2.88 1.488 1.995-9.22zM8.358 12.383l-5.81 3.01a.952.952 0 0 0 .045 1.748l6.814 1.83 1.28-5.328-2.329-1.26zM15.42 12.658l-1.34 5.56 6.814-1.83a.952.952 0 0 0 .045-1.748l-5.519-1.982z" />
        </svg>
      );

    case 'hugging face':
    case 'huggingface':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#FFD21E" />
          <circle cx="8.5" cy="10" r="1.5" fill="#000" />
          <circle cx="15.5" cy="10" r="1.5" fill="#000" />
          <path d="M8 14.5C9 16.5 15 16.5 16 14.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 11C4 13 4 15 5.5 16M19 11C20 13 20 15 18.5 16" stroke="#FF9D00" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'langchain':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#1C3C3C"/>
          <path d="M7 12a5 5 0 0 1 5-5h2a5 5 0 0 1 0 10h-2a5 5 0 0 1-5-5z" stroke="#00A67E" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" fill="#F4B400"/>
        </svg>
      );

    case 'fastapi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#05998B"/>
          <path d="M12 4L6 13h5l-1 7 7-10h-5l1-6z" fill="white"/>
        </svg>
      );

    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#2496ED">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.76 9.89c-.365-1.745-1.79-2.93-3.606-2.97-.24-.006-.474.02-.702.07-.36-.93-1.07-1.63-2.02-1.95L17 5l-.43.04c-.31.03-.61.1-.9.21-.4-.53-.94-.94-1.57-1.18L13.6 4l-.5.1c-.24.05-.48.12-.7.22a4.4 4.4 0 00-1.84-.42H10.1v7.21H1.54C.68 11.11 0 11.8 0 12.65c0 3.73 2.5 7.15 6.27 8.35 4.54 1.45 9.77.72 13.84-1.89 2.47-1.58 3.89-4.24 3.89-7.18 0-.69-.08-1.38-.24-2.04"/>
        </svg>
      );

    case 'scikit-learn':
    case 'sklearn':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#F89939"/>
          <path d="M7 14c2-4 6-5 9-3M8 10c3 0 6 3 7 6" stroke="#3499CD" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );

    case 'opencv':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="7" r="4" stroke="#EA4335" strokeWidth="2.5" />
          <circle cx="7" cy="16" r="4" stroke="#34A853" strokeWidth="2.5" />
          <circle cx="17" cy="16" r="4" stroke="#4285F4" strokeWidth="2.5" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 1.5C12 1.5 6 7.5 6 13.5C6 17.5 9 21 12 22.5C15 21 18 17.5 18 13.5C18 7.5 12 1.5 12 1.5Z" fill="#47A248"/>
          <path d="M12 22.5V1.5C12 1.5 18 7.5 18 13.5C18 17.5 15 21 12 22.5Z" fill="#499D4A"/>
          <path d="M11.9 16.5C11.9 16.5 11.5 14.5 11.5 13C11.5 11.5 12.1 9.5 12.1 9.5C12.1 9.5 12.6 11.5 12.6 13C12.6 14.5 11.9 16.5 11.9 16.5Z" fill="#FFFFFF"/>
        </svg>
      );

    case 'sql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <ellipse cx="12" cy="6" rx="9" ry="3" fill="#336791"/>
          <path d="M3 6v6c0 1.66 4.03 3 9 3s9-1.34 9-3V6" stroke="#336791" strokeWidth="2" fill="none"/>
          <path d="M3 12v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="#336791" strokeWidth="2" fill="none"/>
          <ellipse cx="12" cy="6" rx="6" ry="1.5" fill="#FFFFFF" fillOpacity="0.4"/>
        </svg>
      );

    case 'postman':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
          <path d="M17.5 10.5l-5.5 3-5.5-3 5.5-3 5.5 3z" fill="#FFFFFF"/>
          <path d="M12 13.5v5" stroke="#FFFFFF" strokeWidth="1.5"/>
        </svg>
      );

    case 'streamlit':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M2 17l4.5-9 5.5 6 4-8 6 11H2z" fill="#FF4B4B"/>
          <path d="M12 14l-5.5-6L2 17h10z" fill="#FF2B2B" fillOpacity="0.4"/>
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M21.6 10.7L13.3 2.4c-.5-.5-1.4-.5-1.9 0L9.1 4.7l2.4 2.4c.6-.2 1.3 0 1.7.5.5.5.6 1.2.3 1.8l2.3 2.3c.6-.3 1.3-.2 1.8.3.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.3-.3-1.8L12.5 10.3v4.4c.3.2.5.5.5.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.7.5-.9V9.9c-.3-.2-.5-.5-.5-.9 0-.4.2-.8.4-1.1L7.5 5.5 2.4 10.7c-.5.5-.5 1.4 0 1.9l8.3 8.3c.5.5 1.4.5 1.9 0l9-9c.5-.5.5-1.4 0-1.9z" fill="#F05032"/>
        </svg>
      );

    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );

    case 'vs code':
    case 'vscode':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M17.5 2.5L7.2 10.4 3 7.2 1.5 8.2v7.6l1.5 1 4.2-3.2L17.5 21.5l5-2.5V5l-5-2.5zm0 4.6v9.8l-6-4.9 6-4.9z" fill="#007ACC"/>
        </svg>
      );

    case 'anaconda':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" stroke="#43B02A" strokeWidth="2.5" fill="none"/>
          <path d="M7 14c1.5-2 3-3 5-3s3.5 1 5 3" stroke="#43B02A" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="10" cy="9.5" r="1" fill="#43B02A"/>
          <circle cx="14" cy="9.5" r="1" fill="#43B02A"/>
        </svg>
      );

    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
        </svg>
      );

    case 'node.js':
    case 'nodejs':
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#5FA04E"/>
          <path d="M12 4.2L5 8.2v7.6l7 4 7-4V8.2l-7-4z" fill="#333333"/>
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6"/>
          <path d="M11.5 9.5H6.5V11H8V18H10V11H11.5V9.5Z" fill="white"/>
          <path d="M17.5 11.5C17.5 10.5 16.5 9.5 15 9.5H13V18H14.8V15H15C16.5 15 17.5 14 17.5 13V11.5ZM15.5 13C15.5 13.5 15 13.7 14.8 13.7H14.8V10.8H15C15.4 10.8 15.5 11.1 15.5 11.5V13Z" fill="white"/>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <path d="M7 16.5C7.5 17.3 8.3 17.8 9.3 17.8C10.5 17.8 11.3 17.1 11.3 15.8V10H9.5V15.7C9.5 16.2 9.2 16.4 8.8 16.4C8.4 16.4 8.2 16.2 8 15.9L7 16.5ZM13.8 16.8C14.4 17.5 15.4 17.8 16.6 17.8C18.2 17.8 19.3 16.9 19.3 15.3C19.3 13.9 18.4 13.3 17.1 12.7L16.4 12.4C15.6 12.1 15.2 11.7 15.2 11.2C15.2 10.6 15.7 10.2 16.4 10.2C17 10.2 17.5 10.5 17.9 11.1L19 10.2C18.3 9.2 17.4 8.8 16.4 8.8C14.9 8.8 13.8 9.8 13.8 11.2C13.8 12.6 14.6 13.2 15.9 13.8L16.6 14.1C17.4 14.4 17.9 14.9 17.9 15.4C17.9 16.1 17.3 16.5 16.5 16.5C15.6 16.5 15 16 14.6 15.3L13.8 16.8Z" fill="#000000"/>
        </svg>
      );

    case 'tailwind css':
    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#38BDF8"/>
        </svg>
      );

    case 'firebase':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4.5 18.5L6.8 4.2c.1-.5.7-.7 1-.3l3.2 5.8-6.5 8.8z" fill="#FFA000"/>
          <path d="M14.2 8.8L12.5 5.5c-.2-.4-.8-.4-1 0L4.5 18.5l9.7-9.7z" fill="#F57C00"/>
          <path d="M19.5 18.5L16.2 3.2c-.1-.5-.8-.7-1.1-.3l-10.6 15.6 7.5 4.2c.6.3 1.4.3 2 0l5.5-4.2z" fill="#FFCA28"/>
        </svg>
      );

    case 'vercel':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2L2 20h20L12 2z" />
        </svg>
      );

    case 'generative ai':
    case 'genai':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#1A73E8"/>
          <path d="M19 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" fill="#8AB4F8"/>
        </svg>
      );

    case 'machine learning':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="5" r="3" fill="#1A73E8"/>
          <circle cx="5" cy="18" r="3" fill="#34A853"/>
          <circle cx="19" cy="18" r="3" fill="#EA4335"/>
          <path d="M12 8v4m0 0l-5 4m5-4l5 4" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );

    case 'deep learning':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="6" cy="6" r="2.5" fill="#8AB4F8"/>
          <circle cx="18" cy="6" r="2.5" fill="#8AB4F8"/>
          <circle cx="6" cy="18" r="2.5" fill="#8AB4F8"/>
          <circle cx="18" cy="18" r="2.5" fill="#8AB4F8"/>
          <circle cx="12" cy="12" r="3" fill="#1A73E8"/>
          <path d="M6 6l6 6m0 0l6-6m-6 6l-6 6m6-6l6 6" stroke="#8AB4F8" strokeWidth="1.5"/>
        </svg>
      );

    case 'nlp':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect x="3" y="4" width="18" height="13" rx="3" stroke="#1A73E8" strokeWidth="2" fill="none"/>
          <path d="M7 8.5h10M7 12h6" stroke="#34A853" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 17l2 3h4" stroke="#1A73E8" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );

    case 'prompt engineering':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect x="2" y="3" width="20" height="18" rx="4" stroke="#FBBC04" strokeWidth="2"/>
          <path d="M6 9l4 3-4 3M12 15h6" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );

    case 'data analysis':
    case 'data pipelines':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M18 20V10M12 20V4M6 20v-6" stroke="#1A73E8" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M3 20h18" stroke="#DADCE0" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );

    case 'computer vision':
    case 'computer vision & tools':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="#1A73E8" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3.5" fill="#34A853"/>
          <circle cx="12" cy="12" r="1.5" fill="white"/>
        </svg>
      );

    case 'terminal':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect x="2" y="4" width="20" height="16" rx="3" stroke="#5F6368" strokeWidth="2"/>
          <path d="M6 9l3 3-3 3M11 15h5" stroke="#34A853" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.5"/>
          <path d="M12 8v8M8 12h8" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
  }
};

export default TechIcon;
