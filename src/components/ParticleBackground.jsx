import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Premium AI-Style Particle Background
 * Features:
 * - Sharper, clearer glowing nodes (Data Flow style)
 * - Stronger cursor repulsion
 * - High-performance Canvas 2D
 * - Theme-aware colors and intensities
 */

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
    let w, h;
    
    // Config
    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 60 : 160; 
    const MOUSE_RADIUS = isMobile ? 80 : 150;
    const CLUSTER_CHANCE = 0.003;
    const COLORS = isDark 
      ? ['rgba(56, 189, 248, 1)', 'rgba(168, 85, 247, 1)', 'rgba(34, 211, 238, 1)'] 
      : ['rgba(37, 99, 235, 1)', 'rgba(126, 34, 206, 1)', 'rgba(8, 145, 178, 1)'];


    // Sharper node sprite with solid core
    function buildSharpNodeSprite(color, size) {
      const cvs = document.createElement('canvas');
      cvs.width = size;
      cvs.height = size;
      const c2d = cvs.getContext('2d');
      const center = size / 2;

      // Solid core for "sharp" look
      c2d.fillStyle = color;
      c2d.beginPath();
      c2d.arc(center, center, size * 0.25, 0, Math.PI * 2);
      c2d.fill();

      // Subtle outer glow
      const grad = c2d.createRadialGradient(center, center, 0, center, center, center);
      grad.addColorStop(0, color.replace('1)', '0.6)'));
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      c2d.fillStyle = grad;
      c2d.beginPath();
      c2d.arc(center, center, center, 0, Math.PI * 2);
      c2d.fill();

      return cvs;
    }

    const sprites = COLORS.map(color => buildSharpNodeSprite(color, 24));

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.sprite = sprites[Math.floor(Math.random() * sprites.length)];
        this.size = Math.random() * 3 + 2;
        this.baseSize = this.size;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.02;
        this.target = null;
        this.opacity = 0.95;
      }

      update(mouse) {
        this.angle += this.spin;
        this.vx += Math.cos(this.angle) * 0.015;
        this.vy += Math.sin(this.angle) * 0.015;

        // Clustering attraction
        if (this.target) {
          const dx = this.target.x - this.x;
          const dy = this.target.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 5) {
            this.vx += dx * 0.0015;
            this.vy += dy * 0.0015;
          } else {
            this.target = null;
          }
        }

        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          // Strong repulsion
          this.vx += (dx / dist) * force * 2.5;
          this.vy += (dy / dist) * force * 2.5;
          this.opacity = 1;
        } else {
          this.opacity = 0.9;
        }

        // Speed limit with decent flow
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = 3.5;
        if (speed > maxSpeed) {
          this.vx = (this.vx / speed) * maxSpeed;
          this.vy = (this.vy / speed) * maxSpeed;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Bounce/Wrap boundaries
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.sprite, this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
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

      if (Math.random() < CLUSTER_CHANCE) {
        const clusterPoint = { x: Math.random() * w, y: Math.random() * h };
        particles.forEach(p => { if (Math.random() < 0.1) p.target = clusterPoint; });
      }

      particles.forEach(p => {
        p.update(mouse);
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true };
    };

    const handleMouseLeave = () => { mouseRef.current = { x: -1000, y: -1000, active: false }; };
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
        opacity: isDark ? 1 : 0.9,
        mixBlendMode: isDark ? 'screen' : 'multiply'
      }}
    />
  );
};

export default ParticleBackground;
