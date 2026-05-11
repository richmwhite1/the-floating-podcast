"use client";

import { useState } from "react";

const hosts = [
  {
    name: "Richard White",
    role: "Host & Producer",
    bio: "Richard hosts The Floating Podcast and produces solo teachings on YouTube — short lessons drawn from Hawkins, A Course in Miracles, and the mystics, distilled for everyday practice.",
    primary: true,
    image: "/richard.jpg",
  },
  {
    name: "Shannon Wilson",
    role: "Co-Host & Medium",
    bio: "Shannon brings a medium's perspective to the conversation, joining Richard for the long-form dialogues that anchor the podcast.",
    primary: false,
    image: "/shannon.jpg",
  },
];

function Avatar({
  name,
  image,
  primary,
}: {
  name: string;
  image: string;
  primary: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`w-20 h-20 rounded-full mb-6 flex items-center justify-center ${
          primary ? "bg-[var(--color-gold-light)]" : "bg-gray-100"
        }`}
      >
        <span className="text-2xl font-serif italic text-[var(--color-sky-4)]">
          {name[0]}
        </span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={name}
      className="w-20 h-20 rounded-full mb-6 object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export default function Hosts() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[var(--color-cream)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-center mb-8 sm:mb-12 text-[var(--color-sky-4)]">
          Your Hosts
        </h2>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          {hosts.map((host) => (
            <div
              key={host.name}
              className={`rounded-2xl p-6 sm:p-8 ${
                host.primary
                  ? "bg-white shadow-md border-2 border-[var(--color-gold-light)]"
                  : "bg-white shadow-sm border border-gray-100"
              }`}
            >
              <Avatar
                name={host.name}
                image={host.image}
                primary={host.primary}
              />
              <h3 className="text-2xl font-serif italic text-[var(--color-sky-4)] mb-1">
                {host.name}
              </h3>
              <p className="text-sm font-sans text-[var(--color-gold)] font-medium mb-4">
                {host.role}
              </p>
              <p className="text-gray-600 font-sans leading-relaxed">
                {host.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
