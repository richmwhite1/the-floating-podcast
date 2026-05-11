import { Metadata } from "next";
import {
  teachers,
  writings,
  levelBands,
  CalibratedTeacher,
  CalibratedWriting,
} from "@/lib/calibrations";
import TeachersClient from "./TeachersClient";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Calibrated Teachers & Writings — The Floating Podcast",
  description:
    "Every teacher and spiritual writing Dr. David Hawkins calibrated above 200 on the Map of Consciousness.",
};

export default function TeachersPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-sky-1), var(--color-cream))",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-[var(--color-sky-4)] mb-4">
            Calibrated Teachers &amp; Writings
          </h1>
          <p className="text-gray-600 font-sans max-w-xl mx-auto mb-4 leading-relaxed">
            Dr. David Hawkins calibrated the level of consciousness of the
            world&apos;s great teachers and spiritual texts using a kinesiologic
            testing method he developed over decades. These calibrations offer a
            map — not a judgment — for seekers exploring the territory.
          </p>
          <p className="text-gray-400 font-sans text-xs max-w-lg mx-auto">
            Calibrations as published by Dr. Hawkins. The Map of Consciousness
            is his work; we share this list as a reference for seekers.
          </p>
        </div>
      </section>

      <TeachersClient
        teachers={teachers}
        writings={writings}
        levelBands={levelBands}
      />
      <Footer />
    </>
  );
}
