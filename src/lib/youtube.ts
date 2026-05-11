export interface Episode {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  description: string;
  link: string;
}

const FEED_URL =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCMSnzpGCl4L59KuME4rSVig";

export async function fetchEpisodes(): Promise<Episode[]> {
  const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
  const xml = await res.text();

  const episodes: Episode[] = [];
  const entries = xml.split("<entry>");

  // Skip first element (it's the feed header, not an entry)
  for (let i = 1; i < entries.length; i++) {
    const entry = entries[i];

    const id = extractTag(entry, "yt:videoId");
    const title = extractTag(entry, "title");
    const published = extractTag(entry, "published");
    const description = extractTag(entry, "media:description");
    const link = `https://www.youtube.com/watch?v=${id}`;
    const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

    if (id && title) {
      episodes.push({ id, title, published, thumbnail, description, link });
    }
  }

  return episodes;
}

function extractTag(xml: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const match = xml.match(regex);
  return match ? match[1].trim() : "";
}
