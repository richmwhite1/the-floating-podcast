"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Episodes", href: "/episodes" },
  { label: "The Map", href: "/hawkins" },
  { label: "Teachers", href: "/teachers" },
  { label: "About", href: "/about" },
];

const listenLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TheFloatingPodcast",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/10uq7r8aOxNUSxnRKb05G2",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    label: "Apple",
    href: "https://podcasts.apple.com/us/podcast/the-floating-podcast/id1816047702",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.104 1.18.687 1.258-.465.586-1.834-1.072-3.47-1.539-5.59-1.539-2.122 0-3.758.467-5.592 1.54-1.152.671-1.569.593-.465-.587 1.608-1.685 3.72-2.587 6.056-2.587zM12 6.529c3.245 0 6.042 1.906 6.042 4.127 0 1.27-.8 2.15-1.944 2.15-.962 0-1.656-.578-1.834-1.504-.217-1.13-.69-1.676-1.818-1.676h-.892c-1.128 0-1.6.546-1.818 1.676-.178.926-.872 1.504-1.834 1.504-1.144 0-1.944-.88-1.944-2.15 0-2.22 2.797-4.127 6.042-4.127zm-3.282 8.063c.603 0 1.09.488 1.09 1.09v3.236c0 .603-.487 1.09-1.09 1.09-.602 0-1.09-.487-1.09-1.09v-3.235c0-.603.488-1.09 1.09-1.09zm6.564 0c.603 0 1.09.488 1.09 1.09v3.236c0 .603-.487 1.09-1.09 1.09-.602 0-1.09-.487-1.09-1.09v-3.235c0-.603.488-1.09 1.09-1.09z" />
      </svg>
    ),
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-cream)]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`font-serif italic text-lg transition-colors ${
              scrolled ? "text-[var(--color-sky-4)]" : "text-white"
            }`}
          >
            The Floating Podcast
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-[var(--color-sky-4)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Listen icons */}
            <div className="flex items-center gap-2 ml-2 pl-4 border-l border-current/20">
              {listenLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Listen on ${link.label}`}
                  className={`p-1.5 rounded-full transition-colors ${
                    scrolled
                      ? "text-gray-400 hover:text-[var(--color-gold)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-gray-600" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-[var(--color-cream)] shadow-xl p-8 flex flex-col">
            <button
              onClick={() => setMobileOpen(false)}
              className="self-end mb-8 text-gray-400 hover:text-gray-600"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-base text-gray-700 hover:text-[var(--color-sky-4)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="font-sans text-xs text-gray-400 uppercase tracking-wider mb-4">
                Listen
              </p>
              <div className="flex gap-3">
                {listenLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Listen on ${link.label}`}
                    className="p-2 rounded-full text-gray-400 hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
