import Link from "next/link";

export default function KybalionPreview() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Dark cosmic background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, #1e1245 0%, var(--color-cosmic-deep) 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — Vesica Piscis SVG (clean, just labels) */}
          <div className="flex justify-center">
            <svg
              viewBox="-200 -150 400 300"
              className="w-full max-w-xs sm:max-w-sm"
              aria-label="Vesica Piscis — Yin and Yang in balance"
            >
              <defs>
                <radialGradient id="kp-yin" cx="35%" cy="50%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#312e81" stopOpacity="0.35" />
                </radialGradient>
                <radialGradient id="kp-yang" cx="65%" cy="50%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#92400e" stopOpacity="0.35" />
                </radialGradient>
                <radialGradient id="kp-glow" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#e0d5f5" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#e0d5f5" stopOpacity="0" />
                </radialGradient>
                <clipPath id="kp-clip-yin">
                  <circle cx="-50" cy="0" r="120" />
                </clipPath>
                <filter id="kp-blur">
                  <feGaussianBlur stdDeviation="5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Yin circle */}
              <circle
                cx="-50"
                cy="0"
                r="120"
                fill="url(#kp-yin)"
                stroke="#a78bfa"
                strokeWidth="1"
              />
              {/* Yang circle */}
              <circle
                cx="50"
                cy="0"
                r="120"
                fill="url(#kp-yang)"
                stroke="#fbbf24"
                strokeWidth="1"
              />
              {/* Intersection glow */}
              <circle
                cx="50"
                cy="0"
                r="120"
                fill="url(#kp-glow)"
                clipPath="url(#kp-clip-yin)"
                filter="url(#kp-blur)"
                className="animate-pulse"
                style={{ animationDuration: "4s" }}
              />

              {/* Yin label */}
              <text
                x="-100"
                y="-4"
                textAnchor="middle"
                className="fill-white/80 font-serif italic"
                fontSize="22"
              >
                Yin
              </text>
              <text
                x="-100"
                y="18"
                textAnchor="middle"
                className="fill-white/35 font-sans"
                fontSize="10"
              >
                Feminine
              </text>

              {/* Yang label */}
              <text
                x="100"
                y="-4"
                textAnchor="middle"
                className="fill-white/80 font-serif italic"
                fontSize="22"
              >
                Yang
              </text>
              <text
                x="100"
                y="18"
                textAnchor="middle"
                className="fill-white/35 font-sans"
                fontSize="10"
              >
                Masculine
              </text>

              {/* Center — Balance */}
              <text
                x="0"
                y="0"
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-white/70 font-serif italic"
                fontSize="14"
                filter="url(#kp-blur)"
              >
                Balance
              </text>
            </svg>
          </div>

          {/* Right — Text + CTA */}
          <div className="text-center md:text-left">
            <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold)] mb-3">
              The Kybalion
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white/90 mb-4 leading-tight">
              The Seven Hermetic Principles
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/50 leading-relaxed mb-3">
              &ldquo;Gender is in everything; everything has its Masculine and
              Feminine Principles.&rdquo; The Vesica Piscis reveals what
              happens when either energy goes unchecked — and where wholeness
              lives.
            </p>
            <p className="font-sans text-sm text-white/40 leading-relaxed mb-6">
              Explore all seven principles — Mentalism, Correspondence,
              Vibration, Polarity, Rhythm, Cause &amp; Effect, and Gender —
              through interactive visuals.
            </p>
            <Link
              href="/kybalion"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[var(--color-gold)] hover:text-white transition-colors"
            >
              Explore the principles
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
          </div>
        </div>
      </div>
    </section>
  );
}
