const CREDENTIALS = [
  { icon: "📅", text: "Seit 1994 in der Versicherungs- und Vorsorgebranche" },
  { icon: "🏆", text: "OMGV Award 2023 für Zielgruppenstrategie" },
  { icon: "👩", text: "Spezialisiert auf Vermögensaufbau & Altersvorsorge für Frauen" },
  { icon: "📍", text: "Standortleiterin Provinzial · Düsseldorf · bundesweit online" },
];

export default function DorisSection() {
  return (
    <section className="border-y border-white/5 py-0 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[560px]">

          {/* Foto – links */}
          <div className="relative h-80 md:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Doris.jpg"
              alt="Doris Greinert – Finanzberaterin"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtiler pink Rand-Glow */}
            <div className="absolute inset-0 ring-1 ring-inset ring-pink-500/10 pointer-events-none" />
            {/* Gradient-Übergang rechts (nur Desktop) */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-[#080808] hidden md:block" />
          </div>

          {/* Text – rechts */}
          <div className="flex flex-col justify-center py-16 md:pl-12">
            <p className="text-pink-400 text-sm font-medium uppercase tracking-widest mb-5">
              Deine Beraterin
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-2">
              Doris Greinert
            </h2>
            <p className="text-gray-400 text-base mb-8 font-medium">
              Standortleiterin Provinzial · Unternehmerin · #selbstvorsorgerin
            </p>

            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              Seit 1994 begleite ich Menschen in Finanz- und Vorsorgefragen –
              und ich weiß: Frauen haben dabei besondere Herausforderungen.
              Elternzeit, Teilzeit, Gender Pay Gap. Das kostet Rente und Kapital.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Deshalb habe ich #selbstvorsorgerin gegründet. Mein Ziel: Frauen das
              Wissen und die Werkzeuge geben, die sie brauchen, um finanziell
              unabhängig zu werden – auf Augenhöhe, ohne Fachchinesisch.
              Denn die Zukunft ist weiblich.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-10">
              {CREDENTIALS.map((c) => (
                <li key={c.text} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="text-base shrink-0 mt-0.5">{c.icon}</span>
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://provinzialdorisgreinert.simplybook.it/v2/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold text-sm hover:bg-pink-400 transition-all hover:shadow-lg hover:shadow-pink-500/25 text-center"
              >
                Kostenlose Beratung buchen →
              </a>
              <a
                href="https://www.dorisgreinert.de"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 text-gray-300 font-semibold text-sm hover:border-pink-500/30 hover:text-white transition-all text-center"
              >
                Mehr über Doris
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
