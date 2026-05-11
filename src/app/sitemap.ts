import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://the-floating-podcast.vercel.app";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/episodes`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hawkins`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sean`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/acim`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kybalion`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/teachers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/subscribe`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
