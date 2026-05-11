import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A Course in Miracles — The Floating Podcast",
  description:
    "What is A Course in Miracles? Selected quotes, where to read it, and starting points for the Workbook.",
};

const quotes = [
  {
    text: "Nothing real can be threatened. Nothing unreal exists. Herein lies the peace of God.",
    source: "Introduction",
  },
  {
    text: "The light has come. You are healed and you can heal.",
    source: "Workbook, Lesson 75",
  },
  {
    text: "I am not a body. I am free. For I am still as God created me.",
    source: "Workbook, Lesson 199",
  },
  {
    text: "Forgiveness is the key to happiness.",
    source: "Workbook, Lesson 121",
  },
  {
    text: "Let me remember that there is no death.",
    source: "Workbook, Lesson 167",
  },
  {
    text: "Love holds no grievances.",
    source: "Workbook, Lesson 68",
  },
  {
    text: "I could see peace instead of this.",
    source: "Workbook, Lesson 34",
  },
  {
    text: "Only my condemnation injures me. Only my own forgiveness sets me free.",
    source: "Workbook, Lesson 198",
  },
];

const startingPoints = [
  {
    lesson: "Lesson 1",
    title: "Nothing I see means anything.",
    why: "The Course begins by dismantling certainty. This lesson clears the slate so something new can be written.",
  },
  {
    lesson: "Lesson 5",
    title: "I am never upset for the reason I think.",
    why: "The first crack in the ego's logic. Every upset points inward, not outward — this lesson plants that seed.",
  },
  {
    lesson: "Lesson 27",
    title: "Above all else I want to see.",
    why: "A declaration of willingness. This is where the student moves from passive reading to active surrender.",
  },
  {
    lesson: "Lesson 79",
    title: "Let me recognize the problem so it can be solved.",
    why: "The Course redefines the problem itself: it is never what you think it is. Seeing this changes everything.",
  },
  {
    lesson: "Lesson 121",
    title: "Forgiveness is the key to happiness.",
    why: "The central teaching of the Course distilled to its essence. Forgiveness is not a kindness done for others — it is freedom chosen for yourself.",
  },
  {
    lesson: "Lesson 169",
    title: "By grace I live. By grace I am released.",
    why: "The point where effort gives way to grace. The student learns that the work is not climbing but letting go of the ground.",
  },
];

export default function ACIMPage() {
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
            A Course in Miracles
          </h1>
          <p className="text-gray-600 font-sans max-w-xl mx-auto">
            Nothing real can be threatened. Nothing unreal exists.
          </p>
        </div>
      </section>

      {/* What is the Course? */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[var(--color-cream)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-6">
            What is the Course?
          </h2>
          <div className="prose prose-gray font-sans leading-relaxed space-y-4 text-gray-700">
            <p>
              A Course in Miracles is a self-study spiritual curriculum
              published in 1976 and scribed by Helen Schucman. It consists of
              three parts: a Text that lays out the theoretical foundation, a
              Workbook of 365 daily lessons designed to shift perception, and
              a Manual for Teachers that addresses the practical questions
              that arise along the way.
            </p>
            <p>
              The Course teaches that the world we see is a projection of the
              ego — a dream of separation from God. The path home is
              forgiveness: not the pardoning of real offenses, but the
              recognition that the offense was never real. What is real cannot
              be threatened. What is unreal never happened.
            </p>
            <p>
              Dr. Hawkins calibrated the Workbook at 600, the Manual for
              Teachers at 555, and the Textbook at 550 — placing the
              Course&apos;s practice at the level of Peace and its study
              material among the highest-calibrating spiritual texts in the
              world.
            </p>
          </div>
        </div>
      </section>

      {/* Selected Quotes */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-8 sm:mb-10 text-center">
            Selected Quotes
          </h2>
          <div className="space-y-6">
            {quotes.map((q) => (
              <blockquote
                key={q.source}
                className="pl-5 border-l-3 border-[var(--color-gold)]"
              >
                <p className="font-serif italic text-lg text-gray-800 leading-relaxed mb-2">
                  &ldquo;{q.text}&rdquo;
                </p>
                <cite className="font-sans text-xs text-gray-400 not-italic">
                  — {q.source}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Where to Read */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[var(--color-cream)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-4">
            Where to Read It
          </h2>
          <p className="font-sans text-gray-600 mb-6 leading-relaxed">
            A Course in Miracles is freely available online. The Foundation for
            Inner Peace maintains the authorized edition.
          </p>
          <a
            href="https://acim.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-[var(--color-sky-4)] text-white font-sans text-sm font-medium hover:bg-[var(--color-gold)] transition-colors"
          >
            Read at acim.org &rarr;
          </a>
        </div>
      </section>

      {/* Starting Points */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-8 sm:mb-10 text-center">
            Starting Points for the Workbook
          </h2>
          <div className="space-y-6">
            {startingPoints.map((sp) => (
              <div
                key={sp.lesson}
                className="p-5 rounded-xl bg-[var(--color-cream)] border border-gray-100"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-sans text-xs font-semibold text-[var(--color-gold)] uppercase tracking-wider">
                    {sp.lesson}
                  </span>
                  <h3 className="font-serif italic text-base text-[var(--color-sky-4)]">
                    {sp.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {sp.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
