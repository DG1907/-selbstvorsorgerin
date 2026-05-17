"use client";

import { useState } from "react";
import Link from "next/link";
import { useCookieConsent } from "@/context/CookieConsentContext";

function Toggle({ checked, onChange, disabled }: { checked: boolean; onChange?: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={disabled ? undefined : onChange}
      disabled={disabled}
      aria-pressed={checked}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${
        checked ? "bg-pink-500" : "bg-[#3a3a3a]"
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function CookieBanner() {
  const { bannerOpen, closeBanner, updateConsent } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [external, setExternal] = useState(false);

  if (!bannerOpen) return null;

  const acceptAll = () => updateConsent({ analytics: true, external: true, decided: true });
  const acceptNecessary = () => updateConsent({ analytics: false, external: false, decided: true });
  const saveSelection = () => updateConsent({ analytics, external, decided: true });

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-end justify-center pointer-events-none">
      {/* Backdrop only in details mode */}
      {showDetails && (
        <div
          className="absolute inset-0 bg-black/60 pointer-events-auto"
          onClick={() => setShowDetails(false)}
        />
      )}

      <div className={`relative pointer-events-auto w-full ${showDetails ? "max-w-lg mx-4 mb-4 sm:mb-8 rounded-2xl" : "rounded-t-2xl sm:rounded-2xl sm:max-w-2xl sm:mx-4 sm:mb-6"} bg-[#141414] border border-[#2a2a2a] shadow-2xl overflow-hidden transition-all duration-300`}>

        {!showDetails ? (
          /* ── Banner (kompakt) ── */
          <div className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl flex-shrink-0">🍪</span>
              <div>
                <p className="text-white font-semibold mb-1">Cookies & Datenschutz</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wir verwenden Cookies und ähnliche Technologien, um die Website zu betreiben und –
                  mit Ihrer Einwilligung – Inhalte zu verbessern und externe Dienste einzubinden.{" "}
                  <Link href="/datenschutz" className="text-pink-400 hover:text-pink-300 underline underline-offset-2" onClick={closeBanner}>
                    Datenschutzerklärung
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={acceptAll}
                className="flex-1 px-5 py-3 rounded-xl bg-pink-500 text-white font-semibold text-sm hover:bg-pink-400 transition-colors"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={acceptNecessary}
                className="flex-1 px-5 py-3 rounded-xl bg-[#2a2a2a] text-white font-semibold text-sm hover:bg-[#333] border border-[#3a3a3a] transition-colors"
              >
                Nur notwendige
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 px-5 py-3 rounded-xl bg-[#2a2a2a] text-white font-semibold text-sm hover:bg-[#333] border border-[#3a3a3a] transition-colors"
              >
                Einstellungen
              </button>
            </div>
          </div>
        ) : (
          /* ── Detailansicht ── */
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-xl leading-none"
              aria-label="Schließen"
            >
              ×
            </button>

            <p className="text-white font-bold text-lg mb-1">Cookie-Einstellungen</p>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Wählen Sie, welche Cookies Sie zulassen möchten. Notwendige Cookies können nicht
              deaktiviert werden, da sie für den Betrieb der Website erforderlich sind.
            </p>

            {/* Kategorie 1: Notwendig */}
            <div className="rounded-xl border border-[#2a2a2a] p-4 mb-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-white font-semibold text-sm">Notwendig</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Technisch erforderlich für den Betrieb der Website. Können nicht deaktiviert werden.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-pink-400 font-medium">Immer aktiv</span>
                  <Toggle checked={true} disabled />
                </div>
              </div>
            </div>

            {/* Kategorie 2: Analyse */}
            <div className={`rounded-xl border p-4 mb-3 transition-colors ${analytics ? "border-pink-500/30 bg-pink-950/10" : "border-[#2a2a2a]"}`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Analyse</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Vercel Analytics — anonymisierte Auswertung der Websitenutzung. Keine
                    personenbezogenen Daten, keine Cookies.
                  </p>
                </div>
                <Toggle checked={analytics} onChange={() => setAnalytics((v) => !v)} />
              </div>
            </div>

            {/* Kategorie 3: Externe Dienste */}
            <div className={`rounded-xl border p-4 mb-5 transition-colors ${external ? "border-pink-500/30 bg-pink-950/10" : "border-[#2a2a2a]"}`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Externe Dienste</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    SimplyBook.me Buchungssystem — benötigt für den Online-Terminkalender.
                    Server innerhalb der EU (Frankreich/OVH).
                  </p>
                </div>
                <Toggle checked={external} onChange={() => setExternal((v) => !v)} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={saveSelection}
                className="flex-1 px-5 py-3 rounded-xl bg-pink-500 text-white font-semibold text-sm hover:bg-pink-400 transition-colors"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 px-5 py-3 rounded-xl bg-[#2a2a2a] text-white font-semibold text-sm hover:bg-[#333] border border-[#3a3a3a] transition-colors"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={acceptNecessary}
                className="flex-1 px-5 py-3 rounded-xl bg-[#2a2a2a] text-white font-semibold text-sm hover:bg-[#333] border border-[#3a3a3a] transition-colors"
              >
                Nur notwendige
              </button>
            </div>

            <p className="text-xs text-gray-600 mt-4 text-center">
              Sie können Ihre Einwilligung jederzeit über „Cookie-Einstellungen" im Footer widerrufen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
