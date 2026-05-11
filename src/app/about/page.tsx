import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | The Floating Podcast",
  description:
    "Why The Floating Podcast exists, who hosts it, and what floating means.",
  openGraph: {
    title: "About The Floating Podcast",
    description:
      "Consciousness, ego, and the long path home. Meet the hosts and learn why we float.",
    siteName: "The Floating Podcast",
  },
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
                We started this podcast because we think the most important
                conversation anyone can have is about consciousness. Not as some
                abstract concept, but as the lived experience of waking up out
                of the trance most of us are walking around in.
              </p>
              <p>
                The biggest threat we all face, and we mean all of us, is the
                same one it has always been: the temptation to have power and
                control over other people. It doesn&apos;t matter if it shows up
                as big government, big business, big tech, organized religion,
                or AI. The pattern is the same. Institutional megalomania. And
                the only real antidote is individual sovereignty, a direct and
                personal connection with your Creator that no institution can
                mediate or take away from you.
              </p>
              <p>
                We are on{" "}
                <a
                  href="https://warriors-on-the-way.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-sky-4)] underline hover:text-[var(--color-gold)]"
                >
                  Fr. Sean O&apos;Laoire&apos;s team
                </a>{" "}
                as Warriors on the Way, working to reclaim the areas of life
                that have been captured by centralized power: education,
                healthcare, media, economics, food, spirituality. This is the
                Great Turning. It starts with each of us waking up.
              </p>
              <p>
                We draw from three bodies of teaching that have shaped our own
                lives: the Map of Consciousness from Dr. David Hawkins,
                the mystical cosmology of Fr. Sean O&apos;Laoire, and the
                radical forgiveness practice of A Course in Miracles. We also
                read and incorporate many other works that point toward
                non-duality, like The Kybalion, and anything else that helps
                illuminate the truth from a different angle. Together they
                paint a picture of what it looks like to liberate yourself from
                suffering and step into Christ Consciousness.
              </p>
              <p>
                This is literally the most important work and topic we could
                possibly be discussing. One day it will be more mainstream. For
                now, we really appreciate the few followers who enjoy listening
                to us and walking this path together.
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
                Richard is the host and producer of The Floating Podcast. He&apos;s
                a builder by nature, always pulling threads between philosophy,
                psychology, technology, and spirituality to see where they
                connect. He writes about intuition, reason, and
                decentralization, and he produces solo teachings on YouTube
                where he breaks down Hawkins, A Course in Miracles, and the
                mystics into something you can actually use in your day-to-day
                life.
              </p>
              <p>
                The podcast is where all of that comes together in real time.
                Nothing scripted, nothing polished. Just two people working
                through the material the way real seeking actually happens.
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
                Shannon is the co-host and brings a medium&apos;s perspective to
                every conversation. She has a gift for holding space for things
                most people can&apos;t see, and then putting what comes through
                into words the rest of us can actually feel.
              </p>
              <p>
                She joins Richard for the long-form conversations that anchor
                the show, grounding the philosophical in the personal. She
                brings warmth, humor, and a directness that keeps things from
                getting too heady. Shannon is a constant reminder that this
                path isn&apos;t just an intellectual exercise. It&apos;s felt,
                lived, and shared.
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
                the water holds you, and the sky opens up. Surrender without
                collapse. Ease without effort.
              </p>
              <p>
                The name is a metaphor for the inner posture we keep coming back
                to: the stillness at dawn, the willingness to let the current
                carry you, the trust that the water knows where to go. We float
                because fighting the river never got us anywhere worth arriving.
              </p>
              <p>
                It&apos;s also literal. Our favorite activity in the world is
                floating on a mountain lake with friends, talking about
                consciousness. There is nothing better. If that sounds like your
                kind of thing, come join our Floating group through{" "}
                <a
                  href="https://warriors-on-the-way.vercel.app/community/the-floaters-salt-lake-city"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-sky-4)] underline hover:text-[var(--color-gold)]"
                >
                  Warriors on the Way
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
