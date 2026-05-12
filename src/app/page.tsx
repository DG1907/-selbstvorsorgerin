import Link from "next/link";

const stats = [
  {
    value: "53%",
    label: "geringere Rente",
    note: "Frauen erhalten im Schnitt 53% weniger gesetzliche Rente als Männer",
  },
  {
    value: "18 Jahre",
    label: "Rentenunterschied",
    note: "Frauen, die Kinder bekommen, arbeiten im Schnitt 18 Jahre weniger Vollzeit",
  },
  {
    value: "1 von 3",
    label: "Frauen armutsgefährdet",
    note: "Im Alter sind Frauen deutlich häufiger von Altersarmut bedroht",
  },
];

const features = [
  {
    icon: "📊",
    title: "Rentenlücken-Rechner",
    desc: "Berechne, wie groß deine persönliche Rentenlücke ist – inklusive Elternzeit- und Teilzeit-Szenarien.",
    href: "/rechner/rentenluecke",
    cta: "Lücke berechnen",
  },
  {
    icon: "🌱",
    title: "Sparplan-Rechner",
    desc: "Zeige deinem Geld, wo es arbeiten soll. Vergleiche ETF-Sparplan, Riester und Co.",
    href: "/rechner/sparplan",
    cta: "Sparplan simulieren",
  },
  {
    icon: "📚",
    title: "Wissen auf Augenhöhe",
    desc: "Kein Finanzjargon, keine Bevormundung. Nur klare Erklärungen für deine Lebenssituation.",
    href: "/wissen",
    cta: "Wissen aufbauen",
  },
];

const challenges = [
  {
    emoji: "👶",
    title: "Elternzeit & Babypause",
    text: "Jedes Jahr Elternzeit kostet dich langfristig tausende Euro an Rentenansprüchen – und das ist kein persönliches Versagen, sondern ein Systemfehler.",
  },
  {
    emoji: "⏱️",
    title: "Teilzeit & Care-Arbeit",
    text: "Frauen leisten den Löwenanteil unbezahlter Haus- und Sorgearbeit. Das Rentensystem belohnt das nicht – aber du kannst gegensteuern.",
  },
  {
    emoji: "💸",
    title: "Gender Pay Gap",
    text: "Bei gleichem Job verdienen Frauen im Schnitt 18% weniger. Weniger Einkommen bedeutet weniger Einzahlungen in die Rentenversicherung.",
  },
  {
    emoji: "💔",
    title: "Trennung & Scheidung",
    text: "Viele Frauen verlassen sich auf den Versorgungsausgleich – aber der reicht selten. Finanzielle Unabhängigkeit schützt dich.",
  },
];

export default function Home() {
  return (
    <>
      {/* Alert Banner */}
      <div className="bg-pink-600 text-white text-center text-sm py-2 px-4">
        Frauen erhalten im Schnitt <strong>53% weniger Rente</strong> als Männer. Wir erklären warum – und was du dagegen tun kannst.
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-950/60 text-pink-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-pink-900/50">
          Speziell für Frauen
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight mb-6 text-white">
          Deine Altersvorsorge{" "}
          <span className="gradient-text">gehört dir</span>
          <br />– nicht dem Zufall
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto text-balance mb-10">
          Vermögensaufbau ist für Frauen schwieriger: Elternzeit, Teilzeit, der Gender Pay Gap –
          all das kostet dich Rente und Kapital. Hier bekommst du die Werkzeuge, um trotzdem
          finanziell unabhängig zu werden.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/rechner/rentenluecke"
            className="px-8 py-3.5 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors shadow-lg shadow-pink-900/40"
          >
            Meine Rentenlücke berechnen
          </Link>
          <Link
            href="/wissen"
            className="px-8 py-3.5 rounded-full bg-[#1a1a1a] text-pink-400 font-semibold border border-[#2a2a2a] hover:border-pink-800 hover:bg-[#1f1f1f] transition-colors"
          >
            Erst informieren
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111111] border-y border-[#2a2a2a] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-gray-200 mb-1">{s.label}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it's harder for women */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-white">
            Warum Vermögensaufbau für Frauen{" "}
            <span className="gradient-text">schwieriger ist</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Das ist keine Ausrede – das sind strukturelle Realitäten. Erst wenn wir sie benennen,
            können wir strategisch dagegensteuern.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {challenges.map((c) => (
            <div
              key={c.title}
              className="bg-[#111111] rounded-2xl p-6 border border-[#2a2a2a] card-hover"
            >
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h3 className="font-semibold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features / Tools */}
      <section className="bg-[#111111] border-y border-[#2a2a2a] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-white">Deine Werkzeuge</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Interaktive Rechner und verständliches Wissen – kostenlos und ohne Anmeldung.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.href}
                className="bg-[#0a0a0a] rounded-2xl p-7 border border-[#2a2a2a] card-hover flex flex-col"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">{f.desc}</p>
                <Link
                  href={f.href}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-pink-400 hover:text-pink-300"
                >
                  {f.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="bg-gradient-to-br from-pink-600 to-pink-900 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Fang heute an – nicht irgendwann
          </h2>
          <p className="text-pink-200 max-w-md mx-auto mb-8 text-balance">
            Jedes Jahr, das du wartest, kostet dich Zinseszins. Der beste Zeitpunkt war gestern,
            der zweitbeste ist jetzt.
          </p>
          <Link
            href="/rechner/rentenluecke"
            className="inline-block px-8 py-3.5 rounded-full bg-white text-pink-700 font-semibold hover:bg-pink-50 transition-colors"
          >
            Rentenlücke berechnen
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 text-center">
        <p className="text-xs text-gray-600">
          Alle Inhalte dienen ausschließlich der allgemeinen Information und stellen keine individuelle Finanzberatung dar.
          Für persönliche Anlageentscheidungen empfehlen wir die Beratung durch eine zugelassene Finanzberaterin.
        </p>
      </div>
    </>
  );
}
