import { Episode } from "@/lib/youtube";

function FeaturedEpisode({ episode }: { episode: Episode }) {
  return (
    <div className="mb-12">
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${episode.id}`}
            title={episode.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
            loading="lazy"
          />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-serif italic text-[var(--color-sky-4)] mt-4 sm:mt-6 mb-2">
          {episode.title}
        </h3>
        {episode.description && (
          <p className="text-gray-600 font-sans text-sm leading-relaxed line-clamp-3">
            {episode.description}
          </p>
        )}
      </div>
    </div>
  );
}

function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <a
      href={episode.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="relative">
        <img
          src={episode.thumbnail}
          alt={episode.title}
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
        <h4 className="font-sans text-sm font-medium text-gray-900 leading-snug line-clamp-2 group-hover:text-[var(--color-sky-4)] transition-colors mb-1">
          {episode.title}
        </h4>
        {episode.published && (
          <p className="font-sans text-xs text-gray-400">
            {new Date(episode.published).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        )}
      </div>
    </a>
  );
}

export default function Episodes({ episodes }: { episodes: Episode[] }) {
  if (episodes.length === 0) return null;

  const [featured, ...rest] = episodes;
  const grid = rest.slice(0, 5);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[var(--color-cream)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-center mb-4 text-[var(--color-sky-4)]">
          Latest Episodes
        </h2>
        <p className="text-center text-gray-600 font-sans mb-8 sm:mb-12 max-w-xl mx-auto text-sm sm:text-base">
          New conversations on consciousness, ego, and the path home.
        </p>

        <FeaturedEpisode episode={featured} />

        {grid.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {grid.map((ep) => (
              <EpisodeCard key={ep.id} episode={ep} />
            ))}
          </div>
        )}

        <div className="text-center">
          <a
            href="/episodes"
            className="inline-block font-sans text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-sky-4)] transition-colors"
          >
            View all episodes &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
