import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

// Pre-render glow sprite into an offscreen canvas ONCE.
// Every particle just calls drawImage() — zero per-frame gradient cost.
function buildSprite(glowColor, coreColor, size) {
  const oc    = document.createElement('canvas');
  oc.width    = size;
  oc.height   = size;
  const oc2   = oc.getContext('2d');
  const cx    = size / 2;

  // Soft outer glow
  const g = oc2.createRadialGradient(cx, cx, 0, cx, cx, cx);
  g.addColorStop(0,    glowColor);
  g.addColorStop(0.25, glowColor);
  g.addColorStop(0.7,  glowColor.replace('1)', '0.2)'));
  g.addColorStop(1,    glowColor.replace('1)', '0)'));
  oc2.beginPath();
  oc2.arc(cx, cx, cx, 0, Math.PI * 2);
  oc2.fillStyle = g;
  oc2.fill();

  // Crisp bright core + shadow for extra shine
  oc2.beginPath();
  oc2.arc(cx, cx, Math.max(1, size * 0.09), 0, Math.PI * 2);
  oc2.fillStyle    = coreColor;
  oc2.shadowColor  = coreColor;
  oc2.shadowBlur   = size * 0.35;
  oc2.fill();

  return oc;
}

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId = null;
    let outerRafId       = null;
    let innerRafId       = null;
    let listeners        = [];         // track event listeners for cleanup

    // Double-rAF: defer ALL canvas work until after the browser's first paint.
    // This means hero text renders instantly; particles start 2 frames later.
    outerRafId = requestAnimationFrame(() => {
      innerRafId = requestAnimationFrame(() => {

        const ctx    = canvas.getContext('2d');
        const SPRITE  = 48;   // sprite canvas size in logical px

        // Build sprites once — shared by every particle (fast bitmap blit)
        const darkSprite = buildSprite(
          'rgba(200,225,255,1)',   // cool-white glow
          '#ffffff',
          SPRITE
        );
        const lightSprite = buildSprite(
          'rgba(79,70,229,1)',     // indigo glow
          '#a5b4fc',              // bright indigo core
          SPRITE
        );
        const sprite = isDark ? darkSprite : lightSprite;

        let logicalW = 0;
        let logicalH = 0;
        let particles = [];

        // ── Particle ─────────────────────────────────────────────
        class Particle {
          constructor(spreadY) {
            this.reset(spreadY);
          }
          reset(spreadY = false) {
            this.x         = Math.random() * logicalW;
            this.y         = spreadY
              ? Math.random() * logicalH
              : logicalH + Math.random() * 40;
            this.scale     = Math.random() * 0.5 + 0.15;
            this.half      = (SPRITE * this.scale) / 2;
            this.speed     = Math.random() * 0.38 + 0.1;
            this.drift     = (Math.random() - 0.5) * 0.12;
            this.opacity   = 0;
            this.maxOp     = Math.random() * 0.55 + 0.38;
            this.fadeIn    = Math.random() * 0.005 + 0.002;
            this.growing   = true;
            this.fadingOut = false;
          }
          update() {
            this.y -= this.speed;
            this.x += this.drift;

            // Fade in
            if (this.growing) {
              this.opacity = Math.min(this.opacity + this.fadeIn, this.maxOp);
              if (this.opacity >= this.maxOp) this.growing = false;
            }
            // Fade out near top 18%
            if (!this.growing && this.y < logicalH * 0.18) {
              this.fadingOut = true;
            }
            if (this.fadingOut) {
              this.opacity = Math.max(this.opacity - this.fadeIn * 2, 0);
            }
            // Recycle
            if (this.y < -SPRITE || this.opacity <= 0) {
              this.reset(false);
            }
          }
          draw() {
            if (this.opacity <= 0) return;
            const s = SPRITE * this.scale;
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.drawImage(sprite, this.x - this.half, this.y - this.half, s, s);
            ctx.restore();
          }
        }

        // ── Init canvas size + particles ─────────────────────────
        const init = () => {
          const parent = canvas.parentElement;
          logicalW = parent ? parent.offsetWidth  : window.innerWidth;
          logicalH = parent ? parent.offsetHeight : window.innerHeight;

          const dpr = window.devicePixelRatio || 1;
          canvas.width        = logicalW * dpr;
          canvas.height       = logicalH * dpr;
          canvas.style.width  = logicalW + 'px';
          canvas.style.height = logicalH + 'px';
          ctx.scale(dpr, dpr);

          const count = Math.min(
            Math.floor((logicalW * logicalH) / 4500),
            280
          );
          particles = [];
          for (let i = 0; i < count; i++) {
            particles.push(new Particle(true));
          }
        };

        // ── Animation loop ────────────────────────────────────────
        const animate = () => {
          ctx.clearRect(0, 0, logicalW, logicalH);
          particles.forEach(p => { p.update(); p.draw(); });
          animationFrameId = requestAnimationFrame(animate);
        };

        // ── Resize handler ────────────────────────────────────────
        const handleResize = () => init();
        window.addEventListener('resize', handleResize);
        listeners.push(['resize', handleResize]);

        init();
        animate();

      }); // end inner rAF
    });   // end outer rAF

    // Cleanup — cancel everything regardless of which stage we're in
    return () => {
      cancelAnimationFrame(outerRafId);
      cancelAnimationFrame(innerRafId);
      cancelAnimationFrame(animationFrameId);
      listeners.forEach(([ev, fn]) => window.removeEventListener(ev, fn));
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{
        opacity: isDark ? 0.92 : 0.65,
        willChange: 'transform',   // promotes canvas to its own GPU layer
      }}
    />
  );
};

export default ParticleBackground;
