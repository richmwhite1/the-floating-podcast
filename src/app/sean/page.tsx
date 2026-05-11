import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fr. Sean O'Laoire — Spirits in Spacesuits — The Floating Podcast",
  description:
    "Fr. Sean O'Laoire's core teachings: Personal Cosmology, Soul Pods, the Three Selves, and comparative mysticism.",
  openGraph: {
    title: "Fr. Sean O'Laoire — Spirits in Spacesuits",
    description:
      "A Catholic priest, scientist, and mystic who bridges every tradition and illuminates the architecture of the soul.",
    siteName: "The Floating Podcast",
  },
};

const teachings = [
  {
    title: "Personal Cosmology",
    description:
      "Each soul arrives with its own cosmology — a unique lens through which it perceives and participates in creation. Sean teaches that building a personal cosmology is not optional; it is the fundamental work of being alive. Your cosmology shapes everything: what you value, how you suffer, and what you recognize as sacred.",
  },
  {
    title: "Soul Pods",
    description:
      "Souls do not incarnate alone. They travel in pods — small groups that reincarnate together across lifetimes, playing different roles for each other. The people who show up most intensely in your life are often your pod. This framework transforms relationships from accident to assignment.",
  },
  {
    title: "The Three Selves",
    description:
      "Sean describes three layers of self: the body-self (the spacesuit), the soul-self (the traveler), and the spirit-self (the eternal, unchanging awareness). Most human suffering comes from mistaking the spacesuit for the traveler — and most awakening comes from recognizing the spirit behind both.",
  },
  {
    title: "Spirits in Spacesuits",
    description:
      "Sean's central metaphor. We are spirits — vast, luminous, eternal — temporarily wearing spacesuits called bodies. The spacesuit lets us navigate the physical world, but we are not the suit. Remembering this is the entire game.",
  },
  {
    title: "Comparative Mysticism",
    description:
      "As a Catholic priest with a Ph.D. in transpersonal psychology, Sean moves fluently between traditions. He finds the same core truths in Christianity, Hinduism, Buddhism, Sufism, and Indigenous wisdom — not by flattening their differences, but by following each tradition deep enough that they converge.",
  },
];

export default function SeanPage() {
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
            Fr. Sean O&apos;Laoire — Spirits in Spacesuits
          </h1>
          <p className="text-gray-600 font-sans max-w-xl mx-auto">
            A Catholic priest, scientist, and mystic who bridges every tradition
            and illuminates the architecture of the soul.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[var(--color-cream)]">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-gray-700 leading-relaxed">
            Fr. Sean O&apos;Laoire is an Irish-born Catholic priest,
            transpersonal psychologist, and author whose work spans five
            decades of exploration across the world&apos;s wisdom traditions.
            He holds a Ph.D. in transpersonal psychology and has spent his
            life building bridges between science, mysticism, and the lived
            experience of the sacred. His teaching style is warm, humorous,
            and relentlessly practical — rooted not in abstraction but in
            the dailiness of being human.
          </p>
        </div>
      </section>

      {/* Core Teachings */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-8 sm:mb-10 text-center">
            Core Teachings
          </h2>
          <div className="space-y-8">
            {teachings.map((t) => (
              <div key={t.title}>
                <h3 className="font-sans text-base font-semibold text-gray-900 mb-2">
                  {t.title}
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask Sean's AI */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[var(--color-cream)]">
        <div className="max-w-xl mx-auto">
          <a
            href="https://www.spiritsinspacesuits.com/#ask"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[var(--color-gold-light)] transition-all text-center"
          >
            <h3 className="text-2xl font-serif italic text-[var(--color-sky-4)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
              Ask Sean&apos;s AI
            </h3>
            <p className="text-sm font-sans text-[var(--color-gold)] font-medium mb-3">
              Spirits in Spacesuits
            </p>
            <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4">
              Converse with an AI trained on Fr. Sean&apos;s writings —
              mysticism, science, and the soul&apos;s journey.
            </p>
            <span className="inline-block text-sm font-sans font-medium text-[var(--color-gold)] group-hover:translate-x-1 transition-transform">
              Open &rarr;
            </span>
          </a>

          <div className="text-center mt-8">
            <a
              href="https://www.spiritsinspacesuits.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-sky-4)] transition-colors"
            >
              Visit spiritsinspacesuits.com &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Coming soon placeholder */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm text-gray-400">
            Visual models of Sean&apos;s cosmology — Soul Pods, the Three
            Selves, and the architecture of incarnation — are coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
