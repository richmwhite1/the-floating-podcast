const teachers = [
  {
    title: "Ask Dr. Hawkins",
    subtitle: "Powered by NotebookLM",
    description:
      "Explore the teachings of David R. Hawkins — calibrated levels, letting go, and the nature of consciousness.",
    href: "https://notebooklm.google.com/notebook/8373a58a-14d8-4c9c-8ca7-8367dc7c90ff",
  },
  {
    title: "Ask Sean's AI",
    subtitle: "Spirits in Spacesuits",
    description:
      "Converse with an AI trained on Fr. Sean O'Laoire's writings — mysticism, science, and the soul's journey.",
    href: "https://www.spiritsinspacesuits.com/#ask",
  },
];

export default function AskTeachers() {
  return (
    <section className="py-24 px-6 bg-[var(--color-cream)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-4 text-[var(--color-sky-4)]">
          Ask the Teachers
        </h2>
        <p className="text-center text-gray-600 font-sans mb-12 max-w-xl mx-auto">
          Go deeper with AI-powered conversations grounded in the source
          material.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {teachers.map((t) => (
            <a
              key={t.title}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[var(--color-gold-light)] transition-all"
            >
              <h3 className="text-2xl font-serif italic text-[var(--color-sky-4)] mb-1 group-hover:text-[var(--color-gold)]  transition-colors">
                {t.title}
              </h3>
              <p className="text-sm font-sans text-[var(--color-gold)] font-medium mb-4">
                {t.subtitle}
              </p>
              <p className="text-gray-600 font-sans leading-relaxed">
                {t.description}
              </p>
              <span className="inline-block mt-4 text-sm font-sans font-medium text-[var(--color-gold)] group-hover:translate-x-1 transition-transform">
                Open &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
