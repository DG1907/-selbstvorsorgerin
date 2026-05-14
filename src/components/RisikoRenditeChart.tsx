"use client";

import { useState } from "react";

const INVESTMENTS = [
  {
    id: "bargeld", label: "Bargeld", shortLabel: "Bargeld", emoji: "💶",
    risk: 2, rendite: 1,
    risikoLabel: "Kein Risiko", renditeLabel: "0% p.a.",
    desc: "Absolut sicher – aber Inflation frisst die Kaufkraft auf. Nur für den kurzfristigen Bedarf sinnvoll.",
    color: "#94a3b8",
  },
  {
    id: "sparkonto", label: "Sparkonto / Tagesgeld", shortLabel: "Tagesgeld", emoji: "🏦",
    risk: 7, rendite: 8,
    risikoLabel: "Sehr gering", renditeLabel: "2–4% p.a.",
    desc: "Ideal als Notgroschen für 3 Monatsgehälter. Jederzeit verfügbar – für Vermögensaufbau reicht es aber nicht.",
    color: "#10b981",
  },
  {
    id: "gesetzlicheRV", label: "Gesetzliche Rentenversicherung", shortLabel: "Ges. RV", emoji: "🏛️",
    risk: 6, rendite: 35,
    risikoLabel: "Sehr gering", renditeLabel: "2–4% p.a. (Entgeltpunkte)",
    desc: "Pflichtversicherung für Angestellte. Basisabsicherung – allein reicht sie für die meisten Frauen nicht.",
    color: "#6366f1",
  },
  {
    id: "festgeld", label: "Festgeld", shortLabel: "Festgeld", emoji: "🔒",
    risk: 14, rendite: 17,
    risikoLabel: "Gering", renditeLabel: "2–4% p.a.",
    desc: "Planbare Zinsen für eine feste Laufzeit. Ruhig schlafen und trotzdem mehr als das Tagesgeld.",
    color: "#34d399",
  },
  {
    id: "riester", label: "Riester-Rente", shortLabel: "Riester", emoji: "👶",
    risk: 13, rendite: 50,
    risikoLabel: "Gering", renditeLabel: "3–5% p.a. + Förderung",
    desc: "Bis zu 300€ Kinderzulage pro Jahr – für Mütter oft unterschätzt rentabel. Staatliche Förderung boosted die Rendite.",
    color: "#818cf8",
  },
  {
    id: "ruerup", label: "Rürup-Rente", shortLabel: "Rürup", emoji: "🏺",
    risk: 22, rendite: 57,
    risikoLabel: "Gering–Mittel", renditeLabel: "3–5% p.a. + Steuervorteil",
    desc: "Besonders für Selbständige: Beiträge voll steuerlich absetzbar. Kein gesetzlicher Rentenschutz – Rürup ist der Ersatz.",
    color: "#a78bfa",
  },
  {
    id: "fondsRV", label: "Fondsgebundene Rentenversicherung", shortLabel: "Fonds-RV", emoji: "🛡️",
    risk: 33, rendite: 42,
    risikoLabel: "Mittel", renditeLabel: "4–6% p.a.",
    desc: "Private fondsgebundene Rentenversicherung: Fonds-Rendite mit Versicherungsschutz kombiniert. Flexibler als klassische Rentenversicherung.",
    color: "#60a5fa",
  },
  {
    id: "gold", label: "Gold", shortLabel: "Gold", emoji: "🥇",
    risk: 38, rendite: 27,
    risikoLabel: "Mittel", renditeLabel: "2–4% p.a. (langfristig)",
    desc: "Bewährter Inflationsschutz und Krisenwährung. Keine laufenden Erträge – dafür stabiler Wertspeicher über Generationen.",
    color: "#f59e0b",
  },
  {
    id: "silber", label: "Silber", shortLabel: "Silber", emoji: "🥈",
    risk: 47, rendite: 22,
    risikoLabel: "Mittel–Hoch", renditeLabel: "variabel",
    desc: "Günstiger Einstieg als Gold, aber deutlich volatiler. Guter Beimischung für Sachwerte im Portfolio.",
    color: "#94a3b8",
  },
  {
    id: "immobilien", label: "Immobilien", shortLabel: "Immobilien", emoji: "🏠",
    risk: 40, rendite: 64,
    risikoLabel: "Mittel", renditeLabel: "3–6% p.a. + Wertsteigerung",
    desc: "Vermietete Immobilien liefern passives Einkommen und Wertsteigerung. Hoher Kapitalbedarf – aber ein starker Baustein im Vermögensaufbau.",
    color: "#fb923c",
  },
  {
    id: "mischfonds", label: "Mischfonds", shortLabel: "Mischfonds", emoji: "⚖️",
    risk: 54, rendite: 54,
    risikoLabel: "Mittel", renditeLabel: "4–6% p.a.",
    desc: "Aktien + Anleihen im Mix. Weniger Schwankung als reine Aktienfonds – ein ausgewogener Einstieg.",
    color: "#fbbf24",
  },
  {
    id: "etf", label: "ETF-Sparplan", shortLabel: "ETF", emoji: "📈",
    risk: 65, rendite: 76,
    risikoLabel: "Mittel–Hoch", renditeLabel: "7–9% p.a. (historisch)",
    desc: "Breit gestreut, günstig und langfristig renditestark. Kurzfristig schwankend – langfristig der Sweet Spot für Vermögensaufbau.",
    color: "#ec4899",
  },
  {
    id: "aktien", label: "Einzelaktien", shortLabel: "Einzelaktien", emoji: "🎯",
    risk: 82, rendite: 78,
    risikoLabel: "Hoch", renditeLabel: "variabel",
    desc: "Hohe Renditechancen mit gezieltem Fokus. Braucht Zeit, Wissen und starke Nerven bei Schwankungen.",
    color: "#f97316",
  },
  {
    id: "krypto", label: "Krypto", shortLabel: "Krypto", emoji: "🎲",
    risk: 94, rendite: 88,
    risikoLabel: "Sehr hoch", renditeLabel: "extrem variabel",
    desc: "Extreme Chancen, extremes Risiko. Nur mit Geld investieren, das du theoretisch komplett verlieren könntest.",
    color: "#a855f7",
  },
];

