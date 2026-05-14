"use client";

const PROFILES = [
  {
    name: "Lisa",
    age: 25,
    typ: "Angestellte",
    label: "Die Berufseinsteigerin",
    foto: "/images/lisa.jpg",
    gradient: ["#ec4899", "#a855f7"],
    einkommenBrutto: "2.500",
    einkommenNetto: "~1.720",
    sparrate: "150",
    yearsUntil67: 42,
    sparbausteine: [
      { produkt: "ETF-Sparplan", betrag: 100, emoji: "📈", farbe: "#ec4899" },
      { produkt: "Riester-Rente", betrag: 30, emoji: "👶", farbe: "#818cf8" },
      { produkt: "Tagesgeld (Notgroschen)", betrag: 20, emoji: "🏦", farbe: "#10b981" },
    ],
    gesetzlicheRente: 1050,
    sparVermoegenMit67: [
      { quelle: "ETF-Sparplan (7% p.a.)", kapital: "~305.000 €", monatlich: "~1.015 €" },
      { quelle: "Riester + Zulagen", kapital: "~58.000 €", monatlich: "~195 €" },
    ],
    gesamtMonatlich: "~2.260",
    hinweis: "Frühzeitig anfangen ist ihr größter Hebel – Zinseszins über 42 Jahre ist mächtiger als jede Sparrate.",
    gesetzlicheRenteHat: true,
  },
  {
    name: "Alison",
    age: 42,
    typ: "Angestellte",
    label: "Die Erfahrene",
    foto: "/images/alison.jpg",
    gradient: ["#f97316", "#ec4899"],
    einkommenBrutto: "4.500",
    einkommenNetto: "~2.820",
    sparrate: "300",
    yearsUntil67: 25,
    sparbausteine: [
      { produkt: "ETF-Sparplan", betrag: 200, emoji: "📈", farbe: "#ec4899" },
      { produkt: "Fondsgebundene Rentenversicherung", betrag: 100, emoji: "🛡️", farbe: "#60a5fa" },
    ],
    gesetzlicheRente: 1740,
    sparVermoegenMit67: [
      { quelle: "ETF-Sparplan (7% p.a.)", kapital: "~162.000 €", monatlich: "~540 €" },
      { quelle: "Fonds-Rentenversicherung (5% p.a.)", kapital: "~60.000 €", monatlich: "~200 €" },
    ],
    gesamtMonatlich: "~2.480",
    hinweis: "25 Jahre sind mehr als genug, um ernsthaftes Vermögen aufzubauen – vor allem kombiniert mit guter Gesetzlicher Rente.",
    gesetzlicheRenteHat: true,
  },
  {
    name: "Sandra",
    age: 42,
    typ: "Selbständige",
    label: "Die Unternehmerin",
    foto: "/images/sandra.jpg",
    gradient: ["#6366f1", "#a855f7"],
    einkommenBrutto: "5.000",
    einkommenNetto: "~3.200",
    sparrate: "500",
    yearsUntil67: 25,
    sparbausteine: [
      { produkt: "Rürup-Rente (steuerl. absetzbar)", betrag: 250, emoji: "🏺", farbe: "#a78bfa" },
      { produkt: "ETF-Sparplan", betrag: 150, emoji: "📈", farbe: "#ec4899" },
      { produkt: "Gold / Sachwerte", betrag: 100, emoji: "🥇", farbe: "#f59e0b" },
    ],
    gesetzlicheRente: 0,
    sparVermoegenMit67: [
      { quelle: "Rürup-Rente (4% p.a.)", kapital: "~128.000 €", monatlich: "~428 €" },
      { quelle: "ETF-Sparplan (7% p.a.)", kapital: "~121.000 €", monatlich: "~403 €" },
      { quelle: "Gold (Wertspeicher)", kapital: "~40.000 €", monatlich: "— (Reserve)" },
    ],
    gesamtMonatlich: "~831",
    hinweis: "⚠️ Ohne gesetzliche Rente braucht Sandra mindestens 1.200–1.500 €/Monat Sparrate. 500 € sind ein guter Start – aber sie sollte schnell erhöhen.",
    gesetzlicheRenteHat: false,
  },
];

