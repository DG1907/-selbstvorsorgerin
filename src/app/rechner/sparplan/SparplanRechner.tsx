"use client";

import { useState, useMemo } from "react";
import InfoTooltip from "@/components/InfoTooltip";

interface Inputs {
  startkapital: number;
  monatlicheSparrate: number;
  laufzeit: number;
  rendite: number;
  gehaltsluecke: number;
  elternzeitPausen: number;
  inflationsRate: number;
}

const defaults: Inputs = {
  startkapital: 5000,
  monatlicheSparrate: 200,
  laufzeit: 30,
  rendite: 7,
  gehaltsluecke: 18,
  elternzeitPausen: 0,
  inflationsRate: 2.0,
};

function formatEur(n: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  hint,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  hint?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-sm font-bold text-pink-400">
          {unit === "€" ? formatEur(value) : `${value}${unit}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-[#2a2a2a] rounded-full appearance-none cursor-pointer accent-pink-500"
      />
      {hint && <p className="text-xs text-gray-600">{hint}</p>}
    </div>
  );
}

function ToggleOption({
  label,
  active,
  onToggle,
  tooltip,
  children,
}: {
  label: string;
  active: boolean;
  onToggle: () => void;
  tooltip: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className={`rounded-xl border p-4 transition-all duration-200 ${active ? "border-pink-500/40 bg-pink-950/20" : "border-[#2a2a2a] bg-[#0d0d0d]"}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-sm font-medium text-gray-200 leading-snug">{label}</span>
          <InfoTooltip content={tooltip} />
        </div>
        <button
          onClick={onToggle}
          className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${active ? "bg-pink-500" : "bg-[#3a3a3a]"}`}
          aria-pressed={active}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${active ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
      </div>
      {active && children && <div className="mt-4 pt-4 border-t border-[#2a2a2a]">{children}</div>}
    </div>
  );
}

function berechneEndkapital(
  startkapital: number,
  monatlicheSparrate: number,
  laufzeitMonate: number,
  monatlicheRendite: number
): number {
  let kapital = startkapital;
  for (let i = 0; i < laufzeitMonate; i++) {
    kapital = kapital * (1 + monatlicheRendite) + monatlicheSparrate;
  }
  return kapital;
}

export default function SparplanRechner() {
  const [inputs, setInputs] = useState<Inputs>(defaults);
  const [withInflation, setWithInflation] = useState(false);
  const [withTax, setWithTax] = useState(false);

  const set = (key: keyof Inputs) => (v: number) =>
    setInputs((prev) => ({ ...prev, [key]: v }));

  const result = useMemo(() => {
    const monatlicheRendite = inputs.rendite / 100 / 12;
    const laufzeitMonate = inputs.laufzeit * 12;
    const pauseMonate = inputs.elternzeitPausen * 12;

    const mitSparplan = berechneEndkapital(
      inputs.startkapital,
      inputs.monatlicheSparrate,
      laufzeitMonate,
      monatlicheRendite
    );

    const mitPause = berechneEndkapital(
      inputs.startkapital,
      inputs.monatlicheSparrate * 0.3,
      pauseMonate,
      monatlicheRendite
    );
    const nachPause = berechneEndkapital(
      mitPause,
      inputs.monatlicheSparrate,
      laufzeitMonate - pauseMonate,
      monatlicheRendite
    );

    const mannRente = inputs.monatlicheSparrate * (1 + inputs.gehaltsluecke / 100);
    const mannEndkapital = berechneEndkapital(
      inputs.startkapital,
      mannRente,
      laufzeitMonate,
      monatlicheRendite
    );

    const einzahlungenGesamt = inputs.startkapital + inputs.monatlicheSparrate * laufzeitMonate;
    const zinsertraege = mitSparplan - einzahlungenGesamt;

    // Steuer: Abgeltungssteuer 26,375% auf Gewinne nach Sparerpauschbetrag
    const sparerpauschbetrag = 1000 * inputs.laufzeit;
    const steuerpflichtigeGewinne = Math.max(0, zinsertraege - sparerpauschbetrag);
    const steuer = steuerpflichtigeGewinne * 0.26375;
    const nettoEndkapital = mitSparplan - steuer;

    // Inflation: Realer Wert (Kaufkraft)
    const inflationsFaktor = Math.pow(1 + inputs.inflationsRate / 100, inputs.laufzeit);
    const realerWert = mitSparplan / inflationsFaktor;
    const realerNettoWert = nettoEndkapital / inflationsFaktor;

    const basisEndkapital = withTax ? nettoEndkapital : mitSparplan;

    return {
      endkapital: Math.round(mitSparplan),
      endkapitalNetto: Math.round(nettoEndkapital),
      endkapitalReal: Math.round(withTax ? realerNettoWert : realerWert),
      endkapitalMitPause: Math.round(nachPause),
      mannEndkapital: Math.round(mannEndkapital),
      einzahlungenGesamt: Math.round(einzahlungenGesamt),
      zinsertraege: Math.round(zinsertraege),
      steuer: Math.round(steuer),
      pauseKosten: Math.round(mitSparplan - nachPause),
      gapKosten: Math.round(mannEndkapital - mitSparplan),
      basisEndkapital: Math.round(basisEndkapital),
      inflationsFaktor,
    };
  }, [inputs, withInflation, withTax]);

  const angezeigterWert = withInflation ? result.endkapitalReal : result.basisEndkapital;
  const maxVal = Math.max(result.endkapital, result.mannEndkapital, result.endkapitalMitPause);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="bg-[#111111] rounded-2xl border border-[#2a2a2a] p-6 space-y-6">
        <h2 className="text-lg font-bold text-white">Dein Sparplan</h2>

        <Slider
          label="Startkapital"
          value={inputs.startkapital}
          min={0}
          max={100000}
          step={500}
          unit="€"
          hint="Bereits vorhandenes Erspartes"
          onChange={set("startkapital")}
        />
        <Slider
          label="Monatliche Sparrate"
          value={inputs.monatlicheSparrate}
          min={25}
          max={2000}
          step={25}
          unit="€"
          hint="Tipp: Schon 100€/Monat können in 30 Jahren über 100.000€ werden"
          onChange={set("monatlicheSparrate")}
        />
        <Slider
          label="Anlagezeitraum"
          value={inputs.laufzeit}
          min={5}
          max={45}
          unit=" Jahre"
          onChange={set("laufzeit")}
        />
        <Slider
          label="Erwartete Rendite p.a."
          value={inputs.rendite}
          min={1}
          max={12}
          step={0.5}
          unit="%"
          hint="Historischer MSCI World Durchschnitt: ~7% nominal"
          onChange={set("rendite")}
        />

        <div className="border-t border-[#2a2a2a] pt-5 space-y-4">
          <h3 className="text-sm font-semibold text-gray-400">Frauen-spezifische Faktoren</h3>
          <Slider
            label="Elternzeit (reduzierte Sparrate)"
            value={inputs.elternzeitPausen}
            min={0}
            max={10}
            unit=" Jahre"
            hint="Während Elternzeit: nur 30% der normalen Sparrate angenommen"
            onChange={set("elternzeitPausen")}
          />
          <Slider
            label="Gender Pay Gap"
            value={inputs.gehaltsluecke}
            min={0}
            max={30}
            unit="%"
            hint="Deutschland 2024: durchschnittlich 18% bereinigter Gender Pay Gap"
            onChange={set("gehaltsluecke")}
          />
        </div>

        {/* Erweiterte Optionen */}
        <div className="border-t border-[#2a2a2a] pt-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-400">Realitäts-Check</h3>

          <ToggleOption
            label="Inflation berücksichtigen"
            active={withInflation}
            onToggle={() => setWithInflation((v) => !v)}
            tooltip={
              <div>
                <p className="font-semibold text-white mb-2">Was ist Inflation?</p>
                <p className="text-gray-400 text-xs">
                  Inflation bedeutet, dass Geld mit der Zeit an Kaufkraft verliert. Bei 2% Inflation
                  pro Jahr ist dein Geld in 30 Jahren nur noch halb so viel wert – du kannst dir
                  weniger dafür kaufen. Der Rechner zeigt dir den realen Wert in heutiger Kaufkraft.
                </p>
                <p className="text-pink-400 text-xs mt-2 font-medium">
                  Historische Inflation in Deutschland: ca. 2% p.a.
                </p>
              </div>
            }
          >
            <Slider
              label="Inflationsrate"
              value={inputs.inflationsRate}
              min={0.5}
              max={5}
              step={0.5}
              unit="%"
              hint="EZB-Zielrate: 2% p.a."
              onChange={set("inflationsRate")}
            />
          </ToggleOption>

          <ToggleOption
            label="Zukünftige Steuerbelastung berücksichtigen"
            active={withTax}
            onToggle={() => setWithTax((v) => !v)}
            tooltip={
              <div>
                <p className="font-semibold text-white mb-2">Abgeltungssteuer bei ETFs</p>
                <p className="text-gray-400 text-xs mb-2">
                  Auf Gewinne aus ETFs fällt die <strong className="text-white">Abgeltungssteuer</strong> an:
                  25% + 5,5% Solidaritätszuschlag = <strong className="text-pink-400">26,375%</strong> auf
                  alle Erträge über dem Sparerpauschbetrag.
                </p>
                <p className="text-gray-400 text-xs mb-2">
                  <strong className="text-white">Sparerpauschbetrag:</strong> 1.000€/Jahr (Einzelperson) –
                  bis zu dieser Grenze sind Gewinne steuerfrei.
                </p>
                <p className="text-gray-400 text-xs">
                  <strong className="text-white">Ertragsanteilbesteuerung</strong> gilt bei privaten
                  Rentenversicherungen: Nur ein kleiner Anteil der Auszahlung ist steuerpflichtig
                  (z.B. 17% bei Rentenbeginn mit 67). Dein persönlicher Steuersatz wird darauf angewendet.
                </p>
              </div>
            }
          />
        </div>
      </div>

      {/* Results */}
      <div className="space-y-5">
        <div className="bg-gradient-to-br from-pink-600 to-pink-900 rounded-2xl p-6 text-white">
          <p className="text-pink-200 text-sm mb-1">
            {withInflation
              ? `Realer Wert nach ${inputs.laufzeit} Jahren (Kaufkraft heute)`
              : `Dein Endkapital nach ${inputs.laufzeit} Jahren`}
          </p>
          <div className="text-5xl font-bold mb-1">{formatEur(angezeigterWert)}</div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-pink-200">
            <span>Eingezahlt: {formatEur(result.einzahlungenGesamt)}</span>
            <span>Zinsen: {formatEur(result.zinsertraege)}</span>
          </div>
          {(withTax || withInflation) && (
            <div className="mt-3 pt-3 border-t border-pink-400/30 flex flex-wrap gap-x-4 gap-y-1 text-xs text-pink-300">
              {withTax && <span>Steuer abgezogen: {formatEur(result.steuer)}</span>}
              {withInflation && (
                <span>Nominal: {formatEur(withTax ? result.endkapitalNetto : result.endkapital)}</span>
              )}
            </div>
          )}
        </div>

        {withTax && (
          <div className="bg-[#111111] rounded-2xl border border-yellow-900/40 p-5">
            <p className="text-sm font-semibold text-yellow-400 mb-2">Steuerrechnung (ETF)</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Gesamte Gewinne</span>
                <span className="text-white">{formatEur(result.zinsertraege)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Sparerpauschbetrag ({inputs.laufzeit} Jahre × 1.000€)</span>
                <span className="text-green-400">− {formatEur(Math.min(result.zinsertraege, 1000 * inputs.laufzeit))}</span>
              </div>
              <div className="flex justify-between text-gray-400 pt-1 border-t border-[#2a2a2a]">
                <span>Abgeltungssteuer (26,375%)</span>
                <span className="text-red-400">− {formatEur(result.steuer)}</span>
              </div>
              <div className="flex justify-between font-semibold pt-1 border-t border-[#2a2a2a]">
                <span className="text-white">Netto-Endkapital</span>
                <span className="text-pink-400">{formatEur(result.endkapitalNetto)}</span>
              </div>
            </div>
          </div>
        )}

        <div className="bg-[#111111] rounded-2xl border border-[#2a2a2a] p-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-5">Vergleich: Was kostet dich die Situation als Frau?</h3>
          <div className="space-y-4">
            {[
              { label: "Dein Sparplan", value: result.endkapital, color: "bg-pink-500" },
              {
                label: `Mit Elternzeit (${inputs.elternzeitPausen}J. reduziert)`,
                value: result.endkapitalMitPause,
                color: "bg-pink-800",
              },
              {
                label: `Vergleichsmann (+${inputs.gehaltsluecke}% Gehalt)`,
                value: result.mannEndkapital,
                color: "bg-[#3a3a3a]",
              },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{bar.label}</span>
                  <span className="font-semibold text-white">{formatEur(bar.value)}</span>
                </div>
                <div className="h-5 bg-[#2a2a2a] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${bar.color} rounded-full transition-all duration-700`}
                    style={{ width: `${(bar.value / maxVal) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {inputs.elternzeitPausen > 0 && (
          <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-2xl p-5">
            <p className="text-sm font-semibold text-yellow-400 mb-2">
              Was dich die Elternzeit kostet
            </p>
            <p className="text-2xl font-bold text-yellow-300">{formatEur(result.pauseKosten)}</p>
            <p className="text-xs text-yellow-600 mt-1">
              Entgangenes Endkapital durch {inputs.elternzeitPausen} Jahre reduzierte Sparrate – das ist der Preis, den das System von dir verlangt.
            </p>
          </div>
        )}

        {inputs.gehaltsluecke > 0 && (
          <div className="bg-pink-950/30 border border-pink-900/50 rounded-2xl p-5">
            <p className="text-sm font-semibold text-pink-400 mb-2">
              Was dir der Gender Pay Gap kostet
            </p>
            <p className="text-2xl font-bold text-pink-300">{formatEur(result.gapKosten)}</p>
            <p className="text-xs text-pink-600 mt-1">
              Das ist die Differenz zum Vergleichsmann mit {inputs.gehaltsluecke}% höherem Gehalt – strukturelle Ungleichheit hat einen konkreten Preis.
            </p>
          </div>
        )}

        <p className="text-xs text-gray-600 leading-relaxed">
          Modellrechnung zu Bildungszwecken. Steuerberechnung vereinfacht (keine Vorabpauschale, keine Kirchensteuer).
          Renditen der Vergangenheit garantieren keine zukünftigen Ergebnisse. Keine individuelle Finanzberatung.
        </p>
      </div>
    </div>
  );
}
