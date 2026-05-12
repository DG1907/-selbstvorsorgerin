import Link from "next/link";

export const metadata = {
  title: "ETFs für Einsteiger – Selbstvorsorgerin",
  description: "Was ist ein ETF, warum ist er so mächtig, und wie fängst du an? Klar erklärt.",
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/wissen" className="hover:text-pink-400">Wissen</Link>
        <span>›</span>
        <span className="text-gray-300">ETFs für Einsteiger</span>
      </div>

      <div className="flex gap-3 items-center mb-4">
        <span className="text-xs bg-pink-950/50 text-pink-400 px-3 py-1 rounded-full border border-pink-900/50">Investieren</span>
        <span className="text-xs text-gray-600">8 Min. Lesezeit</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
        ETFs für Einsteiger:{" "}
        <span className="gradient-text">Was du wirklich wissen musst</span>
      </h1>

      <p className="text-lg text-gray-400 mb-10 leading-relaxed">
        ETFs sind das wichtigste Werkzeug für Privatanlegerinnen – aber niemand erklärt sie wirklich
        verständlich. Das ändern wir hier. Kein Jargon, keine Verwirrung.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">Was ist ein ETF überhaupt?</h2>
          <p className="text-gray-400 leading-relaxed">
            ETF steht für <strong className="text-gray-200">Exchange Traded Fund</strong> – also ein börsengehandelter Fonds.
            Stell dir vor, du kaufst nicht eine Aktie (z.B. nur Apple), sondern gleichzeitig
            kleine Anteile von tausenden Unternehmen. Genau das macht ein ETF.
          </p>
          <div className="bg-pink-950/30 border border-pink-900/50 rounded-xl p-5 mt-4">
            <p className="text-sm text-pink-300">
              <strong>Einfache Analogie:</strong> Ein ETF ist wie ein Obstkorb. Statt nur
              einen Apfel zu kaufen, kaufst du einen Korb mit Äpfeln, Birnen, Orangen und Bananen.
              Wenn eine Sorte schlecht läuft, gleichen die anderen es aus.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Warum sind ETFs so mächtig?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { titel: "Geringe Kosten", text: "ETFs kosten oft nur 0,1–0,2% pro Jahr. Aktiv gemanagte Fonds kosten 1,5–2,5%. Über 30 Jahre ist das ein riesiger Unterschied." },
              { titel: "Breite Streuung", text: "Ein einziger MSCI World ETF enthält über 1.500 Unternehmen aus 23 Ländern. Kein einzelnes Unternehmen kann dein Depot ruinieren." },
              { titel: "Transparenz", text: "Du siehst jederzeit, was du besitzt. Kein Fondsmanager, der Geheimstrategien verfolgt." },
              { titel: "Flexibilität", text: "Du kannst jederzeit kaufen und verkaufen. Keine Mindestlaufzeit, kein Vertrag." },
            ].map((p) => (
              <div key={p.titel} className="bg-[#1a1a1a] rounded-xl p-5 border border-[#2a2a2a]">
                <h3 className="font-semibold text-white mb-1">{p.titel}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Welcher ETF für den Einstieg?</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Für die meisten Menschen gibt es eine klare Empfehlung: Beginne mit einem einzigen,
            breit gestreuten Welt-ETF.
          </p>
          <div className="space-y-3">
            {[
              { name: "MSCI World", desc: "1.500+ Unternehmen aus 23 Industrieländern. Der Klassiker.", risiko: "Mittel" },
              { name: "MSCI ACWI", desc: "Wie MSCI World, aber auch Schwellenländer inklusive. Noch breiter.", risiko: "Mittel" },
              { name: "FTSE All-World", desc: "Ähnlich ACWI, etwas anders gewichtet. Beliebt bei Vanguard-ETFs.", risiko: "Mittel" },
            ].map((e) => (
              <div key={e.name} className="flex items-center gap-4 bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a]">
                <div className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                <div className="flex-1">
                  <span className="font-semibold text-white">{e.name}</span>
                  <span className="text-sm text-gray-400 ml-2">– {e.desc}</span>
                </div>
                <span className="text-xs bg-green-950/50 text-green-400 px-2 py-0.5 rounded-full border border-green-900/50">
                  Risiko: {e.risiko}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">Wie fange ich an?</h2>
          <div className="space-y-3">
            {[
              { nr: "1", text: "Depot eröffnen: Bei einer Direktbank oder einem Online-Broker (z.B. Comdirect, DKB, Scalable Capital, Trade Republic). Kostenlos und dauert ~15 Minuten." },
              { nr: "2", text: "Sparplan einrichten: Ab 25€ pro Monat möglich. Einmal einrichten, automatisch läuft." },
              { nr: "3", text: "ETF wählen: Einen der oben genannten Welt-ETFs. Beispiel: iShares Core MSCI World (ISIN: IE00B4L5Y983)." },
              { nr: "4", text: "Nicht täglich schauen: ETF-Sparpläne sind für die lange Sicht. Schwankungen aushalten und nicht in Panik verkaufen." },
            ].map((s) => (
              <div key={s.nr} className="flex gap-4 items-start">
                <span className="w-7 h-7 rounded-full bg-pink-500 text-white text-sm flex items-center justify-center shrink-0 font-bold">
                  {s.nr}
                </span>
                <p className="text-sm text-gray-300 leading-relaxed pt-0.5">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-pink-950/30 border border-pink-900/50 rounded-xl p-6">
          <h3 className="font-bold text-pink-300 mb-2">Speziell für Frauen: Der Timing-Effekt</h3>
          <p className="text-sm text-pink-400/80 leading-relaxed">
            Frauen warten statistisch länger mit dem Investieren als Männer – oft aus Unsicherheit.
            Jedes Jahr Wartezeit kostet dich Zinseszins. Ein Beispiel: Wer mit 30 anfängt statt
            mit 25, hat mit 67 rund 40.000€ weniger (bei 200€/Monat, 7% Rendite). Fang an, auch
            wenn du noch nicht alles verstehst.
          </p>
        </section>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <Link
          href="/rechner/sparplan"
          className="flex-1 text-center px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors"
        >
          Sparplan simulieren
        </Link>
        <Link
          href="/wissen"
          className="flex-1 text-center px-6 py-3 rounded-full bg-[#1a1a1a] text-pink-400 font-semibold border border-[#2a2a2a] hover:border-pink-800 transition-colors"
        >
          Zurück zum Wissen
        </Link>
      </div>

      <p className="text-xs text-gray-600 mt-8 leading-relaxed">
        Keine Finanzberatung. Alle Angaben dienen der allgemeinen Information. ETF-Investitionen
        sind mit Risiken verbunden, einschließlich des Risikos des Kapitalverlustes.
        ISIN-Beispiel dient nur der Illustration, keine Kaufempfehlung.
      </p>
    </div>
  );
}
