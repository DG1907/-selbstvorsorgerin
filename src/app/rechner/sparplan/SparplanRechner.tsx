"use client";

import { useState, useMemo } from "react";

interface Inputs {
  startkapital: number;
  monatlicheSparrate: number;
  laufzeit: number;
  rendite: number;
  gehaltsluecke: number;
  elternzeitPausen: number;
}

const defaults: Inputs = {
  startkapital: 5000,
  monatlicheSparrate: 200,
  laufzeit: 30,
  rendite: 7,
  gehaltsluecke: 18,
  elternzeitPausen: 0,
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

    return {
      endkapital: Math.round(mitSparplan),
      endkapitalMitPause: Math.round(nachPause),
      mannEndkapital: Math.round(mannEndkapital),
      einzahlungenGesamt: Math.round(einzahlungenGesamt),
      zinsertraege: Math.round(zinsertraege),
      pauseKosten: Math.round(mitSparplan - nachPause),
      gapKosten: Math.round(mannEndkapital - mitSparplan),
    };
  }, [inputs]);

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
          hint="Historischer MSCI World Durchschnitt: ~7% nach Inflation"
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
      </div>

      {/* Results */}
      <div className="space-y-5">
        <div className="bg-gradient-to-br from-pink-600 to-pink-900 rounded-2xl p-6 text-white">
          <p className="text-pink-200 text-sm mb-1">Dein Endkapital nach {inputs.laufzeit} Jahren</p>
          <div className="text-5xl font-bold mb-1">{formatEur(result.endkapital)}</div>
          <div className="flex gap-4 mt-3 text-sm text-pink-200">
            <span>Eingezahlt: {formatEur(result.einzahlungenGesamt)}</span>
            <span>Zinsen: {formatEur(result.zinsertraege)}</span>
          </div>
        </div>

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
          Modellrechnung zu Bildungszwecken. Renditen der Vergangenheit garantieren keine zukünftigen Ergebnisse.
          Keine individuelle Finanzberatung.
        </p>
      </div>
    </div>
  );
}
