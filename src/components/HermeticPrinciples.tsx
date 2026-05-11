"use client";

import { useState } from "react";

/* ── The 7 Hermetic Principles ── */
const principles: {
  number: number;
  name: string;
  axiom: string;
  quote: string;
  description: string;
  color: string; // Tailwind-compatible gradient stops
}[] = [
  {
    number: 1,
    name: "Mentalism",
    axiom: "The All is Mind; the Universe is Mental.",
    quote:
      "Under and behind the Universe of Time, Space and Change, is ever to be found The Substantial Reality — the Fundamental Truth.",
    description:
      "Everything that exists begins as thought. The material universe is a mental creation of The All — an infinite living mind. To change your reality, change your mind first.",
    color: "from-violet-500/20 to-indigo-600/20",
  },
  {
    number: 2,
    name: "Correspondence",
    axiom: "As above, so below; as below, so above.",
    quote:
      "This Principle embodies the truth that there is always a Correspondence between the laws and phenomena of the various planes of Being and Life.",
    description:
      "The patterns of the macrocosm repeat in the microcosm. The atom mirrors the solar system. Your inner world mirrors your outer world. Understanding one plane unlocks understanding of all planes.",
    color: "from-blue-500/20 to-cyan-600/20",
  },
  {
    number: 3,
    name: "Vibration",
    axiom: "Nothing rests; everything moves; everything vibrates.",
    quote:
      "The differences between different manifestations of Matter, Energy, Mind, and Spirit, result largely from varying rates of Vibration.",
    description:
      "From the densest matter to the highest spirit, everything is in motion. The difference between lead and gold, fear and love, is frequency. Raise your vibration and you raise your reality.",
    color: "from-emerald-500/20 to-teal-600/20",
  },
  {
    number: 4,
    name: "Polarity",
    axiom: "Everything is dual; everything has poles; everything has its pair of opposites.",
    quote:
      "Opposites are identical in nature, but different in degree. Extremes meet. All truths are but half-truths. All paradoxes may be reconciled.",
    description:
      "Hot and cold are the same thing — temperature — differing only in degree. Love and hate, courage and fear, are not truly opposite but exist on a single spectrum. The alchemist transmutes by sliding along the pole.",
    color: "from-amber-500/20 to-orange-600/20",
  },
  {
    number: 5,
    name: "Rhythm",
    axiom: "Everything flows, out and in; everything has its tides.",
    quote:
      "The Pendulum-swing manifests in everything; the measure of the swing to the right is the measure of the swing to the left; rhythm compensates.",
    description:
      "Seasons, moods, civilizations, breaths — all rise and fall in rhythmic cycles. The master does not try to stop the pendulum but learns to polarize above its swing, remaining centered while the world oscillates.",
    color: "from-rose-500/20 to-pink-600/20",
  },
  {
    number: 6,
    name: "Cause & Effect",
    axiom: "Every Cause has its Effect; every Effect has its Cause.",
    quote:
      "Nothing merely happens. There is no such thing as Chance. Everything happens according to Law.",
    description:
      "There are no accidents. Every event has a chain of causation. Most people are effects — moved by will and desire of others. The master rises above the plane of effects and becomes a cause, a mover rather than a pawn.",
    color: "from-sky-500/20 to-blue-600/20",
  },
  {
    number: 7,
    name: "Gender",
    axiom: "Gender is in everything; everything has its Masculine and Feminine Principles.",
    quote:
      "Gender manifests on all planes. No creation, physical, mental or spiritual, is possible without this Principle.",
    description:
      "Gender goes far beyond sex. The Masculine principle is the outward, active, projecting will. The Feminine principle is the inward, receptive, creative womb. Both are required for all creation — on every plane of existence.",
    color: "from-purple-500/20 to-amber-500/20",
  },
];

