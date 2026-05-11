import { Metadata } from "next";
import VesicaPiscis from "@/components/VesicaPiscis";
import HermeticPrinciples from "@/components/HermeticPrinciples";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Kybalion — The Seven Hermetic Principles — The Floating Podcast",
  description:
    "An interactive exploration of the seven Hermetic Principles from The Kybalion — Mentalism, Correspondence, Vibration, Polarity, Rhythm, Cause & Effect, and Gender.",
  openGraph: {
    title: "The Kybalion — The Seven Hermetic Principles",
    description:
      "The lips of wisdom are closed, except to the ears of Understanding. An interactive exploration of Hermetic philosophy.",
    siteName: "The Floating Podcast",
  },
};

export default function KybalionPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(to bottom, #1a1530, var(--color-cosmic-deep))",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white/90 mb-4">
            The Kybalion
          </h1>
          <p className="font-sans text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            &ldquo;The lips of wisdom are closed, except to the ears of
            Understanding.&rdquo;
          </p>
          <p className="font-sans text-xs text-white/30 mt-3">
            Attributed to Hermes Trismegistus — the thrice-great
          </p>
        </div>
      </section>

      {/* Vesica Piscis — Gender / Polarity */}
      <VesicaPiscis />

      {/* Transition */}
      <div
        className="h-24 sm:h-32"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-cosmic-deep), var(--color-cream))",
        }}
      />

      {/* The 7 Principles */}
      <FadeIn>
        <HermeticPrinciples />
      </FadeIn>

      {/* Closing quote */}
      <FadeIn>
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <blockquote className="font-serif italic text-xl sm:text-2xl text-[var(--color-sky-4)] leading-relaxed mb-4">
              &ldquo;The Universe is Mental — held in the Mind of THE ALL.&rdquo;
            </blockquote>
            <p className="font-sans text-sm text-gray-400">
              — The Kybalion, Chapter II
            </p>
          </div>
        </section>
      </FadeIn>

      <Footer />
    </>
  );
}
