"use client";

import { useRef, useState, useEffect } from "react";

const videos = [
  { id: "uoHkufbEqko", title: "The Floating Podcast Introduction" },
  { id: "3PCKHzsc8wk", title: "What Is Consciousness?" },
  { id: "8FK7mQCZdVs", title: "The Utility of Suffering" },
  { id: "eeebbG4rG9o", title: "Belief vs Knowing" },
  { id: "EifBooozu_A", title: "Masculinity and Femininity" },
  { id: "HhVOV6b9u3c", title: "Understanding the Divide Between Politics, Religion and Relationships" },
  { id: "HRGymeHQfwE", title: "Authenticity and the Origin of Morality" },
  { id: "IunXKEC8Lh8", title: "Operation Liberation: Claiming Your Sovereignty in a World of Control" },
  { id: "N5UcfZT_DAs", title: "The Change Is Happening" },
  { id: "NEAQH5Xl7L4", title: "Serendipity" },
  { id: "NrJix1FFigg", title: "How Mediumship Works" },
  { id: "T-TvKJgwz90", title: "Spiritual Pragmatism" },
  { id: "1R4bHD17lm8", title: "The Liminal State" },
  { id: "ZCQEReolBDU", title: "The Common Enemy" },
];

export default function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }

  useEffect(() => {
    updateScrollState();
  }, []);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-6 sm:mt-10">
      {/* Scroll buttons — hidden on touch devices, visible on hover for desktop */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hidden sm:flex items-center justify-center hover:bg-black/70 transition-colors"
          aria-label="Scroll left"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm text-white hidden sm:flex items-center justify-center hover:bg-black/70 transition-colors"
          aria-label="Scroll right"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth px-4 sm:px-6 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        <style>{`.video-carousel::-webkit-scrollbar { display: none; }`}</style>
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[75vw] sm:w-72 snap-start group"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-white/80 drop-shadow-lg group-hover:text-white group-hover:scale-110 transition-all"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm text-white/80 font-sans leading-snug line-clamp-2 group-hover:text-white transition-colors">
              {video.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