/* ── Mini visual for each principle ── */
function PrincipleVisual({ index, isOpen }: { index: number; isOpen: boolean }) {
  const baseClass = "transition-all duration-700 ease-out";

  switch (index) {
    case 0: // Mentalism — expanding thought ripple
      return (
        <div className="relative w-20 h-20 mx-auto">
          {[0, 1, 2].map((ring) => (
            <div
              key={ring}
              className={`absolute inset-0 rounded-full border border-violet-400/40 ${baseClass}`}
              style={{
                transform: isOpen
                  ? `scale(${1 + ring * 0.35})`
                  : "scale(0.3)",
                opacity: isOpen ? 1 - ring * 0.3 : 0,
                transitionDelay: `${ring * 150}ms`,
              }}
            />
          ))}
          <div
            className={`absolute inset-0 m-auto w-3 h-3 rounded-full bg-violet-400 ${baseClass}`}
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "scale(1)" : "scale(0)",
            }}
          />
        </div>
      );

    case 1: // Correspondence — mirror reflection
      return (
        <div className="relative w-20 h-20 mx-auto flex flex-col items-center justify-center gap-1">
          <div
            className={`w-6 h-6 border-2 border-cyan-400/60 rotate-45 ${baseClass}`}
            style={{
              transform: isOpen ? "rotate(45deg) scale(1)" : "rotate(45deg) scale(0)",
              opacity: isOpen ? 1 : 0,
            }}
          />
          <div className={`w-12 h-px bg-cyan-400/30 ${baseClass}`}
            style={{ opacity: isOpen ? 1 : 0, transitionDelay: "200ms" }}
          />
          <div
            className={`w-6 h-6 border-2 border-cyan-400/60 rotate-45 ${baseClass}`}
            style={{
              transform: isOpen
                ? "rotate(45deg) scale(1) scaleY(-1)"
                : "rotate(45deg) scale(0)",
              opacity: isOpen ? 0.5 : 0,
              transitionDelay: "100ms",
            }}
          />
        </div>
      );

    case 2: // Vibration — frequency wave
      return (
        <div className="relative w-20 h-20 mx-auto overflow-hidden">
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <path
              d="M0 40 Q10 20 20 40 Q30 60 40 40 Q50 20 60 40 Q70 60 80 40"
              fill="none"
              stroke="#34d399"
              strokeWidth="2"
              strokeLinecap="round"
              className={baseClass}
              style={{
                strokeDasharray: 200,
                strokeDashoffset: isOpen ? 0 : 200,
                opacity: isOpen ? 0.7 : 0,
              }}
            />
          </svg>
        </div>
      );

    case 3: // Polarity — spectrum bar
      return (
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          <div
            className={`h-3 rounded-full ${baseClass}`}
            style={{
              width: isOpen ? "100%" : "0%",
              opacity: isOpen ? 1 : 0,
              background:
                "linear-gradient(to right, #7c3aed, #f59e0b)",
            }}
          />
        </div>
      );

    case 4: // Rhythm — pendulum
      return (
        <div className="relative w-20 h-20 mx-auto flex items-start justify-center">
          <div
            className={`w-px h-12 bg-pink-400/50 origin-top ${baseClass}`}
            style={{
              transform: isOpen ? "rotate(15deg)" : "rotate(0deg)",
              opacity: isOpen ? 1 : 0,
              animation: isOpen ? "pendulum 2s ease-in-out infinite" : "none",
            }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pink-400/60" />
          </div>
        </div>
      );

    case 5: // Cause & Effect — chain reaction dots
      return (
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`rounded-full bg-sky-400/60 ${baseClass}`}
              style={{
                width: `${8 + dot * 3}px`,
                height: `${8 + dot * 3}px`,
                transform: isOpen ? "scale(1)" : "scale(0)",
                opacity: isOpen ? 1 - dot * 0.15 : 0,
                transitionDelay: `${dot * 120}ms`,
              }}
            />
          ))}
        </div>
      );

    case 6: // Gender — two overlapping circles (mini vesica)
      return (
        <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
          <div
            className={`absolute w-10 h-10 rounded-full border-2 border-purple-400/50 ${baseClass}`}
            style={{
              transform: isOpen ? "translateX(-6px)" : "translateX(0)",
              opacity: isOpen ? 1 : 0,
            }}
          />
          <div
            className={`absolute w-10 h-10 rounded-full border-2 border-amber-400/50 ${baseClass}`}
            style={{
              transform: isOpen ? "translateX(6px)" : "translateX(0)",
              opacity: isOpen ? 1 : 0,
              transitionDelay: "100ms",
            }}
          />
        </div>
      );

    default:
      return null;
  }
}

export default function HermeticPrinciples() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[var(--color-cream)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[var(--color-sky-4)] mb-3">
            The Seven Hermetic Principles
          </h2>
          <p className="font-sans text-sm text-gray-500 max-w-xl mx-auto">
            From <em>The Kybalion</em> — attributed to Hermes Trismegistus.
            These axioms describe the fundamental laws governing all planes of
            existence.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {principles.map((p, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={p.name}
                className={`rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "border-[var(--color-gold)]/40 shadow-lg"
                    : "border-gray-200 hover:border-[var(--color-gold)]/30 hover:shadow-sm"
                }`}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-label={`${p.name}: ${p.axiom}`}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIdx(isOpen ? null : i);
                  }
                }}
              >
                {/* Header */}
                <div
                  className={`flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 bg-gradient-to-r ${p.color}`}
                >
                  <span className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 flex items-center justify-center font-sans text-sm font-bold text-[var(--color-sky-4)]">
                    {p.number}
                  </span>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-serif italic text-lg sm:text-xl text-gray-900">
                      {p.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-500 truncate">
                      {p.axiom}
                    </p>
                  </div>
                  {/* Visual */}
                  <div className="hidden sm:block flex-shrink-0">
                    <PrincipleVisual index={i} isOpen={isOpen} />
                  </div>
                  {/* Chevron */}
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Expanded content */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                    {/* Mobile visual */}
                    <div className="sm:hidden mb-4">
                      <PrincipleVisual index={i} isOpen={isOpen} />
                    </div>
                    <blockquote className="font-serif italic text-sm text-gray-500 border-l-2 border-[var(--color-gold)]/40 pl-4 mb-4">
                      &ldquo;{p.quote}&rdquo;
                    </blockquote>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
