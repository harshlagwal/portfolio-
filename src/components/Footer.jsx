import React from 'react';
import HalftoneWordmarkFooter from './ui/halftone-wordmark-footer';
import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
  const { isDark } = useTheme();

  // Single horizontal line navbar sections only (no live projects)
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  // Theme-adaptive palette matching site dark (#08090b) and light (#dadde3) backgrounds
  const palette = isDark
    ? {
        background: "#08090b",
        ink: "#ffffff",
        warm: "#ff5a1f" // Energetic warm ember glow when cursor moves over dots
      }
    : {
        background: "#dadde3",
        ink: "#0d0f12",
        warm: "#1a73e8" // Crisp Antigravity blue glow in light mode
      };

  return (
    <div className="w-full border-t border-[#cbd0d9] dark:border-[#262933] overflow-hidden">
      <HalftoneWordmarkFooter
        wordmark="harsh"
        label="Harsh Lagwal"
        meta="© 2026"
        navLinks={navLinks}
        backToTop={true}
        preset={isDark ? "night" : "paper"}
        palette={palette}
        dotGap={6}
        radius={85}
        crop={0.22}
        grain={0.35}
        interactive={true}
        height="480px"
        className="w-full"
      />
    </div>
  );
};

export default Footer;
