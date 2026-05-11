export default function Quote() {
  return (
    <section
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(135deg, var(--color-sky-4), var(--color-cosmic))",
      }}
    >
      <blockquote className="max-w-3xl mx-auto text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-white leading-relaxed mb-6">
          &ldquo;Nothing real can be threatened.
          <br />
          Nothing unreal exists.
          <br />
          Herein lies the peace of God.&rdquo;
        </p>
        <cite className="text-white/60 font-sans text-sm not-italic tracking-wide uppercase">
          A Course in Miracles — Introduction
        </cite>
      </blockquote>
    </section>
  );
}
