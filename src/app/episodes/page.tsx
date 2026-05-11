import { Metadata } from "next";
import { fetchEpisodes } from "@/lib/youtube";
import EpisodesClient from "./EpisodesClient";
import Footer from "@/components/Footer";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Episodes — The Floating Podcast",
  description:
    "Every episode of The Floating Podcast. Conversations on consciousness, ego, and the long path home.",
  openGraph: {
    title: "Episodes — The Floating Podcast",
    description:
      "Every conversation, from the beginning. New episodes drop weekly.",
    siteName: "The Floating Podcast",
  },
};

export default async function EpisodesPage() {
  const episodes = await fetchEpisodes();

  return (
    <>
      {/* Page hero */}
      <section
        className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-sky-1), var(--color-cream))",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[var(--color-sky-4)] mb-4">
            Episodes
          </h1>
          <p className="text-gray-600 font-sans max-w-xl mx-auto">
            Every conversation, from the beginning. New episodes drop weekly.
          </p>
        </div>
      </section>

      <EpisodesClient episodes={episodes} />
      <Footer />
    </>
  );
}
