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
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId = null;
    let particles = [];
    let w, h;
    
    // Config
    const PARTICLE_COUNT = 140; 
    const CONNECTION_DISTANCE = 110;
    const MOUSE_DISTANCE = 150;
    const NODE_SIZE = 12; // Canvas sprite size

    // Thematic Colors
    const colors = isDark 
      ? { node: 'rgba(56, 189, 248, 1)', line: 'rgba(56, 189, 248, 0.15)' } // Sky Blue
      : { node: 'rgba(37, 99, 235, 1)', line: 'rgba(37, 99, 235, 0.1)' };   // Vibrant Blue

    const nodeSprite = buildNodeSprite(colors.node, NODE_SIZE * (window.devicePixelRatio || 1));

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4; // Slow, smooth movement
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.8;
        this.baseRadius = this.radius;
      }

      update(mouseX, mouseY) {
        // Organic floating motion
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;

        // Cursor interaction (Repulsion / Gentle push)
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_DISTANCE) {
          const force = (MOUSE_DISTANCE - dist) / MOUSE_DISTANCE;
          this.x += (dx / dist) * force * 1.5;
          this.y += (dy / dist) * force * 1.5;
          this.radius = this.baseRadius + force * 1.2;
        } else {
          this.radius = this.baseRadius;
        }
      }

      draw() {
        const s = NODE_SIZE;
        ctx.drawImage(nodeSprite, this.x - s/2, this.y - s/2, s, s);
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

    const drawLine = (p1, p2, alpha) => {
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = colors.line.replace('0.1', alpha.toString());
      ctx.lineWidth = 0.6;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      const mouse = mouseRef.current;

      // Update and draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update(mouse.x, mouse.y);
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - (dist / CONNECTION_DISTANCE)) * 0.2;
            drawLine(p1, p2, alpha);
          }
        }

        // Connection to mouse
        const dxm = p1.x - mouse.x;
        const dym = p1.y - mouse.y;
        const distM = Math.sqrt(dxm * dxm + dym * dym);
        if (distM < MOUSE_DISTANCE) {
          const alphaM = (1 - (distM / MOUSE_DISTANCE)) * 0.3;
          drawLine(p1, mouse, alphaM);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleResize = () => {
      init();
    };

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
