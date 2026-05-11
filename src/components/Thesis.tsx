const pillars = [
  {
    title: "The Map",
    subtitle: "David Hawkins",
    description:
      "The Map of Consciousness — a logarithmic scale of human awareness from Shame to Enlightenment. The compass for the journey.",
  },
  {
    title: "The Mystic",
    subtitle: "Fr. Sean O'Laoire",
    description:
      "A Catholic priest, scientist, and mystic who bridges every tradition. Sean's models illuminate the architecture of the soul.",
  },
  {
    title: "The Course",
    subtitle: "A Course in Miracles",
    description:
      "Nothing real can be threatened. Nothing unreal exists. The Course is the practice — forgiveness as the path home.",
  },
];

export default function Thesis() {
  return (
    <section className="py-24 px-6 bg-[var(--color-cream)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-4 text-[var(--color-sky-4)]">
          Three Pillars
        </h2>
        <p className="text-center text-gray-600 font-sans mb-16 max-w-2xl mx-auto">
          Transcending the levels of consciousness — remembering we are aspects
          of God, joint heirs with Christ.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-serif italic text-[var(--color-sky-4)] mb-1">
                {pillar.title}
              </h3>
              <p className="text-sm font-sans text-[var(--color-gold)] font-medium mb-4">
                {pillar.subtitle}
              </p>
              <p className="text-gray-600 font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
