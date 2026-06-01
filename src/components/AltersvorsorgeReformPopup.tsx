"use client";

import { useState, useEffect } from "react";

const BOOKING_URL = "https://provinzialdorisgreinert.simplybook.it/v2/";

const TABS = [
  { id: "was", label: "Was ändert sich?" },
  { id: "depot", label: "Altersvorsorgedepot" },
  { id: "foerderung", label: "Neue Förderung" },
  { id: "frauen", label: "Für Frauen" },
];

export default function AltersvorsorgeReformPopup() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("was");

  // ESC-Taste schließt das Popup
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Scroll sperren wenn offen
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Trigger-Banner ── */}
      <button
        onClick={() => setOpen(true)}
        className="group w-full flex items-center justify-between gap-4 bg-gradient-to-r from-pink-950/60 to-pink-900/30 border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 px-6 py-4 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 text-xs font-bold uppercase tracking-widest bg-pink-500 text-white px-2.5 py-1 rounded-full">
            NEU ab 2027
          </span>
          <span className="text-white font-semibold text-sm sm:text-base">
            Altersvorsorge-Reform: Was Frauen jetzt wissen müssen
          </span>
        </div>
        <span className="text-pink-400 text-sm font-medium flex-shrink-0 group-hover:translate-x-1 transition-transform">
          Mehr erfahren →
        </span>
      </button>

      {/* ── Modal ── */}
      {open && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal Box */}
          <div className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-[#141414] border border-[#2a2a2a] rounded-2xl shadow-2xl flex flex-col overflow-hidden">

            {/* Header */}
            <div className="flex-shrink-0 bg-gradient-to-r from-pink-950/80 to-[#141414] px-6 py-5 border-b border-[#2a2a2a]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold uppercase tracking-widest bg-pink-500 text-white px-2 py-0.5 rounded-full">
                      Reform ab 01.01.2027
                    </span>
                    <span className="text-xs text-gray-500">Bundesrat beschlossen Mai 2026</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    Altersvorsorge-Reform 2027
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Riester wird abgelöst – was das für dich bedeutet
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-white transition-colors text-2xl leading-none flex-shrink-0 mt-1"
                  aria-label="Schließen"
                >
                  ×
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mt-4 overflow-x-auto pb-0.5 scrollbar-hide">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-pink-500 text-white"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollbarer Inhalt */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5 text-sm leading-relaxed">

              {/* ── TAB: Was ändert sich? ── */}
              {activeTab === "was" && (
                <div className="space-y-5">
                  <InfoBox color="pink">
                    <strong className="text-white">Das Wichtigste in einem Satz:</strong>{" "}
                    Riester wird ab 01.01.2027 durch das neue{" "}
                    <strong className="text-pink-300">Altersvorsorgedepot</strong> abgelöst –
                    flexibler, renditestärker und mit besserer Förderung.
                  </InfoBox>

                  <Section title="Was kommt NEU?" icon="🆕">
                    <ul className="space-y-2">
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">→</span><span>Das <strong className="text-white">Altersvorsorgedepot</strong> ersetzt den Riester-Vertrag als staatlich gefördertes Produkt</span></li>
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">→</span><span>Investitionen in <strong className="text-white">ETFs und Aktien</strong> möglich – deutlich mehr Rendite als klassischer Riester</span></li>
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">→</span><span><strong className="text-white">Keine Beitragspflicht</strong> mehr – du entscheidest, wie viel und wann du einzahlst</span></li>
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">→</span><span><strong className="text-white">Selbstständige</strong> können erstmals vollständig teilnehmen</span></li>
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">→</span><span>Flexiblere <strong className="text-white">Auszahlungsoptionen</strong> – auch Auszahlplan oder Teilentnahme möglich</span></li>
                    </ul>
                  </Section>

                  <Section title="Was passiert mit meinem Riester?" icon="❓">
                    <InfoBox color="green">
                      <strong className="text-white">Bestehende Riester-Verträge bleiben vollständig geschützt</strong> –
                      du verlierst keine erhaltenen Zulagen oder Steuervorteile.
                      Du kannst freiwillig in das neue System wechseln oder deinen Vertrag
                      einfach weiterführen.
                    </InfoBox>
                    <ul className="space-y-2 mt-3">
                      <li className="flex gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>Riester-Verträge laufen weiter wie bisher</span></li>
                      <li className="flex gap-2"><span className="text-green-400 flex-shrink-0">✓</span><span>Wechsel ins neue System ohne Verlust bisheriger Zulagen möglich</span></li>
                      <li className="flex gap-2"><span className="text-yellow-400 flex-shrink-0">!</span><span>Neue Riester-Abschlüsse sind ab 31.12.2026 nicht mehr möglich</span></li>
                    </ul>
                  </Section>

                  <Section title="Zeitplan" icon="📅">
                    <div className="space-y-2">
                      {[
                        { date: "Mai 2026", text: "Bundesrat hat das Gesetz beschlossen", done: true },
                        { date: "31.12.2026", text: "Letzter Tag für neue Riester-Abschlüsse", done: false },
                        { date: "01.01.2027", text: "Neues Altersvorsorgedepot startet", done: false },
                        { date: "Ab 2027", text: "Alle Anbieter müssen neue Produkte bereitstellen", done: false },
                      ].map((item) => (
                        <div key={item.date} className="flex gap-3 items-start">
                          <span className={`text-xs font-bold flex-shrink-0 mt-0.5 ${item.done ? "text-green-400" : "text-pink-400"}`}>
                            {item.date}
                          </span>
                          <span className="text-gray-300">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </Section>
                </div>
              )}

              {/* ── TAB: Altersvorsorgedepot ── */}
              {activeTab === "depot" && (
                <div className="space-y-5">
                  <Section title="Das neue Altersvorsorgedepot" icon="💼">
                    <p className="text-gray-400 mb-3">
                      Das Altersvorsorgedepot ist ein staatlich gefördertes Wertpapierdepot –
                      kein Versicherungsprodukt. Du investierst direkt in ETFs oder Fonds
                      und erhältst dafür staatliche Zulagen.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { label: "Standard-Depot", desc: "ETFs & Aktien, max. 1,0% Kosten p.a., kein Kapitalgarantie", badge: "Renditestark" },
                        { label: "Mit 80% Garantie", desc: "80% des eingezahlten Kapitals garantiert bei Rentenbeginn", badge: "Ausgewogen" },
                        { label: "Mit 100% Garantie", desc: "Volles Kapital garantiert – wie klassischer Riester", badge: "Sicher" },
                      ].map((p) => (
                        <div key={p.label} className="rounded-xl border border-[#2a2a2a] bg-white/[0.02] p-3">
                          <span className="text-xs text-pink-400 font-semibold">{p.badge}</span>
                          <p className="text-white font-semibold text-sm mt-1">{p.label}</p>
                          <p className="text-gray-500 text-xs mt-1">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </Section>

                  <Section title="Auszahlungsoptionen ab Renteneintritt" icon="💰">
                    <ul className="space-y-2">
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">1.</span><span><strong className="text-white">Leibrente</strong> – monatliche Zahlung auf Lebenszeit, mit optionaler Rentengarantiezeit</span></li>
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">2.</span><span><strong className="text-white">Auszahlplan</strong> – flexible monatliche Entnahmen, Restguthaben vererbbar</span></li>
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">3.</span><span><strong className="text-white">Teilentnahme</strong> – einmalig bis zu 30% des Kapitals bei Rentenbeginn</span></li>
                    </ul>
                    <InfoBox color="blue" className="mt-3">
                      <strong className="text-white">Vererbbarkeit:</strong> Beim Auszahlplan ist das Restguthaben
                      nach dem Tod an Erben oder den Partner übertragbar – ein großes Plus gegenüber der reinen Leibrente.
                    </InfoBox>
                  </Section>

                  <Section title="Kostenobergrenze" icon="⚖️">
                    <p className="text-gray-400">
                      Gesetzlich festgelegte Maximalkosten:{" "}
                      <strong className="text-white">1,0% effektive Jahreskosten</strong> –
                      deutlich günstiger als bisherige Riester-Produkte, die oft 2-3% kosteten.
                    </p>
                  </Section>
                </div>
              )}

              {/* ── TAB: Neue Förderung ── */}
              {activeTab === "foerderung" && (
                <div className="space-y-5">
                  <Section title="Grundzulage – neues System" icon="🎁">
                    <p className="text-gray-400 mb-3">
                      Die Förderung ist jetzt <strong className="text-white">beitragsabhängig</strong> –
                      je mehr du einzahlst, desto mehr Zulage bekommst du:
                    </p>
                    <div className="rounded-xl border border-[#2a2a2a] overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-white/5 text-gray-400">
                            <th className="text-left px-4 py-2.5 font-medium">Dein Beitrag/Jahr</th>
                            <th className="text-left px-4 py-2.5 font-medium">Staatliche Zulage</th>
                            <th className="text-left px-4 py-2.5 font-medium">Förderquote</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-[#2a2a2a]">
                            <td className="px-4 py-2.5 text-gray-300">bis 360 €/Jahr</td>
                            <td className="px-4 py-2.5 text-green-400 font-semibold">50% → max. 180 €</td>
                            <td className="px-4 py-2.5 text-gray-400">50%</td>
                          </tr>
                          <tr className="border-t border-[#2a2a2a]">
                            <td className="px-4 py-2.5 text-gray-300">360–1.800 €/Jahr</td>
                            <td className="px-4 py-2.5 text-green-400 font-semibold">25% → max. 360 €</td>
                            <td className="px-4 py-2.5 text-gray-400">25%</td>
                          </tr>
                          <tr className="border-t border-[#2a2a2a] bg-pink-950/20">
                            <td className="px-4 py-2.5 text-white font-semibold">Gesamt max.</td>
                            <td className="px-4 py-2.5 text-pink-400 font-bold">540 €/Jahr</td>
                            <td className="px-4 py-2.5 text-gray-400">—</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">Mindestbeitrag: 120 €/Jahr (10 €/Monat) für jede Förderung</p>
                  </Section>

                  <Section title="Kinderzulage & Boni" icon="👶">
                    <div className="space-y-3">
                      {[
                        { label: "Kinderzulage", amount: "300 €/Kind/Jahr", note: "Bereits ab 25 €/Monat Eigenbeitrag" },
                        { label: "Geringverdiener-Bonus", amount: "+ 175 €/Jahr", note: "Bei Einkommen unter 26.250 € brutto – besonders relevant für Teilzeit!" },
                        { label: "Berufseinsteiger-Bonus", amount: "+ 200 € (einmalig)", note: "Bei Abschluss vor dem 25. Geburtstag" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-start justify-between gap-3 rounded-xl border border-[#2a2a2a] bg-white/[0.02] px-4 py-3">
                          <div>
                            <p className="text-white font-semibold text-sm">{item.label}</p>
                            <p className="text-gray-500 text-xs mt-0.5">{item.note}</p>
                          </div>
                          <span className="text-pink-400 font-bold text-sm flex-shrink-0">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </Section>

                  <Section title="Rechenbeispiel" icon="🧮">
                    <InfoBox color="pink">
                      <p className="text-white font-semibold mb-2">Mutter in Teilzeit, 1 Kind, Einkommen 22.000 € brutto:</p>
                      <div className="space-y-1 text-gray-300">
                        <div className="flex justify-between"><span>Eigenbeitrag (30 €/Monat)</span><span>360 €</span></div>
                        <div className="flex justify-between"><span>Grundzulage (50%)</span><span className="text-green-400">+ 180 €</span></div>
                        <div className="flex justify-between"><span>Kinderzulage</span><span className="text-green-400">+ 300 €</span></div>
                        <div className="flex justify-between"><span>Geringverdiener-Bonus</span><span className="text-green-400">+ 175 €</span></div>
                        <div className="flex justify-between font-bold text-white border-t border-white/10 pt-1 mt-1">
                          <span>Gesamteinzahlung ins Depot</span>
                          <span className="text-pink-300">1.015 €/Jahr</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Davon zahlst du nur 360 € selbst – der Staat steuert 655 € bei (64% Förderquote!)</p>
                      </div>
                    </InfoBox>
                  </Section>
                </div>
              )}

              {/* ── TAB: Für Frauen ── */}
              {activeTab === "frauen" && (
                <div className="space-y-5">
                  <InfoBox color="pink">
                    <strong className="text-white">Warum ist das besonders wichtig für Frauen?</strong><br />
                    Frauen sind bei der Altersvorsorge doppelt benachteiligt: geringere Einkommen durch
                    Teilzeit und Elternzeit <em>und</em> längere Lebenserwartung. Die Reform bietet
                    echte Chancen – wenn man sie richtig nutzt.
                  </InfoBox>

                  <Section title="Gute Nachrichten für Frauen" icon="✅">
                    <ul className="space-y-3">
                      {[
                        { title: "Elternzeit schützt die Förderung", text: "Während der Elternzeit läuft die staatliche Förderung weiter – Beitragspausen kosten dir keine Zulagen." },
                        { title: "Teilzeit = Geringverdiener-Bonus", text: "Bei Einkommen unter 26.250 € brutto gibt es 175 € Extra-Bonus. Viele Teilzeit-Frauen profitieren direkt." },
                        { title: "Kinderzulagen summieren sich", text: "Bei 2 Kindern: 600 €/Jahr Kinderzulagen. Bei 30 €/Monat Eigenbeitrag zahlst du fast nichts selbst." },
                        { title: "Krankengeld & Arbeitslosengeld I", text: "Auch während Krankengeldbezug oder Arbeitslosigkeit (ALG I) bleibt die Förderberechtigung erhalten." },
                        { title: "Partnerzulage für Nicht-Erwerbstätige", text: "Wenn du vorübergehend nicht arbeitest (z.B. Kinderbetreuung), kann dein Partner die Förderung auf dein Konto überleiten lassen." },
                        { title: "Kein Mindestbeitrag für Grundstruktur", text: "Schon 10 €/Monat reichen für die staatliche Förderung – zugänglich auch bei kleinem Budget." },
                      ].map((item) => (
                        <li key={item.title} className="flex gap-3">
                          <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                          <div>
                            <p className="text-white font-semibold">{item.title}</p>
                            <p className="text-gray-400 text-xs mt-0.5">{item.text}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Section>

                  <Section title="Was du jetzt tun solltest" icon="🎯">
                    <ul className="space-y-2">
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">1.</span><span className="text-gray-300">Bestehenden Riester-Vertrag prüfen: Weiterlaufen lassen oder wechseln?</span></li>
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">2.</span><span className="text-gray-300">Eigenen Förderbetrag berechnen (Einkommen, Kinder, Beitragshöhe)</span></li>
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">3.</span><span className="text-gray-300">Ab Januar 2027: neues Altersvorsorgedepot abschließen</span></li>
                      <li className="flex gap-2"><span className="text-pink-400 flex-shrink-0">4.</span><span className="text-gray-300">Kombination mit betrieblicher Altersvorsorge prüfen</span></li>
                    </ul>
                    <div className="mt-4 rounded-xl bg-pink-950/30 border border-pink-500/20 p-4">
                      <p className="text-pink-300 text-sm font-semibold mb-2">
                        Ich berechne deine persönliche Förderung kostenlos.
                      </p>
                      <p className="text-gray-400 text-xs mb-3">
                        In einem 30-minütigen Gespräch zeige ich dir genau, wie viel Förderung
                        du ab 2027 bekommst und wie du das Beste daraus machst.
                      </p>
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="inline-block px-5 py-2.5 rounded-full bg-pink-500 text-white font-semibold text-sm hover:bg-pink-400 transition-colors"
                      >
                        Kostenloses Beratungsgespräch →
                      </a>
                    </div>
                  </Section>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 border-t border-[#2a2a2a] px-6 py-3 flex items-center justify-between gap-3 bg-[#0f0f0f]">
              <p className="text-xs text-gray-600">
                Quellen: Bundesregierung, Bundesfinanzministerium, GDV · Stand: Mai 2026
              </p>
              <button
                onClick={() => setOpen(false)}
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── Kleine Hilfs-Komponenten ──

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-white font-bold mb-3">
        <span>{icon}</span>
        {title}
      </h3>
      {children}
    </div>
  );
}

function InfoBox({ color, children, className }: { color: "pink" | "green" | "blue"; children: React.ReactNode; className?: string }) {
  const styles = {
    pink: "bg-pink-950/30 border-pink-500/20 text-gray-300",
    green: "bg-green-950/30 border-green-500/20 text-gray-300",
    blue: "bg-blue-950/30 border-blue-500/20 text-gray-300",
  };
  return (
    <div className={`rounded-xl border p-4 text-sm leading-relaxed ${styles[color]} ${className ?? ""}`}>
      {children}
    </div>
  );
}
