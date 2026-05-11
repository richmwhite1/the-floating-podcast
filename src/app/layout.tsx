import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://the-floating-podcast.vercel.app"),
  title: "The Floating Podcast — We are aspects of God, remembering.",
  description:
    "Richard White and Shannon Wilson on consciousness, ego, and the long path home — through every tradition that has ever pointed at the One.",
  openGraph: {
    title: "The Floating Podcast — We are aspects of God, remembering.",
    description:
      "Richard White and Shannon Wilson on consciousness, ego, and the long path home — through every tradition that has ever pointed at the One.",
    type: "website",
    siteName: "The Floating Podcast",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Floating Podcast — We are aspects of God, remembering.",
    description:
      "Consciousness, ego, and the long path home — through every tradition that has ever pointed at the One.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-sky-4)] focus:text-white focus:rounded-md focus:text-sm focus:font-sans"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PodcastSeries",
              name: "The Floating Podcast",
              description:
                "Richard White and Shannon Wilson on consciousness, ego, and the long path home — through every tradition that has ever pointed at the One.",
              url: "https://the-floating-podcast.vercel.app",
              author: [
                { "@type": "Person", name: "Richard White" },
                { "@type": "Person", name: "Shannon Wilson" },
              ],
              webFeed: "https://www.youtube.com/feeds/videos.xml?channel_id=UC_yMGFJxRMCSjxFOK4FMQRg",
            }),
          }}
        />
      </body>
    </html>
  );
}
