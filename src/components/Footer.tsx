"use client";

import Link from "next/link";
import { useCookieConsent } from "@/context/CookieConsentContext";

export default function Footer() {
  const { openBanner } = useCookieConsent();

  return (
    <footer className="border-t border-[#2a2a2a] bg-[#111111] mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold gradient-text">#selbstvorsorgerin</span>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Finanzielle Unabhängigkeit ist kein Luxus – sie ist ein Recht.
              Doris Greinert hilft Frauen, fundierte Entscheidungen für ihre Zukunft zu treffen.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 mb-3">Tools & Wissen</h3>
            <ul className="space-y-2">
              <li><Link href="/rechner/rentenluecke" className="text-sm text-gray-500 hover:text-pink-400 transition-colors">Rentenlücken-Rechner</Link></li>
              <li><Link href="/rechner/sparplan" className="text-sm text-gray-500 hover:text-pink-400 transition-colors">Sparplan-Rechner</Link></li>
              <li><Link href="/wissen" className="text-sm text-gray-500 hover:text-pink-400 transition-colors">Wissensbereich</Link></li>
              <li><Link href="/wissen/gender-pension-gap" className="text-sm text-gray-500 hover:text-pink-400 transition-colors">Gender Pension Gap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 mb-3">Kontakt & Beratung</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://provinzialdorisgreinert.simplybook.it/v2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-pink-400 transition-colors"
                >
                  Termin buchen →
                </a>
              </li>
              <li>
                <a href="mailto:d.greinert@gs.provinzial.com" className="text-sm text-gray-500 hover:text-pink-400 transition-colors">
                  d.greinert@gs.provinzial.com
                </a>
              </li>
              <li>
                <a href="tel:+4921130066000" className="text-sm text-gray-500 hover:text-pink-400 transition-colors">
                  0211 300660-0
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2a2a2a] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Doris Greinert · Provinzial Geschäftsstelle Düsseldorf ·
            Keine individuelle Finanzberatung – nur Bildung.
          </p>
          <nav className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/impressum" className="text-xs text-gray-500 hover:text-pink-400 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-xs text-gray-500 hover:text-pink-400 transition-colors">
              Datenschutz
            </Link>
            <button
              onClick={openBanner}
              className="text-xs text-gray-500 hover:text-pink-400 transition-colors cursor-pointer"
            >
              Cookie-Einstellungen
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
