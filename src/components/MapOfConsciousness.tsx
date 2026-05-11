"use client";

import { useState } from "react";

interface Tier {
  level: number;
  label: string;
  width: number;
  color: string;
  isTop?: boolean;
  isThreshold?: boolean;
  emotion: string;
  description: string;
  viewOfGod: string;
  viewOfSelf: string;
  shiftUpward: string;
}

const tiers: Tier[] = [
  {
    level: 1000,
    label: "Enlightenment",
    width: 100,
    color: "#ffffff",
    isTop: true,
    emotion: "Ineffable · Is",
    description:
      "The peak available to embodied human consciousness. Christ, Buddha, Krishna. The point at which language fails because the experiencer and the experience are one.",
    viewOfGod: "I AM — no separation remains.",
    viewOfSelf: "There is no separate self to perceive.",
    shiftUpward: "There is nowhere further to go. This is the summit.",
  },
  {
    level: 700,
    label: "Enlightenment (floor)",
    width: 94,
    color: "#aa64c8",
    emotion: "Bliss · Illumination",
    description:
      "The doorway. The realization of the Self as all that is. The personal self dissolves into the infinite.",
    viewOfGod: "I AM.",
    viewOfSelf: "None separate.",
    shiftUpward:
      "The deepening from the doorway toward the peak — a journey measured not in effort but in surrender.",
  },
  {
    level: 600,
    label: "Peace",
    width: 87,
    color: "#6c62c8",
    emotion: "Perfection · Revelation",
    description:
      "The transcendence of the personal. Bliss, perfection, the end of suffering. Experience becomes luminous and still.",
    viewOfGod: "As everything.",
    viewOfSelf: "Not separate.",
    shiftUpward:
      "The rare leap into pure being — not achieved but allowed.",
  },
  {
    level: 540,
    label: "Joy",
    width: 80,
    color: "#4294dc",
    emotion: "Serenity · Transfiguration",
    description:
      "Sainthood. Compassion as constant. Beauty perceived everywhere. The inner world radiates outward without effort.",
    viewOfGod: "As the Self.",
    viewOfSelf: "As Source.",
    shiftUpward: "The deepening of nondual perception.",
  },
  {
    level: 500,
    label: "Love",
    width: 73,
    color: "#3ab2e1",
    emotion: "Reverence · Revelation",
    description:
      "Unconditional. Not the emotion but the orientation. The default state of the awakened heart that sees with wholeness.",
    viewOfGod: "Real, present, loving.",
    viewOfSelf: "An expression of love.",
    shiftUpward: "The dissolution of the separate self.",
  },
  {
    level: 400,
    label: "Reason",
    width: 66,
    color: "#3abca0",
    emotion: "Understanding · Abstraction",
    description:
      "The level of science, philosophy, and great thinkers. Brilliant but bounded — the intellect can map reality but cannot enter it.",
    viewOfGod: "A concept, a hypothesis, sometimes denied.",
    viewOfSelf: "A mind.",
    shiftUpward:
      "The surrender of the intellect to something larger than thought.",
  },
  {
    level: 350,
    label: "Acceptance",
    width: 59,
    color: "#5abe64",
    emotion: "Forgiveness · Transcendence",
    description:
      "The understanding that you are the source of your experience, not its victim. Forgiveness becomes possible because there's no one left to blame.",
    viewOfGod: "Within and without.",
    viewOfSelf: "Responsible, whole.",
    shiftUpward: "Reason — the disciplined mind.",
  },
  {
    level: 310,
    label: "Willingness",
    width: 52,
    color: "#74c05a",
    emotion: "Optimism · Intention",
    description:
      "Saying yes to life. Optimism, service, the desire to do good work. Energy flows freely toward contribution.",
    viewOfGod: "A partner.",
    viewOfSelf: "Useful.",
    shiftUpward:
      "The surrender of personal agenda to a larger one.",
  },
  {
    level: 250,
    label: "Neutrality",
    width: 50,
    color: "#8cc356",
    emotion: "Trust · Release",
    description:
      "Detachment from outcomes. Things are okay whether they go your way or not. Flexibility, ease, an inner steadiness.",
    viewOfGod: "Trustworthy.",
    viewOfSelf: "At peace with imperfection.",
    shiftUpward: "Engagement — neutrality plus purpose.",
  },
  {
    level: 200,
    label: "Courage",
    width: 50,
    color: "#a2c84e",
    isThreshold: true,
    emotion: "Force becomes power",
    description:
      "THE THRESHOLD. The first level of true power. Willingness to face truth, take responsibility, act in alignment. Below this line is force. Above it is power. This is the most transformative step a human can take.",
    viewOfGod: "Real, worth seeking.",
    viewOfSelf: "Capable, free.",
    shiftUpward:
      "Letting go of the need to control outcomes — the step into trust.",
  },
  {
    level: 175,
    label: "Pride",
    width: 44,
    color: "#f5d746",
    emotion: "Scorn · Inflation",
    description:
      "The last stop before integrity. Identity built on accomplishment, status, or being right. Vulnerable to collapse when the external structure shifts.",
    viewOfGod: "Optional, or oneself.",
    viewOfSelf: "Superior.",
    shiftUpward:
      "The humility pride was protecting against.",
  },
  {
    level: 150,
    label: "Anger",
    width: 44,
    color: "#f8be3c",
    emotion: "Hate · Aggression",
    description:
      "Force directed outward. More empowered than fear, but destructive. The energy can move mountains or burn them down.",
    viewOfGod: "Unjust.",
    viewOfSelf: "Wronged.",
    shiftUpward:
      "Channeling anger's energy into constructive action rather than attack.",
  },
  {
    level: 125,
    label: "Desire",
    width: 44,
    color: "#f8a037",
    emotion: "Craving · Enslavement",
    description:
      "Craving. The energy that drives addiction, ambition, and consumerism. Always reaching, never arriving.",
    viewOfGod: "Withholding.",
    viewOfSelf: "Incomplete.",
    shiftUpward:
      "Satiety — realizing the next thing will not fix you.",
  },
  {
    level: 100,
    label: "Fear",
    width: 38,
    color: "#f58737",
    emotion: "Anxiety · Withdrawal",
    description:
      "The world as threat. Anxiety, paranoia, defensiveness. Energy contracts inward, scanning for danger.",
    viewOfGod: "Punishing, judging.",
    viewOfSelf: "Endangered.",
    shiftUpward:
      "The recognition that most feared events never occur.",
  },
  {
    level: 75,
    label: "Grief",
    width: 38,
    color: "#eb6c3a",
    emotion: "Regret · Despondency",
    description:
      "The energy of loss and regret. More alive than apathy because sadness still moves. There is still something left to care about.",
    viewOfGod: "Distant.",
    viewOfSelf: "Bereft.",
    shiftUpward:
      "The willingness to feel grief fully rather than collapse beneath it.",
  },
  {
    level: 50,
    label: "Apathy",
    width: 38,
    color: "#dc5244",
    emotion: "Despair · Abdication",
    description:
      "The certainty that nothing can be done. Hopelessness, poverty, the absence of energy to even try.",
    viewOfGod: "Indifferent.",
    viewOfSelf: "Helpless.",
    shiftUpward:
      "A single small action taken without expectation.",
  },
  {
    level: 30,
    label: "Guilt",
    width: 34,
    color: "#c83c44",
    emotion: "Blame · Destruction",
    description:
      "The conviction that one is bad and deserves punishment. Often turned outward as the urge to punish others.",
    viewOfGod: "Vengeful.",
    viewOfSelf: "Condemned.",
    shiftUpward:
      "The recognition that guilt is a feeling, not a fact.",
  },
  {
    level: 20,
    label: "Shame",
    width: 34,
    color: "#ac3040",
    emotion: "Humiliation · Elimination",
    description:
      "The lowest survivable level. Self-loathing so complete that the person wishes to disappear.",
    viewOfGod: "Rejecting, punishing.",
    viewOfSelf: "Worthless, defective.",
    shiftUpward:
      "The willingness to be seen without dying of it.",
  },
];

