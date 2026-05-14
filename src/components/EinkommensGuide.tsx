const TEILZEIT_GRUENDE = [
  {
    emoji: "🔄",
    titel: "Gewohnheit & Komfortzone",
    text: "Teilzeit nach der Babypause wurde irgendwann normal – und nie wirklich hinterfragt.",
  },
  {
    emoji: "🏠",
    titel: "Unsichtbare Erwartungen",
    text: "Partner oder Familie erwarten weiterhin Verfügbarkeit für Haushalt und Organisation.",
  },
  {
    emoji: "📋",
    titel: "Keine Vollzeit-Angebote",
    text: "Viele Arbeitgeber bieten keine flexiblen Vollzeitmodelle – Home-Office oder Gleitzeit fehlen.",
  },
  {
    emoji: "📉",
    titel: "Unterbrochene Karriere",
    text: "Jahre in Teilzeit bedeuten oft verpasste Beförderungen und schleichendes Karriere-Minus.",
  },
  {
    emoji: "🤔",
    titel: "Eigene Unsicherheit",
    text: "Nach Jahren in Teilzeit zweifeln viele Frauen an ihrer Vollzeit-Fähigkeit – ohne Grund.",
  },
  {
    emoji: "🚫",
    titel: "Angst vor Ablehnung",
    text: "Die Sorge, dass der Wunsch nach mehr Stunden abgelehnt wird, hält viele davon ab, es zu fragen.",
  },
];

const AKTIV_TIPPS = [
  {
    emoji: "💬",
    titel: "Regelmäßig nach Gehaltserhöhung fragen",
    text: "Einmal pro Jahr ist Minimum. Wer nicht fragt, bekommt nichts – und Schweigen wird als Zufriedenheit interpretiert. Vorbereitung: Leistungen dokumentieren, Marktgehalt recherchieren.",
  },
  {
    emoji: "⏰",
    titel: "Stundenaufstockung aktiv ansprechen",
    text: "Wenn die Kinder älter sind, lohnt es sich, das Gespräch zu suchen. Viele Arbeitgeber stimmen zu – sie müssen nur gefragt werden.",
  },
  {
    emoji: "💑",
    titel: "Mit dem Partner sprechen",
    text: "Ist deine Altersvorsorge geringer als seine? Dann kann er für dich eine private Rentenversicherung oder einen ETF-Sparplan abschließen oder bezahlen – das ist rechtlich möglich und oft steuerlich sinnvoll.",
  },
  {
    emoji: "🧾",
    titel: "Versorgungsausgleich kennen",
    text: "Im Falle einer Trennung werden Rentenansprüche aufgeteilt – aber das reicht selten. Ergänze deshalb immer mit eigenem Vermögensaufbau.",
  },
  {
    emoji: "🌐",
    titel: "Nebeneinnahmen aufbauen",
    text: "Freelance, Beratung, Kurse, Verkauf von Wissen oder Produkten – aktive Nebeneinnahmen können den Sparraum deutlich erhöhen.",
  },
];

const PASSIV_BEISPIELE = [
  { emoji: "📈", titel: "ETF-Dividenden", text: "Breit gestreute ETFs schütten regelmäßig Dividenden aus – kleines passives Einkommen, das mit der Zeit wächst." },
  { emoji: "🏠", titel: "Mieteinnahmen", text: "Eine vermietete Wohnung oder ein Zimmer liefert monatlich Einkommen ohne aktive Arbeitszeit." },
  { emoji: "📚", titel: "Digitale Produkte", text: "E-Books, Onlinekurse, Vorlagen – einmal erstellt, können sie immer wieder verkauft werden." },
  { emoji: "💰", titel: "Zinserträge & Dividenden", text: "Festgeld, Anleihen und Dividendenaktien zahlen regelmäßig – passiv, zuverlässig, planbar." },
];