const TOLERANCE = 20;

export default function RisikoRenditeChart() {
  const [selected, setSelected] = useState("etf");
  const [riskTolerance, setRiskTolerance] = useState(50);

  const W = 560, H = 400;
  const PAD = { top: 42, right: 24, bottom: 48, left: 52 };
  const cW = W - PAD.left - PAD.right;
  const cH = H - PAD.top - PAD.bottom;

  const px = (r: number) => PAD.left + (r / 100) * cW;
  const py = (r: number) => PAD.top + cH - (r / 100) * cH;

  const isHighlighted = (inv: (typeof INVESTMENTS)[0]) =>
    Math.abs(inv.risk - riskTolerance) <= TOLERANCE;

  const selectedInv = INVESTMENTS.find((i) => i.id === selected)!;

  const riskLabel =
    riskTolerance < 28
      ? "Sicherheitsliebhaberin 🛡️"
      : riskTolerance < 52
      ? "Ausgewogen unterwegs ⚖️"
      : riskTolerance < 74
      ? "Wachstumsorientiert 📈"
      : "Risikomutig 🚀";

  const bandLeft = px(Math.max(0, riskTolerance - TOLERANCE));
  const bandRight = px(Math.min(100, riskTolerance + TOLERANCE));

  return (
    <section className="bg-[#111111] border-y border-[#2a2a2a] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-white">
            Risiko & Rendite –{" "}
            <span className="gradient-text">finde deinen Sweet Spot</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Jede Anlage hat ihr eigenes Profil. Schiebe den Regler und entdecke,
            welche Anlageformen zu deiner Komfortzone passen – dann klick sie an.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-500 text-xs">Kein Risiko</span>
            <span className="text-pink-400 font-semibold text-sm">{riskLabel}</span>
            <span className="text-gray-500 text-xs">Volles Risiko</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={riskTolerance}
            onChange={(e) => setRiskTolerance(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-pink-500"
            style={{
              background: `linear-gradient(to right, #ec4899 ${riskTolerance}%, #2a2a2a ${riskTolerance}%)`,
            }}
          />
        </div>

        {/* SVG Chart */}
        <div className="bg-[#0a0a0a] rounded-2xl border border-[#2a2a2a] p-2 sm:p-4 overflow-hidden">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 420 }}>
            {/* Zone backgrounds */}
            <rect x={PAD.left} y={PAD.top} width={cW / 3} height={cH} fill="rgba(16,185,129,0.04)" />
            <rect x={PAD.left + cW / 3} y={PAD.top} width={cW / 3} height={cH} fill="rgba(245,158,11,0.04)" />
            <rect x={PAD.left + (2 * cW) / 3} y={PAD.top} width={cW / 3} height={cH} fill="rgba(239,68,68,0.05)" />

            {/* Zone label backgrounds */}
            <rect x={PAD.left + 2} y={PAD.top + 2} width={58} height={14} rx={4} fill="rgba(16,185,129,0.12)" />
            <rect x={PAD.left + cW / 3 + (cW / 3) / 2 - 38} y={PAD.top + 2} width={76} height={14} rx={4} fill="rgba(245,158,11,0.12)" />
            <rect x={PAD.left + 2 * cW / 3 + (cW / 3) / 2 - 44} y={PAD.top + 2} width={88} height={14} rx={4} fill="rgba(239,68,68,0.12)" />

            <text x={PAD.left + 31} y={PAD.top + 12} textAnchor="middle" fill="rgba(16,185,129,0.85)" fontSize={9} fontWeight="600">Sicher</text>
            <text x={PAD.left + cW / 3 + cW / 6} y={PAD.top + 12} textAnchor="middle" fill="rgba(245,158,11,0.85)" fontSize={9} fontWeight="600">Ausgewogen</text>
            <text x={PAD.left + (5 * cW) / 6} y={PAD.top + 12} textAnchor="middle" fill="rgba(239,68,68,0.85)" fontSize={9} fontWeight="600">Chancenreich</text>

            {/* Tolerance band */}
            <rect
              x={bandLeft} y={PAD.top}
              width={bandRight - bandLeft} height={cH}
              fill="rgba(236,72,153,0.07)" rx={6}
              style={{ transition: "all 0.2s ease" }}
            />
            <line
              x1={px(riskTolerance)} y1={PAD.top}
              x2={px(riskTolerance)} y2={PAD.top + cH}
              stroke="rgba(236,72,153,0.55)" strokeWidth={1.5} strokeDasharray="5 3"
              style={{ transition: "all 0.2s ease" }}
            />

            {/* Grid */}
            {[0, 25, 50, 75, 100].map((v) => (
              <g key={v}>
                <line x1={PAD.left} y1={py(v)} x2={PAD.left + cW} y2={py(v)} stroke="#1a1a1a" strokeWidth={1} />
                <text x={PAD.left - 7} y={py(v) + 3} textAnchor="end" fill="#3a3a3a" fontSize={9}>{v}%</text>
              </g>
            ))}
            {[0, 25, 50, 75, 100].map((v) => (
              <text key={v} x={px(v)} y={PAD.top + cH + 16} textAnchor="middle" fill="#3a3a3a" fontSize={9}>{v}%</text>
            ))}

            {/* Axis labels */}
            <text x={PAD.left + cW / 2} y={H - 5} textAnchor="middle" fill="#555" fontSize={11} fontWeight="500">Risiko →</text>
            <text x={13} y={PAD.top + cH / 2} textAnchor="middle" fill="#555" fontSize={11} fontWeight="500"
              transform={`rotate(-90, 13, ${PAD.top + cH / 2})`}>Rendite ↑</text>

            {/* Bubbles */}
            {INVESTMENTS.map((inv) => {
              const x = px(inv.risk);
              const y = py(inv.rendite);
              const hl = isHighlighted(inv);
              const sel = inv.id === selected;
              const r = sel ? 22 : 17;
              const labelW = inv.shortLabel.length * 6 + 12;

              return (
                <g
                  key={inv.id}
                  onClick={() => setSelected(inv.id)}
                  role="button"
                  aria-label={inv.label}
                  style={{ cursor: "pointer" }}
                >
                  {/* Selection ring */}
                  {sel && (
                    <circle cx={x} cy={y} r={r + 5} fill="none"
                      stroke={inv.color} strokeWidth={1} strokeOpacity={0.3} strokeDasharray="3 2" />
                  )}
                  <circle
                    cx={x} cy={y} r={r}
                    fill={inv.color}
                    fillOpacity={hl ? 0.22 : 0.07}
                    stroke={inv.color}
                    strokeWidth={sel ? 2.5 : hl ? 2 : 0.8}
                    strokeOpacity={hl ? 1 : 0.3}
                    style={{ transition: "all 0.25s ease" }}
                  />
                  <text x={x} y={y + 5} textAnchor="middle"
                    fontSize={sel ? 14 : 12}
                    opacity={hl ? 1 : 0.3}
                    style={{ transition: "opacity 0.25s ease", userSelect: "none" }}>
                    {inv.emoji}
                  </text>
                  {/* Label with background */}
                  <rect
                    x={x - labelW / 2} y={y - r - 20}
                    width={labelW} height={14} rx={4}
                    fill="#0a0a0a" fillOpacity={hl ? 0.95 : 0.7}
                    style={{ transition: "all 0.25s ease" }}
                  />
                  <text
                    x={x} y={y - r - 9}
                    textAnchor="middle"
                    fill={sel ? inv.color : hl ? inv.color : "#444"}
                    fontSize={sel ? 9.5 : 8.5}
                    fontWeight={sel ? "700" : "500"}
                    style={{ transition: "all 0.25s ease", userSelect: "none" }}
                  >
                    {inv.shortLabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Detail card */}
        <div
          className="mt-4 rounded-2xl border p-5 flex gap-4 items-start"
          style={{
            borderColor: selectedInv.color + "55",
            background: selectedInv.color + "0d",
            transition: "border-color 0.3s ease, background 0.3s ease",
          }}
        >
          <div className="text-3xl shrink-0 mt-0.5">{selectedInv.emoji}</div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-bold text-white text-base">{selectedInv.label}</h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                style={{ background: selectedInv.color + "25", color: selectedInv.color }}>
                Risiko: {selectedInv.risikoLabel}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#1a1a1a] text-gray-400">
                Rendite: {selectedInv.renditeLabel}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{selectedInv.desc}</p>
          </div>
        </div>

        {/* Quick-select */}
        <div className="mt-4 flex flex-wrap gap-2">
          {INVESTMENTS.map((inv) => (
            <button
              key={inv.id}
              onClick={() => setSelected(inv.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                inv.id === selected
                  ? "border-pink-500 text-white bg-pink-500/10"
                  : "border-[#2a2a2a] text-gray-500 hover:border-[#3a3a3a] hover:text-gray-300"
              }`}
            >
              <span>{inv.emoji}</span>
              <span>{inv.shortLabel}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
