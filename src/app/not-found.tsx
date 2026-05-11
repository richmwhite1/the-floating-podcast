import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <section
        className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 min-h-[70vh] flex items-center"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-sky-1), var(--color-cream))",
        }}
      >
        <div className="max-w-xl mx-auto text-center w-full">
          <p className="font-sans text-sm font-semibold text-[var(--color-gold)] uppercase tracking-wider mb-4">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[var(--color-sky-4)] mb-4">
            Nothing here but stillness
          </h1>
          <p className="text-gray-600 font-sans mb-8 leading-relaxed max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist — or has floated
            somewhere else. Let&apos;s get you back on the path.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-full bg-[var(--color-sky-4)] text-white font-sans text-sm font-medium hover:bg-[var(--color-gold)] transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/episodes"
              className="inline-block px-6 py-3 rounded-full border border-[var(--color-sky-4)] text-[var(--color-sky-4)] font-sans text-sm font-medium hover:bg-[var(--color-sky-4)] hover:text-white transition-colors"
            >
              Browse Episodes
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