function AvatarFoto({
  foto,
  gradient,
  name,
  age,
  typ,
}: {
  foto: string;
  gradient: string[];
  name: string;
  age: number;
  typ: string;
}) {
  return (
    <div className="relative h-64 w-full rounded-t-2xl overflow-hidden">
      {/* Foto mit Fallback auf Gradient */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={foto}
        alt={`${name}, ${age} Jahre, ${typ}`}
        className="w-full h-full object-cover object-top"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
          const parent = (e.target as HTMLImageElement).parentElement;
          if (parent) parent.style.background = `linear-gradient(145deg, ${gradient[0]}, ${gradient[1]})`;
        }}
      />
      {/* Gradient overlay unten für Text-Lesbarkeit */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${gradient[1]}cc 0%, transparent 55%)`,
        }}
      />
      {/* Badge oben rechts */}
      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs text-white font-medium">
        {age} Jahre · {typ}
      </div>
      {/* Name unten links */}
      <div className="absolute bottom-3 left-3">
        <div className="text-xl font-bold text-white drop-shadow">{name}</div>
      </div>
    </div>
  );
}

export default function FrauenProfile() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      {/* Callout: Ehemann ist keine Altersvorsorge */}
      <div className="mb-14 bg-gradient-to-r from-pink-950/60 to-purple-950/60 border border-pink-800/40 rounded-2xl px-6 py-5 flex gap-4 items-start">
        <div className="text-3xl shrink-0">💬</div>
        <div>
          <p className="text-white font-bold text-lg mb-1">
            Ein Ehemann ist keine Altersvorsorge.
          </p>
          <p className="text-pink-200/80 text-sm leading-relaxed">
            Scheidungen, Trennungen, Todesfälle – das Leben ist unvorhersehbar. Jede Frau braucht
            ihr eigenes Vermögensaufbau-Fundament, unabhängig vom Familienstand.
            Finanzielle Selbstständigkeit ist kein Luxus – sie ist Selbstschutz.
          </p>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3 text-white">
          So funktioniert Vermögensaufbau –{" "}
          <span className="gradient-text">in der Praxis</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Drei echte Lebenssituationen. Drei Strategien. Und was jede mit 67 Jahren erwarten kann –
          wenn sie heute anfängt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROFILES.map((p) => (
          <div key={p.name} className="bg-[#111111] rounded-2xl border border-[#2a2a2a] overflow-hidden flex flex-col">
            <AvatarFoto
              foto={p.foto}
              gradient={p.gradient}
              name={p.name}
              age={p.age}
              typ={p.typ}
            />

            <div className="p-5 flex flex-col flex-1">
              {/* Header */}
              <div className="mb-4">
                <span className="text-xs text-gray-500 uppercase tracking-wide">{p.label}</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-white font-bold text-xl">{p.einkommenBrutto} €</span>
                  <span className="text-gray-500 text-sm">brutto/Monat</span>
                </div>
                <div className="text-gray-500 text-xs mt-0.5">Netto: {p.einkommenNetto} €/Monat</div>
              </div>

              {/* Sparbausteine */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Sparstrategie · {p.sparrate} €/Monat
                </div>
                <div className="space-y-1.5">
                  {p.sparbausteine.map((b) => (
                    <div key={b.produkt} className="flex items-center justify-between bg-[#0a0a0a] rounded-lg px-3 py-2">
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span>{b.emoji}</span>
                        <span>{b.produkt}</span>
                      </div>
                      <span className="text-xs font-semibold" style={{ color: b.farbe }}>
                        {b.betrag} €
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Erwartete Rente mit 67 */}
              <div className="mb-4 flex-1">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Erwartetes Einkommen mit 67
                </div>
                <div className="space-y-1.5">
                  {p.gesetzlicheRenteHat && (
                    <div className="flex items-center justify-between bg-[#0a0a0a] rounded-lg px-3 py-2">
                      <span className="text-xs text-gray-300">🏛️ Gesetzliche Rente</span>
                      <span className="text-xs font-semibold text-indigo-400">~{p.gesetzlicheRente.toLocaleString("de-DE")} €</span>
                    </div>
                  )}
                  {!p.gesetzlicheRenteHat && (
                    <div className="flex items-center justify-between bg-red-950/30 border border-red-900/30 rounded-lg px-3 py-2">
                      <span className="text-xs text-red-400">🏛️ Gesetzliche Rente</span>
                      <span className="text-xs font-semibold text-red-400">0 € ⚠️</span>
                    </div>
                  )}
                  {p.sparVermoegenMit67.map((s) => (
                    <div key={s.quelle} className="flex items-start justify-between bg-[#0a0a0a] rounded-lg px-3 py-2 gap-2">
                      <span className="text-xs text-gray-400 leading-tight">{s.quelle}</span>
                      <span className="text-xs font-semibold text-pink-400 shrink-0">{s.monatlich}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="rounded-xl px-4 py-3 mb-3"
                style={{
                  background: `linear-gradient(135deg, ${p.gradient[0]}18, ${p.gradient[1]}18)`,
                  border: `1px solid ${p.gradient[0]}35`,
                }}>
                <div className="text-xs text-gray-400 mb-0.5">Gesamt monatlich mit 67</div>
                <div className="text-2xl font-bold text-white">{p.gesamtMonatlich} €</div>
              </div>

              {/* Hinweis */}
              <p className="text-xs text-gray-500 leading-relaxed">{p.hinweis}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-gray-600">
        * Berechnungen basieren auf historischen Durchschnittsrenditen und dem Entnahmeprinzip (4% p.a.).
        Keine individuelle Finanzberatung. Alle Angaben sind Schätzwerte.
      </p>
    </section>
  );
}
