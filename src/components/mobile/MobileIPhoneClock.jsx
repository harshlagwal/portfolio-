import React, { useState, useEffect } from 'react';

export const MobileIPhoneClock = () => {
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
  const dateString = time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div className="select-none text-center flex flex-col items-center justify-center pt-2 pb-4 pointer-events-none">
      {/* Day & Date Line */}
      <div className="text-xs sm:text-sm font-semibold text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-wide">
        {dayString}, {dateString}
      </div>

      {/* Large iPhone Bold Digital Time */}
      <div className="text-6xl sm:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)] font-['Google_Sans',sans-serif] leading-none mt-1">
        {timeString}
      </div>
    </div>
  );
};

export default MobileIPhoneClock;
