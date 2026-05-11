"use client";

import { useState } from "react";

export default function NewsletterForm({
  variant = "inline",
}: {
  variant?: "inline" | "page";
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage(data.error);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={`text-center ${variant === "page" ? "py-8" : "py-4"}`}>
        <p className="font-serif italic text-lg text-[var(--color-sky-4)]">
          {message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className={`flex flex-col ${variant === "page" ? "sm:flex-row" : ""} gap-2 sm:gap-3`}>
        <input
          type="text"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)]"
        />
        <input
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 sm:py-2.5 rounded-lg bg-[var(--color-sky-4)] text-white font-sans text-sm font-medium hover:bg-[var(--color-gold)] active:bg-[var(--color-gold)] transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="font-sans text-xs text-red-500">{message}</p>
      )}
    </form>
  );
}
