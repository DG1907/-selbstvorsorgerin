"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const BOOKING_URL = "https://provinzialdorisgreinert.simplybook.it/v2/";

const nav = [
  { label: "Rechner", href: "/rechner" },
  { label: "Wissen", href: "/wissen" },
  { label: "Über mich", href: "/ueber-mich" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Booking Banner */}
      <div className="bg-pink-500/10 border-b border-pink-500/10 text-center text-sm py-2.5 px-4 flex items-center justify-center gap-3">
        <span className="text-gray-400 hidden sm:inline">Kostenlose Erstberatung verfügbar</span>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 font-semibold hover:text-pink-300 transition-colors text-xs tracking-wide"
        >
          Jetzt Termin buchen →
        </a>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-xl border-white/5"
            : "bg-black/20 backdrop-blur-md border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <span className="text-xl font-bold gradient-text tracking-tight">
              #selbstvorsorgerin
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-5 py-2.5 rounded-full bg-pink-500 text-white hover:bg-pink-400 transition-all duration-200 hover:shadow-lg hover:shadow-pink-500/25"
            >
              Beratung buchen
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/5 bg-[#080808] px-4 py-5 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-300 hover:text-pink-400 py-1 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold px-5 py-3 rounded-full bg-pink-500 text-white text-center hover:bg-pink-400 transition-colors"
            >
              Beratung buchen →
            </a>
          </div>
        )}
      </header>
    </>
  );
}
