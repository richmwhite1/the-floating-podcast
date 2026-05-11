"use client";

import { useState, useMemo } from "react";
import {
  CalibratedTeacher,
  CalibratedWriting,
  LevelBand,
} from "@/lib/calibrations";

function getBandForLevel(level: number, bands: LevelBand[]): LevelBand | undefined {
  return bands.find((b) => level >= b.min && level <= b.max);
}

function getAllTraditions(
  teachers: CalibratedTeacher[],
  writings: CalibratedWriting[]
): string[] {
  const set = new Set<string>();
  for (const t of teachers) if (t.tradition) set.add(t.tradition);
  for (const w of writings) if (w.tradition) set.add(w.tradition);
  return Array.from(set).sort();
}

export default function TeachersClient({
  teachers,
  writings,
  levelBands,
}: {
  teachers: CalibratedTeacher[];
  writings: CalibratedWriting[];
  levelBands: LevelBand[];
}) {
  const [tab, setTab] = useState<"teachers" | "writings">("teachers");
  const [tradition, setTradition] = useState("");
  const [sortDir, setSortDir] = useState<"high" | "low">("high");

  const traditions = useMemo(
    () => getAllTraditions(teachers, writings),
    [teachers, writings]
  );

  const data = tab === "teachers" ? teachers : writings;

  const filtered = useMemo(() => {
    let result = [...data];
    if (tradition) {
      result = result.filter((item) => {
        const t = "tradition" in item ? item.tradition : undefined;
        return t === tradition;
      });
    }
    result.sort((a, b) =>
      sortDir === "high" ? b.level - a.level : a.level - b.level
    );
    return result;
  }, [data, tradition, sortDir]);

  // Group by level band
  const grouped = useMemo(() => {
    const groups: { band: LevelBand; items: typeof filtered }[] = [];
    const bands = sortDir === "high" ? levelBands : [...levelBands].reverse();

    for (const band of bands) {
      const items = filtered.filter(
        (item) => item.level >= band.min && item.level <= band.max
      );
      if (items.length > 0) {
        groups.push({ band, items });
      }
    }
    return groups;
  }, [filtered, levelBands, sortDir]);

  return (
    <section className="py-12 px-6 bg-[var(--color-cream)] min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setTab("teachers")}
            className={`px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-colors ${
              tab === "teachers"
                ? "bg-[var(--color-sky-4)] text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-gold)]"
            }`}
          >
            Teachers
          </button>
          <button
            onClick={() => setTab("writings")}
            className={`px-6 py-2.5 rounded-full font-sans text-sm font-medium transition-colors ${
              tab === "writings"
                ? "bg-[var(--color-sky-4)] text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-gold)]"
            }`}
          >
            Writings
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <select
            value={tradition}
            onChange={(e) => setTradition(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 bg-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
          >
            <option value="">All traditions</option>
            {traditions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            value={sortDir}
            onChange={(e) => setSortDir(e.target.value as "high" | "low")}
            className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
          >
            <option value="high">Highest first</option>
            <option value="low">Lowest first</option>
          </select>
        </div>

        {/* Grouped list */}
        {grouped.length === 0 ? (
          <p className="text-center text-gray-400 font-sans py-12">
            No results for this filter.
          </p>
        ) : (
          <div className="space-y-10">
            {grouped.map(({ band, items }) => (
              <div key={band.label}>
                <h3 className="font-serif italic text-lg text-[var(--color-sky-4)] mb-1">
                  {band.label}
                </h3>
                <p className="font-sans text-xs text-gray-400 mb-4">
                  Level {band.min === band.max ? band.min : `${band.min}–${band.max}`}
                </p>
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  {items.map((item, i) => {
                    const name =
                      "name" in item
                        ? (item as CalibratedTeacher).name
                        : (item as CalibratedWriting).title;
                    return (
                      <div
                        key={`${name}-${item.level}`}
                        className={`flex items-center justify-between px-5 py-3 ${
                          i > 0 ? "border-t border-gray-50" : ""
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <span className="font-sans text-sm text-gray-900 font-medium">
                            {name}
                          </span>
                          {item.tradition && (
                            <span className="ml-2 font-sans text-xs text-gray-400">
                              {item.tradition}
                            </span>
                          )}
                          {item.note && (
                            <span className="ml-2 font-sans text-xs text-gray-300">
                              — {item.note}
                            </span>
                          )}
                        </div>
                        <span className="font-sans text-sm font-semibold text-[var(--color-gold)] tabular-nums ml-4">
                          {item.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
