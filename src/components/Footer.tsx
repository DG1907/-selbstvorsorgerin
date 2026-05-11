import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold gradient-text">Selbstvorsorgerin</span>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Finanzielle Unabhängigkeit ist kein Luxus – sie ist ein Recht.
              Wir helfen Frauen, fundierte Entscheidungen für ihre Zukunft zu treffen.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/rechner/rentenluecke" className="text-sm text-gray-500 hover:text-violet-700">Rentenlücken-Rechner</Link></li>
              <li><Link href="/rechner/sparplan" className="text-sm text-gray-500 hover:text-violet-700">Sparplan-Rechner</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Wissen</h3>
            <ul className="space-y-2">
              <li><Link href="/wissen" className="text-sm text-gray-500 hover:text-violet-700">Alle Artikel</Link></li>
              <li><Link href="/wissen/gender-pension-gap" className="text-sm text-gray-500 hover:text-violet-700">Gender Pension Gap</Link></li>
              <li><Link href="/wissen/etf-einsteiger" className="text-sm text-gray-500 hover:text-violet-700">ETFs für Einsteiger</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Selbstvorsorgerin. Kein Finanzierungsberatung – nur Bildung.
          </p>
          <p className="text-xs text-gray-400">
            <Link href="/impressum" className="hover:text-violet-700">Impressum</Link>
            {" · "}
            <Link href="/datenschutz" className="hover:text-violet-700">Datenschutz</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
