import Link from "next/link";

export const metadata = {
  title: "Rechner – Selbstvorsorgerin",
  description: "Interaktive Finanzrechner speziell für Frauen.",
};

const rechner = [
  {
    href: "/rechner/rentenluecke",
    icon: "📊",
    title: "Rentenlücken-Rechner",
    desc: "Berechne, wie groß deine persönliche Rentenlücke wirklich ist – inklusive Elternzeit- und Teilzeit-Szenarien. Du wirst überrascht sein.",
    tags: ["Rente", "Elternzeit", "Teilzeit"],
    cta: "Lücke berechnen",
  },
  {
    href: "/rechner/sparplan",
    icon: "🌱",
    title: "Sparplan-Rechner",
    desc: "Simuliere, wie sich dein Sparplan entwickelt – und was der Gender Pay Gap und Elternzeit konkret an Kapital kosten.",
    tags: ["ETF", "Zinseszins", "Gender Pay Gap"],
    cta: "Sparplan simulieren",
  },
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">
          Deine <span className="gradient-text">Finanzrechner</span>
        </h1>
        <p className="text-gray-400 max-w-xl">
          Alle Rechner laufen komplett in deinem Browser. Keine Daten werden gespeichert oder weitergegeben.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rechner.map((r) => (
          <div key={r.href} className="bg-[#111111] rounded-2xl border border-[#2a2a2a] p-8 card-hover flex flex-col">
            <div className="text-4xl mb-4">{r.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{r.title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{r.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4 mb-6">
              {r.tags.map((t) => (
                <span key={t} className="text-xs bg-pink-950/50 text-pink-400 px-2.5 py-1 rounded-full border border-pink-900/50">
                  {t}
                </span>
              ))}
            </div>
            <Link
              href={r.href}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition-colors"
            >
              {r.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
