import React from 'react';

/**
 * Clean Professional Card Component
 * Simple, elegant hover state without aggressive 3D tilting
 */
const TiltCard = ({ 
  children, 
  className = '', 
  onClick 
}) => {
  return (
    <div
      onClick={onClick}
      className={`transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
};

export default TiltCard;

