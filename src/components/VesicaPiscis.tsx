"use client";

import { useState } from "react";

/* ── Data from the reference image ── */
const pairs: {
  toxicYin: string;
  yin: string;
  yang: string;
  toxicYang: string;
}[] = [
  { toxicYin: "Manipulation", yin: "Artistic", yang: "Technical", toxicYang: "Rigid" },
  { toxicYin: "Impractical", yin: "Receptive", yang: "Active", toxicYang: "Restless" },
  { toxicYin: "Passive", yin: "Mercy-focused", yang: "Justice-focused", toxicYang: "Punitive" },
  { toxicYin: "Enabling", yin: "Soft", yang: "Hard", toxicYang: "Harsh" },
  { toxicYin: "Indecisive", yin: "Right brain", yang: "Left brain", toxicYang: "Reductionist" },
  { toxicYin: "Irrational", yin: "Diffuse", yang: "Directed", toxicYang: "Tunnel Vision" },
  { toxicYin: "Unfocused", yin: "Wide angle", yang: "Narrow focus", toxicYang: "Myopic" },
  { toxicYin: "Miss details", yin: "Intuitive", yang: "Rational", toxicYang: "Cold" },
  { toxicYin: "Impulsive", yin: "Emotional", yang: "Logical", toxicYang: "Detached" },
  { toxicYin: "Unstable", yin: "Humble", yang: "Confident", toxicYang: "Arrogant" },
  { toxicYin: "Insecure", yin: "Related", yang: "Independent", toxicYang: "Isolated" },
  { toxicYin: "Dependent", yin: "Loving", yang: "Powerful", toxicYang: "Tyrannical" },
  { toxicYin: "Possessive", yin: "Compassionate", yang: "Courageous", toxicYang: "Reckless" },
  { toxicYin: "Pitying", yin: "Dark", yang: "Light", toxicYang: "Blinding" },
  { toxicYin: "Depressive", yin: "Nurturing", yang: "Protective", toxicYang: "Overbearing" },
  { toxicYin: "Smothering", yin: "Tender Love", yang: "Tough Love", toxicYang: "Unloving" },
  { toxicYin: "Indulgent", yin: "Patient", yang: "Task Oriented", toxicYang: "Obsessive" },
  { toxicYin: "Complacent", yin: "Considerate", yang: "Assertive", toxicYang: "Aggressive" },
  { toxicYin: "Neglect self", yin: "Cooperative", yang: "Competitive", toxicYang: "Cutthroat" },
  { toxicYin: "Submissive", yin: "Community oriented", yang: "Individuated", toxicYang: "Narcissistic" },
  { toxicYin: "Suppress needs", yin: "Open minded", yang: "Skepticism", toxicYang: "Cynical" },
  { toxicYin: "Gullible", yin: "Considerate", yang: "Assertive", toxicYang: "Aggressive" },
];

// Remove duplicate last row from reference
const qualities = pairs.slice(0, 21);

