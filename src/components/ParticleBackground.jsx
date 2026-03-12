import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Premium AI-Style Particle Background
 * Features:
 * - Floating glowing nodes (Neural Network style)
 * - Proximity-based connecting lines
 * - Subtle cursor repulsion and attraction
 * - High-performance Canvas 2D optimized with sprites
 * - Theme-aware colors and intensities
 */

function buildNodeSprite(color, size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const center = size / 2;

  // Small, sharp glowing dot
  const gradient = ctx.createRadialGradient(center, center, 0, center, center, center);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.3, color.replace('1)', '0.8)'));
  gradient.addColorStop(0.6, color.replace('1)', '0.2)'));
  gradient.addColorStop(1, 'rgba(0,0,0,0)');

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(center, center, center, 0, Math.PI * 2);
  ctx.fill();

  return canvas;
}

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId = null;
    let particles = [];
    let clusters = [];
    let w, h;
    
    // Config
    const PARTICLE_COUNT = 180; 
    const MOUSE_RADIUS = 180;
    const CLUSTER_CHANCE = 0.005;
    const COLORS = isDark 
      ? ['rgba(56, 189, 248, 1)', 'rgba(168, 85, 247, 1)', 'rgba(34, 211, 238, 1)'] // Sky Blue, Purple, Cyan
      : ['rgba(37, 99, 235, 1)', 'rgba(126, 34, 206, 1)', 'rgba(8, 145, 178, 1)'];  // Darker variants

    // Pre-render sprites for performance
    const sprites = COLORS.map(color => buildNodeSprite(color, 16));

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.sprite = sprites[Math.floor(Math.random() * sprites.length)];
        this.size = Math.random() * 2 + 1;
        this.baseSize = this.size;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.02;
        this.target = null;
        this.glowIntensity = 0.4;
      }

      update(mouse) {
        // Organic flow
        this.angle += this.spin;
        this.vx += Math.cos(this.angle) * 0.01;
        this.vy += Math.sin(this.angle) * 0.01;

        // Apply target attraction (Clustering)
        if (this.target) {
          const dx = this.target.x - this.x;
          const dy = this.target.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 5) {
            this.vx += dx * 0.001;
            this.vy += dy * 0.001;
          } else {
            this.target = null; // Disperse
          }
        }

        // Speed limit
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = 1.2;
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Wrap around
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;

        // Elastic Cursor Interaction
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          
          // Repel if too close, attract slightly if mid-range
          if (dist < 60) {
            this.vx += (dx / dist) * force * 0.8;
            this.vy += (dy / dist) * force * 0.8;
          } else {
            this.vx -= (dx / dist) * force * 0.1;
            this.vy -= (dy / dist) * force * 0.1;
          }
          
          this.size = this.baseSize + force * 2;
          this.glowIntensity = 0.5 + force * 0.5;
        } else {
          this.size = this.baseSize;
          this.glowIntensity = 0.4;
        }
      }

      draw() {
        ctx.globalAlpha = this.glowIntensity;
        ctx.drawImage(this.sprite, this.x - this.size * 2, this.y - this.size * 2, this.size * 4, this.size * 4);
      }
    }

    const init = () => {
      const parent = canvas.parentElement;
      w = parent ? parent.offsetWidth : window.innerWidth;
      h = parent ? parent.offsetHeight : window.innerHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      const mouse = mouseRef.current;

      // Randomly create clusters
      if (Math.random() < CLUSTER_CHANCE) {
        const clusterPoint = { x: Math.random() * w, y: Math.random() * h };
        particles.forEach(p => {
          if (Math.random() < 0.15) p.target = clusterPoint;
        });
      }

      particles.forEach(p => {
        p.update(mouse);
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false };
    };

    const handleResize = () => init();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{
        opacity: isDark ? 0.7 : 0.5,
        mixBlendMode: isDark ? 'screen' : 'multiply'
      }}
    />
  );
};

export default ParticleBackground;
