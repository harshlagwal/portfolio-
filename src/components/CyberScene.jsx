import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * CyberScene Component
 * High-performance, futuristic canvas background with cybernetic nodes,
 * connecting laser grid lines, and interactive mouse gravity repulsion.
 */
const CyberScene = () => {
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

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 45 : 95;
    const MAX_DISTANCE = isMobile ? 90 : 140;
    const MOUSE_RADIUS = isMobile ? 100 : 170;

    const PRIMARY_COLOR = isDark ? '#00f0ff' : '#2563eb';
    const SECONDARY_COLOR = isDark ? '#8b5cf6' : '#3b82f6';

    class CyberParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1.2;
        this.baseRadius = this.radius;
        this.color = Math.random() > 0.4 ? PRIMARY_COLOR : SECONDARY_COLOR;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.03 + Math.random() * 0.02;
      }

      update(mouse) {
        this.pulse += this.pulseSpeed;
        this.radius = this.baseRadius + Math.sin(this.pulse) * 0.6;

        // Mouse interaction
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && mouse.active) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force * 1.2;
          this.vy += Math.sin(angle) * force * 1.2;
        }

        // Apply friction to prevent infinite velocity
        this.vx *= 0.97;
        this.vy *= 0.97;

        // Minimum drift
        if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.2;
        if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.2;

        this.x += this.vx;
        this.y += this.vy;

        // Wrap borders
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = isDark ? 8 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.offsetWidth || window.innerWidth;
      h = parent.offsetHeight || window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      particles = Array.from({ length: PARTICLE_COUNT }, () => new CyberParticle());
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * (isDark ? 0.35 : 0.18);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(0, 240, 255, ${alpha})`
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      const mouse = mouseRef.current;

      drawLines();

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse);
        particles[i].draw();
      }

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

    const timer = setTimeout(() => {
      init();
      animate();
    }, 40);

    return () => {
      clearTimeout(timer);
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
        opacity: isDark ? 0.85 : 0.6,
        mixBlendMode: isDark ? 'screen' : 'normal'
      }}
    />
  );
};

export default CyberScene;
