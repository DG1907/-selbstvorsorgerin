import Link from "next/link";

export const metadata = {
  title: "Impressum – #selbstvorsorgerin",
  description: "Impressum von Doris Greinert, Provinzial Geschäftsstelle Düsseldorf.",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16 sm:py-24">
      <div className="mb-10">
        <Link href="/" className="text-xs text-gray-500 hover:text-pink-400 transition-colors">
          ← Zurück zur Startseite
        </Link>
      </div>

      <article className="prose-legal">
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Doris Greinert<br />
          Provinzial Geschäftsstelle<br />
          Neusser Str. 82<br />
          40219 Düsseldorf
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4921130066000">0211 300660-0</a><br />
          E-Mail: <a href="mailto:d.greinert@gs.provinzial.com">d.greinert@gs.provinzial.com</a>
        </p>

        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
          Berufsbezeichnung: Gebundene Versicherungsvertreterin<br />
          Verliehen in: Deutschland
        </p>
        <p>
          Zuständige Aufsichtsbehörde:<br />
          Industrie- und Handelskammer zu Düsseldorf<br />
          Ernst-Schneider-Platz 1<br />
          40212 Düsseldorf<br />
          <a href="https://www.duesseldorf.ihk.de" target="_blank" rel="noopener noreferrer">
            www.duesseldorf.ihk.de
          </a>
        </p>

        <h2>Angaben nach § 11 VersVermV</h2>
        <p>
          Status: Gebundene Versicherungsvertreterin gemäß § 34d Abs. 7 GewO
          für die Provinzial Versicherung AG, Provinzialplatz 1, 40591 Düsseldorf.
        </p>
        <p>
          Vermittlerregister-Nummer: <strong>D-XBK6-W4CDM-36</strong>
        </p>
        <p>
          Eintragung im Vermittlerregister kann überprüft werden bei:<br />
          Deutscher Industrie- und Handelskammertag (DIHK) e.V.<br />
          Breite Straße 29, 10178 Berlin<br />
          Telefon: 0180 600 585 0<br />
          (20 Cent/Anruf aus dem dt. Festnetz, max. 60 Cent/Anruf aus den Mobilfunknetzen)<br />
          Internet:{" "}
          <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer">
            www.vermittlerregister.info
          </a>
        </p>

        <h2>Schlichtungsstellen</h2>
        <p>
          Bei Streitigkeiten aus Versicherungsverträgen oder der Versicherungsvermittlung
          können Sie sich an folgende Schlichtungsstellen wenden:
        </p>
        <p>
          Versicherungsombudsmann e.V.<br />
          Postfach 08 06 32<br />
          10006 Berlin<br />
          <a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noopener noreferrer">
            www.versicherungsombudsmann.de
          </a>
        </p>
        <p>
          Ombudsmann Private Kranken- und Pflegeversicherung<br />
          Postfach 06 02 22<br />
          10052 Berlin<br />
          <a href="https://www.pkv-ombudsmann.de" target="_blank" rel="noopener noreferrer">
            www.pkv-ombudsmann.de
          </a>
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a><br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen. Davon unberührt bleibt der Verweis auf
          die oben genannten Schlichtungsstellen für Versicherungsvermittler.
        </p>

        <h2>Haftungsausschluss</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
          Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
          deren Betreiber verantwortlich.
        </p>
      </article>
    </div>
  );
}
