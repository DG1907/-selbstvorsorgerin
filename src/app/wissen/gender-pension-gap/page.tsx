import Link from "next/link";

export const metadata = {
  title: "Gender Pension Gap – Selbstvorsorgerin",
  description: "Warum Frauen 53% weniger Rente bekommen – und was du dagegen tun kannst.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/wissen" className="hover:text-violet-700">Wissen</Link>
        <span>›</span>
        <span className="text-gray-800">Gender Pension Gap</span>
      </div>

      <div className="flex gap-3 items-center mb-4">
        <span className="text-xs bg-violet-50 text-violet-700 px-3 py-1 rounded-full border border-violet-200">Rente</span>
        <span className="text-xs text-gray-400">6 Min. Lesezeit</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        Der Gender Pension Gap: Warum Frauen{" "}
        <span className="gradient-text">53% weniger Rente</span> bekommen
      </h1>

      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        Wenn Frauen ihre erste Renteninformation in der Post bekommen, ist der Schock oft groß.
        Die Zahlen sind erschreckend niedrig – und das ist kein Zufall, sondern das Ergebnis
        mehrerer struktureller Benachteiligungen.
      </p>

      {/* Key stat */}
      <div className="bg-gradient-to-br from-violet-600 to-pink-600 rounded-2xl p-8 text-white text-center mb-10">
        <div className="text-6xl font-bold mb-2">53%</div>
        <p className="text-violet-100">
          Frauen erhalten im Schnitt 53% weniger gesetzliche Rente als Männer.
          <br />
          <span className="text-sm mt-1 block">(Quelle: BMAS, 2023)</span>
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Was ist der Gender Pension Gap?</h2>
          <p className="text-gray-600 leading-relaxed">
            Der Gender Pension Gap beschreibt den Unterschied in den Rentenansprüchen zwischen Männern
            und Frauen. In Deutschland beträgt er aktuell rund 53% – das bedeutet: Wenn ein Mann
            im Durchschnitt 1.500 € Rente bekommt, erhält die Frau nur ca. 700 €.
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            Dieser Gap ist nicht auf einzelne Diskriminierungsvorfälle zurückzuführen, sondern
            auf ein System, das Care-Arbeit nicht angemessen berücksichtigt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Die vier Hauptursachen</h2>

          {[
            {
              nr: "01",
              titel: "Elternzeit & Babypause",
              text: "Die gesetzliche Rente basiert auf Entgeltpunkten. Wer nicht einzahlt, sammelt keine Punkte. Elterngeld-Phasen werden nur eingeschränkt angerechnet – und wer mehrere Kinder bekommt, zahlt viele Jahre weniger ein.",
            },
            {
              nr: "02",
              titel: "Teilzeitarbeit",
              text: "68% aller Teilzeitbeschäftigten in Deutschland sind Frauen. Wer 30 statt 40 Stunden arbeitet, zahlt 25% weniger in die Rentenversicherung ein – und das über viele Jahre. Der Zinseszins-Effekt verstärkt dies enorm.",
            },
            {
              nr: "03",
              titel: "Gender Pay Gap",
              text: "Frauen verdienen auch bei gleicher Tätigkeit und Qualifikation durchschnittlich 6% weniger. Der unbereinigte Gap beträgt sogar 18%. Weniger Gehalt = weniger Rentenpunkte.",
            },
            {
              nr: "04",
              titel: "Berufswahl & Branchenstrukturen",
              text: "Pflegerin, Erzieherin, Sekretärin – typische Frauenberufe werden schlechter entlohnt als typische Männerberufe. Das liegt nicht an Leistung, sondern an historisch gewachsenen Lohnstrukturen.",
            },
          ].map((p) => (
            <div key={p.nr} className="flex gap-4 bg-[#faf9f7] rounded-xl p-5 border border-violet-100">
              <span className="text-2xl font-bold text-violet-200 shrink-0">{p.nr}</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{p.titel}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Was kannst du konkret tun?</h2>
          <div className="space-y-3">
            {[
              "Rentenlücke berechnen: Kenne deine Zahlen. Nutze unseren Rentenlücken-Rechner.",
              "Früh anfangen: Jedes Jahr früher investieren macht einen massiven Unterschied durch den Zinseszins.",
              "ETF-Sparplan starten: Schon 100€ im Monat in einen breit gestreuten ETF können langfristig enorme Wirkung haben.",
              "Elternzeit gemeinsam aufteilen: Wenn Partner 6+ Monate Elternzeit nehmen, gleicht das die Lücke etwas aus.",
              "Verhandeln: Gehaltsverhandlungen zahlen sich direkt in Rentenpunkte aus.",
              "Nicht auf Versorgungsausgleich verlassen: Eigene Rentenansprüche sind die sicherste Absicherung.",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center shrink-0 font-bold">✓</span>
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h3 className="font-bold text-amber-900 mb-2">Das wichtigste Mindset</h3>
          <p className="text-sm text-amber-800 leading-relaxed">
            Der Gender Pension Gap ist kein persönliches Versagen. Er ist das Ergebnis eines Systems,
            das Care-Arbeit nicht angemessen bewertet. Aber innerhalb dieses Systems kannst du
            aktiv Weichen stellen – und das ist das Ziel dieser Website.
          </p>
        </section>
      </div>

      {/* CTAs */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Link
          href="/rechner/rentenluecke"
          className="flex-1 text-center px-6 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors"
        >
          Meine Rentenlücke berechnen
        </Link>
        <Link
          href="/wissen"
          className="flex-1 text-center px-6 py-3 rounded-full bg-white text-violet-700 font-semibold border border-violet-200 hover:bg-violet-50 transition-colors"
        >
          Zurück zum Wissen
        </Link>
      </div>

      <p className="text-xs text-gray-400 mt-8 leading-relaxed">
        Quellen: Bundesministerium für Arbeit und Soziales (BMAS), Statistisches Bundesamt,
        Deutsches Institut für Wirtschaftsforschung (DIW). Zahlen Stand 2023/2024.
        Kein Ersatz für individuelle Finanzberatung.
      </p>
    </div>
  );
}
