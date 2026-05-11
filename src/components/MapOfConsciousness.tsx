const tiers = [
  { level: 1000, label: "Enlightenment", width: 100, color: "#ffffff", isTop: true },
  { level: 700, label: "Enlightenment", width: 94, color: "#aa64c8" },
  { level: 600, label: "Peace", width: 87, color: "#6c62c8" },
  { level: 540, label: "Joy", width: 80, color: "#4294dc" },
  { level: 500, label: "Love", width: 73, color: "#3ab2e1" },
  { level: 400, label: "Reason", width: 66, color: "#3abca0" },
  { level: 350, label: "Acceptance", width: 59, color: "#5abe64" },
  { level: 310, label: "Willingness", width: 52, color: "#74c05a" },
  { level: 250, label: "Neutrality", width: 50, color: "#8cc356" },
  { level: 200, label: "Courage", width: 50, color: "#a2c84e", isThreshold: true },
  { level: 175, label: "Pride", width: 44, color: "#f5d746" },
  { level: 150, label: "Anger", width: 44, color: "#f8be3c" },
  { level: 125, label: "Desire", width: 44, color: "#f8a037" },
  { level: 100, label: "Fear", width: 38, color: "#f58737" },
  { level: 75, label: "Grief", width: 38, color: "#eb6c3a" },
  { level: 50, label: "Apathy", width: 38, color: "#dc5244" },
  { level: 30, label: "Guilt", width: 34, color: "#c83c44" },
  { level: 20, label: "Shame", width: 34, color: "#ac3040" },
];

function darken(hex: string, amount: number): string {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount);
  return `rgb(${r},${g},${b})`;
}

export default function MapOfConsciousness() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #1a1530 0%, #0a0a1a 100%)",
      }}
    >
      {/* Starfield */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif italic text-center mb-2 text-white">
          The Map of Consciousness
        </h2>
        <p className="text-center text-white/60 font-sans mb-12 text-sm">
          David R. Hawkins, M.D., Ph.D.
        </p>

        <div className="flex flex-col gap-1 items-center">
          {tiers.map((tier) => {
            const isLight =
              tier.isTop || ["#f5d746", "#f8be3c", "#8cc356", "#a2c84e"].includes(tier.color);
            const textColor = isLight ? "text-gray-900" : "text-white";

            return (
              <div
                key={tier.level}
                className="flex items-center justify-center relative"
                style={{
                  width: `${tier.width}%`,
                  minHeight: tier.isThreshold ? "48px" : "36px",
                  background: tier.isTop
                    ? `linear-gradient(90deg, #e8e0f0, #ffffff, #e8e0f0)`
                    : `linear-gradient(90deg, ${darken(tier.color, 25)}, ${tier.color}, ${darken(tier.color, 25)})`,
                  borderRadius: "6px",
                  borderTop: tier.isThreshold ? "2px solid white" : undefined,
                  borderBottom: tier.isThreshold ? "2px solid white" : undefined,
                  boxShadow: tier.isThreshold
                    ? "0 0 20px rgba(162,200,78,0.4)"
                    : undefined,
                }}
              >
                <span
                  className={`text-xs md:text-sm font-sans font-semibold ${textColor} tracking-wide`}
                >
                  {tier.level} — {tier.label}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-center text-white/40 font-sans mt-8 text-xs max-w-md mx-auto">
          Below 200: force, contraction, ego. Above 200: power, expansion,
          truth. The threshold at Courage is where consciousness begins to
          serve life.
        </p>
      </div>
    </section>
  );
}
