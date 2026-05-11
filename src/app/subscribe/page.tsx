import { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Subscribe — The Floating Podcast",
  description:
    "Get new episodes, writings, and occasional notes from the path delivered to your inbox.",
  openGraph: {
    title: "Subscribe — The Floating Podcast",
    description:
      "New episodes, writings, and occasional notes from the path. No noise, no spam.",
    siteName: "The Floating Podcast",
  },
};

export default function SubscribePage() {
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
          {/* Podcast icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center bg-[var(--color-cosmic)]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-10 h-10 sm:w-12 sm:h-12"
              >
                <line
                  x1="4"
                  y1="20"
                  x2="28"
                  y2="20"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="16"
                  cy="14"
                  r="7"
                  fill="none"
                  stroke="var(--color-sky-4)"
                  strokeWidth="2"
                />
                <ellipse
                  cx="16"
                  cy="24"
                  rx="5"
                  ry="2"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="0.75"
                  opacity="0.4"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[var(--color-sky-4)] mb-4">
            Stay on the Path
          </h1>
          <p className="text-gray-600 font-sans mb-8 sm:mb-10 leading-relaxed max-w-md mx-auto">
            New episodes, new writings, occasional notes from the path. No noise,
            no spam. Unsubscribe anytime.
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <NewsletterForm variant="page" />
          </div>

          <p className="mt-6 font-sans text-xs text-gray-400">
            Join fellow seekers. We respect your inbox as much as your attention.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
