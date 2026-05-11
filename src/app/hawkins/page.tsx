import { Metadata } from "next";
import MapOfConsciousness from "@/components/MapOfConsciousness";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr. David Hawkins & the Map of Consciousness — The Floating Podcast",
  description:
    "The Map of Consciousness, key concepts, and where to start with David Hawkins' work.",
  openGraph: {
    title: "Dr. David Hawkins & the Map of Consciousness",
    description:
      "A logarithmic scale of human awareness — the compass for the journey from ego to truth.",
    siteName: "The Floating Podcast",
  },
};

const concepts = [
  {
    title: "Force vs. Power",
    description:
      "Force operates through manipulation, control, and coercion — it always creates a counter-force. Power arises from meaning, truth, and alignment with life itself. The distinction is the foundation of Hawkins' entire framework: everything below 200 on the Map uses force; everything above it radiates power.",
  },
  {
    title: "Calibration",
    description:
      "Hawkins developed a kinesiologic testing method to measure the energy field of any statement, person, or object. The body goes strong in the presence of truth and weak in the presence of falsehood. This binary signal, applied systematically, produces numerical calibrations on the Map of Consciousness.",
  },
  {
    title: "The Levels",
    description:
      "The Map ranges from 20 (Shame) to 1000 (Enlightenment). Each level represents a dominant emotional tone, a way of perceiving reality, and a characteristic relationship to God, self, and others. Movement through the levels is not linear — it is a process of letting go.",
  },
  {
    title: "The Threshold at 200",
    description:
      "Level 200 (Courage) is the critical dividing line. Below it, consciousness is dominated by force, contraction, and survival. Above it, power, expansion, and truth emerge. Crossing this threshold is the single most transformative shift a human being can make.",
  },
  {
    title: "The Logarithmic Scale",
    description:
      "The Map is logarithmic, not linear. The difference between 200 and 300 is not the same as between 100 and 200 — it is exponentially greater. A single individual at 700 counterbalances millions below 200. This is why even small shifts in consciousness ripple outward enormously.",
  },
];

const books = [
  {
    title: "Power vs. Force",
    description:
      "The foundational text. Introduces the Map of Consciousness, the calibration method, and the distinction between force and power that reframes everything.",
  },
  {
    title: "Letting Go: The Pathway of Surrender",
    description:
      "The most practical of Hawkins' books. A clear method for releasing the emotional attachments that keep consciousness stuck at lower levels.",
  },
  {
    title: "The Eye of the I",
    description:
      "Written from the perspective of advanced states. Where Power vs. Force maps the territory, this book describes what it looks like from the summit.",
  },
  {
    title: "I: Reality and Subjectivity",
    description:
      "The deepest dive into nonduality and the nature of consciousness itself. For readers who have integrated the earlier works and want to go further.",
  },
];

export default function HawkinsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-sky-1), var(--color-cream))",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[var(--color-sky-4)] mb-4">
            Dr. David Hawkins &amp; the Map of Consciousness
          </h1>
          <p className="text-gray-600 font-sans max-w-xl mx-auto">
            A logarithmic scale of human awareness — the compass for the journey
            from ego to truth.
          </p>
        </div>
      </section>

      {/* Map */}
      <MapOfConsciousness />

      {/* Key Concepts */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[var(--color-cream)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-8 sm:mb-10 text-center">
            Key Concepts
          </h2>
          <div className="space-y-8">
            {concepts.map((c) => (
              <div key={c.title}>
                <h3 className="font-sans text-base font-semibold text-gray-900 mb-2">
                  {c.title}
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Start */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-8 sm:mb-10 text-center">
            Where to Start
          </h2>
          <div className="space-y-6">
            {books.map((b, i) => (
              <div
                key={b.title}
                className="flex gap-4 items-start p-5 rounded-xl bg-[var(--color-cream)] border border-gray-100"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-gold-light)] flex items-center justify-center font-sans text-sm font-semibold text-[var(--color-sky-4)]">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif italic text-lg text-[var(--color-sky-4)] mb-1">
                    {b.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask Dr. Hawkins card */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[var(--color-cream)]">
        <div className="max-w-xl mx-auto">
          <a
            href="https://notebooklm.google.com/notebook/8373a58a-14d8-4c9c-8ca7-8367dc7c90ff"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[var(--color-gold-light)] transition-all text-center"
          >
            <h3 className="text-2xl font-serif italic text-[var(--color-sky-4)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
              Ask Dr. Hawkins
            </h3>
            <p className="text-sm font-sans text-[var(--color-gold)] font-medium mb-3">
              Powered by NotebookLM
            </p>
            <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">
              Explore the teachings of David R. Hawkins — calibrated levels,
              letting go, and the nature of consciousness.
            </p>
            <span className="inline-block text-sm font-sans font-medium text-[var(--color-gold)] group-hover:translate-x-1 transition-transform">
              Open &rarr;
            </span>
          </a>

          <div className="text-center mt-8">
            <a
              href="/teachers"
              className="font-sans text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-sky-4)] transition-colors"
            >
              Browse all calibrated teachers &amp; writings &rarr;
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
