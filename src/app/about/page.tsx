import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — The Floating Podcast",
  description:
    "Why The Floating Podcast exists, who hosts it, and what floating means.",
};

export default function AboutPage() {
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
            About The Floating Podcast
          </h1>
          <p className="text-gray-600 font-sans max-w-xl mx-auto">
            Consciousness, ego, and the long path home.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[var(--color-cream)]">
        <div className="max-w-3xl mx-auto space-y-14 sm:space-y-20">
          {/* Section A: Why this podcast exists */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-6">
              Why this podcast exists
            </h2>
            <div className="prose prose-gray font-sans leading-relaxed space-y-4 text-gray-700">
              <p>
                The Floating Podcast exists to help raise consciousness and
                alleviate suffering. That sounds grand, but the work is intimate
                — one conversation at a time, one listener at a time, one
                moment of recognition at a time.
              </p>
              <p>
                We draw from three bodies of teaching that have shaped our own
                paths: the Map of Consciousness as articulated by Dr. David
                Hawkins, the mystical cosmology of Fr. Sean O&apos;Laoire, and the
                radical forgiveness curriculum of A Course in Miracles. Each
                points at the same truth from a different angle.
              </p>
              <p>
                Our hope is that something here meets you where you are — whether
                you&apos;re just beginning to question the nature of reality or
                you&apos;ve been on the path for decades and want companions for
                the journey.
              </p>
            </div>
          </div>

          {/* Section B: About Richard */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-6">
              About Richard White
            </h2>
            <div className="prose prose-gray font-sans leading-relaxed space-y-4 text-gray-700">
              <p>
                Richard White is the host and producer of The Floating Podcast.
                He approaches consciousness as both a contemplative and a
                builder, exploring the territory where philosophy, psychology,
                and spirituality converge.
              </p>
              <p>
                He writes regularly on intuition, reason, and decentralization,
                and produces solo teachings on YouTube — short lessons drawn from
                Hawkins, A Course in Miracles, and the mystics, distilled for
                everyday practice. For Richard, the podcast is the place where
                these threads come together in real time, unscripted and
                unpolished, the way real seeking always is.
              </p>
            </div>
          </div>

          {/* Section C: About Shannon */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-6">
              About Shannon Wilson
            </h2>
            <div className="prose prose-gray font-sans leading-relaxed space-y-4 text-gray-700">
              <p>
                Shannon Wilson is the co-host of The Floating Podcast and brings
                a medium&apos;s perspective to every conversation. Her gift is
                the ability to hold space for the unseen — and to translate what
                moves through that space into language the rest of us can feel.
              </p>
              <p>
                Shannon joins Richard for the long-form dialogues that anchor
                the podcast, grounding the philosophical in the personal and
                bringing warmth, humor, and directness to subjects that can
                otherwise feel abstract. She is a reminder that the path home is
                not only an intellectual exercise — it is felt, lived, and
                shared.
              </p>
            </div>
          </div>

          {/* Section D: Why we call it floating */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-6">
              Why we call it floating
            </h2>
            <div className="prose prose-gray font-sans leading-relaxed space-y-4 text-gray-700">
              <p>
                Floating is what happens when you stop swimming. You lie back,
                the water holds you, and the sky opens up. It&apos;s surrender
                without collapse — ease without effort.
              </p>
              <p>
                The name is a metaphor for the inner posture we keep coming back
                to: the stillness at dawn, the willingness to let the current
                carry you, the trust that the water knows where to go. We float
                because fighting the river never got us anywhere worth arriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
