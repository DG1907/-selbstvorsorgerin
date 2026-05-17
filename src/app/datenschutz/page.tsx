import Link from "next/link";

export const metadata = {
  title: "Datenschutz – #selbstvorsorgerin",
  description: "Datenschutzerklärung von Doris Greinert, Provinzial Geschäftsstelle Düsseldorf.",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16 sm:py-24">
      <div className="mb-10">
        <Link href="/" className="text-xs text-gray-500 hover:text-pink-400 transition-colors">
          ← Zurück zur Startseite
        </Link>
      </div>

      <article className="prose-legal">
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          Doris Greinert<br />
          Neusser Str. 82<br />
          40219 Düsseldorf<br />
          Telefon: <a href="tel:+4921130066000">0211 300660-0</a><br />
          E-Mail: <a href="mailto:d.greinert@gs.provinzial.com">d.greinert@gs.provinzial.com</a>
        </p>

        <h2>2. Allgemeine Hinweise</h2>
        <p>
          Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung
          personenbezogener Daten auf dieser Website. Rechtsgrundlage ist die
          Datenschutz-Grundverordnung (DSGVO).
        </p>

        <h2>3. Hosting und Server-Logfiles</h2>
        <p>
          Diese Website wird gehostet bei:<br />
          Vercel Inc., 650 California Street, San Francisco, CA 94108, USA
        </p>
        <p>
          Beim Aufruf werden automatisch Informationen erfasst, die Ihr Browser übermittelt:
        </p>
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem</li>
          <li>Referrer URL</li>
        </ul>
        <p>
          Diese Daten werden zur Sicherstellung des Betriebs der Website verarbeitet
          (Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse an einem funktionierenden,
          sicheren Webauftritt).
        </p>
        <p>
          Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Mit Vercel besteht
          ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO.
        </p>

        <h2>4. Cookies und Einwilligung</h2>
        <p>Diese Website verwendet:</p>
        <p>
          <strong>a) Technisch notwendige Cookies</strong> (keine Einwilligung erforderlich,
          Art. 6 Abs. 1 lit. f DSGVO / § 25 Abs. 2 TTDSG)<br />
          Diese Cookies sind für den Betrieb der Website erforderlich.
        </p>
        <p>
          <strong>b) Optionale Cookies und externe Dienste</strong> (nur mit Ihrer Einwilligung,
          Art. 6 Abs. 1 lit. a DSGVO / § 25 Abs. 1 TTDSG)<br />
          Hierzu zählen Analyse-Tools und das eingebundene Buchungssystem SimplyBook.me.
        </p>
        <p>
          Sie können Ihre Einwilligung jederzeit über den Cookie-Banner widerrufen. Den Banner
          erreichen Sie über den Link{" "}
          <Link href="/" className="text-pink-400 hover:text-pink-300 underline underline-offset-2">
            „Cookie-Einstellungen"
          </Link>{" "}
          im Footer.
        </p>

        <h2>5. Analyse-Tools (Vercel Analytics)</h2>
        <p>
          Sofern Sie eingewilligt haben, nutzen wir Vercel Analytics zur anonymisierten
          Auswertung der Websitenutzung. Vercel Analytics setzt keine Cookies und speichert
          keine personenbezogenen Daten, die eine Identifizierung der Nutzer ermöglichen.
        </p>
        <p>
          Anbieter: Vercel Inc., 650 California Street, San Francisco, CA 94108, USA<br />
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
        </p>

        <h2>6. Online-Terminbuchung (SimplyBook.me)</h2>
        <p>
          Für die Online-Terminbuchung nutzen wir das Buchungssystem SimplyBook.me.
        </p>
        <p>
          Anbieter: SimplyBook.me Ltd., 21 Karaiskaki Str., Oasis Center, 3032 Limassol, Zypern
        </p>
        <p>
          Hosting: Die Server befinden sich bei OVH in Frankreich (EU). Backup-Server liegen
          bei Amazon und Google Cloud innerhalb der EU.
        </p>
        <p>Verarbeitete Daten bei Terminbuchung:</p>
        <ul>
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer (sofern angegeben)</li>
          <li>Gewählter Termin und Dienstleistung</li>
          <li>Optional: Ihre Anmerkungen zum Termin</li>
        </ul>
        <p>
          Zweck: Terminkoordination, Buchungsbestätigung, Terminerinnerung und
          Beratungsvorbereitung
        </p>
        <p>
          Rechtsgrundlage:
        </p>
        <ul>
          <li>
            Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) für die Buchungsabwicklung
          </li>
          <li>
            Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für die Einbindung des Buchungs-Widgets
            auf unserer Website
          </li>
        </ul>
        <p>
          Mit SimplyBook.me wurde ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO
          geschlossen. Weitere Informationen:{" "}
          <a href="https://simplybook.me/de/policy" target="_blank" rel="noopener noreferrer">
            simplybook.me/de/policy
          </a>
        </p>
        <p>
          <strong>Hinweis:</strong> Beim Laden des Buchungs-Widgets wird eine Verbindung zu den
          Servern von SimplyBook.me hergestellt. Dabei wird Ihre IP-Adresse übertragen. Das
          Widget wird daher erst geladen, nachdem Sie hierfür Ihre Einwilligung gegeben haben.
        </p>

        <h2>7. Kontaktaufnahme per E-Mail oder Telefon</h2>
        <p>
          Wenn Sie per E-Mail oder Telefon Kontakt aufnehmen, werden Ihre Angaben zur
          Bearbeitung der Anfrage und für eventuelle Anschlussfragen gespeichert
          (Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen Anfragen, sonst
          Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h2>8. Speicherdauer</h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck
          erforderlich ist oder gesetzliche Aufbewahrungspflichten (insb. § 147 AO, § 257 HGB)
          bestehen.
        </p>

        <h2>9. Ihre Rechte</h2>
        <p>Sie haben das Recht auf:</p>
        <ul>
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>
        <p>
          Zuständige Aufsichtsbehörde:<br />
          Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
          (LDI NRW)<br />
          Kavalleriestraße 2-4, 40213 Düsseldorf<br />
          Telefon: 0211 38424-0<br />
          <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">
            www.ldi.nrw.de
          </a>
        </p>

        <h2>10. Hinweis zur Vermittlertätigkeit</h2>
        <p>
          Im Rahmen einer konkreten Versicherungsberatung gelten zusätzlich die
          Datenschutzhinweise der Provinzial Versicherung AG, die Ihnen vor Vertragsabschluss
          separat ausgehändigt werden.
        </p>

        <h2>11. Aktualität</h2>
        <p>
          Diese Datenschutzerklärung hat den Stand <strong>15. Mai 2026</strong>. Durch
          Weiterentwicklung der Website oder geänderter rechtlicher Vorgaben kann es notwendig
          werden, diese Datenschutzerklärung anzupassen.
        </p>
      </article>
    </div>
  );
}
