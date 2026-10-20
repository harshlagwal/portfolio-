import React, { useState, useEffect } from 'react';

/**
 * Pure Floating Digital Time (Cardless)
 * Rendered directly on the desktop wallpaper without container boxes or cards.
 */
export const GlassTimeWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const dayString = time.toLocaleDateString('en-US', { weekday: 'long' });
  const dateString = time.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <div className="select-none text-center flex flex-col items-center justify-center pointer-events-none">
      {/* Floating Digital Time */}
      <div className="text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] font-sans leading-none">
        {timeString}
      </div>

      {/* Floating Day & Date */}
      <div className="text-sm md:text-base font-medium text-white/90 uppercase tracking-[0.3em] mt-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
        {dayString} · {dateString}
      </div>
    </div>
  );
};
