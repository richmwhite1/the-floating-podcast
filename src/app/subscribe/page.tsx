import { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Subscribe — The Floating Podcast",
  description:
    "Get new episodes, writings, and occasional notes from the path delivered to your inbox.",
};

export default function SubscribePage() {
  return (
    <>
      <section
        className="pt-32 pb-16 px-6"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-sky-1), var(--color-cream))",
        }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif italic text-[var(--color-sky-4)] mb-4">
            Subscribe
          </h1>
          <p className="text-gray-600 font-sans mb-10 leading-relaxed">
            New episodes, new writings, occasional notes from the path. No noise,
            no spam. Unsubscribe anytime.
          </p>
          <NewsletterForm variant="page" />
        </div>
      </section>
      <Footer />
    </>
  );
}
