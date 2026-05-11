export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_top] sm:bg-center"
        style={{ backgroundImage: "url(/hero.png)" }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-white mb-4 sm:mb-6"
          style={{ textShadow: "0 2px 30px rgba(0,0,0,0.6), 0 1px 6px rgba(0,0,0,0.4)" }}
        >
          We are aspects of God, remembering.
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl text-white/90 font-sans max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
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
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white font-sans text-sm font-medium hover:bg-white/25 active:bg-white/30 transition-colors"
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
