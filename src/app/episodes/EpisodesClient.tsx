"use client";

import { useState, useMemo } from "react";
import { Episode } from "@/lib/youtube";

export default function EpisodesClient({
  episodes,
}: {
  episodes: Episode[];
}) {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const filtered = useMemo(() => {
    let result = [...episodes];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((ep) => ep.title.toLowerCase().includes(q));
    }

    if (sortOrder === "oldest") {
      result.reverse();
    }

    return result;
  }, [episodes, search, sortOrder]);

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 bg-[var(--color-cream)] min-h-[60vh]">
      <div className="max-w-5xl mx-auto">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search episodes…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)]"
          />
          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "newest" | "oldest")
            }
            className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 font-sans py-12">
            No episodes match your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ep) => (
              <a
                key={ep.id}
                href={ep.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={ep.thumbnail}
                    alt={ep.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                    <svg
                      className="w-10 h-10 text-white/80 drop-shadow-lg group-hover:text-white group-hover:scale-110 transition-all"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-sans text-sm font-medium text-gray-900 leading-snug line-clamp-2 group-hover:text-[var(--color-sky-4)] transition-colors mb-2">
                    {ep.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400">
                    {new Date(ep.published).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
