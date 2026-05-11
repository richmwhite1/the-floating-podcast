export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-[var(--color-cosmic-deep)] text-center">
      <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
        &ldquo;The light has come. You are healed and you can heal.&rdquo;
      </p>
      <p className="text-white/30 font-sans text-xs tracking-wide uppercase mb-6">
        A Course in Miracles
      </p>
      <div className="flex justify-center gap-6 mb-8">
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
            label: "Apple",
            href: "https://podcasts.apple.com/us/podcast/the-floating-podcast/id1816047702",
          },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-[var(--color-gold)] font-sans text-sm transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="text-white/20 font-sans text-xs">
        &copy; 2025&ndash;{new Date().getFullYear()} The Floating Podcast &middot; Made with reverence in Salt Lake City.
      </p>
    </footer>
  );
}
