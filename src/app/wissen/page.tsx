import Link from "next/link";

export const metadata = {
  title: "Wissen – Selbstvorsorgerin",
  description: "Klare Erklärungen zu Altersvorsorge und Vermögensaufbau – speziell für Frauen.",
};

const artikel = [
  {
    slug: "gender-pension-gap",
    emoji: "📉",
    kategorie: "Rente",
    titel: "Der Gender Pension Gap: Warum Frauen 53% weniger Rente bekommen",
    intro:
      "Der Unterschied ist riesig – und er hat viele Ursachen. Wir erklären, wie der Gap entsteht und was du dagegen tun kannst.",
    lesezeit: "6 Min.",
  },
  {
    slug: "etf-einsteiger",
    emoji: "📈",
    kategorie: "Investieren",
    titel: "ETFs für Einsteiger: Was du wirklich wissen musst",
    intro:
      "ETFs klingen kompliziert, sind es aber nicht. Wir erklären, was ein ETF ist, warum er so mächtig ist, und wie du anfängst.",
    lesezeit: "8 Min.",
  },
  {
    slug: "elternzeit-rente",
    emoji: "👶",
    kategorie: "Elternzeit",
    titel: "Was Elternzeit wirklich mit deiner Rente macht",
    intro:
      "Elternzeit ist wichtig – aber sie hat einen finanziellen Preis. Wir zeigen dir, wie hoch er ist und wie du ihn abmilderst.",
    lesezeit: "5 Min.",
  },
  {
    slug: "teilzeit-falle",
    emoji: "⏱️",
    kategorie: "Teilzeit",
    titel: "Die Teilzeitfalle: Warum kleine Stunden große Folgen haben",
    intro:
      "Wer in Teilzeit arbeitet, zahlt weniger ein – und das merkt man erst mit 67. Wir rechnen es vor.",
    lesezeit: "7 Min.",
  },
  {
    slug: "riester-etf-vergleich",
    emoji: "⚖️",
    kategorie: "Vergleich",
    titel: "Riester vs. ETF-Sparplan: Was ist besser für Frauen?",
    intro:
      "Riester hat einen schlechten Ruf – aber für manche Frauen lohnt er sich trotzdem. Eine ehrliche Gegenüberstellung.",
    lesezeit: "10 Min.",
  },
  {
    slug: "scheidung-finanzen",
    emoji: "💔",
    kategorie: "Absicherung",
    titel: "Scheidung und Finanzen: Was Frauen oft nicht wissen",
    intro:
      "Versorgungsausgleich klingt gut, reicht aber oft nicht. Was du vor, während und nach einer Trennung wissen solltest.",
    lesezeit: "9 Min.",
  },
];

const kategorien = ["Alle", "Rente", "Investieren", "Elternzeit", "Teilzeit", "Vergleich", "Absicherung"];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
          Wissen auf <span className="gradient-text">Augenhöhe</span>
        </h1>
        <p className="text-gray-400 max-w-xl">
          Kein Finanzjargon. Keine Bevormundung. Nur klare Erklärungen für deine Lebenssituation.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-10">
        {kategorien.map((k) => (
          <span
            key={k}
            className={`text-sm px-4 py-1.5 rounded-full border cursor-pointer transition-colors ${
              k === "Alle"
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-[#111111] text-gray-400 border-[#2a2a2a] hover:border-pink-800 hover:text-pink-400"
            }`}
          >
            {k}
          </span>
        ))}
      </div>

      {/* Articles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artikel.map((a) => (
          <Link
            key={a.slug}
            href={`/wissen/${a.slug}`}
            className="bg-[#111111] rounded-2xl border border-[#2a2a2a] p-6 card-hover flex flex-col group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl">{a.emoji}</span>
              <span className="text-xs bg-pink-950/50 text-pink-400 px-2.5 py-1 rounded-full border border-pink-900/50">
                {a.kategorie}
              </span>
            </div>
            <h2 className="text-base font-bold text-white mb-2 group-hover:text-pink-400 transition-colors leading-snug">
              {a.titel}
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed flex-1">{a.intro}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-600">{a.lesezeit}</span>
              <span className="text-sm font-semibold text-pink-400 group-hover:text-pink-300">
                Lesen →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Context box */}
      <div className="mt-16 bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">
          Lieber direkt loslegen?
        </h2>
        <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
          Statt Artikel zu lesen kannst du auch einfach deinen Zahlen vertrauen –
          unsere Rechner zeigen dir in Minuten, wo du stehst.
        </p>
        <Link
          href="/rechner"
          className="inline-block px-6 py-2.5 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition-colors"
        >
          Zu den Rechnern
        </Link>
      </div>
    </div>
  );
}
