import React from 'react';

export const TechIcon = ({ name, size = 16, className = "" }) => {
  const iconKey = name.toLowerCase().trim();

  // Real vector brand SVGs with official colors
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

    case 'generative ai':
    case 'genai':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#10A37F"/>
        </svg>
      );

    case 'deep learning':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="6" cy="6" r="3" fill="#8B5CF6"/>
          <circle cx="18" cy="6" r="3" fill="#8B5CF6"/>
          <circle cx="12" cy="18" r="3" fill="#8B5CF6"/>
          <path d="M6 6l6 12M18 6l-6 12M6 6h12" stroke="#8B5CF6" strokeWidth="1.5"/>
        </svg>
      );

    case 'nlp':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <rect x="3" y="4" width="18" height="14" rx="3" stroke="#06B6D4" strokeWidth="2" fill="none"/>
          <path d="M7 9h10M7 13h6" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );

    case 'machine learning':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" fill="#3B82F6"/>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" fill="#60A5FA"/>
        </svg>
      );

    case 'prompt engineering':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M4 17l6-6-6-6M12 19h8" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );

    case 'data analysis':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M18 20V10M12 20V4M6 20v-6" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round"/>
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

    case 'vite':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M21.5 4.5L12.5 21L3.5 4.5L11.5 6.5L21.5 4.5Z" fill="#646CFF" fillOpacity="0.8"/>
          <path d="M12.5 2.5L3.5 4.5L12.5 21L21.5 4.5L12.5 2.5Z" stroke="#646CFF" strokeWidth="1.5"/>
          <path d="M13.5 3L8 13H12L11 18.5L16.5 8.5H12.5L13.5 3Z" fill="#FFD62E"/>
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

    case 'ai engine':
    case 'gemini ai':
    case 'ai':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#38BDF8"/>
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF"/>
        </svg>
      );

    case 'web audio api':
    case 'web audio':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round">
          <path d="M3 10v4M7 6v12M11 3v18M15 8v8M19 11v2M22 12v0" />
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

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="2"/>
          <path d="M12 8v8M8 12h8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
  }
};

export default TechIcon;