function darken(hex: string, amount: number): string {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `rgb(${r},${g},${b})`;
}

function TierModal({
  tier,
  onClose,
}: {
  tier: Tier;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-[#141020] border border-white/10 rounded-2xl max-w-lg w-full p-5 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{ backgroundColor: tier.color }}
              />
              <span className="text-white/60 font-sans text-sm font-medium">
                Level {tier.level}
              </span>
            </div>
            <h3 className="text-2xl font-serif italic text-white">
              {tier.label}
            </h3>
            <p className="text-white/40 font-serif italic text-sm mt-1">
              {tier.emotion}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors text-2xl leading-none p-1"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Description */}
        <p className="text-white/80 font-sans text-sm leading-relaxed mb-6">
          {tier.description}
        </p>

        {/* Attributes */}
        <div className="space-y-4 border-t border-white/10 pt-5">
          <div>
            <span className="text-white/40 font-sans text-xs uppercase tracking-wider">
              View of God / Source
            </span>
            <p className="text-white/70 font-sans text-sm mt-1">
              {tier.viewOfGod}
            </p>
          </div>
          <div>
            <span className="text-white/40 font-sans text-xs uppercase tracking-wider">
              View of Self
            </span>
            <p className="text-white/70 font-sans text-sm mt-1">
              {tier.viewOfSelf}
            </p>
          </div>
          <div>
            <span className="text-white/40 font-sans text-xs uppercase tracking-wider">
              The Path Upward
            </span>
            <p className="text-white/70 font-sans text-sm mt-1">
              {tier.shiftUpward}
            </p>
          </div>
        </div>

        {tier.isThreshold && (
          <div className="mt-6 p-4 rounded-lg bg-[#a2c84e]/10 border border-[#a2c84e]/30">
            <p className="text-[#a2c84e] font-sans text-xs font-medium uppercase tracking-wider mb-1">
              The Threshold
            </p>
            <p className="text-white/60 font-sans text-xs leading-relaxed">
              Below 200: force, contraction, ego. Above 200: power,
              expansion, truth. This is where consciousness begins to serve
              life.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MapOfConsciousness() {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

  return (
    <section
      id="the-map"
      className="py-16 sm:py-24 px-3 sm:px-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #1a1530 0%, #0a0a1a 100%)",
      }}
    >
      {/* Starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${1 + ((i * 7 + 3) % 3)}px`,
              height: `${1 + ((i * 7 + 3) % 3)}px`,
              top: `${((i * 37 + 13) % 100)}%`,
              left: `${((i * 53 + 7) % 100)}%`,
              opacity: 0.2 + ((i * 13) % 4) * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-center mb-2 text-white">
          The Map of Consciousness
        </h2>
        <p className="text-center text-white/60 font-sans mb-8 sm:mb-12 text-sm">
          David R. Hawkins, M.D., Ph.D.
        </p>

        <div className="flex flex-col gap-1 items-center">
          {tiers.map((tier) => {
            const isLight =
              tier.isTop ||
              ["#f5d746", "#f8be3c", "#8cc356", "#a2c84e"].includes(
                tier.color
              );
            const textColor = isLight ? "text-gray-900" : "text-white";

            return (
              <button
                key={tier.level}
                onClick={() => setSelectedTier(tier)}
                className="flex items-center justify-between relative group transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  width: `${Math.max(tier.width, 55)}%`,
                  minHeight: tier.isThreshold ? "44px" : "34px",
                  background: tier.isTop
                    ? `linear-gradient(90deg, #e8e0f0, #ffffff, #e8e0f0)`
                    : `linear-gradient(90deg, ${darken(tier.color, 25)}, ${tier.color}, ${darken(tier.color, 25)})`,
                  borderRadius: "6px",
                  borderTop: tier.isThreshold
                    ? "2px solid rgba(255,255,255,0.9)"
                    : undefined,
                  borderBottom: tier.isThreshold
                    ? "2px solid rgba(255,255,255,0.9)"
                    : undefined,
                  boxShadow: tier.isThreshold
                    ? "0 0 20px rgba(162,200,78,0.4)"
                    : undefined,
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                aria-label={`${tier.label}, level ${tier.level} — ${tier.emotion}. Click for details.`}
              >
                <span
                  className={`text-xs md:text-sm font-sans font-semibold ${textColor} tracking-wide`}
                >
                  {tier.level} — {tier.label}
                </span>
                <span
                  className={`font-serif italic text-[11px] md:text-xs ${isLight ? "text-gray-900/50" : "text-white/50"} hidden sm:inline`}
                >
                  {tier.emotion}
                </span>
              </button>
            );
          })}
        </div>

        {/* Color legend — visible on mobile where emotion text is hidden */}
        <div className="flex items-center justify-center gap-1.5 mt-8 sm:hidden">
          <span className="w-2 h-2 rounded-full bg-[#ac3040]" />
          <span className="text-white/30 font-sans text-[10px]">Force</span>
          <span className="mx-1 text-white/20">|</span>
          <span className="w-2 h-2 rounded-full bg-[#a2c84e]" />
          <span className="text-white/30 font-sans text-[10px]">Threshold</span>
          <span className="mx-1 text-white/20">|</span>
          <span className="w-2 h-2 rounded-full bg-[#6c62c8]" />
          <span className="text-white/30 font-sans text-[10px]">Power</span>
        </div>

        <p className="text-center text-white/40 font-sans mt-4 sm:mt-8 text-xs max-w-md mx-auto">
          Below 200: force, contraction, ego. Above 200: power, expansion,
          truth. The threshold at Courage is where consciousness begins to
          serve life.
        </p>
        <p className="text-center text-white/30 font-sans mt-2 text-xs">
          Tap any level to explore it
        </p>
      </div>

      {selectedTier && (
        <TierModal
          tier={selectedTier}
          onClose={() => setSelectedTier(null)}
        />
      )}
    </section>
  );
}
