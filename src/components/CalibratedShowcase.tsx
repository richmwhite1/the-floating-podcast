"use client";

import { useState } from "react";
import Link from "next/link";

/* ── Curated highlights — a mix of teachers & writings across levels ── */
interface Entry {
  name: string;
  level: number;
  type: "teacher" | "writing";
  tradition: string;
}

const featured: Entry[] = [
  { name: "Jesus Christ", level: 1000, type: "teacher", tradition: "Christian" },
  { name: "The Buddha", level: 1000, type: "teacher", tradition: "Buddhist" },
  { name: "Bhagavad-Gita", level: 910, type: "writing", tradition: "Hindu" },
  { name: "Ramana Maharshi", level: 720, type: "teacher", tradition: "Hindu" },
  { name: "Heart Sutra", level: 780, type: "writing", tradition: "Buddhist" },
  { name: "Mother Teresa", level: 710, type: "teacher", tradition: "Christian" },
  { name: "Koran", level: 700, type: "writing", tradition: "Islamic" },
  { name: "Mahatma Gandhi", level: 760, type: "teacher", tradition: "Hindu" },
  { name: "Rumi", level: 550, type: "teacher", tradition: "Sufi" },
  { name: "A Course in Miracles", level: 600, type: "writing", tradition: "Universal" },
  { name: "The Dalai Lama", level: 570, type: "teacher", tradition: "Buddhist" },
  { name: "Lao Tzu", level: 610, type: "teacher", tradition: "Taoist" },
];

/* Color by calibration band */
function bandColor(level: number): {
  bg: string;
  border: string;
  text: string;
  glow: string;
} {
  if (level >= 1000)
    return {
      bg: "bg-yellow-50",
      border: "border-yellow-300/60",
      text: "text-yellow-700",
      glow: "shadow-yellow-200/40",
    };
  if (level >= 800)
    return {
      bg: "bg-violet-50",
      border: "border-violet-300/50",
      text: "text-violet-700",
      glow: "shadow-violet-200/30",
    };
  if (level >= 700)
    return {
      bg: "bg-indigo-50",
      border: "border-indigo-300/50",
      text: "text-indigo-700",
      glow: "shadow-indigo-200/30",
    };
  if (level >= 600)
    return {
      bg: "bg-sky-50",
      border: "border-sky-300/50",
      text: "text-sky-700",
      glow: "shadow-sky-200/30",
    };
  return {
    bg: "bg-emerald-50",
    border: "border-emerald-300/50",
    text: "text-emerald-700",
    glow: "shadow-emerald-200/30",
  };
}

/* Bar width relative to 1000 */
function barWidth(level: number) {
  return `${Math.max((level / 1000) * 100, 20)}%`;
}

export default function CalibratedShowcase() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold)] mb-3">
            Calibrated by Consciousness
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[var(--color-sky-4)] mb-3">
            Teachers &amp; Sacred Writings
          </h2>
          <p className="font-sans text-sm text-gray-500 max-w-2xl mx-auto">
            Using David Hawkins&apos; Map of Consciousness, every teacher and
            text can be calibrated on a logarithmic scale from 1 to 1,000.
            Here are some of the highest-calibrating presences in human history.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {featured.map((entry, i) => {
            const colors = bandColor(entry.level);
            const isHovered = hoveredIdx === i;
            return (
              <div
                key={entry.name}
                className={`group relative rounded-xl border p-4 sm:p-5 transition-all duration-300 cursor-default ${
                  colors.bg
                } ${colors.border} ${
                  isHovered ? `shadow-lg ${colors.glow}` : "shadow-sm"
                }`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Type badge */}
                <span
                  className={`absolute top-3 right-3 font-sans text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold ${
                    entry.type === "writing"
                      ? "text-amber-500/70"
                      : "text-gray-400"
                  }`}
                >
                  {entry.type === "writing" ? "Text" : "Teacher"}
                </span>

                {/* Name */}
                <h3 className="font-serif italic text-base sm:text-lg text-gray-900 mb-1 pr-12">
                  {entry.name}
                </h3>

                {/* Tradition */}
                <p className="font-sans text-xs text-gray-400 mb-3">
                  {entry.tradition}
                </p>

                {/* Calibration bar */}
                <div className="flex items-center gap-3">
                  <div className="flex-grow h-1.5 rounded-full bg-gray-200/60 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        isHovered ? "opacity-100" : "opacity-70"
                      }`}
                      style={{
                        width: barWidth(entry.level),
                        background:
                          entry.level >= 1000
                            ? "linear-gradient(to right, #f59e0b, #eab308)"
                            : entry.level >= 700
                            ? "linear-gradient(to right, #818cf8, #6366f1)"
                            : entry.level >= 600
                            ? "linear-gradient(to right, #38bdf8, #0ea5e9)"
                            : "linear-gradient(to right, #34d399, #10b981)",
                      }}
                    />
                  </div>
                  <span
                    className={`font-sans text-sm font-bold tabular-nums ${colors.text}`}
                  >
                    {entry.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14 space-y-3">
          <Link
            href="/teachers"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-sky-4)] transition-colors"
          >
            Browse all calibrated teachers &amp; writings
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <p className="font-sans text-xs text-gray-400">
            {97} teachers &middot; {34} sacred texts &middot; spanning every
            major tradition
          </p>
        </div>
      </div>
    </section>
  );
}
