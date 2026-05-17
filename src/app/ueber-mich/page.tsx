import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich – Doris Greinert · #selbstvorsorgerin",
  description:
    "Doris Greinert – Standortleiterin Provinzial, Initiatorin der #selbstvorsorgerin Kampagne und Expertin für Vermögensaufbau & Altersvorsorge für Frauen.",
};

const milestones = [
  { year: "1994", text: "Einstieg in die Versicherungs- und Vorsorgebranche" },
  { year: "2000+", text: "Aufbau der eigenen Agentur im Düsseldorfer Lorettoviertel" },
  { year: "2020", text: "Gründung der #selbstvorsorgerin Kampagne" },
  { year: "2022", text: "Provinzial- und sparkassenweiter Roll-out der Kampagne" },
  { year: "2023", text: "OMGV Award für herausragende Zielgruppenstrategie" },
];

const values = [
  {
    icon: "🎯",
    title: "Auf Augenhöhe",
    text: "Kein Fachchinesisch, keine Herablassung. Ich erkläre Finanzen so, wie ich es mir selbst gewünscht hätte.",
  },
  {
    icon: "💡",
    title: "Ehrlich & transparent",
    text: "Ich zeige, was Elternzeit, Teilzeit und der Gender Pay Gap wirklich kosten – in Euro und Cent.",
  },
  {
    icon: "💪",
    title: "Lösungsorientiert",
    text: "Jede Situation hat Hebel. Gemeinsam finden wir, was für deine Lebenssituation am besten funktioniert.",
  },
  {
    icon: "🤝",
    title: "Langfristig",
    text: "Ich begleite meine Kundinnen über Jahre. Vertrauen entsteht durch Verlässlichkeit, nicht durch Einmalgeschäfte.",
  },
];

export default function UeberMichPage() {
  const BOOKING_URL = "https://provinzialdorisgreinert.simplybook.it/v2/";

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div>
              <p className="text-pink-400 text-sm font-medium uppercase tracking-widest mb-4">
                Deine Beraterin
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
                Doris<br />
                <span className="gradient-text">Greinert</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Standortleiterin Provinzial · Unternehmerin · Initiatorin von{" "}
                <span className="text-pink-400 font-semibold">#selbstvorsorgerin</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold text-sm hover:bg-pink-400 transition-all hover:shadow-lg hover:shadow-pink-500/25 text-center"
                >
                  Kostenloses Erstgespräch →
                </a>
                <a
                  href="https://www.dorisgreinert.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-white/10 text-gray-300 font-semibold text-sm hover:border-pink-500/30 hover:text-white transition-all text-center"
                >
                  dorisgreinert.de
                </a>
              </div>
            </div>

            {/* Foto */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Doris.jpg"
                  alt="Doris Greinert – Finanzberaterin und Initiatorin von #selbstvorsorgerin"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-pink-500/10" />
              </div>
              {/* Award Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1a1a1a] border border-pink-500/30 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-xs text-pink-400 font-semibold uppercase tracking-wide">OMGV Award</p>
                <p className="text-white font-bold text-lg leading-none">2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEINE GESCHICHTE ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-pink-400 text-sm font-medium uppercase tracking-widest mb-4">
              Meine Geschichte
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Seit 1994 für Menschen –<br />
              <span className="gradient-text">seit 2020 für Frauen</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Seit 1994 begleite ich Menschen in Finanz- und Vorsorgefragen.
                Was mich angetrieben hat: den Unterschied zu machen, wirklich zu helfen –
                nicht nur Verträge zu verkaufen.
              </p>
              <p>
                Irgendwann wurde mir klar, dass Frauen beim Thema Altersvorsorge systematisch
                benachteiligt sind. Elternzeit kostet Rentenpunkte. Teilzeit kostet Kapital.
                Der Gender Pay Gap kostet beides. Und die wenigsten Frauen wissen, wie groß
                diese Lücke wirklich ist.
              </p>
              <p>
                Deshalb habe ich{" "}
                <span className="text-pink-400 font-semibold">#selbstvorsorgerin</span>{" "}
                gegründet. Eine Kampagne, kein Produkt. Ein Auftrag, kein Angebot.
                Ich will, dass Frauen verstehen, was auf dem Spiel steht – und was sie
                dagegen tun können.
              </p>
              <p>
                Die Kampagne wurde später provinzial- und sparkassenweit ausgerollt.
                Ich bin stolz darauf. Aber mein Herzstück bleibt das persönliche Gespräch –
                mit dir, über deine Situation.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="text-pink-400 text-sm font-medium uppercase tracking-widest mb-6">
              Meilensteine
            </p>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-5">
                  {/* Line + Dot */}
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${i === milestones.length - 1 ? "bg-pink-500" : "bg-pink-500/40"}`} />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-white/5 my-1" />
                    )}
                  </div>
                  {/* Content */}
                  <div className={`pb-6 ${i === milestones.length - 1 ? "" : ""}`}>
                    <span className="text-pink-400 text-xs font-bold uppercase tracking-widest">
                      {m.year}
                    </span>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WERTE ── */}
      <section className="border-y border-white/5 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-pink-400 text-sm font-medium uppercase tracking-widest mb-3">
              Meine Werte
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              So arbeite ich mit dir
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-7 border border-white/5 bg-white/[0.02] hover:border-pink-500/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
        <p className="text-pink-400 text-sm font-medium uppercase tracking-widest mb-4">
          Bereit?
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Lass uns reden –<br />kostenlos und unverbindlich.
        </h2>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
          30 Minuten, die deine Perspektive auf deine finanzielle Zukunft verändern können.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-pink-500 text-white font-bold text-base hover:bg-pink-400 transition-all hover:shadow-lg hover:shadow-pink-500/25"
          >
            Kostenloses Erstgespräch buchen →
          </a>
          <Link
            href="/rechner/rentenluecke"
            className="px-8 py-4 rounded-full border border-white/10 text-gray-300 font-semibold text-base hover:border-pink-500/30 hover:text-white transition-all"
          >
            Erst meine Rentenlücke berechnen
          </Link>
        </div>
      </section>
    </>
  );
}
