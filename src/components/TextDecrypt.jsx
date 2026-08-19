import React, { useState, useEffect, useRef } from 'react';

/**
 * TextDecrypt Component
 * Decrypts text matrix / cyber cipher style on mount or when triggered.
 */
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>[]{}~';

const TextDecrypt = ({ 
  text, 
  className = '', 
  speed = 30, 
  delay = 0,
  animateOnHover = true 
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const startDecryption = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 2.5;
    }, speed);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      startDecryption();
    }, delay);

    return () => {
      clearTimeout(timer);
      clearInterval(intervalRef.current);
    };
  }, [text, delay]);

  const handleMouseEnter = () => {
    if (animateOnHover) {
      startDecryption();
    }
    setIsHovered(true);
  };

  return (
    <span 
      className={`font-mono transition-colors ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </span>
  );
};

export default TextDecrypt;
