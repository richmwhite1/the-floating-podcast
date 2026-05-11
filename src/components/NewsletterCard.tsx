import NewsletterForm from "./NewsletterForm";

export default function NewsletterCard() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[var(--color-sky-4)] mb-3">
          Stay on the path
        </h2>
        <p className="font-sans text-sm text-gray-600 mb-6 sm:mb-8 leading-relaxed">
          New episodes, new writings, occasional notes from the path. No noise,
          no spam. Unsubscribe anytime.
        </p>
        <NewsletterForm variant="inline" />
      </div>
    </section>
  );
}