export default function EinkommensGuide() {
  return (
    <>
      {/* Teilzeit-Statistik */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-white">
            Die Teilzeit-Falle –{" "}
            <span className="gradient-text">auch wenn die Kinder groß sind</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Laut Statistischem Bundesamt arbeitet mehr als die Hälfte aller Mütter noch in Teilzeit,
            wenn ihre Kinder zwischen 15 und 17 Jahren alt sind – obwohl kaum noch Betreuung nötig wäre.
          </p>
        </div>

        {/* Statistik-Highlight */}
        <div className="bg-gradient-to-br from-pink-950/40 to-[#111111] border border-pink-900/30 rounded-2xl p-8 mb-10 text-center">
          <div className="text-6xl font-bold gradient-text mb-2">60 %+</div>
          <div className="text-white font-semibold text-lg mb-1">der Mütter sind noch in Teilzeit</div>
          <div className="text-gray-400 text-sm">… wenn ihre Kinder 15–17 Jahre alt sind</div>
          <div className="text-gray-600 text-xs mt-2">(Quelle: Statistisches Bundesamt, 2023)</div>
          <div className="mt-6 bg-[#0a0a0a] rounded-xl p-4 max-w-lg mx-auto">
            <p className="text-pink-300 text-sm font-medium">
              Jedes zusätzliche Stunde Vollzeit pro Woche bedeutet über 10 Jahre hinweg
              mehrere tausend Euro mehr Rentenansprüche – und mehr Spielraum für Vermögensaufbau.
            </p>
          </div>
        </div>

        {/* Gründe */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Warum viele Frauen in Teilzeit bleiben – obwohl sie nicht müssten
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEILZEIT_GRUENDE.map((g) => (
              <div key={g.titel} className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-4">
                <div className="text-2xl mb-2">{g.emoji}</div>
                <div className="font-semibold text-white text-sm mb-1">{g.titel}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aktives & Passives Einkommen */}
      <section className="bg-[#111111] border-y border-[#2a2a2a] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 text-white">
              Aktives & passives Einkommen –{" "}
              <span className="gradient-text">beide Seiten nutzen</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Vermögensaufbau funktioniert am besten mit zwei Hebeln gleichzeitig: mehr verdienen
              und Geld für sich arbeiten lassen.
            </p>
          </div>

          {/* Erklärung aktiv vs. passiv */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {/* Aktiv */}
            <div className="bg-[#0a0a0a] rounded-2xl border border-[#2a2a2a] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-xl">⚡</div>
                <div>
                  <div className="text-white font-bold">Aktives Einkommen</div>
                  <div className="text-xs text-gray-500">Zeit gegen Geld tauschen</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Du arbeitest – du verdienst. Gehalt, Honorare, Freelance-Projekte.
                Aktives Einkommen ist der Startmotor für alles andere.
              </p>
              <div className="space-y-2">
                {["Gehaltserhöhung verhandeln", "Stunden aufstocken", "Beförderung anstreben", "Freelance / Nebenprojekte", "Weiterbildung & Spezialisierung"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="text-pink-500">→</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Passiv */}
            <div className="bg-[#0a0a0a] rounded-2xl border border-[#2a2a2a] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-xl">💤</div>
                <div>
                  <div className="text-white font-bold">Passives Einkommen</div>
                  <div className="text-xs text-gray-500">Geld arbeitet für dich</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Dein Kapital, dein Wissen oder deine Sachwerte erzeugen Einnahmen – auch wenn du
                schläfst. Das Ziel: im Laufe der Zeit immer mehr passives Einkommen aufbauen.
              </p>
              <div className="grid grid-cols-1 gap-2">
                {PASSIV_BEISPIELE.map((p) => (
                  <div key={p.titel} className="flex gap-2 text-xs text-gray-300">
                    <span className="shrink-0">{p.emoji}</span>
                    <div>
                      <span className="font-medium text-white">{p.titel}:</span>{" "}
                      <span className="text-gray-400">{p.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Aktiv-Tipps */}
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            So erhöhst du dein aktives Einkommen – konkret
          </h3>
          <div className="space-y-4">
            {AKTIV_TIPPS.map((t) => (
              <div key={t.titel} className="bg-[#0a0a0a] rounded-xl border border-[#2a2a2a] p-5 flex gap-4">
                <div className="text-2xl shrink-0">{t.emoji}</div>
                <div>
                  <div className="font-semibold text-white mb-1">{t.titel}</div>
                  <p className="text-sm text-gray-400 leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Partner-Callout */}
          <div className="mt-10 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 border border-indigo-800/30 rounded-2xl p-6 flex gap-4">
            <div className="text-3xl shrink-0">💑</div>
            <div>
              <div className="font-bold text-white mb-1">
                Habt ihr eine gemeinsame Strategie?
              </div>
              <p className="text-sm text-indigo-200/70 leading-relaxed">
                Wenn deine Altersvorsorge durch Elternzeit oder Teilzeit geringer ausgefallen ist
                als die deines Partners: Sprich ihn darauf an. Er kann für dich zusätzliche Beiträge
                in eine private Rentenversicherung oder einen Sparplan einzahlen – das ist rechtlich
                möglich, steuerlich oft sinnvoll, und ein echter Ausgleich.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