export default function VesicaPiscis() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeColumn, setActiveColumn] = useState<"yin" | "yang" | null>(null);
  const [balance, setBalance] = useState(50); // 0 = full yin, 100 = full yang

  // Visual offset for the two circles based on balance
  const yinShift = ((50 - balance) / 50) * 30; // circles move apart or overlap

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, #1e1245 0%, var(--color-cosmic-deep) 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white/90 mb-3">
            The Principle of Gender
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            &ldquo;Gender is in everything; everything has its Masculine and
            Feminine Principles; Gender manifests on all planes.&rdquo;
          </p>
          <p className="font-sans text-xs text-white/30 mt-2 italic">
            — The Kybalion
          </p>
        </div>

        {/* ── SVG Vesica Piscis ── */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <svg
            viewBox="-260 -180 520 360"
            className="w-full max-w-md sm:max-w-lg"
            aria-label="Vesica Piscis — two overlapping circles representing Yin and Yang"
          >
            <defs>
              {/* Yin gradient — cool indigo/violet */}
              <radialGradient id="yin-grad" cx="35%" cy="50%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#312e81" stopOpacity="0.4" />
              </radialGradient>
              {/* Yang gradient — warm gold/amber */}
              <radialGradient id="yang-grad" cx="65%" cy="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#92400e" stopOpacity="0.4" />
              </radialGradient>
              {/* Center glow */}
              <radialGradient id="center-glow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#e0d5f5" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#e0d5f5" stopOpacity="0" />
              </radialGradient>
              {/* Clip for the vesica (intersection) */}
              <clipPath id="clip-yin">
                <circle cx={-60 + yinShift} cy="0" r="140" />
              </clipPath>
              <clipPath id="clip-yang">
                <circle cx={60 - yinShift} cy="0" r="140" />
              </clipPath>
              {/* Pulse animation */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Yin circle */}
            <circle
              cx={-60 + yinShift}
              cy="0"
              r="140"
              fill="url(#yin-grad)"
              stroke="#a78bfa"
              strokeWidth="1.5"
              opacity={activeColumn === "yang" ? 0.4 : 1}
              className="transition-opacity duration-500"
              onMouseEnter={() => setActiveColumn("yin")}
              onMouseLeave={() => setActiveColumn(null)}
              style={{ cursor: "pointer" }}
            />

            {/* Yang circle */}
            <circle
              cx={60 - yinShift}
              cy="0"
              r="140"
              fill="url(#yang-grad)"
              stroke="#fbbf24"
              strokeWidth="1.5"
              opacity={activeColumn === "yin" ? 0.4 : 1}
              className="transition-opacity duration-500"
              onMouseEnter={() => setActiveColumn("yang")}
              onMouseLeave={() => setActiveColumn(null)}
              style={{ cursor: "pointer" }}
            />

            {/* Vesica Piscis lens (intersection) — glow */}
            <circle
              cx={60 - yinShift}
              cy="0"
              r="140"
              fill="url(#center-glow)"
              clipPath="url(#clip-yin)"
              filter="url(#glow)"
              className="animate-pulse"
              style={{ animationDuration: "4s" }}
            />

            {/* Labels */}
            <text
              x={-120 + yinShift}
              y="-5"
              textAnchor="middle"
              className="fill-white/80 font-serif italic"
              fontSize="22"
            >
              Yin
            </text>
            <text
              x={-120 + yinShift}
              y="18"
              textAnchor="middle"
              className="fill-white/40 font-sans"
              fontSize="11"
            >
              Feminine
            </text>

            <text
              x={120 - yinShift}
              y="-5"
              textAnchor="middle"
              className="fill-white/80 font-serif italic"
              fontSize="22"
            >
              Yang
            </text>
            <text
              x={120 - yinShift}
              y="18"
              textAnchor="middle"
              className="fill-white/40 font-sans"
              fontSize="11"
            >
              Masculine
            </text>

            {/* Center label */}
            <text
              x="0"
              y="-8"
              textAnchor="middle"
              className="fill-white/90 font-serif italic"
              fontSize="15"
              filter="url(#glow)"
            >
              Balance
            </text>
            <text
              x="0"
              y="12"
              textAnchor="middle"
              className="fill-white/50 font-sans"
              fontSize="9"
            >
              Sacred Union
            </text>
          </svg>
        </div>

        {/* ── Balance Slider ── */}
        <div className="max-w-sm mx-auto mb-12 sm:mb-16 px-4">
          <div className="flex justify-between text-xs font-sans text-white/40 mb-2">
            <span>Yin</span>
            <span className="text-white/60 font-medium">
              {balance === 50
                ? "Balanced"
                : balance < 50
                ? "Yin-dominant"
                : "Yang-dominant"}
            </span>
            <span>Yang</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value))}
            className="w-full accent-[var(--color-gold)] h-1.5 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #7c3aed ${balance}%, #f59e0b ${balance}%)`,
            }}
            aria-label="Adjust yin-yang balance"
          />
          <p className="text-center text-xs text-white/30 mt-3 font-sans">
            Drag to see what happens when energy moves out of balance
          </p>
        </div>

        {/* ── Four-Column Qualities Grid ── */}
        <div className="grid grid-cols-4 gap-x-2 sm:gap-x-4 max-w-5xl mx-auto">
          {/* Headers */}
          <div className="text-center pb-3 sm:pb-4 border-b border-red-500/30">
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-red-400">
              Toxic Yin
            </span>
          </div>
          <div className="text-center pb-3 sm:pb-4 border-b border-purple-400/30">
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-purple-300">
              Yin
            </span>
          </div>
          <div className="text-center pb-3 sm:pb-4 border-b border-amber-400/30">
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300">
              Yang
            </span>
          </div>
          <div className="text-center pb-3 sm:pb-4 border-b border-red-500/30">
            <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-red-400">
              Toxic Yang
            </span>
          </div>

          {/* Rows */}
          {qualities.map((q, i) => (
            <div
              key={i}
              className="contents"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Toxic Yin */}
              <div
                className={`text-center py-1.5 sm:py-2 font-sans text-[10px] sm:text-sm transition-all duration-300 ${
                  hoveredIdx === i
                    ? "text-red-400 scale-105"
                    : "text-red-400/30"
                }`}
              >
                {q.toxicYin}
              </div>
              {/* Yin */}
              <div
                className={`text-center py-1.5 sm:py-2 font-sans text-[10px] sm:text-sm transition-all duration-300 ${
                  hoveredIdx === i
                    ? "text-purple-200 scale-105"
                    : "text-purple-200/70"
                }`}
              >
                {q.yin}
              </div>
              {/* Yang */}
              <div
                className={`text-center py-1.5 sm:py-2 font-sans text-[10px] sm:text-sm transition-all duration-300 ${
                  hoveredIdx === i
                    ? "text-amber-200 scale-105"
                    : "text-amber-200/70"
                }`}
              >
                {q.yang}
              </div>
              {/* Toxic Yang */}
              <div
                className={`text-center py-1.5 sm:py-2 font-sans text-[10px] sm:text-sm transition-all duration-300 ${
                  hoveredIdx === i
                    ? "text-red-400 scale-105"
                    : "text-red-400/30"
                }`}
              >
                {q.toxicYang}
              </div>
            </div>
          ))}
        </div>

        {/* Insight callout */}
        <div className="max-w-2xl mx-auto mt-10 sm:mt-14 text-center">
          <p className="font-sans text-sm text-white/50 leading-relaxed">
            Every virtue has a shadow. When Yin energy goes unchecked by Yang, it
            collapses into <span className="text-red-400/70">manipulation</span>
            . When Yang energy goes unchecked by Yin, it hardens into{" "}
            <span className="text-red-400/70">restriction</span>. The path is
            always through the center — the sacred lens where opposites meet.
          </p>
        </div>
      </div>
    </section>
  );
}
