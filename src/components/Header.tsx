"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { label: "Rechner", href: "/rechner" },
  { label: "Wissen", href: "/wissen" },
  { label: "Über uns", href: "/ueber-uns" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold gradient-text">
            Selbstvorsorgerin
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-pink-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/rechner"
            className="text-sm font-semibold px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors"
          >
            Jetzt berechnen
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#1a1a1a]"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden border-t border-[#2a2a2a] bg-[#0a0a0a] px-4 py-4 flex flex-col gap-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-300 hover:text-pink-400 py-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/rechner"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold px-4 py-2 rounded-full bg-pink-500 text-white text-center hover:bg-pink-600"
          >
            Jetzt berechnen
          </Link>
        </div>
      )}
    </header>
  );
}
