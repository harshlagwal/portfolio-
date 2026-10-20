import React, { useState, useEffect } from 'react';

/**
 * Braun-Inspired Minimalist Glass Clock (Custom "HARSH" Edition)
 * - Pure frosted circular glass dial with ambient soft drop shadow
 * - Full 12 hour tick marks & 48 fine minute tick marks
 * - Complete 1 through 12 clean Swiss typography numerals
 * - Iconic bold condensed "HARSH" logo positioned cleanly below 12
 * - High-visibility matte charcoal Hour and Minute hands (zero filter bugs)
 * - Sweeping vibrant orange second hand with counterweight tail
 * - Translucent frosted center hub disc with vivid orange pivot cap
 * - Live dynamic Date ("Oct 19") and Country ("India")
 */
export const WorldClockWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let animId;
    const tick = () => {
      setTime(new Date());
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const ms = time.getMilliseconds();
  const s = time.getSeconds() + ms / 1000;
  const m = time.getMinutes() + s / 60;
  const h = (time.getHours() % 12) + m / 60;

  const secondDeg = s * 6;
  const minuteDeg = m * 6;
  const hourDeg = h * 30;

  const dateStr = time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const timeZoneName = 'India';

  // Generate 60 ticks
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    const angle = i * 6;
    const isHour = i % 5 === 0;

    const outerR = 92;
    const innerR = isHour ? 83.5 : 87.5;
    const strokeWidth = isHour ? 1.8 : 0.85;
    const stroke = isHour ? '#22242a' : '#9ca3af';

    const rad = ((angle - 90) * Math.PI) / 180;
    const x1 = 100 + outerR * Math.cos(rad);
    const y1 = 100 + outerR * Math.sin(rad);
    const x2 = 100 + innerR * Math.cos(rad);
    const y2 = 100 + innerR * Math.sin(rad);

    ticks.push(
      <line
        key={`tick-${i}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    );
  }

  // Numerals 1 to 12
  const numerals = [];
  const numRadius = 71;
  for (let n = 1; n <= 12; n++) {
    const angle = n * 30;
    const rad = ((angle - 90) * Math.PI) / 180;
    const nx = 100 + numRadius * Math.cos(rad);
    const ny = 100 + numRadius * Math.sin(rad);

    numerals.push(
      <text
        key={`num-${n}`}
        x={nx}
        y={ny}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#26282e"
        fontSize="10.5"
        fontWeight="500"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', Roboto, sans-serif"
        letterSpacing="-0.2px"
      >
        {n}
      </text>
    );
  }

  return (
    <div className="relative w-44 h-44 md:w-52 md:h-52 select-none group hover:scale-[1.03] transition-transform duration-300">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_20px_45px_rgba(0,0,0,0.5)] filter"
      >
        <defs>
          {/* Frosted Glass Radial Dial Face */}
          <radialGradient id="harshGlassFace" cx="50%" cy="38%" r="62%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
            <stop offset="65%" stopColor="rgba(244, 246, 249, 0.90)" />
            <stop offset="100%" stopColor="rgba(226, 230, 238, 0.85)" />
          </radialGradient>

          {/* Frosted Outer Rim Highlight */}
          <linearGradient id="harshRim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
            <stop offset="45%" stopColor="rgba(255, 255, 255, 0.35)" />
            <stop offset="100%" stopColor="rgba(160, 170, 185, 0.3)" />
          </linearGradient>
        </defs>

        {/* ── Outer Frosted Glass Dial ── */}
        <circle
          cx="100"
          cy="100"
          r="97"
          fill="url(#harshGlassFace)"
          stroke="url(#harshRim)"
          strokeWidth="1.6"
        />

        {/* Inner Bevel Ring */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="none"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="0.8"
        />

        {/* ── 60 Minute & Hour Ticks ── */}
        <g>{ticks}</g>

        {/* ── 1 through 12 Numbers ── */}
        <g>{numerals}</g>

        {/* ── "HARSH" Typography (Replacing "BRAUN") ── */}
        <text
          x="100"
          y="78"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#1b1d22"
          fontSize="14.5"
          fontWeight="900"
          fontFamily="'Arial Black', 'Inter', -apple-system, sans-serif"
          letterSpacing="1.5px"
        >
          HARSH
        </text>

        {/* ── Date and City Display (Below Center) ── */}
        <g transform="translate(100, 131)" textAnchor="middle">
          <text
            x="0"
            y="0"
            fontSize="8"
            fontWeight="600"
            fill="#475569"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', Roboto, sans-serif"
          >
            {dateStr}
          </text>
          <text
            x="0"
            y="10.5"
            fontSize="7"
            fontWeight="500"
            fill="#64748b"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', Roboto, sans-serif"
          >
            {timeZoneName}
          </text>
        </g>

        {/* ── Hour Needle (Charcoal Black, Bold & Rounded) ── */}
        <g transform={`rotate(${hourDeg} 100 100)`}>
          {/* Subtle soft shadow */}
          <rect
            x="99.2"
            y="61"
            width="3.6"
            height="43"
            rx="1.8"
            fill="rgba(0,0,0,0.2)"
          />
          {/* Main needle */}
          <rect
            x="98.2"
            y="60"
            width="3.6"
            height="43"
            rx="1.8"
            fill="#1e2025"
          />
        </g>

        {/* ── Minute Needle (Charcoal Black, Sleek & Long) ── */}
        <g transform={`rotate(${minuteDeg} 100 100)`}>
          {/* Subtle soft shadow */}
          <rect
            x="99.7"
            y="43"
            width="2.6"
            height="61"
            rx="1.3"
            fill="rgba(0,0,0,0.18)"
          />
          {/* Main needle */}
          <rect
            x="98.7"
            y="42"
            width="2.6"
            height="61"
            rx="1.3"
            fill="#1e2025"
          />
        </g>

        {/* ── Center Frosted Hub Disc ── */}
        <circle
          cx="100"
          cy="100"
          r="10"
          fill="rgba(255, 255, 255, 0.72)"
          stroke="rgba(255, 255, 255, 0.9)"
          strokeWidth="0.8"
        />

        {/* ── Sweeping Second Needle (Vivid Signature Orange) ── */}
        <g transform={`rotate(${secondDeg} 100 100)`}>
          {/* Counterweight tail */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="114"
            stroke="#ff5500"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Long needle */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="34"
            stroke="#ff5500"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          {/* Orange pivot point cap */}
          <circle cx="100" cy="100" r="3.2" fill="#ff5500" />
        </g>
      </svg>
    </div>
  );
};
