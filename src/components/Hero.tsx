export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #d8e4f0 0%, #b8cfe3 30%, #7ba0c4 60%, #4a6b8a 85%, #3a5a7a 100%)",
        }}
      />

      {/* Sun glow */}
      <div
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(253,232,200,0.8) 0%, rgba(253,232,200,0.3) 30%, transparent 70%)",
        }}
      />

      {/* Mountain silhouettes */}
      <div className="absolute bottom-[22%] left-0 right-0 h-[30%]">
        <div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(0% 100%, 0% 60%, 8% 45%, 18% 55%, 28% 30%, 38% 50%, 48% 20%, 55% 35%, 65% 15%, 72% 40%, 80% 25%, 88% 45%, 95% 35%, 100% 50%, 100% 100%)",
            background: "linear-gradient(to bottom, #3a5570, #2d4560)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(0% 100%, 0% 70%, 10% 55%, 20% 65%, 30% 45%, 42% 60%, 52% 35%, 60% 50%, 70% 30%, 78% 50%, 85% 40%, 92% 55%, 100% 45%, 100% 100%)",
            background: "linear-gradient(to bottom, #2d4560, #1f3550)",
          }}
        />
      </div>

      {/* Water */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[22%]"
        style={{
          background:
            "linear-gradient(to bottom, #4a6b8a, #3a5a7a 40%, #2d4a6a)",
        }}
      />

      {/* Warm reflection band on water */}
      <div
        className="absolute bottom-[10%] left-[20%] right-[20%] h-[8%] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(253,232,200,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Hero image */}
      <div className="relative z-10 mb-6 w-full max-w-3xl px-6">
        <img
          src="/hero.png"
          alt="Jesus Christ resting peacefully by the water under starlit sky"
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </div>

      {/* Bottom-edge gradient for text readability */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] z-[5] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-white mb-6"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          We are aspects of God, remembering.
        </h1>
        <p
          className="text-lg md:text-xl text-white/90 font-sans max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
        >
          Richard White and Shannon Wilson on consciousness, ego, and the long
          path home — through every tradition that has ever pointed at the One.
        </p>

        {/* Listen buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            {
              label: "YouTube",
              href: "https://www.youtube.com/@TheFloatingPodcast",
            },
            {
              label: "Spotify",
              href: "https://open.spotify.com/show/10uq7r8aOxNUSxnRKb05G2",
            },
            {
              label: "Apple Podcasts",
              href: "https://podcasts.apple.com/us/podcast/the-floating-podcast/id1816047702",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white font-sans text-sm font-medium hover:bg-white/25 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
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
    </section>
  );
}
